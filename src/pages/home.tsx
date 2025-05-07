import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { VehicleList } from '../components/Vehicle/VehicleList/vehicle-list';
import { VehicleSelector } from '../components/Vehicle/vehicle-selector';
import { useState } from 'react';

const queryClient = new QueryClient();

export function Home() {
  const [type, setType] = useState<'tracked' | 'others'>('tracked');
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <VehicleSelector selectedType={type} onChange={setType} />
        <VehicleList type={type} />
      </QueryClientProvider>
    </>
  );
}
