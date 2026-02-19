import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  offerName?: string;
}

const ContactFormDialog = ({ open, onOpenChange, offerName }: ContactFormDialogProps) => {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    dateNaissance: "",
    lieuNaissance: "",
    heureNaissance: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.prenom || !form.nom || !form.email) {
      toast.error("Merci de remplir au moins le prénom, le nom et l'email.");
      return;
    }
    toast.success("Merci ! Ta demande a bien été envoyée. 🌿");
    setForm({
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      dateNaissance: "",
      lieuNaissance: "",
      heureNaissance: "",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-foreground">
            {offerName ? `Réserver — ${offerName}` : "Réserver un appel découverte"}
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground">
            Remplis ce formulaire et je te recontacte rapidement.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prenom" className="font-body text-foreground/80">Prénom *</Label>
              <Input
                id="prenom"
                value={form.prenom}
                onChange={(e) => handleChange("prenom", e.target.value)}
                maxLength={100}
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom" className="font-body text-foreground/80">Nom *</Label>
              <Input
                id="nom"
                value={form.nom}
                onChange={(e) => handleChange("nom", e.target.value)}
                maxLength={100}
                className="bg-background border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-body text-foreground/80">Email *</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              maxLength={255}
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telephone" className="font-body text-foreground/80">Téléphone</Label>
            <Input
              id="telephone"
              type="tel"
              value={form.telephone}
              onChange={(e) => handleChange("telephone", e.target.value)}
              maxLength={20}
              className="bg-background border-border"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dateNaissance" className="font-body text-foreground/80">Date de naissance</Label>
              <Input
                id="dateNaissance"
                type="date"
                value={form.dateNaissance}
                onChange={(e) => handleChange("dateNaissance", e.target.value)}
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="heureNaissance" className="font-body text-foreground/80">Heure de naissance</Label>
              <Input
                id="heureNaissance"
                type="time"
                value={form.heureNaissance}
                onChange={(e) => handleChange("heureNaissance", e.target.value)}
                className="bg-background border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lieuNaissance" className="font-body text-foreground/80">Lieu de naissance</Label>
            <Input
              id="lieuNaissance"
              value={form.lieuNaissance}
              onChange={(e) => handleChange("lieuNaissance", e.target.value)}
              maxLength={200}
              className="bg-background border-border"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm py-3 rounded-sm hover:shadow-gold transition-all duration-300 mt-4"
          >
            Envoyer ma demande
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
