import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { Repository } from '../lib/types/Repository.interface';

export default function usePinnedRepositories(username: string): Repository[] | undefined {
  const data = useSWR<Repository[]>(`https://gh-pinned-repos.egoist.sh/?username=${username}`, fetcher);
  return data.data;
}
