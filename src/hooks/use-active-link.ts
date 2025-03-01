import { usePathname } from 'next/navigation';

// This hook is used to add the active class to the current route
const useActiveLink = (route: string, locale: string) => {
  const pathname = usePathname();
  const constructedPath = `/${locale}${route}`;

  const activeCss = 'bg-black-300 border-beige-1 text-beige-1';

  const activeClass = pathname === constructedPath ? activeCss : '';
  return activeClass;
};

export { useActiveLink };
