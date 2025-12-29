import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-lighthouse.png";

const Hero = () => {
  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-10 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-sm text-white/90">
              Estudio Contable con enfoque tecnológico
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 animate-fade-in-up leading-tight tracking-tight">
            Contabilidad + Tecnología
            <br />
            <span className="text-white/80 font-normal">para decisiones de negocio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-12 animate-fade-in-delay-1">
            ERP, impuestos y gestión financiera para empresas que quieren crecer con datos.
          </p>

          {/* CTA Button - Only WhatsApp */}
          <div className="flex justify-center mb-8 animate-fade-in-delay-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2 min-w-[220px]">
                <Phone className="w-4 h-4" />
                Hablemos por WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust Message */}
          <p className="text-sm text-white/70 animate-fade-in-delay-3">
            Sin compromiso, te orientamos con gusto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
