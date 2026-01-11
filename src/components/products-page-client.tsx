"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { products, brands, categories } from "@/lib/products"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, SlidersHorizontal, Star } from "lucide-react"

export function ProductsPageClient() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])
  const [minRating, setMinRating] = useState<number>(0)
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "rating" | "name">("name")
  const [showFilters, setShowFilters] = useState(false)

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, 100])
    setMinRating(0)
  }

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
      const ratingMatch = product.rating >= minRating
      return categoryMatch && brandMatch && priceMatch && ratingMatch
    })

    // Sort products
    result.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return result
  }, [selectedCategories, selectedBrands, priceRange, minRating, sortBy])

  const activeFiltersCount =
    selectedCategories.length + selectedBrands.length + (minRating > 0 ? 1 : 0)

  return (
    <main className="min-h-screen pt-20 pb-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">
            Browse our complete collection of premium art supplies
          </p>
        </div>

        <div className="flex gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden fixed bottom-4 right-4 z-50">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-hover text-white hover:bg-hover/90 shadow-lg rounded-full w-14 h-14"
            >
              <SlidersHorizontal className="w-6 h-6" />
              {activeFiltersCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-destructive text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </div>

          {/* Filters Sidebar */}
          <aside
            className={`${
              showFilters ? "fixed inset-0 z-40 bg-background" : "hidden"
            } lg:block lg:sticky lg:top-24 lg:h-fit w-full lg:w-64 flex-shrink-0 space-y-6 animate-in fade-in slide-in-from-left-4 duration-500`}
          >
            <div className="lg:hidden flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Filters</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-4 lg:p-0 space-y-6 overflow-y-auto lg:overflow-visible max-h-screen lg:max-h-none">
              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="w-full border-hover text-hover hover:bg-hover hover:text-white"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear All Filters ({activeFiltersCount})
                </Button>
              )}

              {/* Category Filter */}
              <Card className="p-4 border-2 border-transparent hover:border-hover/30 transition-colors">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-hover rounded-full"></span>
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-3 cursor-pointer group hover:text-hover transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 rounded border-2 border-input text-hover focus:ring-hover focus:ring-2 cursor-pointer"
                      />
                      <span className="capitalize text-sm group-hover:translate-x-1 transition-transform">
                        {category}
                      </span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        ({products.filter((p) => p.category === category).length})
                      </span>
                    </label>
                  ))}
                </div>
              </Card>

              {/* Brand Filter */}
              <Card className="p-4 border-2 border-transparent hover:border-hover/30 transition-colors">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-hover rounded-full"></span>
                  Brands
                </h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center gap-3 cursor-pointer group hover:text-hover transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="w-4 h-4 rounded border-2 border-input text-hover focus:ring-hover focus:ring-2 cursor-pointer"
                      />
                      <span className="text-sm group-hover:translate-x-1 transition-transform">{brand}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        ({products.filter((p) => p.brand === brand).length})
                      </span>
                    </label>
                  ))}
                </div>
              </Card>

              {/* Price Range */}
              <Card className="p-4 border-2 border-transparent hover:border-hover/30 transition-colors">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-hover rounded-full"></span>
                  Price Range
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="text-xs text-muted-foreground mb-1 block">Min</label>
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-full px-3 py-2 border-2 border-input rounded-md focus:border-hover focus:outline-none text-sm"
                        min="0"
                        max={priceRange[1]}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs text-muted-foreground mb-1 block">Max</label>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full px-3 py-2 border-2 border-input rounded-md focus:border-hover focus:outline-none text-sm"
                        min={priceRange[0]}
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full accent-hover"
                  />
                </div>
              </Card>

              {/* Rating Filter */}
              <Card className="p-4 border-2 border-transparent hover:border-hover/30 transition-colors">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-hover rounded-full"></span>
                  Minimum Rating
                </h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1, 0].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center gap-3 cursor-pointer group hover:text-hover transition-colors"
                    >
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="w-4 h-4 text-hover focus:ring-hover focus:ring-2 cursor-pointer"
                      />
                      <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {rating > 0 ? (
                          <>
                            {[...Array(rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="text-sm ml-1">& Up</span>
                          </>
                        ) : (
                          <span className="text-sm">All Ratings</span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </Card>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1 space-y-6">
            {/* Sort & Results */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> of{" "}
                <span className="font-semibold text-foreground">{products.length}</span> products
              </p>
              <div className="flex items-center gap-2">
                <label className="text-sm text-muted-foreground">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="px-4 py-2 border-2 border-input rounded-lg focus:border-hover focus:outline-none cursor-pointer hover:border-hover/50 transition-colors"
                >
                  <option value="name">Name</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center border-2 border-dashed border-muted-foreground/20">
                <p className="text-muted-foreground text-lg mb-4">No products found</p>
                <Button onClick={clearFilters} variant="outline" className="border-hover text-hover hover:bg-hover hover:text-white">
                  Clear Filters
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
