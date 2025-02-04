import type React from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { Cart } from "./cart"
import { ThemeToggle } from "./theme-toggle"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <div className="fixed bottom-4 right-4 space-y-4">
        <Cart />
        <ThemeToggle />
      </div>
    </div>
  )
}

