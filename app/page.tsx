import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { OrderForm } from "@/components/order-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid />
      <OrderForm />
      <Footer />
    </div>
  )
}
