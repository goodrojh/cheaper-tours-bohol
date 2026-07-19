// Stop names are proper nouns and stay in English across locales.
export interface TourAddon {
  name: string
  price: number
}

export interface Tour {
  id: 't1' | 't2' | 't3' | 't4' | 't5'
  day: number
  price: number
  image: string
  stops: string[]
  includes?: string[]
  optional?: TourAddon[]
}

export const tours: Tour[] = [
  {
    id: 't1',
    day: 1,
    price: 4000,
    image: 'images/chocolate-hills-view.jpg',
    stops: [
      'Chocolate Hills',
      'Tarsier Sanctuary',
      'Loboc River Floating Restaurant',
      'Man-made Mahogany Forest',
      'Baclayon Church (1595)',
      'Blood Compact Shrine',
      'Butterfly & Python Park',
      'Sevilla Hanging Bridge',
    ],
    optional: [
      { name: 'ATV Ride at Chocolate Hills', price: 1400 },
      { name: 'Loboc Eco-Adventure: zipline + cable car', price: 1300 },
    ],
  },
  {
    id: 't2',
    day: 2,
    price: 3500,
    image: 'images/virgin-island.jpg',
    stops: [
      'Dolphin Watching at sunrise',
      'Balicasag Island',
      'Fish Sanctuary snorkeling',
      'Sea Turtle Watching',
      'Virgin Island sandbar',
    ],
    includes: [
      'Private boat',
      'Boat guide',
      'Life jackets',
      'Snorkeling gear',
      'Paddle boat transfer',
    ],
    optional: [{ name: 'Scuba diving (per person)', price: 3500 }],
  },
  {
    id: 't3',
    day: 3,
    price: 3000,
    image: 'images/hinagdanan-cave.jpg',
    stops: [
      'Hinagdanan Cave',
      'Bohol Bee Farm',
      'Panglao Church & Bell Tower',
      'Nova Shell Museum',
      'SouthFarm',
      'Moadto Strip Mall',
      'Oceanica Resort',
    ],
  },
  {
    id: 't4',
    day: 4,
    price: 4500,
    image: 'images/zipbike.jpg',
    stops: ['Giant Swing', 'The Plunge', 'Suislide', 'Skyride', 'Hamster Wheel', 'Zipbike'],
  },
  {
    id: 't5',
    day: 5,
    price: 4500,
    image: 'images/canumantad-falls.png',
    stops: [
      'Anda White Beach',
      'Cabagnow Cave Pool',
      'Can-umantad Falls',
      'Cadapdapan Rice Terraces',
    ],
  },
]

export const offers = [
  { id: 'o1', days: 2, price: 7000, oldPrice: 7500 },
  { id: 'o2', days: 3, price: 9800, oldPrice: 10500 },
  { id: 'o3', days: 5, price: 18000, oldPrice: 19500 },
] as const
