// Single source of truth for business details. Update here and every page follows.
export const site = {
  name: "Viktor Autos",
  legalName: "Viktor Autos Dealer",
  tagline: "Your dream ride, our priority.",
  description:
    "Brand new, Tokunbo and clean Nigerian-used cars in Ijebu Ode. Viktor Autos sells, buys and swaps cars, delivers anywhere in Nigeria, and keeps your car sharp with detailing, wraps, ceramic tints and accessories.",
  url: "https://viktorautos.com",
  rc: "7814973",
  phoneDisplay: "0816 525 5855",
  phoneE164: "+2348165255855",
  whatsapp: "2348165255855",
  address: {
    line1: "Viktor Autos Car Lot",
    line2: "Beside Ijari Central Mosque",
    city: "Ijebu Ode",
    state: "Ogun State",
    country: "NG",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Viktor+Autos+Ijari+Central+Mosque+Ijebu+Ode",
  hours: "We are actively open. Call ahead if you are coming for a specific car.",
  // From the Figma design. Replace with your real Google review average.
  rating: "4.9",
  referralReward: "₦10,000",
  // TODO: confirm these handles. The design shows Facebook, Instagram and TikTok.
  socials: {
    instagram: "https://instagram.com/viktorautos",
    facebook: "https://facebook.com/viktorautos",
    tiktok: "https://tiktok.com/@viktorautos",
  },
};

export const nav = [
  { href: "/cars", label: "Explore cars" },
  { href: "/services", label: "Services" },
  { href: "/sell", label: "Sell or swap" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function waLink(message = "Hello Viktor Autos, I'm interested in a car.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phoneE164}`;
