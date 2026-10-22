import type { FeatureView } from '@/graphql/types';

type FeatureLabel = NonNullable<FeatureView['label']>;

export const FEATURE_LABEL_STYLES: Record<FeatureLabel, string> = {
  feature: 'bg-beige-1/15 text-beige-1',
  core: 'bg-beige-2/15 text-beige-2',
  tool: 'bg-pastel-red/15 text-[#ff8c8c]',
};

// Shared layouts, so every section type lines up the same way
export const AUTO_GRID_WIDE =
  'grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-8 gap-y-3';
export const AUTO_GRID_CARDS =
  'grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5';
export const PANEL = 'rounded-2xl border border-white/10 bg-white/[0.03]';
