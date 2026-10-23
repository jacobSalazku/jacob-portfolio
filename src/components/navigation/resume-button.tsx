import type { FC } from 'react';
import { buttonVariants } from '@/components/Link/button-variants';
import { getResumeUrl } from '@/utils/resume';
import { cn } from '@/utils/utils';
import { getTranslations } from 'next-intl/server';

type ResumeButtonProps = {
  locale: string;
  variant?: 'primary' | 'ghost';
  className?: string;
};

const ResumeButton: FC<ResumeButtonProps> = async ({
  locale,
  variant = 'ghost',
  className,
}) => {
  const t = await getTranslations('Home');
  const href = getResumeUrl(locale);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant }), className)}
    >
      {t('cv')}
    </a>
  );
};

export { ResumeButton };
