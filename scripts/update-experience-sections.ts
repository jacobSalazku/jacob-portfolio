import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2025-02-19' });
const apply = process.argv.includes('--apply');

type Lang = { nl: string; en: string; fr: string };

let counter = 0;
const key = () => `e${(counter += 1)}`;

const title = (v: Lang) => ({ _type: 'localizedTitle', ...v });
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
const feature = (
  label: 'feature' | 'core' | 'tool',
  icon: string,
  heading: Lang,
  body: Lang,
  points: Lang[],
) => ({
  _key: key(),
  _type: 'featureBlock',
  label,
  icon,
  title: title(heading),
  content: rich([body]),
  points: list(points),
});
const section = (features: unknown[]) => ({
  _key: key(),
  _type: 'projectSection',
  type: 'features',
  anchor: { _type: 'slug', current: 'what-i-did' },
  title: title({
    nl: 'Wat heb ik gedaan?',
    en: 'What did I do?',
    fr: "Qu'ai-je fait ?",
  }),
  features,
});

const CRAFTZING_ID = '5e2d063b-ef13-4ad2-8db8-97fc1741c629';
const SPOTWORKSHOPS_ID = '804114cd-9343-4ff5-982f-ee2edf879feb';

const craftzing = section([
  feature(
    'feature',
    'code',
    { nl: 'Link in Bio', en: 'Link in Bio', fr: 'Lien dans la bio' },
    {
      nl: 'Ontwikkeling van een afgebakende pagina voor Instagram-posts.',
      en: 'Development of a dedicated page for Instagram posts.',
      fr: 'Développement d’une page dédiée pour les publications Instagram.',
    },
    [
      {
        nl: 'Gebruik van SASS voor componenten en GraphQL om data op te halen',
        en: 'Use of SASS for components and GraphQL to fetch data',
        fr: 'Utilisation de SASS pour les composants et de GraphQL pour récupérer les données',
      },
      {
        nl: 'Schrijven van migraties om automatisch data in DatoCMS te laden',
        en: 'Writing migrations to automatically load data into DatoCMS',
        fr: 'Écriture de migrations pour charger automatiquement les données dans DatoCMS',
      },
    ],
  ),
  feature(
    'core',
    'layout',
    {
      nl: 'Craftzing-website en CV generator',
      en: 'Craftzing website and CV generator',
      fr: 'Site Web Craftzing et générateur de CV',
    },
    {
      nl: 'Nieuwe componenten creëren en verschillende bestaande componenten aanpassen op de Craftzing-website.',
      en: 'Creating new components and adjusting various existing components on the Craftzing website.',
      fr: 'Création de nouveaux composants et modification de divers composants existants sur le site Web de Craftzing.',
    },
    [
      {
        nl: 'Voor CV Generator V2 een nieuw onboardingsysteem dat het gebruiksgemak vergroot wanneer gebruikers gegevens invoeren in DatoCMS',
        en: 'For CV Generator V2, a new onboarding system that improves usability when users enter data into DatoCMS',
        fr: 'Pour la V2 du générateur de CV, un nouveau système d’intégration qui améliore la convivialité lors de la saisie des données dans DatoCMS',
      },
    ],
  ),
  {
    ...feature(
      'tool',
      'puzzle',
      { nl: 'Recrudootje', en: 'Recrudootje', fr: 'Recrudootje' },
      {
        nl: '',
        en: '',
        fr: '',
      },
      [
        {
          nl: 'Gebouwd in Next.js en gehost op Vercel; de URL is alleen toegankelijk via een verwijzing',
          en: 'Built in Next.js and hosted on Vercel; the URL is only accessible through a referral',
          fr: 'Construit avec Next.js et hébergé sur Vercel ; l’URL n’est accessible que via une recommandation',
        },
        {
          nl: 'Activiteiten en locaties komen uit DatoCMS en worden gefilterd op de voorkeuren van de gebruiker, zoals locatie en activiteit',
          en: 'Activities and locations come from DatoCMS and are filtered on the user’s preferences, such as location and activity',
          fr: 'Les activités et lieux viennent de DatoCMS et sont filtrés selon les préférences de l’utilisateur, comme le lieu et l’activité',
        },
        {
          nl: 'Een “fortune wheel” met animaties in Framer Motion kiest willekeurig een activiteit',
          en: 'A “fortune wheel” with Framer Motion animations picks an activity at random',
          fr: 'Une « roue de la fortune » animée avec Framer Motion choisit une activité au hasard',
        },
        {
          nl: 'Na het claimen van een beloning verschijnt automatisch een bericht in Slack met alle info over de gekozen activiteit',
          en: 'After a reward is claimed, a message with all the details of the chosen activity appears in Slack automatically',
          fr: 'Après avoir réclamé une récompense, un message avec toutes les infos de l’activité choisie apparaît automatiquement dans Slack',
        },
        {
          nl: 'Craftzing-medewerkers loggen in met hun Google-account via NextAuth',
          en: 'Craftzing employees sign in with their Google account through NextAuth',
          fr: 'Les employés de Craftzing se connectent avec leur compte Google via NextAuth',
        },
        {
          nl: 'Voorkeuren in de URL met Nuqs en gevalideerde invoer met Zod',
          en: 'Preferences in the URL with Nuqs and validated input with Zod',
          fr: 'Préférences dans l’URL avec Nuqs et saisie validée avec Zod',
        },
      ],
    ),
    content: rich([
      {
        nl: 'Bij Recrudootje kreeg ik de kans om zelfstandig te werken en dit project grotendeels in eigen handen te nemen.',
        en: 'At Recrudootje, I had the opportunity to work independently and take charge of most of this project.',
        fr: 'Chez Recrudootje, j’ai eu l’opportunité de travailler de manière autonome et de prendre en charge la majeure partie de ce projet.',
      },
      {
        nl: 'Het concept is eenvoudig: bepaalde activiteiten worden opgezet als beloningen. Wanneer een nieuwe collega wordt aangenomen via een doorverwijzing, maakt de doorverwijzer kans op een beloning. Op dit moment zijn de opties een wellness of een diner op een locatie naar keuze. Aan het einde van het proces wordt een “fortune wheel”, waarin de voorkeuren van de gebruiker zijn verwerkt, gebruikt om willekeurig een activiteit te selecteren.',
        en: 'The concept is simple: certain activities are set up as rewards. When a new colleague is hired through a referral, the referrer has a chance to win a reward. Currently, the options are a wellness experience or a dinner at a location of choice. At the end of the process, a “fortune wheel” that incorporates the user’s preferences is used to randomly select an activity.',
        fr: 'Le concept est simple : certaines activités sont mises en place comme récompenses. Lorsqu’un nouveau collègue est embauché par le biais d’une recommandation, la personne qui a fait la recommandation a la chance de gagner une récompense. Actuellement, les options sont un soin bien-être ou un dîner dans un lieu au choix. À la fin du processus, une « roue de la fortune », qui prend en compte les préférences de l’utilisateur, est utilisée pour sélectionner une activité au hasard.',
      },
      {
        nl: 'Deze tool wordt intern gebruikt voor alle referrals binnen Craftzing.',
        en: 'This tool is used internally for all referrals within Craftzing.',
        fr: 'Cet outil est utilisé en interne pour toutes les recommandations au sein de Craftzing.',
      },
    ]),
  },
  feature(
    'core',
    'rocket',
    {
      nl: 'Leren en groeien',
      en: 'Learning and growing',
      fr: 'Apprendre et grandir',
    },
    {
      nl: 'Vanaf dag één kreeg ik de kans om mezelf uit te dagen, met de begeleiding van Sander Tirez en Thomas Verleye.',
      en: 'From day one I got the chance to challenge myself, with the guidance of Sander Tirez and Thomas Verleye.',
      fr: 'Dès le premier jour, j’ai pu me mettre au défi, avec l’accompagnement de Sander Tirez et Thomas Verleye.',
    },
    [
      {
        nl: 'Mijn kennis van Next.js en TypeScript verdiept',
        en: 'Deepened my knowledge of Next.js and TypeScript',
        fr: 'Approfondi mes connaissances de Next.js et TypeScript',
      },
      {
        nl: 'Gewerkt met tools die ik nog niet kende, zoals GraphQL en DatoCMS',
        en: 'Worked with tools I had not used before, such as GraphQL and DatoCMS',
        fr: 'Travaillé avec des outils que je ne connaissais pas, comme GraphQL et DatoCMS',
      },
      {
        nl: 'Mijn probleemoplossend vermogen versterkt',
        en: 'Strengthened my problem-solving skills',
        fr: 'Renforcé ma capacité à résoudre des problèmes',
      },
      {
        nl: 'Geleerd om uit mijn comfortzone te treden, als developer en als persoon',
        en: 'Learned to step out of my comfort zone, as a developer and as a person',
        fr: 'Appris à sortir de ma zone de confort, comme développeur et comme personne',
      },
    ],
  ),
]);

