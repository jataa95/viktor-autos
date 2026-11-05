import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./BrandIcons";
import { nav, site, telLink, waLink } from "@/lib/site";

export default function Footer() {
  const socials = [
    { href: waLink(), label: "WhatsApp", Icon: WhatsAppIcon },
    { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: site.socials.tiktok, label: "TikTok", Icon: TikTokIcon },
  ];
  return (
    <footer className="relative overflow-hidden bg-cream-100 pb-20 md:pb-0">
      <div className="grid-lines text-ink-950/[0.08]" aria-hidden="true" />
      <div className="container-x relative pt-20 sm:pt-28">
        <div className="grid gap-10 border-b border-line pb-14 lg:grid-cols-3">
          <h2 className="text-5xl leading-[0.95] font-medium tracking-[-0.04em] sm:text-6xl lg:col-span-2">
            Your dream ride,
            <br />
            <span className="text-red-600">our priority.</span>
          </h2>
          <div className="flex flex-col justify-end gap-3">
            <a href={waLink()} target="_blank" rel="noopener" className="btn-whatsapp">
              <WhatsAppIcon className="size-4" /> Chat on WhatsApp
            </a>
            <a href={telLink} className="btn-outline">Call {site.phoneDisplay}</a>
          </div>
        </div>

        <div className="grid gap-10 py-14 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="label-mono text-ink-500">Contact</p>
            <a href={telLink} className="block hover:text-red-600">{site.phoneDisplay}</a>
            <a href={waLink()} target="_blank" rel="noopener" className="block hover:text-red-600">WhatsApp us</a>
            <p className="label-mono pt-4 text-ink-500">Address</p>
            <a href={site.mapsUrl} target="_blank" rel="noopener" className="block leading-relaxed hover:text-red-600">
              {site.address.line1}
              <br />
              {site.address.line2},
              <br />
              {site.address.city}, {site.address.state}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="label-mono text-ink-500">Pages</p>
              <Link href="/" className="block hover:text-red-600">Home</Link>
              {nav.map((n) => <Link key={n.href} href={n.href} className="block hover:text-red-600">{n.label}</Link>)}
            </div>
            <div className="space-y-3">
              <p className="label-mono text-ink-500">Shop</p>
              <Link href="/cars?condition=Brand+new" className="block hover:text-red-600">Brand new</Link>
              <Link href="/cars?condition=Tokunbo" className="block hover:text-red-600">Tokunbo</Link>
              <Link href="/cars?condition=Clean+9ja" className="block hover:text-red-600">Clean 9ja</Link>
              <Link href="/cars?body=SUV" className="block hover:text-red-600">SUVs</Link>
              <Link href="/cars?body=Sedan" className="block hover:text-red-600">Sedans</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="label-mono text-ink-500">Follow us</p>
            <div className="flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener" aria-label={label} className="grid size-11 place-items-center border border-line transition hover:border-red-600 hover:bg-red-600 hover:text-cream-50">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-line py-5 font-mono text-[11px] tracking-[0.04em] text-ink-500 uppercase">
          <p>© 2026 {site.name} · RC {site.rc}</p>
          <a href="#main" className="flex items-center gap-2 hover:text-ink-950">Back to top <ArrowUp className="size-3.5" /></a>
        </div>
      </div>

      {/* Giant wordmark */}
      <div aria-hidden="true" className="relative -mb-[2vw] overflow-hidden select-none">
        <p className="bg-gradient-to-b from-red-600/90 via-red-500/50 to-cream-100 bg-clip-text text-center text-[21vw] leading-[0.8] font-semibold tracking-[-0.06em] text-transparent">
          VIKTOR
        </p>
      </div>
    </footer>
  );
}
