import type { FC, ReactNode } from 'react';

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  action?: ReactNode;
};

const SectionHeading: FC<SectionHeadingProps> = ({
  title,
  subtitle,
  action,
}) => (
  <div className="mb-8 flex items-end justify-between gap-4">
    <div>
      <h2 className="text-3xl font-light tracking-tight text-white">{title}</h2>
      <p className="mt-1 text-sm text-white/55">{subtitle}</p>
    </div>
    {action}
  </div>
);

export { SectionHeading };
