import React from 'react';
import { FeatureBlock } from '@root/sanity.types';

interface FeatureItemProps {
  title?: FeatureBlock['title'] | string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  icon,
  children,
}) => (
  <div className="flex flex-col gap-6 rounded-2xl border border-beige-1 bg-beige-1 bg-opacity-10 p-6 text-beige-1 shadow-lg transition-transform duration-300 hover:scale-105">
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige-1 bg-opacity-20 p-2">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white">
        {typeof title === 'string' ? title : ''}
      </h3>
    </div>
    <div className="text-lg font-light text-white">{children}</div>
  </div>
);
