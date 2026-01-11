"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { products } from "@/lib/products"
import { Edit2, Trash2, Plus } from "lucide-react"
import Link from "next/link"

export function AdminDashboard() {
  const [adminProducts, setAdminProducts] = useState(products)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "sketchbooks" as const,
  })

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.price && formData.description) {
      const newProduct = {
        id: Math.random().toString(),
        name: formData.name,
        price: Number.parseFloat(formData.price),
        description: formData.description,
        category: formData.category,
        image: "/art-supplies-still-life.png",
      }
      setAdminProducts([...adminProducts, newProduct])
      setFormData({ name: "", price: "", description: "", category: "sketchbooks" })
      setShowForm(false)
      alert("Product added successfully!")
    }
  }

  const handleDeleteProduct = (id: string) => {
    setAdminProducts(adminProducts.filter((p) => p.id !== id))
    alert("Product deleted!")
  }

  const stats = {
    totalProducts: adminProducts.length,
    categories: new Set(adminProducts.map((p) => p.category)).size,
    totalValue: adminProducts.reduce((sum, p) => sum + p.price, 0),
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Link href="/">
              <Button variant="outline">Back to Store</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-6">
              <p className="text-muted-foreground text-sm">Total Products</p>
              <p className="text-3xl font-bold mt-2">{stats.totalProducts}</p>
            </Card>
            <Card className="p-6">
              <p className="text-muted-foreground text-sm">Categories</p>
              <p className="text-3xl font-bold mt-2">{stats.categories}</p>
            </Card>
            <Card className="p-6">
              <p className="text-muted-foreground text-sm">Inventory Value</p>
              <p className="text-3xl font-bold mt-2">${stats.totalValue.toFixed(2)}</p>
            </Card>
          </div>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Products</h2>
              <Button onClick={() => setShowForm(!showForm)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>

            {showForm && (
              <form onSubmit={handleAddProduct} className="mb-6 p-4 bg-muted rounded-lg space-y-4">
                <input
                  type="text"
                  placeholder="Product name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-border rounded bg-background"
                />
                <input
                  type="number"
                  placeholder="Price"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-border rounded bg-background"
                />
                <textarea
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-border rounded bg-background"
                />
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full px-3 py-2 border border-border rounded bg-background"
                >
                  <option value="sketchbooks">Sketchbooks</option>
                  <option value="brushes">Brushes</option>
                  <option value="watercolor">Watercolor</option>
                </select>
                <div className="flex gap-2">
                  <Button type="submit">Save Product</Button>
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            )}

            <div className="space-y-3">
              {adminProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ${product.price.toFixed(2)} • {product.category}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDeleteProduct(product.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
