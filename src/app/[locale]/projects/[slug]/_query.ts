import { defineQuery } from 'next-sanity';

export const PROJECT_DETAIL_PAGE = defineQuery(`
	*[_type == "project" && slug.current == $slug][0]
	{
	  ...,
	  "tags": tags[]->,
	}
  `);
