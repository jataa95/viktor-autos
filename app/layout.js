import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDock from "@/components/ContactDock";
import { site } from "@/lib/site";

const sans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Brand New, Tokunbo & Clean 9ja Cars in Ijebu Ode`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Viktor Autos",
    "cars for sale Ijebu Ode",
    "Tokunbo cars",
    "Nigerian used cars",
    "car dealer Ogun State",
    "swap my car Nigeria",
    "car detailing Ijebu Ode",
    "ceramic tint",
    "car wrap",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: `${site.name} | Drive your dream car`,
    description: site.description,
    images: [{ url: "/images/hero-mercedes.jpg", width: 2200, height: 1467, alt: "Viktor Autos" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#f3efe8",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneE164,
  image: `${site.url}/images/hero-mercedes.jpg`,
  logo: `${site.url}/brand/logo-dark.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: site.address.country,
  },
  areaServed: "NG",
  sameAs: Object.values(site.socials),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NG" className={`${sans.variable} ${mono.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-ink-900 px-4 py-2 text-cream-50 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ContactDock />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
