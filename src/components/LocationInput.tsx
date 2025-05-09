import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface LocationInputProps {
  type: 'origin' | 'destination';
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const LocationInput: React.FC<LocationInputProps> = ({ 
  type, 
  value, 
  onChange, 
  placeholder 
}) => {
  const icon = type === 'origin' 
    ? <MapPin size={20} className="text-primary" /> 
    : <Navigation size={20} className="text-primary" />;

  return (
    <div className="input-with-icon mb-3">
      <span className="icon">{icon}</span>
      <input
        type="text"
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default LocationInput;