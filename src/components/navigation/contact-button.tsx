import type { FC } from 'react';
import { buttonVariants } from '@/components/Link/button-variants';
import { CONTACT_MAILTO } from '@/utils/contact';
import { cn } from '@/utils/utils';
import { getTranslations } from 'next-intl/server';

const ContactButton: FC<{ className?: string }> = async ({ className }) => {
  const t = await getTranslations('Navigation');

  return (
    <a
      href={CONTACT_MAILTO}
      className={cn(buttonVariants({ variant: 'primary' }), className)}
    >
      {t('contactMe')}
    </a>
  );
};

export { ContactButton };
