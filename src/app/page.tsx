import AboutUs from "@/components/sections/AboutUs";
import BusinessSolutions from "@/components/sections/BusinessSolutions";
import Careers from "@/components/sections/Careers";
import Contact from "@/components/sections/Contact";
import FAQs from "@/components/sections/FAQs";
import Franchise from "@/components/sections/Franchise";
import FrovoForYou from "@/components/sections/FrovoForYou";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <FrovoForYou />
      <Franchise />
      <BusinessSolutions />
      <AboutUs />
      <Careers />
      <FAQs />
      <Contact />
    </div>
  );
}
