import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Chinandega, Nicaragua
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Tu Lo Pides, <span className="text-primary">Nosotros</span>{" "}
              <span className="text-accent">Lo Llevamos</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-xl">
              Servicio de delivery express en Chinandega. Entregamos tus productos de forma rápida y segura.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg" asChild>
                <a href="#pedidos">Hacer un Pedido</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent" asChild>
                <a href="https://wa.me/50581849385" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold">Entrega Rápida</div>
                  <div className="text-muted-foreground">30-60 min</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold">Cobertura</div>
                  <div className="text-muted-foreground">Chinandega</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold">Teléfono</div>
                  <div className="text-muted-foreground">8184-9385</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/557637290_122162848112399840_3764492361559303335_n-uEO7zw4j3C25nHrBa82z6apfI6uyFO.jpg"
                alt="Delivery Express Service"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
