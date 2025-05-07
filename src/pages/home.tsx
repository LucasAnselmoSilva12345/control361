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
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="max-w-56 h-10 p-[10px] text-xs font-inter bg-transparent border rounded-lg border-brand-90 placeholder:text-xs placeholder:text-brand-90 transition-colors focus:outline-none focus:ring-2 focus:border-none focus:ring-brand-100 focus:ring-opacity-50"
              placeholder="Buscar por placa ou frota"
            />
            <button
              type="submit"
              className="h-10 w-36 text-xs font-poppins font-semibold bg-brand-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-90 focus:ring-opacity-50"
            >
              Nova
            </button>
          </div>
        </section>
        <VehicleList type={type} />
      </QueryClientProvider>
    </>
  );
}
