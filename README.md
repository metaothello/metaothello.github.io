# metaothello.github.io

Project page for [**MetaOthello: A Controlled Study of Multiple World Models in Transformers**](https://arxiv.org/abs/2602.23164) (ICML 2026, Seoul, South Korea), built with [Observable Framework](https://observablehq.com/framework/).

## Branches

- **`source`** — the Framework project (this branch): page content (`src/index.md`), styles, and the raw paper/figure/poster assets under `metaothello/`. All development happens here.
- **`main`** — default branch; GitHub Pages is served from the build artifact produced by the `Deploy site` GitHub Action, which triggers on every push to `source`.

## Developing

```sh
npm install
npm run dev
```

Then visit <http://localhost:3000>.

## Building

```sh
npm run build
```

Outputs the static site to `dist/`.

## Repo layout

- `src/index.md` — the single-page site.
- `src/style.css` — custom styles on top of Observable Framework's default theme.
- `src/assets/` — images/figures used by the site (copies of files curated from `metaothello/`).
- `metaothello/` — raw source materials: paper, poster, LaTeX source, and full figure set.
