import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden rounded-xl border-0 shadow-lg">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <Button className="w-full rounded-full" size="lg">
                <ShoppingCart className="mr-2 h-4 w-4" />
                View Product
              </Button>
            </div>
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <Badge variant="secondary" className="rounded-full">
          ${product.price.toFixed(2)}
        </Badge>
      </CardContent>
    </Card>
  )
}

