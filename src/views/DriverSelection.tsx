import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Header from '../components/Header';
import StarRating from '../components/StarRating';
import Button from '../components/Button';
import { mockDrivers } from '../data/mockData';

const DriverSelection: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDriver, setSelectedDriver] = useState<string | null>(null);
  
  const filteredDrivers = mockDrivers.filter((driver) =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSelectDriver = (driverId: string) => {
    setSelectedDriver(driverId);
  };
  
  const handleConfirm = () => {
    navigate('/payment');
  };
  
  return (
    <div className="min-h-screen bg-primary-light">
      <Header title="Seleccionar Conductora" showBack={true} showLogo={false} />
      
      <main className="page-container">
        <div className="mb-6 relative">
          <div className="input-with-icon">
            <span className="icon">
              <Search size={20} className="text-gray-400" />
            </span>
            <input
              type="text"
              className="input-field"
              placeholder="Buscar conductora por nombre"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="space-y-4 mb-8 slide-up">
          {filteredDrivers.length > 0 ? (
            filteredDrivers.map((driver) => (
              <div 
                key={driver.id}
                className={`card cursor-pointer transition-all duration-200 ${
                  selectedDriver === driver.id 
                    ? 'border-2 border-primary shadow-md' 
                    : 'border border-transparent hover:border-primary-light'
                }`}
                onClick={() => handleSelectDriver(driver.id)}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src={driver.image} 
                      alt={driver.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{driver.name}</h3>
                    <p className="text-sm text-gray-600">{driver.carModel}</p>
                    <p className="text-sm text-gray-600">Placa: {driver.licensePlate}</p>
                    <div className="mt-1">
                      <StarRating rating={driver.rating} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p>No se encontraron conductoras con ese nombre.</p>
            </div>
          )}
        </div>
        
        <div className="fixed bottom-16 left-0 right-0 p-4 bg-white shadow-lg">
          <Button 
            fullWidth
            onClick={handleConfirm}
            disabled={!selectedDriver}
          >
            Continuar
          </Button>
        </div>
      </main>
    </div>
  );
};

export default DriverSelection;