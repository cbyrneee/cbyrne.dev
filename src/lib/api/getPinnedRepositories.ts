import useSWR from 'swr';
import fetcher from '../fetcher';
import { Repository } from '../types/Repository.interface';

export async function getPinnedRepostiories(): Promise<Repository[] | undefined> {
  return await fetcher('https://gh-pinned-repos.egoist.sh/?username=cbyrneee');
}
