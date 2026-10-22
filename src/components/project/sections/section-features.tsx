import type { FC } from 'react';
import { groupFeatures } from '@/graphql/group-features';
import type { SectionView } from '@/graphql/types';
import { getTranslations } from 'next-intl/server';
import { FeatureGroup } from './feature-group';
import { FeatureItem, type FeatureVariant } from './feature-item';

type SectionFeaturesProps = {
  section: Extract<SectionView, { type: 'features' }>;
  locale: string;
  variant?: FeatureVariant;
};

const SectionFeatures: FC<SectionFeaturesProps> = async ({
  section,
  locale,
  variant = 'plain',
}) => {
  const t = await getTranslations('Projects');

  if (variant === 'cards') {
    return (
      <div className="flex flex-col border-t border-white/10">
        {section.features.map((feature, index) => (
          <FeatureItem
            key={`${index}-${feature.title?.en ?? feature.title?.nl}`}
            feature={feature}
            locale={locale}
            pageLinkLabel={t('viewProject')}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16">
      {groupFeatures(section.features).map((group, index) => (
        <FeatureGroup
          key={group.key}
          group={group}
          locale={locale}
          flip={index % 2 === 1}
        />
      ))}
    </div>
  );
};

export { SectionFeatures };
