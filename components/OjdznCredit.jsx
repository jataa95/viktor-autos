// "Built by oj.dzn" credit strip, shown below the site footer.
export default function OjdznCredit({ from }) {
  const href = `https://ojdzn.vercel.app/${from ? `?ref=${encodeURIComponent(from)}` : ""}`;
  return (
    <div className="ojdzn-credit">
      <span>Built by</span>
      <a href={href} target="_blank" rel="noopener" aria-label="oj.dzn, view portfolio (opens in a new tab)">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/ojdzn-logo.webp" alt="oj.dzn" width={68} height={18} loading="lazy" decoding="async" />
      </a>
      <style>{`.ojdzn-credit{display:flex;justify-content:center;align-items:center;gap:.4rem;padding:.9rem 1rem 1rem;background:#0e0d0c;border-top:1px solid rgba(236,228,214,.08);color:rgba(236,228,214,.55);font-family:inherit;font-size:13px;line-height:1;letter-spacing:.02em;position:relative;z-index:1}.ojdzn-credit a{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;transition:opacity .3s}.ojdzn-credit a:hover{opacity:.75}.ojdzn-credit a:focus,.ojdzn-credit a:focus-visible,.ojdzn-credit a:active{outline:none;box-shadow:none;background:none}.ojdzn-credit img{display:block;height:18px;width:auto}@media (max-width:767px){.ojdzn-credit{padding-bottom:calc(1rem + 76px + env(safe-area-inset-bottom))}}`}</style>
    </div>
  );
}
