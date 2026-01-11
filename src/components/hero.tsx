"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, ArrowRight, Star } from "lucide-react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-hover/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-hover/10 rounded-full">
              <Sparkles className="w-4 h-4 text-hover" />
              <span className="text-sm font-semibold text-hover">Premium Art Supplies</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Create Your{" "}
                <span className="text-hover relative">
                  Masterpiece
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-hover/30"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C50 5 150 5 198 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Discover premium sketchbooks, professional brushes, and vibrant watercolors crafted for artists who
                demand excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-hover to-hover/80 text-white hover:from-hover/90 hover:to-hover/70 shadow-lg shadow-hover/30 hover:shadow-xl hover:shadow-hover/40 transition-all duration-300 group"
                >
                  Browse Collection
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-hover text-hover hover:bg-hover hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-hover to-hover/80 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <p className="text-sm text-muted-foreground">Premium Products</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-hover to-hover/80 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Star className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">10K+</div>
                  <p className="text-sm text-muted-foreground">Happy Artists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-500 delay-200">
            <div className="relative">
              {/* Main featured product */}
              <Card className="relative overflow-hidden border-2 border-transparent hover:border-hover/30 transition-all duration-300 group shadow-2xl">
                <Link href="/products">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src="/premium-sketchbook-art-supplies.jpg"
                      alt="Premium Art Supplies"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-hover rounded-full mb-3">
                        <Sparkles className="w-3 h-3" />
                        <span className="text-xs font-semibold">Featured Collection</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Premium Sketchbooks</h3>
                      <p className="text-sm text-white/90">High-quality paper for your creative journey</p>
                    </div>
                  </div>
                </Link>
              </Card>

              {/* Floating category cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Card className="p-4 border-2 border-transparent hover:border-hover/30 transition-all duration-300 group cursor-pointer">
                  <Link href="/products">
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                      <Image
                        src="/professional-art-brushes.jpg"
                        alt="Professional Brushes"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-sm group-hover:text-hover transition-colors">
                      Professional Brushes
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">From $28.99</p>
                  </Link>
                </Card>

                <Card className="p-4 border-2 border-transparent hover:border-hover/30 transition-all duration-300 group cursor-pointer">
                  <Link href="/products">
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                      <Image
                        src="/vibrant-watercolor-paints-art.jpg"
                        alt="Watercolor Sets"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-sm group-hover:text-hover transition-colors">Watercolor Sets</h4>
                    <p className="text-xs text-muted-foreground mt-1">From $16.99</p>
                  </Link>
                </Card>
              </div>

              {/* Decorative badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-hover to-hover/80 text-white px-6 py-3 rounded-full shadow-lg rotate-12 animate-in fade-in slide-in-from-top-4 duration-500 delay-300">
                <div className="text-center">
                  <div className="text-xs font-semibold">New Arrival</div>
                  <div className="text-lg font-bold">20% OFF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hover/50 to-transparent" />
    </section>
  )
}
