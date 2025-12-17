import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import AIFeature from "@/components/landing/AIFeature";
import CodeExample from "@/components/landing/CodeExample";
import Pricing from "@/components/landing/Pricing";
import Audience from "@/components/landing/Audience";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Features />
      <AIFeature />
      <CodeExample />
      <Pricing />
      <Audience />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
