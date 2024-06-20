import { Sectionprops } from '@/types/types';

const ProjectFeatures: React.FC<Sectionprops> = ({
  title = 'Project Features',
  children,
}) => {
  return (
    <div className="w-full max-w-[1440px] rounded-3xl px-4 py-12 md:px-6 md:py-16 lg:px-12 lg:py-20">
      <div className="flex w-full flex-col items-start justify-center space-y-6">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">{title}</h2>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
};

export { ProjectFeatures };
