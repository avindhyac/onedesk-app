/* Per-route document metadata. React 19 hoists <title>/<meta>/<link> rendered
   anywhere in the tree up into <head>, so each page can own its own SEO without
   a helmet library. Pass a page title + description; `path` builds the canonical. */

const SITE_NAME = "OneDesk";
const SITE_URL = "https://onedesk.one";
const DEFAULT_DESC =
  "OneDesk brings legal, tax, accounting, HR, company secretarial and marketing support together under one trusted partner.";

export default function Seo({ title, description = DEFAULT_DESC, path = "" }) {
  const fullTitle = title ? `${title} - ${SITE_NAME}` : `${SITE_NAME} - Everything your business needs, in one place`;
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
