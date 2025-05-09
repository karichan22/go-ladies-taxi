import { Driver, Trip, User, PaymentMethod, FavoriteLocation, Message } from '../types';

export const mockDrivers: Driver[] = [
  {
    id: '1',
    name: 'Laura Rodríguez',
    carModel: 'Toyota Corolla 2022',
    licensePlate: 'ABC-123',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    name: 'Carla Mendoza',
    carModel: 'Hyundai Accent 2021',
    licensePlate: 'XYZ-789',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    name: 'Patricia Flores',
    carModel: 'Kia Rio 2020',
    licensePlate: 'DEF-456',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    name: 'Ana Gómez',
    carModel: 'Nissan Sentra 2021',
    licensePlate: 'GHI-101',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '5',
    name: 'María Pérez',
    carModel: 'Honda Civic 2022',
    licensePlate: 'JKL-202',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const mockFavoriteLocations: FavoriteLocation[] = [
  {
    id: '1',
    name: 'Casa',
    address: 'Av. Arequipa 1250, Lince',
    type: 'home',
    icon: 'home',
  },
  {
    id: '2',
    name: 'Oficina',
    address: 'Av. Javier Prado 2000, San Isidro',
    type: 'work',
    icon: 'briefcase',
  },
  {
    id: '3',
    name: 'Gimnasio',
    address: 'Av. La Marina 2000, San Miguel',
    type: 'other',
    icon: 'dumbbell',
  },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '1',
    receiverId: 'user-1',
    content: '¡Hola! Soy Laura, tu conductora. Estaré llegando en 7 minutos. 😊',
    timestamp: new Date().toISOString(),
    type: 'text',
  },
  {
    id: '2',
    senderId: 'system',
    receiverId: 'user-1',
    content: 'Laura está a 3 minutos de tu ubicación',
    timestamp: new Date().toISOString(),
    type: 'system',
  },
];

export const mockTrips: Trip[] = [
  {
    id: '1',
    origin: 'Av. Arequipa 1250, Lince',
    destination: 'Av. Javier Prado 2000, San Isidro',
    date: '2023-10-15T14:30:00',
    price: 25.50,
    status: 'completed',
    driverId: '1',
    specialNotes: 'Viajo con bebé',
  },
  {
    id: '2',
    origin: 'Av. La Marina 2000, San Miguel',
    destination: 'Av. Primavera 1540, Surco',
    date: '2023-10-20T09:15:00',
    price: 32.00,
    status: 'completed',
    driverId: '3',
  },
  {
    id: '3',
    origin: 'Av. Benavides 1800, Miraflores',
    destination: 'Av. Universitaria 1000, San Miguel',
    date: '2023-11-05T18:45:00',
    price: 28.50,
    status: 'in-progress',
    driverId: '2',
    sharedWith: ['contact@example.com'],
  },
];

export const mockUser: User = {
  id: '1',
  name: 'Sofía Martínez',
  email: 'sofia.martinez@example.com',
  phone: '+51 987 654 321',
  trips: mockTrips,
  favoriteLocations: mockFavoriteLocations,
  ladyPoints: 1240,
};

export const mockPaymentMethods: PaymentMethod[] = [
  {
    id: '1',
    type: 'card',
    details: '**** **** **** 4582',
    isDefault: true,
  },
  {
    id: '2',
    type: 'yape',
    details: '+51 987 654 321',
    isDefault: false,
  },
  {
    id: '3',
    type: 'plin',
    details: '+51 987 654 321',
    isDefault: false,
  },
  {
    id: '4',
    type: 'transfer',
    details: 'BCP: 123-456789-0-12',
    isDefault: false,
  },
];