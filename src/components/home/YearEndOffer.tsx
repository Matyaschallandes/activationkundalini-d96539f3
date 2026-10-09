import { CalendarDays, Mail, MessageCircle, Phone } from "lucide-react";
import offerAsset from "@/assets/offre-speciale-fin-annee.png.asset.json";
import { Button } from "@/components/ui/button";
import { KOALENDAR_URL } from "@/lib/links";

const whatsappUrl = `https://wa.me/41762445552?text=${encodeURIComponent("Bonjour Matyas, je souhaite profiter de l’offre spéciale fin d’année gratuite. Je vous envoie ma photo de profil récente.")}`;
const emailUrl = `mailto:matyas.challandes@gmail.com?subject=${encodeURIComponent("Offre spéciale fin d’année — ma photo")}&body=${encodeURIComponent("Bonjour Matyas,\n\nJe souhaite profiter de l’offre découverte gratuite.\n\nMon prénom et nom :\nMon numéro de téléphone :\n\nJe joins à cet email une photo de profil récente, prise aujourd’hui.\n\nMerci !")}`;

const YearEndOffer = () => (
  <section aria-labelledby="year-end-offer-title" className="bg-background pb-10 pt-8 md:pb-14">
    <div className="container mx-auto max-w-6xl px-4 md:px-6">
      <h2 id="year-end-offer-title" className="py-5 text-center font-heading text-3xl font-semibold text-primary md:text-4xl">
        Offre spéciale fin d’année — découverte gratuite
      </h2>
      <img
        src={offerAsset.url}
        alt="Karmaequilego : offre découverte gratuite de fin d’année, exploration énergétique à partir d’une photo de profil et mini-soin d’activation Kundalini en visioconférence."
        width={1152}
        height={768}
        fetchPriority="high"
        className="block h-auto w-full"
      />
      <div className="mx-auto max-w-4xl pt-7 text-center">
        <h3 className="font-heading text-2xl text-foreground md:text-3xl">
          Et si votre corps avait quelque chose à vous faire explorer ?
        </h3>
        <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground md:text-base">
          Vous avez l’impression de tourner en rond ou de porter trop de choses ? Offrez-vous un moment pour vous,
          avec une expérience <strong className="text-foreground">100 % gratuite et sans engagement</strong>.
        </p>
        <div className="mt-6 grid gap-5 text-left md:grid-cols-3">
          <div>
            <h4 className="font-heading text-xl text-foreground">Votre exploration personnalisée</h4>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
              Envoyez une photo de vous de profil, récente et prise le jour même. Je vous transmets les vertèbres repérées lors de mon scan énergétique et leurs pistes de réflexion émotionnelles et spirituelles.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xl text-foreground">Un temps pour vous</h4>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
              Lisez les informations tranquillement et observez ce qui fait écho à votre histoire, vos émotions et vos envies de changement.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xl text-foreground">Une découverte de la Kundalini</h4>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
              Recevez un mini-soin d’activation Kundalini en visioconférence pour découvrir cette approche corporelle et énergétique.
            </p>
          </div>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal py-3 font-body">
            <a href={KOALENDAR_URL} target="_blank" rel="noopener noreferrer"><CalendarDays />Prendre rendez-vous gratuitement</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-auto min-h-12 whitespace-normal py-3 font-body">
            <a href="tel:+41762445552"><Phone />Contacter Matyas</a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="h-auto min-h-12 whitespace-normal py-3 font-body">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle />Envoyer ma photo par WhatsApp</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-auto min-h-12 whitespace-normal py-3 font-body">
            <a href={emailUrl}><Mail />Envoyer ma photo par email</a>
          </Button>
        </div>
        <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
          Par email à <a className="text-primary underline underline-offset-4" href={emailUrl}>matyas.challandes@gmail.com</a>,
          pensez à joindre votre photo et votre <strong className="text-foreground">numéro de téléphone</strong>.
          Téléphone / WhatsApp : <a href="tel:+41762445552" className="text-primary underline underline-offset-4">+41 76 244 55 52</a>.
        </p>
        <p className="mt-3 font-body text-xs leading-relaxed text-muted-foreground">
          Cette exploration propose des pistes de réflexion, pas un diagnostic médical. Elle ne remplace pas un suivi médical.
        </p>
      </div>
    </div>
  </section>
);

export default YearEndOffer;