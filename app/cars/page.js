import { Suspense } from "react";
import Inventory from "@/components/Inventory";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { waLink } from "@/lib/site";

export const metadata = {
  title: "Cars for sale",
  description: "Browse brand new, Tokunbo and clean Nigerian-used cars at Viktor Autos, Ijebu Ode. Inspected, fairly priced, delivered nationwide.",
};

export default function CarsPage() {
  return (
    <>
      <section className="container-x pt-32 pb-8 sm:pt-40">
        <p className="eyebrow">Our inventory</p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h1 className="h-display max-w-2xl">
            Explore <span className="serif-accent">our cars.</span>
          </h1>
          <p className="lede max-w-md">Every car is inspected before it&apos;s listed. Can&apos;t find your model? We source to order.</p>
        </div>
      </section>
      <section className="container-x pb-20">
        <Suspense fallback={<div className="card h-40 animate-pulse" />}>
          <Inventory />
        </Suspense>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 bg-ink-900 p-8 text-cream-50 sm:p-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Looking for something specific?</h2>
            <p className="mt-2 text-cream-400">Tell us the model, year and budget. We&apos;ll find it and send photos on WhatsApp.</p>
          </div>
          <a href={waLink("Hello Viktor Autos, I'm looking for a specific car: ")} target="_blank" rel="noopener" className="btn-whatsapp shrink-0">
            <WhatsAppIcon className="size-4" /> Request a car
          </a>
        </div>
      </section>
    </>
  );
}
