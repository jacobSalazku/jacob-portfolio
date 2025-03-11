import { defineQuery } from 'next-sanity';

export const PROJECT_SLUG = defineQuery(
  `*[_type == 'project']{
	slug
}`,
);
