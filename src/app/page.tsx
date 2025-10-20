import BrazilGallery from "@//components/brazil-gallery"
import EventHighlights from "@//components/event-highlights"
import Footer from "@//components/footer"
import Header from "@//components/header"
import Hero from "@//components/hero"
import Partners from "@//components/partners"
import RegistrationForm from "@//components/registration-form"
import Speakers from "@//components/speakers"
import VenueMap from "@//components/venue-map"
import WhyBrazil from "@//components/why-brazil"

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
