import Header from "@/components/header"
import Hero from "@/components/hero"
import WhyBrazil from "@/components/why-brazil"
import EventHighlights from "@/components/event-highlights"
import Speakers from "@/components/speakers"
import VenueMap from "@/components/venue-map"
import RegistrationForm from "@/components/registration-form"
import Partners from "@/components/partners"
import BrazilGallery from "@/components/brazil-gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyBrazil />
      <EventHighlights />
      <Speakers />
      <VenueMap />
      <RegistrationForm />
      <Partners />
      <BrazilGallery />
      <Footer />
    </main>
  )
}
