"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { servicesData } from "@/lib/services-data"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/logo1.jpg"
                alt="Star Modern Diagnostic Laboratory"
                width={150}
                height={150}
                className="object-contain rounded-sm"
              />
              {/* <div>
                <p className="text-base font-bold text-background leading-tight">Star Modern</p>
                <p className="text-xs text-background/60">Diagnostic Laboratory</p>
              </div> */}
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Pioneering, Predictive, Preventive and Personalized diagnostics for a healthier tomorrow.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact", "Book a Test"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : item === "Book a Test"
                          ? "/contact"
                          : `/${item.toLowerCase().replace(" ", "-").replace("about-us", "about")}`
                    }
                    className="text-sm text-background/70 hover:text-background transition-all inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-background">Our Services</h4>
            <ul className="space-y-2">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-background/70 hover:text-background transition-all inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary hover:text-primary/80 transition-colors inline-block"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-background">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-background/70">P.O.Box 489 | Upper Mulago Hill Road | New Mulago Main Gate Next to First Pharmacy</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+256785073852"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                (+256) 785-073-852
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@starmodern.com"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  info@starmodern.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-background/70">Mon - Sun: 8AM - 10PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-background/50 text-center md:text-left">
              © {new Date().getFullYear()} Star Modern Diagnostic Laboratory. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-xs text-background/50 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-background/50 hover:text-background transition-colors">
                Terms of Service
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full bg-background/10 hover:bg-primary text-background hover:text-primary-foreground h-8 w-8"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
