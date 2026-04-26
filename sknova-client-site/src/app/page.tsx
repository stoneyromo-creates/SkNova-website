import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
