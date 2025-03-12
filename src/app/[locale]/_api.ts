import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.writeHead(302, { Location: '/home' });
  res.end();
}
