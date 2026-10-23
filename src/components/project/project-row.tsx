import type { FC } from 'react';
import { LibraryTag } from '@/components/content/library-tag';
import { BrowserWindow } from '@/components/ui/browser-window';
import { getExcerpt } from '@/graphql/excerpt';
import { localize } from '@/graphql/localize';
import type { ProjectView } from '@/graphql/types';
import { Link } from '@/navigation';
import { cn } from '@/utils/utils';

type ProjectRowProps = {
  project: ProjectView;
  locale: string;
  cta: string;
  flip?: boolean;
};

const ProjectRow: FC<ProjectRowProps> = ({ project, locale, cta, flip }) => {
  const { title, slug, publishedAt, tags = [] } = project;
  const year = publishedAt ? new Date(publishedAt).getUTCFullYear() : undefined;
  const meta = [year, localize(project.projectType, locale)]
    .filter(Boolean)
    .join(' · ');
  // Without a short description the start of the project text is used
  const lede =
    localize(project.lede, locale) ??
    getExcerpt(localize(project.text, locale));

  return (
    <Link
      href={`/projects/${slug?.current}`}
      className={cn(
        'group grid items-center gap-8 md:gap-14',
        // The window follows the row width (never below 260px), the text takes the rest
        flip
          ? 'md:grid-cols-[minmax(0,1fr)_minmax(260px,40%)]'
          : 'md:grid-cols-[minmax(260px,40%)_minmax(0,1fr)]',
      )}
    >
      {title && (
        <div
          className={cn('flex min-w-0', flip && 'md:order-2 md:justify-end')}
        >
          <BrowserWindow
            title={title}
            url={project.url}
            className="transition-colors duration-300 group-hover:border-beige-1/40"
          />
        </div>
      )}
      <div className="flex min-w-0 flex-col items-start gap-3">
        {meta && (
          <p className="text-xs uppercase tracking-[0.14em] text-white/55">
            {meta}
          </p>
        )}
        <h3 className="text-[clamp(28px,3.4vw,40px)] font-light leading-tight tracking-tight text-white">
          {title}
        </h3>
        {lede && (
          <p className="max-w-[46ch] text-[0.9375rem] font-light leading-relaxed text-white/70">
            {lede}
          </p>
        )}
        {tags.length > 0 && (
          <ul className="mt-1 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag._id}>
                <LibraryTag id={tag._id} title={tag.title} />
              </li>
            ))}
          </ul>
        )}
        <span className="mt-2 border-b border-beige-1/60 pb-0.5 text-sm text-beige-1 transition-colors group-hover:border-beige-1">
          {cta} →
        </span>
      </div>
    </Link>
  );
};

export { ProjectRow };
