import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="container relative mx-auto px-4 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 mb-10 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-sm text-muted-foreground">
              Estudio Contable con enfoque tecnológico
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-6 animate-fade-in-up leading-tight tracking-tight">
            Contabilidad + Tecnología
            <br />
            <span className="text-muted-foreground font-normal">para decisiones de negocio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 animate-fade-in-delay-1">
            ERP, impuestos y gestión financiera para empresas que quieren crecer con datos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-delay-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2 min-w-[220px]">
                <Phone className="w-4 h-4" />
                Hablemos por WhatsApp
              </Button>
            </a>
            <a href="#servicios">
              <Button variant="navyOutline" size="lg" className="gap-2 min-w-[180px]">
                Ver servicios
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Trust Message */}
          <p className="text-sm text-muted-foreground animate-fade-in-delay-3">
            Sin compromiso, te orientamos con gusto.
          </p>
        </div>

        {/* Minimal Stats */}
        <div className="max-w-2xl mx-auto mt-24 animate-fade-in-delay-3">
          <div className="line-gold-wide mb-12" />
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-3xl font-semibold text-foreground">+10</span>
              <p className="text-sm text-muted-foreground mt-1">Años</p>
            </div>
            <div>
              <span className="text-3xl font-semibold text-foreground">100%</span>
              <p className="text-sm text-muted-foreground mt-1">Digital</p>
            </div>
            <div>
              <span className="text-3xl font-semibold text-foreground">24/7</span>
              <p className="text-sm text-muted-foreground mt-1">Soporte</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
