import { Layout } from "@/components/layout"
import { Hero } from "@/components/hero"
import { ProductList } from "@/components/product-list"

export default function Home() {
  return (
    <Layout>
      <div className="pt-16">
        <Hero />
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <ProductList />
          </div>
        </section>
      </div>
    </Layout>
  )
}

