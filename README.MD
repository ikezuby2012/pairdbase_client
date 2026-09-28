# PAIRDBASE Client

> Working name — see naming discussion; may change before public launch.

The browser and desktop clients for QueryForge — a collaborative,
multi-database developer workspace. One codebase, two shipped targets:
a web app and a native desktop app, sharing nearly everything except the
thin platform shell around each.

Backend: see the `queryforge` Rust workspace (Axum, feature-based clean
architecture, per-database drivers, real-time collab via `yrs`, GitHub
integration). This repo is client-only.

---

## Stack

- **[TanStack Start](https://tanstack.com/start)** — file-based routing,
  SSR, used for both apps
- **[Tauri](https://tauri.app)** — wraps the desktop app's TanStack Start
  frontend in a native shell (Rust) for macOS/Windows/Linux distribution
- **pnpm workspaces + Turborepo** — monorepo tooling
- **Tailwind** — styling, driven by design tokens in `packages/ui`
- **TypeScript** throughout

---

## Structure

```
queryforge-client/
├── apps/
│   ├── web/              # browser target — TanStack Start
│   └── desktop/           # desktop target — TanStack Start + Tauri (src-tauri/)
│
└── packages/
    ├── ui/                # atomic design system — atoms, molecules,
    │                       # organisms, templates. Pure presentational,
    │                       # no data-fetching, no router knowledge.
    ├── screens/            # real screens — data-fetching + composed UI,
    │                       # imported by both apps' route files
    ├── api-client/         # typed client for the Rust backend (REST + WS)
    ├── shared-types/       # TS types mirroring the backend's Rust DTOs
    ├── platform/           # web-vs-desktop native capability abstraction
    │                       # (file dialogs, notifications, secure storage)
    └── config/             # shared eslint/tsconfig/tailwind config
```

Full structure with per-folder detail: see `docs/client-structure.md`
(the monorepo layout doc — atoms/molecules/organisms/templates/pages
mapping, why `screens` is separate from each app's `routes/`, why
`platform` exists).

**The one-line version of how web and desktop share code:** `apps/*/routes/`
files are kept deliberately thin — just TanStack Start route wiring —
and import their actual content from `packages/screens`. A screen is
written once and rendered identically on both targets; only native
capabilities (file save dialogs, OS notifications) differ, and those go
through `packages/platform`'s web/tauri split rather than branching
inside a screen.

---

## Getting started

### Prerequisites

- Node.js (LTS) + pnpm
- Rust (stable) — required for the desktop app's Tauri shell only, not
  for web development
- The backend running locally (see the backend repo's README) — the
  client expects `VITE_API_BASE_URL` to point at a running QueryForge
  API

### Install

```bash
pnpm install
```

### Environment variables

Each app reads its own `.env` (Vite convention — `VITE_`-prefixed vars
are exposed to client code):

| Variable | Used by | Purpose |
|---|---|---|
| `VITE_API_BASE_URL` | web, desktop | Base URL of the Rust backend's REST API |
| `VITE_WS_BASE_URL` | web, desktop | Base URL for WebSocket connections (query streaming, collab sync, signaling) |

OAuth client IDs (Google/GitHub/Twitter/Discord) are **not** client-side
env vars — the OAuth flow redirects through the backend
(`GET /api/auth/oauth/:provider`), which holds the actual client
secrets. The client only needs to know where to redirect the browser to.

### Run

```bash
pnpm turbo run dev --filter=web        # browser app, http://localhost:3000
pnpm turbo run dev --filter=desktop    # opens the Tauri window
```

### Build

```bash
pnpm turbo run build
```

Full first-time setup, including scaffolding each app and package from
scratch: see `docs/setup-commands.md`.

---

## Atomic design

UI components live in `packages/ui`, organized by tier:

| Tier | Folder | Rule |
|---|---|---|
| Atoms | `ui/src/atoms` | Smallest indivisible pieces (Button, Input, Icon). No app knowledge. |
| Molecules | `ui/src/molecules` | Small groups of atoms with one job (FormField, OAuthButton). Still no data-fetching. |
| Organisms | `ui/src/organisms` | Composed sections with real structure (AuthForm, SchemaBrowserPanel, ResultsTable). May take data as props, never fetches it. |
| Templates | `ui/src/templates` | Layout skeletons only — no real content. |
| Pages | `packages/screens` (not `ui`) | Real data-fetching + real content, composed from templates + organisms. Lives outside `ui` deliberately — see the structure doc for why. |

Every atom/molecule/organism gets a Storybook story — this is how web
and desktop are verified to render identically without manually
comparing two running apps.

---

## Design reference

Visual direction (dark-first, developer-tool register) and the current
page-by-page copy/structure prompts used to build out specific flows:

- `docs/landing-page-prompt.md` — marketing site, referencing dbxio.com
  and dbpro.app's structure
- `docs/auth-pages-prompt.md` — sign-up/sign-in flow, OAuth provider
  order, form validation rules
- `docs/seo-plan.md` — SEO/GEO strategy, per-database pages, comparison
  pages

---

## Scripts

| Command | Effect |
|---|---|
| `pnpm turbo run dev --filter=<app>` | Run one app's dev server |
| `pnpm turbo run build` | Build every app + package that needs building |
| `pnpm turbo run lint` | Lint the whole workspace |
| `pnpm --filter <package> add <dep>` | Add a dependency to one specific app/package |

Turborepo caches task output across the whole workspace — a `packages/ui`
change only triggers rebuilds of things that actually depend on it, not
every app.