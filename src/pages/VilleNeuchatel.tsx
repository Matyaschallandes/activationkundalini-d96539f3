import VillePage from "@/components/VillePage";
import { getCityPage } from "@/data/cityPages";

const page = getCityPage("/activation-kundalini-neuchatel");

const VilleNeuchatel = () => (
  page ? <VillePage {...page} /> : null
);

export default VilleNeuchatel;
