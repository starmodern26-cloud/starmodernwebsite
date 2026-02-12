"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Dr. Okello Samuel",
    role: "General Practitioner",
    content:
      "Star Modern has been our go-to diagnostic partner for years. Their accuracy and quick turnaround time have helped us provide better care.",
    rating: 5,
    image: "/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Ms.Hellen Asiimwe",
    role: "Patient",
    content:
      "I was impressed by how professional and efficient the staff were. The results came faster than expected.",
    rating: 5,
    image: "/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Mr.David Okiror",
    role: "Healthcare Administrator",
    content:
      "The quality of service at Star Modern is exceptional. Their dedicated team ensures reliable results every time.",
    rating: 5,
    image: "/testimonial3.jpg",
  },
  {
    id: 4,
    name: "Ms.Sarah Nayebale",
    role: "Patient",
    content:
      "Very clean facility with caring staff. They explained every test procedure clearly and made me feel comfortable.",
    rating: 5,
    image: "/testimonial4.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-10 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground">
            Hear from our satisfied patients and healthcare partners.
          </p>
        </div>

        <div
          className={`relative max-w-3xl mx-auto ${
            isVisible ? "animate-scale-in animation-delay-200" : "opacity-0"
          }`}
        >
          <Quote className="absolute -top-4 left-0 w-12 h-12 text-primary/10" />

          <Card className="border-border bg-secondary/50">
            <CardContent className="p-6 md:p-8">
              <div className="text-center">
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 italic line-clamp-3">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 mb-3 overflow-hidden">
                    <Image
                      src={
                        testimonials[currentIndex].image || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-border hover:border-primary hover:bg-primary/5 bg-transparent h-9 w-9"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-5"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-border hover:border-primary hover:bg-primary/5 bg-transparent h-9 w-9"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
