import type { NextApiRequest, NextApiResponse } from 'next';
import { getPinnedRepostiories } from '../../lib/api/getPinnedRepositories';
import { Repository } from '../../lib/types/Repository.interface';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Repository[]>) {
  res.status(200).json((await getPinnedRepostiories()) ?? []);
}
