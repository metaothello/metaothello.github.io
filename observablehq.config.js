const favicon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='#117a37'/><circle cx='12' cy='16' r='7.5' fill='black'/><circle cx='21' cy='16' r='7.5' fill='white' stroke='black' stroke-width='1'/></svg>`;

export default {
  title: "MetaOthello",
  pages: [],
  sidebar: false,
  toc: false,
  pager: false,
  style: "style.css",
  head: `<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(favicon)}">
<meta name="description" content="MetaOthello: A Controlled Study of Multiple World Models in Transformers. ICML 2026, Seoul, South Korea.">
<meta property="og:title" content="MetaOthello: A Controlled Study of Multiple World Models in Transformers">
<meta property="og:description" content="A controlled suite of Othello-like games that shows how transformers share and reconcile multiple world models. ICML 2026.">
<meta property="og:image" content="/assets/hero.png">
<meta name="twitter:card" content="summary_large_image">`,
  footer: "",
  root: "src"
};
