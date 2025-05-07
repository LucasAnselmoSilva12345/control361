import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { VehicleList } from '../components/Vehicle/VehicleList/vehicle-list';
import { VehicleSelector } from '../components/Vehicle/VehicleSelector/vehicle-selector';
import { useState } from 'react';

const queryClient = new QueryClient();

export function Home() {
  const [type, setType] = useState<'tracked' | 'others'>('tracked');
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <section className="my-6 grid grid-cols-1 space-y-6 lg:flex lg:items-center lg:justify-between lg:space-y-0">
          <div className="flex items-center justify-between lg:gap-36">
            <h2 className="text-base font-poppins font-semibold text-white">
              Lista
            </h2>
            <VehicleSelector selectedType={type} onChange={setType} />
          </div>
          <div>
            <input type="text" />
            <button type="submit">Nova</button>
          </div>
        </section>
        <VehicleList type={type} />
      </QueryClientProvider>
    </>
  );
}
