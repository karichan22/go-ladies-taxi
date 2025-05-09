import React from 'react';
import { CarTaxiFront as Taxi } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const sizes = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl',
  };
  
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-primary-light p-2">
        <Taxi className="text-primary" size={size === 'small' ? 20 : size === 'medium' ? 24 : 28} />
      </div>
      <span className={`font-semibold ${sizes[size]} text-primary`}>Go Ladies Taxi</span>
    </div>
  );
};

export default Logo;