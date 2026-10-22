import type { FC } from 'react';
import { PortableTextRenderer } from '@/components/portable-text-render';
import { localize } from '@/graphql/localize';
import type { SectionView } from '@/graphql/types';
import { CheckList } from './check-list';

type SectionTextProps = {
  section: Extract<SectionView, { type: 'text' }>;
  locale: string;
};

const SectionText: FC<SectionTextProps> = ({ section, locale }) => {
  const body = localize(section.body, locale);
  const points = section.points.flatMap((point) => {
    const text = localize(point, locale);
    return text ? [text] : [];
  });

  return (
    <div className="max-w-[66ch] font-light text-white/75">
      {body && <PortableTextRenderer value={body} />}
      {points.length > 0 && <CheckList items={points} className="max-w-none" />}
    </div>
  );
};

export { SectionText };
