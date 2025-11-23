import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-microgreens-new.jpg";

const Hero = () => {
  const phrases = [
    { line1: "FRESCOR, CRIATIVIDADE E SABOR!", line2: "PRODUZIDO EM AMPARO SP" },
    { line1: "INSPIRAÇÃO DA NATUREZA NO SEU PRATO", line2: "DESDE 2013" },
    { line1: "GRANDE SABOR EM PEQUENAS FOLHAS", line2: "PRODUZIDO EM AMPARO SP" }
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Microverdes frescos cultivados em estufa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="min-h-[200px] md:min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentPhrase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                <span className="text-primary block mb-4">{phrases[currentPhrase].line1}</span>
                <span className="text-accent">{phrases[currentPhrase].line2}</span>
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold shadow-medium hover:shadow-large transition-all mt-8"
          >
            Conheça Nossos Produtos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
