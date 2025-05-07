import { Vehicle } from './vehicle';

export interface VehicleAPIResponse {
  statusCode: number;
  message: string;
  content: {
    vehicles: Vehicle[];
    totalPages: number;
    page: number;
    perPage: number;
  };
}
