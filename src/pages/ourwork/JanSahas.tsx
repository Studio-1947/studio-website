import BrandWorkTemplate from '../../components/BrandWorkTemplate';
import { getWorkBySlug } from '../../data/ourworksData';

const data = getWorkBySlug('jansahas')!;

export default function JanSahas() {
    return <BrandWorkTemplate data={data} />;
}
