import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Faro del Este nos ordenó la gestión laboral e implementó facturación electrónica y contabilidad integrada. Hoy trabajamos con procesos claros y tomamos decisiones con datos.",
    company: "Pastas Rossini",
    industry: "Industria Alimentaria",
  },
  {
    quote:
      "Pasamos de cero digital a un sistema de gestión completo con seguimiento fiscal y administración profesional. Ahora tenemos control real del negocio.",
    company: "Transnahuel",
    industry: "Transporte",
  },
  {
    quote:
      "El ERP implementado por Faro del Este transformó nuestra operación: ventas, inventarios, impuestos y sueldos en un mismo flujo. Más claridad, menos errores.",
    company: "Inter47",
    industry: "Manufactura",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(43_56%_53%/0.05),transparent_60%)]" />

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Casos de Éxito
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Empresas que confían en nosotros
          </h2>
          <p className="text-muted-foreground">
            Decisiones basadas en números reales. Menos caos financiero. Más control.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.company}
              className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 border border-border">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Company Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                  <span className="font-display font-bold text-primary-foreground">
                    {testimonial.company[0]}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.company}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.industry}</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
