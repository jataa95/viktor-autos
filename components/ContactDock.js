"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { telLink, waLink } from "@/lib/site";

// Always-visible contact: floating WhatsApp on desktop, thumb-friendly bar on mobile.
export default function ContactDock() {
  // Desktop pill appears once the visitor scrolls past the hero, so it never covers hero content.
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Viktor Autos on WhatsApp"
        className={`group fixed right-6 bottom-6 z-40 hidden items-center transition duration-300 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"} gap-3 bg-whatsapp py-2.5 pr-5 pl-2.5 font-mono text-[11px] tracking-[0.06em] uppercase text-white shadow-[0_18px_40px_-12px_rgb(31_168_85/0.7)] transition md:flex`}
      >
        <span className="grid size-9 place-items-center bg-white/15">
          <WhatsAppIcon className="size-5" />
        </span>
        Chat with us
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream-50/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a href={telLink} className="btn-outline !py-3">
            <Phone className="size-4" /> Call
          </a>
          <a href={waLink()} target="_blank" rel="noopener" className="btn-whatsapp !py-3">
            <WhatsAppIcon className="size-4" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
