import useSWR from 'swr';

import { API_ENDPOINT } from '@constants';
import { fetcher } from '@utils/fetcher';

export const useData = (path: string, query: string = '') => {
  return useSWR(`${API_ENDPOINT}/${path}?${query}`, fetcher);
};
