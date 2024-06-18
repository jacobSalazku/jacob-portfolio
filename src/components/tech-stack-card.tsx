import React from 'react';
import { StackCards } from '@/types/types';

const TechStackCard: React.FC<StackCards> = ({ label }) => {
  return (
    <div className="flex items-center justify-center rounded-lg border border-beige-1 px-8 py-4 text-beige-1 shadow-sm dark:bg-gray-950 dark:shadow-none">
      <h3 className="text-lg font-medium">{label}</h3>
    </div>
  );
};

export { TechStackCard };
