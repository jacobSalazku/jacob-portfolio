import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2025-02-19' });
const apply = process.argv.includes('--apply');

type Lang = { nl: string; en: string; fr: string };

let counter = 0;
const key = () => `n${(counter += 1)}`;

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
    id: 'planning',
    icon: 'layout',
    title: {
      nl: 'Team en planning',
      en: 'Team and planning',
      fr: 'Équipe et planning',
    },
  },
  {
    id: 'match',
    icon: 'bolt',
    title: {
      nl: 'Wedstrijd en cijfers',
      en: 'Game and numbers',
      fr: 'Match et chiffres',
    },
  },
  {
    id: 'preparation',
    icon: 'rocket',
    title: { nl: 'Voorbereiding', en: 'Preparation', fr: 'Préparation' },
  },
  {
    id: 'players',
    icon: 'device-mobile',
    title: { nl: 'Voor de speler', en: 'For the player', fr: 'Pour le joueur' },
  },
];

const TECH = [
  { id: 'techStack-nestjs', title: 'NestJS', slug: 'nestjs' },
  { id: 'techStack-docker', title: 'Docker', slug: 'docker' },
];
const TAGS = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'GraphQL',
  'NestJS',
  'PostgreSQL',
  'Prisma',
  'NextAuth',
  'Zod',
  'Docker',
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
          nl: 'NextPlay is een full-stack platform waarmee een basketbalstaf het hele seizoen op één plek beheert: schema, aanwezigheid, live box scores, statistieken, pdf-rapporten en een playbook.',
          en: 'NextPlay is a full-stack platform that lets a basketball staff manage the whole season in one place: schedule, attendance, live box scores, statistics, pdf reports and a playbook.',
          fr: 'NextPlay est une plateforme full-stack qui permet à un staff de basket de gérer toute la saison au même endroit : planning, présences, box scores en direct, statistiques, rapports pdf et un playbook.',
        },
        {
          nl: 'Gebouwd met Next.js en een NestJS GraphQL-API, met rolgebaseerde autorisatie, end-to-end type-safety en geautomatiseerde tests.',
          en: 'Built with Next.js and a NestJS GraphQL API, with role-based authorization, end-to-end type safety and automated tests.',
          fr: 'Construite avec Next.js et une API GraphQL NestJS, avec autorisation par rôle, sécurité des types de bout en bout et tests automatisés.',
        },
      ]),
    },
  ),
  section(
    'challenge',
    { nl: 'Het probleem', en: 'The problem', fr: 'Le problème' },
    {
      type: 'text',
      body: rich([
        {
          nl: 'Coaches beheren hun seizoen vaak in losse spreadsheets, appjes en notities. Wie er op de training was, wat de cijfers van gisteren waren en wat het plan voor de volgende tegenstander is, staat op drie verschillende plekken.',
          en: 'Coaches often manage their season in separate spreadsheets, apps and notes. Who was at training, what yesterday’s numbers were and what the plan for the next opponent is, all live in three different places.',
          fr: 'Les entraîneurs gèrent souvent leur saison dans des tableurs, des applis et des notes séparés. Qui était à l’entraînement, quels étaient les chiffres d’hier et quel est le plan pour le prochain adversaire se trouvent à trois endroits différents.',
        },
      ]),
      points: list([
        {
          nl: 'Losse spreadsheets, appjes en notities',
          en: 'Separate spreadsheets, apps and notes',
          fr: 'Tableurs, applis et notes séparés',
        },
        {
          nl: 'Aanwezigheid, cijfers en plan staan op drie plekken',
          en: 'Attendance, numbers and plan live in three places',
          fr: 'Présences, chiffres et plan sont à trois endroits',
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
          { nl: '1. Schedule', en: '1. Schedule', fr: '1. Planning' },
          {
            nl: 'Een wedstrijd of training wordt ingepland.',
            en: 'A game or practice is scheduled.',
            fr: 'Un match ou un entraînement est planifié.',
          },
        ),
        step(
          { nl: '2. Attendance', en: '2. Attendance', fr: '2. Présences' },
          {
            nl: 'Spelers zijn aanwezig, laat of afwezig.',
            en: 'Players are present, late or absent.',
            fr: 'Les joueurs sont présents, en retard ou absents.',
          },
        ),
        step(
          { nl: '3. Box score', en: '3. Box score', fr: '3. Box score' },
          {
            nl: 'Alleen aanwezige spelers staan op het box score.',
            en: 'Only players who attended are on the box score.',
            fr: 'Seuls les joueurs présents figurent sur le box score.',
          },
        ),
        step(
          { nl: '4. Statistics', en: '4. Statistics', fr: '4. Statistiques' },
          {
            nl: 'De gemiddelden worden opnieuw berekend.',
            en: 'The averages are recalculated.',
            fr: 'Les moyennes sont recalculées.',
          },
        ),
        step(
          { nl: '5. Gameplan', en: '5. Gameplan', fr: '5. Gameplan' },
          {
            nl: 'De cijfers sturen het plan voor de volgende tegenstander, en de cyclus begint opnieuw.',
            en: 'The numbers drive the plan for the next opponent, and the cycle starts again.',
            fr: 'Les chiffres guident le plan pour le prochain adversaire, et le cycle recommence.',
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
          'planning',
          {
            nl: 'Team en spelers',
            en: 'Team and players',
            fr: 'Équipe et joueurs',
          },
          {
            nl: 'Een coach maakt een team aan en nodigt spelers uit met een eenmalige link met vervaldatum.',
            en: 'A coach creates a team and invites players with a one-time link that expires.',
            fr: 'Un entraîneur crée une équipe et invite des joueurs avec un lien à usage unique qui expire.',
          },
          [
            {
              nl: 'Rollen coach en speler, met spelersprofielen',
              en: 'Coach and player roles, with player profiles',
              fr: 'Rôles entraîneur et joueur, avec des profils de joueurs',
            },
            {
              nl: 'Een speler verwijderen is een soft delete: statistieken en aanwezigheid blijven bewaard',
              en: 'Removing a player is a soft delete: statistics and attendance are kept',
              fr: 'Supprimer un joueur est une suppression douce : statistiques et présences sont conservées',
            },
          ],
        ),
        feature(
          'feature',
          'planning',
          { nl: 'Schedule', en: 'Schedule', fr: 'Planning' },
          {
            nl: 'Een weekkalender met wedstrijden, trainingen, film, meetings en feedback.',
            en: 'A week calendar with games, practices, film, meetings and feedback.',
            fr: 'Un calendrier hebdomadaire avec matchs, entraînements, vidéos, réunions et feedback.',
          },
          [
            {
              nl: 'Wedstrijden thuis of uit, met de tegenstander',
              en: 'Home or away games, with the opponent',
              fr: 'Matchs à domicile ou à l’extérieur, avec l’adversaire',
            },
            {
              nl: 'Trainingen: team, shooting, physical en specialisation',
              en: 'Practices: team, shooting, physical and specialisation',
              fr: 'Entraînements : équipe, tir, physique et spécialisation',
            },
          ],
        ),
        feature(
          'core',
          'match',
          { nl: 'Box score', en: 'Box score', fr: 'Box score' },
          {
            nl: 'Statlines per speler en voor de tegenstander, met automatisch opslaan en een aparte mobiele weergave voor aan de zijlijn.',
            en: 'Statlines per player and for the opponent, with automatic saving and a separate mobile view for the sideline.',
            fr: 'Des statlines par joueur et pour l’adversaire, avec sauvegarde automatique et une vue mobile séparée pour le bord du terrain.',
          },
          [
            {
              nl: 'FG, 3P, FT, rebounds, assists, steals, blocks en turnovers',
              en: 'FG, 3P, FT, rebounds, assists, steals, blocks and turnovers',
              fr: 'FG, 3P, FT, rebonds, passes, interceptions, contres et pertes de balle',
            },
            {
              nl: 'Alleen aanwezige spelers staan op het box score',
              en: 'Only players who attended are on the box score',
              fr: 'Seuls les joueurs présents figurent sur le box score',
            },
          ],
        ),
        feature(
          'feature',
          'match',
          { nl: 'Statistics', en: 'Statistics', fr: 'Statistiques' },
          {
            nl: 'Team- en spelersgemiddelden, trends per week en maand met grafieken, en een detailpagina per speler.',
            en: 'Team and player averages, trends per week and month with charts, and a detail page per player.',
            fr: 'Moyennes d’équipe et de joueurs, tendances par semaine et par mois avec graphiques, et une page de détail par joueur.',
          },
          [
            {
              nl: 'Gemiddelden worden herberekend na elk box score',
              en: 'Averages are recalculated after every box score',
              fr: 'Les moyennes sont recalculées après chaque box score',
            },
          ],
        ),
        feature(
          'tool',
          'match',
          { nl: 'Rapporten', en: 'Reports', fr: 'Rapports' },
          {
            nl: 'Een pdf-export van het seizoen en per wedstrijd.',
            en: 'A pdf export of the season and per game.',
            fr: 'Un export pdf de la saison et par match.',
          },
          [
            {
              nl: 'Pdf’s gemaakt met @react-pdf/renderer',
              en: 'Pdfs made with @react-pdf/renderer',
              fr: 'Pdf créés avec @react-pdf/renderer',
            },
          ],
        ),
        feature(
          'feature',
          'preparation',
          { nl: 'Playbook', en: 'Playbook', fr: 'Playbook' },
          {
            nl: 'Gameplans per wedstrijd, trainingsvoorbereidingen met focus en plays voor aanval, verdediging en special, met rich-text notities.',
            en: 'Gameplans per game, practice preparations with a focus and plays for offense, defense and special, with rich-text notes.',
            fr: 'Des gameplans par match, des préparations d’entraînement avec un focus et des systèmes d’attaque, de défense et spéciaux, avec des notes en texte enrichi.',
          },
          [
            {
              nl: 'Visuele play-editor op een basketbalveld met fases (nog in ontwikkeling)',
              en: 'Visual play editor on a basketball court with phases (still in development)',
              fr: 'Éditeur visuel de systèmes sur un terrain de basket avec des phases (encore en développement)',
            },
          ],
        ),
        feature(
          'feature',
          'players',
          {
            nl: 'Eigen schema, aanwezigheid en cijfers',
            en: 'Own schedule, attendance and numbers',
            fr: 'Planning, présences et chiffres personnels',
          },
          {
            nl: 'Een speler ziet het eigen schema, geeft de aanwezigheid door met een reden en bekijkt het eigen profiel en de eigen cijfers.',
            en: 'A player sees their own schedule, reports attendance with a reason and views their own profile and numbers.',
            fr: 'Un joueur voit son propre planning, indique sa présence avec une raison et consulte son profil et ses chiffres.',
          },
          [
            {
              nl: 'Aanwezigheid doorgeven met reden',
              en: 'Report attendance with a reason',
              fr: 'Indiquer sa présence avec une raison',
            },
          ],
        ),
        feature(
          'core',
          'quality',
          {
            nl: 'End-to-end type-safety',
            en: 'End-to-end type safety',
            fr: 'Sécurité des types de bout en bout',
          },
          {
            nl: 'Het GraphQL-schema volgt uit TypeScript-klassen in de backend. De frontend genereert daar types en Document-objecten uit.',
            en: 'The GraphQL schema follows from TypeScript classes in the backend. The frontend generates types and Document objects from it.',
            fr: 'Le schéma GraphQL découle de classes TypeScript dans le backend. Le frontend en génère des types et des objets Document.',
          },
          [
            {
              nl: 'Een CI-stap faalt als het backendschema verandert zonder bijgewerkte frontendtypes',
              en: 'A CI step fails when the backend schema changes without updated frontend types',
              fr: 'Une étape de CI échoue si le schéma du backend change sans mise à jour des types du frontend',
            },
          ],
        ),
        feature(
          'core',
          'quality',
          { nl: 'Beveiliging', en: 'Security', fr: 'Sécurité' },
          {
            nl: 'Tokens komen nooit in browser-JavaScript, dankzij een same-origin BFF-proxy. Autorisatie zit in guards per team.',
            en: 'Tokens never reach browser JavaScript, thanks to a same-origin BFF proxy. Authorization lives in guards per team.',
            fr: 'Les jetons n’atteignent jamais le JavaScript du navigateur grâce à un proxy BFF de même origine. L’autorisation est gérée par des guards par équipe.',
          },
          [
            {
              nl: 'Refresh-tokens gehasht, geroteerd en ingetrokken bij hergebruik',
              en: 'Refresh tokens hashed, rotated and revoked on reuse',
              fr: 'Jetons de rafraîchissement hachés, renouvelés et révoqués en cas de réutilisation',
            },
            {
              nl: 'Rate limiting, limieten op querydiepte en aliassen, introspection uit in productie',
              en: 'Rate limiting, limits on query depth and aliases, introspection off in production',
              fr: 'Limitation de débit, limites sur la profondeur et les alias des requêtes, introspection désactivée en production',
            },
          ],
        ),
        feature(
          'tool',
          'quality',
          { nl: 'Testen', en: 'Testing', fr: 'Tests' },
          {
            nl: 'Backend-tests draaien tegen een echte Postgres per Jest-worker. De frontend test op fetch-niveau met MSW, aangevuld met Playwright e2e.',
            en: 'Backend tests run against a real Postgres per Jest worker. The frontend tests at fetch level with MSW, plus Playwright e2e.',
            fr: 'Les tests du backend tournent sur un vrai Postgres par worker Jest. Le frontend est testé au niveau fetch avec MSW, complété par du e2e Playwright.',
          },
          [
            {
              nl: '52 frontend-testbestanden, 3 e2e-specs en 27 backend-specs',
              en: '52 frontend test files, 3 e2e specs and 27 backend specs',
              fr: '52 fichiers de tests frontend, 3 specs e2e et 27 specs backend',
            },
          ],
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
          nl: 'Een request loopt van de browser via Next.js naar de NestJS-API en de database. De frontend haalt data op met Server Components, de browser praat via een BFF-proxy.',
          en: 'A request runs from the browser through Next.js to the NestJS API and the database. The frontend fetches data with Server Components, the browser talks through a BFF proxy.',
          fr: 'Une requête va du navigateur à l’API NestJS puis à la base de données en passant par Next.js. Le frontend récupère les données avec des Server Components, le navigateur passe par un proxy BFF.',
        },
      ]),
      points: list([
        {
          nl: 'Next.js 16: Server Components met executeGraphQL, een /api/graphql BFF-proxy en NextAuth met een sessiecookie',
          en: 'Next.js 16: Server Components with executeGraphQL, a /api/graphql BFF proxy and NextAuth with a session cookie',
          fr: 'Next.js 16 : Server Components avec executeGraphQL, un proxy BFF /api/graphql et NextAuth avec un cookie de session',
        },
        {
          nl: 'NestJS en GraphQL: guards (JWT, coach of lid), resolvers en services',
          en: 'NestJS and GraphQL: guards (JWT, coach or member), resolvers and services',
          fr: 'NestJS et GraphQL : guards (JWT, entraîneur ou membre), resolvers et services',
        },
        {
          nl: 'PostgreSQL via Prisma, met 18 modellen',
          en: 'PostgreSQL through Prisma, with 18 models',
          fr: 'PostgreSQL via Prisma, avec 18 modèles',
        },
        {
          nl: 'Inloggen met Google via NextAuth; de API verifieert het ID-token en geeft een access- en refresh-token terug',
          en: 'Sign in with Google through NextAuth; the API verifies the ID token and returns an access and refresh token',
          fr: 'Connexion avec Google via NextAuth ; l’API vérifie le jeton d’ID et renvoie un jeton d’accès et un jeton de rafraîchissement',
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
            nl: 'Frontend: Next.js 16, React 19, TypeScript',
            en: 'Frontend: Next.js 16, React 19, TypeScript',
            fr: 'Frontend : Next.js 16, React 19, TypeScript',
          },
          {
            nl: 'Server Components voor data ophalen en minder client-JS.',
            en: 'Server Components for fetching data and less client JS.',
            fr: 'Server Components pour récupérer les données et moins de JS côté client.',
          },
        ),
        decision(
          {
            nl: 'UI: Tailwind CSS v4, Radix UI, Recharts, Tiptap',
            en: 'UI: Tailwind CSS v4, Radix UI, Recharts, Tiptap',
            fr: 'UI : Tailwind CSS v4, Radix UI, Recharts, Tiptap',
          },
          {
            nl: 'Snel en consistent bouwen met toegankelijke componenten, grafieken en rich text.',
            en: 'Build fast and consistently with accessible components, charts and rich text.',
            fr: 'Construire vite et de façon cohérente avec des composants accessibles, des graphiques et du texte enrichi.',
          },
        ),
        decision(
          {
            nl: 'Data aan de clientkant: TanStack Query en Table, Zustand, React Hook Form, Zod',
            en: 'Client data: TanStack Query and Table, Zustand, React Hook Form, Zod',
            fr: 'Données côté client : TanStack Query et Table, Zustand, React Hook Form, Zod',
          },
          {
            nl: 'Mutaties en caching, sorteerbare tabellen en formuliervalidatie.',
            en: 'Mutations and caching, sortable tables and form validation.',
            fr: 'Mutations et cache, tableaux triables et validation de formulaires.',
          },
        ),
        decision(
          {
            nl: 'API: GraphQL met GraphQL Code Generator',
            en: 'API: GraphQL with GraphQL Code Generator',
            fr: 'API : GraphQL avec GraphQL Code Generator',
          },
          {
            nl: 'Elke query en mutation is getypeerd tot in de component.',
            en: 'Every query and mutation is typed all the way into the component.',
            fr: 'Chaque requête et mutation est typée jusque dans le composant.',
          },
        ),
        decision(
          {
            nl: 'Backend: NestJS op Fastify, Apollo (code-first schema)',
            en: 'Backend: NestJS on Fastify, Apollo (code-first schema)',
            fr: 'Backend : NestJS sur Fastify, Apollo (schéma code-first)',
          },
          {
            nl: 'Modulaire opbouw, dependency injection en guards.',
            en: 'Modular structure, dependency injection and guards.',
            fr: 'Structure modulaire, injection de dépendances et guards.',
          },
        ),
        decision(
          {
            nl: 'Database: PostgreSQL met Prisma',
            en: 'Database: PostgreSQL with Prisma',
            fr: 'Base de données : PostgreSQL avec Prisma',
          },
          {
            nl: 'Een relationeel model, type-safe queries en migraties. Soft delete met Restrict-foreign keys en unieke constraints houden de statistieken kloppend.',
            en: 'A relational model, type-safe queries and migrations. Soft delete with Restrict foreign keys and unique constraints keep the statistics correct.',
            fr: 'Un modèle relationnel, des requêtes typées et des migrations. La suppression douce avec des clés étrangères Restrict et des contraintes uniques garde les statistiques correctes.',
          },
        ),
        decision(
          {
            nl: 'Auth en security: NextAuth (Google), JWT, Passport, Throttler, Helmet',
            en: 'Auth and security: NextAuth (Google), JWT, Passport, Throttler, Helmet',
            fr: 'Auth et sécurité : NextAuth (Google), JWT, Passport, Throttler, Helmet',
          },
          {
            nl: 'Veilige login, rate limiting en security headers.',
            en: 'Secure login, rate limiting and security headers.',
            fr: 'Connexion sécurisée, limitation de débit et en-têtes de sécurité.',
          },
        ),
        decision(
          {
            nl: 'Kwaliteit en tooling: Vitest, Playwright, Jest, GitHub Actions, Sentry, Docker Compose',
            en: 'Quality and tooling: Vitest, Playwright, Jest, GitHub Actions, Sentry, Docker Compose',
            fr: 'Qualité et outils : Vitest, Playwright, Jest, GitHub Actions, Sentry, Docker Compose',
          },
          {
            nl: 'Tests en CI op beide repositories, foutmonitoring en een testdatabase in Docker.',
            en: 'Tests and CI on both repositories, error monitoring and a test database in Docker.',
            fr: 'Tests et CI sur les deux dépôts, surveillance des erreurs et une base de test dans Docker.',
          },
        ),
      ],
    },
  ),
];

