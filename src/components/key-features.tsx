export type KeyFeaturesProps = {
  title?: string;
  children: React.ReactNode;
};
const KeyFeatures: React.FC<KeyFeaturesProps> = ({ title, children }) => {
  return (
    <div className="w-full max-w-screen-2xl rounded-3xl py-6 text-white md:py-16 lg:px-12 lg:py-20">
      <div className="flex w-full flex-col items-start justify-center space-y-6">
        <h2 className="text-2xl font-light text-white md:text-3xl">{title}</h2>
        <div className="space-y-4 font-thin">{children}</div>
      </div>
    </div>
  );
};

export { KeyFeatures };
