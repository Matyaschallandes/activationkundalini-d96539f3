import Layout from "@/components/Layout";
import CtaSection from "@/components/CtaSection";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <CtaSection />
      
      {/* Map & Contact Info Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4 text-foreground">
            Me <span className="text-gradient-gold italic">trouver</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border/30 shadow-lg aspect-[4/3]">
              <iframe
                title="Localisation Matyas Challandes - Activation Kundalini"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.5!2d6.827!3d46.929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e4e4e4e4e4e4f%3A0x0!2sChemin+du+Cuard+22%2C+2022+Bevaix!5e0!3m2!1sfr!2sch!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">Adresse</h3>
                  <p className="font-body text-muted-foreground">
                    Matyas Challandes<br />
                    Chemin du Cuard 22<br />
                    2022 Bevaix, Suisse
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">Téléphone</h3>
                  <a href="tel:+41762445552" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    +41 76 244 55 52
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">Email</h3>
                  <a href="mailto:matyas.challandes@gmail.com" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    matyas.challandes@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-lg bg-muted/20 border border-border/20">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground/80">Séances disponibles :</strong><br />
                  En présentiel à Bevaix (Neuchâtel) ou à distance via Zoom, WhatsApp vidéo ou sur photo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
