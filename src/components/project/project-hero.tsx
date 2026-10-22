import type { FC } from 'react';
import { BrowserWindow } from '@/components/browser-window';
import type { ProjectView } from '@/graphql/types';
import { SectionImage } from './sections/section-image';

type ProjectHeroProps = {
  project: ProjectView;
};

const ProjectHero: FC<ProjectHeroProps> = ({ project }) => {
  const { mainImage, title, url } = project;
  if (!mainImage) return null;

  return (
    <BrowserWindow url={url} variant="wide">
      <SectionImage
        image={mainImage}
        alt={mainImage.alt ?? title ?? ''}
        sizes="(min-width: 1200px) 1100px, 95vw"
        width={1600}
      />
    </BrowserWindow>
  );
};

export { ProjectHero };
