import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Calendar, MessageCircle, Camera, FileText, Smartphone, Mail, Building2 } from "lucide-react";

const phoneNumber = "41762445552";
const whatsappMessage = encodeURIComponent(
  "Bonjour Matyas, je souhaite réserver un rendez-vous. Voici la plage horaire que j'ai sélectionnée :"
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

const RendezVous = () => {
  useEffect(() => {
    document.title = "Prendre rendez-vous | Activation Kundalini & Soins Énergétiques";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Réservez votre séance d'activation kundalini, lecture d'âme ou soin énergétique avec Matyas Challandes. Disponibilités en ligne, paiement après la séance."
      );
    }
  }, []);

  return (
    <Layout>
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
            Réservation
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-center font-light mb-6 text-foreground">
            Prendre <span className="text-gradient-gold italic">rendez-vous</span>
          </h1>
          <div className="glow-line w-24 mx-auto mb-12" />

          <div className="bg-gradient-card border border-border rounded-sm p-8 md:p-10 mb-12">
            <h2 className="font-heading text-2xl text-foreground mb-6 text-center">
              Comment réserver votre séance
            </h2>

            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-gold text-primary-foreground flex items-center justify-center font-heading font-semibold">
                  1
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h3 className="font-heading text-lg text-foreground">
                      Choisissez une plage horaire
                    </h3>
                  </div>
                  <p className="font-body text-muted-foreground">
                    Consultez les horaires disponibles ci-dessous et sélectionnez celui qui vous convient.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-gold text-primary-foreground flex items-center justify-center font-heading font-semibold">
                  2
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-heading text-lg text-foreground">
                      Envoyez-moi un message WhatsApp
                    </h3>
                  </div>
                  <p className="font-body text-muted-foreground">
                    Confirmez votre créneau en m'envoyant un message sur WhatsApp pour valider la réservation.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-body text-primary hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Ouvrir WhatsApp (+41 76 244 55 52)
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-gold text-primary-foreground flex items-center justify-center font-heading font-semibold">
                  3
                </span>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-2">
                    Le paiement se fait après la séance
                  </h3>
                  <p className="font-body text-muted-foreground mb-3">
                    Toutes les offres sont à prix libre, sous forme de dons. On s'adapte à votre situation.
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Moyens de paiement acceptés : <span className="text-foreground font-medium">Twint, PayPal, virement bancaire ou espèces</span>.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Moyens de paiement */}
          <div className="bg-gradient-card border border-border rounded-sm p-8 md:p-10 mb-12">
            <h2 className="font-heading text-2xl text-foreground mb-6 text-center">
              Moyens de paiement
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <Smartphone className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-heading text-lg text-foreground">Twint</h3>
                <p className="font-body text-sm text-muted-foreground">
                  <a href="tel:+41762445552" className="hover:text-primary transition-colors">
                    076 244 55 52
                  </a>
                </p>
              </div>
              <div className="text-center space-y-2">
                <Mail className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-heading text-lg text-foreground">PayPal</h3>
                <p className="font-body text-sm text-muted-foreground break-all">
                  <a href="https://www.paypal.com/paypalme/matyaschallandes" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    matyas.challandes@gmail.com
                  </a>
                </p>
              </div>
              <div className="text-center space-y-2">
                <Building2 className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-heading text-lg text-foreground">Virement bancaire</h3>
                <p className="font-body text-sm text-muted-foreground">
                  IBAN<br />
                  <span className="text-foreground font-medium">CH59 0900 0000 1763 1365 6</span>
                </p>
              </div>
            </div>
            <p className="font-body text-xs text-muted-foreground text-center mt-6">
              Espèces également acceptées en présentiel.
            </p>
          </div>

          {/* Koalendar embed */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl text-foreground mb-4 text-center">
              Horaires disponibles
            </h2>
            <div className="rounded-sm border border-border overflow-hidden bg-card">
              <iframe
                src="https://koalendar.com/e/rencontrer-matyas-challandes"
                width="100%"
                height="700"
                frameBorder="0"
                title="Calendrier de réservation Matyas Challandes"
                className="w-full"
              />
            </div>
            <p className="text-center mt-4">
              <a
                href="https://koalendar.com/e/rencontrer-matyas-challandes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-body text-sm hover:underline"
              >
                Ouvrir le calendrier dans un nouvel onglet ↗
              </a>
            </p>
          </div>

          {/* Distance session info */}
          <div className="bg-gradient-card border border-border rounded-sm p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-6 h-6 text-primary" />
              <h2 className="font-heading text-2xl text-foreground">
                Lecture d'âme & soin découverte à distance
              </h2>
            </div>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Si vous souhaitez une <span className="text-foreground font-medium">lecture d'âme</span> ou un{" "}
              <span className="text-foreground font-medium">soin découverte à distance</span>, voici la marche à suivre :
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 font-body text-muted-foreground">
                <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Remplissez le formulaire dans la section <span className="text-foreground font-medium">Offres</span>
                </span>
              </li>
              <li className="flex gap-3 font-body text-muted-foreground">
                <Camera className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Envoyez-moi sur WhatsApp une <span className="text-foreground font-medium">photo du jour</span>, de la tête aux pieds, sur un <span className="text-foreground font-medium">fond blanc</span>
                </span>
              </li>
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-8 py-3 rounded-sm hover:shadow-gold transition-all duration-500"
            >
              <MessageCircle className="w-4 h-4" />
              Envoyer ma photo via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RendezVous;
