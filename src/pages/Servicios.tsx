import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Server, FileText, Calculator, Users, Check } from "lucide-react";
import serviciosHeader from "@/assets/servicios-page-header.png";

const services = [
  {
    icon: Server,
    title: "ERP & Integración",
    description: "Implementamos sistemas de gestión empresarial que centralizan tus operaciones.",
    whatWeDo: [
      "Implementación de sistemas ERP adaptados a tu negocio",
      "Integración de facturación electrónica con DGI",
      "Conexión de inventarios, ventas y contabilidad",
      "Automatización de procesos operativos",
      "Capacitación y soporte continuo",
    ],
    problem: "Tu información está dispersa en planillas y sistemas que no se comunican. Perdés tiempo buscando datos.",
    result: "Un sistema centralizado donde todo fluye: ventas, stock, facturación y contabilidad integrados.",
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
    problem: "Tu contador te entrega números que no entendés. No sabés cuánto ganás realmente.",
    result: "Reportes claros que muestran la salud real de tu negocio para decisiones estratégicas.",
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
    problem: "Pagás impuestos de más por falta de planificación. Los vencimientos te agarran desprevenido.",
    result: "Carga tributaria optimizada legalmente. Cumplimiento sin sobresaltos.",
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
    problem: "Los errores en sueldos generan conflictos. Las presentaciones a BPS y MTSS son un dolor de cabeza.",
    result: "Nóminas exactas y a tiempo. Cumplimiento laboral impecable.",
  },
];

const Servicios = () => {
  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-24">
        {/* Header Image */}
        <div className="relative h-64 md:h-80 lg:h-[420px] w-full overflow-hidden">
          <img 
            src={serviciosHeader} 
            alt="Servicios contables con tecnología dorada" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 py-16 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="line-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Soluciones que ordenan y hacen crecer
            </h1>
            <p className="text-muted-foreground">
              Cada servicio resuelve un problema concreto de tu negocio.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="container mx-auto px-4 lg:px-8 space-y-24 max-w-5xl">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <service.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  <h2 className="text-2xl font-medium text-foreground">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-8">{service.description}</p>

                <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">Qué hacemos</h3>
                <ul className="space-y-3 mb-8">
                  {service.whatWeDo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problem/Result Cards */}
              <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="p-6 rounded-lg bg-destructive/5 border border-destructive/10">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Problema que resuelve
                  </h4>
                  <p className="text-sm text-muted-foreground">{service.problem}</p>
                </div>

                <div className="p-6 rounded-lg bg-primary/5 border border-primary/10">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Resultado que genera
                  </h4>
                  <p className="text-sm text-muted-foreground">{service.result}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8 mt-32">
          <div className="max-w-xl mx-auto text-center">
            <div className="line-gold mx-auto mb-6" />
            <h2 className="text-3xl font-medium text-foreground mb-4">
              ¿Listo para ordenar tu negocio?
            </h2>
            <p className="text-muted-foreground mb-8">
              Conversemos sobre tus necesidades específicas.
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

export default Servicios;
