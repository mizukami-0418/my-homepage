import HeroSection from "./components/hero/HeroSection";
import ProblemsSection from "./components/problems/ProblemsSection";
import ServicesSection from "./components/services/ServicesSection";
import StrengthsSection from "./components/strengths/StrengthsSection";
import WorksSection from "./components/works/WorksSection";
import PricingSection from "./components/pricing/PricingSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import SocialLinks from "./components/SocialLink";

export default function HomePage() {
  return (
    <main className="space-y-24">
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <StrengthsSection />
      <WorksSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <SocialLinks />
    </main>
  );
}
