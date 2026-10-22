import { cva } from 'class-variance-authority';

// Separate from link.tsx (a client component) so server components can use it
export const buttonVariants = cva(
  'flex flex-row items-center justify-center gap-2 cursor-pointer rounded-lg border h-[56px] font-light tracking-wide transition-all duration-300 ease-out',
  {
    variants: {
      variant: {
        primary:
          'bg-beige-1 border-beige-1 text-purple-1 font-normal hover:-translate-y-0.5 hover:shadow-glow hover:brightness-105',
        ghost:
          'border-beige-1/40 text-beige-1 bg-transparent hover:-translate-y-0.5 hover:border-beige-1 hover:bg-beige-1/10',
        navlink:
          'bg-white border-none transition-colors hover:text-blue hover:ease-in-out',
        menuItem:
          'w-full justify-start items-center border h-14 gap-4 border-transparent text-base font-light text-white/70 hover:bg-white/5 hover:text-beige-1',
      },
      size: {
        default: 'px-4 py-3',
        full: 'w-full rounded-md px-4 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);
