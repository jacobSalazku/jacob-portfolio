'use client';

import { useEffect, useState, type FC } from 'react';
import { cn } from '@/utils/utils';

export type TableOfContentsItem = { anchor: string; label: string };

type TableOfContentsProps = {
  title: string;
  items: TableOfContentsItem[];
};

// Offsets match the sticky scroll margin of the sections (scroll-mt-32)
const OBSERVER_MARGIN = '-20% 0px -70% 0px';

const TableOfContents: FC<TableOfContentsProps> = ({ title, items }) => {
  const [active, setActive] = useState(items[0]?.anchor);

  useEffect(() => {
    const sections = items.flatMap(({ anchor }) => {
      const element = document.getElementById(anchor);
      return element ? [element] : [];
    });
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: OBSERVER_MARGIN },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav
      aria-label={title}
      className="sticky top-28 hidden self-start border-l border-white/10 md:flex md:flex-col md:gap-0.5"
    >
      <p className="pb-3 pl-4 text-xs uppercase tracking-[0.14em] text-white/55">
        {title}
      </p>
      {items.map(({ anchor, label }) => (
        <a
          key={anchor}
          href={`#${anchor}`}
          aria-current={active === anchor ? 'location' : undefined}
          className={cn(
            'relative py-2 pl-4 text-sm transition-colors duration-200 hover:text-beige-1',
            active === anchor
              ? 'text-beige-1 before:absolute before:-left-px before:bottom-1.5 before:top-1.5 before:w-0.5 before:bg-beige-1'
              : 'text-white/55',
          )}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export { TableOfContents };
