"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { Trash2, ArrowLeft } from "lucide-react"
import Image from "next/image"

export function CartPage() {
  const { items, removeItem, clear } = useCart()
  const total = items.reduce((sum, item) => sum + item.price, 0)

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/">
            <Button variant="outline" className="mb-8 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shopping
            </Button>
          </Link>
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
            <p className="text-muted-foreground">Add some items to get started</p>
            <Link href="/">
              <Button className="mt-4">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/">
          <Button variant="outline" className="mb-8 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="p-4 flex gap-4">
                  <div className="relative w-24 h-24 bg-muted rounded overflow-hidden flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-lg font-bold">${item.price}</span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-destructive hover:text-destructive-foreground rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20 space-y-6">
              <div>
                <h2 className="font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2 pb-4 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="block">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>
              <Button variant="outline" className="w-full bg-transparent" onClick={() => clear()}>
                Clear Cart
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
