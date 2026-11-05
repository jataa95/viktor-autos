import Image from "next/image";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { site, telLink, waLink } from "@/lib/site";

export const metadata = {
  title: "Contact & directions",
  description: `Visit Viktor Autos beside Ijari Central Mosque, Ijebu Ode, or call ${site.phoneDisplay}. Chat with us on WhatsApp.`,
};

export default function ContactPage() {
  const cards = [
    { Icon: WhatsAppIcon, t: "WhatsApp", d: "The fastest way to reach us", href: waLink(), cta: "Start chat", ext: true },
    { Icon: Phone, t: site.phoneDisplay, d: "Call or text", href: telLink, cta: "Call now" },
    { Icon: MapPin, t: site.address.line1, d: `${site.address.line2}, ${site.address.city}, ${site.address.state}`, href: site.mapsUrl, cta: "Get directions", ext: true },
  ];
  return (
    <>
      <section className="container-x pt-32 pb-10 sm:pt-40">
        <p className="eyebrow">Contact</p>
        <h1 className="h-display mt-4 max-w-3xl">Let&apos;s find your <span className="serif-accent">next car.</span></h1>
        <p className="lede mt-5 max-w-xl">Visit the lot, call us, or send a message. {site.hours}</p>
      </section>

      <section className="container-x grid gap-5 md:grid-cols-3">
        {cards.map(({ Icon, t, d, href, cta, ext }) => (
          <a key={cta} href={href} {...(ext ? { target: "_blank", rel: "noopener" } : {})} className="card group flex flex-col p-7 transition hover:-translate-y-1 hover:border-red-200">
            <span className="grid size-12 place-items-center bg-red-50 text-red-600"><Icon className="size-5" /></span>
            <p className="mt-6 text-lg font-semibold tracking-tight">{t}</p>
            <p className="mt-1 flex-1 text-sm text-ink-600">{d}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-red-600">{cta} <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
          </a>
        ))}
      </section>

      <section className="container-x grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <div className="card p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Send us a message</h2>
          <p className="mt-1 text-ink-600">It opens WhatsApp with your message ready to send.</p>
          <div className="mt-8"><LeadForm /></div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative aspect-[9/2] overflow-hidden">
            <Image src="/images/lot-banner.jpg" alt="Cars lined up at the Viktor Autos lot" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
          <div className="relative min-h-80 flex-1 overflow-hidden border border-line bg-cream-200">
            <iframe
              title="Map to Viktor Autos, Ijebu Ode"
              src="https://www.google.com/maps?q=Ijari+Central+Mosque+Ijebu+Ode&output=embed"
              className="absolute inset-0 size-full grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="flex items-center gap-2 text-sm text-ink-600"><Clock className="size-4 text-red-600" /> {site.hours}</p>
        </div>
      </section>
    </>
  );
}
