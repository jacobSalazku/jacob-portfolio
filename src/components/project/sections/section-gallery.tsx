import type { FC } from 'react';
import { BrowserWindow } from '@/components/browser-window';
import { localize } from '@/graphql/localize';
import type { SectionView } from '@/graphql/types';
import { SectionImage } from './section-image';

type SectionGalleryProps = {
  section: Extract<SectionView, { type: 'gallery' }>;
  locale: string;
};

const SectionGallery: FC<SectionGalleryProps> = ({ section, locale }) => (
  <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
    {section.images.map(({ caption, url, image }, index) => {
      const text = localize(caption, locale);
      return (
        <figure
          key={`${index}-${text}`}
          className="flex min-w-0 flex-col gap-3"
        >
          <BrowserWindow url={url}>
            <SectionImage
              image={image}
              alt={text ?? image.alt ?? ''}
              sizes="(min-width: 1024px) 30vw, 90vw"
            />
          </BrowserWindow>
          {text && (
            <figcaption className="text-[13px] text-white/55">
              {text}
            </figcaption>
          )}
        </figure>
      );
    })}
  </div>
);

export { SectionGallery };
