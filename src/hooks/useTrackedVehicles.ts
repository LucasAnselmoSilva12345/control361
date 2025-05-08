import { useInfiniteQuery } from '@tanstack/react-query';

import { Vehicle } from '../types/vehicle';
import { fetchVehicles } from '../api/vehicle';

export const useTrackedVehicles = (enabled: boolean) => {
  const query = useInfiniteQuery({
    queryKey: ['vehicles', 'tracked'],
    queryFn: ({ pageParam = 1 }) =>
      fetchVehicles(pageParam, 'tracked').then((res) => res.content),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const current = lastPage.page;
      const total = lastPage.totalPages;
      return current < total ? current + 1 : undefined;
    },
    enabled,
  });

  const vehicles: Vehicle[] =
    query.data?.pages.flatMap((page) => page.vehicles) ?? [];

  return {
    ...query,
    vehicles,
  };
};
