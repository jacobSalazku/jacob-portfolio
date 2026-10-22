import type { ComponentType } from 'react';
import { BoltIcon } from '@sanity/icons/Bolt';
import { CodeIcon } from '@sanity/icons/Code';
import { ColorWheelIcon } from '@sanity/icons/ColorWheel';
import { ComponentIcon } from '@sanity/icons/Component';
import { DatabaseIcon } from '@sanity/icons/Database';
import { EarthGlobeIcon } from '@sanity/icons/EarthGlobe';
import { EyeOpenIcon } from '@sanity/icons/EyeOpen';
import { LockIcon } from '@sanity/icons/Lock';
import { MobileDeviceIcon } from '@sanity/icons/MobileDevice';
import { RocketIcon } from '@sanity/icons/Rocket';
import { SearchIcon } from '@sanity/icons/Search';
import { ThLargeIcon } from '@sanity/icons/ThLarge';

// Icons a feature category (or a feature) can use. Keep in sync with
// src/graphql/feature-icons.ts, which the site uses to draw them.
export const featureIconOptions = [
  { title: 'Code', value: 'code' },
  { title: 'Database', value: 'database' },
  { title: 'Eye (accessibility)', value: 'eye' },
  { title: 'World (languages)', value: 'world' },
  { title: 'Layout', value: 'layout' },
  { title: 'Phone', value: 'device-mobile' },
  { title: 'Palette (design)', value: 'palette' },
  { title: 'Bolt (speed)', value: 'bolt' },
  { title: 'Shield (security)', value: 'shield' },
  { title: 'Rocket', value: 'rocket' },
  { title: 'Puzzle', value: 'puzzle' },
  { title: 'Search', value: 'search' },
];

// The same icons as the ones drawn on the site, for the previews in Studio
export const featureIconMedia: Record<string, ComponentType> = {
  code: CodeIcon,
  database: DatabaseIcon,
  eye: EyeOpenIcon,
  world: EarthGlobeIcon,
  layout: ThLargeIcon,
  'device-mobile': MobileDeviceIcon,
  palette: ColorWheelIcon,
  bolt: BoltIcon,
  shield: LockIcon,
  rocket: RocketIcon,
  puzzle: ComponentIcon,
  search: SearchIcon,
};
