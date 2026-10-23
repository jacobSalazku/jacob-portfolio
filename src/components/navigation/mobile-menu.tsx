'use client';

import { useEffect, useState, type FC } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/navigation';
import { isActivePath } from '@/utils/is-active-path';
import { cn } from '@/utils/utils';
import { IconMenu2, IconX } from '@tabler/icons-react';

type MobileMenuProps = {
  locale: string;
  items: { href: string; label: string }[];
  contact: { href: string; label: string };
  openLabel: string;
  closeLabel: string;
};

const ITEM_DELAY_MS = 55;

const MobileMenu: FC<MobileMenuProps> = ({
  locale,
  items,
  contact,
  openLabel,
  closeLabel,
}) => {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isOpen = openPath === pathname;

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenPath(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <div className="contents md:hidden">
      <button
        type="button"
        onClick={() => setOpenPath(isOpen ? null : pathname)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? closeLabel : openLabel}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-beige-1 text-purple-1"
      >
        <IconMenu2
          size={22}
          className={cn(
            'absolute transition-all duration-300 motion-reduce:transition-none',
            isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100',
          )}
        />
        <IconX
          size={22}
          className={cn(
            'absolute transition-all duration-300 motion-reduce:transition-none',
            isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0',
          )}
        />
      </button>
      {isOpen && (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpenPath(null)}
          className="bg-black/30 fixed inset-0 -z-10 cursor-default"
        />
      )}
      {/* Grid rows animate from 0fr to 1fr, which opens the panel smoothly */}
      <div
        id="mobile-menu"
        inert={!isOpen}
        className={cn(
          '-ml-[1.125rem] grid basis-[calc(100%+1.125rem)] transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <nav className="overflow-hidden">
          <div className="flex flex-col gap-1 px-1.5 pb-1.5 pt-3">
            {items.map(({ href, label }, index) => {
              const isActive = isActivePath(pathname, locale, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  style={{
                    transitionDelay: isOpen
                      ? `${100 + index * ITEM_DELAY_MS}ms`
                      : '0ms',
                  }}
                  className={cn(
                    'rounded-full px-4 py-3.5 text-lg transition-all duration-300 motion-reduce:transition-none',
                    isOpen
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-2 opacity-0',
                    isActive
                      ? 'bg-beige-1 font-normal text-purple-1'
                      : 'text-white/80 hover:text-beige-1',
                  )}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href={contact.href}
              style={{
                transitionDelay: isOpen
                  ? `${100 + items.length * ITEM_DELAY_MS}ms`
                  : '0ms',
              }}
              className={cn(
                'mt-1 rounded-full border border-beige-1/40 px-5 py-3.5 text-center text-lg text-beige-1 transition-all duration-300 motion-reduce:transition-none',
                isOpen
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-2 opacity-0',
              )}
            >
              {contact.label}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export { MobileMenu };
