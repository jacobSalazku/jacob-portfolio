import type { FC } from 'react';
import { buttonVariants } from '@/components/Link/button-variants';
import { Link } from '@/navigation';

type UpNextProps = {
  label: string;
  title: string;
  href: string;
  cta: string;
};

const UpNext: FC<UpNextProps> = ({ label, title, href, cta }) => (
  <nav
    aria-label={label}
    className="mt-16 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-7"
  >
    <div>
      <p className="text-xs uppercase tracking-[0.14em] text-white/55">
        {label}
      </p>
      <p className="mt-1.5 text-2xl font-light tracking-tight text-white">
        {title}
      </p>
    </div>
    <Link
      href={href}
      className={buttonVariants({
        variant: 'primary',
        className: 'h-12 px-6 text-[0.9375rem]',
      })}
    >
      {cta}
    </Link>
  </nav>
);

export { UpNext };
