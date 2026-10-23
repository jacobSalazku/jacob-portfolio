import type { FC } from 'react';
import { PortableTextRenderer } from '@/components/content/portable-text-render';
import { localize } from '@/graphql/localize';
import type { FeatureView } from '@/graphql/types';
import { Link } from '@/navigation';
import { cn } from '@/utils/utils';
import { IconArrowUpRight } from '@tabler/icons-react';
import { CheckList } from './check-list';

type FeatureTextProps = {
  feature: FeatureView;
  locale: string;
  pageLinkLabel?: string;
  className?: string;
};

const LINK_STYLE =
  'inline-flex items-center gap-1 text-sm text-beige-1 underline-offset-4 transition-opacity hover:underline';

// Title, text and points of one feature
const FeatureText: FC<FeatureTextProps> = ({
  feature,
  locale,
  pageLinkLabel,
  className,
}) => {
  const title = localize(feature.title, locale);
  const content = localize(feature.content, locale);
  // https links open in a new tab, paths like /projects/recrudootje stay on
  // the site. Older values were address bar labels and are ignored.
  const url = feature.url;
  const externalHref = url?.startsWith('https://') ? url : undefined;
  // `//host` is a protocol-relative address, not a page on this site
  const pageHref =
    url?.startsWith('/') && !url.startsWith('//') ? url : undefined;
  const points = (feature.points ?? []).flatMap((point) => {
    const text = localize(point, locale);
    return text ? [text] : [];
  });

  return (
    <div className={cn('flex min-w-0 flex-col gap-4', className)}>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-[1.375rem] font-normal tracking-tight text-white">
          {title}
        </h3>
        {externalHref && (
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_STYLE}
          >
            {externalHref.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}
            <IconArrowUpRight size={16} stroke={1.8} aria-hidden="true" />
          </a>
        )}
        {pageHref && pageLinkLabel && (
          <Link href={pageHref} className={LINK_STYLE}>
            {pageLinkLabel}
            <IconArrowUpRight size={16} stroke={1.8} aria-hidden="true" />
          </Link>
        )}
      </div>
      {content && (
        <div className="max-w-[66ch] font-light text-white/75">
          <PortableTextRenderer value={content} />
        </div>
      )}
      {points.length > 0 && (
        <CheckList items={points} className="mt-0 grid-cols-1" />
      )}
    </div>
  );
};

export { FeatureText };
