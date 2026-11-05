import { cars } from "@/data/cars";
import { site } from "@/lib/site";

export default function sitemap() {
  const pages = ["", "/cars", "/services", "/sell", "/about", "/contact"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: p === "/cars" ? "daily" : "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
  return [...pages, ...cars.map((c) => ({ url: `${site.url}/cars/${c.slug}`, changeFrequency: "weekly", priority: 0.7 }))];
}
