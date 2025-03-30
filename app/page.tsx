import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Instructor } from "@/components/instructor"
import { PaymentMethods } from "@/components/payment-methods"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Instructor />
        <PaymentMethods />
        <ContactForm />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

