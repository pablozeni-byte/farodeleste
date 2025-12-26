import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es requerido").max(100, "El nombre es muy largo"),
  email: z.string().trim().email("Email inválido").max(255, "El email es muy largo"),
  empresa: z.string().trim().max(100, "El nombre de empresa es muy largo").optional(),
  mensaje: z.string().trim().min(1, "El mensaje es requerido").max(1000, "El mensaje es muy largo"),
});

const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const whatsappUrl = "https://wa.me/59898645841?text=Hola%2C%20vi%20la%20web%20de%20Faro%20del%20Este%20y%20quiero%20ordenar%20mis%20n%C3%BAmeros.";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      setFormData({ nombre: "", email: "", empresa: "", mensaje: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Hubo un problema al enviar el mensaje. Intenta nuevamente.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-20">
            <div className="line-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Conversemos sobre tu negocio
            </h1>
            <p className="text-muted-foreground">
              Estamos aquí para ayudarte. Contanos qué necesitás y te responderemos a la brevedad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Form */}
            <div className="p-8 rounded-lg bg-card border border-border">
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
                    className={errors.nombre ? "border-destructive" : ""}
                  />
                  {errors.nombre && (
                    <p className="text-sm text-destructive mt-1">{errors.nombre}</p>
                  )}
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
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa (opcional)"
                    className={errors.empresa ? "border-destructive" : ""}
                  />
                  {errors.empresa && (
                    <p className="text-sm text-destructive mt-1">{errors.empresa}</p>
                  )}
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
                    className={errors.mensaje ? "border-destructive" : ""}
                  />
                  {errors.mensaje && (
                    <p className="text-sm text-destructive mt-1">{errors.mensaje}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="navy"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* WhatsApp CTA */}
              <div className="p-6 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30">
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

              {/* Contact Details */}
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-medium text-foreground mb-6">
                  Información de contacto
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Phone className="w-4 h-4 text-accent mt-0.5" />
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

                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a
                        href="mailto:contacto@farodeeste.com"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        contacto@farodeeste.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Ubicación</p>
                      <p className="text-sm text-muted-foreground">Uruguay</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Message */}
              <div className="p-4 rounded-lg border border-border text-center">
                <p className="text-sm text-muted-foreground italic">
                  "Sin compromiso, te orientamos con gusto."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
