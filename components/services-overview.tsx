import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/services-data";

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block bg-primary/10 text-primary px-6 py-2.5 rounded-full text-base font-medium mb-6">
            Complete Diagnostic Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            All Laboratory Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From essential routine testing to cutting-edge molecular diagnostics
            and region-specific panels.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/60 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-7 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 flex-grow text-base leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {service.tests?.slice(0, 4).map((test, i) => (
                    <span
                      key={i}
                      className="text-xs bg-muted/70 px-3 py-1.5 rounded-full font-medium"
                    >
                      {test.name}
                    </span>
                  ))}
                  {service.tests && service.tests.length > 4 && (
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                      +{service.tests.length - 4} more
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <Button
            asChild
            size="lg"
            className="rounded-full px-12 py-7 text-lg font-medium shadow-lg"
          >
            <Link href="/contact">Book Your Test Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
