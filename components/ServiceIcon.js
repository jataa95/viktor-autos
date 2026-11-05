import { Car, Droplets, Package, Palette, Sparkles, Sun, Wrench } from "lucide-react";

const icons = { car: Car, droplets: Droplets, sparkles: Sparkles, sun: Sun, palette: Palette, package: Package, wrench: Wrench };

export default function ServiceIcon({ name, className = "size-5" }) {
  const Icon = icons[name] ?? Car;
  return <Icon className={className} strokeWidth={1.6} />;
}
