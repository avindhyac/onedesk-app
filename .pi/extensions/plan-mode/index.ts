import type { ExtensionAPI, ExtensionContext } from "@earendil-works/pi-coding-agent";
import type { AgentMessage } from "@earendil-works/pi-agent-core";
import type { AssistantMessage, TextContent } from "@earendil-works/pi-ai";

/**
 * Project-local Plan Mode extension.
 *
 * Goals:
 * - Toggle read-only planning with /plan or Alt+Tab.
 * - Remove built-in mutation tools (write/edit) from the active tool set.
 * - Block unsafe bash, user bash, redirects, installers, git mutations, and common editors.
 * - Add persistent TUI affordances: footer status + sleek above-editor card.
 * - Persist mode across reload/resume.
 */

const STATE_ENTRY = "plan-mode-state";
const STATUS_ID = "plan-mode";
const WIDGET_ID = "plan-mode-card";

const DISABLED_TOOL_NAMES = new Set([
  "write",
  "edit",
  "apply_patch",
  "patch",
  "replace",
  "create_file",
  "delete_file",
  "rename_file",
]);

const READ_ONLY_TOOLS = ["read", "bash", "grep", "find", "ls", "questionnaire"];

const MUTATING_BASH_PATTERNS: RegExp[] = [
  /(^|[;&|()\s])(?:rm|rmdir|mv|cp|mkdir|touch|chmod|chown|chgrp|ln|tee|truncate|dd|shred|install|rsync)\b/i,
  /(^|[;&|()\s])(?:vim?|nano|emacs|code|subl|notepad)\b/i,
  /(^|[;&|()\s])(?:sudo|su|kill|pkill|killall|reboot|shutdown)\b/i,
  /(^|[;&|()\s])git\s+(?:add|commit|push|pull|merge|rebase|reset|checkout|switch|restore|stash|cherry-pick|revert|tag|init|clone|clean|apply|am)\b/i,
  /(^|[;&|()\s])(?:npm|pnpm|yarn|bun)\s+(?:install|i|add|remove|uninstall|update|upgrade|ci|link|publish|run\s+(?:build|deploy|release))/i,
  /(^|[;&|()\s])(?:pip|pipx|poetry)\s+(?:install|uninstall|add|remove|update)/i,
  /(^|[;&|()\s])(?:apt|apt-get|dnf|yum|brew|pacman|choco|winget)\s+(?:install|remove|purge|update|upgrade|uninstall)/i,
  /(^|[;&|()\s])(?:systemctl|service)\s+\S*\s*(?:start|stop|restart|enable|disable|reload)\b/i,
  // Output redirection/process substitution that can mutate files. Plain pipes are allowed.
  /(^|[^<])>(?![>&])|>>|\b(?:2>|1>|&>)\b/i,
];

const READ_ONLY_BASH_PATTERNS: RegExp[] = [
  /^\s*(?:cat|head|tail|less|more|grep|rg|find|fd|ls|eza|tree|pwd|wc|sort|uniq|diff|file|stat|du|df|which|where|whereis|type)\b/i,
  /^\s*(?:echo|printf|jq|sed\s+-n|awk)\b/i,
  /^\s*(?:env|printenv|uname|whoami|id|date|uptime|ps|top|htop|free)\b/i,
  /^\s*git\s+(?:status|log|diff|show|branch|remote|config\s+--get|ls-files|ls-tree|grep)\b/i,
  /^\s*(?:npm|pnpm|yarn|bun)\s+(?:list|ls|view|info|search|outdated|audit|why)\b/i,
  /^\s*(?:node|python|python3|ruby|go|rustc|cargo|java)\s+(?:--version|-v|version)\b/i,
  /^\s*(?:curl\s+(?:-I|--head|-s|-L|--location)|wget\s+-O\s*-|gh\s+(?:issue|pr|repo|api)\s+(?:list|view|get))\b/i,
];

interface PlanModeState {
  enabled: boolean;
  toolsBeforePlanMode?: string[];
  lastPlan?: string[];
}

function unique(values: string[]): string[] {
  return [...new Set(values)];
}

