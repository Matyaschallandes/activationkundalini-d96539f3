// Type de la lecture personnalisée générée à partir du carnet complet.
// Lecture de bien-être et d'introspection : aucune visée médicale.

export type AiCarnetAnalysis = {
  synthese: string[];
  intensite: { niveau: string; message: string };
  themes: { titre: string; ce_que_montrent_tes_reponses: string }[];
  correlations: { lien: string; explication: string; a_explorer: string[] }[];
  croyances: { ancienne: string; ce_qui_alimente: string; nouvelle: string }[];
  emotions: { emotion: string; declencheur: string; protege: string; accueillir: string }[];
  mecanismes: {
    comportement: string;
    benefice_court_terme: string;
    cout_long_terme: string;
    alternative: string;
  }[];
  besoins: { besoin: string; pourquoi: string }[];
  ressources: { ressource: string; pourquoi: string }[];
  tensions: { partie_qui_avance: string; partie_qui_protege: string; reconciliation: string }[];
  axe: { phrase: string; pourquoi: string };
  cles: { nom: string; pourquoi: string; pratique: string; ancrage: string }[];
  exercices: { titre: string; deroule: string }[];
  plan: { aujourdhui: string; cette_semaine: string; avant_la_seance: string };
  seance: string[];
  lecture_energetique: string;
};
