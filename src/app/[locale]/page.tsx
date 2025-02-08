import Home from '@/features/home';
import { client } from '@/sanity/lib/client';
import { Slug } from '../../../sanity.types';
import { SLUG_QUERY } from './_query';

export default async function HomePage() {
  const slugs = await client.fetch<Slug[]>(SLUG_QUERY, {});

  return <Home slugs={slugs} />;
}
