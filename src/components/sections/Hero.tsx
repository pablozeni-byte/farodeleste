import { Phone, ArrowRight, BarChart3, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43_56%_53%/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(222_47%_15%/0.5),transparent_60%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container relative mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Estudio Contable con enfoque tecnológico
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight">
            Contabilidad +{" "}
            <span className="text-gradient-gold">Tecnología</span>
            <br />
            para decisiones de negocio
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delay-1">
            ERP, impuestos y gestión financiera para empresas que quieren crecer con datos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-delay-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2 min-w-[240px]">
                <Phone className="w-5 h-5" />
                Hablemos por WhatsApp
              </Button>
            </a>
            <a href="#servicios">
              <Button variant="goldOutline" size="lg" className="gap-2 min-w-[200px]">
                Ver servicios
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Trust Message */}
          <p className="text-sm text-muted-foreground animate-fade-in-delay-3">
            Sin compromiso, te orientamos con gusto.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in-delay-3">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3 border border-border">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground">+10</span>
              <span className="text-sm text-muted-foreground">Años de experiencia</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3 border border-border">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground">100%</span>
              <span className="text-sm text-muted-foreground">Confidencialidad</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3 border border-border">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground">24/7</span>
              <span className="text-sm text-muted-foreground">Soporte continuo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
