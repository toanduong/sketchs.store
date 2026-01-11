import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { products } from "@/lib/products"
import { ChevronLeft, Truck, RotateCcw } from "lucide-react"
import { ProductDetailClient } from "@/components/product-detail-client"

interface ProductDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link href="/">
            <Button variant="outline">Return to shop</Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />
}
