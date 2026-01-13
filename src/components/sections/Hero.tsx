import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import heroBackground from "@/assets/hero-lighthouse.png";

const Hero = () => {
  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <section className="relative flex flex-col">
      {/* Hero Image Container */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <OptimizedImage
          src={heroBackground}
          alt="Faro del Este - Estudio contable tecnológico"
          priority={true}
          className="w-full h-full object-cover"
          containerClassName="absolute inset-0"
          placeholderColor="hsl(222 47% 11%)"
        />
        
        {/* Subtle gradient overlay at bottom for transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      {/* Text Content - Below the image */}
      <div className="bg-background py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-6 animate-fade-in-up leading-tight tracking-tight">
            Contabilidad + Tecnología
            <br />
            <span className="text-muted-foreground font-normal">para decisiones de negocio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-delay-1">
            ERP, impuestos y gestión financiera para empresas que quieren crecer con datos.
          </p>

          {/* CTA Button - Only WhatsApp */}
          <div className="flex flex-col items-center gap-4 animate-fade-in-delay-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2 min-w-[220px]">
                <Phone className="w-4 h-4" />
                Hablemos por WhatsApp
              </Button>
            </a>
            
            {/* Trust Message */}
            <p className="text-sm text-muted-foreground">
              Sin compromiso, te orientamos con gusto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
