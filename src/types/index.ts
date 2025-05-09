export interface Driver {
  id: string;
  name: string;
  carModel: string;
  licensePlate: string;
  rating: number;
  image: string;
}

export interface Trip {
  id: string;
  origin: string;
  destination: string;
  date: string;
  price: number;
  status: 'completed' | 'cancelled' | 'upcoming' | 'in-progress';
  driverId?: string;
  specialNotes?: string;
  sharedWith?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  trips: Trip[];
  favoriteLocations: FavoriteLocation[];
  ladyPoints: number;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'yape' | 'plin' | 'transfer';
  details: string;
  isDefault: boolean;
}

export interface FavoriteLocation {
  id: string;
  name: string;
  address: string;
  type: 'home' | 'work' | 'other';
  icon: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  type: 'text' | 'system';
}

export type TripType = 'one-way' | 'round-trip';