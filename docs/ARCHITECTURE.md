# Architecture

## Layers

```
src/
  styles/theme.css        design tokens — the --oks-* rebrand + the --app-* semantic layer
  Components/
    Commom/                app shell (Sidebar, Header, Footer, InnerTemplate, Logo)
    ui/                     composition layer over oks-ui primitives
  Pages/
    Dashboards/            bespoke, high-fidelity dashboards
    InnerPages/            archetype renderers (ListPage, FormPage, SettingsPage, DetailPage)
    Components/            the component gallery
    Apps/ Ecommerce/ Content/ Auth/ Standalone/
  data/
    nav.js                 the navigation tree → NAV + NAV_ROUTES
    mock.js                deterministic mock-data generators
    {lists,forms,settings,details}.jsx      archetype config objects, keyed by route path
    {list,form,settings,detail}Routes.jsx   manifests that turn configs into <Route>s
    gallery.jsx            the component-gallery registry
  App.jsx                  route table: EXPLICIT map + CONFIGURED set + shell fallback
```

## The token layer

`theme.css` does two things:

1. **Rebrand oks-ui** — repoints all 11 `--oks-color-primary-*` stops at a brand
   ramp, sets the semantic ramps, and redefines `--oks-color-surface` /
   `--oks-form-field-*` in the dark block (oks-ui leaves those light-only).
2. **Define `--app-*`** — a semantic layer (`--app-bg`, `--app-surface`,
   `--app-fg`, `--app-menu-*`, `--app-header-*`, `--app-primary` …) that every
   composed `ui/` component reads. Swapping light ↔ dark or rebranding only
   touches this file.

## Archetypes

A screen that is a list / form / settings panel / detail view is a config
object. To add one, add an entry to the relevant `data/*.jsx` file keyed by its
route path — the manifest picks it up automatically and `App.jsx` unions the
manifest's paths into `CONFIGURED`.

## Routing

`App.jsx` builds the route table from three sources: an `EXPLICIT` map of
`path → element` for bespoke pages, a `CONFIGURED` set unioned from every
archetype manifest, and a `shellRoutes` fallback over `NAV_ROUTES`. `ComingSoon`
survives only as the `path="*"` catch-all.
