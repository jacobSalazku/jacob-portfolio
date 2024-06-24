import type { TechnologiesUsed } from '@/types/types';
import { TechStackCard } from './tech-stack-card';

const TechnologiesUsed: React.FC<TechnologiesUsed> = ({ techStack }) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      {techStack.map((stack: string, index: number) => (
        <TechStackCard key={index} label={stack} />
      ))}
    </div>
  );
};
export { TechnologiesUsed };
