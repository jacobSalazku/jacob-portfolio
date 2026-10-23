'use client';

import type { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/navigation';
import { isActivePath } from '@/utils/is-active-path';
import { cn } from '@/utils/utils';

type NavLinkProps = {
  href: string;
  locale: string;
  children: ReactNode;
};

const NavLink: FC<NavLinkProps> = ({ href, locale, children }) => {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, locale, href);

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'flex-1 whitespace-nowrap rounded-full px-4 py-3 text-center text-[0.9375rem] transition-colors duration-200 sm:px-[30px] sm:text-base',
        isActive
          ? 'bg-beige-1 font-normal text-purple-1'
          : 'text-white/75 hover:text-beige-1',
      )}
    >
      {children}
    </Link>
  );
};

export { NavLink };
