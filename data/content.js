export const ownership = [
  {
    key: "Brand new",
    eyebrow: "Showroom fresh",
    title: "Brand new",
    text: "Zero mileage. Straight from the showroom to your driveway.",
  },
  {
    key: "Tokunbo",
    eyebrow: "Most popular",
    title: "Tokunbo",
    text: "Foreign-used cars, carefully selected for quality and value.",
  },
  {
    key: "Clean 9ja",
    eyebrow: "Smart value",
    title: "Clean 9ja",
    text: "Nigerian-used cars that are well kept and ready to drive.",
  },
];

// icon names map to lucide-react icons in components/ServiceIcon.js
export const services = [
  { icon: "car", title: "Car sales", text: "Brand new, Tokunbo and clean 9ja cars. All models, checked before they reach the lot." },
  { icon: "droplets", title: "Car wash & detailing", text: "Inside and out, from a quick wash to a full showroom detail." },
  { icon: "sparkles", title: "Waxing & polishing", text: "Deep shine that protects your paint from sun, dust and rain." },
  { icon: "sun", title: "Ceramic tints", text: "Heat rejection, privacy and a cleaner look, without the dark-glass hassle." },
  { icon: "palette", title: "Car wraps", text: "A fresh colour or finish with no respray. Gloss, matte or satin." },
  { icon: "package", title: "Accessories", text: "Seat covers, floor mats, lights, cameras and everyday upgrades." },
  { icon: "wrench", title: "Modifications", text: "Body kits, rims, exhausts and more. Make your car your own." },
];

export const whyUs = [
  {
    title: "Certified, quality cars",
    text: "Every car is inspected before it is listed. No flood cars, no surprises, no stories.",
    image: "/images/open-road.jpg",
  },
  {
    title: "Transparent pricing",
    text: "No hidden fees. The price you see is the price you discuss, with fair offers on trade-ins.",
    image: "/images/driver.jpg",
  },
  {
    title: "Fast, easy process",
    text: "Find a car, chat with us on WhatsApp, inspect and drive away. We deliver anywhere in Nigeria.",
    image: "/images/detailing.jpg",
  },
];

export const steps = [
  {
    title: "Pick your car",
    text: "Tell us your budget and what you need the car for. We listen first, then match you with cars that fit.",
    image: "/images/open-road.jpg",
    points: ["Browse the lot online", "Budget & needs chat on WhatsApp", "Sourcing for cars not yet listed", "Swap value for your current car"],
  },
  {
    title: "Inspect & test drive",
    text: "See it in person at the lot in Ijebu Ode, or get a full video walkaround if you're far away.",
    image: "/images/driver.jpg",
    points: ["Walk the lot and sit inside", "Test drive on request", "Bring your own mechanic", "Video walkarounds on WhatsApp"],
  },
  {
    title: "Pay securely",
    text: "No pressure, no hidden fees. Pay to the official company account and get every document handed over.",
    image: "/cars/bmw-7-series.jpg",
    points: ["Upfront, honest price", "Company account only", "Complete car documents", "Receipt for every payment"],
  },
  {
    title: "Drive away",
    text: "Drive off the same day, or we deliver anywhere in Nigeria. And we're still here after the sale.",
    image: "/cars/ford-expedition.jpg",
    points: ["Same-day handover", "Nationwide delivery", "Detailing & tints on request", "After-sale support"],
  },
];

// Service images for the interactive list
export const serviceImages = {
  "Car sales": "/cars/mercedes-gle-coupe.jpg",
  "Car wash & detailing": "/images/detailing.jpg",
  "Waxing & polishing": "/cars/mercedes-amg-gt.jpg",
  "Ceramic tints": "/cars/toyota-camry.jpg",
  "Car wraps": "/cars/bmw-4-series.jpg",
  Accessories: "/images/driver.jpg",
  Modifications: "/cars/bmw-m5.jpg",
};

// From the Figma design. Replace with real customer reviews (with permission).
export const testimonials = [
  {
    name: "Sandra M.",
    role: "Trader",
    rating: 5,
    quote:
      "Viktor Autos made the entire process so easy. I found a clean, well-maintained car at a great price, and the team guided me from start to finish. Highly recommended!",
  },
  {
    name: "Tope A.",
    role: "Engineer",
    rating: 5,
    quote:
      "I sold my old car through Viktor Autos and was shocked at how fast everything happened. No stress, no hidden fees, just a smooth experience.",
  },
  {
    name: "Mr. James",
    role: "Businessman",
    rating: 4,
    quote:
      "Their transparency is what stood out the most. The car I bought looked even better in person, and the inspection report gave me total confidence.",
  },
];

export const faqs = [
  {
    q: "How do I buy a car from Viktor Autos?",
    a: "Browse our cars online, then tap “Enquire on WhatsApp” on the one you like. We will send more photos and a video, answer your questions and book your inspection or delivery.",
  },
  {
    q: "Are the cars inspected before they are listed?",
    a: "Yes. Every car is checked before it reaches the lot: engine, gearbox, body, electrics and documents. You are welcome to bring your own mechanic too.",
  },
  {
    q: "Can I get help choosing a car?",
    a: "Of course. Tell us your budget and what you need the car for, and we will recommend options that fit, including cars that are on the way and not yet listed.",
  },
  {
    q: "Can I sell or swap my car with you?",
    a: "Yes. Send us your car details and a few photos. We will give you a fair offer to buy it outright, or value it as a trade-in towards another car on our lot.",
  },
  {
    q: "How long does it take to sell my car?",
    a: "Usually within days. Once we inspect your car and agree a price, payment is made immediately.",
  },
  {
    q: "How do I make payment?",
    a: "By bank transfer to the official Viktor Autos company account only. We never ask you to pay into a personal account.",
  },
  {
    q: "Do you deliver outside Ijebu Ode?",
    a: "Yes, we deliver anywhere in Nigeria. Delivery cost depends on the distance. Ask us for a quote.",
  },
];

// Hero slideshow: transparent cut-out photos in /public/hero, each linked to a car in data/cars.js.
export const heroSlides = [
  { image: "/hero/bmw-7-series.webp", slug: "bmw-7-series-750li-2020-grey", w: 1800, h: 1005 },
  { image: "/hero/mercedes-amg-gt.webp", slug: "mercedes-amg-gt-r-2019-grey", w: 1800, h: 685 },
  { image: "/hero/range-rover-sport.webp", slug: "range-rover-sport-2016-black", w: 1289, h: 1013 },
  { image: "/hero/bmw-m5.webp", slug: "bmw-m5-competition-2021-white", w: 1556, h: 846 },
  { image: "/hero/toyota-rav4.webp", slug: "toyota-rav4-2020-silver", w: 1449, h: 917 },
  { image: "/hero/toyota-camry.webp", slug: "toyota-camry-se-2019-grey", w: 1663, h: 764 },
];
