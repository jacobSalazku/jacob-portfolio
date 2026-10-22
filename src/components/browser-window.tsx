import type { FC } from 'react';
import { cn } from '@/utils/utils';
import { IconLock } from '@tabler/icons-react';
import { cva, type VariantProps } from 'class-variance-authority';

// Address shown when no url is given: the name as a .be domain, for example
// "Portfolio v2" becomes portfolio-v2.be
const getDefaultAddress = (title: string) => {
  const name = title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return name ? `${name}.be` : undefined;
};

// Decorative backdrop of the wide window, built from the name
const getCodeBackdrop = (title: string) =>
  [
    "import { Page } from '@/components';",
    '',
    'export default function App() {',
    `  return <Page title="${title}" />;`,
    '}',
  ].join('\n');

const bodyVariants = cva(
  'relative flex items-center justify-center overflow-hidden bg-black-700 px-6 text-center',
  {
    variants: {
      variant: {
        // Fixed ratio, used for gallery windows
        default: 'aspect-[4/3]',
        // Fixed height that grows with the viewport, used for hero and features
        wide: 'h-[clamp(180px,28vh,260px)] md:h-[clamp(220px,30vh,320px)]',
        // Taller than wide, for the detail page of an experience
        tall: 'h-[clamp(240px,36vh,340px)] md:h-[clamp(300px,44vh,420px)]',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

// Windows keep their size when the page gets wider, and sit in the middle on
// small screens
const frameVariants = cva(
  'mx-auto w-full min-w-[260px] overflow-hidden rounded-xl md:mx-0 border border-white/[0.14] bg-black-700 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.8)]',
  {
    variants: {
      variant: {
        default: 'max-w-[460px]',
        wide: 'max-w-[520px]',
        tall: 'max-w-[520px]',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

const titleVariants = cva(
  'text-gradient relative max-w-[90%] font-medium leading-[1.2] tracking-[-0.04em] [overflow-wrap:anywhere]',
  {
    variants: {
      variant: {
        // Stays large when the window shrinks, so the name is always readable
        default: 'text-[clamp(1.75rem,3vw,2.25rem)]',
        wide: 'text-[clamp(28px,4.4vw,52px)]',
        tall: 'text-[clamp(28px,4.4vw,52px)]',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export type BrowserWindowProps = {
  // The name shown in the window, instead of a screenshot
  title: string;
  // Text shown in the address bar, not a link. Defaults to the name as a
  // .be address, so every window has one.
  url?: string;
  // Decorative code behind the title of the wide variant
  code?: string;
  className?: string;
} & VariantProps<typeof bodyVariants>;

const BrowserWindow: FC<BrowserWindowProps> = ({
  title,
  url,
  code,
  className,
  variant,
}) => {
  const address = url || getDefaultAddress(title);

  return (
    <div className={cn(frameVariants({ variant }), className)}>
      <div className="flex items-center gap-3.5 border-b border-white/[0.08] bg-[#161718] px-3.5 py-3">
        <span className="flex flex-none gap-[7px]" aria-hidden="true">
          <i className="block h-[11px] w-[11px] rounded-full bg-[#c9544f]" />
          <i className="block h-[11px] w-[11px] rounded-full bg-[#d9a73a]" />
          <i className="block h-[11px] w-[11px] rounded-full bg-[#58a869]" />
        </span>
        {address && (
          <span className="flex min-w-0 flex-1 items-center justify-center gap-1.5 truncate rounded-lg bg-white/[0.06] px-3 py-[5px] text-xs text-white/55">
            <IconLock size={11} className="flex-none" aria-hidden="true" />
            <span className="truncate">{address}</span>
          </span>
        )}
      </div>
      <div className={bodyVariants({ variant })}>
        {(variant === 'wide' || variant === 'tall') && (
          <>
            <pre
              aria-hidden="true"
              className="pointer-events-none absolute left-6 right-6 top-[18px] m-0 overflow-hidden whitespace-pre text-left font-mono text-xs leading-[1.7] text-white/[0.13]"
            >
              {code ?? getCodeBackdrop(title)}
            </pre>
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-[30%] -translate-x-1/2 font-mono text-xs text-beige-1/50"
            >
              {'<h1 className="title">'}
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-[26%] left-1/2 -translate-x-1/2 font-mono text-xs text-beige-1/50"
            >
              {'</h1>'}
            </span>
          </>
        )}
        <span className={titleVariants({ variant })}>{title}</span>
      </div>
    </div>
  );
};

export { BrowserWindow };
