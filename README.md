# dyloc

**An admin dashboard template built entirely with [oks-ui](https://www.oks-ui.com).**

Every button, input, chart, menu and table cell in dyloc is an oks-ui primitive
or composed from oks-ui primitives — no second component library, no separate
charting library, no form library. It exists to show that one CSS-variable
component library can carry a full product surface.

<!-- Live demo · Repository links are added when the project is published to OKS-PROJECTS. -->

## Screenshots

_Hero and gallery screenshots live under `.github/media/` once captured._

## Stack

| | |
| --- | --- |
| Framework | Vite + React 19 |
| Routing | react-router-dom v7 |
| UI | **oks-ui** (all of it) |
| Icons | lucide-react |
| Styling | Tailwind v4 utilities for layout only; every colour/radius/shadow is a CSS variable |
| Motion | framer-motion (route transitions and signature motion only) |
| Lint | oxlint (`react` + `react-hooks` plugins) |
| Data | deterministic mock data in `src/data/` — no backend |

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # oxlint — must be clean
```

## How the `ui/` layer works

oks-ui ships the primitives; a small composition layer in
`src/Components/ui/` builds the handful of things it doesn't
(`Surface`, `DataTable`, `KpiCard`, `ChartCard`, `DonutCard`, `PageHeader`,
`MeterList`, the status/trend chips). Every composed component reads **only**
the `--app-*` semantic tokens defined in `src/styles/theme.css`, so light mode,
dark mode and a full rebrand all flip from that one file.

Screens that are a list, a form, a settings panel or a detail view are **config
objects**, not bespoke components — see `src/data/{lists,forms,settings,details}.jsx`
and the matching `*Routes.jsx` manifests wired into `src/App.jsx`.

## License

[MIT](./LICENSE) · see [`CHANGELOG.md`](./CHANGELOG.md) for the release history
and the compatible oks-ui range.
