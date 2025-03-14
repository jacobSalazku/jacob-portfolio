import { cn } from '@/utils/utils';

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
      className="z-50 flex flex-col gap-1 transition-all xl:hidden"
      aria-label="Hamburger button"
    >
      <span
        className={cn(
          isActive ? 'translate-y-2 rotate-45' : '',
          'block h-1 w-8 bg-beige-1 transition-transform duration-200',
        )}
      ></span>
      <span
        className={cn(
          isActive ? 'opacity-0' : 'opacity-100',
          'block h-1 w-6 bg-beige-1 transition-opacity duration-200',
        )}
      ></span>
      <span
        className={cn(
          isActive ? 'w-8 -translate-y-2 -rotate-45' : 'w-2',
          'block h-1 bg-beige-1 transition-transform duration-200',
        )}
      ></span>
    </button>
  );
};

export { MenuButton };
