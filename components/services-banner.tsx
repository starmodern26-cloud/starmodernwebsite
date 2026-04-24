/* The above TypeScript code defines an array named `servicesData` which contains objects representing
different types of medical services offered by a diagnostic laboratory. Each object in the array
represents a specific service and includes details such as the service title, description, tests
offered, benefits, preparation instructions, and an icon associated with the service. */
"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight } from "lucide-react"
import { servicesData } from "@/lib/services-data"
import { useEffect, useRef, useState } from "react"

export function ServicesBanner() {
  const [isVisible, setIsVisible] = useState(true)
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

  // Only show the first 6 services
  const featuredServices = servicesData.slice(0, 6)

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
            Comprehensive Diagnostic Services
          </h2>
          <p className="text-muted-foreground">
            From routine check-ups to specialized tests, we offer complete diagnostic coverage.
          </p>
        </div>

        <div className="bg-secondary rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0 lg:gap-6 xl:gap-8">
            {/* Services Cards - only 6 cards */}
            <div className="lg:col-span-3 p-5 lg:p-8">
              <div className="grid sm:grid-cols-2 gap-3">
                {featuredServices.map((service, index) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className={`group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <Card className="h-full border-border bg-background/80 backdrop-blur-sm hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                            <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-1">{service.shortDescription}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6 border-foreground/20 hover:border-primary transition-colors bg-transparent"
                >
                  <Link href="/contact">Book a Test</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 relative min-h-[250px] lg:min-h-full">
              <Image
                src="/modern-medical-laboratory-scientist-analyzing-samp.jpg?height=500&width=400"
                alt="Laboratory professional"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-secondary/60 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6">
                <div className="bg-background/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-lg font-bold text-primary-foreground">7</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Specialized Departments</p>
                      <p className="text-xs text-muted-foreground">Over 100+ diagnostic tests</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}