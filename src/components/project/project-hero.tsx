import type { FC } from 'react';
import { BrowserWindow } from '@/components/browser-window';
import type { ProjectView } from '@/graphql/types';

type ProjectHeroProps = {
  project: ProjectView;
};

const ProjectHero: FC<ProjectHeroProps> = ({ project }) => {
  const { title, url } = project;
  if (!title) return null;

  return <BrowserWindow title={title} url={url} variant="wide" />;
};

export { ProjectHero };
