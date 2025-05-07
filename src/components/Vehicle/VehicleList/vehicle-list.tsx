import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { fetchVehicles } from '../../../api/vehicle';
import { Vehicle } from '../../../types/vehicle';
import { TableHeader } from './table-header';
import { TableData } from './table-data';

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
    <section>
      <table className="min-w-full text-center">
        <thead>
          <tr className="h-14">
            <TableHeader>Placa</TableHeader>
            <TableHeader>Frota</TableHeader>
            <TableHeader>Tipo</TableHeader>
            <TableHeader>Modelo</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data?.pages.map((page) =>
            page.content.vehicles.map((vehicle: Vehicle) => (
              <tr key={vehicle.id}>
                <TableData>{vehicle.plate}</TableData>
                <TableData>{vehicle.fleet}</TableData>
                <TableData>{vehicle.type}</TableData>
                <TableData>{vehicle.model}</TableData>
                <TableData>{vehicle.status}</TableData>
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
    </section>
  );
}
