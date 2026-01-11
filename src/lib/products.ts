export interface Product {
  id: string
  name: string
  price: number
  description: string
  category: "sketchbooks" | "brushes" | "watercolor"
  image: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Sketching Pad",
    price: 24.99,
    description: "High-quality 160gsm paper, perfect for pencil and charcoal work",
    category: "sketchbooks",
    image: "/premium-sketching-pad.jpg",
  },
  {
    id: "2",
    name: "Artist Sketchbook A4",
    price: 19.99,
    description: "Durable hardcover sketchbook with 80 sheets of premium paper",
    category: "sketchbooks",
    image: "/artist-sketchbook.jpg",
  },
  {
    id: "3",
    name: "Professional Brush Set",
    price: 45.99,
    description: "12-piece brush set with natural and synthetic bristles",
    category: "brushes",
    image: "/professional-brush-set.jpg",
  },
  {
    id: "4",
    name: "Fine Detail Brush Collection",
    price: 32.99,
    description: "Perfect for detailed work and fine strokes",
    category: "brushes",
    image: "/fine-detail-brush.jpg",
  },
  {
    id: "5",
    name: "Watercolor Paint Set",
    price: 34.99,
    description: "24 vibrant watercolor colors with mixing palette included",
    category: "watercolor",
    image: "/watercolor-paint-set.jpg",
  },
  {
    id: "6",
    name: "Professional Watercolor Kit",
    price: 59.99,
    description: "Premium 36-color set with professional-grade pigments",
    category: "watercolor",
    image: "/professional-watercolor-kit.jpg",
  },
  {
    id: "7",
    name: "Lightweight Travel Sketchbook",
    price: 14.99,
    description: "Compact and portable, perfect for sketching on the go",
    category: "sketchbooks",
    image: "/travel-sketchbook.jpg",
  },
  {
    id: "8",
    name: "Blend Brush Set",
    price: 28.99,
    description: "Specialized brushes for blending and smooth transitions",
    category: "brushes",
    image: "/blend-brush-set.jpg",
  },
  {
    id: "9",
    name: "Student Watercolor Set",
    price: 16.99,
    description: "Great for beginners with 12 essential colors",
    category: "watercolor",
    image: "/student-watercolor-set.jpg",
  },
]
