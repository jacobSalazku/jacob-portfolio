'use client';

import { FC } from 'react';
import { useActiveLink } from '@/hooks/use-active-link';
import { AppPathnames } from '@/navigation';
import { cn } from '@/utils/utils';
import { Link } from './link';

type MenuLinkProps = {
  label: string;
  children: React.ReactNode;
  href?: AppPathnames | string; // App pathnames
  locale?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const MenuLink: FC<MenuLinkProps> = ({
  label,
  children,
  href = '',
  onClick,
  locale = '',
  className,
}) => {
  const activeClass = useActiveLink(href, locale);

  const formattedHref = href === '/resume.pdf' ? href : `/${href}`;

  return (
    <Link
      href={formattedHref}
      variant="menuItem"
      size="full"
      onClick={onClick}
      className={cn(
        className,
        'flex flex-row items-center justify-start',
        activeClass,
      )}
    >
      <span className="block">{children}</span>
      <span>{label}</span>
    </Link>
  );
};

export default MenuLink;
