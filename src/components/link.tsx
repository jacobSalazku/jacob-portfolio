'use client';

import type { FC } from 'react';
import NextLink from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  href?: string;
  icon?: React.ReactNode;
  labelVisability?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  'flex flex-row items-center justify-center gap-2 cursor-pointer rounded border h-[60px] transition-transform ease-in-out',
  {
    variants: {
      variant: {
        primary:
          'bg-beige-1 border-blue text-purple-1 shadow-sm shadow-blue transition-all hover:border hover:border-beige-1 hover:text-beige-1 hover:bg-transparent',

        outline:
          'border border-white bg-transparent hover:bg-gray-100 hover:text-purple-2 transition-colors duration-300 ease-in-out',
        ghost:
          'border border-beige-1 text-beige-1 bg-transparent hover:bg-beige-1 hover:text-purple-1 transition-colors duration-300 ease-in-out',
        navlink:
          'bg-white border-none transition-colors hover:text-blue hover:ease-in-out',
        github: 'bg-black text-beige-1 hover:bg-purple-2 border border-beige-1',
        linkedin:
          'bg-black text-beige-1 hover:bg-purple-2 border border-beige-1',
      },
      size: {
        default: 'px-4 py-3',
        md: 'w-[210px] px-4',
        lg: 'w-[275px] px-4 py-3',
        xl: 'w-[310px] px-4 py-3',
        half: 'w-1/2 px-4',
        full: 'w-full rounded-md px-4',
        icon: 'size-10 rounded-full p-2',
        visability: 'transition-transform ease-in-out w-auto p-2 ',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

const Link: FC<ButtonProps> = ({
  className,
  size,
  variant,
  label,
  children,
  icon,
  labelVisability,
  ...rest
}) => (
  <NextLink
    className={cn(
      buttonVariants({
        size: labelVisability ? 'visability' : size,
        variant,
        className,
      }),
    )}
    href={rest.href || ''}
    {...rest}
    aria-label={label}
  >
    <span>{icon}</span>
    {labelVisability ? (
      <span className="hidden lg:inline" {...rest}>
        {label}
      </span>
    ) : (
      <span {...rest}>{label}</span>
    )}
    <span>{children}</span>
  </NextLink>
);

export { Link, buttonVariants };
