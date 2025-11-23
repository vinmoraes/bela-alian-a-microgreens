import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Sítio Bela Aliança</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Microverdes frescos cultivados com amor em Amparo-SP.<br />
            Do nosso sítio para a sua mesa, com todo o cuidado que você merece.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
            <span>Feito com</span>
            <Heart className="w-4 h-4 fill-current text-accent" />
            <span>em 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
