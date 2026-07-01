# metaothello.github.io

Project page for [**MetaOthello: A Controlled Study of Multiple World Models in Transformers**](https://arxiv.org/abs/2602.23164) (ICML 2026, Seoul, South Korea), built with [Observable Framework](https://observablehq.com/framework/).

## Branches

- **`source`** — the Framework project (this branch): page content (`src/index.md`), styles, and assets. All development happens here.
- **`main`** — default branch; GitHub Pages serves from here. The `Deploy site` GitHub Action builds on every push to `source` and force-pushes the `dist/` output to `main`. Don't commit to `main` directly — it's overwritten on every deploy.

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
- `src/assets/` — images/figures used by the site.
