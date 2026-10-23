import type { FC } from 'react';
import { NAV_ITEMS } from '@/utils/nav-items';
import { getTranslations } from 'next-intl/server';
import { NavLink } from './nav-link';

const NavItems: FC<{ locale: string }> = async ({ locale }) => {
  const t = await getTranslations('Navigation');

  return (
    <>
      {NAV_ITEMS.map(({ href, labelKey }) => (
        <NavLink key={href} href={href} locale={locale}>
          {t(labelKey)}
        </NavLink>
      ))}
    </>
  );
};

export { NavItems };
