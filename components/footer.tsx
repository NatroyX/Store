"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Store</h3>
            <p className="text-sm text-muted-foreground">
              Discover the latest trends in fashion and explore our curated collection of premium products.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border bg-background px-3 py-2 text-sm"
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

