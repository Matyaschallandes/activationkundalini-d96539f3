import Layout from "@/components/Layout";
import { Flame, Zap, Sparkles, Heart, Eye, Shield, TreePine, Sun, Hand, Brain, Bird, Star } from "lucide-react";

const LaKundalini = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs text-center mb-4">
            🔥 Comprendre
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-center font-light mb-4 text-foreground">
            La <span className="text-gradient-gold italic">Kundalini</span> et la facilitation
          </h1>
          <div className="glow-line w-24 mx-auto mb-6" />
          <p className="text-center text-primary font-body text-lg md:text-xl italic">
            Éveiller l'énergie vitale par transmission
          </p>
        </div>
      </section>

      {/* Qu'est-ce que la Kundalini */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-8 text-foreground flex items-center gap-3">
            <span className="text-2xl">🌿</span> Qu'est-ce que la Kundalini ?
          </h2>
          <div className="space-y-6 font-body text-foreground/80 leading-relaxed text-lg">
            <p>
              La Kundalini est une énergie spirituelle fondamentale présente en chaque être humain. Issue des traditions anciennes du yoga et du tantra, elle est décrite comme une <span className="text-primary font-medium">force vitale endormie</span> à la base de la colonne vertébrale, souvent représentée comme un serpent enroulé.
            </p>
            <p>
              Cette énergie, appelée aussi <span className="italic text-foreground">Shakti</span>, est une puissance de transformation profonde. Lorsqu'elle s'éveille, elle remonte le long de la colonne vertébrale à travers les centres énergétiques (chakras), entraînant :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {[
                { icon: Eye, text: "Une expansion de conscience" },
                { icon: Sparkles, text: "Une transformation intérieure" },
                { icon: Heart, text: "Une libération émotionnelle" },
                { icon: Star, text: "Une reconnexion à son essence" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-sm border border-border bg-card/40">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* L'éveil de la Kundalini */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-8 text-foreground flex items-center gap-3">
            <span className="text-2xl">⚡</span> L'éveil de la Kundalini
          </h2>
          <div className="font-body text-foreground/80 leading-relaxed text-lg space-y-6">
            <p>Traditionnellement, la Kundalini s'éveille à travers des pratiques comme :</p>
            <ul className="space-y-3 ml-4">
              {["La méditation", "Le yoga", "Le travail du souffle", "Des années de développement intérieur"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-card/60 border border-primary/20 rounded-sm p-6 mt-8">
              <p className="font-heading text-xl italic text-foreground/90">
                Aujourd'hui, il existe une autre approche : <span className="text-gradient-gold">l'activation par transmission énergétique</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilitation */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-8 text-foreground flex items-center gap-3">
            <span className="text-2xl">🌟</span> Qu'est-ce que la facilitation de la Kundalini ?
          </h2>
          <div className="font-body text-foreground/80 leading-relaxed text-lg space-y-6">
            <p>
              La facilitation de la Kundalini est une méthode moderne qui permet d'activer cette énergie <span className="text-primary font-medium">sans effort volontaire</span>, grâce à la présence d'un facilitateur.
            </p>
            <p>Elle repose sur :</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              {[
                { icon: Zap, text: "La transmission d'énergie" },
                { icon: Sparkles, text: "La résonance vibratoire" },
                { icon: Shield, text: "Un espace sécurisé" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-5 rounded-sm border border-border bg-card/40 text-center">
                  <item.icon className="w-6 h-6 text-primary" />
                  <span className="font-body text-foreground/80 text-base">{item.text}</span>
                </div>
              ))}
            </div>
            <p>Le facilitateur agit comme un <span className="text-primary font-medium">canal</span>, permettant à l'énergie de s'éveiller naturellement chez la personne.</p>
          </div>
        </div>
      </section>

      {/* Déroulement d'une séance */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-12 text-foreground flex items-center gap-3">
            <span className="text-2xl">🔥</span> Comment se déroule une séance ?
          </h2>
          <p className="font-body text-foreground/60 text-lg mb-12">
            Une séance est une expérience profonde, à la fois énergétique, émotionnelle et corporelle.
          </p>

          {/* Étape 1 */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-light mb-6 text-foreground flex items-center gap-3">
              <span>🧘‍♂️</span> Installation et respiration
            </h3>
            <div className="font-body text-foreground/80 leading-relaxed text-lg space-y-4 ml-2">
              <p>Tu es allongé(e), dans un espace sécurisé. La séance peut se faire :</p>
              <ul className="space-y-2 ml-4">
                {["En présentiel", "En visio", "Ou même à distance avec une photo"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Tu respires par la bouche, avec de grandes inspirations et expirations. Cette respiration permet de :</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                {["Te connecter à ton corps", "Ouvrir ton système énergétique", "Accéder à tes mémoires profondes"].map((item, i) => (
                  <div key={i} className="p-4 rounded-sm border border-border bg-card/40 text-center">
                    <span className="font-body text-foreground/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-light mb-6 text-foreground flex items-center gap-3">
              <span>🌿</span> Travail énergétique et nettoyage
            </h3>
            <div className="font-body text-foreground/80 leading-relaxed text-lg space-y-4 ml-2">
              <p>Pendant que tu entres dans cet état, j'interviens énergétiquement. Je travaille sur :</p>
              <ul className="space-y-2 ml-4">
                {[
                  "Les blocages énergétiques",
                  "Les mémoires émotionnelles et traumatiques",
                  "Les énergies stagnantes",
                  "Les déséquilibres des chakras",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Flame className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6">Je réalise un nettoyage complet incluant :</p>
              <ul className="space-y-2 ml-4">
                {[
                  "Libération des charges émotionnelles",
                  "Transmutation des chocs et traumatismes",
                  "Nettoyage des parasites énergétiques",
                  "Retrait des implants énergétiques",
                  "Harmonisation globale du système",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6">Je fais également :</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                {[
                  { icon: TreePine, text: "Connexion à la Terre (ancrage)" },
                  { icon: Sun, text: "Connexion au Ciel (énergie spirituelle)" },
                  { icon: Shield, text: "Stabilisation du corps énergétique" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-5 rounded-sm border border-border bg-card/40 text-center">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-body text-foreground/70 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-light mb-6 text-foreground flex items-center gap-3">
              <span>💆‍♂️</span> Libération corporelle
            </h3>
            <div className="font-body text-foreground/80 leading-relaxed text-lg space-y-4 ml-2">
              <p>Dans les séances en présentiel, j'utilise aussi des touchers spécifiques pour aider le corps à relâcher :</p>
              <div className="flex flex-wrap gap-3 mt-4">
                {["Le ventre", "Le nombril", "La cage thoracique", "Les pieds"].map((item, i) => (
                  <span key={i} className="px-4 py-2 rounded-sm border border-border bg-card/40 text-foreground/70 text-sm font-body">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-primary italic">Le but est de libérer les tensions profondes et d'ouvrir les zones clés du corps.</p>
            </div>
          </div>

          {/* Étape 4 */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-light mb-6 text-foreground flex items-center gap-3">
              <span>💫</span> Récupération et réunification
            </h3>
            <div className="font-body text-foreground/80 leading-relaxed text-lg space-y-4 ml-2">
              <p>Une fois le nettoyage effectué, je procède à :</p>
              <ul className="space-y-2 ml-4">
                {[
                  "La récupération des fragments d'âme prêts à revenir",
                  "La réintégration énergétique",
                  "La remise en cohérence du système",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Étape 5 - Activation */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-light mb-6 text-foreground flex items-center gap-3">
              <span>🔥</span> Activation de la Kundalini
            </h3>
            <div className="font-body text-foreground/80 leading-relaxed text-lg space-y-4 ml-2">
              <p>Lorsque tout est prêt et aligné : <span className="text-primary font-medium">j'active l'énergie de la Kundalini</span>.</p>
              <p>L'énergie commence alors à monter :</p>
              <div className="flex flex-col items-center gap-2 my-8">
                {["Depuis le sacré", "Le long de la colonne vertébrale", "Jusqu'au chakra couronne"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Flame className="w-4 h-4 text-primary" />
                    <span className="font-body text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <p>Tu peux ressentir :</p>
              <ul className="space-y-2 ml-4">
                {[
                  "Une chaleur intense, comme une flamme",
                  "Une énergie qui monte progressivement",
                  "Une dissolution des derniers blocages",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Libérations */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-light mb-6 text-foreground flex items-center gap-3">
              <span>🌈</span> Libérations et manifestations
            </h3>
            <div className="font-body text-foreground/80 leading-relaxed text-lg space-y-4 ml-2">
              <p>Pendant l'activation, il peut se produire :</p>
              <ul className="space-y-2 ml-4">
                {[
                  "Des émotions fortes (pleurs, rires…)",
                  "Des tremblements",
                  "Des mouvements spontanés du corps",
                  "Des remontées de traumatismes pour être libérés",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Heart className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 italic text-primary">Tout cela fait partie du processus naturel de guérison.</p>
            </div>
          </div>

          {/* Intégration */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-light mb-6 text-foreground flex items-center gap-3">
              <span>✨</span> Intégration et état de plénitude
            </h3>
            <div className="font-body text-foreground/80 leading-relaxed text-lg space-y-4 ml-2">
              <p>Lorsque l'énergie atteint le chakra couronne, un état profond s'installe :</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                {[
                  { emoji: "💖", text: "Bien-être intense" },
                  { emoji: "🌿", text: "Sensation de paix" },
                  { emoji: "⚡", text: "Énergie fluide dans tout le corps" },
                  { emoji: "🌍", text: "Ancrage renforcé" },
                  { emoji: "🧘‍♂️", text: "Présence à soi" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-sm border border-border bg-card/40">
                    <span className="text-lg">{item.emoji}</span>
                    <span className="font-body text-foreground/80">{item.text}</span>
                  </div>
                ))}
              </div>
              <p>Beaucoup décrivent :</p>
              <ul className="space-y-2 ml-4">
                {[
                  "Une sensation d'être plus lourd (ancré)",
                  "Plus présent",
                  "Aligné intérieurement",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mon approche */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-8 text-foreground flex items-center gap-3">
            <span className="text-2xl">🕊️</span> Mon approche en tant que facilitateur
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Shield, text: "Créer un espace sécurisé" },
              { icon: Zap, text: "Transmettre l'énergie" },
              { icon: Hand, text: "Accompagner chaque étape" },
              { icon: Heart, text: "Respecter ton rythme" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-sm border border-border bg-card/40 hover:border-primary/30 hover:shadow-gold transition-all duration-500">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-foreground/80">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-foreground/80 text-lg leading-relaxed">
            Ayant moi-même la Kundalini éveillée, je peux activer cette énergie chez toi de manière <span className="text-primary font-medium">fluide et consciente</span>.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-8 text-foreground">
            <span className="text-2xl">💫</span> Conclusion
          </h2>
          <div className="font-body text-foreground/80 leading-relaxed text-lg space-y-6 max-w-3xl mx-auto">
            <p>La facilitation de la Kundalini est un processus profond de transformation. Elle permet :</p>
            <ul className="space-y-3 text-left inline-block">
              {[
                "De libérer ce qui bloque",
                "De reconnecter à son énergie vitale",
                "D'activer son potentiel intérieur",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Flame className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-heading text-xl italic text-foreground/90 mt-8">
              C'est une expérience à <span className="text-gradient-gold">vivre</span>, plus qu'à comprendre.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-6 text-foreground">
            🔥 Prêt(e) à vivre l'expérience ?
          </h2>
          <div className="glow-line w-24 mx-auto mb-8" />
          <p className="font-body text-foreground/70 text-lg mb-10">
            Je t'accompagne avec bienveillance dans ce processus d'éveil.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-body tracking-wider uppercase text-sm rounded-sm hover:bg-primary/90 transition-colors duration-300"
          >
            Me contacter
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default LaKundalini;
