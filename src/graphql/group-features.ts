import type { FeatureIconName } from './feature-icons';
import type { FeatureView, LocalizedString } from './types';

export type FeatureGroupView = {
  key: string;
  icon: FeatureIconName;
  title?: LocalizedString;
  features: FeatureView[];
};

export const groupFeatures = (features: FeatureView[]): FeatureGroupView[] => {
  const groups: FeatureGroupView[] = [];

  features.forEach((feature, index) => {
    const { category } = feature;
    const existing = category
      ? groups.find((group) => group.key === category.id)
      : undefined;

    if (existing) {
      existing.features.push(feature);
      return;
    }
    groups.push({
      key: category?.id ?? `feature-${index}`,
      icon: category?.icon ?? feature.icon ?? 'code',
      title: category?.title,
      features: [feature],
    });
  });

  return groups;
};
