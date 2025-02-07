import { defineQuery } from 'next-sanity';

export const PROJECT_QUERY =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
	...,
	tags[]->{
		_id,
		title,
	}
}`);

export const TECH_STACK_QUERY = defineQuery(
  `*[_type == "techStack" && _id == $id][0]`,
);
