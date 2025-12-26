import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="font-display font-bold text-lg text-primary-foreground">F</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold text-foreground">
                  Faro del Este
                </span>
                <span className="text-xs text-muted-foreground tracking-wider uppercase">
                  Estudio Contable
                </span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Contabilidad y tecnología integradas para empresas que buscan crecer con datos,
              control financiero real y decisiones basadas en información.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +598 98 645 841
              </a>
              <a
                href="mailto:contacto@farodeeste.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                contacto@farodeeste.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Uruguay
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/enfoque"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Nuestro Enfoque
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">ERP & Integración</li>
              <li className="text-muted-foreground">Contabilidad & Reportes</li>
              <li className="text-muted-foreground">Impuestos & Planificación</li>
              <li className="text-muted-foreground">Sueldos & Gestión laboral</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Faro del Este. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Tecnología + Contabilidad = Una empresa que crece.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
