# Furnishes site

The Furnishes storefront: one panel system, drawn to scale in the spot you pick.

- `pnpm install`
- `pnpm dev` then open http://localhost:3000
- `pnpm typecheck`, `pnpm lint`, `pnpm format:check`

Routes: `/` (pick a spot), `/furniture`, `/furniture/[piece]`, `/furniture/walls`,
`/furniture/start`, `/spaces`, `/saved`, `/how-it-works`, `/ask`.

Code: `src/features/storefront` (catalogue, assembly, steps, spot state, 3D stage,
thumbnails, components) and `src/app` (routes). The HDRI in `public/studio/hdri`
lights the 3D stage.
