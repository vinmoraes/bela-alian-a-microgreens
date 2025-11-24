import { motion } from "framer-motion";
import productPlaceholder from "@/assets/product-placeholder.jpg";
interface Product {
  name: string;
  description: string;
  uses: string;
  prices: {
    weight: string;
    price: string;
  }[];
  color: string;
}
const Products = () => {
  const products: Product[] = [{
    name: "Rabanete",
    description: "Sabor picante e marcante, perfeito para adicionar personalidade aos pratos",
    uses: "Saladas, sanduíches, tacos, pratos asiáticos",
    prices: [{
      weight: "40g",
      price: "R$ 12,00"
    }, {
      weight: "100g",
      price: "R$ 25,00"
    }],
    color: "from-red-500/20 to-pink-500/20"
  }, {
    name: "Rúcula",
    description: "Sabor levemente picante e aromático, ideal para paladares refinados",
    uses: "Saladas gourmet, pizzas, massas, risoto",
    prices: [{
      weight: "40g",
      price: "R$ 10,00"
    }, {
      weight: "100g",
      price: "R$ 22,00"
    }],
    color: "from-green-600/20 to-green-500/20"
  }, {
    name: "Girassol",
    description: "Sabor suave e levemente adocicado, com textura crocante",
    uses: "Saladas, wraps, sucos verdes, bowls",
    prices: [{
      weight: "40g",
      price: "R$ 11,00"
    }, {
      weight: "100g",
      price: "R$ 24,00"
    }],
    color: "from-yellow-500/20 to-amber-500/20"
  }, {
    name: "Brócolis",
    description: "Rico sabor de brócolis concentrado, nutritivo e versátil",
    uses: "Sucos detox, saladas, pratos quentes, omeletes",
    prices: [{
      weight: "40g",
      price: "R$ 13,00"
    }, {
      weight: "100g",
      price: "R$ 28,00"
    }],
    color: "from-emerald-600/20 to-green-600/20"
  }, {
    name: "Beterraba",
    description: "Sabor terroso e adocicado, cor vibrante que realça qualquer prato",
    uses: "Saladas coloridas, decoração, sucos, bowls",
    prices: [{
      weight: "40g",
      price: "R$ 14,00"
    }, {
      weight: "100g",
      price: "R$ 30,00"
    }],
    color: "from-purple-600/20 to-fuchsia-600/20"
  }, {
    name: "Mostarda",
    description: "Sabor intenso e picante, para quem aprecia temperos marcantes",
    uses: "Sanduíches gourmet, carnes, saladas asiáticas",
    prices: [{
      weight: "40g",
      price: "R$ 11,00"
    }, {
      weight: "100g",
      price: "R$ 23,00"
    }],
    color: "from-lime-500/20 to-green-500/20"
  }, {
    name: "Repolho Roxo",
    description: "Sabor suave e adocicado com coloração vibrante roxa",
    uses: "Saladas coloridas, decoração de pratos, wraps, bowls",
    prices: [{
      weight: "40g",
      price: "R$ 12,00"
    }, {
      weight: "100g",
      price: "R$ 26,00"
    }],
    color: "from-violet-600/20 to-purple-600/20"
  }, {
    name: "Agrião Apimentado",
    description: "Sabor picante e intenso, perfeito para adicionar um toque especial",
    uses: "Saladas, sanduíches, pizzas, pratos quentes",
    prices: [{
      weight: "40g",
      price: "R$ 13,00"
    }, {
      weight: "100g",
      price: "R$ 27,00"
    }],
    color: "from-emerald-700/20 to-red-600/20"
  }];
  return <section id="produtos" className="py-20 md:py-32 bg-gradient-warm">
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
            Os Nossos Produtos
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Variedades selecionadas, cultivadas com dedicação e colhidas no momento perfeito
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => <motion.div key={product.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all">
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src={productPlaceholder} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
              <div className={`h-2 w-full bg-gradient-to-r ${product.color}`} />
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {product.name}
              </h3>
              
              <p className="text-foreground/70 mb-3 text-sm leading-relaxed">
                {product.description}
              </p>
              
              <div className="mb-3">
                <h4 className="text-xs font-semibold text-primary mb-1">Como Utilizar:</h4>
                <p className="text-xs text-foreground/70">{product.uses}</p>
              </div>
              
              <div className="border-t border-border pt-3">
                <h4 className="text-xs font-semibold text-primary mb-2">Preços:</h4>
                <div className="flex gap-2">
                  {product.prices.map(price => <div key={price.weight} className="flex-1">
                      <div className="bg-muted rounded-lg p-2 text-center">
                        <div className="text-xs text-muted-foreground mb-1">{price.weight}</div>
                        <div className="text-sm font-bold text-primary">{price.price}</div>
                      </div>
                    </div>)}
                </div>
              </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Products;