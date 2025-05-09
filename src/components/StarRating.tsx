import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, size = 16 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        let starClass = 'text-gray-300';
        
        if (i < fullStars) {
          starClass = 'text-yellow-400';
        } else if (i === fullStars && hasHalfStar) {
          starClass = 'text-yellow-400 opacity-60';
        }
        
        return (
          <Star
            key={i}
            size={size}
            className={starClass}
            fill={i < fullStars || (i === fullStars && hasHalfStar) ? 'currentColor' : 'none'}
          />
        );
      })}
      <span className="ml-1 text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;