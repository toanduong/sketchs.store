"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-widest text-primary uppercase">Elevate Your Art</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
                Premium Art <span className="text-primary">Essentials</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Discover curated sketchbooks, professional brushes, and vibrant watercolors crafted for artists who demand
              excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Explore Collection
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/auth"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <p className="text-sm text-muted-foreground mt-1">Premium Products</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <p className="text-sm text-muted-foreground mt-1">Happy Artists</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative h-full min-h-[500px] flex items-center justify-center transform transition-all duration-1000 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative w-full h-full">
              {/* Floating cards background */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-0 w-72 h-72 bg-hover/10 rounded-3xl blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-3xl blur-3xl" />
              </div>

              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {/* Large featured item - Sketchbooks */}
                <div className="col-span-2 md:col-span-1 row-span-2">
                  <div className="h-full bg-white rounded-2xl overflow-hidden border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group cursor-pointer shadow-lg">
                    <div className="h-full relative w-full aspect-square">
                      <Image
                        src="/premium-sketchbook-art-supplies.jpg"
                        alt="Premium Sketchbooks"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="font-semibold text-white text-lg">Sketchbooks</p>
                    </div>
                  </div>
                </div>

                {/* Small item - Brushes */}
                <div className="bg-white rounded-2xl overflow-hidden border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group cursor-pointer shadow-lg p-4 flex flex-col items-center justify-center h-full">
                  <div className="relative w-full aspect-square mb-3">
                    <Image
                      src="/professional-art-brushes.jpg"
                      alt="Professional Brushes"
                      fill
                      className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm font-semibold text-foreground text-center">Brushes</p>
                </div>

                {/* Small item - Watercolors */}
                <div className="bg-white rounded-2xl overflow-hidden border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group cursor-pointer shadow-lg p-4 flex flex-col items-center justify-center h-full">
                  <div className="relative w-full aspect-square mb-3">
                    <Image
                      src="/vibrant-watercolor-paints-art.jpg"
                      alt="Vibrant Watercolors"
                      fill
                      className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm font-semibold text-foreground text-center">Watercolors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  )
}
