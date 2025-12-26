import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Cpu, TrendingUp, FileCheck, Headphones, Factory, Truck, ShoppingBag } from "lucide-react";

const differentiators = [
  {
    icon: Cpu,
    title: "Contabilidad y tecnología integradas",
    description:
      "No somos solo contadores. Implementamos sistemas que conectan tu operación con tu información financiera.",
  },
  {
    icon: TrendingUp,
    title: "Reportes útiles para gerencia",
    description:
      "Nada de números que no entendés. Te entregamos información clara que responde tus preguntas de negocio.",
  },
  {
    icon: FileCheck,
    title: "Planificación fiscal con control",
    description:
      "No esperamos al cierre del año. Planificamos tu carga tributaria y hacemos seguimiento mes a mes.",
  },
  {
    icon: Headphones,
    title: "Acompañamiento continuo",
    description:
      "Estamos disponibles cuando nos necesitás. Respuestas rápidas, consultas ilimitadas.",
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
        <section className="container mx-auto px-4 lg:px-8 mb-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="line-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Tu aliado contable con visión tecnológica
            </h1>
            <p className="text-muted-foreground">
              Combinamos más de una década de experiencia contable con implementación de tecnología
              para que tu empresa opere con claridad.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 lg:px-8 mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <span className="text-3xl font-semibold text-foreground">
                  {stat.value}
                </span>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="line-gold-wide mt-12 max-w-xl mx-auto" />
        </section>

        {/* Differentiators */}
        <section className="container mx-auto px-4 lg:px-8 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
              Lo que nos hace diferentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg bg-card border border-border"
              >
                <item.icon className="w-5 h-5 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="container mx-auto px-4 lg:px-8 mb-32">
          <div className="p-10 rounded-lg bg-secondary/50 border border-border max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-medium text-foreground mb-6">
                  No somos un estudio contable tradicional
                </h2>
                <p className="text-muted-foreground mb-6">
                  En Faro del Este creemos que la contabilidad debe ser una herramienta de gestión,
                  no solo un requisito legal.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    Sistemas ERP que hablan con tu contabilidad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    Reportes automatizados en tiempo real
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    Facturación electrónica integrada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    Gestión documental en la nube
                  </li>
                </ul>
              </div>

              <div>
                <blockquote className="text-lg text-foreground italic border-l-2 border-accent pl-6">
                  "La tecnología sin criterio contable es un gasto. La contabilidad sin tecnología
                  es trabajo de más. Nosotros combinamos ambas."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="container mx-auto px-4 lg:px-8 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
              Sectores que atendemos
            </h2>
            <p className="text-muted-foreground">
              Experiencia comprobada en industria, servicios y comercio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="p-6 rounded-lg bg-card border border-border text-center"
              >
                <sector.icon className="w-6 h-6 text-accent mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-medium text-foreground mb-2">
                  {sector.name}
                </h3>
                <p className="text-sm text-muted-foreground">{sector.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-xl mx-auto">
            <div className="line-gold mx-auto mb-6" />
            <h2 className="text-3xl font-medium text-foreground mb-4">
              ¿Querés conocernos mejor?
            </h2>
            <p className="text-muted-foreground mb-8">
              Conversemos sobre cómo podemos ayudar a tu negocio. Sin compromiso.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
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
