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

// Fills its parent (a BrowserWindow body), which must be positioned
const SectionImage: FC<SectionImageProps> = ({
  image,
  alt,
  sizes,
  width = 1200,
}) => (
  <Image
    src={urlFor(image).width(width).url()}
    alt={alt}
    fill
    sizes={sizes}
    className="object-cover object-top"
  />
);

export { SectionImage };
