import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck, Calendar, CarFront, Check, Cog, Fuel, Gauge, Palette, Phone, Repeat, Settings2, ShieldCheck, Truck, Users } from "lucide-react";
import CarCard from "@/components/CarCard";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { carTitle, cars, getCar, similarCars } from "@/data/cars";
import { formatKm, formatPrice } from "@/lib/format";
import { site, telLink, waLink } from "@/lib/site";

export function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return {};
  const title = `${carTitle(car)} for sale – ${formatPrice(car.price)}`;
  return {
    title,
    description: `${car.condition} ${carTitle(car)}, ${formatKm(car.mileage)}, ${car.transmission}. ${car.summary}`,
    openGraph: { title, images: [{ url: car.images[0] }] },
  };
}

export default async function CarPage({ params }) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) notFound();

  const title = carTitle(car);
  const price = formatPrice(car.price);
  const specs = [
    { Icon: Calendar, label: "Year", value: car.year },
    { Icon: Gauge, label: "Mileage", value: formatKm(car.mileage) },
    { Icon: Settings2, label: "Transmission", value: car.transmission },
    { Icon: Fuel, label: "Fuel", value: car.fuel },
    { Icon: Cog, label: "Engine", value: car.engine },
    { Icon: CarFront, label: "Body", value: `${car.body} · ${car.drive}` },
    { Icon: Palette, label: "Colour", value: car.color },
    { Icon: Users, label: "Seats", value: car.seats },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: title,
    brand: { "@type": "Brand", name: car.make },
    model: car.model,
    vehicleModelDate: String(car.year),
    mileageFromOdometer: { "@type": "QuantitativeValue", value: car.mileage, unitCode: "KMT" },
    vehicleTransmission: car.transmission,
    fuelType: car.fuel,
    color: car.color,
    itemCondition: car.condition === "Brand new" ? "https://schema.org/NewCondition" : "https://schema.org/UsedCondition",
    image: car.images.map((i) => `${site.url}${i}`),
    offers: {
      "@type": "Offer",
      price: car.price,
      priceCurrency: "NGN",
      availability: car.status === "Available" ? "https://schema.org/InStock" : "https://schema.org/LimitedAvailability",
      seller: { "@type": "AutoDealer", name: site.name },
    },
  };

  return (
    <>
      <div className="container-x pt-28 sm:pt-32">
        <Link href="/cars" className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 hover:text-ink-900">
          <ArrowLeft className="size-4" /> Back to all cars
        </Link>
      </div>

      <section className="container-x grid gap-10 pt-6 pb-16 lg:grid-cols-12">
        {/* Media + details */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
            <Image src={car.images[0]} alt={title} fill preload sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
            <span className="absolute top-4 left-4 bg-cream-50 px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] uppercase">{car.condition}</span>
          </div>
          {car.images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {car.images.slice(1, 5).map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden">
                  <Image src={src} alt="" fill sizes="20vw" className="object-cover" />
                </div>
              ))}
            </div>
          )}
          <a
            href={waLink(`Hello Viktor Autos, please send me a video walkaround of the ${title}.`)}
            target="_blank"
            rel="noopener"
            className="mt-4 flex items-center justify-between gap-4 border border-line bg-cream-50 p-4 text-sm transition hover:border-red-200"
          >
            <span><strong>Want more photos or a video?</strong> <span className="text-ink-600">We&apos;ll send a full walkaround on WhatsApp.</span></span>
            <WhatsAppIcon className="size-5 shrink-0 text-whatsapp" />
          </a>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">Specifications</h2>
            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4">
              {specs.map(({ Icon, label, value }) => (
                <div key={label} className="bg-cream-50 p-5">
                  <Icon className="size-5 text-red-600" strokeWidth={1.6} />
                  <dt className="mt-3 text-xs text-ink-500">{label}</dt>
                  <dd className="mt-0.5 font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">Highlights</h2>
            <p className="mt-3 leading-relaxed text-ink-600">{car.summary}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {car.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <span className="grid size-6 place-items-center bg-red-50 text-red-600"><Check className="size-3.5" /></span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sticky buy box */}
        <aside className="lg:col-span-5 xl:col-span-4">
          <div className="card p-6 sm:p-8 lg:sticky lg:top-24">
            <div className="flex items-center gap-2">
              <span className={`size-2 rounded-full ${car.status === "Available" ? "bg-emerald-500" : "bg-amber-500"}`} />
              <span className="text-sm font-medium text-ink-600">{car.status === "Available" ? "Available now" : car.status}</span>
            </div>
            <h1 className="mt-3 text-3xl leading-tight font-semibold tracking-tight">{title}</h1>
            <p className="mt-1 text-ink-500">{car.trim} · {car.color}</p>
            <p className="mt-6 text-xs font-medium tracking-wide text-ink-400 uppercase">Price</p>
            <p className="text-4xl font-semibold tracking-tight">{price}</p>

            <div className="mt-6 grid gap-3">
              <a href={waLink(`Hello Viktor Autos, is the ${title} (${price}) still available? I'm interested.`)} target="_blank" rel="noopener" className="btn-whatsapp w-full">
                <WhatsAppIcon className="size-5" /> Enquire on WhatsApp
              </a>
              <a href={waLink(`Hello Viktor Autos, I'd like to book an inspection / test drive for the ${title}. When is a good time?`)} target="_blank" rel="noopener" className="btn-dark w-full">
                Book an inspection
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={telLink} className="btn-outline !px-4"><Phone className="size-4" /> Call</a>
                <a href={waLink(`Hello Viktor Autos, I'd like to swap my car for the ${title}. My car is a `)} target="_blank" rel="noopener" className="btn-outline !px-4">
                  <Repeat className="size-4" /> Swap
                </a>
              </div>
            </div>

            <ul className="mt-7 space-y-3 border-t border-line pt-6 text-sm text-ink-600">
              <li className="flex gap-3"><ShieldCheck className="size-5 shrink-0 text-red-600" strokeWidth={1.7} /> Inspected before listing</li>
              <li className="flex gap-3"><Truck className="size-5 shrink-0 text-red-600" strokeWidth={1.7} /> Delivery anywhere in Nigeria</li>
              <li className="flex gap-3"><BadgeCheck className="size-5 shrink-0 text-red-600" strokeWidth={1.7} /> Registered dealer · RC {site.rc}</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="border-t border-line bg-cream-200/60 py-16 sm:py-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <h2 className="h-section">You might <span className="serif-accent">also like</span></h2>
            <Link href="/cars" className="btn-outline hidden sm:inline-flex">View all cars</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similarCars(car).map((c) => <CarCard key={c.slug} car={c} />)}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
