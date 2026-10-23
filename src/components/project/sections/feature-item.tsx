import type { FC } from 'react';
import type { FeatureView } from '@/graphql/types';
import { FeatureText } from './feature-text';
import { FeatureTile } from './feature-tile';

export type FeatureVariant = 'plain' | 'cards';

type FeatureItemProps = {
  feature: FeatureView;
  locale: string;
  pageLinkLabel?: string;
};

const FeatureItem: FC<FeatureItemProps> = ({
  feature,
  locale,
  pageLinkLabel,
}) => (
  <article className="grid items-start gap-6 border-b border-white/10 py-12 md:grid-cols-[100px_minmax(0,1fr)] md:gap-10">
    <FeatureTile icon={feature.category?.icon ?? feature.icon} size="sm" />
    <FeatureText
      feature={feature}
      locale={locale}
      pageLinkLabel={pageLinkLabel}
    />
  </article>
);

export { FeatureItem };
