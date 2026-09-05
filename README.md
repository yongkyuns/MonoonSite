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

The static export can be hosted on Cloudflare Pages using `npm run build` and output directory `dist/client`, with the source maintained on GitHub. `.openai/hosting.json` identifies the private Sites review deployment. Public domain setup is separate and has not been applied.

GitHub Pages also supports static files, subject to its commercial-use restrictions. If deployed under a repository subpath, configure that base path and asset URLs before publication; the current export targets a domain root.

## Dependency note

The required Sites scaffold pins its dependencies. Its September 2026 npm audit reports build/server dependency advisories. The deployment contains only the static export and has no React server functions, image processing endpoint, or Node server. Reassess and update the scaffold dependencies before adding server features or exposing a development server publicly.
