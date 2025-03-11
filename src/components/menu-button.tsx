type MenuButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
};

const MenuButton: React.FC<MenuButtonProps> = ({
  onClick,
  isActive,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className="z-50 flex flex-col gap-1 transition-all lg:hidden"
    >
      <span
        className={`block h-1 w-8 bg-beige-1 transition-transform duration-200 ${
          isActive ? 'translate-y-2 rotate-45' : ''
        }`}
      ></span>
      <span
        className={`block h-1 w-6 bg-beige-1 transition-opacity duration-200 ${
          isActive ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      <span
        className={`block h-1 bg-beige-1 transition-transform duration-200 ${
          isActive ? 'w-8 -translate-y-2 -rotate-45' : 'w-2'
        }`}
      ></span>
    </button>
  );
};

export { MenuButton };
