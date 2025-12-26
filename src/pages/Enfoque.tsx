import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Cpu, TrendingUp, FileCheck, Headphones, Building2, Truck, Factory, ShoppingBag } from "lucide-react";

const differentiators = [
  {
    icon: Cpu,
    title: "Contabilidad y tecnología integradas",
    description:
      "No somos solo contadores. Implementamos sistemas que conectan tu operación con tu información financiera. Todo fluye sin doble carga de datos.",
  },
  {
    icon: TrendingUp,
    title: "Reportes útiles para gerencia",
    description:
      "Nada de números que no entendés. Te entregamos información clara que responde tus preguntas de negocio: ¿cuánto gano? ¿qué producto rinde más?",
  },
  {
    icon: FileCheck,
    title: "Planificación fiscal con control",
    description:
      "No esperamos al cierre del año para descubrir sorpresas. Planificamos tu carga tributaria y hacemos seguimiento mes a mes.",
  },
  {
    icon: Headphones,
    title: "Acompañamiento continuo",
    description:
      "Estamos disponibles cuando nos necesitás. Respuestas rápidas, consultas ilimitadas, reuniones periódicas de revisión.",
  },
];

const sectors = [
  {
    icon: Factory,
    name: "Industria",
    description: "Manufactura, producción y empresas industriales",
  },
  {
    icon: Truck,
    name: "Servicios",
    description: "Transporte, logística, consultoría y profesionales",
  },
  {
    icon: ShoppingBag,
    name: "Comercio",
    description: "Retail, distribución y comercio mayorista",
  },
];

const stats = [
  { value: "+10", label: "Años de experiencia" },
  { value: "100%", label: "Procesos digitales" },
  { value: "24hs", label: "Tiempo de respuesta" },
  { value: "3", label: "Sectores especializados" },
];

const Enfoque = () => {
  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Nuestro Enfoque
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Somos tu aliado contable con{" "}
              <span className="text-gradient-gold">visión tecnológica</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Combinamos más de una década de experiencia contable con implementación de tecnología
              para que tu empresa opere con claridad, eficiencia y datos reales.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 lg:px-8 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <span className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
                  {stat.value}
                </span>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Differentiators */}
        <section className="container mx-auto px-4 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lo que nos hace diferentes
            </h2>
            <div className="line-gold mx-auto max-w-xs" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-card/60 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 border border-border">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="container mx-auto px-4 lg:px-8 mb-24">
          <div className="relative p-12 rounded-3xl bg-secondary/50 border border-border overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(43_56%_53%/0.08),transparent_60%)]" />
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  No somos un estudio contable tradicional
                </h2>
                <p className="text-muted-foreground mb-6">
                  En Faro del Este creemos que la contabilidad debe ser una herramienta de gestión,
                  no solo un requisito legal. Por eso integramos tecnología en cada proceso:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Sistemas ERP que hablan con tu contabilidad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Reportes automatizados en tiempo real
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Facturación electrónica integrada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Gestión documental en la nube
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <blockquote className="text-xl font-display text-foreground italic mb-4">
                    "La tecnología sin criterio contable es un gasto. La contabilidad sin tecnología
                    es trabajo de más. Nosotros combinamos ambas."
                  </blockquote>
                  <p className="text-primary font-medium">— Filosofía Faro del Este</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="container mx-auto px-4 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sectores que atendemos
            </h2>
            <p className="text-muted-foreground">
              Experiencia comprobada en industria, servicios y comercio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold mx-auto flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <sector.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {sector.name}
                </h3>
                <p className="text-sm text-muted-foreground">{sector.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Querés conocernos mejor?
            </h2>
            <p className="text-muted-foreground mb-8">
              Conversemos sobre cómo podemos ayudar a tu negocio. Sin compromiso.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Hablemos por WhatsApp
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Enfoque;
