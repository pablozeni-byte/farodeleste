import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const FaroPagos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="line-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Faro Pagos
            </h1>
            <p className="text-lg text-muted-foreground">
              Próximamente
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FaroPagos;
