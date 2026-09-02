# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/); this project adheres to
[Semantic Versioning](https://semver.org/).

> Requires oks-ui ^1.1.2

## [Unreleased]

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
