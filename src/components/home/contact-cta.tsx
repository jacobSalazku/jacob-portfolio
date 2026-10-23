import type { FC } from 'react';
import { buttonVariants } from '@/components/Link/button-variants';
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/utils/contact';
import { getTranslations } from 'next-intl/server';
import { CopyAddressButton } from './copy-address-button';

const ContactCta: FC = async () => {
  const t = await getTranslations('Home');

  return (
    <section className="flex flex-col items-start justify-between gap-6 rounded-xl border border-white/15 bg-white/[0.08] p-8 md:flex-row md:items-center md:p-10">
      <div>
        <h2 className="text-3xl font-light tracking-tight text-white">
          {t('workTogether')}
        </h2>
        <p className="mt-1 text-sm text-white/70">
          {t.rich('workTogetherText', {
            strong: (chunks) => <span className="text-white">{chunks}</span>,
            email: CONTACT_EMAIL,
          })}
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          href={CONTACT_MAILTO}
          className={buttonVariants({
            variant: 'primary',
            className: 'h-12 min-w-[150px] px-6 text-[0.9375rem]',
          })}
        >
          {t('sendEmail')}
        </a>
        <CopyAddressButton
          address={CONTACT_EMAIL}
          label={t('copyAddress')}
          copiedLabel={t('copied')}
        />
      </div>
    </section>
  );
};

export { ContactCta };
