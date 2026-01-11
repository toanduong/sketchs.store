"use client"

import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, Settings } from "lucide-react"

export function Navbar() {
  const { items } = useCart()
  const cartCount = items.length

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-hover rounded-md">
              <span className="font-bold text-white text-base">G</span>
            </div>
            <span className="font-semibold text-lg hidden sm:inline">okits</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-hover transition-colors">
              Home
            </Link>
            <Link href="/" className="text-foreground hover:text-hover transition-colors">
              Products
            </Link>
            <Link href="/" className="text-foreground hover:text-hover transition-colors">
              About
            </Link>
            <Link href="/" className="text-foreground hover:text-hover transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/auth">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link href="/admin">
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
