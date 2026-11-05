import { BadgeCheck, Banknote, Camera, Handshake, Repeat, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import { faqs } from "@/data/content";

export const metadata = {
  title: "Sell or swap your car",
  description: "Get a fair, fast offer for your car in Ijebu Ode, or swap it for another car on the Viktor Autos lot. No stress, no hidden fees.",
};

const steps = [
  { Icon: Camera, t: "Send your car details", d: "Fill the form or send photos on WhatsApp: make, model, year and mileage." },
  { Icon: BadgeCheck, t: "Quick inspection", d: "Bring the car to our lot in Ijebu Ode for a free, no-obligation check." },
  { Icon: Banknote, t: "Get paid or swap", d: "Accept the offer and get paid, or put it towards another car on the lot." },
];

export default function SellPage() {
  return (
    <>
      <PageHero
        image="/cars/bmw-4-series.jpg"
        eyebrow="Sell or swap"
        title={<>Get a fair offer for your car. <span className="serif-accent !text-red-300">Fast.</span></>}
        lede="Skip the stress of selling privately. We buy clean cars outright, or take yours as a trade-in towards your next one."
      />

      <section className="container-x grid gap-12 py-16 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">How it works</p>
          <h2 className="h-section mt-4">Three steps. <span className="serif-accent">No stress.</span></h2>
          <ol className="mt-10 space-y-8">
            {steps.map(({ Icon, t, d }, i) => (
              <li key={t} className="flex gap-5">
                <span className="relative grid size-12 shrink-0 place-items-center bg-red-50 text-red-600">
                  <Icon className="size-5" strokeWidth={1.7} />
                  <span className="absolute -top-2 -right-2 grid size-6 place-items-center bg-ink-900 text-[11px] font-semibold text-cream-50">{i + 1}</span>
                </span>
                <div>
                  <p className="text-lg font-semibold tracking-tight">{t}</p>
                  <p className="mt-1 text-ink-600">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid grid-cols-3 gap-3">
            {[
              { Icon: Zap, t: "Quick offers" },
              { Icon: Handshake, t: "Fair prices" },
              { Icon: Repeat, t: "Easy swaps" },
            ].map(({ Icon, t }) => (
              <div key={t} className="card flex flex-col items-center gap-2 p-4 text-center text-sm font-semibold">
                <Icon className="size-5 text-red-600" strokeWidth={1.7} /> {t}
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6 sm:p-10 lg:col-span-7">
          <h2 className="text-2xl font-semibold tracking-tight">Tell us about your car</h2>
          <p className="mt-1 text-ink-600">Your details go straight to our team on WhatsApp. Add photos in the chat for a faster offer.</p>
          <div className="mt-8">
            <LeadForm topics={["Sell my car", "Swap my car"]} defaultTopic="Sell my car" extraFields cta="Get my offer on WhatsApp" />
          </div>
        </div>
      </section>

      <section className="bg-cream-200/60 py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <h2 className="h-section">Selling <span className="serif-accent">FAQs</span></h2>
          <div className="mt-8">
            <Faq items={faqs.filter((f) => /sell|swap|payment|long/i.test(f.q))} />
          </div>
        </div>
      </section>
    </>
  );
}
