import axios from 'axios';
import { VehicleAPIResponse } from '../types/api-vehicle';

const API_URL = import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_API_TOKEN;

export const fetchVehicles = async (
  page: number = 1,
  type: 'tracked' | 'others' = 'tracked'
): Promise<VehicleAPIResponse> => {
  const response = await axios.get(API_URL, {
    params: { page, perPage: 10, type },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data;
};
