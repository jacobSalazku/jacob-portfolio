
# Portfolio Website Jacob
Dit project bevat de broncode voor mijn portfolio website, die is ontworpen om mijn vaardigheden en ervaring als Frontend Developer te presenteren.

## Aan de slag

```bash
pnpm install
cp .env.example .env.local   # vul de waarden in
pnpm dev
```

Node-versie staat in `.nvmrc`. De site draait op Next.js met next-intl (nl, en, fr) en haalt de inhoud uit Sanity via GraphQL.

### Omgevingsvariabelen

Zie `.env.example`. `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` en `SANITY_GRAPHQL_URL` zijn verplicht: zonder `SANITY_GRAPHQL_URL` mislukt de build. Zet dezelfde variabelen in Vercel voor Production en Preview.

### Scripts

| Commando | Wat het doet |
| --- | --- |
| `pnpm dev` / `pnpm build` | Ontwikkelserver en productiebuild |
| `pnpm lint` | ESLint |
| `pnpm codegen` | Genereert de GraphQL-types in `src/graphql/` opnieuw (na een schemawijziging eerst `sanity graphql deploy`) |
| `pnpm codegen:check` | Controleert of de gegenereerde bestanden up-to-date zijn |
| `pnpm types` | Genereert `schema.json` en `sanity.types.ts` |

De scripts in `scripts/` zijn eenmalige inhoudsupdates voor Sanity. Ze doen standaard een dry run en schrijven alleen met `--apply`.
