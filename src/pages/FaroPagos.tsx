import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CreditCard, Smartphone, RefreshCw, Shield } from "lucide-react";
import faroPagosImage from "@/assets/faro-pagos-payments.png";
import faroPagosHeader from "@/assets/faro-pagos-header.png";

const features = [
  {
    icon: CreditCard,
    title: "Múltiples medios de pago",
    description: "Tarjetas, transferencias y más opciones para tus clientes.",
  },
  {
    icon: Smartphone,
    title: "Pagos móviles",
    description: "Cobra desde cualquier lugar con tu dispositivo móvil.",
  },
  {
    icon: RefreshCw,
    title: "Conciliación automática",
    description: "Integración directa con tu contabilidad.",
  },
  {
    icon: Shield,
    title: "Seguridad garantizada",
    description: "Transacciones protegidas con los más altos estándares.",
  },
];

const FaroPagos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-24">
        {/* Header Image */}
        <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
          <img 
            src={faroPagosHeader} 
            alt="Digital payments with golden fintech elements" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="line-gold mb-6" />
                <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Faro Pagos
                </h1>
                <p className="text-xl text-accent mb-4">
                  Próximamente
                </p>
                <p className="text-muted-foreground mb-8">
                  Tu plataforma integral de cobros y pagos digitales, diseñada para empresas que buscan 
                  simplificar sus operaciones financieras con tecnología de punta.
                </p>

                {/* Features Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex gap-3 group"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 w-8 h-8 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <feature.icon className="relative w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  {/* Golden glow effect */}
                  <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-3xl" />
                  <img
                    src={faroPagosImage}
                    alt="Digital payments and fintech visualization"
                    className="relative w-full rounded-xl border border-accent/20 shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Coming Soon Banner */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-2xl bg-primary border border-accent/20 text-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
                
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
                    Estamos trabajando en algo increíble
                  </h2>
                  <p className="text-primary-foreground/70 max-w-xl mx-auto">
                    Faro Pagos será la solución definitiva para gestionar todos tus cobros y pagos 
                    en un solo lugar, con integración total a tu sistema contable.
                  </p>
                  
                  <div className="mt-8 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm text-accent font-medium">En desarrollo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default FaroPagos;
