import { Layout } from "@/components/layout"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Package, Truck } from "lucide-react"

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Our Store</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're passionate about bringing you the finest selection of products while providing an exceptional shopping
            experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Products</h3>
              <p className="text-sm text-muted-foreground">
                We carefully curate our collection to ensure the highest quality products.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fast Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Quick and reliable shipping to get your products to you as soon as possible.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Secure Packaging</h3>
              <p className="text-sm text-muted-foreground">
                Your items are carefully packaged to ensure they arrive in perfect condition.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge className="mb-4">Our Story</Badge>
            <h2 className="text-3xl font-bold mb-4">A Passion for Excellence</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2024, our store has grown from a small local boutique to a trusted online destination for
              fashion enthusiasts. We believe in providing not just products, but experiences that delight our
              customers.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team of experts works tirelessly to source the finest products from around the world, ensuring that
              each item in our collection meets our high standards of quality and style.
            </p>
            <Button size="lg">Learn More</Button>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="About our store"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold mb-2">5K+</h3>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">1K+</h3>
            <p className="text-muted-foreground">Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-muted-foreground">Brands</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">24/7</h3>
            <p className="text-muted-foreground">Support</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

