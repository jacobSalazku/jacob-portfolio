import ExperienceBlock from '@/features/experience-overview';

export default async function ExperienceOverview(params: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params.params;
  return <ExperienceBlock locale={locale} slug={slug} />;
}
