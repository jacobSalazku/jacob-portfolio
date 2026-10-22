import type { FC } from 'react';
import { LibraryTag } from '@/components/library-tag';
import { PortableTextRenderer } from '@/components/portable-text-render';
import { localize } from '@/graphql/localize';
import type { ExperienceView } from '@/graphql/types';
import { Link } from '@/navigation';
import { cn } from '@/utils/utils';

type ExperienceTimelineItemProps = {
  experience: ExperienceView;
  locale: string;
  cta: string;
  isLast: boolean;
};

const ExperienceTimelineItem: FC<ExperienceTimelineItemProps> = ({
  experience,
  locale,
  cta,
  isLast,
}) => {
  const { title, slug, initials, tags = [] } = experience;
  const timespan = localize(experience.timespan, locale);
  const meta = [
    localize(experience.role, locale),
    localize(experience.duration, locale),
  ]
    .filter(Boolean)
    .join(' · ');
  const lede = localize(experience.lede, locale);
  const description = localize(experience.description, locale);

  return (
    <li className="grid gap-3 md:grid-cols-[170px_24px_minmax(0,1fr)] md:gap-x-0">
      <p className="pt-[18px] text-sm text-white/75 md:pr-6 md:text-right">
        {timespan}
      </p>
      <div className="relative hidden md:block" aria-hidden="true">
        <span className="absolute left-1/2 top-[22px] h-3 w-3 -translate-x-1/2 rounded-full bg-beige-1" />
        {!isLast && (
          <span className="absolute -bottom-16 left-1/2 top-[34px] w-px -translate-x-1/2 bg-white/15" />
        )}
      </div>
      <Link
        href={`/experience/${slug?.current}`}
        className="group flex min-w-0 flex-col items-start gap-6 rounded-xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-beige-1/30 md:ml-8"
      >
        <div className="flex items-center gap-4">
          {initials && (
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-white/15 text-[0.8125rem] text-white/85">
              {initials}
            </span>
          )}
          <div className="min-w-0">
            <h2 className="text-[1.625rem] font-light leading-tight tracking-tight text-white">
              {title}
            </h2>
            {meta && <p className="text-[0.8125rem] text-white/55">{meta}</p>}
          </div>
        </div>
        {lede && (
          <p className="max-w-[70ch] text-[0.9375rem] font-light leading-relaxed text-white/75">
            {lede}
          </p>
        )}
        {description && (
          <div className="line-clamp-3 max-w-[70ch] text-[0.9375rem] font-light text-white/75">
            <PortableTextRenderer value={description} />
          </div>
        )}
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <li key={tag._id}>
                <LibraryTag id={tag._id} title={tag.title} />
              </li>
            ))}
          </ul>
        )}
        <span
          className={cn(
            'border-b border-beige-1/60 pb-0.5 text-sm text-beige-1 transition-colors group-hover:border-beige-1',
          )}
        >
          {cta} →
        </span>
      </Link>
    </li>
  );
};

export { ExperienceTimelineItem };
