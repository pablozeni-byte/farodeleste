import { Cpu, TrendingUp, FileCheck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Cpu,
    title: "Contabilidad y tecnología integradas",
    description: "Unificamos procesos contables con sistemas digitales.",
  },
  {
    icon: TrendingUp,
    title: "ERP y reportes para gerencia",
    description: "Información clara para decisiones estratégicas.",
  },
  {
    icon: FileCheck,
    title: "Planificación fiscal con control",
    description: "Optimización tributaria con seguimiento continuo.",
  },
  {
    icon: Headphones,
    title: "Acompañamiento continuo",
    description: "Siempre disponibles para resolver tus consultas.",
  },
];

const Approach = () => {
  return (
    <section className="relative py-32 lg:py-40 bg-secondary/30">
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <div className="line-gold mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Tu aliado contable con visión tecnológica
            </h2>
            <p className="text-muted-foreground mb-10">
              No somos solo contadores. Combinamos experiencia contable con implementación de
              tecnología para que tu empresa opere con claridad.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <feature.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/enfoque"
              className="inline-flex items-center gap-2 text-sm text-foreground font-medium hover:text-accent transition-colors mt-10"
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
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Right Visual - Simple Stats Card */}
          <div className="relative">
            <div className="p-10 rounded-lg bg-card border border-border">
              <div className="space-y-8">
                <div>
                  <span className="text-4xl font-semibold text-foreground">+10</span>
                  <p className="text-muted-foreground mt-1">años de experiencia</p>
                </div>
                
                <div className="line-gold-wide" />
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="text-2xl font-semibold text-foreground">100%</span>
                    <p className="text-sm text-muted-foreground">Procesos digitales</p>
                  </div>
                  <div>
                    <span className="text-2xl font-semibold text-foreground">3</span>
                    <p className="text-sm text-muted-foreground">Sectores atendidos</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground italic border-l-2 border-accent pl-4">
                  "Industria, servicios y comercio — entendemos tu negocio."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
