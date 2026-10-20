import React from "react";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://renovasirumahbangunan.com").replace(
  /\/$/,
  ""
);

const JsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "CV Trisukses Bangun Karya",
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logo.png`,
        description:
          "Kontraktor jasa bangun dan renovasi rumah di Sidoarjo & Pasuruan - gratis survey, desain & RAB, garansi pengerjaan.",
        sameAs: [
          "https://www.tiktok.com/@trisbangunkarya",
          "https://www.instagram.com/jasabangunrenovasisidoarjo",
          "https://www.instagram.com/jasabangunrenovasipasuruan",
          "https://www.facebook.com/profile.php?id=100095340162994",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-822-5746-0176",
          contactType: "customer service",
          areaServed: "ID",
          availableLanguage: ["id", "en"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "CV Trisukses Bangun Karya",
        image: `${SITE_URL}/assets/service_building.jpg`,
        url: SITE_URL,
        telephone: "+62-822-5746-0176",
        email: "tris.bangunkarya@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl Teluk Bayur RT02 RW01, Kelurahan Gebang",
          addressLocality: "Sidoarjo",
          addressRegion: "Jawa Timur",
          postalCode: "61211",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -7.4478,
          longitude: 112.7183,
        },
        areaServed: [
          { "@type": "City", name: "Sidoarjo" },
          { "@type": "City", name: "Pasuruan" },
          { "@type": "AdministrativeArea", name: "Jawa Timur" },
        ],
        priceRange: "Rp",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "17:00",
        },
        sameAs: [
          "https://www.tiktok.com/@trisbangunkarya",
          "https://www.instagram.com/jasabangunrenovasisidoarjo",
          "https://www.instagram.com/jasabangunrenovasipasuruan",
          "https://www.facebook.com/profile.php?id=100095340162994",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "CV Trisukses Bangun Karya - Jasa Bangun & Renovasi Rumah Sidoarjo Pasuruan",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "id-ID",
      },
      {
        "@type": "Service",
        serviceType: "Jasa Bangun & Renovasi Rumah",
        provider: { "@id": `${SITE_URL}/#localbusiness` },
        areaServed: { "@type": "AdministrativeArea", name: "Jawa Timur" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Konstruksi",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Jasa Bangun Rumah - rumah tinggal, ruko, kos, toko" },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Renovasi Rumah - tambah ruangan, atap baja ringan, plafon, pagar, dak, kolam",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Building Maintenance - service AC, CCTV, kitchen set",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Interior - rumah, kantor, kafe, ruang usaha",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;
