const testimonials = [
  {
    quote:
      "Faro del Este nos ordenó la gestión laboral e implementó facturación electrónica y contabilidad integrada. Hoy trabajamos con procesos claros.",
    company: "Pastas Rossini",
    industry: "Industria Alimentaria",
  },
  {
    quote:
      "Pasamos de cero digital a un sistema de gestión completo con seguimiento fiscal. Ahora tenemos control real del negocio.",
    company: "Transnahuel",
    industry: "Transporte",
  },
  {
    quote:
      "El ERP transformó nuestra operación: ventas, inventarios, impuestos y sueldos en un mismo flujo. Más claridad, menos errores.",
    company: "Inter47",
    industry: "Manufactura",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-32 lg:py-40 bg-background">
      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="line-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Empresas que confían en nosotros
          </h2>
          <p className="text-muted-foreground">
            Decisiones basadas en números reales.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.company}
              className="p-8 rounded-lg bg-card border border-border"
            >
              {/* Quote Text */}
              <blockquote className="text-foreground text-sm leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Company Info */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-secondary border border-accent/30 flex items-center justify-center">
                    <span className="font-medium text-foreground">
                      {testimonial.company[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.company}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.industry}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
