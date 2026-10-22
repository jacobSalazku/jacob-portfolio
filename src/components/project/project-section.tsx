import type { FC } from 'react';
import { localize } from '@/graphql/localize';
import type { SectionView } from '@/graphql/types';
import type { FeatureVariant } from './sections/feature-item';
import { SectionDecisions } from './sections/section-decisions';
import { SectionFeatures } from './sections/section-features';
import { SectionGallery } from './sections/section-gallery';
import { SectionSteps } from './sections/section-steps';
import { SectionText } from './sections/section-text';

type ProjectSectionProps = {
  section: SectionView;
  locale: string;
  featuresVariant?: FeatureVariant;
  hideTitle?: boolean;
};

const SectionContent: FC<ProjectSectionProps> = ({
  section,
  locale,
  featuresVariant,
}) => {
  switch (section.type) {
    case 'text':
      return <SectionText section={section} locale={locale} />;
    case 'steps':
      return <SectionSteps section={section} locale={locale} />;
    case 'features':
      return (
        <SectionFeatures
          section={section}
          locale={locale}
          variant={featuresVariant}
        />
      );
    case 'decisions':
      return <SectionDecisions section={section} locale={locale} />;
    case 'gallery':
      return <SectionGallery section={section} locale={locale} />;
  }
};

const ProjectSection: FC<ProjectSectionProps> = ({
  section,
  locale,
  featuresVariant,
  hideTitle,
}) => (
  <section id={section.anchor} className="mb-20 scroll-mt-32">
    {!hideTitle && (
      <h2 className="mb-5 text-3xl font-light tracking-tight text-white">
        {localize(section.title, locale)}
      </h2>
    )}
    <SectionContent
      section={section}
      locale={locale}
      featuresVariant={featuresVariant}
    />
  </section>
);

export { ProjectSection };
