"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MapPin, User, MessageSquare, ShoppingBag, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function OrderForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    producto: "",
    cantidad: "",
    notas: "",
  })
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [loadingLocation, setLoadingLocation] = useState(false)

  const getLocation = () => {
    setLoadingLocation(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          setLoadingLocation(false)
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("No se pudo obtener tu ubicación. Por favor, verifica los permisos de ubicación.")
          setLoadingLocation(false)
        },
      )
    } else {
      alert("Tu navegador no soporta geolocalización")
      setLoadingLocation(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const locationText = location
      ? `📍 *Ubicación en tiempo real:* https://www.google.com/maps?q=${location.lat},${location.lng}`
      : ""

    const mensaje = `
*NUEVO PEDIDO - DELIVERY EXPRESS*

👤 *Nombre:* ${formData.nombre}
📱 *Teléfono:* ${formData.telefono}
📍 *Dirección:* ${formData.direccion}
${locationText}
🛍️ *Producto:* ${formData.producto}
🔢 *Cantidad:* ${formData.cantidad}
📝 *Notas:* ${formData.notas || "Ninguna"}
    `.trim()

    const whatsappUrl = `https://wa.me/50581849385?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="pedidos" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Hacer un Pedido</h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Completa el formulario y te contactaremos por WhatsApp para confirmar tu pedido
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Información del Pedido</CardTitle>
              <CardDescription>Todos los campos son obligatorios para procesar tu pedido</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Nombre Completo
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Ej: Juan Pérez"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="Ej: 8184-9385"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="direccion" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Dirección de Entrega
                  </Label>
                  <Input
                    id="direccion"
                    name="direccion"
                    placeholder="Ej: Barrio Central, de la iglesia 2c al norte"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={getLocation}
                    disabled={loadingLocation}
                    className="w-full mt-2 bg-transparent"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    {loadingLocation
                      ? "Obteniendo ubicación..."
                      : location
                        ? "✓ Ubicación compartida"
                        : "Compartir mi ubicación en tiempo real"}
                  </Button>
                  {location && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Tu ubicación GPS será enviada con el pedido para una entrega más precisa
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="producto" className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Producto(s)
                  </Label>
                  <Input
                    id="producto"
                    name="producto"
                    placeholder="Ej: Pizza Grande, Combo Familiar"
                    value={formData.producto}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cantidad">Cantidad</Label>
                  <Input
                    id="cantidad"
                    name="cantidad"
                    type="number"
                    min="1"
                    placeholder="Ej: 2"
                    value={formData.cantidad}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notas" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Notas Adicionales (Opcional)
                  </Label>
                  <Textarea
                    id="notas"
                    name="notas"
                    placeholder="Ej: Sin cebolla, extra queso, etc."
                    value={formData.notas}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Enviar Pedido por WhatsApp
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Al enviar, serás redirigido a WhatsApp para confirmar tu pedido
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
