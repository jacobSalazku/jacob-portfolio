import React from 'react';

type MenuButtonProps = {
  isActive: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

const MenuButton: React.FC<MenuButtonProps> = ({
  isActive,
  onClick,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${
        isActive ? 'active' : ''
      } order-2 mb-4 flex h-auto w-16 rotate-180 transform cursor-pointer flex-col justify-start space-y-1 self-end border-none bg-transparent p-1`}
      onClick={onClick}
      type="button"
    >
      <div
        className={`${
          isActive ? 'translate-y-2 rotate-45' : ''
        } h-5 w-2/4 bg-slate-800 transition-all duration-500 ease-in-out`}
      />
      <div
        className={`${
          isActive ? 'opacity-0' : ''
        } h-5 w-2/4 bg-slate-800 transition-all duration-500 ease-in-out`}
      />
      <div
        className={`${
          isActive ? 'translate-y-[-0.5rem] -rotate-45' : ''
        } h-5 w-2/4 bg-slate-800 transition-all duration-500 ease-in-out`}
      />
    </button>
  );
};
export { MenuButton };
