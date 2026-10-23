import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2025-02-19' });
const apply = process.argv.includes('--apply');

type Lang = { nl: string; en: string; fr: string };

let counter = 0;
const key = () => `c${(counter += 1)}`;

const title = (v: Lang) => ({ _type: 'localizedTitle', ...v });
const text = (v: Lang) => ({ _type: 'localizedText', ...v });
const block = (value: string) => ({
  _type: 'block',
  _key: key(),
  style: 'normal',
  markDefs: [],
  children: [{ _type: 'span', _key: key(), text: value, marks: [] }],
});
const rich = (paragraphs: Lang[]) => ({
  _type: 'blockContent',
  nl: paragraphs.map((p) => block(p.nl)),
  en: paragraphs.map((p) => block(p.en)),
  fr: paragraphs.map((p) => block(p.fr)),
});
const list = (items: Lang[]) =>
  items.map((i) => ({ _key: key(), ...title(i) }));
const category = (name: string) => ({
  _type: 'reference',
  _ref: `featureCategory-${name}`,
});

const CATEGORIES = [
  {
    id: 'creators',
    icon: 'search',
    title: {
      nl: 'Voor creators',
      en: 'For creators',
      fr: 'Pour les créateurs',
    },
  },
  {
    id: 'brands',
    icon: 'layout',
    title: { nl: 'Voor merken', en: 'For brands', fr: 'Pour les marques' },
  },
  {
    id: 'everyone',
    icon: 'world',
    title: { nl: 'Voor iedereen', en: 'For everyone', fr: 'Pour tous' },
  },
];

const TECH = [
  { id: 'techStack-supabase', title: 'Supabase', slug: 'supabase' },
  { id: 'techStack-vitest', title: 'Vitest', slug: 'vitest' },
  {
    id: 'techStack-github-actions',
    title: 'GitHub Actions',
    slug: 'github-actions',
  },
  { id: 'techStack-vercel', title: 'Vercel', slug: 'vercel' },
];
const TAGS = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Zod',
  'Supabase',
  'PostgreSQL',
  'Vitest',
  'GitHub Actions',
  'Vercel',
];

const feature = (
  label: 'feature' | 'core' | 'tool',
  categoryName: string,
  heading: Lang,
  body: Lang,
  points: Lang[],
) => ({
  _key: key(),
  _type: 'featureBlock',
  label,
  category: category(categoryName),
  title: title(heading),
  content: rich([body]),
  points: list(points),
});

const step = (heading: Lang, body: Lang) => ({
  _key: key(),
  _type: 'projectStep',
  title: title(heading),
  text: text(body),
});

const decision = (heading: Lang, body: Lang) => ({
  _key: key(),
  _type: 'projectDecision',
  title: title(heading),
  text: text(body),
});

const section = (
  anchor: string,
  heading: Lang,
  fields: Record<string, unknown>,
) => ({
  _key: key(),
  _type: 'projectSection',
  anchor: { _type: 'slug', current: anchor },
  title: title(heading),
  ...fields,
});

