import type { FC } from 'react';
import Image from 'next/image';
import type { ImageView } from '@/graphql/types';
import { urlFor } from '@/sanity/lib/image';

type SectionImageProps = {
  image: ImageView;
  alt: string;
  sizes: string;
  width?: number;
};

const getObjectPosition = (hotspot: ImageView['hotspot']) =>
  hotspot?.x !== undefined && hotspot.y !== undefined
    ? `${hotspot.x * 100}% ${hotspot.y * 100}%`
    : 'top';

const SectionImage: FC<SectionImageProps> = ({
  image,
  alt,
  sizes,
  width = 1200,
}) => {
  const objectPosition = getObjectPosition(image.hotspot);
  return (
    <Image
      src={urlFor(image).width(width).url()}
      alt={alt}
      fill
      sizes={sizes}
      className="object-cover"
      style={{ objectPosition }}
    />
  );
};

export { SectionImage };
