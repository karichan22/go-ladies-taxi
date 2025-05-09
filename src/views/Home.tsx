import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Clock, Radio, Car, DollarSign, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Button from '../components/Button';
import InputField from '../components/InputField';
import LocationInput from '../components/LocationInput';
import FavoriteLocations from '../components/FavoriteLocations';
import TripConfirmation from '../components/TripConfirmation';
import { TripType } from '../types';
import { mockFavoriteLocations, mockMessages } from '../data/mockData';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [stops, setStops] = useState<string[]>([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tripType, setTripType] = useState<TripType>('one-way');
  const [chooseDriver, setChooseDriver] = useState(false);
  const [specialNotes, setSpecialNotes] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const estimatedPrice = origin && destination ? '$25.00 - $30.00' : '--';
  
  const handleAddStop = () => {
    setStops([...stops, '']);
  };
  
  const handleStopChange = (index: number, value: string) => {
    const newStops = [...stops];
    newStops[index] = value;
    setStops(newStops);
  };
  
  const handleBookTaxi = () => {
    if (chooseDriver) {
      navigate('/drivers');
    } else {
      setShowConfirmation(true);
    }
  };

  const handleSendMessage = (message: string) => {
    console.log('Sending message:', message);
  };

  const handleShare = () => {
    console.log('Sharing trip details');
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };
  
  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-primary-light">
        <Header title="Confirmación de viaje" showBack={true} showLogo={false} />
        <main className="page-container">
          <TripConfirmation
            driverName="María"
            arrivalTime="7 minutos"
            carModel="Toyota Yaris"
            licensePlate="ABC-123"
            messages={mockMessages}
            onSendMessage={handleSendMessage}
            onShare={handleShare}
            onCancel={handleCancel}
          />
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-primary-light">
      <Header />
      
      <main className="page-container slide-up">
        <div className="card mb-6 mt-4">
          <h2 className="text-xl font-semibold mb-4 text-primary">Reserva tu viaje</h2>
          
          <section className="mb-6">
            <FavoriteLocations
              locations={mockFavoriteLocations}
              onSelect={(address) => setOrigin(address)}
            />
            
            <LocationInput
              type="origin"
              value={origin}
              onChange={setOrigin}
              placeholder="¿Dónde te recogemos?"
            />
            
            <LocationInput
              type="destination"
              value={destination}
              onChange={setDestination}
              placeholder="¿A dónde vas?"
            />
            
            {stops.map((stop, index) => (
              <LocationInput
                key={index}
                type="destination"
                value={stop}
                onChange={(value) => handleStopChange(index, value)}
                placeholder={`Parada ${index + 1}`}
              />
            ))}
            
            <Button 
              variant="outline"
              onClick={handleAddStop}
              className="text-sm py-2 mb-4"
              icon={<Plus size={16} />}
            >
              Agregar parada
            </Button>
          </section>
          
          <section className="mb-6 grid grid-cols-2 gap-4">
            <InputField 
              type="date"
              label="Fecha" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              icon={<Clock size={20} className="text-gray-400" />}
            />
            
            <InputField 
              type="time"
              label="Hora" 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              icon={<Clock size={20} className="text-gray-400" />}
            />
          </section>
          
          <section className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de viaje
            </label>
            <div className="flex space-x-4">
              <button 
                className={`flex items-center px-4 py-2 rounded-full ${
                  tripType === 'one-way' 
                    ? 'bg-primary text-white' 
                    : 'bg-white border border-secondary text-gray-700'
                }`}
                onClick={() => setTripType('one-way')}
              >
                <Radio size={16} className="mr-1" />
                <span className="text-sm">Ida</span>
              </button>
              
              <button 
                className={`flex items-center px-4 py-2 rounded-full ${
                  tripType === 'round-trip' 
                    ? 'bg-primary text-white' 
                    : 'bg-white border border-secondary text-gray-700'
                }`}
                onClick={() => setTripType('round-trip')}
              >
                <Radio size={16} className="mr-1" />
                <span className="text-sm">Ida y vuelta</span>
              </button>
            </div>
          </section>
          
          <section className="mb-6">
            <InputField
              label="Comentarios especiales"
              placeholder="Ej: Viajo con bebé"
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              icon={<MessageCircle size={20} className="text-gray-400" />}
            />
          </section>
          
          <section className="mb-6">
            <label className="flex items-center">
              <input 
                type="checkbox"
                checked={chooseDriver}
                onChange={(e) => setChooseDriver(e.target.checked)}
                className="mr-2 h-4 w-4 accent-primary"
              />
              <Car size={16} className="mr-1 text-primary" />
              <span className="text-sm">Elegir conductora</span>
            </label>
          </section>
          
          <section className="my-4 border-t border-b border-secondary py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <DollarSign size={20} className="text-primary mr-1" />
                <span className="font-medium">Precio estimado:</span>
              </div>
              <span className="font-semibold text-primary text-lg">
                {estimatedPrice}
              </span>
            </div>
          </section>
          
          <Button 
            fullWidth
            onClick={handleBookTaxi}
            disabled={!origin || !destination || !date || !time}
          >
            Solicitar Taxi
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;