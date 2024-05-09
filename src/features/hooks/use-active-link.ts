import { usePathname } from 'next/navigation';

// This hook is used to add the active class to the current route
const useActiveLink = (route: string) => {
  const pathname = usePathname();
  const activeClass = pathname === route ? 'text-blue' : '';
  return activeClass;
};

export { useActiveLink };
