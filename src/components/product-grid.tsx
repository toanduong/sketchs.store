"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Sparkles, Grid3x3 } from "lucide-react"

export function ProductGrid() {
  const [filter, setFilter] = useState<"all" | "sketchbooks" | "brushes" | "watercolor">("all")

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter)

  const categories = [
    { value: "all", label: "All Products", icon: Grid3x3 },
    { value: "sketchbooks", label: "Sketchbooks", icon: null },
    { value: "brushes", label: "Brushes", icon: null },
    { value: "watercolor", label: "Watercolor", icon: null },
  ] as const

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-hover/10 rounded-full mb-2">
            <Sparkles className="w-4 h-4 text-hover" />
            <span className="text-sm font-semibold text-hover">Our Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Shop by <span className="text-hover">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated selection of premium art supplies
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === cat.value
                  ? "bg-gradient-to-r from-hover to-hover/80 text-white shadow-lg shadow-hover/30 scale-105"
                  : "bg-card border-2 border-border text-foreground hover:border-hover/50 hover:scale-105 hover:shadow-md"
              }`}
            >
              <span className="flex items-center gap-2">
                {cat.icon && <cat.icon className="w-4 h-4" />}
                {cat.label}
              </span>
              {filter === cat.value && (
                <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <p className="text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-hover">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        {filtered.length > 0 && (
          <div className="text-center pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-hover to-hover/80 text-white rounded-xl font-semibold hover:from-hover/90 hover:to-hover/70 shadow-lg shadow-hover/30 hover:shadow-xl hover:shadow-hover/40 transition-all duration-300 group"
            >
              View All Products
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
