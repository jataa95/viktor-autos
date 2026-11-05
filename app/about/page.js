import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, HeartHandshake, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata = {
  title: "About us",
  description: "Viktor Autos is a registered car dealer in Ijebu Ode, Ogun State, making it simple to buy, sell and swap clean cars with honest pricing.",
};

const values = [
  { Icon: ShieldCheck, t: "Integrity", d: "Every car is inspected and described honestly. What you see is what you get." },
  { Icon: Eye, t: "Transparency", d: "Clear, upfront prices with no hidden fees and no pressure." },
  { Icon: HeartHandshake, t: "Relationships", d: "Most of our customers come back, and send their friends and family too." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/open-road.jpg"
        imageAlt="Sports car on an open road at sunset"
        eyebrow="About Viktor Autos"
        title={<>Your dream ride, <span className="serif-accent !text-red-300">our priority.</span></>}
        lede="Buying or selling a car should be simple, transparent and stress-free. That's the whole idea."
      />

      <section className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative aspect-[4/5] overflow-hidden">
          <Image src="/cars/toyota-camry.jpg" alt="Grey Toyota Camry" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute right-5 bottom-5 left-5 bg-cream-50/95 p-5 backdrop-blur">
            <p className="text-sm text-ink-600">Registered business</p>
            <p className="text-xl font-semibold tracking-tight">RC {site.rc}</p>
          </div>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Our story</p>
          <h2 className="h-section mt-4">Built on trust, <span className="serif-accent">one car at a time.</span></h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-600">
            <p>
              At Viktor Autos, we believe buying or selling a car should be simple, transparent and stress-free. We started
              with a passion for quality and customer satisfaction, and a commitment to connecting drivers with reliable,
              well-inspected vehicles at the best possible value.
            </p>
            <p>
              From our lot beside Ijari Central Mosque in Ijebu Ode, we sell brand new, Tokunbo and clean Nigerian-used cars,
              buy and swap cars, and keep them looking their best with detailing, tints, wraps and accessories. And we deliver
              anywhere in Nigeria.
            </p>
            <p>Whether you&apos;re upgrading, selling or finding your next ride, we&apos;re here to guide you every step of the way.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/cars" className="btn-primary">Browse cars <ArrowRight className="size-4" /></Link>
            <Link href="/contact" className="btn-outline">Visit the lot</Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-cream-200/60 py-16 sm:py-24">
        <div className="container-x">
          <p className="eyebrow">What we stand for</p>
          <h2 className="h-section mt-4 max-w-2xl">Reliable cars. <span className="serif-accent">Honest deals.</span> Every time.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 100} className="card p-8">
                <Icon className="size-7 text-red-600" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{t}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
