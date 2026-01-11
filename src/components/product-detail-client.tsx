"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Product } from "@/lib/products"
import { useCart } from "@/hooks/use-cart"
import { ChevronLeft, ShoppingCart, Check, Truck, RotateCcw } from "lucide-react"

interface ProductDetailClientProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const relatedCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="min-h-screen pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-hover transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to shop
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-8"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <motion.div
              variants={imageVariants}
              className="relative w-full aspect-square bg-muted rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col justify-between">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 bg-hover text-white rounded-full text-xs font-medium uppercase tracking-wide mb-3">
                  {product.category}
                </span>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-2xl font-semibold text-primary">${product.price}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-y-3 pt-4 border-t border-border"
              >
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Free shipping</p>
                    <p className="text-xs text-muted-foreground">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RotateCcw className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">30-day returns</p>
                    <p className="text-xs text-muted-foreground">Hassle-free returns policy</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-y-4 pt-8 border-t border-border"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-input rounded-lg overflow-hidden">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-hover hover:text-white transition-colors font-medium"
                  >
                    −
                  </motion.button>
                  <span className="px-6 py-2 font-medium min-w-16 text-center border-x-2 border-input bg-background">{quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-hover hover:text-white transition-colors font-medium"
                  >
                    +
                  </motion.button>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button onClick={handleAddToCart} size="lg" className="w-full" variant={added ? "default" : "outline"}>
                  {added ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="border-t border-border pt-12"
          >
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  variants={relatedCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="overflow-hidden group hover:shadow-lg hover:border-hover transition-all duration-300 h-full border-2 border-transparent">
                    <Link href={`/products/${relatedProduct.id}`}>
                      <div className="relative overflow-hidden bg-muted h-48">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold line-clamp-1">{relatedProduct.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{relatedProduct.description}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <span className="text-xl font-bold">${relatedProduct.price}</span>
                        <Link href={`/products/${relatedProduct.id}`}>
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.main>
  )
}
