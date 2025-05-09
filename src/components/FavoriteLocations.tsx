import React from 'react';
import { Home, Briefcase, MapPin } from 'lucide-react';
import { FavoriteLocation } from '../types';

interface FavoriteLocationsProps {
  locations: FavoriteLocation[];
  onSelect: (address: string) => void;
}

const FavoriteLocations: React.FC<FavoriteLocationsProps> = ({ 
  locations, 
  onSelect 
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'home':
        return <Home size={20} className="text-primary" />;
      case 'work':
        return <Briefcase size={20} className="text-primary" />;
      default:
        return <MapPin size={20} className="text-primary" />;
    }
  };

  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Lugares favoritos</h3>
      <div className="grid grid-cols-2 gap-2">
        {locations.map((location) => (
          <button
            key={location.id}
            className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors"
            onClick={() => onSelect(location.address)}
          >
            <div className="mr-2">
              {getIcon(location.type)}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">{location.name}</p>
              <p className="text-xs text-gray-500 truncate">{location.address}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FavoriteLocations;