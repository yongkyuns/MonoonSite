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

The export is in `dist/client`. `npm start` previews that static output. Tests check the exported page, internal navigation, contact and project destinations, metadata, and packaged asset references.

## Content

- `app/page.tsx`: page structure, services, project descriptions, and illustrative phase portrait.
- `app/globals.css`: responsive layout and visual theme.
- `app/layout.tsx`: document metadata and fonts.
- `public/favicon.svg`: brand icon.

Company name, services, contact email, and intended domain (`monoon.ai`) were supplied by the company owner. Project summaries are based on these repositories, reviewed September 4, 2026:

- https://github.com/yongkyuns/imu_gnss_fusion
- https://github.com/yongkyuns/RustRobotics
- https://github.com/yongkyuns/stack-algebra
- https://github.com/yongkyuns/noon

Noon is described as an ongoing exploration, not a released commercial product. The hero figure is a synthetic mathematical illustration, not experimental results or project telemetry.

## Hosting

The static export can be hosted on Cloudflare Pages using `npm run build` and output directory `dist/client`, with the source maintained on GitHub. `.openai/hosting.json` identifies the private Sites review deployment. Public domain setup is separate and has not been applied.

GitHub Pages also supports static files, subject to its commercial-use restrictions. If deployed under a repository subpath, configure that base path and asset URLs before publication; the current export targets a domain root.

## Dependency note

The required Sites scaffold pins its dependencies. Its September 2026 npm audit reports build/server dependency advisories. The deployment contains only the static export and has no React server functions, image processing endpoint, or Node server. Reassess and update the scaffold dependencies before adding server features or exposing a development server publicly.
