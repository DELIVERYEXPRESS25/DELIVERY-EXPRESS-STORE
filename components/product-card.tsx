"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(0)

  const handleAddToCart = () => {
    setQuantity(quantity + 1)
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-background/90 text-foreground">{product.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-balance">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground text-pretty line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">C${product.price}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {quantity === 0 ? (
          <Button onClick={handleAddToCart} className="w-full" size="lg">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Agregar
          </Button>
        ) : (
          <div className="flex w-full items-center justify-between gap-2">
            <Button onClick={handleDecrement} variant="outline" size="icon" className="h-10 w-10 bg-transparent">
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-lg font-semibold">{quantity}</span>
            <Button onClick={handleIncrement} variant="outline" size="icon" className="h-10 w-10 bg-transparent">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
