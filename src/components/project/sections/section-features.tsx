import type { FC } from 'react';
import { BrowserWindow } from '@/components/browser-window';
import { PortableTextRenderer } from '@/components/portable-text-render';
import { localize } from '@/graphql/localize';
import type { SectionView } from '@/graphql/types';
import { cn } from '@/utils/utils';
import { getTranslations } from 'next-intl/server';
import { CheckList } from './check-list';
import { FEATURE_LABEL_STYLES } from './constants';
import { SectionImage } from './section-image';

type SectionFeaturesProps = {
  section: Extract<SectionView, { type: 'features' }>;
  locale: string;
};

const SectionFeatures: FC<SectionFeaturesProps> = async ({
  section,
  locale,
}) => {
  const t = await getTranslations('Projects');

  return (
    <div className="flex flex-col gap-14">
      {section.features.map((feature, index) => {
        const title = localize(feature.title, locale);
        const content = localize(feature.content, locale);
        const points = (feature.points ?? []).flatMap((point) => {
          const text = localize(point, locale);
          return text ? [text] : [];
        });

        return (
          <article key={`${index}-${title}`} className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {feature.label && (
                <span
                  className={cn(
                    'rounded-md px-2.5 py-0.5 text-[11px] font-medium',
                    FEATURE_LABEL_STYLES[feature.label],
                  )}
                >
                  {t(`label.${feature.label}`)}
                </span>
              )}
              <h3 className="text-[22px] font-normal tracking-tight text-white">
                {title}
              </h3>
            </div>
            {content && (
              <div className="max-w-[66ch] font-light text-white/75">
                <PortableTextRenderer value={content} />
              </div>
            )}
            {points.length > 0 && <CheckList items={points} className="mt-0" />}
            {feature.image && (
              <BrowserWindow url={feature.url} variant="wide" className="mt-3">
                <SectionImage
                  image={feature.image}
                  alt={title ?? feature.image.alt ?? ''}
                  sizes="(min-width: 1024px) 800px, 90vw"
                />
              </BrowserWindow>
            )}
          </article>
        );
      })}
    </div>
  );
};

export { SectionFeatures };
