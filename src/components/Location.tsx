import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
const Location = () => {
  // Sítio Bela Aliança - Amparo, SP with marker
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Sítio+Bela+Aliança,Estrada+Municipal+dos+Pereiras,Amparo+SP&zoom=15&maptype=roadmap`;
  return <section id="onde-estamos" className="py-20 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Onde Estamos
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Visite-nos ou entre em contato para conhecer nossos microverdes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Entre em Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-foreground/70">
                      Sítio Bela Aliança<br />
                      Amparo, São Paulo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-foreground/70">
                      (19) 997379973
Segunda a Sexta: 8h às 17h<br />
                      Segunda a Sexta: 8h às 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  
                  <div>
                    
                    
                  </div>
                </div>
              </div>
            </div>

            
          </motion.div>

          {/* Map */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="h-full min-h-[500px]">
            <div className="bg-card rounded-2xl overflow-hidden shadow-soft h-full">
              <iframe src={mapUrl} width="100%" height="100%" style={{
              border: 0,
              minHeight: "500px"
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização do Sítio Bela Aliança" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Location;