import { Layout } from "@/components/layout"
import { ProductList } from "@/components/product-list"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function ProductsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="footwear">Footwear</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Price Range</h3>
              <div className="space-y-4">
                <Slider defaultValue={[0, 1000]} max={1000} step={1} className="w-full" />
                <div className="flex gap-4">
                  <Input type="number" placeholder="Min" className="w-20" />
                  <Input type="number" placeholder="Max" className="w-20" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Sort By</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">All Products</h1>
              <p className="text-muted-foreground">Showing 6 of 24 products</p>
            </div>
            <ProductList />
          </div>
        </div>
      </div>
    </Layout>
  )
}

