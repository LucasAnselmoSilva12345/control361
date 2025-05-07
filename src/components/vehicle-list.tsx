import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { fetchVehicles } from '../api/vehicle';
import { Vehicle } from '../types/vehicle';

interface VehicleListProps {
  type: 'tracked' | 'others';
}

export function VehicleList({ type }: VehicleListProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ['vehicles', type],
      queryFn: ({ pageParam = 1 }) => fetchVehicles(pageParam, type),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const current = lastPage.content.page;
        const total = lastPage.content.totalPages;
        return current < total ? current + 1 : undefined;
      },
    });

  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    const currentLoader = loader.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {}, [type]);

  if (status === 'error') return <p>Erro ao carregar veículos.</p>;

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Place</th>
            <th>Frota</th>
            <th>Tipo</th>
            <th>Modelo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.pages.map((page) =>
            page.content.vehicles.map((vehicle: Vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.plate}</td>
                <td>{vehicle.fleet}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div ref={loader} style={{ padding: '20px', textAlign: 'center' }}>
        {isFetchingNextPage
          ? 'Carregando mais...'
          : hasNextPage
          ? 'Role para carregar mais'
          : 'Fim da lista.'}
      </div>
    </>
  );
}
