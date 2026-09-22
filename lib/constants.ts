export const PHONE_DISPLAY = "+91 XXXXX XXXXX";
export const PHONE_TEL = "tel:+91XXXXXXXXXX";

export const WHATSAPP_MESSAGE =
  "Hi Lollipop Locs! I'd like to book a kids haircut at your Electronic City salon.";

export const WHATSAPP_URL = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Lollipop+Locs+Electronic+City+Bengaluru";

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Lollipop+Locs+Electronic+City+Bengaluru";

export const SOCIAL = {
  instagram: "https://instagram.com/lollipoplocs",
  facebook: "https://facebook.com/lollipoplocs",
  youtube: "https://youtube.com/@lollipoplocs",
} as const;

export const ADDRESS = {
  line1: "Electronic City Phase 1",
  line2: "Near Infosys Campus, Bengaluru 560100",
  full: "Electronic City Phase 1, Near Infosys Campus, Bengaluru 560100",
};

export const HOURS = [
  { days: "Mon – Fri", time: "10:30 AM – 8:00 PM" },
  { days: "Sat – Sun", time: "10:00 AM – 9:00 PM" },
] as const;

export const NAV_LINKS = [
  { href: "#why-us", label: "Why Us" },
  { href: "#experience", label: "Our Experience" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faqs", label: "FAQs" },
  { href: "#visit", label: "Visit Us" },
] as const;

export const IMAGES = {
  hero: {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=80",
    alt: "Happy toddler smiling in a bright, playful salon setting at Lollipop Locs",
  },
  reassurance: {
    src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1400&q=80",
    alt: "Relaxed parent sitting with a young child, the way families settle in at Lollipop Locs",
  },
  combo: {
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1200&q=80",
    alt: "Parent and child together, ready for a parent-plus-child haircut combo",
  },
  firstHaircut: {
    src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1400&q=80",
    alt: "Sleeping baby — a first haircut milestone waiting to be celebrated",
  },
  storefront: {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=80",
    alt: "Bright salon interior standing in for the Lollipop Locs Electronic City storefront",
  },
  finalCta: {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=80",
    alt: "Joyful child with a bright smile after a haircut",
  },
} as const;

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=80",
    alt: "Colourful candy-shop interior standing in for the Lollipop Locs candyland salon",
    caption: "A Candyland Experience",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    alt: "Red sports car used as a placeholder for the kids car haircut chair",
    caption: "Car Chair",
  },
  {
    src: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?auto=format&fit=crop&w=900&q=80",
    alt: "Pastel unicorn toy standing in for the unicorn themed haircut chair",
    caption: "Unicorn Chair",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    alt: "Airplane in the sky standing in for the airplane themed haircut chair",
    caption: "Airplane Chair",
  },
  {
    src: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80",
    alt: "Young boy with a neat, freshly finished kids haircut",
    caption: "Boys Haircuts",
  },
  {
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=900&q=80",
    alt: "Stylist carefully cutting hair — placeholder for girls haircuts at the salon",
    caption: "Girls Haircuts",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    alt: "Sunlit salon stations showing the finish of a kids haircut transformation",
    caption: "Before & After",
  },
] as const;

export const TRUST_ITEMS = [
  {
    title: "Patient Kids' Stylists",
    description: "Trained to work at your child's pace — extra time is built in.",
    icon: "HeartHandshake" as const,
    tone: "blue" as const,
  },
  {
    title: "Themed Chairs",
    description: "Unicorn, car, and airplane seats that turn a trim into an adventure.",
    icon: "Armchair" as const,
    tone: "peach" as const,
  },
  {
    title: "Toys & Distractions",
    description: "Gentle toys and screens so little heads stay happily still.",
    icon: "Puzzle" as const,
    tone: "lavender" as const,
  },
  {
    title: "Play Area",
    description: "A dedicated corner to explore before they ever sit down.",
    icon: "Gamepad2" as const,
    tone: "mint" as const,
  },
  {
    title: "Kid-Friendly Products",
    description: "Tear-free formulas and gentle products made for young scalps.",
    icon: "Sparkles" as const,
    tone: "lemon" as const,
  },
] as const;

export const HERO_TRUST = [
  { label: "Patient Stylists", icon: "HeartHandshake" as const },
  { label: "Themed Chairs", icon: "Armchair" as const },
  { label: "Play Area", icon: "Gamepad2" as const },
  { label: "Kid-Friendly Products", icon: "Sparkles" as const },
] as const;

export const PRICING = {
  kids: [
    {
      title: "Boys",
      items: [
        { name: "Haircut", price: "₹899" },
        { name: "Haircut & Wash", price: "₹1,199" },
      ],
    },
    {
      title: "Girls",
      items: [
        { name: "Haircut", price: "₹999" },
        { name: "Haircut & Wash", price: "₹1,399" },
      ],
    },
  ],
  combos: [
    { name: "Dad + Son", price: "₹1,799" },
    { name: "Mom + Son", price: "₹1,899" },
    { name: "Dad + Daughter", price: "₹1,899" },
    { name: "Mom + Daughter", price: "₹1,999" },
  ],
} as const;

export const TESTIMONIALS = [
  {
    name: "Meera R.",
    quote:
      "My 3-year-old lasted a full haircut for the first time. The unicorn chair and the stylist's patience made all the difference.",
  },
  {
    name: "Arjun P.",
    quote:
      "We live in Electronic City and finally found a kids salon that doesn't rush. He played first, then sat happily.",
  },
  {
    name: "Sneha K.",
    quote:
      "Brought a reference photo for my daughter's layers — they nailed it. She hasn't stopped looking in the mirror.",
  },
] as const;

export const FAQS = [
  {
    question: "What if my child starts crying during the haircut?",
    answer:
      "That's completely normal — and we never force a cut. We pause, play, and try again when they're ready. Many kids settle after exploring the chairs and the play area first.",
  },
  {
    question: "Do you cut hair for babies and first haircuts?",
    answer:
      "Yes. First haircuts are one of the moments we're built for. Extra time is reserved, parents stay close, and you can add a personalised First Haircut Certificate for ₹899.",
  },
  {
    question: "Can I stay beside my child during the haircut?",
    answer:
      "Always. Sit right next to them — no glass partitions, no waiting outside. Your presence is part of how we keep little ones comfortable.",
  },
  {
    question: "Can my child choose a themed chair?",
    answer:
      "Yes — unicorn, car, or airplane, subject to availability. Mention a preference when you book on WhatsApp and we'll do our best to hold it.",
  },
  {
    question: "Can I bring a reference photo of the haircut I want?",
    answer:
      "Please do. WhatsApp it ahead of your visit or show us in the salon. Cute salon, serious haircuts — we work from the photo you love.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Walk-ins are welcome when a chair is free, but we strongly recommend booking on WhatsApp. That way we can hold a themed chair and extra time for your child.",
  },
] as const;
