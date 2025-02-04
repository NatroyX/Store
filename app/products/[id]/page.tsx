import { Layout } from "@/components/layout"
import { ProductShowcase } from "@/components/product-showcase"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, RotateCcw, ShieldCheck } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the product data based on the ID
  const product = {
    id: params.id,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    description:
      "Experience ultimate comfort with our Premium Cotton T-Shirt. Made from 100% organic cotton, this shirt offers a perfect blend of style and sustainability.",
    rating: 4.5,
    reviews: 128,
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="grid md:grid-cols-2 gap-8">
          <ProductShowcase />
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>
            <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>
            <p className="text-muted-foreground">{product.description}</p>
            <div className="space-y-2">
              <Badge variant="outline" className="text-sm">
                100% Organic Cotton
              </Badge>
              <Badge variant="outline" className="text-sm">
                Eco-friendly
              </Badge>
            </div>
            <div className="space-y-4">
              <Button size="lg" className="w-full">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Add to Wishlist
              </Button>
            </div>
            <div className="space-y-4 pt-6 border-t">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                <span className="text-sm">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5" />
                <span className="text-sm">30-day return policy</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm">2-year warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

