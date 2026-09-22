import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustGrid } from "@/components/TrustGrid";
import { ReassuranceSplit } from "@/components/ReassuranceSplit";
import { ExperienceGallery } from "@/components/ExperienceGallery";
import { Pricing } from "@/components/Pricing";
import { FirstHaircut } from "@/components/FirstHaircut";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { VisitUs } from "@/components/VisitUs";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export default function HomePage() {
  return (
    <div id="top">
      <Navbar />
      <main id="main">
        <Hero />
        <TrustGrid />
        <ReassuranceSplit />
        <ExperienceGallery />
        <Pricing />
        <FirstHaircut />
        <Testimonials />
        <FAQ />
        <VisitUs />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
