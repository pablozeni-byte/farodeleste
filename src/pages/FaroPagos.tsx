import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, XCircle, Shield, Smartphone } from "lucide-react";
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
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                ¿Qué es Faro Pagos?
              </h2>
              <p className="text-muted-foreground mb-8">
                Faro Pagos te dirige directamente a los sitios oficiales de pago de DGI y BPS, 
                evitando errores y pérdida de tiempo. Configurás tu empresa una sola vez y luego 
                accedés directamente para realizar el pago mensual desde el portal oficial.
              </p>
              <ul className="space-y-4">
                {[
                  "Elegí el organismo y listo",
                  "Todo se paga dentro del sitio oficial",
                  "Sin pasos innecesarios"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
                ¿Qué NO es Faro Pagos?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "No procesa pagos",
                  "No maneja dinero",
                  "No pide claves",
                  "No guarda contraseñas",
                  "No reemplaza a DGI ni BPS",
                  "Todo el pago ocurre dentro del sitio oficial del organismo"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
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
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Seguridad y privacidad
                  </h2>
                  <p className="text-muted-foreground">
                    Los únicos datos guardados son el RUT y el nombre de la empresa, y se guardan 
                    únicamente en tu dispositivo. Se pueden modificar con "Cambiar RUT".
                  </p>
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
                <div className="p-3 rounded-full bg-accent/10">
                  <Smartphone className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  ¿Cómo guardarlo como App en tu celular?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-background border border-border">
                  <h3 className="font-semibold text-foreground mb-3">Android (Chrome)</h3>
                  <p className="text-muted-foreground">
                    Menú ≡ → Añadir → Pantalla principal
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-background border border-border">
                  <h3 className="font-semibold text-foreground mb-3">iPhone (Safari)</h3>
                  <p className="text-muted-foreground">
                    Compartir → Agregar a pantalla de inicio
                  </p>
                </div>
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
              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary/50">
                      <TableHead className="text-accent font-semibold">Faro Pagos es…</TableHead>
                      <TableHead className="text-accent font-semibold">Faro Pagos NO es…</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-foreground">Un acceso directo a DGI y BPS</TableCell>
                      <TableCell className="text-foreground">Un procesador de pagos</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-foreground">Rápido y sin pasos innecesarios</TableCell>
                      <TableCell className="text-foreground">Un intermediario de dinero</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-foreground">Seguro (datos solo en tu dispositivo)</TableCell>
                      <TableCell className="text-foreground">Un recolector de claves</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-foreground">Una herramienta de conveniencia</TableCell>
                      <TableCell className="text-foreground">Un reemplazo de los sitios oficiales</TableCell>
                    </TableRow>
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
