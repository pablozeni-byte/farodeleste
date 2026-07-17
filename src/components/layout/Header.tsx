import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFaro from "@/assets/logo-faro.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Enfoque", path: "/enfoque" },
    { name: "Faro Pagos", path: "/faro-pagos" },
    { name: "Contacto", path: "/contacto" },
  ];

  const whatsappUrl = "https://wa.me/59898465706?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoFaro} 
              alt="Faro del Este - Estudio Contable" 
              className={`h-16 md:h-20 w-auto transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors duration-200 ${
                  isScrolled
                    ? location.pathname === link.path
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                    : location.pathname === link.path
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white font-medium"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="navy" size="default" className="gap-2">
                <Phone className="w-4 h-4" />
                Hablemos
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-200 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border animate-fade-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <Button variant="navy" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Hablemos por WhatsApp
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
