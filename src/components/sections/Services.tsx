import { Server, FileText, Calculator, Users } from "lucide-react";
import { motion } from "framer-motion";
import servicesImage from "@/assets/services-data-flow.png";
import servicesHeader from "@/assets/services-header.png";

const services = [
  {
    icon: Server,
    title: "ERP & Integración",
    description:
      "Implementamos sistemas de gestión empresarial que centralizan tus operaciones.",
    features: ["Facturación electrónica", "Gestión de inventarios", "Integración contable"],
    anchor: "erp-integracion",
  },
  {
    icon: FileText,
    title: "Contabilidad & Reportes",
    description:
      "Contabilidad precisa y reportes que permiten tomar decisiones informadas.",
    features: ["Estados financieros", "Reportes gerenciales", "Análisis de rentabilidad"],
    anchor: "contabilidad-reportes",
  },
  {
    icon: Calculator,
    title: "Impuestos & Planificación",
    description:
      "Optimización tributaria con planificación fiscal estratégica.",
    features: ["IVA e IRAE", "Planificación fiscal", "Cumplimiento DGI"],
    anchor: "impuestos-planificacion",
  },
  {
    icon: Users,
    title: "Sueldos & Gestión laboral",
    description:
      "Administración de nóminas y obligaciones laborales con exactitud.",
    features: ["Liquidación de sueldos", "BPS y MTSS", "Contratos y altas"],
    anchor: "sueldos-gestion",
  },
];

const scrollToSection = (anchor: string) => {
  const element = document.getElementById(anchor);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Services = () => {
  return (
<section id="servicios" className="relative bg-primary overflow-hidden">
      {/* Header Image */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        <img 
          src={servicesHeader} 
          alt="Business services visualization with golden technology elements" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>

      <div className="absolute inset-0 top-64 md:top-80 lg:top-96">
        <img src={servicesImage} alt="Data analytics visualization" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <div className="line-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Soluciones que ordenan y hacen crecer
          </h2>
          <p className="text-primary-foreground/70">Servicios diseñados para empresas que buscan control real.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto"
        >
          {services.map((service) => (
            <motion.button
              key={service.title}
              variants={itemVariants}
              onClick={() => scrollToSection(service.anchor)}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group p-8 rounded-lg bg-card/10 backdrop-blur-sm border border-accent/20 hover:border-accent/50 hover:bg-card/20 transition-all duration-300 text-left cursor-pointer"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 w-10 h-10 bg-accent/20 rounded-full blur-xl" />
                <service.icon className="relative w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-primary-foreground/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
