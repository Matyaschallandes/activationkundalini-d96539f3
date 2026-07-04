import { Sparkles, Shirt, Gem } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const Boutique = () => {
  return (
    <Layout>
      <Seo
        title="Boutique — Pendules & T-shirts énergétiques | Activation Kundalini"
        description="Boutique en ligne bientôt disponible : pendules chargés énergétiquement, t-shirts spirituels et objets rituels. Livraison Suisse et Europe."
      />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
            Boutique en ligne
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-center font-light mb-6 text-foreground">
            Objets <span className="text-gradient-gold italic">sacrés</span>
          </h1>
          <div className="glow-line w-24 mx-auto mb-8" />
          <p className="font-body text-foreground/70 text-center max-w-2xl mx-auto leading-relaxed mb-16">
            Une sélection d'objets énergétiques et de créations spirituelles arrive prochainement.
            Pendules chargés, t-shirts porteurs de symboles sacrés, et bien plus.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Gem, title: "Pendules", desc: "Pendules chargés et consacrés pour la divination et le soin énergétique." },
              { icon: Shirt, title: "T-shirts", desc: "T-shirts avec symboles sacrés et motifs éveillants la conscience." },
              { icon: Sparkles, title: "Créations", desc: "D'autres objets rituels et énergétiques à venir." },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-border bg-card/60 rounded-sm p-8 text-center hover:border-primary/30 transition-all"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl mb-3 text-foreground">{item.title}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border border-primary/30 bg-card rounded-sm p-10 text-center shadow-gold">
            <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
              Bientôt disponible
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-4">
              La boutique <span className="text-gradient-gold italic">ouvre bientôt</span>
            </h2>
            <p className="font-body text-foreground/70 max-w-xl mx-auto leading-relaxed mb-6">
              Les premiers pendules et t-shirts seront disponibles à la commande très prochainement.
              Livraison en Suisse et en Europe.
            </p>
            <p className="font-body text-sm text-muted-foreground italic">
              Envie d'être prévenu·e en avant-première ? Contacte-moi via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Boutique;
