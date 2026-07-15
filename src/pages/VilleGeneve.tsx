import VillePage from "@/components/VillePage";
import { getCityPage } from "@/data/cityPages";

const page = getCityPage("/activation-kundalini-geneve");

const VilleGeneve = () => (
  page ? <VillePage {...page} /> : null
);

export default VilleGeneve;
