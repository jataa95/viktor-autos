"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import CarCard from "./CarCard";
import { WhatsAppIcon } from "./BrandIcons";
import { bodies, cars, conditions, makes, priceRanges } from "@/data/cars";
import { waLink } from "@/lib/site";

const sorts = {
  featured: { label: "Recommended", fn: (a, b) => Number(b.featured) - Number(a.featured) },
  "price-asc": { label: "Price: low to high", fn: (a, b) => a.price - b.price },
  "price-desc": { label: "Price: high to low", fn: (a, b) => b.price - a.price },
  newest: { label: "Year: newest first", fn: (a, b) => b.year - a.year },
  mileage: { label: "Mileage: lowest first", fn: (a, b) => a.mileage - b.mileage },
};

export default function Inventory() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const f = {
    q: params.get("q") ?? "",
    make: params.get("make") ?? "",
    body: params.get("body") ?? "",
    condition: params.get("condition") ?? "",
    price: params.get("price") ?? "",
    sort: params.get("sort") ?? "featured",
  };

  function set(key, value) {
    const next = new URLSearchParams(params);
    if (value && !(key === "sort" && value === "featured")) next.set(key, value);
    else next.delete(key);
    router.replace(`${pathname}${next.size ? `?${next}` : ""}`, { scroll: false });
  }

  const results = useMemo(() => {
    const q = f.q.trim().toLowerCase();
    const range = priceRanges.find((p) => p.value === f.price);
    return cars
      .filter((c) => !q || `${c.year} ${c.make} ${c.model} ${c.trim} ${c.color} ${c.body}`.toLowerCase().includes(q))
      .filter((c) => !f.make || c.make === f.make)
      .filter((c) => !f.body || c.body === f.body)
      .filter((c) => !f.condition || c.condition === f.condition)
      .filter((c) => !range || (c.price >= range.min && c.price < range.max))
      .sort(sorts[f.sort]?.fn ?? sorts.featured.fn);
  }, [f.q, f.make, f.body, f.condition, f.price, f.sort]);

  const active = ["make", "body", "condition", "price", "q"].filter((k) => f[k]);

  return (
    <div>
      {/* Condition tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
        {["", ...conditions].map((c) => (
          <button
            key={c || "all"}
            type="button"
            onClick={() => set("condition", c)}
            aria-pressed={f.condition === c}
            className={`shrink-0 px-5 py-2.5 font-mono text-[11px] tracking-[0.06em] uppercase transition ${
              f.condition === c ? "bg-ink-900 text-cream-50" : "border border-line bg-cream-50 text-ink-700 hover:border-ink-900"
            }`}
          >
            {c || "All cars"}
            <span className="ml-1.5 opacity-60">{c ? cars.filter((x) => x.condition === c).length : cars.length}</span>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="card mt-5 grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div className="relative sm:col-span-2 lg:col-span-1">
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-ink-400" />
          <label htmlFor="inv-q" className="sr-only">Search</label>
          <input
            id="inv-q"
            type="search"
            defaultValue={f.q}
            onChange={(e) => set("q", e.target.value)}
            placeholder="Search model, colour..."
            className="field !pl-11"
          />
        </div>
        <label className="sr-only" htmlFor="inv-make">Brand</label>
        <select id="inv-make" className="field-select" value={f.make} onChange={(e) => set("make", e.target.value)}>
          <option value="">All brands</option>
          {makes.map((m) => <option key={m}>{m}</option>)}
        </select>
        <label className="sr-only" htmlFor="inv-body">Body type</label>
        <select id="inv-body" className="field-select" value={f.body} onChange={(e) => set("body", e.target.value)}>
          <option value="">All types</option>
          {bodies.map((b) => <option key={b}>{b}</option>)}
        </select>
        <label className="sr-only" htmlFor="inv-price">Budget</label>
        <select id="inv-price" className="field-select" value={f.price} onChange={(e) => set("price", e.target.value)}>
          <option value="">Any budget</option>
          {priceRanges.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
        </select>
        <label className="sr-only" htmlFor="inv-sort">Sort</label>
        <select id="inv-sort" className="field-select" value={f.sort} onChange={(e) => set("sort", e.target.value)}>
          {Object.entries(sorts).map(([k, s]) => <option key={k} value={k}>{s.label}</option>)}
        </select>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-600" aria-live="polite">
          <strong className="text-ink-900">{results.length}</strong> {results.length === 1 ? "car" : "cars"} found
        </p>
        {active.length > 0 && (
          <button type="button" onClick={() => router.replace(pathname, { scroll: false })} className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-800">
            <X className="size-4" /> Clear filters
          </button>
        )}
      </div>

      {results.length ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((car, i) => <CarCard key={car.slug} car={car} priority={i < 3} />)}
        </div>
      ) : (
        <div className="card mt-6 flex flex-col items-center px-6 py-16 text-center">
          <span className="grid size-14 place-items-center rounded-full bg-red-50 text-red-600"><SlidersHorizontal className="size-6" /></span>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight">No exact match on the lot right now</h2>
          <p className="mt-2 max-w-md text-ink-600">
            New stock arrives often, and not every car is listed. Tell us what you want and we&apos;ll find it for you.
          </p>
          <a
            href={waLink(`Hello Viktor Autos, I'm looking for a car${f.make ? ` (${f.make}${f.body ? ` ${f.body}` : ""})` : ""}. Can you help me find one?`)}
            target="_blank"
            rel="noopener"
            className="btn-whatsapp mt-7"
          >
            <WhatsAppIcon className="size-4" /> Find it for me
          </a>
        </div>
      )}
    </div>
  );
}
