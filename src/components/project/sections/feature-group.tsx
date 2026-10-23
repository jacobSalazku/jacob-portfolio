import type { FC } from 'react';
import type { FeatureGroupView } from '@/graphql/group-features';
import { localize } from '@/graphql/localize';
import { cn } from '@/utils/utils';
import { FeatureText } from './feature-text';
import { FeatureTile } from './feature-tile';

type FeatureGroupProps = {
  group: FeatureGroupView;
  locale: string;
  flip: boolean;
};

const FeatureGroup: FC<FeatureGroupProps> = ({ group, locale, flip }) => {
  const categoryName = localize(group.title, locale);

  return (
    <article
      className={cn(
        'grid items-start gap-8 md:gap-14',
        flip
          ? 'md:grid-cols-[360px_minmax(0,1fr)]'
          : 'md:grid-cols-[minmax(0,1fr)_360px]',
      )}
    >
      <div className={cn('flex min-w-0 flex-col gap-10', flip && 'md:order-2')}>
        {categoryName && (
          <p className="text-xs uppercase tracking-[0.14em] text-white/55">
            {categoryName}
          </p>
        )}
        {group.features.map((feature, index) => (
          <FeatureText
            key={`${index}-${feature.title?.en ?? feature.title?.nl}`}
            feature={feature}
            locale={locale}
          />
        ))}
      </div>
      <FeatureTile
        icon={group.icon}
        className={cn(
          'md:sticky md:top-32 md:justify-self-end',
          flip && 'md:order-1 md:justify-self-start',
        )}
      />
    </article>
  );
};

export { FeatureGroup };
