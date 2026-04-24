import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Phone,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { servicesData } from "@/lib/services-data";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService =
    currentIndex < servicesData.length - 1
      ? servicesData[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            loading="eager"
            priority
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm md:text-base font-medium mb-4 md:mb-6">
                <service.icon className="w-4 h-4 md:w-5 md:h-5" />
                {service.title}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
                {service.fullTitle}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 md:px-8 text-sm md:text-base"
                >
                  <Link href="/contact">
                    <Calendar className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                    Book This Test
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6 md:px-8 text-sm md:text-base bg-transparent"
                >
                  <a href="tel:+256770570107">
                    <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                    Call for Info
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-green-600">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  loading="eager"
                  priority
                  className="object-cover w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-background rounded-2xl shadow-lg p-3 md:p-4 border border-border">
                <p className="text-xs md:text-sm text-muted-foreground">
                  Tests in this category
                </p>
                <p className="text-xl md:text-2xl font-bold text-primary">
                  {service.tests.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                  About This Service
                </h2>
                <div className="prose prose-sm md:prose-base prose-gray max-w-none">
                  {service.detailedDescription
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-muted-foreground leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                  Key Benefits
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-secondary rounded-xl p-4 md:p-6 border border-border"
                    >
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparation */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-semibold text-foreground mb-2">
                        Test Preparation
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {service.preparation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Quick Book */}
            <div className="space-y-6">
              <Card className="border-border sticky top-24">
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-base md:text-lg">
                    Quick Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <div>
                      <p className="text-sm md:text-base font-medium text-foreground">
                        {service.tests.length} Tests
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Available in this category
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <div>
                      <p className="text-sm md:text-base font-medium text-foreground">
                        Same Day - 5 Days
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Typical turnaround time
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm md:text-base"
                    >
                      <Link href="/contact">Book Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full bg-transparent mt-3 text-sm md:text-base"
                    >
                      <a href="tel:+256770570107">Call: +256 770 570 107</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tests List */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Available Tests
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Complete list of tests offered under {service.title}
            </p>
          </div>

          <div className="overflow-x-auto border border-border rounded-2xl bg-background">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-secondary/50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs md:text-sm font-medium text-foreground uppercase tracking-wider"
                  >
                    Test Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-center text-xs md:text-sm font-medium text-foreground uppercase tracking-wider hidden sm:table-cell"
                  >
                    Code
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-right text-xs md:text-sm font-medium text-foreground uppercase tracking-wider"
                  >
                    Turnaround
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {service.tests.map((test, index) => (
                  <tr
                    key={index}
                    className="hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-4 py-3 md:py-4 text-left text-xs md:text-sm text-foreground whitespace-nowrap">
                      {test.name}
                    </td>
                    <td className="px-4 py-3 md:py-4 text-center hidden sm:table-cell">
                      <Badge variant="secondary" className="text-xs">
                        {test.code}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 md:py-4 text-right text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                      {test.turnaround}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs md:text-sm text-muted-foreground mt-6">
            Contact us for current pricing and package deals tailored to your needs.
          </p>
        </div>
      </section>

      {/* Navigation to other services */}
      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
            {prevService ? (
              <Link
                href={`/services/${prevService.slug}`}
                className="group flex items-center gap-3 md:gap-4 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Previous Service
                  </p>
                  <p className="font-medium text-base md:text-lg">
                    {prevService.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextService ? (
              <Link
                href={`/services/${nextService.slug}`}
                className="group flex items-center gap-3 md:gap-4 hover:text-primary transition-colors md:flex-row-reverse text-right md:text-left"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Next Service
                  </p>
                  <p className="font-medium text-base md:text-lg">
                    {nextService.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
