import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBack = false, 
  showLogo = true 
}) => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm py-4 px-4">
      <div className="flex items-center">
        {showBack && (
          <button 
            onClick={() => navigate(-1)} 
            className="mr-3 text-gray-700 p-1"
          >
            <ArrowLeft size={24} />
          </button>
        )}
        
        {showLogo && !title && (
          <Logo size="medium" />
        )}
        
        {title && (
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        )}
      </div>
    </header>
  );
};

export default Header;