import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  CheckCircle, 
  Shield, 
  Smartphone, 
  Link2, 
  Clock, 
  Wallet,
  CalendarCheck,
  Building2,
  Lock,
  Fingerprint,
  Zap,
  Globe,
  Database,
  Cpu,
  Network,
  ArrowRight,
  CircuitBoard,
  Layers,
  Server,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import faroPagosHeader from "@/assets/faro-pagos-header.png";
import faroPagosCity from "@/assets/faro-pagos-city.png";
import faroPagosNetwork from "@/assets/faro-pagos-network.png";
import faroPagosMobile from "@/assets/faro-pagos-mobile.png";

const FaroPagos = () => {
  const faroUrl = "https://easy-rut-pay.lovable.app";

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main>
        {/* Header Image - Hero Style */}
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <img 
            src={faroPagosHeader} 
            alt="Pagos digitales con elementos fintech dorados" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-primary" />
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-20 bg-primary">
          {/* Background Tech Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10">
              <CircuitBoard className="w-32 h-32 text-accent" />
            </div>
            <div className="absolute bottom-10 right-10">
              <Network className="w-40 h-40 text-accent" />
            </div>
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
              <Cpu className="w-24 h-24 text-accent" />
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {/* Hero Icons */}
              <div className="flex justify-center items-center gap-6 mb-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="p-3 rounded-full bg-accent/10 border border-accent/20"
                >
                  <Building2 className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 shadow-lg shadow-accent/10"
                >
                  <Wallet className="w-10 h-10 text-accent" strokeWidth={1.5} />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-3 rounded-full bg-accent/10 border border-accent/20"
                >
                  <Link2 className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </motion.div>
              </div>

              <div className="line-gold mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-foreground mb-6 leading-tight tracking-tight">
                Faro Pagos
              </h1>
              <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
                Tu acceso rápido y simple a los pagos de DGI y BPS.
              </p>
              <Button 
                variant="goldPremium" 
                size="lg" 
                className="gap-3 px-10 py-6 text-base rounded-lg"
                onClick={() => window.open(faroUrl, '_blank')}
              >
                Ingresar a Faro Pagos
                <ExternalLink className="w-4 h-4 text-accent opacity-80" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Image Separator 1 */}
        <div className="relative h-48 md:h-64 lg:h-80 w-full overflow-hidden">
          <img 
            src={faroPagosCity} 
            alt="Ciudad nocturna con flujos de datos dorados" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
        </div>

        {/* ¿Qué es Faro Pagos? */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 relative bg-primary"
        >
          {/* Tech Illustration Background */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
            <div className="relative">
              <Globe className="w-64 h-64 text-accent" strokeWidth={0.5} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Layers className="w-32 h-32 text-accent" strokeWidth={1} />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-card/10 backdrop-blur-sm border border-accent/20">
                <div className="flex items-start gap-5 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 shadow-lg shadow-accent/5">
                    <Link2 className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
                      ¿Qué es Faro Pagos?
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent rounded-full mt-3" />
                  </div>
                </div>
                <p className="text-primary-foreground/70 mb-8 pl-0 md:pl-[76px] text-lg leading-relaxed">
                  Una herramienta digital desarrollada por Faro del Este que te dirige directamente a los sitios oficiales de DGI y BPS, evitando errores y pérdida de tiempo. Configurás tu empresa una sola vez y luego accedés directamente para realizar el pago mensual desde los portales oficiales.
                </p>
                
                {/* Feature Cards with Tech Icons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-0 md:pl-[76px]">
                  {[
                    { icon: Zap, text: "Elegí el organismo y listo", subtext: "Acceso instantáneo" },
                    { icon: Shield, text: "Todo se paga dentro del sitio oficial", subtext: "100% seguro" },
                    { icon: Clock, text: "Sin pasos innecesarios", subtext: "Ahorrá tiempo" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group p-5 rounded-xl bg-primary/80 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <item.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                        </div>
                      </div>
                      <span className="text-primary-foreground font-medium block">{item.text}</span>
                      <span className="text-accent/70 text-sm">{item.subtext}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Image Separator 2 */}
        <div className="relative h-48 md:h-64 lg:h-80 w-full overflow-hidden">
          <img 
            src={faroPagosNetwork} 
            alt="Red de pagos seguros con flujos dorados" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
        </div>

        {/* ¿Qué NO es Faro Pagos? - Now with gold accent instead of red */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-primary relative overflow-hidden"
        >
          {/* Tech Pattern */}
          <div className="absolute left-0 top-0 opacity-5">
            <Server className="w-48 h-48 text-accent" />
          </div>
          <div className="absolute right-0 bottom-0 opacity-5">
            <Database className="w-40 h-40 text-accent" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-5 mb-10">
                <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20">
                  <Info className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
                    ¿Qué NO es Faro Pagos?
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent rounded-full mt-3" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pl-0 md:pl-[76px]">
                {[
                  { icon: Wallet, text: "No procesa pagos", desc: "Solo redirige al sitio oficial" },
                  { icon: Wallet, text: "No maneja dinero", desc: "Tu dinero va directo al organismo" },
                  { icon: Lock, text: "No pide claves", desc: "Nunca solicitamos credenciales" },
                  { icon: Fingerprint, text: "No guarda contraseñas", desc: "Cero almacenamiento sensible" },
                  { icon: Building2, text: "No reemplaza a DGI ni BPS", desc: "Es un acceso directo" },
                  { icon: Shield, text: "Todo el pago ocurre dentro del sitio oficial", desc: "Máxima seguridad" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-card/10 border border-accent/15 hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent/80" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-primary-foreground font-medium block">{item.text}</span>
                      <span className="text-primary-foreground/60 text-sm">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Image Separator 3 */}
        <div className="relative h-48 md:h-64 lg:h-80 w-full overflow-hidden">
          <img 
            src={faroPagosMobile} 
            alt="Dispositivo móvil con interfaz de pagos dorada" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
        </div>

        {/* Seguridad y privacidad */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 relative bg-primary"
        >
          {/* Tech Background Element */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
            <CircuitBoard className="w-[500px] h-[500px] text-accent" strokeWidth={0.3} />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="p-10 rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 shadow-xl shadow-accent/5">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Icon Cluster */}
                  <div className="flex gap-3 flex-shrink-0">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="p-5 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 shadow-lg shadow-accent/10"
                    >
                      <Shield className="w-12 h-12 text-accent" strokeWidth={1.5} />
                    </motion.div>
                    <div className="flex flex-col gap-3">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-3 rounded-xl bg-accent/10 border border-accent/20"
                      >
                        <Lock className="w-6 h-6 text-accent" strokeWidth={1.5} />
                      </motion.div>
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-3 rounded-xl bg-accent/10 border border-accent/20"
                      >
                        <Fingerprint className="w-6 h-6 text-accent" strokeWidth={1.5} />
                      </motion.div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-2">
                      Seguridad y privacidad
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent rounded-full mb-6" />
                    <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
                      Los únicos datos guardados son el RUT y el nombre de la empresa, y se guardan 
                      únicamente en tu dispositivo. Se pueden modificar con "Cambiar RUT".
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                        <Database className="w-4 h-4 text-accent" strokeWidth={1.5} />
                        <span className="text-sm text-accent">Datos locales</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                        <Lock className="w-4 h-4 text-accent" strokeWidth={1.5} />
                        <span className="text-sm text-accent">Sin servidores externos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ¿Cómo guardarlo como App? */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-primary"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-5 mb-10">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30">
                  <Smartphone className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
                    ¿Cómo guardarlo como App en tu celular?
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent rounded-full mt-3" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-[76px]">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group p-8 rounded-2xl bg-card/10 border border-accent/15 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 group-hover:scale-110 transition-transform">
                      <Smartphone className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-primary-foreground text-lg">Android (Chrome)</h3>
                  </div>
                  <div className="flex items-center gap-3 text-primary-foreground/70">
                    <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-sm">Menú ≡</span>
                    <ArrowRight className="w-4 h-4 text-accent/50" />
                    <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-sm">Añadir</span>
                    <ArrowRight className="w-4 h-4 text-accent/50" />
                    <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-sm">Pantalla principal</span>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group p-8 rounded-2xl bg-card/10 border border-accent/15 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 group-hover:scale-110 transition-transform">
                      <Smartphone className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-primary-foreground text-lg">iPhone (Safari)</h3>
                  </div>
                  <div className="flex items-center gap-3 text-primary-foreground/70">
                    <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-sm">Compartir</span>
                    <ArrowRight className="w-4 h-4 text-accent/50" />
                    <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-sm">Agregar a pantalla de inicio</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tabla resumen */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 relative bg-primary"
        >
          {/* Tech Background */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 hidden lg:block">
            <Layers className="w-80 h-80 text-accent" strokeWidth={0.3} />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-3">Resumen</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full mx-auto" />
              </div>
              <div className="rounded-2xl border border-accent/20 overflow-hidden shadow-xl shadow-accent/5">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-accent/15 to-accent/5 hover:bg-accent/15 border-accent/20">
                      <TableHead className="text-accent font-semibold py-5">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
                          Faro Pagos es…
                        </div>
                      </TableHead>
                      <TableHead className="text-primary-foreground/60 font-semibold py-5">
                        <div className="flex items-center gap-3">
                          <Info className="w-5 h-5" strokeWidth={1.5} />
                          Faro Pagos NO es…
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { is: "Un acceso directo a DGI y BPS", not: "Un procesador de pagos", iconIs: Link2, iconNot: Wallet },
                      { is: "Rápido y sin pasos innecesarios", not: "Un intermediario de dinero", iconIs: Zap, iconNot: Wallet },
                      { is: "Seguro (datos solo en tu dispositivo)", not: "Un recolector de claves", iconIs: Shield, iconNot: Lock },
                      { is: "Una herramienta de conveniencia", not: "Un reemplazo de los sitios oficiales", iconIs: CalendarCheck, iconNot: Building2 }
                    ].map((row, index) => (
                      <TableRow key={index} className="hover:bg-accent/5 transition-colors border-accent/10">
                        <TableCell className="text-primary-foreground py-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-accent/10">
                              <row.iconIs className="w-4 h-4 text-accent" strokeWidth={1.5} />
                            </div>
                            {row.is}
                          </div>
                        </TableCell>
                        <TableCell className="text-primary-foreground/70 py-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary-foreground/5">
                              <row.iconNot className="w-4 h-4 text-primary-foreground/50" strokeWidth={1.5} />
                            </div>
                            {row.not}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Final */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 relative overflow-hidden bg-primary"
        >
          {/* Tech Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4">
              <Globe className="w-48 h-48 text-accent" />
            </div>
            <div className="absolute bottom-0 right-1/4">
              <Network className="w-56 h-56 text-accent" />
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="p-12 rounded-3xl bg-gradient-to-br from-accent/15 via-accent/10 to-accent/5 border border-accent/25 text-center">
                <div className="flex justify-center gap-4 mb-8">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="p-3 rounded-full bg-accent/15 border border-accent/25"
                  >
                    <CalendarCheck className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </motion.div>
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 shadow-lg shadow-accent/10"
                  >
                    <Zap className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </motion.div>
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="p-3 rounded-full bg-accent/15 border border-accent/25"
                  >
                    <Wallet className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-semibold text-primary-foreground mb-4">¿Listo para simplificar tus pagos?</h3>
                <p className="text-primary-foreground/70 mb-8">Accedé directamente a DGI y BPS sin complicaciones.</p>
                <Button 
                  variant="goldPremium" 
                  size="lg" 
                  className="gap-3 px-10 py-6 text-base rounded-lg"
                  onClick={() => window.open(faroUrl, '_blank')}
                >
                  Ingresar a Faro Pagos
                  <ExternalLink className="w-4 h-4 text-accent opacity-80" />
                </Button>
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
