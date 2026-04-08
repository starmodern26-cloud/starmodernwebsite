"use client";

import Image from "next/image";
import partner1 from "../public/partners/Partner1.png"
import partner2 from "../public/partners/Partner2.png";
import partner3 from "../public/partners/Partner3.png";
import partner4 from "../public/partners/Partner4.png";
import partner5 from "../public/partners/Partner5.png";

const partners = [
  { name: "partner1", logo: partner1 },
  { name: "partner2", logo: partner2 },
  { name: "partner3", logo: partner3 },
  { name: "partner4", logo: partner4 },
  { name: "partner5", logo: partner5 },
  // { name: "partner1", logo: partner1 },
  { name: "partner2", logo: partner2 },
  { name: "partner3", logo: partner3 },
  { name: "partner4", logo: partner4 },
  { name: "partner5", logo: partner5 },
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
                alt={""}
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
