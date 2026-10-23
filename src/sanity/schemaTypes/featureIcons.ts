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
import {
  FEATURE_ICONS,
  type FeatureIconName,
} from '../../graphql/feature-icons';

// Icons a feature category (or a feature) can use. The names come from
// FEATURE_ICONS, the list the site uses to draw them, so an icon cannot be
// offered here without the site knowing it (both records below are typed on it).
const ICON_TITLES: Record<FeatureIconName, string> = {
  code: 'Code',
  database: 'Database',
  eye: 'Eye (accessibility)',
  world: 'World (languages)',
  layout: 'Layout',
  'device-mobile': 'Phone',
  palette: 'Palette (design)',
  bolt: 'Bolt (speed)',
  shield: 'Shield (security)',
  rocket: 'Rocket',
  puzzle: 'Puzzle',
  search: 'Search',
};

export const featureIconOptions = FEATURE_ICONS.map((value) => ({
  title: ICON_TITLES[value],
  value,
}));

// The same icons as the ones drawn on the site, for the previews in Studio
export const featureIconMedia: Record<FeatureIconName, ComponentType> = {
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
