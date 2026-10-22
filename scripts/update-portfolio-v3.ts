/**
 * One-off content update: turns the "Portfolio v2" project into "Portfolio v3"
 * and fills the case study fields (header, tech stack, sections).
 *
 * Dry run (default):  pnpm sanity exec scripts/update-portfolio-v3.ts --with-user-token
 * Apply:              pnpm sanity exec scripts/update-portfolio-v3.ts --with-user-token -- --apply
 *
 * Make a backup first: `pnpm sanity dataset export production backup.tar.gz`.
 */
import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2025-02-19' });
const apply = process.argv.includes('--apply');

type Lang = { nl: string; en: string; fr: string };

let counter = 0;
const key = () => `k${(counter += 1)}`;

const title = (v: Lang) => ({ _type: 'localizedTitle', ...v });
const text = (v: Lang) => ({ _type: 'localizedText', ...v });
const block = (value: string) => ({
  _type: 'block',
  _key: key(),
  style: 'normal',
  markDefs: [],
  children: [{ _type: 'span', _key: key(), text: value, marks: [] }],
});
// Rich text per language, one paragraph per entry
const rich = (paragraphs: Lang[]) => ({
  _type: 'blockContent',
  nl: paragraphs.map((p) => block(p.nl)),
  en: paragraphs.map((p) => block(p.en)),
  fr: paragraphs.map((p) => block(p.fr)),
});
const list = (items: Lang[]) =>
  items.map((item) => ({ _key: key(), ...title(item) }));

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
          nl: 'Portfolio v3 is de derde versie van mijn eigen website. De inhoud komt volledig uit Sanity: projecten, ervaringen en zelfs de opbouw van elke projectpagina worden in de CMS beheerd, in het Nederlands, Engels en Frans.',
          en: 'Portfolio v3 is the third version of my own website. All content comes from Sanity: projects, experiences and even the structure of each project page are managed in the CMS, in Dutch, English and French.',
          fr: 'Portfolio v3 est la troisième version de mon propre site. Tout le contenu provient de Sanity : les projets, les expériences et même la structure de chaque page de projet sont gérés dans le CMS, en néerlandais, en anglais et en français.',
        },
        {
          nl: 'Ten opzichte van v2 heb ik de technische basis vernieuwd (Next.js 16, React 19 en Sanity 6), de content via GraphQL opgehaald met gegenereerde types, en het ontwerp volledig opnieuw opgebouwd.',
          en: 'Compared to v2 I renewed the technical base (Next.js 16, React 19 and Sanity 6), fetched the content through GraphQL with generated types, and rebuilt the design from scratch.',
          fr: "Par rapport à la v2, j'ai renouvelé la base technique (Next.js 16, React 19 et Sanity 6), récupéré le contenu via GraphQL avec des types générés et entièrement reconstruit le design.",
        },
      ]),
    },
  ),
  section(
    'challenge',
    { nl: 'De uitdaging', en: 'The challenge', fr: 'Le défi' },
    {
      type: 'text',
      body: rich([
        {
          nl: 'Een portfolio verandert voortdurend. Elke nieuwe tekst of pagina mocht niet opnieuw code kosten, en de site moest snel, toegankelijk en meertalig blijven.',
          en: 'A portfolio changes all the time. Every new text or page should not need new code, and the site had to stay fast, accessible and multilingual.',
          fr: 'Un portfolio évolue sans cesse. Chaque nouveau texte ou page ne devait pas demander de nouveau code, et le site devait rester rapide, accessible et multilingue.',
        },
      ]),
      points: list([
        {
          nl: 'Alle content beheren in de CMS, niet in de code',
          en: 'Manage all content in the CMS, not in the code',
          fr: 'Gérer tout le contenu dans le CMS, pas dans le code',
        },
        {
          nl: 'Dezelfde pagina in drie talen met terugval op een andere taal',
          en: 'The same page in three languages with a fallback language',
          fr: 'La même page en trois langues avec une langue de repli',
        },
        {
          nl: 'Typefouten vangen bij het bouwen, niet in productie',
          en: 'Catch type errors while building, not in production',
          fr: 'Détecter les erreurs de types à la compilation, pas en production',
        },
        {
          nl: 'Eén ontwerp dat op telefoon, tablet en desktop klopt',
          en: 'One design that works on phone, tablet and desktop',
          fr: 'Un seul design qui fonctionne sur téléphone, tablette et ordinateur',
        },
      ]),
    },
  ),
  section(
    'approach',
    { nl: 'Mijn aanpak', en: 'My approach', fr: 'Mon approche' },
    {
      type: 'steps',
      steps: [
        {
          _key: key(),
          _type: 'projectStep',
          title: title({
            nl: 'Ontwerp eerst',
            en: 'Design first',
            fr: "Concevoir d'abord",
          }),
          text: text({
            nl: 'Ik ontwierp alle pagina’s in een prototype: navigatie, homepagina, lijsten en detailpagina’s, met de Safari-vensters als vaste stijl.',
            en: 'I designed all pages in a prototype: navigation, home page, lists and detail pages, with the Safari windows as the fixed style.',
            fr: "J'ai conçu toutes les pages dans un prototype : navigation, page d'accueil, listes et pages de détail, avec les fenêtres Safari comme style fixe.",
          }),
        },
        {
          _key: key(),
          _type: 'projectStep',
          title: title({
            nl: 'Model in Sanity',
            en: 'Model in Sanity',
            fr: 'Modèle dans Sanity',
          }),
          text: text({
            nl: 'Daarna bouwde ik het schema: projecten, ervaringen en secties met een type, zodat elke pagina uit de CMS wordt opgebouwd.',
            en: 'Then I built the schema: projects, experiences and sections with a type, so each page is assembled from the CMS.',
            fr: 'Ensuite, j’ai construit le schéma : projets, expériences et sections avec un type, pour que chaque page soit composée depuis le CMS.',
          }),
        },
        {
          _key: key(),
          _type: 'projectStep',
          title: title({
            nl: 'Bouwen en controleren',
            en: 'Build and check',
            fr: 'Construire et vérifier',
          }),
          text: text({
            nl: 'Ik bouwde de componenten stap voor stap, controleerde elke pagina in de browser en liet code-reviews de fouten vangen.',
            en: 'I built the components step by step, checked every page in the browser and let code reviews catch mistakes.',
            fr: "J'ai construit les composants étape par étape, vérifié chaque page dans le navigateur et laissé les revues de code détecter les erreurs.",
          }),
        },
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
        {
          _key: key(),
          _type: 'featureBlock',
          label: 'feature',
          title: title({
            nl: 'Projectpagina’s uit de CMS',
            en: 'Project pages from the CMS',
            fr: 'Pages de projet depuis le CMS',
          }),
          content: rich([
            {
              nl: 'Een projectpagina bestaat uit secties die ik in Sanity toevoeg: tekst, stappen, features, besluiten en schermen. De inhoudsopgave bouwt zichzelf uit de titels.',
              en: 'A project page consists of sections that I add in Sanity: text, steps, features, decisions and screens. The table of contents builds itself from the titles.',
              fr: "Une page de projet se compose de sections que j'ajoute dans Sanity : texte, étapes, fonctionnalités, décisions et écrans. La table des matières se construit à partir des titres.",
            },
          ]),
          points: list([
            {
              nl: 'Vijf soorten secties met eigen opmaak',
              en: 'Five section types with their own layout',
              fr: 'Cinq types de sections avec leur propre mise en page',
            },
            {
              nl: 'Inhoudsopgave met actieve markering',
              en: 'Table of contents with an active marker',
              fr: 'Table des matières avec marqueur actif',
            },
          ]),
          url: 'jacob-salazaku.be/projects',
        },
        {
          _key: key(),
          _type: 'featureBlock',
          label: 'core',
          title: title({
            nl: 'Meertalig',
            en: 'Multilingual',
            fr: 'Multilingue',
          }),
          content: rich([
            {
              nl: 'De hele site is beschikbaar in het Nederlands, Engels en Frans. Teksten in de CMS hebben per taal een veld, met een terugval als een vertaling ontbreekt.',
              en: 'The whole site is available in Dutch, English and French. Texts in the CMS have a field per language, with a fallback when a translation is missing.',
              fr: 'Tout le site est disponible en néerlandais, en anglais et en français. Les textes du CMS ont un champ par langue, avec une langue de repli quand une traduction manque.',
            },
          ]),
          points: list([
            {
              nl: 'Routes met taalprefix',
              en: 'Locale-prefixed routes',
              fr: 'Routes avec préfixe de langue',
            },
            {
              nl: 'Terugval op een andere taal',
              en: 'Fallback to another language',
              fr: 'Repli sur une autre langue',
            },
          ]),
          url: 'jacob-salazaku.be/nl',
        },
        {
          _key: key(),
          _type: 'featureBlock',
          label: 'feature',
          title: title({
            nl: 'Safari-vensters',
            en: 'Safari windows',
            fr: 'Fenêtres Safari',
          }),
          content: rich([
            {
              nl: 'In plaats van schermafbeeldingen toont elk project een eigen browservenster met de naam en een adres. Eén herbruikbaar component voor de hero, de kaarten en de galerij.',
              en: 'Instead of screenshots every project shows its own browser window with the name and an address. One reusable component for the hero, the cards and the gallery.',
              fr: "À la place de captures d'écran, chaque projet affiche sa propre fenêtre de navigateur avec le nom et une adresse. Un seul composant réutilisable pour le hero, les cartes et la galerie.",
            },
          ]),
          url: 'jacob-salazaku.be',
        },
      ],
    },
  ),
  section(
    'decisions',
    {
      nl: 'Technische beslissingen',
      en: 'Technical decisions',
      fr: 'Décisions techniques',
    },
    {
      type: 'decisions',
      decisions: [
        {
          _key: key(),
          _type: 'projectDecision',
          title: title({
            nl: 'Next.js 16 met React 19',
            en: 'Next.js 16 with React 19',
            fr: 'Next.js 16 avec React 19',
          }),
          text: text({
            nl: 'Servercomponenten voor snelle eerste laadtijden en één route per taal.',
            en: 'Server components for fast first loads and one route per language.',
            fr: 'Composants serveur pour des premiers chargements rapides et une route par langue.',
          }),
        },
        {
          _key: key(),
          _type: 'projectDecision',
          title: title({
            nl: 'Sanity met GraphQL',
            en: 'Sanity with GraphQL',
            fr: 'Sanity avec GraphQL',
          }),
          text: text({
            nl: 'Queries in .gql-bestanden met gegenereerde types: een hernoemd veld geeft een compilerfout in plaats van een lege pagina.',
            en: 'Queries in .gql files with generated types: a renamed field gives a compiler error instead of an empty page.',
            fr: "Requêtes dans des fichiers .gql avec types générés : un champ renommé donne une erreur de compilation au lieu d'une page vide.",
          }),
        },
        {
          _key: key(),
          _type: 'projectDecision',
          title: title({
            nl: 'Eén sectietype in de CMS',
            en: 'One section type in the CMS',
            fr: 'Un seul type de section dans le CMS',
          }),
          text: text({
            nl: 'Eén object met een type in plaats van losse typen, zodat de GraphQL-queries eenvoudig blijven.',
            en: 'One object with a type instead of separate types, so the GraphQL queries stay simple.',
            fr: 'Un objet avec un type au lieu de types séparés, pour que les requêtes GraphQL restent simples.',
          }),
        },
        {
          _key: key(),
          _type: 'projectDecision',
          title: title({
            nl: 'Tailwind CSS',
            en: 'Tailwind CSS',
            fr: 'Tailwind CSS',
          }),
          text: text({
            nl: 'Consistente ruimtes en kleuren zonder een apart stylesheet om te onderhouden.',
            en: 'Consistent spacing and colours without a separate stylesheet to maintain.',
            fr: 'Espacements et couleurs cohérents sans feuille de style séparée à maintenir.',
          }),
        },
      ],
    },
  ),
  section(
    'outcome',
    {
      nl: 'Resultaat en wat ik leerde',
      en: 'Outcome and what I learned',
      fr: "Résultat et ce que j'ai appris",
    },
    {
      type: 'text',
      body: rich([
        {
          nl: 'De site werkt op telefoon, tablet en desktop, in drie talen, en alle inhoud beheer ik zonder code aan te raken.',
          en: 'The site works on phone, tablet and desktop, in three languages, and I manage all content without touching code.',
          fr: 'Le site fonctionne sur téléphone, tablette et ordinateur, en trois langues, et je gère tout le contenu sans toucher au code.',
        },
        {
          nl: 'Ik leerde hoeveel tijd gegenereerde types besparen, en dat kleine, afgebakende stappen met een review na elke stap een grote migratie beheersbaar houden.',
          en: 'I learned how much time generated types save, and that small steps with a review after each step keep a large migration manageable.',
          fr: "J'ai appris combien de temps font gagner les types générés, et que de petites étapes avec une revue après chacune gardent une grande migration maîtrisable.",
        },
      ]),
    },
  ),
];

