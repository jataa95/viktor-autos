"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./BrandIcons";
import { waLink } from "@/lib/site";

const defaultTopics = [
  "Buy a car",
  "Sell my car",
  "Swap my car",
  "Wash, detailing or polishing",
  "Wraps, tints or accessories",
  "Something else",
];

// Sends the enquiry straight to WhatsApp, prefilled. No backend needed.
export default function LeadForm({ topics = defaultTopics, defaultTopic = "", extraFields = false, cta = "Send on WhatsApp", dark = false }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const lines = [
      `Hello Viktor Autos, my name is ${d.name}.`,
      d.topic && `I'd like to: ${d.topic}.`,
      d.car && `My car: ${d.car}${d.year ? ` (${d.year})` : ""}${d.mileage ? `, ${d.mileage} km` : ""}.`,
      d.asking && `Asking price: ₦${d.asking}.`,
      d.message,
      d.phone && `You can reach me on ${d.phone}.`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  }

  const label = `field-label ${dark ? "!text-cream-400" : ""}`;
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-name" className={label}>Your name</label>
          <input id="lf-name" name="name" required autoComplete="name" className="field" placeholder="e.g. Tunde Bakare" />
        </div>
        <div>
          <label htmlFor="lf-phone" className={label}>Phone (optional)</label>
          <input id="lf-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className="field" placeholder="080..." />
        </div>
      </div>
      <div>
        <label htmlFor="lf-topic" className={label}>What do you need?</label>
        <select id="lf-topic" name="topic" className="field-select" defaultValue={defaultTopic}>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      {extraFields && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="lf-car" className={label}>Your car (make & model)</label>
            <input id="lf-car" name="car" required className="field" placeholder="e.g. Toyota Corolla" />
          </div>
          <div>
            <label htmlFor="lf-year" className={label}>Year</label>
            <input id="lf-year" name="year" inputMode="numeric" className="field" placeholder="2015" />
          </div>
          <div>
            <label htmlFor="lf-mileage" className={label}>Mileage (km)</label>
            <input id="lf-mileage" name="mileage" inputMode="numeric" className="field" placeholder="85,000" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="lf-asking" className={label}>Asking price in ₦ (optional)</label>
            <input id="lf-asking" name="asking" inputMode="numeric" className="field" placeholder="8,500,000" />
          </div>
        </div>
      )}
      <div>
        <label htmlFor="lf-message" className={label}>Message</label>
        <textarea id="lf-message" name="message" rows={4} className="field resize-none" placeholder="Tell us a little more: budget, model, timeline..." />
      </div>
      <button type="submit" className="btn-whatsapp w-full sm:w-auto">
        <WhatsAppIcon className="size-5" /> {cta}
      </button>
      <p className={`text-xs ${dark ? "text-cream-500" : "text-ink-500"}`} aria-live="polite">
        {sent ? "WhatsApp opened in a new tab. Hit send and we'll reply shortly." : "Opens WhatsApp with your message ready to send. We reply as soon as we can."}
      </p>
    </form>
  );
}
