/**
 * One-off content update: fills the ResqControl project as a case study from
 * what the user told: voluntary front-end work for a small startup, September
 * to February, the first experience with React and Next.js. The existing
 * intro text and features are reused. Only the published document is
 * changed; an unpublished draft in Studio is left alone.
 *
 * Dry run (default):  pnpm sanity exec scripts/update-resqcontrol.ts --with-user-token
 * Apply:              pnpm sanity exec scripts/update-resqcontrol.ts --with-user-token -- --apply
 *
 * Make a backup first: `pnpm sanity dataset export production backup.tar.gz`.
 */
import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2025-02-19' });
const apply = process.argv.includes('--apply');

type Lang = { nl: string; en: string; fr: string };
type Block = { _type: string; _key: string; [key: string]: unknown };

let counter = 0;
const key = () => `q${(counter += 1)}`;

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

const TAGS = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'React Hook Form',
  'Zod',
];

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
    `*[_id == "da012412-345c-42a9-9a12-5bc3f8337f94"][0]{_id, _rev, text}`,
    {},
    { perspective: 'raw' },
  );
  if (!project) throw new Error('ResqControl not found');

  const techs = await client.fetch<{ _id: string; title: string }[]>(
    `*[_type == "techStack" && title in $titles]{_id, title}`,
    { titles: TAGS },
    { perspective: 'raw' },
  );
  const ids = new Map(techs.map((tech) => [tech.title, tech._id]));
  const missing = TAGS.filter((name) => !ids.has(name));
  if (missing.length > 0)
    throw new Error(`Missing tech stack: ${missing.join(', ')}`);

  // The existing intro text becomes the overview, in all languages
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
    section(
      'overview',
      { nl: 'Overzicht', en: 'Overview', fr: 'Aperçu' },
      {
        type: 'text',
        body: {
          _type: 'blockContent',
          nl: reuse(project.text?.nl),
          en: reuse(project.text?.en),
          fr: reuse(project.text?.fr),
        },
      },
    ),
    section(
      'role',
      { nl: 'Mijn rol', en: 'My role', fr: 'Mon rôle' },
      {
        type: 'text',
        body: rich([
          {
            nl: 'Ik werkte vrijwillig bij een kleine startup als front-end developer, van september tot februari.',
            en: 'I worked voluntarily at a small startup as a front-end developer, from September to February.',
            fr: 'J’ai travaillé bénévolement dans une petite startup comme développeur front-end, de septembre à février.',
          },
        ]),
        points: list([
          {
            nl: 'Vrijwilligerswerk bij een kleine startup',
            en: 'Voluntary work at a small startup',
            fr: 'Travail bénévole dans une petite startup',
          },
          {
            nl: 'Front-end developer van de website van Resqcontrol',
            en: 'Front-end developer of the Resqcontrol website',
            fr: 'Développeur front-end du site de Resqcontrol',
          },
          {
            nl: 'De eerste versie is niet in productie gebracht',
            en: 'The first version was not brought to production',
            fr: 'La première version n’a pas été mise en production',
          },
        ]),
      },
    ),
    section(
      'experience',
      {
        nl: 'Mijn eerste ervaring met React en Next.js',
        en: 'My first experience with React and Next.js',
        fr: 'Ma première expérience avec React et Next.js',
      },
      {
        type: 'text',
        body: rich([
          {
            nl: 'Dit project was mijn eerste ervaring met React en Next.js. Daarmee kon ik een modern frontend maken.',
            en: 'This project was my first experience with React and Next.js. With them I could build a modern frontend.',
            fr: 'Ce projet a été ma première expérience avec React et Next.js. Cela m’a permis de créer un frontend moderne.',
          },
        ]),
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
            'integrations',
            { nl: 'Demo-aanvraag', en: 'Demo request', fr: 'Demande de démo' },
            {
              nl: 'Gebruikers kunnen vragen stellen of een demo aanvragen. De aanvragen worden opgeslagen en naar het e-mailadres van Resqcontrol gestuurd.',
              en: 'Users can ask questions or request a demo. The inquiries are stored and sent to the Resqcontrol email address.',
              fr: 'Les utilisateurs peuvent poser des questions ou demander une démo. Les demandes sont enregistrées et envoyées à l’adresse e-mail de Resqcontrol.',
            },
            [
              {
                nl: 'Google Captcha tegen spam',
                en: 'Google Captcha against spam',
                fr: 'Google Captcha contre le spam',
              },
            ],
          ),
          feature(
            'feature',
            'content',
            { nl: 'Blog', en: 'Blog', fr: 'Blog' },
            {
              nl: 'Een blog waarvan alle inhoud uit de backend komt en dynamisch op de frontend wordt getoond.',
              en: 'A blog whose content is retrieved from the backend and displayed dynamically on the frontend.',
              fr: 'Un blog dont tout le contenu provient du backend et est affiché dynamiquement sur le frontend.',
            },
            [
              {
                nl: 'Een detailpagina voor elke post',
                en: 'A detail page for each post',
                fr: 'Une page de détail pour chaque article',
              },
            ],
          ),
          feature(
            'core',
            'content',
            {
              nl: 'Meertalig',
              en: 'Internationalization',
              fr: 'Internationalisation',
            },
            {
              nl: 'Elke pagina is beschikbaar in meerdere talen. De site detecteert de taal van de gebruiker en toont zich automatisch in die taal.',
              en: 'Every page is available in several languages. The site detects the language of the user and displays itself in that language automatically.',
              fr: 'Chaque page est disponible en plusieurs langues. Le site détecte la langue de l’utilisateur et s’affiche automatiquement dans cette langue.',
            },
            [
              {
                nl: 'Nederlands, Engels, Frans en Duits',
                en: 'Dutch, English, French and German',
                fr: 'Néerlandais, anglais, français et allemand',
              },
            ],
          ),
        ],
      },
    ),
  ];

  const set = {
    lede: text({
      nl: 'De eerste versie van de website van Resqcontrol, een bedrijf met diensten voor eerste hulp op festivals. Mijn eerste project met React en Next.js.',
      en: 'The first version of the website of Resqcontrol, a company with services for first aid at festivals. My first project with React and Next.js.',
      fr: 'La première version du site de Resqcontrol, une entreprise proposant des services de premiers secours lors de festivals. Mon premier projet avec React et Next.js.',
    }),
    role: title({
      nl: 'Front-end developer (vrijwilliger)',
      en: 'Front-end developer (volunteer)',
      fr: 'Développeur front-end (bénévole)',
    }),
    timeline: title({
      nl: 'September - februari',
      en: 'September - February',
      fr: 'Septembre - février',
    }),
    projectType: title({
      nl: 'Bedrijfswebsite',
      en: 'Company website',
      fr: 'Site d’entreprise',
    }),
    tags: TAGS.map((name) => ({
      _key: key(),
      _type: 'reference',
      _ref: ids.get(name)!,
    })),
    sections,
  };

  console.log(`${apply ? 'APPLY' : 'DRY RUN'}: ${project._id}`);
  console.log(`${sections.length} sections, ${set.tags.length} tags`);

  if (apply) {
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
