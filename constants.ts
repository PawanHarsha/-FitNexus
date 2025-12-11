import { Product, Gym, Package, WorkoutData } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Nitro Whey Gold',
    category: 'Supplements',
    price: 59.99,
    rating: 4.8,
    image: 'https://picsum.photos/400/400?random=1',
    description: 'Premium isolate whey protein for lean muscle growth.'
  },
  {
    id: 'p2',
    name: 'GripTech Lifting Straps',
    category: 'Gear',
    price: 19.99,
    rating: 4.5,
    image: 'https://picsum.photos/400/400?random=2',
    description: 'Heavy duty straps for deadlifts and rows.'
  },
  {
    id: 'p3',
    name: 'Pre-Workout Igniter',
    category: 'Supplements',
    price: 34.99,
    rating: 4.7,
    image: 'https://picsum.photos/400/400?random=3',
    description: 'Explosive energy and focus for intense sessions.'
  },
  {
    id: 'p4',
    name: 'Adjustable Kettlebell',
    category: 'Equipment',
    price: 149.99,
    rating: 4.9,
    image: 'https://picsum.photos/400/400?random=4',
    description: '5-40lbs adjustable weight for versatile home workouts.'
  },
  {
    id: 'p5',
    name: 'Compression Tech Tee',
    category: 'Apparel',
    price: 29.99,
    rating: 4.6,
    image: 'https://picsum.photos/400/400?random=5',
    description: 'Moisture-wicking fabric with muscle support.'
  },
  {
    id: 'p6',
    name: 'Yoga Recovery Mat',
    category: 'Gear',
    price: 45.00,
    rating: 4.4,
    image: 'https://picsum.photos/400/400?random=6',
    description: 'Extra thick cushioning for joint protection.'
  }
];

export const MOCK_GYMS: Gym[] = [
  {
    id: 'g1',
    name: 'Iron Paradise NYC',
    location: 'Manhattan, NY',
    type: 'GYM',
    pricePerSession: 25,
    rating: 4.9,
    image: 'https://picsum.photos/600/400?random=10',
    features: ['24/7 Access', 'Sauna', 'Powerlifting Zone']
  },
  {
    id: 'g2',
    name: 'Sarah Jenkins Coaching',
    location: 'Brooklyn, NY',
    type: 'TRAINER',
    pricePerSession: 80,
    rating: 5.0,
    image: 'https://picsum.photos/600/400?random=11',
    features: ['HIIT Specialist', 'Nutrition Plans', '1-on-1']
  },
  {
    id: 'g3',
    name: 'Zenith Yoga Studio',
    location: 'Queens, NY',
    type: 'CLASS',
    pricePerSession: 20,
    rating: 4.7,
    image: 'https://picsum.photos/600/400?random=12',
    features: ['Hot Yoga', 'Meditation', 'Mat Rental']
  },
  {
    id: 'g4',
    name: 'MetroFlex Warehouse',
    location: 'Jersey City, NJ',
    type: 'GYM',
    pricePerSession: 15,
    rating: 4.8,
    image: 'https://picsum.photos/600/400?random=13',
    features: ['Old School', 'No AC', 'Hardcore']
  }
];

export const HOME_GYM_PACKAGES: Package[] = [
  {
    id: 'pkg1',
    name: 'The Essentials',
    tier: 'STARTER',
    price: 499,
    description: 'Everything you need to get moving in a small apartment space.',
    items: ['Adjustable Dumbbells (5-50lbs)', 'Foldable Bench', 'Resistance Bands Set', 'Yoga Mat'],
    image: 'https://picsum.photos/800/600?random=20'
  },
  {
    id: 'pkg2',
    name: 'The Garage Athlete',
    tier: 'PRO',
    price: 1499,
    description: 'A complete power rack setup for serious strength training.',
    items: ['Power Rack with Pull-up Bar', 'Olympic Barbell (45lb)', '300lb Bumper Plate Set', 'Adjustable Bench', 'Rubber Flooring Mats'],
    image: 'https://picsum.photos/800/600?random=21'
  },
  {
    id: 'pkg3',
    name: 'The Private Studio',
    tier: 'ELITE',
    price: 4999,
    description: 'Commercial grade equipment for the ultimate luxury home gym.',
    items: ['Functional Trainer (Cable Machine)', 'Commercial Treadmill', 'Full Dumbbell Rack (5-100lbs)', 'Smith Machine', 'High-Fidelity Sound System'],
    image: 'https://picsum.photos/800/600?random=22'
  }
];

export const MOCK_CHART_DATA: WorkoutData[] = [
  { day: 'Mon', calories: 450, duration: 45 },
  { day: 'Tue', calories: 320, duration: 30 },
  { day: 'Wed', calories: 550, duration: 60 },
  { day: 'Thu', calories: 0, duration: 0 },
  { day: 'Fri', calories: 600, duration: 75 },
  { day: 'Sat', calories: 800, duration: 90 },
  { day: 'Sun', calories: 200, duration: 20 },
];