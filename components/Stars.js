import { Star } from "lucide-react";

export default function Stars({ value = 5, className = "size-4" }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} out of 5 stars`} role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${className} ${i < value ? "fill-amber-400 text-amber-400" : "fill-cream-300 text-cream-300"}`}
        />
      ))}
    </div>
  );
}
