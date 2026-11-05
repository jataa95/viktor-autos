"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { heroSlides } from "@/data/content";
import { getCar } from "@/data/cars";
import { formatPrice } from "@/lib/format";

const INTERVAL = 6000;
const slides = heroSlides.map((s) => ({ ...s, car: getCar(s.slug) })).filter((s) => s.car);
const n2 = (i) => String(i + 1).padStart(2, "0");

// "VIKTOR AUTOS" wordmark with a smooth slideshow of cut-out cars driving across in front of it.
export default function HeroShowcase({ children }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef(null);

  const go = useCallback(
    (next, direction) => {
      const target = (next + slides.length) % slides.length;
      if (target === index) return;
      setPrev(index);
      setDir(direction ?? (target > index ? 1 : -1));
      setIndex(target);
    },
    [index]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      mq.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => go(index + 1, 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, reduced, go]);

  const active = slides[index];

  function stateClass(i) {
    if (i === index) return "translate-x-0 scale-100 opacity-100";
    if (i === prev) return dir > 0 ? "-translate-x-[22%] scale-[0.94] opacity-0" : "translate-x-[22%] scale-[0.94] opacity-0";
    return dir > 0 ? "translate-x-[22%] scale-[0.94] opacity-0" : "-translate-x-[22%] scale-[0.94] opacity-0";
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured cars"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1, 1);
        if (e.key === "ArrowLeft") go(index - 1, -1);
      }}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-cream-100 pt-24"
    >
      <div className="grid-lines -z-10 text-ink-950/[0.07]" aria-hidden="true" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-cream-200 to-transparent" />

      {/* Wordmark = the page's h1 */}
      <h1
        aria-label="Viktor Autos"
        className="pointer-events-none mt-[2vh] flex items-center justify-center gap-[2.2vw] text-[12.4vw] leading-[0.8] font-semibold tracking-[-0.06em] whitespace-nowrap text-ink-950 select-none sm:mt-[4vh]"
      >
        <span aria-hidden="true">VIKTOR</span>
        <span aria-hidden="true" className="mb-[0.06em] inline-block size-[0.16em] shrink-0 bg-red-600" />
        <span aria-hidden="true">AUTOS</span>
      </h1>

      {/* Stage */}
      <div
        className="relative mx-auto -mt-[5vw] aspect-[16/8] w-[96vw] max-w-[1180px] lg:w-[min(62vw,calc((100svh-490px)*2.1))]"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div aria-hidden="true" className="absolute inset-x-[10%] bottom-[1%] h-[10%] rounded-[50%] bg-ink-950/40 blur-2xl" />
        {slides.map((s, i) => (
          <div
            key={s.slug}
            role="group"
            aria-roledescription="slide"
            aria-label={`${n2(i)} of ${slides.length}: ${s.car.year} ${s.car.make} ${s.car.model}`}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-[transform,opacity] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${stateClass(i)}`}
          >
            <Image
              src={s.image}
              alt={`${s.car.year} ${s.car.make} ${s.car.model}`}
              fill
              preload={i === 0}
              loading="eager"
              fetchPriority={i === 0 ? "high" : "low"}
              sizes="(min-width: 1024px) 64vw, 96vw"
              className="object-contain object-bottom drop-shadow-[0_30px_30px_rgb(13_11_10/0.25)]"
            />
          </div>
        ))}
      </div>

      <div className="container-x mt-auto grid gap-8 pt-6 pb-10 lg:grid-cols-3 lg:items-end lg:pb-8">
        <div className="lg:col-span-2">{children}</div>

        {/* Slide info + controls */}
        <div className="w-full border border-ink-950 bg-cream-50 lg:max-w-sm lg:justify-self-end">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-[11px] tracking-[0.06em] uppercase">
            <span aria-live="polite">
              <span className="text-red-600">{n2(index)}</span> / {n2(slides.length - 1)} · {active.car.condition}
            </span>
            <span className="flex gap-1">
              <button type="button" onClick={() => go(index - 1, -1)} aria-label="Previous car" className="grid size-8 place-items-center border border-line transition hover:border-ink-950 hover:bg-ink-950 hover:text-cream-50">
                <ArrowLeft className="size-3.5" />
              </button>
              <button type="button" onClick={() => go(index + 1, 1)} aria-label="Next car" className="grid size-8 place-items-center border border-line transition hover:border-ink-950 hover:bg-ink-950 hover:text-cream-50">
                <ArrowRight className="size-3.5" />
              </button>
            </span>
          </div>
          <Link href={`/cars/${active.slug}`} className="group flex items-end justify-between gap-4 p-4">
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium">{active.car.year} {active.car.make} {active.car.model}</span>
              <span className="mt-1 block text-2xl font-medium tracking-[-0.02em]">{formatPrice(active.car.price)}</span>
            </span>
            <span className="flex shrink-0 items-center gap-2 bg-ink-950 px-3 py-2.5 font-mono text-[11px] tracking-[0.06em] text-cream-50 uppercase transition group-hover:bg-red-600">
              View car <ArrowUpRight className="size-3.5" />
            </span>
          </Link>
          <div className="flex gap-1 px-4 pb-4" role="tablist" aria-label="Choose a car">
            {slides.map((s, i) => (
              <button
                key={s.slug}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${s.car.make} ${s.car.model}`}
                onClick={() => go(i)}
                className="relative h-6 flex-1"
              >
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-cream-300" />
                {i === index && (
                  <span
                    key={`${index}-${paused}-${reduced}`}
                    className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-red-600 ${paused || reduced ? "" : "hero-progress"}`}
                    style={{ "--hero-interval": `${INTERVAL}ms` }}
                  />
                )}
                {i < index && <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-ink-950" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
