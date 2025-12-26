import { Check, TrendingUp, Cpu, FileCheck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Cpu,
    title: "Contabilidad y tecnología integradas",
    description: "Unificamos procesos contables con sistemas digitales para mayor eficiencia.",
  },
  {
    icon: TrendingUp,
    title: "ERP, procesos y reportes útiles para gerencia",
    description: "Información clara y oportuna para tomar decisiones estratégicas.",
  },
  {
    icon: FileCheck,
    title: "Planificación fiscal con control",
    description: "Optimización tributaria legal con seguimiento continuo.",
  },
  {
    icon: Headphones,
    title: "Acompañamiento continuo",
    description: "Estamos siempre disponibles para resolver tus consultas.",
  },
];

const Approach = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,hsl(43_56%_53%/0.05),transparent_70%)]" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Nuestro Enfoque
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Somos tu aliado contable con{" "}
              <span className="text-gradient-gold">visión tecnológica</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              No somos solo contadores. Combinamos experiencia contable con implementación de
              tecnología para que tu empresa opere con claridad, eficiencia y datos reales.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-border">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/enfoque"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Conocer más sobre nuestro enfoque
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

          {/* Right Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative p-8 lg:p-12 rounded-2xl bg-card border border-border shadow-elevated">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center">
                    <Check className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-3xl font-display font-bold text-foreground">+10</span>
                    <p className="text-muted-foreground">años de experiencia</p>
                  </div>
                </div>

                <div className="line-gold" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <span className="text-2xl font-display font-bold text-primary">100%</span>
                    <p className="text-sm text-muted-foreground">Procesos digitales</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <span className="text-2xl font-display font-bold text-primary">3</span>
                    <p className="text-sm text-muted-foreground">Sectores atendidos</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  "Industria, servicios y comercio — entendemos tu negocio."
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-card border border-primary/30 shadow-lg glow-gold">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Reportes gerenciales</p>
                  <p className="text-xs text-muted-foreground">Decisiones con datos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
