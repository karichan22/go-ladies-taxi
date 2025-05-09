import React from 'react';
import { Share2, MapPin, MessageCircle, PhoneCall } from 'lucide-react';
import Button from './Button';
import ChatInterface from './ChatInterface';
import { Message } from '../types';

interface TripConfirmationProps {
  driverName: string;
  arrivalTime: string;
  carModel: string;
  licensePlate: string;
  messages: Message[];
  onSendMessage: (message: string) => void;
  onShare: () => void;
  onCancel: () => void;
}

const TripConfirmation: React.FC<TripConfirmationProps> = ({
  driverName,
  arrivalTime,
  carModel,
  licensePlate,
  messages,
  onSendMessage,
  onShare,
  onCancel,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-primary">¡Tu taxi está confirmado!</h2>
          <Button
            variant="outline"
            onClick={onShare}
            icon={<Share2 size={18} />}
          >
            Compartir
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
              <MapPin size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-medium">Tu conductora {driverName} llegará en {arrivalTime}</p>
              <p className="text-sm text-gray-500">{carModel} • Placa: {licensePlate}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              fullWidth
              icon={<MessageCircle size={18} />}
              onClick={() => {}}
            >
              WhatsApp
            </Button>
            <Button
              variant="outline"
              fullWidth
              icon={<PhoneCall size={18} />}
              onClick={() => {}}
            >
              Llamar
            </Button>
          </div>
        </div>
      </div>

      <ChatInterface
        messages={messages}
        onSendMessage={onSendMessage}
      />

      <Button
        variant="outline"
        fullWidth
        onClick={onCancel}
      >
        Cancelar viaje
      </Button>
    </div>
  );
};

export default TripConfirmation;