import type { FC } from 'react';
import { localize } from '@/graphql/localize';
import type { SectionView } from '@/graphql/types';

type SectionDecisionsProps = {
  section: Extract<SectionView, { type: 'decisions' }>;
  locale: string;
};

const SectionDecisions: FC<SectionDecisionsProps> = ({ section, locale }) => (
  <dl className="mt-6 border-t border-white/10">
    {section.decisions.map((decision, index) => (
      <div
        key={`${index}-${localize(decision.title, locale)}`}
        className="grid gap-1.5 border-b border-white/10 py-5 md:grid-cols-[minmax(180px,280px)_minmax(0,1fr)] md:gap-8"
      >
        <dt className="text-base font-normal text-beige-1">
          {localize(decision.title, locale)}
        </dt>
        <dd className="text-[15px] leading-relaxed text-white/75">
          {localize(decision.text, locale)}
        </dd>
      </div>
    ))}
  </dl>
);

export { SectionDecisions };
