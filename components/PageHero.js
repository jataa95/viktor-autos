import Image from "next/image";

export default function PageHero({ eyebrow, title, lede, image, imageAlt = "", children }) {
  return (
    <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-ink-950 pt-32 pb-14 text-cream-50 sm:pb-20">
      {image && (
        <>
          <Image src={image} alt={imageAlt} fill preload sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/20" />
        </>
      )}
      <div className="grid-lines -z-10 text-cream-50/[0.08]" aria-hidden="true" />
      <div className="container-x grid gap-8 lg:grid-cols-3 lg:items-end">
        <div className="lg:col-span-2">
          <p className="label-mono text-red-300">({eyebrow})</p>
          <h1 className="mt-4 text-5xl leading-[0.95] font-medium tracking-[-0.045em] sm:text-7xl">{title}</h1>
        </div>
        <div>
          {lede && <p className="max-w-md text-cream-300">{lede}</p>}
          {children && <div className="mt-6 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </div>
      </div>
    </section>
  );
}
