import { faqItems, services, SITE_URL, siteConfig } from "@/lib/site-data";

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "https://schema.org/Monday",
      "https://schema.org/Tuesday",
      "https://schema.org/Wednesday",
      "https://schema.org/Thursday",
      "https://schema.org/Friday",
    ],
    opens: "09:00",
    closes: "20:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "https://schema.org/Saturday",
    opens: "10:00",
    closes: "17:00",
  },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

export function getStructuredData() {
  const clinicId = `${SITE_URL}/#clinic`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
        "@id": clinicId,
        name: siteConfig.name,
        image: [`${SITE_URL}/brand-logo.svg`, "https://picsum.photos/seed/dsp-hero/1800/1200"],
        logo: `${SITE_URL}/brand-logo.svg`,
        url: SITE_URL,
        telephone: siteConfig.phoneHref.replace("tel:", ""),
        email: siteConfig.email,
        priceRange: siteConfig.priceRange,
        medicalSpecialty: "Dentistry",
        areaServed: siteConfig.city,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address,
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          postalCode: siteConfig.postalCode,
          addressCountry: siteConfig.country,
        },
        openingHoursSpecification: openingHours,
        hasMap: siteConfig.mapsUrl,
        sameAs: [
          "https://instagram.com",
          `https://wa.me/${siteConfig.whatsappNumber}`,
          "https://2gis.kz/oskemen",
        ],
        knowsLanguage: ["ru", "kk"],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      ...services.map((service) => ({
        "@type": "Service",
        "@id": `${SITE_URL}/#service-${slugify(service.title)}`,
        name: service.title,
        description: service.description,
        areaServed: siteConfig.city,
        provider: {
          "@id": clinicId,
        },
        serviceType: "Стоматологическая услуга",
      })),
    ],
  };
}

