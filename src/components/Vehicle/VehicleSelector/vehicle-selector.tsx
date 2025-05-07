import { Button } from './button';

type VehicleType = 'tracked' | 'others';

interface VehicleTypeSelectorProps {
  selectedType: VehicleType;
  onChange: (type: VehicleType) => void;
}

export function VehicleSelector({
  selectedType,
  onChange,
}: VehicleTypeSelectorProps) {
  return (
    <div className="flex gap-4">
      <Button
        isActive={selectedType === 'tracked'}
        onClick={() => onChange('tracked')}
      >
        Rastreados
      </Button>
      <Button
        isActive={selectedType === 'others'}
        onClick={() => onChange('others')}
      >
        Outros
      </Button>
    </div>
  );
}
