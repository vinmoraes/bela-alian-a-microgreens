import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatAre from "@/components/WhatAre";
import About from "@/components/About";
import Products from "@/components/Products";
import HowWeProduce from "@/components/HowWeProduce";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatAre />
        <About />
        <Products />
        <HowWeProduce />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
