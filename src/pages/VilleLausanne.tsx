import VillePage from "@/components/VillePage";
import { getCityPage } from "@/data/cityPages";

const page = getCityPage("/activation-kundalini-lausanne");

const VilleLausanne = () => (
  page ? <VillePage {...page} /> : null
);

export default VilleLausanne;