const spotworkshops = section([
  feature(
    'feature',
    'layout',
    {
      nl: 'Redesign van het platform',
      en: 'Platform redesign',
      fr: 'Refonte de la plateforme',
    },
    {
      nl: 'Redesign van de Workshop Detail pagina en alle componenten die de nieuwe UI nodig had.',
      en: 'Redesign of the Workshop Detail page and all the components the new UI needed.',
      fr: 'Refonte de la page Workshop Detail et de tous les composants nécessaires à la nouvelle UI.',
    },
    [
      {
        nl: 'Redesign van het Workshop-component',
        en: 'Redesign of the Workshop component',
        fr: 'Refonte du composant Workshop',
      },
      {
        nl: 'Domeinspecifieke pijlerpagina’s voor België en Nederland',
        en: 'Domain-specific pillar pages for Belgium and the Netherlands',
        fr: 'Pages piliers spécifiques à chaque domaine pour la Belgique et les Pays-Bas',
      },
    ],
  ),
  feature(
    'core',
    'code',
    {
      nl: 'Codebase en onderhoudbaarheid',
      en: 'Codebase and maintainability',
      fr: 'Code et maintenabilité',
    },
    {
      nl: 'Nieuwe herbruikbare componenten gemaakt en bestaande code herschreven voor betere onderhoudbaarheid.',
      en: 'Built new reusable components and refactored existing code for better maintainability.',
      fr: 'Nouveaux composants réutilisables créés et code existant refactorisé pour une meilleure maintenabilité.',
    },
    [
      {
        nl: 'Codebase gemigreerd van Vue Options API naar Composition API',
        en: 'Migrated the codebase from the Vue Options API to the Composition API',
        fr: 'Code migré de l’Options API de Vue vers la Composition API',
      },
      {
        nl: 'Gegevensverwerking geoptimaliseerd met Inertia.js, zodat expliciete API calls niet meer nodig zijn',
        en: 'Optimised data handling with Inertia.js, so explicit API calls are no longer needed',
        fr: 'Gestion des données optimisée avec Inertia.js, sans appels API explicites',
      },
    ],
  ),
  feature(
    'core',
    'rocket',
    {
      nl: 'Mijn eerste ervaring als developer',
      en: 'My first experience as a developer',
      fr: 'Ma première expérience de développeur',
    },
    {
      nl: 'Mijn rol bestond uit het verbeteren van bestaande componenten en het maken van nieuwe, om de gebruikerservaring te verbeteren en de interface visueel aantrekkelijker te maken.',
      en: 'My role was to improve existing components and build new ones, to improve the user experience and make the interface more appealing.',
      fr: 'Mon rôle consistait à améliorer des composants existants et à en créer de nouveaux, pour optimiser l’expérience utilisateur et rendre l’interface plus attrayante.',
    },
    [
      {
        nl: 'Eén dag per week als student, en in juli twee weken fulltime',
        en: 'One day a week as a student, and two weeks full time in July',
        fr: 'Un jour par semaine comme étudiant, et deux semaines à temps plein en juillet',
      },
      {
        nl: 'Praktijkkennis opgedaan binnen een dynamische start-up',
        en: 'Gained practical experience in a dynamic start-up',
        fr: 'Acquis de l’expérience pratique dans une start-up dynamique',
      },
      {
        nl: 'Geleerd van ervaren ontwikkelaars',
        en: 'Learned from experienced developers',
        fr: 'Appris auprès de développeurs expérimentés',
      },
    ],
  ),
]);

