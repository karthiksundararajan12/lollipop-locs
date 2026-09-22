export const WHATSAPP_URL =
  "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment";

export const INSTAGRAM_URL = "https://instagram.com/lollipoplocs";

export const ADDRESS = {
  line1: "Electronic City Phase 1",
  line2: "Anekal Taluk, Bengaluru 560105",
  full: "Electronic City Phase 1, Anekal Taluk, Bengaluru 560105",
};

export const HOURS = "Daily 8:00 AM – 10:00 PM";

export const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=Electronic+City+Phase+1,+Anekal+Taluk,+Bengaluru+560105&t=&z=15&ie=UTF8&iwloc=&output=embed";

export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Electronic+City+Phase+1,+Anekal+Taluk,+Bengaluru+560105";

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
] as const;

export const SERVICES = [
  {
    name: "Home Service Mundan",
    price: "₹3000",
    duration: "15 min",
    description: "A gentle, traditional first tonsure — we come to you.",
    icon: "Home" as const,
  },
  {
    name: "Kids Haircut",
    price: "₹499",
    duration: "30 min",
    description: "Soft, camera-ready trims without the salon fuss.",
    icon: "Scissors" as const,
  },
  {
    name: "Hair Spa",
    price: "₹899",
    duration: "45 min",
    description: "A quiet, nourishing treat for tangled little manes.",
    icon: "Sparkles" as const,
  },
  {
    name: "First Haircut Ceremony",
    price: "₹2,499",
    duration: "45 min",
    description: "A keepsake moment with calm hands and a tiny celebration.",
    icon: "Baby" as const,
  },
] as const;

export const FEATURES = [
  {
    title: "Gentle & Patient Stylists",
    description:
      "No rushing, no raised voices. Our team is trained to work at a child’s pace — snacks, stories, and extra time included.",
    icon: "HeartHandshake" as const,
  },
  {
    title: "Hygienic & Safe Products",
    description:
      "Tear-free formulas, sterilized tools, and salon-grade hygiene. Premium care without adult-salon harshness.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Fun Distraction-Free Experience",
    description:
      "Screens stay optional. Soft lighting, pastel nooks, and quiet play keep little ones settled — not overstimulated.",
    icon: "Sparkles" as const,
  },
  {
    title: "Home Service Available",
    description:
      "Mundans and first cuts at your doorstep across Electronic City. Same gentle team, zero travel tantrums.",
    icon: "Home" as const,
  },
] as const;

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1624272949900-9ae4c56397e8?auto=format&fit=crop&w=900&q=80",
    alt: "Smiling young girl with a fresh, softly layered haircut",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    alt: "Sunlit salon interior with pastel chairs and warm wood accents",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    alt: "Happy toddler laughing during a gentle salon visit",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80",
    alt: "Clean, modern salon stations ready for a kids appointment",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1552873816-636e43209957?auto=format&fit=crop&w=900&q=80",
    alt: "Smiling boy with a neat kids haircut",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    alt: "Stylist carefully cutting hair in a bright, welcoming salon",
    tall: false,
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Got my daughter's officially first haircut done here. Very happy with the makeover.",
    name: "Priya S.",
    detail: "First haircut · Electronic City",
    rating: 5,
  },
  {
    quote:
      "Great concept. Finally a salon that doesn’t treat kids like an afterthought — calm, pretty, and actually patient.",
    name: "Rahul M.",
    detail: "Kids haircut · Parent of two",
    rating: 5,
  },
  {
    quote:
      "Ya I liked very much, my kid loved the hairstyle. We’ll definitely be back.",
    name: "Ananya K.",
    detail: "Tween styling",
    rating: 5,
  },
  {
    quote:
      "Home mundan was so smooth. They arrived on time, kept everything hygienic, and my son barely noticed it was over.",
    name: "Vikram R.",
    detail: "Home service mundan",
    rating: 5,
  },
] as const;

export const STATS = [
  { label: "Google rating", value: "5.0★", icon: "Star" as const },
  { label: "Happy families", value: "11+", icon: "Users" as const },
  { label: "Open since", value: "2024", icon: "Sparkles" as const },
  { label: "Open daily", value: "8 AM–10 PM", icon: "Clock" as const },
] as const;
