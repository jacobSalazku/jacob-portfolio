import { MenuButtonProps } from '@/types/types';

const MenuButton: React.FC<MenuButtonProps> = ({
  handleToggleMenu,
  isActive,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={handleToggleMenu}
      className="flex flex-col gap-1 transition-all duration-200 ease-in-out lg:hidden"
    >
      {isActive ? (
        <>
          <span className="absolute block h-1 w-8 rotate-45 transform bg-gray-600 transition-transform duration-200"></span>
          <span className="absolute block h-1 w-8 bg-gray-600 opacity-0"></span>
          <span className="absoluteb lock h-1 w-8 -rotate-45 transform bg-gray-600 transition-transform duration-200"></span>
        </>
      ) : (
        <>
          <span className="block h-1 w-8 bg-gray-600 transition-transform duration-200"></span>
          <span className="block h-1 w-8 bg-gray-600 opacity-100 transition-all duration-200"></span>
          <span className="block h-1 w-8 bg-gray-600 transition-transform duration-200"></span>
        </>
      )}
    </button>
  );
};
export { MenuButton };
