import { useState } from "react";
import { ShieldCheck, Truck, Ruler, Shirt, Sparkles, WashingMachine, Users } from "lucide-react";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";
import { isPaymentsConfigured } from "@/lib/stripe";
import tshirtBlack from "@/assets/tshirt-13lv-noir.png.asset.json";
import tshirtLifestyle1 from "@/assets/tshirt-13lv-lifestyle-1.png.asset.json";
import tshirtLifestyle2 from "@/assets/tshirt-13lv-lifestyle-2.png.asset.json";

const SIZES = ["XS", "S", "M", "L", "XL"] as const;
const COLORS = [
  { key: "Noir", swatch: "#111111" },
  { key: "Blanc", swatch: "#f5f5f0" },
] as const;
const GENDERS = ["Femme", "Homme"] as const;

export function TshirtSection() {
  const { openCheckout, checkoutElement } = useStripeCheckout();
  const [size, setSize] = useState<string>("M");
  const [color, setColor] = useState<string>("Noir");
  const [gender, setGender] = useState<string>("Homme");
  const [gallery, setGallery] = useState(tshirtBlack.url);

  const handleBuy = () => {
    openCheckout({
      priceId: "tshirt_13lv_chf_27",
      quantity: 1,
      title: `T-shirt 13LV — ${gender} / ${color} / ${size}`,
      collectShipping: true,
      metadata: { product: "tshirt_13lv", size, color, gender },
      returnUrl: `${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}&product=tshirt_13lv`,
    });
  };

  const thumbs = [tshirtBlack.url, tshirtLifestyle1.url, tshirtLifestyle2.url];

  return (
    <section className="py-20 md:py-28 border-t border-primary/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">Boutique — Textile</p>
        <h2 className="font-heading text-4xl md:text-5xl text-center font-light mb-6 text-foreground">
          T-shirt <span className="text-gradient-gold italic">13LV</span> Treizélévé
        </h2>
        <div className="glow-line w-24 mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <div className="rounded-sm overflow-hidden bg-muted/30 mb-4 aspect-square flex items-center justify-center">
              <img src={gallery} alt="T-shirt 13LV Treizélévé" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {thumbs.map((t) => (
                <button
                  key={t}
                  onClick={() => setGallery(t)}
                  className={`rounded-sm overflow-hidden aspect-square border transition-all ${
                    gallery === t ? "border-primary shadow-gold" : "border-primary/20 hover:border-primary/50"
                  }`}
                >
                  <img src={t} alt="Aperçu t-shirt" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-3">Édition Treizélévé</p>
            <h3 className="font-heading text-3xl md:text-4xl font-light mb-4 text-foreground">
              Porter le <span className="text-gradient-gold italic">13</span> comme un blason
            </h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              Le t-shirt <strong>13LV Treizélévé</strong> est bien plus qu'un vêtement : c'est un symbole de souveraineté,
              d'élévation intérieure et d'ancrage. Coupe droite, coton doux, logo couronné au dos et signature discrète
              sur le cœur.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed mb-2">
              Disponible en <strong>noir</strong> et en <strong>blanc</strong>. D'autres coloris sont disponibles sur
              demande — contactez-moi directement via WhatsApp.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mb-6">
              <strong>Modèle pour femme et pour homme.</strong> Précisez votre choix lors de la commande pour recevoir la coupe adaptée.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-body tracking-wide uppercase mb-8">
              <span className="inline-flex items-center gap-2"><Shirt className="w-3.5 h-3.5 text-primary" /> Coton</span>
              <span className="inline-flex items-center gap-2"><Ruler className="w-3.5 h-3.5 text-primary" /> XS → XL</span>
              <span className="inline-flex items-center gap-2"><Truck className="w-3.5 h-3.5 text-primary" /> Livraison Suisse & UE</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-primary" /> Édition limitée</span>
            </div>

            {/* Gender selector */}
            <div className="mb-6">
              <p className="font-body text-sm tracking-wide uppercase text-foreground/70 mb-3">
                Pour : <span className="text-foreground font-semibold">{gender}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {GENDERS.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`min-w-[4.5rem] px-4 py-2 rounded-sm border font-body text-sm tracking-wider transition-all inline-flex items-center gap-2 ${
                      gender === g
                        ? "border-primary bg-primary/10 text-foreground font-semibold"
                        : "border-primary/30 text-foreground/70 hover:border-primary/70"
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Color selector */}
            <div className="mb-6">
              <p className="font-body text-sm tracking-wide uppercase text-foreground/70 mb-3">Couleur : <span className="text-foreground font-semibold">{color}</span></p>
              <div className="flex gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setColor(c.key)}
                    aria-label={`Couleur ${c.key}`}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      color === c.key ? "border-primary shadow-gold scale-110" : "border-primary/30 hover:border-primary/70"
                    }`}
                    style={{ background: c.swatch }}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2 italic">
                Autre couleur ? Contactez-moi sur WhatsApp au +41 76 244 55 52.
              </p>
            </div>

            {/* Size selector */}
            <div className="mb-8">
              <p className="font-body text-sm tracking-wide uppercase text-foreground/70 mb-3">Taille : <span className="text-foreground font-semibold">{size}</span></p>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`min-w-[3rem] px-4 py-2 rounded-sm border font-body text-sm tracking-wider transition-all ${
                      size === s
                        ? "border-primary bg-primary/10 text-foreground font-semibold"
                        : "border-primary/30 text-foreground/70 hover:border-primary/70"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-8">
              <span className="font-heading text-5xl text-gradient-gold">27</span>
              <span className="font-body text-xl text-foreground/80">CHF</span>
              <span className="font-body text-sm text-muted-foreground">+ frais de port</span>
            </div>

            {isPaymentsConfigured() ? (
              <button
                onClick={handleBuy}
                className="w-full md:w-auto bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm px-10 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
              >
                Commander — {color} / {size}
              </button>
            ) : (
              <p className="text-sm text-muted-foreground italic">Paiement bientôt disponible.</p>
            )}

            {/* Care instructions */}
            <div className="mt-10 p-5 rounded-sm border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-2 mb-3">
                <WashingMachine className="w-4 h-4 text-primary" />
                <h4 className="font-heading text-lg text-foreground">Entretien — Pour un t-shirt qui dure</h4>
              </div>
              <ul className="space-y-2 font-body text-sm text-foreground/80 leading-relaxed">
                <li>• Laver à <strong>30 °C</strong> maximum (idéalement à froid), <strong>40 °C</strong> uniquement si nécessaire.</li>
                <li>• <strong>Retourner le t-shirt sur l'envers</strong> avant chaque lavage pour préserver le logo et les couleurs.</li>
                <li>• Éviter le sèche-linge — préférer un séchage à l'air libre, à l'ombre.</li>
                <li>• Repasser sur l'envers, jamais directement sur l'impression.</li>
                <li>• Pas de javel ni d'assouplissant agressif.</li>
              </ul>
            </div>

            <div className="mt-6 space-y-3 text-sm text-foreground/70">
              <div className="flex items-start gap-3">
                <Truck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Expédition depuis la Suisse — livraison sous 3 à 7 jours ouvrés</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Paiement sécurisé — carte, TWINT, Apple Pay, Google Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {checkoutElement}
    </section>
  );
}
