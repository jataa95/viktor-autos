"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { conditions, makes, bodies, priceRanges } from "@/data/cars";

const sel = "field-select-dark";

export default function HeroSearch() {
  const router = useRouter();
  function onSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    for (const [k, v] of new FormData(e.currentTarget)) if (v) params.set(k, v);
    router.push(`/cars${params.size ? `?${params}` : ""}`);
  }
  const fields = [
    { id: "make", label: "Brand", any: "Any brand", opts: makes.map((m) => [m, m]) },
    { id: "body", label: "Type", any: "Any type", opts: bodies.map((b) => [b, b]) },
    { id: "condition", label: "Condition", any: "Any condition", opts: conditions.map((c) => [c, c]) },
    { id: "price", label: "Budget", any: "Any budget", opts: priceRanges.map((p) => [p.value, p.label]) },
  ];
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 items-end gap-x-6 gap-y-4 lg:grid-cols-[auto_repeat(4,1fr)_auto] lg:gap-x-8">
      <p className="text-lg font-medium tracking-tight col-span-2 lg:col-span-1 lg:pr-4 lg:pb-2.5">
        Find your perfect ride
      </p>
      {fields.map((f) => (
        <div key={f.id}>
          <label htmlFor={`hs-${f.id}`} className="block font-mono text-[10px] tracking-[0.08em] text-cream-500 uppercase">{f.label}</label>
          <select id={`hs-${f.id}`} name={f.id} defaultValue="" className={sel}>
            <option value="">{f.any}</option>
            {f.opts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
      ))}
      <button type="submit" className="btn-primary col-span-2 lg:col-span-1">
        <Search className="size-3.5" /> Search cars
      </button>
    </form>
  );
}
