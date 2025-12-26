import { Server, FileText, Calculator, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Server,
    title: "ERP & Integración",
    description:
      "Implementamos sistemas de gestión empresarial que centralizan tus operaciones.",
    features: ["Facturación electrónica", "Gestión de inventarios", "Integración contable"],
  },
  {
    icon: FileText,
    title: "Contabilidad & Reportes",
    description:
      "Contabilidad precisa y reportes que permiten tomar decisiones informadas.",
    features: ["Estados financieros", "Reportes gerenciales", "Análisis de rentabilidad"],
  },
  {
    icon: Calculator,
    title: "Impuestos & Planificación",
    description:
      "Optimización tributaria con planificación fiscal estratégica.",
    features: ["IVA e IRAE", "Planificación fiscal", "Cumplimiento DGI"],
  },
  {
    icon: Users,
    title: "Sueldos & Gestión laboral",
    description:
      "Administración de nóminas y obligaciones laborales con exactitud.",
    features: ["Liquidación de sueldos", "BPS y MTSS", "Contratos y altas"],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="relative py-32 lg:py-40 bg-background">
      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="line-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Soluciones que ordenan y hacen crecer
          </h2>
          <p className="text-muted-foreground">
            Servicios diseñados para empresas que buscan control real.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors duration-300"
            >
              {/* Icon */}
              <service.icon className="w-6 h-6 text-accent mb-6" strokeWidth={1.5} />

              {/* Content */}
              <h3 className="text-lg font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-sm text-foreground font-medium hover:text-accent transition-colors"
          >
            Ver todos los servicios en detalle
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
