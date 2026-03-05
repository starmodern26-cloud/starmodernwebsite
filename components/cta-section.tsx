"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, MapPin, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import OurModernLaboratoryImg from "../public/Logo22.png";

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <Image
          src={OurModernLaboratoryImg}
          alt=""
          width={300}
          height={300}
          className="absolute rounded-2xl -left-20 top-1/2 -translate-y-1/2"
        />
        <Image
          src={OurModernLaboratoryImg}
          alt=""
          width={300}
          height={300}
          className="absolute rounded-2xl -right-16 top-1/2 -translate-y-1/2"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Ready to Take Control of Your Health?</h2>
          <p className="text-primary-foreground/80 mb-6">
            Book your diagnostic test today and experience the Star Modern difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 rounded-full px-6 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                Book an Appointment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transition-all duration-300"
            >
              <a href="tel:+256770570107">
                <Phone className="mr-2 w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>1 Location</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Open 7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>24/7 Helpline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
