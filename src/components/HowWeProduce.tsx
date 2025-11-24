import { motion } from "framer-motion";
import { Droplets, Sun, Scissors, PackageCheck } from "lucide-react";
import greenhouseImage from "@/assets/greenhouse-production.jpg";
import microgreensBackground from "@/assets/microgreens-background.jpg";

const HowWeProduce = () => {
  const steps = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Germinação",
      description: "Sementes orgânicas selecionadas germinam em ambiente controlado com umidade e temperatura ideais",
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Crescimento",
      description: "Cultivo em estufa com luz natural e suplementar, garantindo desenvolvimento saudável e vigoroso",
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Colheita",
      description: "Colhidos manualmente no ponto perfeito de sabor e nutrição, geralmente entre 7 e 14 dias",
    },
    {
      icon: <PackageCheck className="w-8 h-8" />,
      title: "Entrega",
      description: "Embalados com cuidado e entregues frescos no mesmo dia da colheita para máxima qualidade",
    },
  ];

  return (
    <section 
      id="como-produzimos" 
      className="py-20 md:py-32 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${microgreensBackground})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como Produzimos
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Nosso processo artesanal garante qualidade, frescor e sabor incomparáveis
          </p>
        </motion.div>

        {/* Greenhouse Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-large max-w-5xl mx-auto"
        >
          <img
            src={greenhouseImage}
            alt="Nossa estufa de produção de microverdes"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Production Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-xl mb-4">
                  {step.icon}
                </div>
                <div className="absolute top-8 -right-4 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm hidden lg:flex">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto bg-gradient-sage rounded-2xl p-8 md:p-12 text-center shadow-soft"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Nosso Compromisso
          </h3>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Produzimos sem uso de agrotóxicos, com água de qualidade controlada e em ambiente
            protegido. Cada bandeja recebe atenção individual, garantindo que apenas os melhores
            microverdes cheguem até você.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeProduce;