const SECTIONS = [
  section(
    'overview',
    { nl: 'Overzicht', en: 'Overview', fr: 'Aperçu' },
    {
      type: 'text',
      body: rich([
        {
          nl: 'Yointly verbindt creators en merken om brand collaborations van begin tot eind te laten verlopen, van ontdekken via aanmelden tot selecteren, op één plek.',
          en: 'Yointly connects creators and brands to run brand collaborations end to end, from discovery to application to selection, in one place.',
          fr: 'Yointly met en relation créateurs et marques pour mener des collaborations de bout en bout, de la découverte à la candidature puis à la sélection, au même endroit.',
        },
      ]),
    },
  ),
  section(
    'problem',
    { nl: 'Het probleem', en: 'The problem', fr: 'Le problème' },
    {
      type: 'text',
      body: rich([
        {
          nl: 'Brand collaborations worden meestal geregeld via DM’s, e-mailketens en spreadsheets. Creators vinden moeilijk open kansen en kunnen moeilijk een geloofwaardig profiel tonen. Merken krijgen ongestructureerde aanmeldingen en verliezen het overzicht van wie ze hebben beoordeeld, op de shortlist hebben gezet of hebben afgewezen.',
          en: 'Brand collaborations are usually arranged through DMs, email threads and spreadsheets. Creators struggle to find open opportunities and to show a credible profile. Brands get unstructured applications and lose track of who they have reviewed, shortlisted or declined.',
          fr: 'Les collaborations avec des marques sont généralement organisées par DM, fils d’e-mails et tableurs. Les créateurs ont du mal à trouver des opportunités ouvertes et à présenter un profil crédible. Les marques reçoivent des candidatures non structurées et perdent le fil de qui elles ont examiné, présélectionné ou refusé.',
        },
      ]),
      points: list([
        {
          nl: 'Creators bladeren door open brand deals, zien precies wat een merk wil en tonen interesse met een korte notitie zodra hun profiel compleet is',
          en: 'Creators browse open brand deals, see exactly what a brand wants, and show interest with a short note once their profile is complete',
          fr: 'Les créateurs parcourent les brand deals ouverts, voient exactement ce que veut une marque et montrent leur intérêt avec une courte note une fois leur profil complet',
        },
        {
          nl: 'Merken publiceren één keer een gestructureerde brief en beheren elke aanmelder op één bord',
          en: 'Brands publish a structured brief once and manage every applicant on a single board',
          fr: 'Les marques publient un brief structuré une fois et gèrent chaque candidat sur un seul tableau',
        },
        {
          nl: 'Beide kanten zien bij elke stap een duidelijke status, dus niemand hoeft achter een antwoord aan',
          en: 'Both sides see a clear status at every step, so nobody has to chase an answer',
          fr: 'Les deux parties voient un statut clair à chaque étape, personne n’a à relancer pour une réponse',
        },
      ]),
    },
  ),
  section(
    'how-it-works',
    { nl: 'Hoe het werkt', en: 'How it works', fr: 'Comment ça marche' },
    {
      type: 'steps',
      steps: [
        step(
          {
            nl: '1. Inloggen en rol kiezen',
            en: '1. Sign in and pick a role',
            fr: '1. Se connecter et choisir un rôle',
          },
          {
            nl: 'Een gebruiker logt in met een eenmalige code of Google en kiest een rol.',
            en: 'A user signs in with a one-time code or Google and picks a role.',
            fr: 'Un utilisateur se connecte avec un code à usage unique ou Google et choisit un rôle.',
          },
        ),
        step(
          {
            nl: '2. Profiel opbouwen',
            en: '2. Build the profile',
            fr: '2. Construire le profil',
          },
          {
            nl: 'De creator bouwt een profiel, het merk richt een bedrijfspagina in.',
            en: 'The creator builds a profile; the brand sets up a company page.',
            fr: 'Le créateur construit un profil ; la marque crée une page d’entreprise.',
          },
        ),
        step(
          {
            nl: '3. Brand deal publiceren',
            en: '3. Publish a brand deal',
            fr: '3. Publier un brand deal',
          },
          {
            nl: 'Het merk publiceert een brand deal, die op de publieke ontdekkingspagina verschijnt.',
            en: 'The brand publishes a brand deal, which appears on the public discovery page.',
            fr: 'La marque publie un brand deal, qui apparaît sur la page publique de découverte.',
          },
        ),
        step(
          {
            nl: '4. Interesse tonen',
            en: '4. Show interest',
            fr: '4. Montrer son intérêt',
          },
          {
            nl: 'Creators tonen interesse. De aanmeldingen komen op het bord van het merk.',
            en: 'Creators show interest. Applications land on the brand’s board.',
            fr: 'Les créateurs montrent leur intérêt. Les candidatures arrivent sur le tableau de la marque.',
          },
        ),
        step(
          { nl: '5. Selecteren', en: '5. Select', fr: '5. Sélectionner' },
          {
            nl: 'Het merk verplaatst aanmelders door de beoordeling en kiest wie meedoet. Iedereen ziet de eigen status.',
            en: 'The brand moves applicants through review and selects who joins. Everyone sees their status.',
            fr: 'La marque fait avancer les candidats dans l’examen et choisit qui participe. Chacun voit son statut.',
          },
        ),
      ],
    },
  ),
  section(
    'key-features',
    {
      nl: 'Belangrijke features',
      en: 'Key features',
      fr: 'Fonctionnalités clés',
    },
    {
      type: 'features',
      features: [
        feature(
          'feature',
          'creators',
          {
            nl: 'Publieke ontdekking',
            en: 'Public discovery',
            fr: 'Découverte publique',
          },
          {
            nl: 'Brand deals zijn publiek te vinden, met zoeken op merk of trefwoord en filters op categorie, taal en platform.',
            en: 'Brand deals can be found publicly, with search by brand or keyword and filters for category, language and platform.',
            fr: 'Les brand deals sont consultables publiquement, avec recherche par marque ou mot-clé et filtres par catégorie, langue et plateforme.',
          },
          [
            {
              nl: 'Zoeken op merk of trefwoord',
              en: 'Search by brand or keyword',
              fr: 'Recherche par marque ou mot-clé',
            },
            {
              nl: 'Filters voor categorie, taal en platform',
              en: 'Filters for category, language and platform',
              fr: 'Filtres par catégorie, langue et plateforme',
            },
          ],
        ),
        feature(
          'feature',
          'creators',
          {
            nl: 'Profiel en volledigheidschecklist',
            en: 'Profile and completeness checklist',
            fr: 'Profil et liste de complétude',
          },
          {
            nl: 'Een profiel met bio, socials, portfolio, contentfocus en soorten samenwerking. Een checklist van 8 punten bepaalt wanneer je interesse mag tonen, zodat merken alleen complete profielen zien.',
            en: 'A profile with bio, socials, portfolio, content focus (formats and themes) and collaboration types. A checklist of 8 items gates showing interest, so brands only see complete profiles.',
            fr: 'Un profil avec bio, réseaux sociaux, portfolio, focus de contenu (formats et thèmes) et types de collaboration. Une liste de 8 points conditionne l’envoi d’une candidature, pour que les marques ne voient que des profils complets.',
          },
          [],
        ),
        feature(
          'core',
          'creators',
          {
            nl: '“Ik ben geïnteresseerd”',
            en: '“I’m interested” flow',
            fr: 'Parcours « Je suis intéressé »',
          },
          {
            nl: 'Interesse tonen met een persoonlijke notitie, op elk moment terugtrekken en de status van je aanmelding live volgen.',
            en: 'Show interest with a personal note, withdraw at any time and follow the live application status.',
            fr: 'Montrer son intérêt avec une note personnelle, se retirer à tout moment et suivre le statut de la candidature en direct.',
          },
          [],
        ),
        feature(
          'feature',
          'brands',
          {
            nl: 'Brand deal builder',
            en: 'Brand deal builder',
            fr: 'Créateur de brand deals',
          },
          {
            nl: 'Een begeleide builder met dealdetails, deliverables, creatorcriteria en budget en timeline, gevolgd door een controle.',
            en: 'A guided builder with deal details, deliverables, creator criteria, and budget and timeline, followed by a review.',
            fr: 'Un créateur guidé avec détails du deal, livrables, critères pour les créateurs, budget et calendrier, suivi d’une relecture.',
          },
          [
            {
              nl: 'Concepten en publiceren, waarbij publiceren een compleet bedrijfsprofiel (6 punten) vereist',
              en: 'Drafts and publishing, with publishing gated on a complete company profile (6 items)',
              fr: 'Brouillons et publication, la publication exigeant un profil d’entreprise complet (6 points)',
            },
          ],
        ),
        feature(
          'core',
          'brands',
          {
            nl: 'Aanmeldersbord',
            en: 'Applicant board',
            fr: 'Tableau des candidats',
          },
          {
            nl: 'Elke aanmelder staat in een van vier kolommen: Wacht op beoordeling, Shortlist, Geselecteerd en Niet geselecteerd.',
            en: 'Every applicant sits in one of four columns: Awaiting review, Shortlisted, Selected and Not selected.',
            fr: 'Chaque candidat se trouve dans l’une de quatre colonnes : En attente d’examen, Présélectionné, Sélectionné et Non sélectionné.',
          },
          [
            {
              nl: 'Voorwaarden worden vergrendeld na de eerste acceptatie, zodat een deal niet verandert onder een geselecteerde creator',
              en: 'Terms locked after the first acceptance, so a deal cannot change under a selected creator',
              fr: 'Conditions verrouillées après la première acceptation, pour qu’un deal ne change pas sous un créateur sélectionné',
            },
          ],
        ),
        feature(
          'feature',
          'brands',
          {
            nl: 'Publieke bedrijfspagina',
            en: 'Public company page',
            fr: 'Page d’entreprise publique',
          },
          {
            nl: 'Een publieke pagina met het merk en zijn open deals.',
            en: 'A public page showing the brand and its open deals.',
            fr: 'Une page publique présentant la marque et ses deals ouverts.',
          },
          [],
        ),
        feature(
          'feature',
          'everyone',
          {
            nl: 'Inloggen zonder wachtwoord',
            en: 'Passwordless sign-in',
            fr: 'Connexion sans mot de passe',
          },
          {
            nl: 'Inloggen met een e-mailcode (OTP) of Google, met onboarding per rol voor creators en bedrijven.',
            en: 'Email OTP and Google sign-in, with role-based onboarding for creators and companies.',
            fr: 'Connexion par code e-mail (OTP) ou Google, avec onboarding par rôle pour les créateurs et les entreprises.',
          },
          [
            {
              nl: 'Geen wachtwoorden',
              en: 'No passwords',
              fr: 'Aucun mot de passe',
            },
          ],
        ),
        feature(
          'core',
          'quality',
          {
            nl: 'Beveiliging in de diepte',
            en: 'Security in depth',
            fr: 'Sécurité en profondeur',
          },
          {
            nl: 'Row Level Security op elke tabel en publieke toegang via RPC’s in plaats van open tabelrechten.',
            en: 'RLS on every table and hardened public access through RPCs instead of open table grants.',
            fr: 'Row Level Security sur chaque table et accès public via des RPC plutôt que des droits ouverts sur les tables.',
          },
          [
            {
              nl: 'Content Security Policy en security headers',
              en: 'A Content Security Policy and security headers',
              fr: 'Une Content Security Policy et des en-têtes de sécurité',
            },
            {
              nl: 'Gevalideerde omgevingsvariabelen en uploads gecontroleerd tegen het opslagpad van de eigenaar',
              en: 'Validated environment variables and uploads checked against the owner’s storage path',
              fr: 'Variables d’environnement validées et uploads vérifiés par rapport au chemin de stockage du propriétaire',
            },
          ],
        ),
        feature(
          'core',
          'quality',
          {
            nl: 'Type-safety van begin tot eind',
            en: 'Type safety end to end',
            fr: 'Sécurité des types de bout en bout',
          },
          {
            nl: 'Gegenereerde databasetypes, Zod-schema’s aan de grenzen en geen ongecontroleerde casts op RPC-resultaten.',
            en: 'Generated database types, Zod schemas at the boundaries and no unchecked casts on RPC results.',
            fr: 'Types de base de données générés, schémas Zod aux frontières et aucun cast non vérifié sur les résultats des RPC.',
          },
          [],
        ),
        feature(
          'tool',
          'quality',
          {
            nl: 'Schema als code',
            en: 'Schema as code',
            fr: 'Schéma en tant que code',
          },
          {
            nl: 'Meer dan 50 geversioneerde SQL-migraties en RLS-tests die in CI draaien.',
            en: '50+ versioned SQL migrations and RLS tests that run in CI.',
            fr: 'Plus de 50 migrations SQL versionnées et des tests RLS exécutés en CI.',
          },
          [],
        ),
        feature(
          'feature',
          'platform',
          {
            nl: 'Beeldverwerking',
            en: 'Image handling',
            fr: 'Gestion des images',
          },
          {
            nl: 'Afbeeldingen worden in de browser verkleind en naar WebP omgezet vóór het uploaden. Dat houdt de opslag klein en de pagina’s snel, en oude bestanden worden opgeruimd bij vervanging.',
            en: 'Images are resized and converted to WebP in the browser before upload, which keeps storage small and pages fast, and old files are cleaned up on replacement.',
            fr: 'Les images sont redimensionnées et converties en WebP dans le navigateur avant l’upload, ce qui garde le stockage léger et les pages rapides, et les anciens fichiers sont nettoyés lors d’un remplacement.',
          },
          [],
        ),
        feature(
          'feature',
          'design',
          {
            nl: 'Gedeeld componentensysteem',
            en: 'A shared component system',
            fr: 'Un système de composants partagé',
          },
          {
            nl: 'Herbruikbare tabs en formulierelementen op toegankelijke primitives, met consistente varianten in de hele app. De marketingsite (meerdere pagina’s, met mobiele versies) is gebouwd uit replica’s van de echte appcomponenten.',
            en: 'Reusable tabs and form controls built on accessible primitives, with consistent variants across the app. The marketing site (multi-page, with mobile versions) is built from replicas of the real app components.',
            fr: 'Des onglets et des contrôles de formulaire réutilisables basés sur des primitives accessibles, avec des variantes cohérentes dans toute l’app. Le site marketing (multi-pages, avec versions mobiles) est construit à partir de répliques des vrais composants de l’app.',
          },
          [],
        ),
      ],
    },
  ),
  section(
    'architecture',
    { nl: 'Architectuur', en: 'Architecture', fr: 'Architecture' },
    {
      type: 'text',
      body: rich([
        {
          nl: 'De belangrijkste beslissing is dat autorisatie in de database zit. Row Level Security-policies, security definer RPC’s en triggers bepalen wie wat kan zien en wijzigen. Regels als “een brand deal kan alleen met een compleet bedrijfsprofiel worden gepubliceerd” en “voorwaarden worden vergrendeld na acceptatie” worden in Postgres afgedwongen, dus ze gelden ongeacht welke client de API aanroept.',
          en: 'The key decision is that authorization lives in the database. Row Level Security policies, security definer RPCs and triggers enforce who can see and change what. Rules such as “a brand deal can only be published with a complete company profile” and “terms lock after acceptance” are enforced in Postgres, so they hold no matter which client calls the API.',
          fr: 'La décision clé est que l’autorisation vit dans la base de données. Des politiques Row Level Security, des RPC security definer et des triggers imposent qui peut voir et modifier quoi. Des règles comme « un brand deal ne peut être publié qu’avec un profil d’entreprise complet » et « les conditions sont verrouillées après acceptation » sont appliquées dans Postgres, elles valent donc quel que soit le client qui appelle l’API.',
        },
      ]),
      points: list([
        {
          nl: 'Browser: React Server Components, server actions en client hooks',
          en: 'Browser: React Server Components, server actions and client hooks',
          fr: 'Navigateur : React Server Components, server actions et client hooks',
        },
        {
          nl: 'Next.js 16 op Vercel: proxy.ts ververst de sessie en beschermt routes',
          en: 'Next.js 16 on Vercel: proxy.ts refreshes the session and protects routes',
          fr: 'Next.js 16 sur Vercel : proxy.ts rafraîchit la session et protège les routes',
        },
        {
          nl: 'supabase-js met de JWT van de gebruiker naar Postgres met Row Level Security',
          en: 'supabase-js with the user JWT to Postgres with Row Level Security',
          fr: 'supabase-js avec le JWT de l’utilisateur vers Postgres avec Row Level Security',
        },
        {
          nl: 'Security definer RPC’s voor bedrijfsregels en triggers, Supabase Auth (OTP, Google) en Supabase Storage',
          en: 'Security definer RPCs for business rules and triggers, Supabase Auth (OTP, Google) and Supabase Storage',
          fr: 'RPC security definer pour les règles métier et les triggers, Supabase Auth (OTP, Google) et Supabase Storage',
        },
      ]),
    },
  ),
  section(
    'decisions',
    {
      nl: 'Tech stack en waarom',
      en: 'Tech stack and why',
      fr: 'Stack technique et pourquoi',
    },
    {
      type: 'decisions',
      decisions: [
        decision(
          {
            nl: 'Framework: Next.js 16, React met de React Compiler, TypeScript',
            en: 'Framework: Next.js 16, React with the React Compiler, TypeScript',
            fr: 'Framework : Next.js 16, React avec le React Compiler, TypeScript',
          },
          {
            nl: 'App Router en Server Components voor snelle, veilige pagina’s.',
            en: 'App Router and Server Components for fast, safe pages.',
            fr: 'App Router et Server Components pour des pages rapides et sûres.',
          },
        ),
        decision(
          {
            nl: 'UI: Tailwind CSS, Base UI, class-variance-authority',
            en: 'UI: Tailwind CSS, Base UI primitives, class-variance-authority',
            fr: 'UI : Tailwind CSS, primitives Base UI, class-variance-authority',
          },
          {
            nl: 'Toegankelijke primitives (tabs, select) met consistente varianten.',
            en: 'Accessible primitives (tabs, select) with consistent variants.',
            fr: 'Primitives accessibles (onglets, select) avec des variantes cohérentes.',
          },
        ),
        decision(
          {
            nl: 'Formulieren en validatie: Zod',
            en: 'Forms and validation: Zod',
            fr: 'Formulaires et validation : Zod',
          },
          {
            nl: 'Zod-schema’s worden gedeeld tussen client en server.',
            en: 'Zod schemas are shared between client and server.',
            fr: 'Les schémas Zod sont partagés entre le client et le serveur.',
          },
        ),
        decision(
          {
            nl: 'Backend: Supabase',
            en: 'Backend: Supabase',
            fr: 'Backend : Supabase',
          },
          {
            nl: 'Postgres, Auth, Storage, Row Level Security en RPC’s in één platform.',
            en: 'Postgres, Auth, Storage, Row Level Security and RPCs in one platform.',
            fr: 'Postgres, Auth, Storage, Row Level Security et RPC sur une seule plateforme.',
          },
        ),
        decision(
          {
            nl: 'Data-toegang: supabase-js met gegenereerde types',
            en: 'Data access: supabase-js with generated database types',
            fr: 'Accès aux données : supabase-js avec types générés',
          },
          {
            nl: 'Getypeerde queries rechtstreeks op het databaseschema.',
            en: 'Typed queries straight from the database schema.',
            fr: 'Requêtes typées directement depuis le schéma de la base.',
          },
        ),
        decision(
          {
            nl: 'Testen: Vitest en pgTAP',
            en: 'Testing: Vitest and pgTAP',
            fr: 'Tests : Vitest et pgTAP',
          },
          {
            nl: 'Unit-tests met Vitest en database- en RLS-tests met pgTAP.',
            en: 'Unit tests with Vitest and database and RLS tests with pgTAP.',
            fr: 'Tests unitaires avec Vitest et tests de base de données et RLS avec pgTAP.',
          },
        ),
        decision(
          {
            nl: 'CI/CD: GitHub Actions en Vercel',
            en: 'CI/CD: GitHub Actions and Vercel',
            fr: 'CI/CD : GitHub Actions et Vercel',
          },
          {
            nl: 'Lint, type-check, test en build in CI, met deploy naar Vercel.',
            en: 'Lint, type-check, test and build in CI, deployed to Vercel.',
            fr: 'Lint, vérification des types, tests et build en CI, déploiement sur Vercel.',
          },
        ),
        decision(
          {
            nl: 'Hosting: Vercel en Supabase',
            en: 'Hosting: Vercel and Supabase',
            fr: 'Hébergement : Vercel et Supabase',
          },
          {
            nl: 'Vercel voor de app, Supabase voor data en bestanden.',
            en: 'Vercel for the app, Supabase for data and files.',
            fr: 'Vercel pour l’app, Supabase pour les données et les fichiers.',
          },
        ),
      ],
    },
  ),
  section(
    'challenges',
    { nl: 'Uitdagingen', en: 'Challenges', fr: 'Défis' },
    {
      type: 'text',
      body: rich([
        {
          nl: 'Wat ik als uitdagingen zou benadrukken:',
          en: 'What I would highlight as challenges:',
          fr: 'Ce que je mettrais en avant comme défis :',
        },
      ]),
      points: list([
        {
          nl: 'Autorisatie zo ontwerpen dat de database, niet de UI, de bron van waarheid is',
          en: 'Designing authorization so the database, not the UI, is the source of truth',
          fr: 'Concevoir l’autorisation pour que la base de données, et non l’UI, soit la source de vérité',
        },
        {
          nl: 'De levenscyclus van een aanmelding modelleren met zijn regels: volledigheidspoorten, vergrendelde voorwaarden en terugtrekken',
          en: 'Modelling the application lifecycle and its rules: completeness gates, locked terms and withdrawals',
          fr: 'Modéliser le cycle de vie d’une candidature et ses règles : portes de complétude, conditions verrouillées et retraits',
        },
        {
          nl: 'De publieke ontdekking snel en veilig houden voor anonieme bezoekers',
          en: 'Keeping public discovery fast and safe for anonymous visitors',
          fr: 'Garder la découverte publique rapide et sûre pour les visiteurs anonymes',
        },
      ]),
    },
  ),
  section(
    'roadmap',
    { nl: 'Roadmap', en: 'Roadmap', fr: 'Feuille de route' },
    {
      type: 'text',
      points: list([
        {
          nl: 'Goedkeuring van bedrijven vóór het publiceren',
          en: 'Company approval before publishing',
          fr: 'Validation des entreprises avant publication',
        },
        {
          nl: 'Een beheerdersomgeving voor moderatie',
          en: 'An admin area for moderation',
          fr: 'Un espace admin pour la modération',
        },
        {
          nl: 'Een gesprek tussen een merk en een geselecteerde creator',
          en: 'A conversation between a brand and a selected creator',
          fr: 'Une conversation entre une marque et un créateur sélectionné',
        },
        {
          nl: 'Bevestiging van oplevering en reviews na een afgeronde samenwerking',
          en: 'Delivery confirmation and reviews after a completed collaboration',
          fr: 'Confirmation de livraison et avis après une collaboration terminée',
        },
      ]),
    },
  ),
];

