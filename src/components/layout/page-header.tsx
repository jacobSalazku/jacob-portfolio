import type { FC } from 'react';

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader: FC<PageHeaderProps> = ({ title, subtitle }) => (
  <header className="pb-10 pt-4">
    <h1 className="text-[clamp(40px,6vw,64px)] font-light leading-none tracking-[-0.03em] text-white">
      {title}
    </h1>
    <p className="mt-4 max-w-[60ch] text-base font-light text-white/70">
      {subtitle}
    </p>
  </header>
);

export { PageHeader };
