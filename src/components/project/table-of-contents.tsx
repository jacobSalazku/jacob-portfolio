'use client';

import { useEffect, useState, type FC } from 'react';
import { cn } from '@/utils/utils';

export type TableOfContentsItem = { anchor: string; label: string };

type TableOfContentsProps = {
  title: string;
  items: TableOfContentsItem[];
};

// A section is current once its top passes this line below the page header
const ACTIVE_LINE_PX = 160;

const TableOfContents: FC<TableOfContentsProps> = ({ title, items }) => {
  const [active, setActive] = useState(items[0]?.anchor);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      // The last section may be too short to reach the line, so the end of
      // the page always selects it
      if (atBottom) {
        setActive(items[items.length - 1]?.anchor);
        return;
      }
      let current = items[0]?.anchor;
      for (const { anchor } of items) {
        const element = document.getElementById(anchor);
        if (element && element.getBoundingClientRect().top <= ACTIVE_LINE_PX) {
          current = anchor;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
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
