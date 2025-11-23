import { motion } from "framer-motion";
import heroImage from "@/assets/hero-microgreens.jpg";

const Hero = () => {
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
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Microverdes Frescos
            <br />
            <span className="text-accent">Colhidos com Amor</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Do nosso sítio para a sua mesa. Cultivados em Amparo-SP com técnicas sustentáveis e carinho artesanal.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold shadow-medium hover:shadow-large transition-all"
          >
            Conheça Nossos Produtos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
