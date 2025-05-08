import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const API_GOOLE_MAPS = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

type LocationVehicle = {
  id: string;
  plate: string;
  lat: number;
  lng: number;
  createdAt: string;
};

interface MapWithMarkersProps {
  locationVehicles: LocationVehicle[];
}

export function MapMarkers({ locationVehicles }: MapWithMarkersProps) {
  if (locationVehicles.length === 0) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
        <p className="text-gray-500">Nenhum veículo rastreado disponível</p>
      </div>
    );
  }

  const latestLocations = Object.values(
    locationVehicles.reduce<Record<string, LocationVehicle>>((acc, loc) => {
      const existing = acc[loc.plate];
      if (!existing || new Date(loc.createdAt) > new Date(existing.createdAt)) {
        acc[loc.plate] = loc;
      }
      return acc;
    }, {})
  );

  return (
    <APIProvider apiKey={API_GOOLE_MAPS}>
      <Map
        className="w-full"
        defaultZoom={12}
        defaultCenter={{
          lat: latestLocations[0]?.lat || -22.9,
          lng: latestLocations[0]?.lng || -47.05,
        }}
      >
        {latestLocations.map((vehicle) => (
          <Marker
            key={`${vehicle.plate}-${vehicle.createdAt}`}
            position={{ lat: vehicle.lat, lng: vehicle.lng }}
            title={`Placa: ${vehicle.plate}`}
          />
        ))}
      </Map>
    </APIProvider>
  );
}
