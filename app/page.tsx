import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { FeatureExplorer } from "@/components/sections/FeatureExplorer";
import { SmartboardShowcase } from "@/components/sections/SmartboardShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StatStrip } from "@/components/sections/StatStrip";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { InstallSection } from "@/components/sections/InstallSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav />
      <Hero />
      <FeatureExplorer />
      <SmartboardShowcase />
      <HowItWorks />
      <StatStrip />
      <PrivacySection />
      <InstallSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
