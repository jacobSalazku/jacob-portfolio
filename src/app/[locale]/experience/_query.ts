import { defineQuery } from 'next-sanity';

export const EXPERIENCE_QUERY = defineQuery(`
  *[_type == "experience" && defined(slug.current)]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    timespan,
    description,
    tags[]->{
      _id,
      title,
    },
    "techStack": *[_type == "techStack" && references(^.id)]{
      _id,
      title,
    }
  }
`);
