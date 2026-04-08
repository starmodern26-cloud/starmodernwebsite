"use client";

import Image from "next/image";

const partners = [
  { name: "partner1", logo: "/partners/partner1.png" },
  { name: "partner2", logo: "/partners/partner2.png" },
  { name: "partner3", logo: "/partners/partner3.png" },
  { name: "partner4", logo: "/partners/partner4.png" },
  { name: "partner5", logo: "/partners/partner5.png" },
  { name: "partner2", logo: "/partners/partner2.png" },
  { name: "partner3", logo: "/partners/partner3.png" },
  { name: "partner4", logo: "/partners/partner4.png" },
  { name: "partner5", logo: "/partners/partner5.png" },
];

export function PartnerCarousel() {
  return (
    <section className="py-6 bg-background border-y border-border overflow-hidden h-[150px] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-wider">
          Trusted Equipment Partners & Certifications
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll" style={{ width: "fit-content" }}>
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="bg-transparent flex-shrink-0 mx-6 px-6 py-2 flex items-center justify-center transition-all duration-500"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={40}
                className="bg-transparent object-contain h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}