import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div id="top">
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
