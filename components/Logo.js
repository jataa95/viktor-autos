import Image from "next/image";
import Link from "next/link";

export default function Logo({ variant = "dark", className = "h-12 w-auto" }) {
  const src = variant === "light" ? "/brand/logo-light.png" : "/brand/logo-dark.png";
  return (
    <Link href="/" aria-label="Viktor Autos home" className="inline-flex shrink-0 items-center">
      <Image src={src} alt="Viktor Autos Dealer" width={427} height={409} className={className} preload />
    </Link>
  );
}
