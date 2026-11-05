import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { services } from "@/data/content";
import { waLink } from "@/lib/site";

export const metadata = {
  title: "Car services",
  description: "Car wash and detailing, waxing and polishing, ceramic tints, car wraps, accessories and modifications at Viktor Autos, Ijebu Ode.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/detailing.jpg"
        imageAlt="Car being washed with a pressure jet"
        eyebrow="Beyond the sale"
        title={<>Keep your car <span className="serif-accent !text-red-300">looking sharp.</span></>}
        lede="Detailing, tints, wraps, accessories and upgrades, all under one roof, whether you bought from us or not."
      >
        <a href={waLink("Hello Viktor Autos, I'd like to book a service for my car.")} target="_blank" rel="noopener" className="btn-primary">
          <WhatsAppIcon className="size-4" /> Book a service
        </a>
      </PageHero>

      <section className="container-x py-16 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80} className="card group flex flex-col p-8 transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
              <span className="grid size-12 place-items-center bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-cream-50">
                <ServiceIcon name={s.icon} className="size-6" />
              </span>
              <h2 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h2>
              <p className="mt-2 flex-1 leading-relaxed text-ink-600">{s.text}</p>
              <a
                href={waLink(`Hello Viktor Autos, I'd like to ask about ${s.title.toLowerCase()} for my car.`)}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:gap-2.5"
              >
                Get a quote <ArrowRight className="size-4 transition-all" />
              </a>
            </Reveal>
          ))}
          <Reveal className="relative isolate flex min-h-64 flex-col justify-end overflow-hidden p-8 text-cream-50">
            <Image src="/images/driver.jpg" alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="-z-10 object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/90 to-ink-950/20" />
            <h2 className="text-xl font-semibold">Something else in mind?</h2>
            <p className="mt-1 text-cream-300">Tell us what your car needs.</p>
            <a href={waLink("Hello Viktor Autos, I need help with my car.")} target="_blank" rel="noopener" className="btn-light mt-5 self-start">Message the team</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
