import React from 'react';
import { Calendar, MapPin, DollarSign } from 'lucide-react';
import Header from '../components/Header';
import Button from '../components/Button';
import { mockUser } from '../data/mockData';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const Profile: React.FC = () => {
  // Get user initials for the avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };
  
  const userInitials = getInitials(mockUser.name);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "d 'de' MMMM, yyyy - HH:mm", { locale: es });
  };
  
  const getTripStatusClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getTripStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completado';
      case 'cancelled':
        return 'Cancelado';
      case 'upcoming':
        return 'Próximo';
      default:
        return status;
    }
  };
  
  const handleLogout = () => {
    // For demo purposes, just console log
    console.log('User logged out');
  };
  
  return (
    <div className="min-h-screen bg-primary-light">
      <Header title="Mi Perfil" showLogo={false} />
      
      <main className="page-container">
        <div className="card mb-6 slide-up">
          <div className="flex items-center">
            <div className="bg-yellow-200 rounded-full h-16 w-16 flex items-center justify-center text-lg font-bold text-yellow-800 mr-4">
              {userInitials}
            </div>
            
            <div>
              <h2 className="text-xl font-semibold">{mockUser.name}</h2>
              <p className="text-gray-600">{mockUser.email}</p>
              <p className="text-gray-600">{mockUser.phone}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <Button 
              variant="outline" 
              onClick={() => console.log('Edit profile')}
              className="mr-2"
            >
              Editar Perfil
            </Button>
            <Button variant="secondary" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Historial de viajes</h3>
          
          <div className="space-y-4 slide-up">
            {mockUser.trips.map((trip) => (
              <div key={trip.id} className="card">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-primary mr-2" />
                    <span className="text-sm text-gray-600">
                      {formatDate(trip.date)}
                    </span>
                  </div>
                  <span 
                    className={`text-xs px-2 py-1 rounded-full ${getTripStatusClass(trip.status)}`}
                  >
                    {getTripStatusText(trip.status)}
                  </span>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-start">
                    <MapPin size={16} className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-gray-500">Origen</span>
                      <p className="text-sm">{trip.origin}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-gray-500">Destino</span>
                      <p className="text-sm">{trip.destination}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-gray-600 text-sm">Precio:</span>
                  <div className="flex items-center">
                    <DollarSign size={16} className="text-primary mr-1" />
                    <span className="font-medium">{trip.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;