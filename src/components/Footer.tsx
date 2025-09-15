import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Escola de Automação" className="h-12 w-auto filter invert" />
          </div>
          <p className="font-advent-pro text-sm text-muted max-w-2xl mx-auto">
            © 2024 Escola de Automação. Todos os direitos reservados. 
            A primeira e maior escola de automação e inteligência artificial do Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;