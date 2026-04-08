"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      src: "/african-female-doctor-professional-headshot.jpg",
      alt: "Professional female doctor in laboratory",
    },
    // {
    //   src: "/reception.png",
    //   alt: "",
    // },
    // {
    //   src: "/",
    //   alt: "Modern diagnostic laboratory with microscope and equipment",
    // },
    // {
    //   src: "/",
    //   alt: "Scientist performing advanced diagnostic analysis",
    // },
    // {
    //   src: "/",
    //   alt: "Confident laboratory professional reviewing medical results",
    // },
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 60000); // 60 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] bg-secondary pt-20 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-medical-laboratory-interior-with-blue-green.jpg"
          alt="Modern diagnostic laboratory"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/60" />
      </div>

      {/* Floating decorative icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-[20%] right-[10%] opacity-20">
          <Image
            src="/dna-helix-icon-green-transparent-background.jpg"
            alt=""
            width={120}
            height={120}
            className="animate-float"
          />
        </div>
        <div className="absolute bottom-[30%] right-[25%] opacity-15 animation-delay-300">
          <Image
            src="/microscope-icon-green-transparent-background.jpg"
            alt=""
            width={80}
            height={80}
            className="animate-float"
          />
        </div>
        <div className="absolute top-[40%] right-[5%] opacity-15 animation-delay-500">
          <Image
            src="/medical-cross-icon-green-transparent-background.jpg"
            alt=""
            width={60}
            height={60}
            className="animate-float"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text Content */}
          <div
            className={`max-w-xl ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Trusted by 10,000+ patients
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              Advanced Diagnostic{" "}
              <span className="text-primary">Excellence</span>
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">
              We provide comprehensive diagnostic services with cutting-edge
              technology. Our mission is to deliver{" "}
              <strong className="text-foreground">
                pioneering, predictive, preventive, and personalized
              </strong>{" "}
              diagnostics for better health outcomes.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/services">
                Discover Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            {/* Quick Features */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Quick Results
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Same day delivery
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    99.8% Accuracy
                  </p>
                  {/* <p className="text-xs text-muted-foreground">
                    ISO certified lab
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image Carousel (desktop only) */}
          <div
            className={`relative hidden lg:block ${
              isVisible
                ? "animate-slide-in-right animation-delay-300"
                : "opacity-0"
            }`}
          >
            <div className="relative w-full max-w-[470px] h-[430px] mx-auto">
              {carouselImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={470}
                    height={430}
                    className="object-contain drop-shadow-2xl rounded-sm border-2 border-green-600"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Floating badges */}
            <div className="absolute top-0 right-0 bg-background rounded-2xl shadow-lg p-4 border border-border animate-float">
              <p className="text-xs text-muted-foreground">Accuracy Rate</p>
              <p className="text-2xl font-bold text-primary">99.8%</p>
            </div>

            <div className="absolute bottom-20 -left-4 bg-background rounded-2xl shadow-lg p-4 border border-border animate-float animation-delay-500">
              <p className="text-xs text-muted-foreground">Tests Completed</p>
              <p className="text-2xl font-bold text-primary">50K+</p>
            </div>

            <div className="absolute bottom-0 right-10 bg-primary rounded-2xl p-3 text-primary-foreground animate-float animation-delay-300">
              <div className="flex items-center gap-2">
                <Image
                  src="/testtube.png"
                  alt=""
                  width={44}
                  height={44}
                />
                <span className="text-sm font-medium">100+ Tests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
