import { Metadata } from 'next';
import { Stage } from '@/features';

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_BASE_URL}/projects/kdg-stage`),
  title: 'KDG Stage Site',
  description: 'ontdek meer over het Project KDG Stage Site',
  keywords: ['developer, front-end develop,'],
  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_BASE_URL}/projects/kdg-stage`,
    title: 'KDG Stage Site',
    description: 'ontdek meer over het Project KDG Stage Site',
    images: [
      {
        url: '/jacob-open-graph.png',
        width: 567,
        height: 444,
        alt: 'Jacob Salazaku Website',
      },
    ],
  },
};
export default Stage;
