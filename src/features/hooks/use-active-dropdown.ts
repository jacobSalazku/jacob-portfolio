import { usePathname } from 'next/navigation';

// This hook opens dropdown for platforms
const useActiveDropdown = (route: string) => {
  const pathname = usePathname();
  const activeClass = pathname === route ? 'text-blue bg-blue border-2' : '';
  return activeClass;
};
export { useActiveDropdown };
