import useSWR from 'swr';

import { API_ENDPOINT } from '@constants';
import { fetcher } from '@utils/fetcher';

export const useData = (path: string, query: string = '') => {
  const { data, error } = useSWR(`${API_ENDPOINT}/${path}?${query}`, fetcher);
  const dataList = data && data[Object.keys(data)[0]];
  return { dataList, error };
};
