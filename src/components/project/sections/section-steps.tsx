import type { FC } from 'react';
import { localize } from '@/graphql/localize';
import type { SectionView } from '@/graphql/types';
import { AUTO_GRID_CARDS, PANEL } from './constants';

type SectionStepsProps = {
  section: Extract<SectionView, { type: 'steps' }>;
  locale: string;
};

const SectionSteps: FC<SectionStepsProps> = ({ section, locale }) => (
  <ol className={`${AUTO_GRID_CARDS} mt-7`}>
    {section.steps.map((step, index) => (
      <li
        key={`${index}-${localize(step.title, locale)}`}
        className={`${PANEL} p-6`}
      >
        <span className="mb-4 grid h-8 w-8 place-items-center rounded-lg bg-beige-1/10 text-sm text-beige-1">
          {index + 1}
        </span>
        <h3 className="mb-2 text-lg font-normal text-white">
          {localize(step.title, locale)}
        </h3>
        <p className="text-sm leading-relaxed text-white/75">
          {localize(step.text, locale)}
        </p>
      </li>
    ))}
  </ol>
);

export { SectionSteps };
