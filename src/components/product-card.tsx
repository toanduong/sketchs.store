"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/lib/products"
import { ShoppingCart, Check } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="h-full"
    >
      <Card className="overflow-hidden group hover:shadow-lg hover:border-hover transition-all duration-300 h-full border-2 border-transparent">
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden bg-muted h-64">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <span className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</span>
        </div>
        <Button onClick={handleAddToCart} className="w-full" size="sm" variant={added ? "default" : "outline"}>
          {added ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Added
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </Card>
    </motion.div>
  )
}
