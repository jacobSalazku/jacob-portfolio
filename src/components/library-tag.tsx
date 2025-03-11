import { FC } from 'react';

type LibraryTagProps = {
  id: string;
  title: string | undefined;
};

const LibraryTag: FC<LibraryTagProps> = ({ id, title }) => {
  return (
    <div className="flex cursor-pointer items-center justify-center rounded-2xl bg-sky-100 px-3 py-1 text-white opacity-85 shadow-red-100">
      <h3 className="text-xs font-light text-sky-800 opacity-100 sm:text-sm">
        {title}
      </h3>
    </div>
  );
};
export { LibraryTag };
