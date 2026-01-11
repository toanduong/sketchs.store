import { ProductGrid } from "@/components/product-grid"
import { Hero } from "@/components/hero"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Hero />
        <ProductGrid />
      </main>
    </PageTransition>
  )
}
