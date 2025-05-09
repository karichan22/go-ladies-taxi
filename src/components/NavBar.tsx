import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, CreditCard, User, Map } from 'lucide-react';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: HomeIcon, label: 'Inicio', path: '/' },
    { icon: Map, label: 'Mis Viajes', path: '/profile' },
    { icon: CreditCard, label: 'Pagos', path: '/payment' },
    { icon: User, label: 'Perfil', path: '/profile' },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] rounded-t-2xl z-10">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.label}
              className={`flex flex-col items-center justify-center p-2 ${
                isActive ? 'text-primary' : 'text-gray-500'
              }`}
              onClick={() => navigate(item.path)}
            >
              <Icon size={24} className={isActive ? 'text-primary' : 'text-gray-500'} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;