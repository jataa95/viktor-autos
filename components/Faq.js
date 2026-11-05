import { Plus } from "lucide-react";

export default function Faq({ items }) {
  return (
    <div className="space-y-2">
      {items.map((f) => (
        <details key={f.q} className="group border border-line bg-cream-50 transition open:border-ink-950 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 text-left text-[15px] font-medium">
            {f.q}
            <Plus className="size-4 shrink-0 transition group-open:rotate-45 group-open:text-red-600" />
          </summary>
          <p className="max-w-2xl px-5 pb-5 text-sm leading-relaxed text-ink-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