function stripComments(command: string): string {
  return command
    .split("\n")
    .map((line) => line.replace(/(^|\s)#.*$/, "").trim())
    .filter(Boolean)
    .join(" && ");
}

function splitCommand(command: string): string[] {
  return stripComments(command)
    .split(/\s*(?:&&|\|\||;|\|)\s*/g)
    .map((part) => part.trim())
    .filter(Boolean);
}

function isReadOnlyCommand(command: string): boolean {
  const normalized = stripComments(command);
  if (!normalized) return true;

  if (MUTATING_BASH_PATTERNS.some((pattern) => pattern.test(normalized))) return false;

  const parts = splitCommand(normalized);
  if (parts.length === 0) return true;

  return parts.every((part) => {
    // Allow common one-shot env var assignments before the real command.
    const withoutEnv = part.replace(/^(?:[A-Z_][A-Z0-9_]*=(?:"[^"]*"|'[^']*'|\S+)\s+)*/i, "");
    return READ_ONLY_BASH_PATTERNS.some((pattern) => pattern.test(withoutEnv));
  });
}

function isAssistantMessage(message: AgentMessage): message is AssistantMessage {
  return message.role === "assistant" && Array.isArray(message.content);
}

function textOf(message: AssistantMessage): string {
  return message.content
    .filter((block): block is TextContent => block.type === "text")
    .map((block) => block.text)
    .join("\n");
}

function extractPlanSteps(text: string): string[] {
  const header = text.match(/(?:^|\n)\s*#{0,3}\s*Plan\s*:?\s*\n/i);
  if (!header?.index && header?.index !== 0) return [];

  const section = text.slice(header.index + header[0].length);
  const steps: string[] = [];
  for (const match of section.matchAll(/^\s*(?:\d+[.)]|[-*])\s+(.{8,160})$/gm)) {
    const item = match[1]
      .replace(/\*{1,2}([^*]+)\*{1,2}/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .trim();
    if (!/^(do not|note:|optional:)/i.test(item)) steps.push(item);
    if (steps.length >= 8) break;
  }
  return steps;
}

export default function planModeExtension(pi: ExtensionAPI): void {
  let enabled = false;
  let toolsBeforePlanMode: string[] | undefined;
  let lastPlan: string[] = [];

  pi.registerFlag("plan", {
    description: "Start pi in read-only plan mode",
    type: "boolean",
    default: false,
  });

  function persist(): void {
    pi.appendEntry(STATE_ENTRY, { enabled, toolsBeforePlanMode, lastPlan } satisfies PlanModeState);
  }

  function planModeTools(active: string[]): string[] {
    return unique([...active.filter((name) => !DISABLED_TOOL_NAMES.has(name)), ...READ_ONLY_TOOLS]);
  }

  function enableTools(): void {
    if (toolsBeforePlanMode === undefined) toolsBeforePlanMode = pi.getActiveTools();
    pi.setActiveTools(planModeTools(toolsBeforePlanMode));
  }

  function restoreTools(): void {
    if (toolsBeforePlanMode) pi.setActiveTools(toolsBeforePlanMode);
    toolsBeforePlanMode = undefined;
  }

  function updateUi(ctx: ExtensionContext): void {
    if (!ctx.hasUI) return;

    if (!enabled) {
      ctx.ui.setStatus(STATUS_ID, undefined);
      ctx.ui.setWidget(WIDGET_ID, undefined);
      return;
    }

    ctx.ui.setStatus(STATUS_ID, ctx.ui.theme.fg("warning", "◇ PLAN"));

    const accent = ctx.ui.theme.fg("accent", "◆");
    const title = ctx.ui.theme.fg("warning", ctx.ui.theme.bold(" PLAN MODE "));
    const hint = ctx.ui.theme.fg("dim", "Shift+Tab or /plan toggles • write/edit disabled • bash read-only");
    const steps = lastPlan.length
      ? lastPlan.slice(0, 4).map((step, index) => `${ctx.ui.theme.fg("muted", `${index + 1}.`)} ${step}`)
      : [ctx.ui.theme.fg("muted", "Ask for analysis; I will produce a numbered plan before changes.")];

    ctx.ui.setWidget(WIDGET_ID, [
      `${accent} ${title}${ctx.ui.theme.fg("dim", "safe analysis enabled")}`,
      hint,
      ...steps,
    ], { placement: "aboveEditor" });
  }

  function setPlanMode(next: boolean, ctx: ExtensionContext, notify = true): void {
    enabled = next;
    if (enabled) {
      enableTools();
      if (notify && ctx.hasUI) ctx.ui.notify("Plan mode enabled: write/edit tools disabled; bash is read-only.", "info");
    } else {
      restoreTools();
      if (notify && ctx.hasUI) ctx.ui.notify("Plan mode disabled: previous tool set restored.", "info");
    }
    updateUi(ctx);
    persist();
  }

  function toggle(ctx: ExtensionContext): void {
    setPlanMode(!enabled, ctx);
  }

  pi.registerCommand("plan", {
    description: "Toggle read-only plan mode",
    handler: async (_args, ctx) => toggle(ctx),
  });

  pi.registerCommand("plan-status", {
    description: "Show plan mode state and active restrictions",
    handler: async (_args, ctx) => {
      const mode = enabled ? "enabled" : "disabled";
      const plan = lastPlan.length ? `\n\nLast plan:\n${lastPlan.map((s, i) => `${i + 1}. ${s}`).join("\n")}` : "";
      ctx.ui.notify(`Plan mode is ${mode}. Disabled tools: ${[...DISABLED_TOOL_NAMES].join(", ")}.${plan}`, "info");
    },
  });

  pi.registerShortcut("shift+tab", {
    description: "Toggle plan mode",
    handler: async (ctx) => toggle(ctx),
  });

  pi.on("session_start", async (_event, ctx) => {
    enabled = pi.getFlag("plan") === true;

    const stateEntry = ctx.sessionManager
      .getEntries()
      .filter((entry: { type: string; customType?: string }) => entry.type === "custom" && entry.customType === STATE_ENTRY)
      .pop() as { data?: PlanModeState } | undefined;

    if (stateEntry?.data) {
      enabled = stateEntry.data.enabled ?? enabled;
      toolsBeforePlanMode = stateEntry.data.toolsBeforePlanMode;
      lastPlan = stateEntry.data.lastPlan ?? [];
    }

    if (enabled) enableTools();
    updateUi(ctx);
  });

  pi.on("session_shutdown", async (_event, ctx) => {
    if (enabled) restoreTools();
    if (ctx.hasUI) {
      ctx.ui.setStatus(STATUS_ID, undefined);
      ctx.ui.setWidget(WIDGET_ID, undefined);
    }
  });

  pi.on("before_agent_start", async () => {
    if (!enabled) return;

    return {
      message: {
        customType: "plan-mode-instructions",
        display: false,
        content: `[PLAN MODE ACTIVE]
You are operating in read-only plan mode.

Hard rules:
- Do not create, edit, delete, rename, move, install, format, or otherwise mutate files or system state.
- Built-in write/edit tools are disabled; do not ask for or simulate their use.
- Bash is restricted to read-only inspection commands. No redirects, installers, git mutations, editors, process control, or service/package changes.
- First understand the request, inspect relevant files safely, ask clarifying questions when needed, and produce a concise numbered plan under a "Plan:" heading.
- If implementation is needed, ask the user to toggle plan mode off with Shift+Tab or /plan before making changes.`,
      },
      systemPrompt: `${arguments[0]?.systemPrompt ?? ""}\n\nPLAN MODE: You must plan only and avoid all mutations until plan mode is disabled.`,
    };
  });

  pi.on("tool_call", async (event) => {
    if (!enabled) return;

    if (DISABLED_TOOL_NAMES.has(event.toolName)) {
      return { block: true, reason: `Plan mode blocked ${event.toolName}: mutation tools are disabled. Toggle with Shift+Tab or /plan to proceed.` };
    }

    if (event.toolName === "bash") {
      const command = typeof (event.input as { command?: unknown }).command === "string" ? (event.input as { command: string }).command : "";
      if (!isReadOnlyCommand(command)) {
        return { block: true, reason: `Plan mode blocked unsafe bash. Use read-only inspection only, or toggle with Shift+Tab / /plan.\nCommand: ${command}` };
      }
    }
  });

  pi.on("user_bash", (event) => {
    if (!enabled) return;
    if (!isReadOnlyCommand(event.command)) {
      return {
        result: {
          output: `Plan mode blocked unsafe user bash. Toggle with Shift+Tab or /plan to run mutating commands.\nCommand: ${event.command}`,
          exitCode: 1,
          cancelled: false,
          truncated: false,
        },
      };
    }
  });

  pi.on("agent_end", async (event, ctx) => {
    if (!enabled) return;

    const lastAssistant = [...event.messages].reverse().find(isAssistantMessage);
    if (!lastAssistant) return;

    const steps = extractPlanSteps(textOf(lastAssistant));
    if (steps.length > 0) {
      lastPlan = steps;
      updateUi(ctx);
      persist();
    }
  });
}