const TAGS = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Sanity',
  'GraphQL',
];

const run = async () => {
  const projects = await client.fetch<{ _id: string; _rev: string }[]>(
    `*[_type == "project" && slug.current == "portfolio-v2"]{_id, _rev}`,
    {},
    { perspective: 'raw' },
  );
  const tags = await client.fetch<{ _id: string; title: string }[]>(
    `*[_type == "techStack" && title in $titles]{_id, title}`,
    { titles: TAGS },
    { perspective: 'raw' },
  );
  if (projects.length !== 1) {
    throw new Error(
      `Expected one portfolio-v2 project, found ${projects.length}`,
    );
  }
  const missing = TAGS.filter(
    (name) => !tags.some((tag) => tag.title === name),
  );
  if (missing.length > 0)
    throw new Error(`Missing tech stack: ${missing.join(', ')}`);

  const [project] = projects;
  const set = {
    title: 'Portfolio v3',
    slug: { _type: 'slug', current: 'portfolio-v3' },
    lede: text({
      nl: 'De derde versie van mijn portfolio: volledig beheerd in Sanity, in drie talen en opnieuw ontworpen met eigen Safari-vensters.',
      en: 'The third version of my portfolio: fully managed in Sanity, in three languages and redesigned with its own Safari windows.',
      fr: 'La troisième version de mon portfolio : entièrement gérée dans Sanity, en trois langues et redessinée avec ses propres fenêtres Safari.',
    }),
    role: title({
      nl: 'Frontend developer',
      en: 'Frontend developer',
      fr: 'Développeur Frontend',
    }),
    timeline: title({ nl: '2026', en: '2026', fr: '2026' }),
    projectType: title({
      nl: 'Persoonlijke website',
      en: 'Personal website',
      fr: 'Site personnel',
    }),
    languages: ['nl', 'en', 'fr'],
    sourceUrl: 'https://github.com/jacobSalazku/jacob-portfolio',
    url: 'jacob-salazaku.be',
    tags: TAGS.map((name) => ({
      _key: key(),
      _type: 'reference',
      _ref: tags.find((tag) => tag.title === name)!._id,
    })),
    sections: SECTIONS,
  };

  console.log(`${apply ? 'APPLY' : 'DRY RUN'}: ${project._id}`);
  console.log(
    `title -> ${set.title}, slug -> portfolio-v3, ${set.tags.length} tags, ${SECTIONS.length} sections`,
  );
  if (apply) {
    await client
      .patch(project._id)
      .ifRevisionId(project._rev)
      .set(set)
      .commit();
    console.log('updated');
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
