import { Server, FileText, Calculator, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Server,
    title: "ERP & Integración",
    description:
      "Implementamos y configuramos sistemas de gestión empresarial que centralizan tus operaciones y generan información útil.",
    features: ["Facturación electrónica", "Gestión de inventarios", "Integración contable"],
  },
  {
    icon: FileText,
    title: "Contabilidad & Reportes",
    description:
      "Llevamos tu contabilidad con precisión y generamos reportes que te permiten tomar decisiones informadas.",
    features: ["Estados financieros", "Reportes gerenciales", "Análisis de rentabilidad"],
  },
  {
    icon: Calculator,
    title: "Impuestos & Planificación",
    description:
      "Optimizamos tu carga tributaria con planificación fiscal estratégica y cumplimiento normativo.",
    features: ["IVA e IRAE", "Planificación fiscal", "Cumplimiento DGI"],
  },
  {
    icon: Users,
    title: "Sueldos & Gestión laboral",
    description:
      "Administramos nóminas, obligaciones laborales y documentación del personal con exactitud.",
    features: ["Liquidación de sueldos", "BPS y MTSS", "Contratos y altas"],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_56%_53%/0.03),transparent_70%)]" />

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluciones que ordenan, automatizan y hacen crecer
          </h2>
          <div className="line-gold mx-auto max-w-xs" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_hsl(43_56%_53%/0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 border border-border group-hover:border-primary/50 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
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
                strokeWidth={2}
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