const run = async () => {
  const project = await client.fetch<{ _id: string; _rev: string } | null>(
    `*[_type == "project" && slug.current == "nextplay"][0]{_id, _rev}`,
    {},
    { perspective: 'raw' },
  );
  if (!project) throw new Error('NextPlay not found');

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

  const set = {
    lede: text({
      nl: 'Een full-stack platform waarmee een basketbalstaf het hele seizoen op één plek beheert: schema, aanwezigheid, box scores, statistieken, rapporten en een playbook.',
      en: 'A full-stack platform that lets a basketball staff manage the whole season in one place: schedule, attendance, box scores, statistics, reports and a playbook.',
      fr: 'Une plateforme full-stack qui permet à un staff de basket de gérer toute la saison au même endroit : planning, présences, box scores, statistiques, rapports et un playbook.',
    }),
    role: title({
      nl: 'Full-stack developer',
      en: 'Full-stack developer',
      fr: 'Développeur full-stack',
    }),
    projectType: title({
      nl: 'Full-stack webplatform',
      en: 'Full-stack web platform',
      fr: 'Plateforme web full-stack',
    }),
    tags: TAGS.map((name) => ({
      _key: key(),
      _type: 'reference',
      _ref: ids.get(name)!,
    })),
    sections: SECTIONS,
  };

  console.log(`${apply ? 'APPLY' : 'DRY RUN'}: ${project._id}`);
  console.log(
    `${SECTIONS.length} sections, ${set.tags.length} tags, header: ${Object.keys(set).join(', ')}`,
  );

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
      await client.createOrReplace({
        _id: `featureCategory-${item.id}`,
        _type: 'featureCategory',
        title: title(item.title),
        icon: item.icon,
      });
    }
    await client
      .patch(project._id)
      .ifRevisionId(project._rev)
      .set(set)
      .unset(['text', 'features'])
      .commit();
    console.log('updated');
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
