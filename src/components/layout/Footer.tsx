import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-md border border-accent flex items-center justify-center">
                <span className="font-semibold text-primary-foreground">F</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-medium">
                  Faro del Este
                </span>
                <span className="text-xs text-primary-foreground/60 tracking-wide">
                  Estudio Contable
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-md mb-6">
              Contabilidad y tecnología integradas para empresas que buscan crecer con datos
              y control financiero real.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                +598 98 645 841
              </a>
              <a
                href="mailto:contacto@farodeeste.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                contacto@farodeeste.com
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                Uruguay
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-6">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/enfoque"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Nuestro Enfoque
                </Link>
              </li>
              <li>
                <Link
                  to="/faro-pagos"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Faro Pagos
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-6">
              Servicios
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>ERP & Integración</li>
              <li>Contabilidad & Reportes</li>
              <li>Impuestos & Planificación</li>
              <li>Sueldos & Gestión laboral</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>
            © {currentYear} Faro del Este. Todos los derechos reservados.
          </p>
          <p>
            Tecnología + Contabilidad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
