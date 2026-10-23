import type { FC } from 'react';
import { CONTACT_MAILTO } from '@/utils/contact';
import { NAV_ITEMS } from '@/utils/nav-items';
import { getTranslations } from 'next-intl/server';
import { ContactButton } from './contact-button';
import { MobileMenu } from './mobile-menu';
import { NavItems } from './nav-items';

// One rounded bar, sticky while scrolling: name on the left, the tabs in the
// middle and a contact button on the right. Below md the tabs and the contact
// button move into a menu that unfolds inside the bar, as wide as the bar.
const Navigation: FC<{ locale: string }> = async ({ locale }) => {
  const t = await getTranslations('Navigation');
  const items = NAV_ITEMS.map(({ href, labelKey }) => ({
    href,
    label: t(labelKey),
  }));

  return (
    <header className="sticky top-0 z-30 w-full bg-gradient-to-b from-black-400 from-65% to-transparent pb-3.5 pt-5">
      {/* On a phone this box keeps the height of the closed bar, so the bar can
            unfold over the page instead of pushing it down */}
      <div className="relative mx-auto h-[calc(3.75rem+2px)] w-full max-w-site px-4 md:h-auto md:px-8">
        <div className="absolute inset-x-6 top-0 z-10 flex flex-wrap items-center justify-between rounded-[30px] border border-white/10 bg-[#262729] p-1.5 pl-6 md:static md:grid md:grid-cols-[1fr_auto_1fr] md:rounded-full">
          <span className="text-lg font-normal text-white">Jacob Salazaku</span>
          <nav
            aria-label={t('main')}
            className="hidden w-full gap-1 justify-self-center md:flex"
          >
            <NavItems locale={locale} />
          </nav>
          <div className="hidden justify-self-end md:block">
            <ContactButton className="h-12 rounded-full px-7 text-base" />
          </div>
          <MobileMenu
            locale={locale}
            items={items}
            contact={{
              href: CONTACT_MAILTO,
              label: t('contactMe'),
            }}
            openLabel={t('openMenu')}
            closeLabel={t('closeMenu')}
          />
        </div>
      </div>
    </header>
  );
};

export { Navigation };
