import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Cpu, TrendingUp, FileCheck, Headphones, Factory, Truck, ShoppingBag, Sparkles, CircuitBoard, Settings } from "lucide-react";
import enfoqueHeader from "@/assets/enfoque-page-header.png";
import { motion } from "framer-motion";

const differentiators = [
  {
    icon: Cpu,
    title: "Contabilidad y tecnología integradas",
    description:
      "No somos solo contadores. Implementamos sistemas que conectan tu operación con tu información financiera.",
  },
  {
    icon: TrendingUp,
    title: "Reportes útiles para gerencia",
    description:
      "Nada de números que no entendés. Te entregamos información clara que responde tus preguntas de negocio.",
  },
  {
    icon: FileCheck,
    title: "Planificación fiscal con control",
    description:
      "No esperamos al cierre del año. Planificamos tu carga tributaria y hacemos seguimiento mes a mes.",
  },
  {
    icon: Headphones,
    title: "Acompañamiento continuo",
    description:
      "Estamos disponibles cuando nos necesitás. Respuestas rápidas, consultas ilimitadas.",
  },
];

const sectors = [
  {
    icon: Factory,
    name: "Industria",
    description: "Manufactura, producción y empresas industriales",
  },
  {
    icon: Truck,
    name: "Servicios",
    description: "Transporte, logística, consultoría y profesionales",
  },
  {
    icon: ShoppingBag,
    name: "Comercio",
    description: "Retail, distribución y comercio mayorista",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Enfoque = () => {
  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-24">
        {/* Header Image */}
        <div className="relative h-64 md:h-80 lg:h-[420px] w-full overflow-hidden">
          <img
            src={enfoqueHeader}
            alt="Faro tecnológico con visión estratégica"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        </div>

        {/* Hero Section */}
        <motion.section 
          className="container mx-auto px-4 lg:px-8 py-16 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="line-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Tu aliado contable con visión tecnológica
            </h1>
            <p className="text-muted-foreground">
              Combinamos más de una década de experiencia contable con implementación de tecnología
              para que tu empresa opere con claridad.
            </p>
          </div>
        </motion.section>

        {/* Differentiators - Enhanced Block */}
        <motion.section 
          className="py-20 bg-gradient-to-b from-secondary/30 to-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <div className="inline-flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-accent" strokeWidth={1.5} />
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Lo que nos hace diferentes
                </h2>
                <Sparkles className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <div className="line-gold mx-auto mt-4" />
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              variants={containerVariants}
            >
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group relative p-8 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                    <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-accent/20" />
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 border border-accent/20 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <item.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Philosophy - Enhanced Block */}
        <motion.section 
          className="py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              className="relative p-12 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/50 to-primary/5 border border-border max-w-5xl mx-auto overflow-hidden"
              variants={itemVariants}
            >
              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                <CircuitBoard className="w-full h-full text-accent" strokeWidth={0.5} />
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rotate-180">
                <CircuitBoard className="w-full h-full text-accent" strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Settings className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    No somos un estudio contable tradicional
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-muted-foreground mb-8 text-lg">
                      En Faro del Este creemos que la contabilidad debe ser una herramienta de gestión,
                      no solo un requisito legal.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Sistemas ERP que hablan con tu contabilidad",
                        "Reportes automatizados en tiempo real",
                        "Facturación electrónica integrada",
                        "Gestión documental en la nube"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-accent to-gold-dark" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-accent/10">
                    <blockquote className="text-lg text-foreground italic border-l-2 border-accent pl-6">
                      "La tecnología sin criterio contable es un gasto. La contabilidad sin tecnología
                      es trabajo de más. Nosotros combinamos ambas."
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Sectors - Enhanced Cards */}
        <motion.section 
          className="py-20 bg-gradient-to-t from-secondary/30 to-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <div className="inline-flex items-center gap-3 mb-4">
                <CircuitBoard className="w-6 h-6 text-accent" strokeWidth={1.5} />
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Sectores que atendemos
                </h2>
                <CircuitBoard className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <p className="text-muted-foreground mt-4">
                Experiencia comprobada en industria, servicios y comercio
              </p>
              <div className="line-gold mx-auto mt-6" />
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={containerVariants}
            >
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 text-center h-full shadow-sm hover:shadow-lg">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-b-full" />
                    
                    {/* Icon container */}
                    <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <sector.icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                      {/* Corner accents */}
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent/40 rounded-tl-lg" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-accent/40 rounded-br-lg" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {sector.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sector.description}</p>
                    
                    {/* Bottom decorative element */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                      <span className="w-1 h-1 rounded-full bg-accent/40" />
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      <span className="w-1 h-1 rounded-full bg-accent/40" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="container mx-auto px-4 lg:px-8 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-xl mx-auto">
            <div className="line-gold mx-auto mb-6" />
            <h2 className="text-3xl font-medium text-foreground mb-4">
              ¿Querés conocernos mejor?
            </h2>
            <p className="text-muted-foreground mb-8">
              Conversemos sobre cómo podemos ayudar a tu negocio. Sin compromiso.
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

export default Enfoque;
