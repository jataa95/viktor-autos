"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services, serviceImages } from "@/data/content";
import { waLink } from "@/lib/site";

export default function ServicesList() {
  const [active, setActive] = useState(0);
  const s = services[active];
  return (
    <div className="grid gap-10 lg:grid-cols-3">
      <div className="relative hidden aspect-[3/4] overflow-hidden bg-ink-800 lg:block">
        {services.map((x, i) => (
          <Image
            key={x.title}
            src={serviceImages[x.title]}
            alt=""
            fill
            sizes="33vw"
            className={`object-cover transition duration-700 ${i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
          />
        ))}
      </div>

      <ul className="border-t border-cream-50/15 lg:col-span-2" role="list">
        {services.map((x, i) => (
          <li key={x.title} className="border-b border-cream-50/15">
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={i === active}
              className="flex w-full items-baseline justify-between gap-6 py-5 text-left"
            >
              <span className={`text-3xl font-medium tracking-[-0.03em] transition sm:text-5xl ${i === active ? "text-cream-50" : "text-cream-50/35"}`}>
                {x.title}
                <sup className="ml-1 font-mono text-xs tracking-normal text-red-300">({String(i + 1).padStart(2, "0")})</sup>
              </span>
            </button>
            <div className={`grid transition-all duration-500 ${i === active ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-md text-cream-400">{x.text}</p>
                  <a
                    href={waLink(`Hello Viktor Autos, I'd like to ask about ${x.title.toLowerCase()} for my car.`)}
                    target="_blank"
                    rel="noopener"
                    tabIndex={i === active ? 0 : -1}
                    className="btn-ghost-light shrink-0 self-start !py-3"
                  >
                    Get a quote <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <span className="sr-only" aria-live="polite">{s.title}</span>
    </div>
  );
}
