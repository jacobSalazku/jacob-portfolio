import { getCliClient } from 'sanity/cli';

type Feature = { _key: string; [key: string]: unknown };
type ProjectDoc = {
  _id: string;
  _rev: string;
  title?: string;
  features?: Feature[];
  sections?: unknown[];
};

const client = getCliClient({ apiVersion: '2025-02-19' });
const apply = process.argv.includes('--apply');

// Same wording as the "keyFeatures" translations in messages/*.json
const SECTION_TITLE = {
  _type: 'localizedTitle',
  nl: 'Belangrijke features',
  en: 'Key features',
  fr: 'Caractéristiques essentielles',
};

const run = async () => {
  // The raw perspective includes drafts, so published and draft stay in line
  const projects = await client.fetch<ProjectDoc[]>(
    `*[_type == "project" && count(features) > 0 && (!defined(sections) || count(sections) == 0)]{_id, _rev, title, features, sections}`,
    {},
    { perspective: 'raw' },
  );

  console.log(
    `${apply ? 'APPLY' : 'DRY RUN'}: ${projects.length} document(s) to migrate`,
  );

  for (const project of projects) {
    const sections = [
      {
        _key: 'key-features',
        _type: 'projectSection',
        type: 'features',
        title: SECTION_TITLE,
        anchor: { _type: 'slug', current: 'key-features' },
        features: project.features,
      },
    ];
    console.log(
      `- ${project._id} (${project.title}): ${project.features?.length} feature(s) -> section "key-features"`,
    );
    if (apply) {
      await client
        .patch(project._id)
        .ifRevisionId(project._rev)
        .set({ sections })
        .commit();
      console.log('  migrated');
    }
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
