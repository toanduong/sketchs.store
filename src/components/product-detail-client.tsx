"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
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

  return (
    <main className="min-h-screen pt-20 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-in fade-in slide-in-from-left-4 duration-400">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-hover transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-8">
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <div className="relative w-full aspect-square bg-muted rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-between animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <div className="space-y-6">
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300">
                <span className="inline-block px-3 py-1 bg-hover text-white rounded-full text-xs font-medium uppercase tracking-wide mb-3">
                  {product.category}
                </span>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-2xl font-semibold text-primary">${product.price}</p>
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-400">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-border animate-in fade-in slide-in-from-bottom-2 duration-500 delay-500">
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
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-border animate-in fade-in slide-in-from-bottom-2 duration-500 delay-600">
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-input rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-hover hover:text-white transition-all duration-200 active:scale-95 font-medium"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-medium min-w-16 text-center border-x-2 border-input bg-background">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-hover hover:text-white transition-all duration-200 active:scale-95 font-medium"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="transition-transform duration-200 active:scale-[0.98]">
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
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t border-border pt-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <div
                  key={relatedProduct.id}
                  className="animate-in fade-in slide-in-from-bottom-6 duration-500 transition-transform hover:-translate-y-2"
                  style={{ animationDelay: `${700 + index * 100}ms` }}
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
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
