import type { FC } from 'react';
import { BrowserWindow } from '@/components/browser-window';
import { localize } from '@/graphql/localize';
import type { SectionView } from '@/graphql/types';

type SectionGalleryProps = {
  section: Extract<SectionView, { type: 'gallery' }>;
  locale: string;
};

const SectionGallery: FC<SectionGalleryProps> = ({ section, locale }) => (
  <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
    {section.images.map(({ caption, url }, index) => {
      const title = localize(caption, locale);
      return title ? (
        <BrowserWindow key={`${index}-${title}`} title={title} url={url} />
      ) : null;
    })}
  </div>
);

export { SectionGallery };
