import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { carTitle } from "@/data/cars";
import { formatKm, formatPrice } from "@/lib/format";
import { waLink } from "@/lib/site";

export default function CarCard({ car, priority = false, dark = false, aspect = "aspect-[4/3]", sizes }) {
  const title = carTitle(car);
  const href = `/cars/${car.slug}`;
  return (
    <article className="group relative">
      <Link href={href} className={`relative block overflow-hidden ${aspect} ${dark ? "bg-ink-800" : "bg-cream-200"}`} aria-label={title}>
        <Image
          src={car.images[0]}
          alt={title}
          fill
          sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition duration-[900ms] ease-out group-hover:scale-[1.04]"
          preload={priority}
        />
        <span className="absolute top-3 left-3 bg-cream-50 px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] text-ink-950 uppercase">
          {car.condition}
        </span>
        {car.status !== "Available" && (
          <span className="absolute top-3 right-3 bg-red-600 px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] text-cream-50 uppercase">
            {car.status}
          </span>
        )}
        <span className="absolute right-3 bottom-3 flex translate-y-2 items-center gap-2 bg-ink-950 px-4 py-2.5 font-mono text-[11px] tracking-[0.06em] text-cream-50 uppercase opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          See details <ArrowUpRight className="size-3.5" />
        </span>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className={`truncate text-[15px] font-medium ${dark ? "text-cream-50" : ""}`}>
            <Link href={href}>{car.year} {car.make} {car.model}</Link>
          </h3>
          <p className={`mt-1 font-mono text-[11px] tracking-[0.04em] uppercase ${dark ? "text-cream-500" : "text-ink-500"}`}>
            {formatKm(car.mileage)} · {car.transmission} · {car.fuel}
          </p>
          <p className={`mt-2 text-2xl font-medium tracking-[-0.02em] sm:text-[1.65rem] ${dark ? "text-cream-50" : ""}`}>{formatPrice(car.price)}</p>
        </div>
        <a
          href={waLink(`Hello Viktor Autos, is the ${title} (${formatPrice(car.price)}) still available?`)}
          target="_blank"
          rel="noopener"
          aria-label={`Ask about the ${title} on WhatsApp`}
          className={`mt-0.5 grid size-10 shrink-0 place-items-center border transition hover:border-whatsapp hover:bg-whatsapp hover:text-white ${dark ? "border-cream-50/20 text-cream-50" : "border-line"}`}
        >
          <WhatsAppIcon className="size-4" />
        </a>
      </div>
    </article>
  );
}
