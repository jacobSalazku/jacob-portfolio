import { Metadata } from 'next';
import { Stage } from '@/features';

export const metadata: Metadata = {
  metadataBase: new URL(
    `${process.env.NEXT_LOCAL_BASE_URL}/projects/kdg-stage`,
  ),
  title: 'KDG Stage Site',
  description: 'ontdek meer over het Project KDG Stage Site',
  keywords: ['developer, front-end develop,'],
  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_LOCAL_BASE_URL}/kdg-stage`,
    title: 'KDG Stage Site',
    description: 'ontdek meer over het Project KDG Stage Site',
  },
};
export default Stage;
