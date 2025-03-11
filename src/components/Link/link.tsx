'use client';

import type { FC } from 'react';
import { AppPathnames, Link as NavLink } from '@/navigation';
import { cn } from '@/utils/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export type LinkProps = {
  label?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  href?: AppPathnames | string; // App pathnames or external links
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  'flex flex-row items-center justify-center gap-2 cursor-pointer rounded border h-[60px] transition-transform ease-in-out',
  {
    variants: {
      variant: {
        primary:
          'bg-beige-1 border-blue text-purple-1 shadow-sm shadow-blue transition-all hover:border hover:border-beige-1 hover:text-beige-1 hover:bg-transparent',
        outline:
          'border border-white bg-transparent hover:bg--100 hover:textbeige-1 transition-colors duration-300 ease-in-out ',
        ghost:
          'border border-beige-1 text-beige-1 bg-transparent hover:bg-beige-1 hover:text-purple-1 transition-colors duration-300 ease-in-out',
        navlink:
          'bg-white border-none transition-colors hover:text-blue hover:ease-in-out',
        github: 'bg-black text-beige-1 hover:bg-purple-2 border border-beige-1',
        linkedin:
          'bg-black text-beige-1 hover:bg-purple-2 border border-beige-1',
        menuItem:
          'w-full justify-start items-center border h-20 gap-4 border-black-700 text-lg border-opacity-0 font-thin transition-all ease-in hover:border-beige-1 hover:bg-black-300 hover:text-beige-1',
      },
      size: {
        default: 'px-4 py-3',
        md: 'w-[210px] px-4',
        lg: 'w-[275px] px-4 py-3',
        xl: 'w-[310px] px-4 py-3',
        half: 'w-1/2 px-4 py-4',
        full: 'w-full rounded-md px-4 py-4',
        icon: 'size-10 rounded-full p-2',
        nav: 'w-full px-4 py-4 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

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
    >
      {label}
      {children}
    </NavLink>
  );
};

export { Link };
