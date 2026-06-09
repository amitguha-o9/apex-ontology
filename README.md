# APEX Ontology Editor

Collaborative business planning ontology editor — **209 entities, 1,494 attributes, 257 relationships** across 5 models.

Built with Next.js 14, Prisma, PostgreSQL, and NextAuth. One-command deploy to Vercel.

---

## Features

- **Browse** — two-level model/sub-model navigation tree with entity counts
- **Edit** — name, description, attributes (name/type/required/description), relationships (verb/target/cardinality/type)
- **Create** — new models, sub-models, and entities via modal dialogs
- **Move** — reassign any entity to a different sub-model via dropdown
- **Delete** — entities with confirmation (EDITOR+); models/sub-models (ADMIN only)
- **Search** — full-text across all entity names and descriptions
- **Export YAML** — one-click download of the complete ontology as structured YAML
- **Access control** — three roles: VIEWER (read-only), EDITOR (create/edit/delete entities), ADMIN (everything + user management)
- **Audit log** — every change recorded with user, action, before/after, timestamp
- **Auth** — Google OAuth, GitHub OAuth, or email magic-link (configure whichever you need)

---

## Deploy to Vercel in 5 minutes

### 1. Create a database

Use [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres), [Neon](https://neon.tech), or [Supabase](https://supabase.com). Copy the `DATABASE_URL` and `DIRECT_URL` connection strings.

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial APEX ontology editor"
gh repo create apex-ontology --private --push
```

### 3. Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new) → Import your repo
2. Add environment variables (see `.env.example`):
   - `DATABASE_URL` — pooled connection string
   - `DIRECT_URL` — direct connection string (for Prisma migrations)
   - `NEXTAUTH_SECRET` — run `openssl rand -base64 32` to generate
   - `NEXTAUTH_URL` — your Vercel deployment URL (e.g. `https://apex-ontology.vercel.app`)
   - `GOOGLE_CLIENT_ID` + `GOOGLE_CLIENT_SECRET` — from [Google Cloud Console](https://console.cloud.google.com)
   - `GITHUB_CLIENT_ID` + `GITHUB_CLIENT_SECRET` — from [GitHub OAuth Apps](https://github.com/settings/applications/new)
   - For the sign-in page to show the right buttons, also add:
     - `NEXT_PUBLIC_GOOGLE_ENABLED=true`
     - `NEXT_PUBLIC_GITHUB_ENABLED=true`
3. Click **Deploy**

### 4. Set up the database

After the first deploy, run from your local machine:

```bash
npm install
npx prisma db push         # Creates tables
npm run db:seed            # Seeds all 209 entities from v1.1.0
```

### 5. Make yourself an admin

After signing in for the first time, run this in your database console:

```sql
UPDATE "User" SET role = 'ADMIN' WHERE email = 'your@email.com';
```

Then use the **Users** panel in the app to manage everyone else.

---

## Local development

```bash
cp .env.example .env.local
# Fill in .env.local with your values

npm install
npx prisma db push
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
src/
  app/
    api/
      auth/[...nextauth]/   NextAuth handler
      models/               GET all models, POST new model
      models/[id]/          PATCH, DELETE model
      submodels/            POST new sub-model
      submodels/[id]/       PATCH, DELETE sub-model
      entities/             GET (list/search), POST new entity
      entities/[id]/        GET, PATCH (edit+move+attrs), DELETE
      export/               GET → YAML download
      admin/users/          GET users, PATCH role (ADMIN only)
      changes/              GET audit log
    auth/signin/            Sign-in page
    page.tsx                Main editor (auth-gated)
  components/
    OntologyEditor.tsx      Full editor UI
    OntologyEditor.module.css
  lib/
    auth.ts                 NextAuth config
    export.ts               YAML builder
    prisma.ts               Prisma client singleton
  types/
    ontology.ts             Shared TypeScript types
prisma/
  schema.prisma             DB schema (OntologyModel, Entity, Attribute, Change, User…)
  seed.ts                   Seeds v1.1.0 data (209 entities)
```

---

## Roles

| Action | VIEWER | EDITOR | ADMIN |
|---|:---:|:---:|:---:|
| Browse and read | ✓ | ✓ | ✓ |
| Export YAML | ✓ | ✓ | ✓ |
| View change history | ✓ | ✓ | ✓ |
| Create / edit / delete entities | | ✓ | ✓ |
| Create / edit sub-models | | ✓ | ✓ |
| Create / edit models | | ✓ | ✓ |
| Delete models (cascade) | | | ✓ |
| Manage user roles | | | ✓ |

---

## Ontology version

This repo seeds **APEX Business Planning Ontology v1.1.0** — the reviewed and corrected version:

- 17 broken relationship targets resolved
- Foundation Model created (Currency, UOM, Calendar, Time Bucket)
- 7 new entities added (Location, Sales Organization, Market, Decision Model, Demand Signal, Planning Cycle, Supplier Item)
- 26 missing cross-model relationships added
- 53 attributes added to Plan subtypes
