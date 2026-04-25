import HeroSection from "./components/hero/HeroSection";
import ProblemsSection from "./components/problems/ProblemsSection";
import ServicesSection from "./components/services/ServicesSection";
import StrengthsSection from "./components/strengths/StrengthsSection";
import WorksSection from "./components/works/WorksSection";
import PricingSection from "./components/pricing/PricingSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import { BlogLink } from "./components/blog/BlogLink";
import { TargetAudienceSection } from "./components/audience/TargetAudienceSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TargetAudienceSection />
      <ProblemsSection />
      <AboutSection />
      <ServicesSection />
      <StrengthsSection />
      <WorksSection />
      <PricingSection />
      <BlogLink />
      <ContactSection />
    </main>
  );
}
