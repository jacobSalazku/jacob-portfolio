import { createElement } from 'react';
import {
  IconBriefcase,
  IconCode,
  IconCompassFilled,
} from '@tabler/icons-react';

export const MENUITEMS = [
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
  // {
  //   href: 'mailto:cooljss10@gmail.com',
  //   label: 'Contact',
  //   icon: createElement(IconAddressBook, { size: 24, stroke: 1 }),
  // },
];
