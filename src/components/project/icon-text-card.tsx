import React from 'react';
import { cn } from '@/utils/utils';
import { FeatureBlock } from '@root/sanity.types';

interface IconTextCardProps {
  title?: FeatureBlock['title'] | string;
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
        'group flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-beige-1 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-beige-1/40 hover:bg-beige-1/[0.06]',
      )}
    >
      <div className="flex items-center justify-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-beige-1/10 p-2 transition-colors duration-300 group-hover:bg-beige-1/20">
          {icon}
        </div>
        <h3 className="text-lg font-normal text-white">
          {typeof title === 'string' ? title : ''}
        </h3>
      </div>
      <div className="flex items-center justify-start text-base font-light leading-relaxed text-white/75">
        {children}
      </div>
    </div>
  );
};
export { IconTextCard };
