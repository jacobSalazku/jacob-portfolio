import { defineQuery } from 'next-sanity';

export const EXPERIENCE_DETAIL_PAGE = defineQuery(`
  *[_type == "experience" && slug.current == $slug][0]
  {
    ...,
    "tags": tags[]->,
    "project": project->{
        slug,
        title,
      }
  }
`);
