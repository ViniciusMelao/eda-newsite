import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Escola de Automação" className="h-8 w-auto" />
          </div>
          <Button variant="default" className="font-montserrat font-semibold">
            Quero Fazer Parte
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;