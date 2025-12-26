import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Server, FileText, Calculator, Users, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "ERP & Integración",
    description: "Implementamos y configuramos sistemas de gestión empresarial que centralizan tus operaciones.",
    whatWeDo: [
      "Implementación de sistemas ERP adaptados a tu negocio",
      "Integración de facturación electrónica con DGI",
      "Conexión de inventarios, ventas y contabilidad",
      "Automatización de procesos operativos",
      "Capacitación y soporte continuo",
    ],
    problem: "Tu información está dispersa en planillas, cuadernos y sistemas que no se comunican. Perdés tiempo buscando datos y tomás decisiones con información incompleta.",
    result: "Un sistema centralizado donde todo fluye: ventas, stock, facturación y contabilidad integrados. Información en tiempo real para decidir con datos.",
  },
  {
    icon: FileText,
    title: "Contabilidad & Reportes",
    description: "Llevamos tu contabilidad con precisión y generamos reportes útiles para la gerencia.",
    whatWeDo: [
      "Contabilidad general y analítica",
      "Estados financieros mensuales",
      "Reportes de gestión personalizados",
      "Análisis de rentabilidad por línea de negocio",
      "Dashboards con indicadores clave",
    ],
    problem: "Tu contador te entrega números que no entendés. No sabés cuánto ganás realmente ni cuáles son tus productos o servicios más rentables.",
    result: "Reportes claros que muestran la salud real de tu negocio. Información que te permite tomar decisiones estratégicas con confianza.",
  },
  {
    icon: Calculator,
    title: "Impuestos & Planificación",
    description: "Optimizamos tu carga tributaria con planificación fiscal estratégica.",
    whatWeDo: [
      "Liquidación de IVA, IRAE, IRPF e Impuesto al Patrimonio",
      "Planificación fiscal anticipada",
      "Consultoría tributaria permanente",
      "Representación ante DGI",
      "Revisión y optimización de estructura impositiva",
    ],
    problem: "Pagás impuestos de más por falta de planificación. Los vencimientos te agarran desprevenido y las multas se acumulan.",
    result: "Carga tributaria optimizada legalmente. Cumplimiento sin sobresaltos y tranquilidad fiscal todo el año.",
  },
  {
    icon: Users,
    title: "Sueldos & Gestión laboral",
    description: "Administramos nóminas y obligaciones laborales con exactitud.",
    whatWeDo: [
      "Liquidación de sueldos y aguinaldos",
      "Gestión de altas y bajas en BPS",
      "Presentaciones ante MTSS",
      "Contratos laborales y documentación",
      "Asesoramiento en temas laborales",
    ],
    problem: "Los errores en sueldos generan conflictos con empleados. Las presentaciones a BPS y MTSS son un dolor de cabeza constante.",
    result: "Nóminas exactas y a tiempo. Cumplimiento laboral impecable. Empleados conformes y menos problemas.",
  },
];

const Servicios = () => {
  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 mb-20">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Nuestros Servicios
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Soluciones que ordenan, automatizan y{" "}
              <span className="text-gradient-gold">hacen crecer</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Cada servicio está diseñado para resolver un problema concreto de tu negocio y
              generar resultados medibles. Tecnología + contabilidad trabajando juntas.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="container mx-auto px-4 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center border border-border">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-8">{service.description}</p>

                <h3 className="text-lg font-semibold text-foreground mb-4">Qué hacemos:</h3>
                <ul className="space-y-3 mb-8">
                  {service.whatWeDo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problem/Result Cards */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-destructive text-sm">!</span>
                    Qué problema resuelve
                  </h4>
                  <p className="text-muted-foreground">{service.problem}</p>
                </div>

                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</span>
                    Qué resultado genera
                  </h4>
                  <p className="text-muted-foreground">{service.result}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8 mt-24">
          <div className="relative p-12 rounded-3xl bg-card border border-border overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(43_56%_53%/0.1),transparent_60%)]" />
            
            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Listo para ordenar tu negocio?
              </h2>
              <p className="text-muted-foreground mb-8">
                Conversemos sobre tus necesidades específicas. Sin compromiso, te orientamos con gusto.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Hablemos por WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicios;
