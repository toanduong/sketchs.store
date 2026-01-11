import { ProductsPageClient } from "@/components/products-page-client"
import { PageTransition } from "@/components/page-transition"

export default function ProductsPage() {
  return (
    <PageTransition>
      <ProductsPageClient />
    </PageTransition>
  )
}
