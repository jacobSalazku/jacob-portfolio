export type Tech = { _id: string; title: string }[];
type TechnologiesUsedProps = {
  techStack: Tech;
};

const TechnologiesUsed: React.FC<TechnologiesUsedProps> = ({ techStack }) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      {techStack &&
        techStack.map((stack, index) => (
          <div
            key={stack?._id}
            className="flex items-center justify-center rounded-lg border border-beige-1 px-8 py-4 text-beige-1 shadow-sm dark:bg-gray-950 dark:shadow-none"
          >
            <h3 className="text-lg font-medium">{stack.title}</h3>
          </div>
        ))}
    </div>
  );
};
export { TechnologiesUsed };
