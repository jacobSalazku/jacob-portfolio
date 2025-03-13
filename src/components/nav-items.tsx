'use client';

import { createElement } from 'react';
import {
  IconBriefcase,
  IconCode,
  IconCompassFilled,
} from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { MenuLink } from './Link/menu-link';

const MENUITEMS = [
  {
    href: '/home',
    label: 'Home',
    icon: createElement(IconCompassFilled, { size: 24, stroke: 1 }),
  },
  {
    href: '/experience',
    label: 'Experience',
    icon: createElement(IconBriefcase, { size: 24, stroke: 1 }),
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: createElement(IconCode, { size: 24, stroke: 1 }),
  },
];

const NavItems = ({
  locale,
  toggleMenu,
}: {
  locale: string;
  toggleMenu: () => void;
}) => {
  const t = useTranslations('Navigation');
  ('navigation');
  const MENUITEMS = [
    {
      href: '/home',
      label: `${t('home')}`,
      icon: createElement(IconCompassFilled, { size: 24, stroke: 1 }),
    },
    {
      href: '/experience',
      label: `${t('experience')}`,
      icon: createElement(IconBriefcase, { size: 24, stroke: 1 }),
    },
    {
      href: '/projects',
      label: `${t('projects')}`,
      icon: createElement(IconCode, { size: 24, stroke: 1 }),
    },
  ];
  return (
    <>
      {MENUITEMS.map((item) => (
        <li key={item.href} className="w-full">
          <MenuLink
            href={item.href}
            label={item.label}
            {...{ locale }}
            onClick={toggleMenu}
          >
            {item.icon}
          </MenuLink>
        </li>
      ))}
    </>
  );
};

export { NavItems };
