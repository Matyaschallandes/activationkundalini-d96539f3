CREATE TABLE public.offre_demandes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  prenom text NOT NULL,
  nom text NOT NULL,
  date_naissance date NOT NULL,
  heure_naissance text,
  lieu_naissance text,
  telephone text,
  email text,
  message text,
  consentement boolean NOT NULL DEFAULT false
);
GRANT ALL ON public.offre_demandes TO service_role;
ALTER TABLE public.offre_demandes ENABLE ROW LEVEL SECURITY;