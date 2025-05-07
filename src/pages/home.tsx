import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { VehicleList } from '../components/vehicle-list';

const queryClient = new QueryClient();

export function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <VehicleList />
      </QueryClientProvider>
    </>
  );
}
