# Viktor Autos

Website for **Viktor Autos**, a car dealer in Ijebu Ode, Ogun State: brand new, Tokunbo and clean 9ja cars, sell / buy / swap, and car services (detailing, tints, wraps, accessories, modifications).

Built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Update the content

| What | Where |
| --- | --- |
| Phone, WhatsApp, address, RC number, socials, rating | `lib/site.js` |
| Cars for sale (price, specs, photos, status) | `data/cars.js` + photos in `public/cars/` |
| Services, FAQs, testimonials, "how it works" steps | `data/content.js` |
| Colours, fonts, buttons (the design library) | `app/globals.css` (`@theme` + `@utility` blocks) |
| Logo | `public/brand/logo-dark.png`, `public/brand/logo-light.png` |

**Adding a car:** put the photos in `public/cars/`, then add an entry to the `cars` array in `data/cars.js`. Set `featured: true` to show it on the home page, and `status` to `"Reserved"` or `"Sold"` when needed. The listing, filters, detail page, sitemap and WhatsApp messages update automatically.

> The current inventory, testimonials and stock photos are **samples**. Replace them with real cars, real photos from the lot and real customer reviews before launch.

## How enquiries work

There is no backend. Every "Enquire", "Book", "Swap" and form button opens WhatsApp (`wa.me/2348165255855`) with a message already filled in, including the car name and price, so leads land directly in the business WhatsApp.

## Pages

- `/`: home
- `/cars`: inventory with filters (brand, type, condition, budget, sort). Filters are in the URL, so they can be shared.
- `/cars/[slug]`: car details with specs, highlights, and WhatsApp / call / inspection / swap actions
- `/sell`: sell or swap form
- `/services`, `/about`, `/contact`
- `sitemap.xml`, `robots.txt`, and structured data (AutoDealer + Car) for search engines

## Design

Off-white and subtle red, with warm ink for text and the dark sections. Editorial grid layout with fine column lines, square corners, Geist / Geist Mono type.

## Photo credits

The sample car and lifestyle photos are from [Unsplash](https://unsplash.com) (Unsplash License).
