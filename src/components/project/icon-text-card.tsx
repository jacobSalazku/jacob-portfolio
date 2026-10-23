import React from 'react';
import { cn } from '@/utils/utils';

interface IconTextCardProps {
  title?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const IconTextCard: React.FC<IconTextCardProps> = ({
  title,
  icon,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        'group flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-beige-1 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-beige-1/40 hover:bg-beige-1/[0.06]',
      )}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white/85 transition-colors duration-300 group-hover:border-beige-1/30 group-hover:text-beige-1">
        {icon}
      </div>
      <h3 className="text-lg font-normal text-white">{title}</h3>
      <div className="flex items-center justify-start text-base font-light leading-relaxed text-white/75">
        {children}
      </div>
    </div>
  );
};
export { IconTextCard };
