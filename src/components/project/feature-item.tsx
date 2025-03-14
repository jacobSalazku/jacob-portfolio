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
        'flex flex-col gap-6 border border-beige-1 bg-beige-1 bg-opacity-10 p-6 text-beige-1 shadow-lg transition-transform duration-300 hover:scale-x-105',
      )}
    >
      <div className="flex items-center justify-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige-1 bg-opacity-20 p-2">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">
          {typeof title === 'string' ? title : ''}
        </h3>
      </div>
      <div className="flex items-center justify-center text-lg font-light text-white">
        {children}
      </div>
    </div>
  );
};
export { IconTextCard };
