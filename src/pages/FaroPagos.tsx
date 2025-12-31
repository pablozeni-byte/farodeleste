import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  CheckCircle, 
  XCircle, 
  Shield, 
  Smartphone, 
  Link2, 
  Clock, 
  Wallet,
  CalendarCheck,
  Building2,
  Lock,
  Fingerprint
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import faroPagosHeader from "@/assets/faro-pagos-header.png";

const FaroPagos = () => {
  const faroUrl = "https://easy-rut-pay.lovable.app";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-24">
        {/* Header Image */}
        <div className="relative h-64 md:h-80 lg:h-[420px] w-full overflow-hidden">
          <img 
            src={faroPagosHeader} 
            alt="Pagos digitales con elementos fintech dorados" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
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
                    className="p-4 rounded-full bg-accent/15 border border-accent/30"
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
                <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Faro Pagos
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Tu acceso rápido y simple a los pagos de DGI y BPS.
                </p>
                <Button 
                  variant="goldAccent" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open(faroUrl, '_blank')}
                >
                  Ingresar a Faro Pagos
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ¿Qué es Faro Pagos? */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                  <Link2 className="w-7 h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  ¿Qué es Faro Pagos?
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 pl-0 md:pl-16">
                Faro Pagos te dirige directamente a los sitios oficiales de pago de DGI y BPS, 
                evitando errores y pérdida de tiempo. Configurás tu empresa una sola vez y luego 
                accedés directamente para realizar el pago mensual desde el portal oficial.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-0 md:pl-16">
                {[
                  { icon: Building2, text: "Elegí el organismo y listo" },
                  { icon: Shield, text: "Todo se paga dentro del sitio oficial" },
                  { icon: Clock, text: "Sin pasos innecesarios" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-primary/30 border border-accent/10"
                  >
                    <item.icon className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-foreground text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ¿Qué NO es Faro Pagos? */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-primary/50"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
                  <XCircle className="w-7 h-7 text-destructive" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  ¿Qué NO es Faro Pagos?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 md:pl-16">
                {[
                  { icon: Wallet, text: "No procesa pagos" },
                  { icon: Wallet, text: "No maneja dinero" },
                  { icon: Lock, text: "No pide claves" },
                  { icon: Fingerprint, text: "No guarda contraseñas" },
                  { icon: Building2, text: "No reemplaza a DGI ni BPS" },
                  { icon: Shield, text: "Todo el pago ocurre dentro del sitio oficial" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border"
                  >
                    <div className="p-2 rounded-lg bg-destructive/10">
                      <item.icon className="w-4 h-4 text-destructive/70" strokeWidth={1.5} />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Seguridad y privacidad */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent border border-accent/20">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex gap-3">
                    <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                      <Shield className="w-10 h-10 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 hidden md:block">
                      <Lock className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                      Seguridad y privacidad
                    </h2>
                    <p className="text-muted-foreground">
                      Los únicos datos guardados son el RUT y el nombre de la empresa, y se guardan 
                      únicamente en tu dispositivo. Se pueden modificar con "Cambiar RUT".
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-sm text-accent">
                      <Fingerprint className="w-4 h-4" strokeWidth={1.5} />
                      <span>Datos almacenados localmente</span>
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
          className="py-16 bg-primary/50"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                  <Smartphone className="w-7 h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  ¿Cómo guardarlo como App en tu celular?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-16">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 rounded-xl bg-background border border-accent/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Smartphone className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-foreground">Android (Chrome)</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Menú ≡ → Añadir → Pantalla principal
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-xl bg-background border border-accent/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Smartphone className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-foreground">iPhone (Safari)</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Compartir → Agregar a pantalla de inicio
                  </p>
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
          className="py-16"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-xl border border-accent/20 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-accent/10 hover:bg-accent/10">
                      <TableHead className="text-accent font-semibold">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" strokeWidth={1.5} />
                          Faro Pagos es…
                        </div>
                      </TableHead>
                      <TableHead className="text-destructive font-semibold">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4" strokeWidth={1.5} />
                          Faro Pagos NO es…
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { is: "Un acceso directo a DGI y BPS", not: "Un procesador de pagos", iconIs: Link2, iconNot: Wallet },
                      { is: "Rápido y sin pasos innecesarios", not: "Un intermediario de dinero", iconIs: Clock, iconNot: Wallet },
                      { is: "Seguro (datos solo en tu dispositivo)", not: "Un recolector de claves", iconIs: Shield, iconNot: Lock },
                      { is: "Una herramienta de conveniencia", not: "Un reemplazo de los sitios oficiales", iconIs: CalendarCheck, iconNot: Building2 }
                    ].map((row, index) => (
                      <TableRow key={index} className="hover:bg-primary/30">
                        <TableCell className="text-foreground">
                          <div className="flex items-center gap-2">
                            <row.iconIs className="w-4 h-4 text-accent" strokeWidth={1.5} />
                            {row.is}
                          </div>
                        </TableCell>
                        <TableCell className="text-foreground">
                          <div className="flex items-center gap-2">
                            <row.iconNot className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
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
          className="py-16"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-accent/10 border border-accent/20">
                  <CalendarCheck className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div className="p-2 rounded-full bg-accent/10 border border-accent/20">
                  <Clock className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div className="p-2 rounded-full bg-accent/10 border border-accent/20">
                  <Wallet className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
              </div>
              <Button 
                variant="goldAccent" 
                size="lg" 
                className="gap-2"
                onClick={() => window.open(faroUrl, '_blank')}
              >
                Ingresar a Faro Pagos
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default FaroPagos;
