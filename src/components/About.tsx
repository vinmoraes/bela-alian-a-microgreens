import { motion } from "framer-motion";
import aboutBackground from "@/assets/about-background.jpg";

const About = () => {
  return (
    <section 
      id="quem-somos" 
      className="py-20 md:py-32 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quem Somos
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-soft border border-white/20"
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              O <strong className="text-white">Sítio Bela Aliança</strong> nasceu do amor pela terra e pela alimentação saudável.
              Localizado em Amparo-SP, nossa propriedade familiar se dedica ao cultivo de microverdes com técnicas
              sustentáveis e respeito ao meio ambiente.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Cada bandeja é cultivada com carinho artesanal, desde a seleção das sementes até a colheita no ponto
              ideal de sabor e nutrição. Acreditamos que alimentos de verdade fazem a diferença na saúde e no
              bem-estar de quem amamos.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Nossa missão é levar até você o frescor e a vitalidade dos microverdes recém-colhidos, conectando
              campo e cidade através de uma alimentação consciente e deliciosa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
