"use client"

import { useState, useCallback, useEffect } from "react"
import type { Product } from "@/lib/products"

export function useCart() {
  const [items, setItems] = useState<Product[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("cart")
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch (e) {
        // Invalid stored data
      }
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, mounted])

  const addItem = useCallback((product: Product) => {
    setItems((prev) => [...prev, product])
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const clear = useCallback(() => {
    setItems([])
  }, [])

  return { items, addItem, removeItem, clear }
}
