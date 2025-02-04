import { ProductCard } from "./product-card"

const products = [
  { id: 1, name: "Premium Cotton T-Shirt", price: 29.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 2, name: "Designer Denim Jeans", price: 89.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 3, name: "Limited Edition Sneakers", price: 129.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 4, name: "Leather Backpack", price: 79.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 5, name: "Cashmere Sweater", price: 149.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 6, name: "Designer Sunglasses", price: 199.99, image: "/placeholder.svg?height=400&width=400" },
]

export function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

