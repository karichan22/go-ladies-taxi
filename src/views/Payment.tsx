import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Building } from 'lucide-react';
import Header from '../components/Header';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { mockPaymentMethods } from '../data/mockData';

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string>(
    mockPaymentMethods.find(m => m.isDefault)?.id || '1'
  );
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  
  // Form state for new card
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveAsDefault, setSaveAsDefault] = useState(false);
  
  const handlePaymentMethodSelect = (id: string) => {
    setSelectedMethod(id);
    setShowNewCardForm(false);
  };
  
  const handleAddNewCard = () => {
    setSelectedMethod('');
    setShowNewCardForm(true);
  };
  
  const handlePaymentConfirm = () => {
    // In a real app, this would submit payment info
    // For demo purposes, navigate to a success page or back home
    navigate('/');
  };
  
  const getPaymentIcon = (type: string) => {
    switch (type) {
      case 'card':
        return <CreditCard size={24} className="text-primary" />;
      case 'yape':
      case 'plin':
        return <Smartphone size={24} className="text-primary" />;
      case 'transfer':
        return <Building size={24} className="text-primary" />;
      default:
        return <CreditCard size={24} className="text-primary" />;
    }
  };
  
  const getPaymentTitle = (type: string) => {
    switch (type) {
      case 'card':
        return 'Tarjeta de Crédito/Débito';
      case 'yape':
        return 'Yape';
      case 'plin':
        return 'Plin';
      case 'transfer':
        return 'Transferencia Bancaria';
      default:
        return type;
    }
  };
  
  return (
    <div className="min-h-screen bg-primary-light">
      <Header title="Métodos de Pago" showBack={true} showLogo={false} />
      
      <main className="page-container">
        <h2 className="text-xl font-semibold mb-4">Selecciona tu método de pago</h2>
        
        <div className="space-y-3 mb-6 slide-up">
          {mockPaymentMethods.map((method) => (
            <div 
              key={method.id}
              className={`card cursor-pointer flex items-center p-4 ${
                selectedMethod === method.id 
                  ? 'border-2 border-primary shadow-sm' 
                  : 'border border-transparent'
              }`}
              onClick={() => handlePaymentMethodSelect(method.id)}
            >
              <div className="mr-4 bg-primary-light p-2 rounded-full">
                {getPaymentIcon(method.type)}
              </div>
              
              <div className="flex-1">
                <h3 className="font-medium">{getPaymentTitle(method.type)}</h3>
                <p className="text-sm text-gray-600">{method.details}</p>
              </div>
              
              <div className="flex items-center ml-2">
                <input
                  type="radio"
                  checked={selectedMethod === method.id}
                  onChange={() => handlePaymentMethodSelect(method.id)}
                  className="h-4 w-4 accent-primary"
                />
                {method.isDefault && (
                  <span className="ml-2 text-xs bg-primary-light text-primary px-2 py-1 rounded-full">
                    Predeterminado
                  </span>
                )}
              </div>
            </div>
          ))}
          
          <div 
            className="card cursor-pointer flex items-center p-4 border border-dashed border-gray-300 hover:border-primary-light"
            onClick={handleAddNewCard}
          >
            <div className="mr-4 bg-primary-light p-2 rounded-full">
              <CreditCard size={24} className="text-primary" />
            </div>
            <p className="text-primary font-medium">Agregar nueva tarjeta</p>
          </div>
        </div>
        
        {showNewCardForm && (
          <div className="card mb-6 slide-up">
            <h3 className="font-medium mb-4">Agregar nueva tarjeta</h3>
            
            <InputField
              label="Número de tarjeta"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            
            <InputField
              label="Nombre del titular"
              placeholder="Como aparece en la tarjeta"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Fecha de expiración"
                placeholder="MM/AA"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
              
              <InputField
                label="CVV"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                type="password"
                maxLength={4}
              />
            </div>
            
            <label className="flex items-center mt-4">
              <input 
                type="checkbox"
                checked={saveAsDefault}
                onChange={(e) => setSaveAsDefault(e.target.checked)}
                className="mr-2 h-4 w-4 accent-primary"
              />
              <span className="text-sm">Guardar como método predeterminado</span>
            </label>
            
            <div className="mt-4 flex space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setShowNewCardForm(false)}
              >
                Cancelar
              </Button>
              <Button 
                onClick={handlePaymentConfirm}
                disabled={!cardNumber || !cardHolder || !expiryDate || !cvv}
              >
                Guardar
              </Button>
            </div>
          </div>
        )}
        
        <div className="fixed bottom-16 left-0 right-0 p-4 bg-white shadow-lg">
          <Button 
            fullWidth
            onClick={handlePaymentConfirm}
            disabled={!selectedMethod && !showNewCardForm}
          >
            Confirmar Pago
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Payment;