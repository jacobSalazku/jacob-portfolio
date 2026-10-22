import type { FC } from 'react';
import type { ExperienceView } from '@/graphql/types';
import { ExperienceTimelineItem } from './experience-timeline-item';

type ExperienceTimelineProps = {
  experiences: ExperienceView[];
  locale: string;
  cta: string;
};

const ExperienceTimeline: FC<ExperienceTimelineProps> = ({
  experiences,
  locale,
  cta,
}) => (
  <ol className="flex flex-col gap-16">
    {experiences.map((experience, index) => (
      <ExperienceTimelineItem
        key={experience._id}
        experience={experience}
        locale={locale}
        cta={cta}
        isLast={index === experiences.length - 1}
      />
    ))}
  </ol>
);

export { ExperienceTimeline };
