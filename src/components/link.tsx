'use client';

import type { FC } from 'react';
import NextLink from 'next/link'; // Renamed the imported 'Link' component to 'NextLink'
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
  'flex flex-row items-center justify-center gap-2 cursor-pointer rounded border h-[42px] transition-transform ease-in-out',
  {
    variants: {
      variant: {
        primary:
          'bg-blue border-blue text-white shadow-sm shadow-blue transition-all hover:border-dark-blue hover:bg-dark-blue',
        secondary:
          'border-white bg-green text-black drop-shadow-md transition-all hover:bg-dark-blue hover:text-white',
        outline:
          'border border-gray-200 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100',
        ghost:
          'bg-transparent border-purple-1 text-purple-1 transition-all hover:border-dark-blue hover:bg-purple-1 hover:text-white',
        'ghost-secondary':
          'bg-transparent border-green text-white transition-all hover:border-dark-blue hover:bg-dark-blue hover:text-white',
        link: 'bg-transparent text-blue decoration-blue  underline-offset-8 hover:bg-transparent hover:underline dark:bg-transparent dark:text-gray-300 dark:hover:bg-transparent border-none',
        'link-white':
          'bg-transparent text-white decoration-white  underline-offset-8 hover:bg-transparent hover:underline dark:bg-transparent dark:text-gray-300 dark:hover:bg-transparent border-none',
        disabled:
          'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed',
        navlink:
          'bg-white border-none transition-colors hover:text-blue hover:ease-in-out',
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
