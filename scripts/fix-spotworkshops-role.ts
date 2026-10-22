import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2025-02-19' });
const apply = process.argv.includes('--apply');
const ID = '804114cd-9343-4ff5-982f-ee2edf879feb';

const set = {
  'role.nl': 'Front-end developer (student)',
  'role.en': 'Front-end developer (student)',
  'role.fr': 'Développeur front-end (étudiant)',
  'lede.nl':
    'Als student één dag per week front-end developer bij Spotworkshops, een platform dat samenwerkt met meer dan 500 ondernemers.',
  'lede.en':
    'One day a week as a student front-end developer at Spotworkshops, a platform that works with more than 500 entrepreneurs.',
  'lede.fr':
    'Un jour par semaine comme étudiant développeur front-end chez Spotworkshops, une plateforme qui collabore avec plus de 500 entrepreneurs.',
};

const run = async () => {
  console.log(apply ? 'APPLY' : 'DRY RUN', set);
  if (apply) await client.patch(ID).set(set).commit();
};
run();
