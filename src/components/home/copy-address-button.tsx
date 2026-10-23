'use client';

import { useEffect, useRef, useState, type FC } from 'react';
import { buttonVariants } from '@/components/Link/button-variants';

type CopyAddressButtonProps = {
  address: string;
  label: string;
  copiedLabel: string;
};

const COPIED_MS = 2000;

const CopyAddressButton: FC<CopyAddressButtonProps> = ({
  address,
  label,
  copiedLabel,
}) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  // Stop the pending reset when the button goes away
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      // A second click restarts the countdown instead of racing the first one
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), COPIED_MS);
    } catch {
      // Clipboard access can be blocked; the address is also in the text
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={buttonVariants({
        variant: 'ghost',
        className: 'h-12 min-w-[150px] px-6 text-[0.9375rem]',
      })}
    >
      {copied ? copiedLabel : label}
    </button>
  );
};

export { CopyAddressButton };