const run = async () => {
  const techs = await client.fetch<{ _id: string; title: string }[]>(
    `*[_type == "techStack" && title in $titles]{_id, title}`,
    { titles: TAGS },
    { perspective: 'raw' },
  );
  const ids = new Map(techs.map((tech) => [tech.title, tech._id]));
  TECH.forEach((tech) => ids.set(tech.title, tech.id));
  const missing = TAGS.filter((name) => !ids.has(name));
  if (missing.length > 0)
    throw new Error(`Missing tech stack: ${missing.join(', ')}`);

  const doc = {
    _id: 'project-yointly',
    _type: 'project',
    title: 'Yointly',
    slug: { _type: 'slug', current: 'yointly' },
    // The newest project, after NextPlay
    publishedAt: '2026-10-15T00:00:00Z',
    lede: text({
      nl: 'Een marktplaats voor brand deals die creators en merken van ontdekken tot selecteren op één plek samenbrengt.',
      en: 'A marketplace for brand deals that brings creators and brands together from discovery to selection, in one place.',
      fr: 'Une place de marché de brand deals qui réunit créateurs et marques, de la découverte à la sélection, au même endroit.',
    }),
    role: title({
      nl: 'Full-stack developer',
      en: 'Full-stack developer',
      fr: 'Développeur full-stack',
    }),
    liveUrl: 'https://yointly.be',
    url: 'yointly.be',
    projectType: title({
      nl: 'Marktplaats voor brand deals',
      en: 'Marketplace for brand deals',
      fr: 'Place de marché de brand deals',
    }),
    tags: TAGS.map((name) => ({
      _key: key(),
      _type: 'reference',
      _ref: ids.get(name)!,
    })),
    sections: SECTIONS,
  };

  console.log(`${apply ? 'APPLY' : 'DRY RUN'}: ${doc._id}`);
  console.log(`${SECTIONS.length} sections, ${doc.tags.length} tags`);

  if (apply) {
    for (const tech of TECH) {
      await client.createIfNotExists({
        _id: tech.id,
        _type: 'techStack',
        title: tech.title,
        slug: { _type: 'slug', current: tech.slug },
      });
    }
    for (const item of CATEGORIES) {
      await client.createIfNotExists({
        _id: `featureCategory-${item.id}`,
        _type: 'featureCategory',
        title: title(item.title),
        icon: item.icon,
      });
    }
    await client.createIfNotExists(doc);
    console.log('created');
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
