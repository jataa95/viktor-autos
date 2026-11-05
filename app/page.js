import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Gift, MapPin, Phone, Quote } from "lucide-react";
import CarCard from "@/components/CarCard";
import HeroSearch from "@/components/HeroSearch";
import Reveal from "@/components/Reveal";
import Stars from "@/components/Stars";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import ServicesList from "@/components/ServicesList";
import CountUp from "@/components/CountUp";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { cars, featuredCars } from "@/data/cars";
import { faqs, ownership, services, steps, testimonials } from "@/data/content";
import { site, telLink, waLink } from "@/lib/site";

const makesWeSell = ["Toyota", "Lexus", "Mercedes-Benz", "BMW", "Land Rover", "Honda", "Ford", "Hyundai", "Volvo", "Kia", "Nissan", "Audi"];

// Staggered "curated" layout from the reference: two offset columns with varied sizes.
const staggerCols = [
  [
    { box: "w-full", aspect: "aspect-[4/5]" },
    { box: "w-[82%] ml-auto", aspect: "aspect-[5/4]" },
    { box: "w-[92%]", aspect: "aspect-[16/11]" },
  ],
  [
    { box: "w-full", aspect: "aspect-[16/11]" },
    { box: "w-[80%]", aspect: "aspect-[4/5]" },
    { box: "w-[90%] ml-auto", aspect: "aspect-[5/4]" },
  ],
];

const n2 = (i) => String(i + 1).padStart(2, "0");

