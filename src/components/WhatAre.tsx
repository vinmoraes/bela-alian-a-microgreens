import { motion } from "framer-motion";
import { Sprout, Heart, Leaf } from "lucide-react";

const WhatAre = () => {
  const benefits = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Nutrição Concentrada",
      description: "Até 40 vezes mais nutrientes que vegetais maduros",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sabor Intenso",
      description: "Explosão de sabores frescos e autênticos",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustentável",
      description: "Produção local com baixo impacto ambiental",
    },
  ];

  return (
    <section id="o-que-sao" className="py-20 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            O Que São Microverdes?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Microverdes são vegetais jovens colhidos logo após o desenvolvimento das primeiras folhas verdadeiras.
            Pequenos em tamanho, mas gigantes em nutrição, sabor e versatilidade culinária.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-xl mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAre;
