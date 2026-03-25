import BrandWorkTemplate from "../../components/BrandWorkTemplate";
import { getWorkBySlug } from "../../data/ourworksData";

const data = getWorkBySlug("awch")!;

export default function Awch() {
  return <BrandWorkTemplate data={data} />;
}
