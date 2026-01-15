import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Server, FileText, Calculator, Users, Check, CircuitBoard, Sparkles } from "lucide-react";
import serviciosHeader from "@/assets/servicios-page-header.png";
import { motion } from "framer-motion";

const services = [
  {
    id: "erp-integracion",
    icon: Server,
    title: "ERP & Integración",
    description: "Implementamos sistemas de gestión empresarial que centralizan tus operaciones.",
    benefits: [
      "Sistemas ERP adaptados a tu negocio",
      "Facturación electrónica integrada con DGI",
      "Inventarios, ventas y contabilidad conectados",
      "Procesos operativos automatizados",
      "Capacitación y soporte continuo",
    ],
    problem: "Tu información está dispersa en planillas y sistemas que no se comunican. Perdés tiempo buscando datos.",
    result: "Un sistema centralizado donde todo fluye: ventas, stock, facturación y contabilidad integrados.",
  },
  {
    id: "contabilidad-reportes",
    icon: FileText,
    title: "Contabilidad & Reportes",
    description: "Llevamos tu contabilidad con precisión y generamos reportes útiles para la gerencia.",
    benefits: [
      "Contabilidad general y analítica",
      "Estados financieros mensuales",
      "Reportes de gestión personalizados",
      "Análisis de rentabilidad por línea",
      "Dashboards con indicadores clave",
    ],
    problem: "Tu contador te entrega números que no entendés. No sabés cuánto ganás realmente.",
    result: "Reportes claros que muestran la salud real de tu negocio para decisiones estratégicas.",
  },
  {
    id: "impuestos-planificacion",
    icon: Calculator,
    title: "Impuestos & Planificación",
    description: "Optimizamos tu carga tributaria con planificación fiscal estratégica.",
    benefits: [
      "Liquidación de IVA, IRAE, IRPF e IP",
      "Planificación fiscal anticipada",
      "Consultoría tributaria permanente",
      "Representación ante DGI",
      "Optimización de estructura impositiva",
    ],
    problem: "Pagás impuestos de más por falta de planificación. Los vencimientos te agarran desprevenido.",
    result: "Carga tributaria optimizada legalmente. Cumplimiento sin sobresaltos.",
  },
  {
    id: "sueldos-gestion",
    icon: Users,
    title: "Sueldos & Gestión laboral",
    description: "Administramos nóminas y obligaciones laborales con exactitud.",
    benefits: [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Servicios = () => {
  const location = useLocation();
  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

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
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        </div>

        {/* Hero Section */}
        <motion.section 
          className="container mx-auto px-4 lg:px-8 py-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="line-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Soluciones que ordenan y hacen crecer
            </h1>
            <p className="text-muted-foreground">
              Cada servicio resuelve un problema concreto de tu negocio.
            </p>
          </div>
        </motion.section>

        {/* Services List - Enhanced Independent Blocks */}
        <motion.section 
          className="container mx-auto px-4 lg:px-8 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.id}
                variants={itemVariants}
                className="relative scroll-mt-24">
                {/* Service Block Container */}
                <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-border overflow-hidden">
                  {/* Background decorative elements */}
                  <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                    <CircuitBoard className="w-full h-full text-accent" strokeWidth={0.5} />
                  </div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 opacity-5 rotate-180">
                    <CircuitBoard className="w-full h-full text-accent" strokeWidth={0.5} />
                  </div>

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

                  <div className="relative z-10 p-8 md:p-12">
                    {/* Service Header with Large Icon */}
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
                      {/* Large Icon Container */}
                      <div className="flex-shrink-0">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-accent/30 flex items-center justify-center">
                          <service.icon className="w-10 h-10 md:w-12 md:h-12 text-accent" strokeWidth={1.5} />
                          {/* Corner accents */}
                          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent/50 rounded-tl-lg" />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent/50 rounded-br-lg" />
                        </div>
                      </div>

                      {/* Title and Description */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-4 h-4 text-accent" strokeWidth={1.5} />
                          <span className="text-xs uppercase tracking-widest text-accent font-medium">
                            Servicio {index + 1}
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                          {service.title}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                      {/* Benefits List */}
                      <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                        <h3 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wide flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          Qué incluye
                        </h3>
                        <ul className="space-y-4">
                          {service.benefits.map((item) => (
                            <li key={item} className="flex items-start gap-3 group">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mt-0.5 group-hover:bg-accent/20 transition-colors">
                                <Check className="w-3 h-3 text-accent" strokeWidth={2} />
                              </div>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Problem/Result Cards */}
                      <div className="space-y-4">
                        {/* Problem Card */}
                        <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-destructive/60" />
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                              Problema que resuelve
                            </h4>
                          </div>
                          <p className="text-muted-foreground">{service.problem}</p>
                        </div>

                        {/* Result Card */}
                        <div className="p-6 rounded-xl bg-primary/5 border border-accent/20">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                              Resultado que genera
                            </h4>
                          </div>
                          <p className="text-muted-foreground">{service.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom decorative dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                  </div>
                </div>

                {/* Connector line between services (except last) */}
                {index < services.length - 1 && (
                  <div className="hidden md:flex justify-center py-8">
                    <div className="w-px h-12 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="container mx-auto px-4 lg:px-8 mt-24 md:mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicios;
