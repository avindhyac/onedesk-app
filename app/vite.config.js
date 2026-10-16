import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import optimizedImages from "./plugins/optimizedImages.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [optimizedImages(), react()],
});
