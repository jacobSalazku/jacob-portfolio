import type { FC } from 'react';

const SectionDivider: FC = () => (
  <div
    aria-hidden="true"
    className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
  />
);

export { SectionDivider };
