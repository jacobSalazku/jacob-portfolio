import ProjectBlock from '@/features/project-overview';

export default async function ProjectOverview(params: {
  params: { locale: string };
}) {
  const { locale } = params.params;
  return <ProjectBlock locale={locale} />;
}
