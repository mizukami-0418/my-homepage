import HeroSection from "./components/hero/HeroSection";
import ProblemsSection from "./components/problems/ProblemsSection";
import ServicesSection from "./components/services/ServicesSection";
import StrengthsSection from "./components/strengths/StrengthsSection";
import WorksSection from "./components/works/WorksSection";
import PricingSection from "./components/pricing/PricingSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import SocialLinks from "./components/SocialLinks";
import { Container } from "@mui/material";

export default function HomePage() {
  return (
    <main className="space-y-24">
      <HeroSection />
      <Container
      maxWidth="lg"
      sx={{ display: "flex", flexDirection: "column", gap: 12 }}
    >

      <ProblemsSection />
      <ServicesSection />
      <StrengthsSection />
      <WorksSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <SocialLinks />
      </Container>
    </main>
  );
}
