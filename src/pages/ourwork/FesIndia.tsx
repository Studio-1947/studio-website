import BrandWorkTemplate from '../../components/BrandWorkTemplate';
import { getWorkBySlug } from '../../data/ourworksData';

const data = getWorkBySlug('fes-india')!;

export default function FesIndia() {
    return <BrandWorkTemplate data={data} />;
}
