"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

// This would typically come from a global state management solution like Redux or Zustand
const cartItems = [
  { id: 1, name: "Classic T-Shirt", price: 19.99, quantity: 2, image: "/placeholder.svg?height=70&width=70" },
  { id: 2, name: "Denim Jeans", price: 49.99, quantity: 1, image: "/placeholder.svg?height=70&width=70" },
]

export function Cart() {
  const [isOpen, setIsOpen] = useState(false)

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
            {cartItems.length}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>You have {cartItems.length} item(s) in your cart</SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={70}
                height={70}
                className="rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center">
          <p className="font-semibold">Total:</p>
          <p className="font-semibold">${total.toFixed(2)}</p>
        </div>
        <Button className="w-full mt-4" onClick={() => setIsOpen(false)}>
          Proceed to Checkout
        </Button>
      </SheetContent>
    </Sheet>
  )
}

