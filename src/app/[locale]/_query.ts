import { defineQuery } from 'next-sanity';

export const SLUG_QUERY = defineQuery(
  `*[_type == 'project']{
  slug
}`,
);
