import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { telLink, waLink } from "@/lib/site";

// Always-visible contact: floating WhatsApp on desktop, thumb-friendly bar on mobile.
export default function ContactDock() {
  return (
    <>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Viktor Autos on WhatsApp"
        className="group fixed right-6 bottom-6 z-40 hidden items-center gap-3 bg-whatsapp py-2.5 pr-5 pl-2.5 font-mono text-[11px] tracking-[0.06em] uppercase text-white shadow-[0_18px_40px_-12px_rgb(31_168_85/0.7)] transition hover:-translate-y-0.5 md:flex"
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
