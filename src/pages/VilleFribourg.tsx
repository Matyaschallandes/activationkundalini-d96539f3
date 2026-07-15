import VillePage from "@/components/VillePage";
import { getCityPage } from "@/data/cityPages";

const page = getCityPage("/activation-kundalini-fribourg");

const VilleFribourg = () => (
  page ? <VillePage {...page} /> : null
);

export default VilleFribourg;
