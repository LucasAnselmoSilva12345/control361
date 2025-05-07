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
    <div style={{ marginBottom: '16px' }}>
      <button
        onClick={() => onChange('tracked')}
        style={{
          marginRight: '8px',
          backgroundColor: selectedType === 'tracked' ? '#007bff' : '#ccc',
          color: '#fff',
          padding: '8px 12px',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Rastreados
      </button>
      <button
        onClick={() => onChange('others')}
        style={{
          backgroundColor: selectedType === 'others' ? '#007bff' : '#ccc',
          color: '#fff',
          padding: '8px 12px',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Outros
      </button>
    </div>
  );
}
