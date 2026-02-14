import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { CitizensSection } from "@/components/CitizensSection";
import { BusinessSection } from "@/components/BusinessSection";
import { GovernmentSection } from "@/components/GovernmentSection";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <CitizensSection />
      <BusinessSection />
      <GovernmentSection />
      <ContactFooter />
    </main>
  );
}
