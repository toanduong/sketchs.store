export interface Product {
  id: string
  name: string
  price: number
  description: string
  category: "sketchbooks" | "brushes" | "watercolor"
  brand: string
  rating: number
  image: string
  inStock: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Sketching Pad",
    price: 24.99,
    description: "High-quality 160gsm paper, perfect for pencil and charcoal work",
    category: "sketchbooks",
    brand: "ArtPro",
    rating: 4.8,
    image: "/premium-sketching-pad.jpg",
    inStock: true,
  },
  {
    id: "2",
    name: "Artist Sketchbook A4",
    price: 19.99,
    description: "Durable hardcover sketchbook with 80 sheets of premium paper",
    category: "sketchbooks",
    brand: "Moleskine",
    rating: 4.9,
    image: "/artist-sketchbook.jpg",
    inStock: true,
  },
  {
    id: "3",
    name: "Professional Brush Set",
    price: 45.99,
    description: "12-piece brush set with natural and synthetic bristles",
    category: "brushes",
    brand: "Windsor & Newton",
    rating: 4.7,
    image: "/professional-brush-set.jpg",
    inStock: true,
  },
  {
    id: "4",
    name: "Fine Detail Brush Collection",
    price: 32.99,
    description: "Perfect for detailed work and fine strokes",
    category: "brushes",
    brand: "Da Vinci",
    rating: 4.6,
    image: "/fine-detail-brush.jpg",
    inStock: true,
  },
  {
    id: "5",
    name: "Watercolor Paint Set",
    price: 34.99,
    description: "24 vibrant watercolor colors with mixing palette included",
    category: "watercolor",
    brand: "Winsor & Newton",
    rating: 4.8,
    image: "/watercolor-paint-set.jpg",
    inStock: true,
  },
  {
    id: "6",
    name: "Professional Watercolor Kit",
    price: 59.99,
    description: "Premium 36-color set with professional-grade pigments",
    category: "watercolor",
    brand: "Schmincke",
    rating: 5.0,
    image: "/professional-watercolor-kit.jpg",
    inStock: true,
  },
  {
    id: "7",
    name: "Lightweight Travel Sketchbook",
    price: 14.99,
    description: "Compact and portable, perfect for sketching on the go",
    category: "sketchbooks",
    brand: "Strathmore",
    rating: 4.5,
    image: "/travel-sketchbook.jpg",
    inStock: true,
  },
  {
    id: "8",
    name: "Blend Brush Set",
    price: 28.99,
    description: "Specialized brushes for blending and smooth transitions",
    category: "brushes",
    brand: "Raphael",
    rating: 4.7,
    image: "/blend-brush-set.jpg",
    inStock: false,
  },
  {
    id: "9",
    name: "Student Watercolor Set",
    price: 16.99,
    description: "Great for beginners with 12 essential colors",
    category: "watercolor",
    brand: "ArtPro",
    rating: 4.4,
    image: "/student-watercolor-set.jpg",
    inStock: true,
  },
]

export const brands = Array.from(new Set(products.map((p) => p.brand))).sort()
export const categories = Array.from(new Set(products.map((p) => p.category))).sort()
