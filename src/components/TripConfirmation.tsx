import React from 'react';
import { MapPin, Share2, AlertCircle, Map } from 'lucide-react';
import Button from './Button';
import ChatInterface from './ChatInterface';
import { Message, Driver } from '../types';

interface TripConfirmationProps {
  driver: Driver;
  origin: string;
  destination: string;
  messages: Message[];
  onSendMessage: (message: string) => void;
  onShareTrip: () => void;
  onViewRoute: () => void;
  onCancel: () => void;
  estimatedTime: number;
}

const TripConfirmation: React.FC<TripConfirmationProps> = ({
  driver,
  origin,
  destination,
  messages,
  onSendMessage,
  onShareTrip,
  onViewRoute,
  onCancel,
  estimatedTime,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex items-center mb-4">
          <img
            src={driver.image}
            alt={driver.name}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-medium">Tu conductora es {driver.name}</h3>
            <p className="text-sm text-gray-600">{driver.carModel}</p>
            <p className="text-sm text-gray-600">Placa: {driver.licensePlate}</p>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-start">
            <MapPin size={20} className="text-primary mr-2 mt-1" />
            <div>
              <p className="text-sm text-gray-500">Origen</p>
              <p className="text-sm font-medium">{origin}</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin size={20} className="text-primary mr-2 mt-1" />
            <div>
              <p className="text-sm text-gray-500">Destino</p>
              <p className="text-sm font-medium">{destination}</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-primary-light rounded-lg p-3 mb-4">
          <p className="text-primary font-medium">
            🚗 Tu conductora llegará en {estimatedTime} minutos
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="outline"
            onClick={onViewRoute}
            icon={<Map size={18} />}
            className="text-sm py-2"
          >
            Ver ruta
          </Button>
          <Button
            variant="outline"
            onClick={onShareTrip}
            icon={<Share2 size={18} />}
            className="text-sm py-2"
          >
            Compartir
          </Button>
          <Button
            variant="outline"
            onClick={onCancel}
            icon={<AlertCircle size={18} />}
            className="text-sm py-2 text-error border-error hover:bg-error hover:text-white"
          >
            Cancelar
          </Button>
        </div>
      </div>

      <ChatInterface messages={messages} onSendMessage={onSendMessage} />
    </div>
  );
};

export default TripConfirmation;