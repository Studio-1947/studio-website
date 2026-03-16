import BrandWorkTemplate from '../../components/BrandWorkTemplate';
import { getWorkBySlug } from '../../data/ourworksData';

const data = getWorkBySlug('fermilab')!;

export default function Fermilab() {
    return <BrandWorkTemplate data={data} />;
}
