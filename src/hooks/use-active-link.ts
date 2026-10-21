import { usePathname } from 'next/navigation';

const useActiveLink = (route: string, locale: string) => {
  const pathname = usePathname();
  const constructedPath = `/${locale}${route}`;

  const activeCss = 'bg-beige-1/10 border-beige-1/30 text-beige-1';

  const activeClass = pathname === constructedPath ? activeCss : '';
  return activeClass;
};

export { useActiveLink };
