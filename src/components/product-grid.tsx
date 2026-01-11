"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function ProductGrid() {
  const [filter, setFilter] = useState<"all" | "sketchbooks" | "brushes" | "watercolor">("all")

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter)

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
          <div className="flex flex-wrap gap-3">
            {(["all", "sketchbooks", "brushes", "watercolor"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

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
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
