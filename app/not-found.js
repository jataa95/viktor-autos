import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-center pt-40 pb-28 text-center">
      <p className="text-9xl font-medium tracking-[-0.06em] text-red-600">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">This page took a wrong turn.</h1>
      <p className="mt-3 text-ink-600">The car or page you&apos;re looking for may have been sold or moved.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/cars" className="btn-primary">Browse cars</Link>
        <Link href="/" className="btn-outline">Go home</Link>
      </div>
    </section>
  );
}
