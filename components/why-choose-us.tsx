"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckCircle2, Clock, Award, Users, Microscope, HeartPulse } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Accredited Laboratory",
    description: "ISO 15189 certified with internationally recognized standards.",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description: "State-of-the-art equipment for accurate results.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast results delivery without compromising accuracy.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly qualified pathologists and technicians.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centric Care",
    description: "Comfortable sample collection with personalized attention.",
  },
  {
    icon: CheckCircle2,
    title: "Affordable Pricing",
    description: "Quality diagnostics at competitive pricing.",
  },
]

export function WhyChooseUs() {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={isVisible ? "animate-slide-in-left" : "opacity-0"}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Your Health Deserves the Best Diagnostic Care
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Star Modern Diagnostic Laboratory, we combine cutting-edge technology with compassionate care to
              deliver accurate and timely diagnostic results.
            </p>

            <div className="relative rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary/5 to-primary/10 p-8">
              <Image
                src="/logo2.jpg"
                alt="Our modern laboratory"
                width={400}
                height={280}
                className="object-contain w-full"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-background rounded-xl">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-xs text-muted-foreground">Years</p>
              </div>
              <div className="text-center p-3 bg-background rounded-xl">
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-xs text-muted-foreground">Patients</p>
              </div>
              <div className="text-center p-3 bg-background rounded-xl">
                <p className="text-2xl font-bold text-primary">100+</p>
                <p className="text-xs text-muted-foreground">Tests</p>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div
            className={`grid sm:grid-cols-2 gap-3 ${isVisible ? "animate-slide-in-right animation-delay-200" : "opacity-0"}`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-4 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                style={{ animationDelay: `${index * 80 + 200}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
