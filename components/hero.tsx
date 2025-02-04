"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          Discover Your{" "}
          <span className="text-primary relative">
            Style
            <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-red-500/20 blur-lg -z-10"></span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Explore our curated collection of trendy and high-quality products. From classic essentials to the latest
          fashion.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="rounded-full">
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="rounded-full">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

