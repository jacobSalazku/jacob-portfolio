'use client';

import type { FC } from 'react';
import { AppPathnames, Link as NavLink } from '@/navigation';
import { cn } from '@/utils/utils';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from './button-variants';

export type LinkProps = {
  label?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  href?: AppPathnames | string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

const Link: FC<LinkProps> = ({
  className,
  size,
  variant,
  children,
  label,
  href = '',
  ...rest
}) => {
  return (
    <NavLink
      className={cn(
        buttonVariants({
          variant,
          className,
        }),
      )}
      href={href!}
      {...rest}
      aria-label={label}
      prefetch
    >
      {label}
      {children}
    </NavLink>
  );
};

export { Link };
