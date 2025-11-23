import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-microgreens-new.jpg";
import heroImage2 from "@/assets/microgreens-1.jpg";
import heroImage3 from "@/assets/microgreens-2.jpg";

const Hero = () => {
  const slides = [
    { 
      line1: "FRESCOR, CRIATIVIDADE E SABOR!", 
      line2: "PRODUZIDO EM AMPARO SP",
      image: heroImage1
    },
    { 
      line1: "INSPIRAÇÃO DA NATUREZA NO SEU PRATO", 
      line2: "DESDE 2013",
      image: heroImage2
    },
    { 
      line1: "GRANDE SABOR EM PEQUENAS FOLHAS", 
      line2: "PRODUZIDO EM AMPARO SP",
      image: heroImage3
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt="Microverdes frescos cultivados em estufa"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-background/80" />
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
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-light leading-relaxed tracking-wide"
              >
                <span className="text-white drop-shadow-lg block mb-4">{slides[currentSlide].line1}</span>
                <span className="text-white drop-shadow-lg text-xl md:text-2xl font-bold tracking-wider">{slides[currentSlide].line2}</span>
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white/90 text-primary px-8 py-4 rounded-lg text-base font-light tracking-wide shadow-lg hover:bg-white hover:shadow-xl transition-all mt-8 backdrop-blur-sm"
          >
            Conheça Nossos Produtos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
