import type { FC } from 'react';
import { AUTO_GRID_WIDE } from '@/components/project/sections/constants';
import { cn } from '@/utils/utils';
import { IconCheck } from '@tabler/icons-react';

type CheckListProps = {
  items: string[];
  className?: string;
};

const CheckList: FC<CheckListProps> = ({ items, className }) => (
  <ul className={cn(AUTO_GRID_WIDE, 'mt-5', className)}>
    {items.map((item, index) => (
      <li
        key={`${index}-${item}`}
        className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
      >
        <IconCheck
          size={16}
          stroke={2.5}
          className="mt-1 flex-none text-beige-1"
          aria-hidden="true"
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export { CheckList };
