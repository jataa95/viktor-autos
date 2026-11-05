"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import Logo from "./Logo";
import { WhatsAppIcon } from "./BrandIcons";
import { nav, site, telLink, waLink } from "@/lib/site";

// Floating dark bar, centred, like the reference. Full menu opens as an overlay.
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
        <div className="pointer-events-auto mx-auto flex h-14 max-w-3xl items-center justify-between bg-ink-950 pr-2 pl-4 text-cream-50 shadow-[0_20px_40px_-20px_rgb(0_0_0/0.5)]">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="group flex h-10 w-12 flex-col justify-center gap-[7px]"
          >
            <span className={`h-px w-9 bg-cream-50 transition ${open ? "translate-y-[4px] rotate-[20deg]" : ""}`} />
            <span className={`h-px w-9 bg-cream-50 transition ${open ? "-translate-y-[4px] -rotate-[20deg]" : "w-6 group-hover:w-9"}`} />
          </button>

          <Link href="/" onClick={() => setOpen(false)} aria-label="Viktor Autos home" className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2.5">
            <Image src="/brand/logo-light.png" alt="" width={427} height={409} className="h-9 w-auto" preload />
            <span className="hidden text-[15px] font-semibold tracking-[0.2em] sm:inline">VIKTOR</span>
            <span className="hidden size-1.5 bg-red-500 sm:inline" />
            <span className="hidden text-[15px] font-semibold tracking-[0.2em] sm:inline">AUTOS</span>
          </Link>

          <a href={waLink()} target="_blank" rel="noopener" className="flex h-10 items-center gap-2 bg-cream-50 px-3 font-mono text-[11px] tracking-[0.06em] text-ink-950 uppercase transition hover:bg-red-600 hover:text-cream-50 sm:px-4">
            <WhatsAppIcon className="size-4" />
            <span className="hidden sm:inline">Chat</span>
          </a>
        </div>
      </header>

      <div
        id="site-menu"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-ink-950 text-cream-50"
      >
        <div className="relative min-h-full">
          <div className="grid-lines text-cream-50/[0.07]" aria-hidden="true" />
          <div className="container-x relative grid min-h-dvh gap-12 pt-28 pb-12 lg:grid-cols-3">
            <div className="flex flex-col justify-between gap-10 lg:col-span-1">
              <Logo variant="light" className="h-28 w-auto" />
              <div className="space-y-6 text-sm text-cream-400">
                <p className="label-mono text-cream-500">(Visit)</p>
                <p>
                  {site.address.line1}
                  <br />
                  {site.address.line2}, {site.address.city}
                </p>
                <a href={telLink} className="flex items-center gap-2 text-cream-50 hover:text-red-300">
                  <Phone className="size-4" /> {site.phoneDisplay}
                </a>
              </div>
            </div>
            <nav aria-label="Main" className="flex flex-col justify-center lg:col-span-2">
              {[{ href: "/", label: "Home" }, ...nav].map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-baseline justify-between border-b border-cream-50/10 py-4 text-4xl font-medium tracking-[-0.03em] transition sm:text-6xl ${
                    item.href !== "/" && isActive(item.href) ? "text-red-300" : "hover:text-red-300"
                  }`}
                >
                  <span>
                    {item.label}
                    <sup className="ml-1 font-mono text-xs text-cream-500">({String(i + 1).padStart(2, "0")})</sup>
                  </span>
                  <ArrowUpRight className="size-6 opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href={waLink()} target="_blank" rel="noopener" className="btn-whatsapp">
                  <WhatsAppIcon className="size-4" /> Chat on WhatsApp
                </a>
                <Link href="/cars" onClick={() => setOpen(false)} className="btn-ghost-light">Explore cars</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
