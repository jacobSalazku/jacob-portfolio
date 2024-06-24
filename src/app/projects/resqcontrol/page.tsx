import { Metadata } from 'next';
import { Resqcontrol } from '@/features';

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_BASE_URL}/projects/resqcontrol`),
  title: 'ResQControl',
  description: 'ontdek meer over het Project ResqControl',
  keywords: ['developer, front-end develop,'],
  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_BASE_URL}/projects/resqcontrol`,
    title: 'ResQControl',
    description: 'ontdek meer over het Project ResqControl',
    images: [
      {
        url: '/jacob-og.png',
        width: 567,
        height: 444,
        alt: 'Jacob Salazaku Website',
      },
    ],
  },
};
export default Resqcontrol;
