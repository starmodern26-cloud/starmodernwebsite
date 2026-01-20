import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PartnerCarousel } from "@/components/partner-carousel"
import { ServicesBanner } from "@/components/services-banner"
import { StatsSection } from "@/components/stats-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnerCarousel />
      <ServicesBanner />
      <StatsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
