import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import contactoHeader from "@/assets/contacto-page-header.png";

const CONTACT_EMAIL = "estudiocontablefarodeleste@gmail.com";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { nombre, email, mensaje } = formData;
    
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completá todos los campos antes de enviar.",
        variant: "destructive",
      });
      return;
    }
    
    const subject = encodeURIComponent(`Consulta de ${nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`
    );
    
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    
    toast({
      title: "Abriendo cliente de email",
      description: "Se abrirá tu aplicación de correo para enviar el mensaje.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-24">
        {/* Header Image */}
        <div className="relative h-64 md:h-80 lg:h-[420px] w-full overflow-hidden">
          <img 
            src={contactoHeader} 
            alt="Comunicación corporativa moderna" 
            className="w-full h-full object-cover"
          />
          {/* Subtle fade starting lower, less intense */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% via-background/20 via-80% to-background" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-16">
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <div className="line-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Conversemos sobre tu negocio
            </h1>
            <p className="text-muted-foreground">
              Estamos aquí para ayudarte. Contanos qué necesitás y te responderemos a la brevedad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-lg bg-card border border-border"
            >
              <h2 className="text-xl font-medium text-foreground mb-6">
                Envianos un mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    Nombre *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Contanos en qué podemos ayudarte"
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="navy"
                  size="lg"
                  className="w-full gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* WhatsApp CTA */}
              <div className="p-6 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 relative overflow-hidden">
                {/* Decorative WhatsApp icon */}
                <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10">
                  <MessageCircle className="w-full h-full text-[#25D366]" />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <div>
                      <h3 className="font-medium text-foreground">¿Preferís WhatsApp?</h3>
                      <p className="text-sm text-muted-foreground">Respuesta más rápida</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Si necesitás una respuesta inmediata, escribinos por WhatsApp.
                  </p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" size="default" className="w-full gap-2">
                      <Phone className="w-4 h-4" />
                      +598 98 645 841
                    </Button>
                  </a>
                </div>
              </div>

              {/* Contact Details */}
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-medium text-foreground mb-6">
                  Información de contacto
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4 group">
                    <div className="relative">
                      <div className="absolute inset-0 w-6 h-6 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Phone className="relative w-4 h-4 text-accent mt-0.5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Teléfono</p>
                      <a
                        href="tel:+59898645841"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        +598 98 645 841
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="relative">
                      <div className="absolute inset-0 w-6 h-6 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Mail className="relative w-4 h-4 text-accent mt-0.5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors break-all"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="relative">
                      <div className="absolute inset-0 w-6 h-6 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <MapPin className="relative w-4 h-4 text-accent mt-0.5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Ubicación</p>
                      <p className="text-sm text-muted-foreground">Uruguay</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Message */}
              <div className="p-4 rounded-lg border border-accent/20 text-center bg-accent/5">
                <p className="text-sm text-muted-foreground italic">
                  "Sin compromiso, te orientamos con gusto."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
