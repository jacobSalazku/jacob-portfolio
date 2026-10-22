import type { FC, ReactNode } from 'react';
import { cn } from '@/utils/utils';
import { IconLock } from '@tabler/icons-react';
import { cva, type VariantProps } from 'class-variance-authority';

const bodyVariants = cva('relative overflow-hidden bg-black-700', {
  variants: {
    variant: {
      default: 'aspect-[4/3]',
      wide: 'h-[clamp(180px,28vh,260px)] md:h-[clamp(220px,30vh,320px)]',
    },
  },
  defaultVariants: { variant: 'default' },
});

export type BrowserWindowProps = {
  url?: string;
  children: ReactNode;
  className?: string;
} & VariantProps<typeof bodyVariants>;

const BrowserWindow: FC<BrowserWindowProps> = ({
  url,
  children,
  className,
  variant,
}) => {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[18px] border border-white/[0.14] bg-black-700 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.8)]',
        className,
      )}
    >
      <div className="flex items-center gap-3.5 border-b border-white/[0.08] bg-[#161718] px-3.5 py-3">
        <span className="flex flex-none gap-[7px]" aria-hidden="true">
          <i className="block h-[11px] w-[11px] rounded-full bg-[#c9544f]" />
          <i className="block h-[11px] w-[11px] rounded-full bg-[#d9a73a]" />
          <i className="block h-[11px] w-[11px] rounded-full bg-[#58a869]" />
        </span>
        {url && (
          <span className="flex min-w-0 flex-1 items-center justify-center gap-1.5 truncate rounded-lg bg-white/[0.06] px-3 py-[5px] text-xs text-white/55">
            <IconLock size={11} className="flex-none" aria-hidden="true" />
            <span className="truncate">{url}</span>
          </span>
        )}
      </div>
      <div className={bodyVariants({ variant })}>{children}</div>
    </div>
  );
};

export { BrowserWindow };
