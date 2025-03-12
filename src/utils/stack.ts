import { createElement } from 'react';
import {
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVue,
} from '@tabler/icons-react';

export const STACK = [
  {
    name: 'NextJs',
    description: 'React Framework',
    icon: createElement(IconBrandNextjs, { size: 48, stroke: 1 }),
  },
  {
    name: 'Typescript',
    description: 'Typed superset of JavaScript',
    icon: createElement(IconBrandTypescript, { size: 48, stroke: 1 }),
  },
  {
    name: 'Javascript',
    description: 'Language of the web',
    icon: createElement(IconBrandJavascript, { size: 48, stroke: 1 }),
  },
  {
    name: 'SASS',
    description: 'CSS preprocessor',
    icon: createElement(IconBrandSass, { size: 48, stroke: 1 }),
  },
  {
    name: 'TailWindCSS',
    description: 'Utility-first CSS framework',
    icon: createElement(IconBrandTailwind, { size: 48, stroke: 1 }),
  },
  {
    name: 'VueJS',
    description: 'JavaScript framework',
    icon: createElement(IconBrandVue, { size: 48, stroke: 1 }),
  },
  {
    name: 'Mysql',
    description: 'Relational Database',
    icon: createElement(IconBrandMysql, { size: 48, stroke: 1 }),
  },
  {
    name: 'React',
    description: 'JavaScript library',
    icon: createElement(IconBrandReact, { size: 48, stroke: 1 }),
  },
];