export default function Home() {
  const featured = featuredCars().slice(0, 6);
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-cream-100 pt-24">
        <div className="grid-lines -z-10 text-ink-950/[0.07]" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-cream-200 to-transparent" />

        {/* Giant wordmark behind the car */}
        <p
          aria-hidden="true"
          className="pointer-events-none mt-[2vh] text-center text-[25vw] leading-[0.78] font-semibold tracking-[-0.065em] text-ink-950 select-none sm:mt-[4vh] lg:text-[22vw]"
        >
          VIKTOR
        </p>

        {/* Car, in front of the wordmark */}
        <div className="relative mx-auto -mt-[11vw] w-[94vw] max-w-[1180px] lg:-mt-[10vw] lg:w-[72vw]">
          <div aria-hidden="true" className="absolute inset-x-[8%] bottom-[2%] h-[12%] rounded-[50%] bg-ink-950/45 blur-2xl" />
          <Image
            src="/images/hero-car.webp"
            alt="Grey BMW 7 Series"
            width={1879}
            height={1049}
            preload
            sizes="(min-width: 1024px) 72vw, 94vw"
            className="relative h-auto w-full drop-shadow-[0_30px_30px_rgb(13_11_10/0.25)]"
          />
        </div>

        <div className="container-x mt-auto grid gap-8 pt-8 pb-10 sm:pb-14 lg:grid-cols-3 lg:items-end">
          <div className="lg:col-span-2">
            <p className="eyebrow">Viktor Autos Dealer · Ijebu Ode</p>
            <h1 className="mt-4 text-[2.6rem] leading-[0.95] font-medium tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Find your perfect car
              <br className="hidden sm:block" /> <span className="text-red-600">today.</span>
            </h1>
            <p className="mt-5 max-w-lg text-ink-600">
              Brand new, Tokunbo and clean 9ja cars, inspected before they reach the lot. We sell, buy and swap, and we
              deliver anywhere in Nigeria.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/cars" className="btn-dark">
                Explore {cars.length} cars <ArrowRight className="size-3.5" />
              </Link>
              <Link href="/sell" className="btn-outline">Sell or swap my car</Link>
            </div>
          </div>

          {/* "Let's talk" card, like the reference */}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="group hidden w-full max-w-xs justify-self-end border border-ink-950 bg-cream-50 sm:block"
          >
            <div className="relative grid aspect-[16/9] place-items-center bg-ink-950">
              <Image src="/brand/logo-light.png" alt="" width={427} height={409} className="h-[72%] w-auto" />
              <span className="absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.06em] text-cream-50 uppercase">
                <span className="size-1.5 animate-pulse bg-emerald-400" /> Online now
              </span>
            </div>
            <div className="flex items-end justify-between p-3">
              <div>
                <p className="text-sm font-medium">Let&apos;s talk</p>
                <p className="mt-0.5 font-mono text-[10px] tracking-[0.04em] text-ink-500 uppercase">WhatsApp · {site.phoneDisplay}</p>
              </div>
              <span className="grid size-9 place-items-center bg-ink-950 text-cream-50 transition group-hover:bg-whatsapp">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ───────── Quick search ───────── */}
      <section className="relative bg-ink-950 text-cream-50">
        <div className="container-x py-6">
          <HeroSearch />
        </div>
      </section>

      {/* ───────── About + stats ───────── */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div className="grid-lines -z-10 text-ink-950/[0.07]" aria-hidden="true" />
        <div className="container-x">
          <div className="flex items-start justify-between gap-6">
            <Reveal as="h2" className="max-w-4xl text-4xl leading-[1] font-medium tracking-[-0.035em] uppercase sm:text-5xl lg:text-6xl">
              Clean cars. Honest deals.
              <br />
              <span className="text-red-600">Delivered anywhere</span> in Nigeria.
            </Reveal>
            <p className="label-mono mt-2 hidden shrink-0 text-ink-500 sm:block">(About us)</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <div className="order-3 flex items-end lg:order-1">
              <Link href="/about" className="btn-dark w-full sm:w-auto lg:w-full">Learn more about us</Link>
            </div>
            <Reveal className="relative order-1 aspect-[4/3] overflow-hidden bg-cream-200 lg:order-2">
              <Image src="/cars/range-rover-sport.jpg" alt="Black Range Rover Sport at Viktor Autos" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </Reveal>
            <Reveal className="order-2 space-y-5 text-[15px] leading-relaxed text-ink-700 lg:order-3">
              <p>
                At Viktor Autos, buying or selling a car is simple, transparent and stress-free. From our lot beside Ijari
                Central Mosque in Ijebu Ode, we connect drivers with reliable, well-inspected cars at fair prices.
              </p>
              <p>
                Brand new, Tokunbo or clean 9ja, upgrading, selling or swapping, we guide you every step of the way, and keep
                your car looking sharp long after you drive off.
              </p>
            </Reveal>
          </div>

          <dl className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-0">
            {[
              { k: "Customer rating", v: <><CountUp to={Number(site.rating)} decimals={1} /><span className="text-red-600">/5</span></>, d: "Average rating from customers who bought, sold or swapped with us." },
              { k: "States we deliver to", v: <><CountUp to={36} /><span className="text-red-600">+</span></>, d: "Every state plus the FCT. Your next car, delivered to your door." },
              { k: "Services, one roof", v: <><CountUp to={services.length} /></>, d: "Sales, swaps, detailing, tints, wraps, accessories and modifications." },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 100} className="sm:pr-8 [&:not(:first-child)]:sm:pl-0">
                <dt className="text-sm">{s.k}</dt>
                <dd className="mt-2 border-b border-ink-950/80 pb-3 text-7xl leading-none font-medium tracking-[-0.05em] sm:text-8xl">{s.v}</dd>
                <dd className="mt-3 max-w-xs text-sm text-ink-500">{s.d}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <div className="mt-20 overflow-hidden" aria-label="Brands we sell">
          <div className="flex w-max animate-marquee items-center gap-14 pr-14">
            {[...makesWeSell, ...makesWeSell].map((m, i) => (
              <span key={i} aria-hidden={i >= makesWeSell.length} className="flex items-center gap-14 text-3xl font-medium tracking-[-0.03em] text-ink-400 sm:text-4xl">
                {m}
                <span className="size-2 bg-red-500/70" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Curated cars (dark, staggered) ───────── */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-24 text-cream-50 sm:py-32">
        <div className="grid-lines -z-10 text-cream-50/[0.08]" aria-hidden="true" />
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 lg:pl-[16%]">
              <p className="text-lg text-cream-400">(Curated)</p>
              <h2 className="mt-2 text-5xl leading-[0.95] font-medium tracking-[-0.04em] sm:text-7xl">
                Fresh on
                <br />
                <span className="text-red-300">the lot.</span>
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <p className="text-sm leading-relaxed text-cream-400">
                Hand-picked and inspected before listing. Tap any car for full specs, or ask about it on WhatsApp in one tap.
              </p>
              <Link href="/cars" className="btn-ghost-light self-start">View all {cars.length} cars <ArrowUpRight className="size-3.5" /></Link>
            </div>
          </div>

          <div className="mt-16 grid gap-14 sm:grid-cols-2 sm:gap-10 lg:gap-x-[8%]">
            {[0, 1].map((col) => (
              <div key={col} className={`flex flex-col gap-14 sm:gap-20 ${col ? "sm:pt-40" : ""}`}>
                {featured
                  .filter((_, i) => i % 2 === col)
                  .map((car, j) => {
                    const { box, aspect } = staggerCols[col][j];
                    return (
                      <Reveal key={car.slug} className={box}>
                        <CarCard car={car} dark priority={j === 0} aspect={aspect} sizes="(min-width: 640px) 45vw, 100vw" />
                      </Reveal>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Three ways to own ───────── */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div className="grid-lines -z-10 text-ink-950/[0.07]" aria-hidden="true" />
        <div className="container-x">
          <div className="text-center">
            <h2 className="h-section">Three ways to own one.</h2>
            <p className="lede mx-auto mt-4 max-w-xl text-sm">Whatever your budget, there&apos;s a clean car for you. Every car is checked before it reaches the lot.</p>
          </div>
          <div className="mt-14 grid border-t border-ink-950 lg:grid-cols-3">
            {ownership.map((o, i) => {
              const count = cars.filter((c) => c.condition === o.key).length;
              return (
                <Link
                  key={o.key}
                  href={`/cars?condition=${encodeURIComponent(o.key)}`}
                  className="group relative border-b border-line py-8 transition-colors hover:bg-cream-50 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:hover:first:pl-8 lg:first:transition-all"
                >
                  <div className="flex items-center justify-between">
                    <p className="label-mono text-red-600">{o.eyebrow}</p>
                    <p className="font-mono text-sm">({n2(i)})</p>
                  </div>
                  <h3 className="mt-10 text-4xl font-medium tracking-[-0.035em] sm:text-5xl">{o.title}</h3>
                  <p className="mt-3 max-w-xs text-ink-600">{o.text}</p>
                  <p className="mt-8 flex items-center gap-2 font-mono text-[11px] tracking-[0.06em] uppercase">
                    {count} {count === 1 ? "car" : "cars"} available
                    <ArrowUpRight className="size-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── How it works ───────── */}
      <section className="bg-cream-200/50 py-20 sm:py-28">
        <div className="container-x">
          <div className="text-center">
            <h2 className="h-section">How it works</h2>
            <p className="lede mx-auto mt-4 max-w-xl text-sm">From first chat to keys in hand. Simple, honest and fast.</p>
          </div>
          <ol className="mt-16 space-y-20">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title}>
                <div className="flex items-baseline justify-between border-b border-ink-950 pb-3">
                  <h3 className="text-xl font-medium tracking-tight">{s.title}</h3>
                  <span className="font-mono text-xl">({n2(i)})</span>
                </div>
                <div className="mt-5 grid gap-6 md:grid-cols-3">
                  <p className="text-2xl leading-snug font-medium tracking-[-0.02em] sm:text-[1.7rem]">{s.text}</p>
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream-300 md:aspect-[3/4]">
                    <Image src={s.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <ul className="space-y-2 text-sm text-ink-600">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3"><span className="size-1 bg-red-600" /> {p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
          <div className="mt-16 flex justify-center">
            <a href={waLink("Hello Viktor Autos, I'd like help choosing a car. My budget is ")} target="_blank" rel="noopener" className="btn-primary">
              <WhatsAppIcon className="size-4" /> Help me choose a car
            </a>
          </div>
        </div>
      </section>

      {/* ───────── Services (dark) ───────── */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-24 text-cream-50 sm:py-32">
        <div className="grid-lines -z-10 text-cream-50/[0.08]" aria-hidden="true" />
        <div className="container-x">
          <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-4xl font-medium tracking-[-0.035em] sm:text-6xl">Beyond the sale</h2>
              <p className="mt-3 max-w-md text-sm text-cream-400">Keep your car looking sharp and running right. All under one roof.</p>
            </div>
            <Link href="/services" className="btn-ghost-light self-start sm:self-auto">All services <ArrowUpRight className="size-3.5" /></Link>
          </div>
          <ServicesList />
        </div>
      </section>

      {/* ───────── Testimonials ───────── */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div className="grid-lines -z-10 text-ink-950/[0.07]" aria-hidden="true" />
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            <h2 className="text-4xl leading-[0.98] font-medium tracking-[-0.035em] sm:text-6xl lg:col-span-2">
              What our customers
              <br />
              are saying
            </h2>
            <div className="flex items-end gap-3 lg:justify-end">
              <Stars value={5} />
              <p className="text-sm text-ink-600"><strong className="text-ink-950">{site.rating}</strong> / 5 average rating</p>
            </div>
          </div>
          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} as="figure" className="flex flex-col bg-cream-50 p-7 sm:p-9">
                <Quote className="size-7 fill-red-600 text-red-600" />
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed tracking-[-0.01em]">“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-5">
                  <span className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center bg-ink-950 text-sm font-medium text-cream-50">
                      {t.name.replace("Mr. ", "").charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{t.name}</span>
                      <span className="label-mono block text-ink-500">{t.role}</span>
                    </span>
                  </span>
                  <Stars value={t.rating} className="size-3.5" />
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Sell / Buy / Swap CTA (dark) ───────── */}
      <section className="relative isolate overflow-hidden bg-ink-950 text-cream-50">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(rgb(249_246_241/0.09)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div aria-hidden="true" className="absolute -bottom-1/3 left-1/2 -z-10 size-[60rem] -translate-x-1/2 rounded-full bg-red-700/25 blur-[120px]" />
        <div className="container-x grid items-center gap-10 py-24 sm:py-32 lg:grid-cols-2">
          <div>
            <p className="label-mono text-red-300">(Sell · Buy · Swap)</p>
            <h2 className="mt-4 text-5xl leading-[0.95] font-medium tracking-[-0.04em] sm:text-7xl">
              Ready for your
              <br />
              next ride?
            </h2>
            <p className="mt-6 max-w-md text-cream-400">
              Pick from our lot, sell us your car for a fair offer, or trade it in and drive away in another. No stress, no
              hidden fees.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/cars" className="btn-light">Start exploring <ArrowRight className="size-3.5" /></Link>
              <Link href="/sell" className="btn-ghost-light">Get an offer for my car</Link>
            </div>
          </div>
          <Reveal className="relative">
            <div aria-hidden="true" className="absolute inset-x-[10%] bottom-[3%] h-[10%] rounded-[50%] bg-black/70 blur-2xl" />
            <Image src="/images/range-rover-cut.webp" alt="Black Range Rover Sport" width={1289} height={1013} sizes="(min-width: 1024px) 45vw, 90vw" className="relative mx-auto h-auto w-full max-w-xl" />
          </Reveal>
        </div>
      </section>

      {/* ───────── Refer & earn ───────── */}
      <section className="bg-red-600 text-cream-50">
        <div className="container-x grid gap-10 py-16 sm:py-20 lg:grid-cols-3 lg:items-center">
          <div className="lg:col-span-2">
            <p className="label-mono flex items-center gap-2 text-red-100"><Gift className="size-3.5" /> Refer and earn</p>
            <h2 className="mt-4 text-4xl leading-[0.98] font-medium tracking-[-0.035em] sm:text-6xl">
              Send a friend. Earn {site.referralReward}.
            </h2>
            <ol className="mt-8 grid gap-4 text-sm text-red-50 sm:grid-cols-3">
              {[
                ["Invite", "Share our WhatsApp with a friend."],
                ["They buy or sell", "They complete a deal and mention you."],
                ["You earn", `${site.referralReward} for every successful referral.`],
              ].map(([t, d], i) => (
                <li key={t} className="border-t border-cream-50/30 pt-4">
                  <span className="font-mono text-xs">({n2(i)})</span>
                  <p className="mt-2 font-medium text-cream-50">{t}</p>
                  <p className="mt-1">{d}</p>
                </li>
              ))}
            </ol>
          </div>
          <a href={waLink("Hello Viktor Autos, I'd like to refer a friend. Their name is ")} target="_blank" rel="noopener" className="btn-light lg:justify-self-end">
            Refer a friend <ArrowRight className="size-3.5" />
          </a>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div className="grid-lines -z-10 text-ink-950/[0.07]" aria-hidden="true" />
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-8 lg:order-2 lg:col-span-1">
            <h2 className="text-5xl font-medium tracking-[-0.04em] sm:text-7xl lg:text-right">FAQs</h2>
            <div className="lg:text-right">
              <p className="font-medium">Can&apos;t find your answer?</p>
              <p className="mt-1 text-sm text-ink-600">Talk to a real person. We&apos;re happy to help.</p>
              <div className="mt-5 flex flex-wrap gap-2 lg:justify-end">
                <a href={waLink()} target="_blank" rel="noopener" className="btn-dark !py-3"><WhatsAppIcon className="size-3.5" /> Let&apos;s talk</a>
                <a href={telLink} className="btn-outline !py-3"><Phone className="size-3.5" /> Call</a>
              </div>
            </div>
          </div>
          <Reveal className="lg:col-span-2">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* ───────── Visit + enquiry ───────── */}
      <section className="bg-cream-200/60 py-20 sm:py-28" id="visit">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="label-mono text-ink-500">(Visit the lot)</p>
            <h2 className="mt-4 text-5xl leading-[0.95] font-medium tracking-[-0.04em] sm:text-6xl">
              Come see the cars <span className="text-red-600">in person.</span>
            </h2>
            <p className="mt-5 max-w-md text-ink-600">Walk the lot, sit inside and take your time. Call ahead if you&apos;re coming for a specific car.</p>
            <div className="relative mt-10 aspect-[9/2] overflow-hidden">
              <Image src="/images/lot-banner.jpg" alt="Cars lined up at the Viktor Autos lot" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
            </div>
            <div className="mt-px grid gap-px bg-line sm:grid-cols-2">
              <a href={site.mapsUrl} target="_blank" rel="noopener" className="group flex gap-4 bg-cream-50 p-6 transition hover:bg-white">
                <MapPin className="size-5 shrink-0 text-red-600" />
                <span className="text-sm">
                  <span className="block font-medium">{site.address.line1}</span>
                  <span className="text-ink-600">{site.address.line2}, {site.address.city}, {site.address.state}</span>
                  <span className="label-mono mt-3 flex items-center gap-1 text-red-600">Get directions <ArrowUpRight className="size-3.5" /></span>
                </span>
              </a>
              <a href={telLink} className="group flex gap-4 bg-cream-50 p-6 transition hover:bg-white">
                <Phone className="size-5 shrink-0 text-red-600" />
                <span className="text-sm">
                  <span className="block font-medium">{site.phoneDisplay}</span>
                  <span className="text-ink-600">{site.hours}</span>
                </span>
              </a>
            </div>
          </div>
          <div className="border border-line bg-cream-50 p-6 sm:p-10">
            <h3 className="text-2xl font-medium tracking-tight">Send us a message</h3>
            <p className="mt-1 text-sm text-ink-600">Tell us what you need and we&apos;ll get back to you on WhatsApp.</p>
            <div className="mt-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
