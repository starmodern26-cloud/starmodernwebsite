import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/lib/services-data";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 lg:pb-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern-medical-laboratory-scientist-analyzing-samp.jpg?height=600&width=1920"
            alt="Laboratory equipment"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm md:text-base font-medium mb-4 md:mb-6">
              Our Services
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
              Comprehensive Diagnostic Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              From routine check-ups to specialized tests, we offer a complete
              range of diagnostic services with state-of-the-art equipment and
              expert professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group"
              >
                <Card className="h-full border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl">
                  {/* Service Image */}
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary flex items-center justify-center mb-2">
                        <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-base md:text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Quick test preview */}
                    <div className="space-y-2 mb-4">
                      {service.tests.slice(0, 3).map((test, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary shrink-0" />
                          <span className="text-xs md:text-sm text-muted-foreground">
                            {test.name}
                          </span>
                        </div>
                      ))}
                      {service.tests.length > 3 && (
                        <p className="text-xs md:text-sm text-primary font-medium">
                          +{service.tests.length - 3} more tests
                        </p>
                      )}
                    </div>

                    <div className="flex items-center text-primary font-medium text-xs md:text-sm group-hover:gap-2 gap-1 transition-all">
                      View Details
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Info */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl font-bold text-primary">
                  24h
                </span>
              </div>
              <h3 className="font-semibold text-base md:text-lg text-foreground mb-1 md:mb-2">
                Quick Results
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Most routine test results within 24 hours
              </p>
            </div>
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl font-bold text-primary">
                  100+
                </span>
              </div>
              <h3 className="font-semibold text-base md:text-lg text-foreground mb-1 md:mb-2">
                Tests Available
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Comprehensive coverage for all diagnostic needs
              </p>
            </div>
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-xl md:text-2xl font-bold text-primary">
                  7
                </span>
              </div>
              <h3 className="font-semibold text-base md:text-lg text-foreground mb-1 md:mb-2">
                Departments
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Specialized units for accurate diagnostics
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
