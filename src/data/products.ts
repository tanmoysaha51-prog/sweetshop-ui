// Product data with dummy information
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  featured: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Minimal Canvas Tote",
    price: 45,
    originalPrice: 60,
    description: "A beautifully crafted canvas tote bag perfect for everyday use. Made from 100% organic cotton with reinforced stitching and spacious interior pockets.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    featured: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Ceramic Pour-Over Set",
    price: 68,
    description: "Hand-crafted ceramic pour-over coffee set. Includes dripper and carafe. Each piece is unique with subtle variations in glaze.",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    featured: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Linen Throw Blanket",
    price: 120,
    originalPrice: 150,
    description: "Luxuriously soft stonewashed linen throw. Perfect weight for year-round comfort. Pre-washed for extra softness.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
    featured: true,
    rating: 4.7,
    reviews: 56
  },
  {
    id: 4,
    name: "Handwoven Storage Basket",
    price: 38,
    description: "Artisan-made seagrass basket with cotton handles. Perfect for organizing blankets, towels, or plants.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
    featured: true,
    rating: 4.6,
    reviews: 42
  },
  {
    id: 5,
    name: "Organic Cotton Hoodie",
    price: 85,
    description: "Relaxed-fit hoodie made from 100% organic cotton. Features a kangaroo pocket and brushed fleece interior.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
    featured: false,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 6,
    name: "Minimalist Desk Lamp",
    price: 95,
    originalPrice: 120,
    description: "Adjustable brass desk lamp with matte black shade. Touch-sensitive dimmer with three brightness levels.",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop",
    featured: false,
    rating: 4.5,
    reviews: 78
  },
  {
    id: 7,
    name: "Leather Card Wallet",
    price: 55,
    description: "Slim vegetable-tanned leather card holder. Fits up to 8 cards with a center cash slot. Ages beautifully over time.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop",
    featured: false,
    rating: 4.9,
    reviews: 167
  },
  {
    id: 8,
    name: "Stoneware Mug Set",
    price: 42,
    description: "Set of 4 handmade stoneware mugs with reactive glaze. Microwave and dishwasher safe. 12oz capacity each.",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
    featured: false,
    rating: 4.7,
    reviews: 91
  }
];

export const categories = ["All", "Bags", "Kitchen", "Home", "Clothing", "Lighting", "Accessories"];
