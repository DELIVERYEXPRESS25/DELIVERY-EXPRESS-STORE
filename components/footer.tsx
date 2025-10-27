import { Phone, MapPin, Facebook } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contacto" className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/476648611_122136490862399840_2791286509310930747_n-aphNX4EW4VStPfSnNXqZeRDT3n9qU3.jpg"
              alt="Delivery Express"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground text-pretty">
              Tu servicio de delivery confiable en Chinandega. Entregamos tus productos de forma rápida y segura.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+50581849385"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +505 8184-9385
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Chinandega, Nicaragua
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces Rápidos</h3>
            <div className="space-y-2 text-sm">
              <a href="#productos" className="block text-muted-foreground hover:text-primary transition-colors">
                Productos
              </a>
              <a href="#pedidos" className="block text-muted-foreground hover:text-primary transition-colors">
                Hacer Pedido
              </a>
              <a
                href="https://wa.me/50581849385"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@delivery.express18?lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Delivery Express. Todos los derechos reservados.</p>
          <p className="mt-2">Tu Lo Pides, Nosotros Lo Llevamos</p>
        </div>
      </div>
    </footer>
  )
}
