# Audit et plan de conversion — activationkundalini.ch (Karmaequilego)

Aucun fichier n'est modifié tant que ce plan n'est pas approuvé. Aucun service externe connecté, rien de publié.

## 1. Ce qui existe déjà

- Accueil en tunnel : bandeau « 1re heure offerte » + note Google 4,9/5, offre spéciale fin d'année (photo de profil, scan des vertèbres, mini-soin Kundalini en visio), hero avec H1 Neuchâtel/Bevaix, parcours en 6 étapes, sections blocages, dialogue avec le corps, Kundalini, « Comment ça se passe », à propos, précautions, avis Google, FAQ (6 questions), derniers articles, 3 boutons « Prendre rendez-vous ».
- Prise de rendez-vous : calendrier Koalendar (externe), formulaire de contact (nom, email, téléphone, naissance), WhatsApp flottant, barre mobile Appeler / WhatsApp.
- Carnet de préparation en ligne avec lecture et PDF, fiches clients dans l'espace privé.
- Pages : Kundalini, chamanisme, kinésiologie, Reiki, Lahochi, offres, offre découverte, déroulement d'une séance, cantons et villes, séances à distance, accès au cabinet, mentions légales, confidentialité, blog, boutique (ebooks via Stripe).
- Confiance : badge Google, mentions « ne remplace pas un suivi médical », bloc précautions, ligne 143.

## 2. Lacunes constatées

1. **Trop d'offres d'entrée en concurrence** : « 1re heure offerte », « offre fin d'année (photo) », « découverte 15 min », « lecture d'âme gratuite ». Le visiteur ne sait pas laquelle choisir.
2. **L'offre d'entrée souhaitée n'existe pas** : nom, prénom, date de naissance → 5 blocages principaux + mini-soin. Aujourd'hui c'est une photo envoyée par WhatsApp ou email, sans formulaire ni suivi.
3. **Accueil trop long** : environ 15 sections, plusieurs textes se répètent (parcours, Kundalini, à propos deux fois).
4. **Prestations pas présentées en un coup d'œil** : il manque une grille simple (soin chamanique, activation Kundalini, massage énergétique et libération somatique, kinésiologie). Le massage énergétique / libération somatique n'apparaît nulle part.
5. **Kinésiologie** : écrire partout « en formation (1re année) ».
6. **Vouvoiement restant** dans plusieurs blocs (offre fin d'année, parcours, hero).
7. **Avis** : aucun vrai avis encore affiché (emplacements vides), nombre d'avis inconnu.
8. **Aucun suivi des demandes** : on ne sait pas combien de personnes ont cliqué sur rendez-vous ou envoyé une photo.

## 3. Tunnel proposé (simple, 4 étapes)

```text
Accueil clair ──> Offre gratuite (formulaire) ──> Résultat + mini-soin ──> Séance complète
     │                    │                             │                      │
 promesse + CTA     nom, prénom, date          5 blocages envoyés,       rendez-vous
 visible mobile     de naissance, tél/email,   lien agenda pour le       Koalendar,
                    consentement               mini-soin en visio        prix libre
```

## 4. Plan d'action

**Étape A — Une seule offre d'entrée**
- Nouvelle offre unique : « Tes 5 blocages principaux + un mini-soin énergétique offert ».
- Formulaire court sur le site : prénom, nom, date de naissance (heure/lieu facultatifs pour la lecture d'âme), téléphone ou email, case de consentement obligatoire.
- Message de confirmation : « Je te réponds sous X jours » [À COMPLÉTER] + bouton agenda pour le mini-soin.
- L'offre fin d'année (photo) devient une variante saisonnière ou est remplacée — à décider.

**Étape B — Accueil resserré (environ 8 sections)**
1. Bandeau offre + note Google
2. Hero : promesse, photo, bouton « Recevoir mes 5 blocages »
3. « Tu te reconnais ? » (blocages, court)
4. Les 4 prestations en cartes, avec lien vers chaque page
5. Comment ça se passe (3 étapes)
6. Avis Google + à propos court
7. FAQ + précautions
8. CTA final + derniers articles
Les sections retirées restent accessibles sur leurs pages (rien n'est supprimé).

**Étape C — Prestations**
- Grille claire sur l'accueil et la page Offres : durée, format (cabinet / distance), prix libre.
- Nouvelle page « Massage énergétique et libération somatique », sans promesse médicale.
- Kinésiologie présentée « en formation (1re année) ».

**Étape D — Mobile et contact**
- Barre fixe : Appeler · WhatsApp · « 5 blocages offerts ».
- Même téléphone +41 76 244 55 52 partout, tutoiement partout.

**Étape E — Confiance**
- Afficher 3 à 6 vrais avis Google dès que tu me les fournis.
- Précautions et mention « accompagnement complémentaire » gardées.

## 5. Stratégie de conversion

- Un seul message, un seul bouton principal répété (haut, milieu, bas).
- Offre gratuite à faible effort (date de naissance), puis passage naturel vers le mini-soin, puis la séance.
- Preuve sociale près de chaque bouton.
- Mesure simple : compter les formulaires envoyés et les clics agenda/WhatsApp.

## 6. Risques et dépendances

- **Email** : l'envoi d'emails automatiques ne fonctionne pas aujourd'hui (domaine non configuré). Solution sans service externe : les demandes sont enregistrées dans ton espace fiches et tu réponds toi-même ; confirmation affichée à l'écran.
- **Formulaire et données** : la date de naissance est une donnée personnelle → case de consentement, mise à jour de la page confidentialité, durée de conservation [À COMPLÉTER].
- **Agenda** : reste sur Koalendar (externe), aucun changement.
- **Paiement** : séances en prix libre, pas de paiement en ligne ajouté ; la boutique ebooks reste sur Stripe.
- **Analyse automatique des 5 blocages** : à décider — rédigés par toi à la main (recommandé, plus authentique) ou préparés automatiquement puis relus par toi.
- **Contenu à fournir** : vrais avis, délai de réponse, parking, horaires, numéro IDE.
- **Santé** : aucune promesse de guérison, vocabulaire « accompagner, soutenir, apaiser ».

## Détails techniques

- Nouveau composant d'offre gratuite placé avant le contenu existant de l'accueil (règle du projet), nouvelle table de demandes avec accès réservé à l'espace fiches, affichage dans la page admin existante.
- Nouvelle route pour la page massage énergétique, ajoutée au prérendu et au sitemap.
- Mise à jour du texte de la barre mobile, du hero et des blocs encore au vouvoiement.
