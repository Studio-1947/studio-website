import BrandWorkTemplate from "../../components/BrandWorkTemplate";
import { getWorkBySlug } from "../../data/ourworksData";

const data = getWorkBySlug("fermylab")!;

export default function FermyLab() {
  return <BrandWorkTemplate data={data} />;
}
