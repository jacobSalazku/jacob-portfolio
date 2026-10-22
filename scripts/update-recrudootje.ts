/**
 * One-off content update: fills the Recrudootje project as a full case study
 * (header, sections and grouped key features), using what the project and the
 * Craftzing experience already say. The old intro text and features field are
 * replaced by the sections.
 *
 * Dry run (default):  pnpm sanity exec scripts/update-recrudootje.ts --with-user-token
 * Apply:              pnpm sanity exec scripts/update-recrudootje.ts --with-user-token -- --apply
 *
 * Make a backup first: `pnpm sanity dataset export production backup.tar.gz`.
 */
import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2025-02-19' });
const apply = process.argv.includes('--apply');

type Lang = { nl: string; en: string; fr: string };
type Block = { _type: string; _key: string; [key: string]: unknown };

let counter = 0;
const key = () => `r${(counter += 1)}`;

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
    id: 'integrations',
    icon: 'puzzle',
    title: { nl: 'Integraties', en: 'Integrations', fr: 'Intégrations' },
  },
  {
    id: 'platform',
    icon: 'rocket',
    title: { nl: 'Platform', en: 'Platform', fr: 'Plateforme' },
  },
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

const run = async () => {
  const project = await client.fetch<{
    _id: string;
    _rev: string;
    text?: { nl?: Block[]; en?: Block[]; fr?: Block[] };
  } | null>(
    `*[_type == "project" && slug.current == "recrudootje"][0]{_id, _rev, text}`,
    {},
    { perspective: 'raw' },
  );
  if (!project) throw new Error('Recrudootje not found');

  // The existing intro text becomes the overview, in all three languages
  const reuse = (blocks?: Block[]) =>
    (blocks ?? []).map((item) => ({
      ...item,
      _key: key(),
      children: ((item.children as Block[]) ?? []).map((child) => ({
        ...child,
        _key: key(),
      })),
    }));

  const sections = [
    {
      _key: key(),
      _type: 'projectSection',
      type: 'text',
      anchor: { _type: 'slug', current: 'overview' },
      title: title({ nl: 'Overzicht', en: 'Overview', fr: 'Aperçu' }),
      body: {
        _type: 'blockContent',
        nl: reuse(project.text?.nl),
        en: reuse(project.text?.en),
        fr: reuse(project.text?.fr),
      },
    },
    {
      _key: key(),
      _type: 'projectSection',
      type: 'text',
      anchor: { _type: 'slug', current: 'challenge' },
      title: title({ nl: 'De uitdaging', en: 'The challenge', fr: 'Le défi' }),
      body: rich([
        {
          nl: 'Succesvolle referrals binnen Craftzing verdienen een beloning die leuk en persoonlijk aanvoelt, in plaats van een standaardcadeau.',
          en: 'Successful referrals at Craftzing deserve a reward that feels fun and personal, instead of a standard gift.',
          fr: 'Les recommandations réussies chez Craftzing méritent une récompense amusante et personnelle, plutôt qu’un cadeau standard.',
        },
      ]),
      points: list([
        {
          nl: 'Medewerkers kiezen zelf een locatie en soort beloning',
          en: 'Employees choose a location and type of reward themselves',
          fr: 'Les employés choisissent eux-mêmes un lieu et un type de récompense',
        },
        {
          nl: 'De beloning wordt willekeurig bepaald met een fortune wheel',
          en: 'The reward is picked at random with a fortune wheel',
          fr: 'La récompense est tirée au hasard avec une roue de la fortune',
        },
        {
          nl: 'Alleen Craftzing-medewerkers kunnen inloggen',
          en: 'Only Craftzing employees can log in',
          fr: 'Seuls les employés de Craftzing peuvent se connecter',
        },
        {
          nl: 'Na het claimen volgt automatisch een melding in Slack',
          en: 'A Slack notification follows automatically after claiming',
          fr: 'Une notification Slack suit automatiquement après la réclamation',
        },
      ]),
    },
    {
      _key: key(),
      _type: 'projectSection',
      type: 'steps',
      anchor: { _type: 'slug', current: 'approach' },
      title: title({
        nl: 'Mijn aanpak',
        en: 'My approach',
        fr: 'Mon approche',
      }),
      steps: [
        {
          _key: key(),
          _type: 'projectStep',
          title: title({
            nl: 'Zelfstandig starten',
            en: 'Starting independently',
            fr: 'Démarrer en autonomie',
          }),
          text: text({
            nl: 'Ik kreeg de kans om dit project grotendeels zelf in handen te nemen en bouwde de applicatie in Next.js.',
            en: 'I got the chance to take this project largely into my own hands and built the application in Next.js.',
            fr: 'J’ai eu la chance de prendre ce projet en grande partie en main et j’ai construit l’application avec Next.js.',
          }),
        },
        {
          _key: key(),
          _type: 'projectStep',
          title: title({
            nl: 'Data uit DatoCMS',
            en: 'Data from DatoCMS',
            fr: 'Données depuis DatoCMS',
          }),
          text: text({
            nl: 'Activiteiten en locaties komen uit DatoCMS en worden gefilterd op de voorkeuren van de gebruiker.',
            en: 'Activities and locations come from DatoCMS and are filtered on the preferences of the user.',
            fr: 'Les activités et les lieux proviennent de DatoCMS et sont filtrés selon les préférences de l’utilisateur.',
          }),
        },
        {
          _key: key(),
          _type: 'projectStep',
          title: title({
            nl: 'Het rad laten draaien',
            en: 'Spinning the wheel',
            fr: 'Faire tourner la roue',
          }),
          text: text({
            nl: 'Die voorkeuren gaan in een fortune wheel met animaties in Framer Motion, die willekeurig een activiteit kiest.',
            en: 'Those preferences go into a fortune wheel with animations in Framer Motion, which picks an activity at random.',
            fr: 'Ces préférences alimentent une roue de la fortune animée avec Framer Motion, qui choisit une activité au hasard.',
          }),
        },
      ],
    },
    {
      _key: key(),
      _type: 'projectSection',
      type: 'features',
      anchor: { _type: 'slug', current: 'key-features' },
      title: title({
        nl: 'Belangrijke features',
        en: 'Key features',
        fr: 'Fonctionnalités clés',
      }),
      features: [
        feature(
          'feature',
          'integrations',
          {
            nl: 'Dynamische data',
            en: 'Dynamic data',
            fr: 'Données dynamiques',
          },
          {
            nl: 'Gegevens worden uit DatoCMS gehaald en gefilterd op de voorkeuren van de gebruiker, zoals locatie en activiteit.',
            en: 'Data is fetched from DatoCMS and filtered on the preferences of the user, such as location and activity.',
            fr: 'Les données sont récupérées depuis DatoCMS et filtrées selon les préférences de l’utilisateur, comme le lieu et l’activité.',
          },
          [
            {
              nl: 'Filteren op locatie en activiteit',
              en: 'Filtering on location and activity',
              fr: 'Filtrage par lieu et activité',
            },
          ],
        ),
        feature(
          'tool',
          'integrations',
          {
            nl: 'Geautomatiseerde meldingen',
            en: 'Automated notifications',
            fr: 'Notifications automatisées',
          },
          {
            nl: 'Na het claimen van een beloning verschijnt automatisch een bericht in Slack met alle informatie over de gekozen activiteit.',
            en: 'After claiming a reward a message appears in Slack automatically, with all information about the chosen activity.',
            fr: 'Après la réclamation d’une récompense, un message apparaît automatiquement dans Slack avec toutes les informations sur l’activité choisie.',
          },
          [
            {
              nl: 'Melding in Slack bij elke geclaimde beloning',
              en: 'Slack message for every claimed reward',
              fr: 'Message Slack pour chaque récompense réclamée',
            },
          ],
        ),
        feature(
          'core',
          'quality',
          {
            nl: 'Veilige authenticatie',
            en: 'Secure authentication',
            fr: 'Authentification sécurisée',
          },
          {
            nl: 'Met NextAuth loggen Craftzing-medewerkers eenvoudig in via hun Google-account.',
            en: 'With NextAuth, Craftzing employees log in easily with their Google account.',
            fr: 'Avec NextAuth, les employés de Craftzing se connectent facilement avec leur compte Google.',
          },
          [
            {
              nl: 'Google-login via NextAuth',
              en: 'Google login with NextAuth',
              fr: 'Connexion Google avec NextAuth',
            },
          ],
        ),
        feature(
          'core',
          'quality',
          {
            nl: 'Logica en validatie',
            en: 'Structured logic and validation',
            fr: 'Logique et validation structurées',
          },
          {
            nl: 'Nuqs en Zod zorgen voor gestructureerde logica en validatie binnen de applicatie.',
            en: 'Nuqs and Zod give the application structured logic and validation.',
            fr: 'Nuqs et Zod apportent à l’application une logique et une validation structurées.',
          },
          [
            {
              nl: 'Voorkeuren in de URL met Nuqs',
              en: 'Preferences in the URL with Nuqs',
              fr: 'Préférences dans l’URL avec Nuqs',
            },
            {
              nl: 'Validatie van invoer met Zod',
              en: 'Validation of input with Zod',
              fr: 'Validation des entrées avec Zod',
            },
          ],
        ),
        feature(
          'feature',
          'design',
          {
            nl: 'Vloeiende UI en animaties',
            en: 'Smooth UI and animations',
            fr: 'Interface fluide et animations',
          },
          {
            nl: 'De animaties met Framer Motion zijn opgezet en verfijnd voor een soepele en dynamische ervaring rond het rad.',
            en: 'The animations with Framer Motion were set up and refined for a smooth and dynamic experience around the wheel.',
            fr: 'Les animations avec Framer Motion ont été mises en place et affinées pour une expérience fluide et dynamique autour de la roue.',
          },
          [
            {
              nl: 'Fortune wheel met animaties',
              en: 'Fortune wheel with animations',
              fr: 'Roue de la fortune animée',
            },
          ],
        ),
        feature(
          'feature',
          'platform',
          {
            nl: 'Deployment en toegankelijkheid',
            en: 'Deployment and accessibility',
            fr: 'Déploiement et accessibilité',
          },
          {
            nl: 'Een interactieve Next.js-applicatie die op Vercel draait. De URL is alleen toegankelijk via een verwijzing.',
            en: 'An interactive Next.js application running on Vercel. The URL is only accessible through a referral.',
            fr: 'Une application Next.js interactive hébergée sur Vercel. L’URL n’est accessible que via une recommandation.',
          },
          [
            {
              nl: 'Gehost op Vercel',
              en: 'Hosted on Vercel',
              fr: 'Hébergée sur Vercel',
            },
          ],
        ),
      ],
    },
    {
      _key: key(),
      _type: 'projectSection',
      type: 'decisions',
      anchor: { _type: 'slug', current: 'decisions' },
      title: title({
        nl: 'Technische beslissingen',
        en: 'Technical decisions',
        fr: 'Décisions techniques',
      }),
      decisions: [
        {
          _key: key(),
          _type: 'projectDecision',
          title: title({
            nl: 'Next.js op Vercel',
            en: 'Next.js on Vercel',
            fr: 'Next.js sur Vercel',
          }),
          text: text({
            nl: 'Een interactieve webapplicatie die eenvoudig te deployen is.',
            en: 'An interactive web application that is easy to deploy.',
            fr: 'Une application web interactive facile à déployer.',
          }),
        },
        {
          _key: key(),
          _type: 'projectDecision',
          title: title({
            nl: 'DatoCMS als bron',
            en: 'DatoCMS as the source',
            fr: 'DatoCMS comme source',
          }),
          text: text({
            nl: 'Activiteiten en locaties beheert het team in een CMS, zonder code aan te passen.',
            en: 'The team manages activities and locations in a CMS, without changing code.',
            fr: 'L’équipe gère les activités et les lieux dans un CMS, sans modifier le code.',
          }),
        },
        {
          _key: key(),
          _type: 'projectDecision',
          title: title({
            nl: 'NextAuth met Google',
            en: 'NextAuth with Google',
            fr: 'NextAuth avec Google',
          }),
          text: text({
            nl: 'Alleen medewerkers loggen in, met het account dat ze al hebben.',
            en: 'Only employees log in, with the account they already have.',
            fr: 'Seuls les employés se connectent, avec le compte qu’ils ont déjà.',
          }),
        },
        {
          _key: key(),
          _type: 'projectDecision',
          title: title({
            nl: 'Nuqs en Zod',
            en: 'Nuqs and Zod',
            fr: 'Nuqs et Zod',
          }),
          text: text({
            nl: 'Voorkeuren in de URL en gevalideerde invoer houden de logica duidelijk.',
            en: 'Preferences in the URL and validated input keep the logic clear.',
            fr: 'Les préférences dans l’URL et les entrées validées gardent la logique claire.',
          }),
        },
      ],
    },
    {
      _key: key(),
      _type: 'projectSection',
      type: 'text',
      anchor: { _type: 'slug', current: 'outcome' },
      title: title({
        nl: 'Resultaat en wat ik leerde',
        en: 'Outcome and what I learned',
        fr: 'Résultat et ce que j’ai appris',
      }),
      body: rich([
        {
          nl: 'De tool wordt intern gebruikt voor de referrals binnen Craftzing.',
          en: 'The tool is used internally for referrals at Craftzing.',
          fr: 'L’outil est utilisé en interne pour les recommandations chez Craftzing.',
        },
        {
          nl: 'Ik leerde zelfstandig een project dragen en werkte met tools die ik nog niet kende, zoals DatoCMS en Nuqs.',
          en: 'I learned to carry a project independently and worked with tools I had not used before, such as DatoCMS and Nuqs.',
          fr: 'J’ai appris à porter un projet de façon autonome et j’ai travaillé avec des outils que je ne connaissais pas, comme DatoCMS et Nuqs.',
        },
      ]),
    },
  ];

  const set = {
    lede: text({
      nl: 'Een interne tool van Craftzing die succesvolle referrals beloont met een verrassing, gekozen via een fortune wheel.',
      en: 'An internal Craftzing tool that rewards successful referrals with a surprise, picked with a fortune wheel.',
      fr: 'Un outil interne de Craftzing qui récompense les recommandations réussies par une surprise, tirée avec une roue de la fortune.',
    }),
    role: title({
      nl: 'Front-end developer (stage)',
      en: 'Front-end developer (internship)',
      fr: 'Développeur front-end (stage)',
    }),
    timeline: title({ nl: 'Okt - Jan', en: 'Oct - Jan', fr: 'Oct - Jan' }),
    projectType: title({
      nl: 'Interne tool',
      en: 'Internal tool',
      fr: 'Outil interne',
    }),
    liveUrl: 'https://recrudootje.craftzing.com/',
    url: 'recrudootje.craftzing.com',
    sections,
  };

  console.log(`${apply ? 'APPLY' : 'DRY RUN'}: ${project._id}`);
  console.log(
    `${sections.length} sections, header fields: ${Object.keys(set).join(', ')}`,
  );

  if (apply) {
    for (const item of CATEGORIES) {
      await client.createIfNotExists({
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
