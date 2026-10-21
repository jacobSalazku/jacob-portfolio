import { FC } from 'react';

type LibraryTagProps = {
  id: string;
  title: string | undefined;
};

const LibraryTag: FC<LibraryTagProps> = ({ title }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-beige-1/25 bg-beige-1/10 px-3 py-1 text-xs font-light tracking-wide text-beige-1 transition-colors duration-200 hover:bg-beige-1/20 md:text-sm">
      {title}
    </span>
  );
};
export { LibraryTag };
