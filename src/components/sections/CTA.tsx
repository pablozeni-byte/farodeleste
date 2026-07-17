import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  const whatsappUrl = "https://wa.me/59898465706?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <section className="relative py-32 lg:py-40 bg-secondary/30">
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="line-gold mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Tecnología + Contabilidad
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Sin compromiso, te orientamos con gusto. Conversemos sobre cómo podemos ayudar a tu
            negocio a tomar mejores decisiones.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2 min-w-[220px]">
                <Phone className="w-4 h-4" />
                Hablemos por WhatsApp
              </Button>
            </a>
            <Link to="/contacto">
              <Button variant="navyOutline" size="lg" className="gap-2 min-w-[180px]">
                Formulario de contacto
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>Consulta sin compromiso</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>Respuesta en 24hs</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>Confidencialidad total</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
