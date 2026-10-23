import type { FC } from 'react';
import type { FeatureIconName } from '@/graphql/feature-icons';
import { cn } from '@/utils/utils';
import {
  IconBolt,
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconEye,
  IconLayout,
  IconPalette,
  IconPuzzle,
  IconRocket,
  IconSearch,
  IconShield,
  IconWorld,
  type Icon,
} from '@tabler/icons-react';

const ICONS: Record<FeatureIconName, Icon> = {
  code: IconCode,
  database: IconDatabase,
  eye: IconEye,
  world: IconWorld,
  layout: IconLayout,
  'device-mobile': IconDeviceMobile,
  palette: IconPalette,
  bolt: IconBolt,
  shield: IconShield,
  rocket: IconRocket,
  puzzle: IconPuzzle,
  search: IconSearch,
};

type FeatureTileProps = {
  icon?: FeatureIconName;
  className?: string;
  size?: 'default' | 'sm';
};

const FeatureTile: FC<FeatureTileProps> = ({
  icon = 'code',
  className,
  size = 'default',
}) => {
  const FeatureIcon = ICONS[icon];

  if (size === 'sm') {
    return (
      <span
        aria-hidden="true"
        className={cn(
          'flex h-[88px] w-[88px] flex-none items-center justify-center rounded-3xl border border-white/15 bg-black-700 text-beige-1 md:h-[100px] md:w-[100px]',
          className,
        )}
      >
        <FeatureIcon size={44} stroke={1.3} />
      </span>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        'flex aspect-[4/3] w-full max-w-[360px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:20px_20px]',
        className,
      )}
    >
      <span className="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/15 bg-black-700 text-beige-1">
        <FeatureIcon size={52} stroke={1.3} />
      </span>
    </div>
  );
};

export { FeatureTile };
