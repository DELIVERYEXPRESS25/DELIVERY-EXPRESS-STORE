import { ProductCard } from "@/components/product-card"

// Productos de ejemplo - En producción, estos vendrían de Facebook API o base de datos
const products = [
  {
    id: 1,
    name: "Combo Familiar",
    description: "Delicioso combo para toda la familia",
    price: 450,
    image: "/family-meal-combo.png",
    category: "Comida",
  },
  {
    id: 2,
    name: "Pizza Grande",
    description: "Pizza de 16 pulgadas con ingredientes frescos",
    price: 380,
    image: "/large-pizza.jpg",
    category: "Comida",
  },
  {
    id: 3,
    name: "Hamburguesa Premium",
    description: "Hamburguesa con carne de res, queso y vegetales",
    price: 180,
    image: "/premium-burger.png",
    category: "Comida",
  },
  {
    id: 4,
    name: "Bebidas Variadas",
    description: "Refrescos, jugos y bebidas energéticas",
    price: 35,
    image: "/assorted-drinks.jpg",
    category: "Bebidas",
  },
  {
    id: 5,
    name: "Postres Especiales",
    description: "Variedad de postres y dulces",
    price: 85,
    image: "/assorted-desserts.png",
    category: "Postres",
  },
  {
    id: 6,
    name: "Snacks y Frituras",
    description: "Papas, nachos y más",
    price: 45,
    image: "/snacks-chips.jpg",
    category: "Snacks",
  },
  {
    id: 7,
    name: "Alitas de Pollo",
    description: "12 alitas con salsa BBQ o picante",
    price: 220,
    image: "/crispy-chicken-wings.png",
    category: "Comida",
  },
  {
    id: 8,
    name: "Ensalada Fresca",
    description: "Ensalada con vegetales frescos y aderezo",
    price: 120,
    image: "/fresh-salad.png",
    category: "Comida",
  },
]

export function ProductGrid() {
  return (
    <section id="productos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Nuestros Productos</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Explora nuestra selección de productos disponibles para entrega inmediata
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * Los productos mostrados son ejemplos. Para ver todos nuestros productos disponibles,{" "}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              visita nuestra página de Facebook
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
