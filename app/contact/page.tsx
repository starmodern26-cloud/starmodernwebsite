"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { servicesData } from "@/lib/services-data";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "P.O.Box 489 | Upper Mulago Hill Road",
      "New Mulago Main Gate Next to First Pharmacy",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+256 785 073 852", "+256 703 652 214"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@starmodern.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sun: 8:00 AM - 10:00 PM"],
  },
];

const branches = [
  {
    name: "Main Laboratory",
    address:
      "P.O.Box 489 | Upper Mulago Hill Road | New Mulago Main Gate Next to First Pharmacy",
    phone: "+256 785 073 852",
    hours: "Mon-Sun: 8AM-10PM",
  },
  // {
  //   name: "Downtown Branch",
  //   address: "456 Central Avenue, Health City, HC 12346",
  //   phone: "+1 (234) 567-8902",
  //   hours: "Mon-Sat: 8AM-8PM",
  // },
  // {
  //   name: "Westside Collection Center",
  //   address: "789 West Boulevard, Health City, HC 12347",
  //   phone: "+1 (234) 567-8903",
  //   hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-2PM",
  // },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/reception.png"
            alt="Contact us"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Get in Touch With Us
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Have questions about our services or want to book a test? We are
              here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <CardContent className="p-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-card-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 lg:py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Send Us a Message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill out the form and we will get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center animate-scale-in">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Thank you for contacting us.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Simon Okello"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="simon@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+(256) 754-867-980"
                          value={formState.phone}
                          onChange={handleChange}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-sm">
                          Interested Service
                        </Label>
                        <Select
                          value={formState.service}
                          onValueChange={(value) =>
                            setFormState((prev) => ({
                              ...prev,
                              service: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">
                              General Inquiry
                            </SelectItem>
                            {servicesData.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300 hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map & Quick Contact */}
            <div className="space-y-4">
              <Card className="border-border overflow-hidden">
                <div className="aspect-[16/10] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.74996448979!2d32.5743260737194!3d0.3353895639991775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0026d0c99d%3A0xedc9b5619a74dd74!2sStar%20Modern%20Diagnostics!5e0!3m2!1sen!2sug!4v1770384963328!5m2!1sen!2sug"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Star Modern Diagnostic Laboratory Location"
                  />
                </div>
              </Card>

              {/* Quick Contact Options */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-5">
                  <h3 className="text-base font-semibold text-card-foreground mb-3">
                    Need Urgent Assistance?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For emergency testing or urgent inquiries, call our 24/7
                    helpline.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex-1 text-sm"
                    >
                      <a href="tel:+256785073852">
                        <Phone className="mr-2 w-4 h-4" />
                        Call 24/7 Helpline
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full flex-1 bg-transparent text-sm"
                    >
                      <a href="mailto:emergency@starmodern.com">
                        <Mail className="mr-2 w-4 h-4" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations – centered when fewer cards */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Locations
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Visit Our Branches
            </h2>
            <p className="text-muted-foreground">
              We have multiple locations for your convenience.
            </p>
          </div>

          {/* Centered branches with flex + justify-center */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {branches.map((branch, index) => (
              <Card
                key={index}
                className="w-full max-w-sm border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group overflow-hidden"
              >
                <div className="h-28 relative bg-secondary">
                  <Image
                    src={`/interior.png`}
                    alt={`${branch.name} location`}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-base font-semibold text-card-foreground mb-2">
                    {branch.name}
                  </h3>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {branch.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <a
                        href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                        className="hover:text-primary transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      {branch.hours}
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full mt-3 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-sm"
                  >
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(branch.address)}&travelmode=driving`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
