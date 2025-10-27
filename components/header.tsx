import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/476648611_122136490862399840_2791286509310930747_n-aphNX4EW4VStPfSnNXqZeRDT3n9qU3.jpg"
            alt="Delivery Express"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#productos" className="text-sm font-medium hover:text-primary transition-colors">
            Productos
          </a>
          <a href="#pedidos" className="text-sm font-medium hover:text-primary transition-colors">
            Hacer Pedido
          </a>
          <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              0
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
