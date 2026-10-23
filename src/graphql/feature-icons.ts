export const FEATURE_ICONS = [
  'code',
  'database',
  'eye',
  'world',
  'layout',
  'device-mobile',
  'palette',
  'bolt',
  'shield',
  'rocket',
  'puzzle',
  'search',
] as const;

export type FeatureIconName = (typeof FEATURE_ICONS)[number];
