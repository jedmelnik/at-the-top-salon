export const site = {
  name: "At The Top Salon",
  shortName: "At The Top Salon",
  tagline: "Gallery / Salon in Mill Valley",
  description:
    "Look beautiful and classy at At The Top Salon - expert cuts, luminous color, and finishing in a Mill Valley gallery / salon.",
  phone: "(415) 381-3707",
  phoneHref: "tel:+14153813707",
  email: "info@atthetopsalon.com",
  emailHref: "mailto:info@atthetopsalon.com",
  bookingUrl: "https://h10.spasalon.com/904/online.asp?value=13282",
  bookingLabel: "Book an appointment",
  address: {
    street: "219 E. Blithedale Ave.",
    suite: "Suite #1",
    city: "Mill Valley",
    state: "CA",
    zip: "94941",
    full: "219 Suite #1 E. Blithedale Ave., Mill Valley, CA 94941",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=219+E+Blithedale+Ave+Suite+1,+Mill+Valley,+CA+94941",
  mapsEmbed:
    "https://www.google.com/maps?q=At+The+Top+Salon,+219+E+Blithedale+Ave,+Mill+Valley,+CA+94941&output=embed",
  mapsPlace:
    "https://www.google.com/maps/place/At+The+Top+Salon/@37.9065,-122.5453,17z",
  serviceArea: "Mill Valley and Marin County",
  sourceUrl: "https://atthetopsalon.com/",
  youtubeTour: "https://www.youtube.com/embed/6CH-Ti45dLE",
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Products", href: "/products" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

export type SocialNetwork = "facebook" | "instagram" | "google";

export const socialLinks: {
  network: SocialNetwork;
  href: string;
  label: string;
}[] = [
  {
    network: "facebook",
    href: "https://www.facebook.com/AtTheTopSalon/",
    label: "Facebook",
  },
  {
    network: "instagram",
    href: "https://www.instagram.com/atthetopsalon/",
    label: "Instagram",
  },
  {
    network: "google",
    href: "https://www.google.com/maps/place/At+The+Top+Salon/@37.9065,-122.5453,17z",
    label: "Google",
  },
];

export const services = [
  {
    slug: "haircuts",
    title: "Haircuts",
    summary:
      "Creative, progressive cuts that reflect your individuality - from precision shapes to soft, lived-in styles.",
    detail:
      "It all starts with the cut. Master stylists start at $100; prices vary by stylist. Call for a complimentary consultation.",
    image: "/images/heroes/home-beauty.jpg",
    imageAlt: "Classically finished waves after a precision cut and style",
    width: 1920,
    height: 512,
  },
  {
    slug: "color",
    title: "Expert color",
    summary:
      "Highlights, lowlights, mini color, and corrective work tuned to your features and hair history.",
    detail:
      "Partial highlight $140-$165, full highlight $165-$175, mini color (partline and hairline only) $35, mini color with blow dry $65-$69. Estimates only - visit or call for an exact quote.",
    image: "/images/heroes/services-beauty.jpg",
    imageAlt: "Luminous dimensional blonde color with a polished blowout",
    width: 1920,
    height: 512,
  },
  {
    slug: "keratin",
    title: "Keratin smoothing",
    summary:
      "Keratin Complex Hair Therapy by Coppola - certified smoothing that reduces frizz and curl while restoring shine.",
    detail:
      "Results typically last about 3 months depending on hair type. Gentle keratin protein, no harsh fumes, suitable for colored and chemically processed hair. Consultation and deposit required; about a 3-hour process. Starting at $300.",
    image: "/images/heroes/finish-beauty.jpg",
    imageAlt: "Silk-smooth finished hair with a high-gloss polish",
    width: 1920,
    height: 512,
  },
  {
    slug: "nails-gallery",
    title: "Nails, jewelry, and local art",
    summary:
      "A full-service salon with manicures and pedicures, fine jewelry, and a rotating showcase of Mill Valley artists.",
    detail:
      "We take pride in a clean, comfortable space for our community - and in supporting local makers alongside your beauty services.",
    image: "/images/heroes/atmosphere-beauty.jpg",
    imageAlt: "Elevated salon vanity with a finished updo",
    width: 1920,
    height: 512,
  },
] as const;

export const team = [
  {
    slug: "jimmy",
    name: "Jimmy O'Keefe",
    role: "Owner and founder",
    phone: null as string | null,
    image: "/images/team/jimmy.jpg",
    width: 640,
    height: 428,
    bio: "Jimmy began his career as a hairdresser 25 years ago and still cuts many of his original clients. Educated at Skyline College with advanced instruction from Framesi, Redken, and Bumble and Bumble, his forte is color and cuts - including razor work. Away from the salon he pursues theatre, films, and personal development.",
  },
  {
    slug: "alessandra",
    name: "Alessandra Nociaro",
    role: "Associate stylist",
    phone: "(415) 328-4328",
    image: "/images/team/alessandra.jpg",
    width: 439,
    height: 480,
    bio: "A perfectionist with over 30 years behind the chair, Alessandra specializes in cutting and recreating looks that fit your lifestyle. Keratin or color, she has a master's eye for natural results. Follow her on Instagram at nociaro.",
  },
  {
    slug: "wendy",
    name: "Wendy Vidor",
    role: "Associate stylist · London trained",
    phone: null as string | null,
    image: "/images/team/wendy.jpg",
    width: 491,
    height: 480,
    bio: "London-trained in cutting and color with a natural approach. Techniques include balayage, highlights, and lowlights using organic Italian color and Goldwell. Wendy also creates wedding hair on location or at the salon.",
  },
  {
    slug: "rachel",
    name: "Rachel Melton",
    role: "Associate stylist",
    phone: "(415) 497-6052",
    image: "/images/team/rachel.jpg",
    width: 559,
    height: 520,
    bio: "Rachel started her career at At The Top Salon 13 years ago and is glad to be back. She specializes in making fine hair appear thicker, uses a no-ammonia color line, and is certified in Keratin Complex. Advanced color training includes Bumble and Bumble Academy in New York City.",
  },
  {
    slug: "benny",
    name: "Benny Sammons",
    role: "Associate stylist",
    phone: "(707) 337-4145",
    image: "/images/team/benny.jpg",
    width: 240,
    height: 320,
    bio: "Benny apprenticed and worked in London's West End before coming to California. He believes a technically perfect cut still has to fit the person wearing it - a little edgy, trend-aware, or simply you. Call or text to talk about your hair.",
  },
] as const;

export const products = [
  {
    name: "Davines",
    image: "/images/products/davines.jpg",
    width: 640,
    height: 360,
    alt: "Davines hair care products on a salon shelf",
  },
  {
    name: "Redken",
    image: "/images/products/redken.jpg",
    width: 800,
    height: 457,
    alt: "Redken product range",
  },
  {
    name: "Keratin Complex",
    image: "/images/products/keratin.jpeg",
    width: 650,
    height: 433,
    alt: "Keratin Complex bottles",
  },
  {
    name: "EVO",
    image: "/images/products/evo.jpg",
    width: 800,
    height: 450,
    alt: "EVO styling products",
  },
  {
    name: "BLNDN",
    image: "/images/products/blndn.jpg",
    width: 750,
    height: 527,
    alt: "BLNDN hair care",
  },
  {
    name: "ColorProof",
    image: "/images/products/colorproof.jpg",
    width: 640,
    height: 480,
    alt: "ColorProof products",
  },
  {
    name: "Bumble and Bumble",
    image: "/images/products/bumble.jpg",
    width: 1024,
    height: 683,
    alt: "Bumble and Bumble products",
  },
  {
    name: "Style Edit",
    image: "/images/products/style-edit.jpg",
    width: 349,
    height: 305,
    alt: "Style Edit root touch-up",
  },
] as const;

export const galleryImages = [
  {
    src: "/images/gallery/IMG_5251.jpg",
    alt: "Salon styling station and mirror",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/IMG_5254.jpg",
    alt: "Product shelves inside the salon",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/IMG_5255.jpg",
    alt: "Salon interior seating area",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/IMG_5256.jpg",
    alt: "Salon workspace detail",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/IMG_5364.jpg",
    alt: "Hair finish detail",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/IMG_5367.jpg",
    alt: "Styled look at the salon",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/IMG_5368.jpg",
    alt: "Color and cut result",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/IMG_5369.jpg",
    alt: "Soft waves after styling",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/IMG_5370.jpg",
    alt: "Salon guest after service",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/IMG_5376.jpg",
    alt: "Finished blowout",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/IMG_5378.jpg",
    alt: "Salon tour photo",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/IMG_1131.jpeg",
    alt: "Additional salon gallery photo",
    width: 800,
    height: 600,
  },
] as const;

export const wellnessNotes = [
  {
    title: "Clean spaces",
    body: "We maintain high standards of cleanliness throughout the salon and at every styling station.",
  },
  {
    title: "Wellness first",
    body: "To keep our team and guests healthy, please reschedule if you are feeling unwell or experiencing symptoms of illness.",
  },
] as const;
