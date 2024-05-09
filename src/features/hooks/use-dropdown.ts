import { useCallback, useEffect, useRef, useState } from 'react';

const useDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      // Check if the clicked element is outside the dropdown container
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    },
    [dropdownOpen],
  );

  const toggleDropdown = useCallback(() => {
    setDropdownOpen(!dropdownOpen);
  }, [dropdownOpen]);

  useEffect(() => {
    // Attach the event listener to the entire document
    document.addEventListener('click', handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return { dropdownOpen, dropdownRef, toggleDropdown };
};

export { useDropdown };
