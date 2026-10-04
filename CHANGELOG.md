# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/); this project adheres to
[Semantic Versioning](https://semver.org/).

> Requires oks-ui ^1.3.2

## [Unreleased]

## [1.0.1] — 2026-10-04

### Changed

- Updated to oks-ui `^1.3.2`; removed the unused `date-fns` dependency.

### Fixed

- Text contrast meets WCAG AA (4.5:1) in light and dark: muted and subtle text,
  form placeholders and hints, links and status colours.
- Dark theme mirrors the brand, success, warning, danger and info ramps, so
  labels on filled buttons, badges and alerts stay readable.
- Pages have a `<main>` landmark (auth and error screens) and card titles use
  `h2`, so heading order no longer skips a level.
- The notification badge sits beside its dropdown trigger instead of wrapping it.

## [1.0.0] — 2026-09-02

### Added

- Every `NAV_ROUTES` entry is now a real, working page — dashboards, the
  archetype-driven list / form / settings / detail screens, the full component
  gallery, every deep app page (chat, mail, calendar, file manager, notes,
  board, contacts, gallery, tree view, notifications), the e-commerce flow,
  the content pages, auth, and the standalone error pages.
- First public release under OKS-PROJECTS with a GitHub Pages live demo.

### Fixed

- `ChartCard` `className` now lands on the card (dashboard grid `col-span`).
- Chat `Message` avatars render as nodes; message column no longer overflows.
- `SteppedForm` checkout / wizard render their fields (moved to `step.content`).
- Switch / checkbox rows no longer collapse their label to one word per line
  (new `ToggleRow`).
- Charts: no hidden-axis left gutter, no stray category label under donuts,
  multi-series area renders as clean overlaid lines.
- `DonutCard` stacks the chart over the legend.

## [0.1.0] — 2026-09-02

### Added

- Vite + React 19 scaffold with a CSS-variable design-token layer (`src/styles/theme.css`)
  — teal brand ramp, full semantic ramps, Poppins type, and a designed dark mode.
- App shell built from oks-ui: recursive `Sidebar` (collapsible groups, collapsed
  icon rail with hover flyouts), `Header` control cluster, `InnerTemplate` frame
  with scroll-to-top on navigation, mobile `Drawer`.
- Route transitions and fallbacks: keyed fade/rise page transitions
  (framer-motion, reduced-motion aware) and Suspense skeletons.
- Composed `ui/` layer: `Surface`, `CardHeader`, `PageHeader`, `KpiCard`,
  `DataTable`, `ChartCard`, `DonutCard`, `MeterList`, `StatusChip`, `TrendChip`,
  `EntityCell`.
- Three dashboards — Default, Analytics, Sales — with deterministic mock data.
- Config-driven archetypes: `ListPage`, `FormPage`, `SettingsPage`, `DetailPage`
  with keyed-by-path config objects and auto-wiring route manifests.
- Component gallery (`/components`, `/components/:slug`, `/components/kitchen-sink`)
  with live examples and copyable source; charts gallery; icon browser.
- Deep app pages: contacts, calendar, chat, mail (3-pane), file manager, notes,
  to-do board, gallery, tree view, notifications.
- E-commerce: shop, cart, checkout (stepped form), wishlist, products, orders.
- Content pages: about, pricing, FAQ, timeline, notification list, empty,
  widgets, utilities, maps, multi-level menu demo.
- Auth split-screen (sign in / up, forgot / reset password, lock, two-step) and
  standalone 404 / 500 / maintenance pages.
- The official OKS mark in `Logo.jsx` and `public/favicon.svg`
  (`prefers-color-scheme` aware).
