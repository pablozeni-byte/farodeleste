import { Cpu, TrendingUp, FileCheck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";
import approachImage from "@/assets/approach-analytics.png";
import approachHeader from "@/assets/approach-header.png";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const Approach = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Header Image */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        <OptimizedImage
          src={approachHeader}
          alt="Strategic vision lighthouse with golden data connections"
          className="w-full h-full object-cover"
          containerClassName="w-full h-full"
          placeholderColor="hsl(222 47% 11%)"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Golden glow effect */}
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl" />
              <OptimizedImage
                src={approachImage}
                alt="Analytics and business intelligence visualization"
                className="relative w-full rounded-xl border border-accent/20 shadow-2xl"
                containerClassName="rounded-xl"
                placeholderColor="hsl(222 47% 11%)"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="line-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Tu aliado contable con visión tecnológica
              </h2>
              <p className="text-muted-foreground mb-12">
                No somos solo contadores. Combinamos experiencia contable con implementación de
                tecnología para que tu empresa opere con claridad.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 w-8 h-8 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <feature.icon className="relative w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 group-hover:text-accent transition-colors">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/enfoque"
                className="inline-flex items-center gap-2 text-sm text-foreground font-medium hover:text-accent transition-colors mt-12 group"
              >
                Conocer más sobre nuestro enfoque
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
