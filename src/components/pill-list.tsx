import type { FC } from 'react';

// The first pill is highlighted, the rest are plain
const PillList: FC<{ items: string[] }> = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((pill, index) => (
        <li
          key={`${index}-${pill}`}
          className={
            index === 0
              ? 'rounded-md border border-beige-1/25 bg-beige-1/10 px-3.5 py-1 text-[0.8125rem] text-beige-1'
              : 'rounded-md border border-white/15 bg-white/5 px-3.5 py-1 text-[0.8125rem] text-white/75'
          }
        >
          {pill}
        </li>
      ))}
    </ul>
  );
};

export { PillList };
