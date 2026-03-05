import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Award,
  Microscope,
  HeartPulse,
  Clock,
  Shield,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to the highest standards of quality in every test we perform.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparent, ethical practices that earn the trust of our patients and partners.",
  },
  {
    icon: HeartPulse,
    title: "Compassion",
    description:
      "Patient-centered care that treats every individual with dignity and respect.",
  },
  {
    icon: Microscope,
    title: "Innovation",
    description:
      "Embracing cutting-edge technology to deliver accurate and timely results.",
  },
];

const team = [
  {
    name: "Dr. Simon B",
    role: "Chief Pathologist",
    description:
      "20+ years of experience in clinical pathology and laboratory medicine.",
    image: "/team/team3.png",
  },
  {
    name: "Dr. Mary H",
    role: "Head of Microbiology",
    description:
      "Specialist in infectious diseases and antimicrobial resistance.",
    image: "/team/team1.png",
  },
  {
    name: "Dr. Sarah B",
    role: "Clinical Biochemist",
    description: "Expert in metabolic disorders and hormonal analysis.",
    image: "/team/team2.png",
  },
  {
    name: "Dr. James O",
    role: "Hematologist",
    description: "Specialist in blood disorders and coagulation studies.",
    image: "/team/team4.png",
  },
];

const milestones = [
  {
    year: "2014",
    event: "Star Modern Diagnostic Laboratory founded",
    icon: "🏥",
  },
  { year: "2016", event: "Achieved ISO 15189 certification", icon: "🏆" },
  { year: "2018", event: "Expanded to 3 branch locations", icon: "📍" },
  {
    year: "2020",
    event: "Launched 24/7 emergency testing services",
    icon: "⏰",
  },
  { year: "2022", event: "Reached 50,000 patients milestone", icon: "👥" },
  {
    year: "2024",
    event: "Introduced advanced molecular diagnostics",
    icon: "🔬",
  },
];

const certifications = [
  "ISO 15189:2012 Accredited",
  "CAP (College of American Pathologists) Certified",
  "NABL (National Accreditation Board) Recognized",
  "WHO Standard Compliant",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Star Modern team"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Pioneering Healthcare Diagnostics Since 2014
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Star Modern Diagnostic Laboratory is committed to providing{" "}
                <strong className="text-foreground">
                  pioneering, predictive, preventive, and personalized
                  diagnostics
                </strong>
                . With state-of-the-art technology and a team of expert
                professionals, we deliver accurate results that empower better
                health decisions.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">
                    Years of Excellence
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">50K+</p>
                  <p className="text-sm text-muted-foreground">
                    Satisfied Patients
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">99.8%</p>
                  <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/reception.png"
                  alt="Our laboratory team"
                  width={600}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
              {/* Certifications badge */}
              {/* <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl shadow-lg p-4 border border-border max-w-[200px]">
                <p className="text-xs text-muted-foreground mb-2">
                  Certifications
                </p>
                <div className="flex items-center gap-2">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      ISO 15189
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Accredited Lab
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-primary/5 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, affordable, and accurate diagnostic
                  services that empower individuals and healthcare providers to
                  make informed decisions. We are dedicated to improving health
                  outcomes through early detection, precise diagnosis, and
                  continuous innovation in laboratory medicine.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-secondary hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading diagnostic laboratory in the region,
                  recognized for excellence in quality, innovation, and patient
                  care. We envision a future where advanced diagnostics are
                  accessible to all, enabling proactive healthcare and healthier
                  communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground">
              Our core values guide everything we do, from patient interactions
              to laboratory procedures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cutting-Edge Equipment */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Equipment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our State-of-the-Art Diagnostic Equipment
            </h2>
            <p className="text-lg text-muted-foreground">
              Precision instruments and modern technology that ensure accurate
              and reliable diagnostics.
            </p>
          </div>

          {/* Equipment Gallery */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Hematology Analyzer",
                description: "High-precision blood count analysis.",
                image: "/equipment/Hematology-analyzer.jpg",
              },
              {
                name: "Biochemistry Analyzer",
                description: "Rapid and accurate metabolic testing.",
                image: "/equipment/Biochemistry-analyzer.jpg",
              },
              {
                name: "PCR Machine",
                description: "Advanced molecular diagnostics.",
                image: "/equipment/pcr.jpg",
              },
              {
                name: "Microscope",
                description: "High-resolution imaging for detailed analysis.",
                image: "/equipment/microscope.png",
              },
              {
                name: "Centrifuge",
                description: "Efficient sample separation.",
                image: "/equipment/centrifuge.png",
              },
              {
                name: "Urine Analyzer",
                description: "Automated urine testing for accurate results.",
                image: "/equipment/urine-analyzer.jpg",
              },
              {
                name: "Electrolyte Analyzer",
                description: "Fast and precise electrolyte measurements.",
                image: "/equipment/Electrolyte-analyzer.jpg",
              },
            ].map((equipment, index) => (
              <Card
                key={index}
                className="text-center border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-53 rounded-3xl overflow-hidden flex items-center justify-center">
                  <Image
                    src={equipment.image}
                    alt={equipment.name}
                    fill
                    className="object-contain rounded-2xl scale-[1.15] transition-transform duration-500 group-hover:scale-[1.22]"
                  />
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    {equipment.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {equipment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Experts
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team of highly qualified professionals is dedicated to
              delivering accurate and reliable results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-65 overflow-hidden">
                  <Image
                    src={member.image || ""}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <CardContent className="p-6 -mt-8 relative">
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Quality Assurance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Commitment to Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Star Modern Diagnostic Laboratory, quality is at the heart of
                everything we do. Our laboratory is equipped with the latest
                technology and staffed by certified professionals who adhere to
                the highest standards of accuracy and precision.
              </p>

              {/* Certifications */}
              <div className="space-y-3 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Quick Turnaround
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Most results within 24-48 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Microscope className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Advanced Equipment
                    </p>
                    <p className="text-sm text-muted-foreground">
                      State-of-the-art analyzers and instruments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <p className="text-4xl font-bold text-primary mb-2">100+</p>
                <p className="text-sm text-muted-foreground">Tests Available</p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">
                  Emergency Services
                </p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <p className="text-4xl font-bold text-primary mb-2">3</p>
                <p className="text-sm text-muted-foreground">
                  Branch Locations
                </p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground">Expert Staff</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
