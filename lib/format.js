const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export const formatPrice = (n) => naira.format(n).replace("NGN", "₦").replace(/\s/g, "");

export function formatPriceShort(n) {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `₦${Number.isInteger(m) ? m : m.toFixed(1)}M`;
  }
  return formatPrice(n);
}

export const formatKm = (n) => (n === 0 ? "0 km" : `${new Intl.NumberFormat("en-NG").format(n)} km`);
