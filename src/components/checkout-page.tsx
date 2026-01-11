"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { useForm } from "@/hooks/use-form"
import { ArrowLeft } from "lucide-react"

export function CheckoutPage() {
  const { items, clear } = useCart()
  const { values, handleChange, reset } = useForm({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  })

  const total = items.reduce((sum, item) => sum + item.price, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Order placed successfully for $${total.toFixed(2)}!\n\nNote: This is a demo. No real payment was processed.`)
    clear()
    reset()
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Your cart is empty</h1>
            <Link href="/">
              <Button>Back to Shopping</Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/cart">
          <Button variant="outline" className="mb-8 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cart
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background"
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background"
                  />
                  <input
                    type="text"
                    placeholder="Street Address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    required
                    className="col-span-2 px-4 py-2 border border-border rounded-lg bg-background"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-background"
                  />
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Card Number (demo)"
                    name="cardNumber"
                    value={values.cardNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      name="expiry"
                      value={values.expiry}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-background"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      name="cvc"
                      value={values.cvc}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-background"
                    />
                  </div>
                </div>
              </Card>

              <Button type="submit" className="w-full" size="lg">
                Complete Order
              </Button>
            </form>
          </div>

          <div>
            <Card className="p-6 sticky top-20 space-y-6">
              <div>
                <h2 className="font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2 max-h-64 overflow-y-auto mb-4 pb-4 border-b border-border">
                  {items.map((item) => (
                    <div key={item.id} className="text-sm flex justify-between">
                      <span className="truncate">{item.name}</span>
                      <span className="font-medium flex-shrink-0">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
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
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                This is a demo checkout. No real payment will be processed.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
