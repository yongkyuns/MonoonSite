# MonoonAI

A static company website for MonoonAI, focused on sensing, controls, simulation, visualization, and embedded systems engineering. Built with React and Vinext; the published output requires no application server or database.

## Development

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

## Build and validate

```sh
npm run build
npm test
npm start
```

The export is in `dist/client`. `npm start` previews that static output. Tests check the exported page, internal navigation, contact destination and absence of named projects, metadata, and packaged asset references.

## Content

- `app/page.tsx`: page structure, services, and concept descriptions.
- `components/scientific-figures.tsx`: reusable, synthetic scientific SVG illustrations.
- `app/globals.css`: responsive layout and visual theme.
- `app/layout.tsx`: document metadata and fonts.
- `public/favicon.svg`: brand icon.

Company name, services, contact email, and intended domain (`monoon.ai`) were supplied by the company owner. Background research used these repositories, reviewed September 4, 2026. The public-facing website deliberately does not name or link to specific projects:

- https://github.com/yongkyuns/imu_gnss_fusion
- https://github.com/yongkyuns/RustRobotics
- https://github.com/yongkyuns/stack-algebra
- https://github.com/yongkyuns/noon

The page describes concepts rather than specific products or project roadmaps. The figures are synthetic mathematical illustrations, not experimental results or project telemetry. The radial surface is z = sin(r²) exp(-r² / 3). Its brief line-reveal animation respects reduced-motion preferences.

## Hosting

The primary deployment is GitHub Pages at https://yongkyuns.github.io/MonoonSite/ from the `main` branch of https://github.com/yongkyuns/MonoonSite.

`.github/workflows/pages.yml` installs locked dependencies, builds the static export, checks types and runs the exported-page tests, then publishes `dist/client` using GitHub Actions. It obtains the URL base path from the Pages configuration, so it also supports a future custom domain. The domain `monoon.ai` has not been configured.

To reproduce a project-path build locally:

```sh
NEXT_PUBLIC_BASE_PATH=/MonoonSite npm run build
NEXT_PUBLIC_BASE_PATH=/MonoonSite npm test
```

Without that environment variable the site builds for a domain root. `.openai/hosting.json` retains the identity of the earlier private Sites review deployment; GitHub Pages does not use it. GitHub Pages use remains subject to its commercial-use restrictions.

## Dependency note

The required Sites scaffold pins its dependencies. Its September 2026 npm audit reports build/server dependency advisories. The deployment contains only the static export and has no React server functions, image processing endpoint, or Node server. Reassess and update the scaffold dependencies before adding server features or exposing a development server publicly.