type PortableBlock = {
  _key: string;
  children?: { text?: string }[];
  [key: string]: unknown;
};
type LocalizedBlocks = Record<'nl' | 'en' | 'fr', PortableBlock[]>;

const STUDENT_TEXT: Lang = {
  nl: 'Zes maanden lang werkte ik als student één dag per week als front-end developer. In juli kreeg ik de kans om twee weken fulltime te werken.',
  en: 'For six months I worked as a student, one day a week, as a front-end developer. In July I got the chance to work full time for two weeks.',
  fr: 'Pendant six mois, j’ai travaillé comme étudiant, un jour par semaine, en tant que développeur front-end. En juillet, j’ai eu l’occasion de travailler à temps plein pendant deux semaines.',
};

const run = async () => {
  const spot = await client.fetch<{
    text: LocalizedBlocks;
    description: LocalizedBlocks;
  }>(`*[_id == $id][0]{text, description}`, { id: SPOTWORKSHOPS_ID });

  // Replace the paragraph that says "freelance student" in text and description
  const fix = (field: LocalizedBlocks | undefined) => {
    if (!field) return undefined;
    const next: Record<string, PortableBlock[]> = {};
    for (const lang of ['nl', 'en', 'fr'] as const) {
      next[lang] = (field[lang] ?? []).map((b) => {
        const plain = (b.children ?? []).map((s) => s.text ?? '').join('');
        return /freelance|Zes maanden|six months|six mois/i.test(plain)
          ? { ...block(STUDENT_TEXT[lang]), _key: b._key }
          : b;
      });
    }
    return { ...field, ...next };
  };

  console.log(
    `${apply ? 'APPLY' : 'DRY RUN'}: sections for Craftzing and SpotWorkshops`,
  );
  if (!apply) return;

  await client
    .patch(CRAFTZING_ID)
    .set({ sections: [craftzing] })
    .unset(['tasks'])
    .commit();
  await client
    .patch(SPOTWORKSHOPS_ID)
    .set({
      sections: [spotworkshops],
      text: fix(spot.text),
      description: fix(spot.description),
    })
    .unset(['tasks'])
    .commit();
  console.log('updated');
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
