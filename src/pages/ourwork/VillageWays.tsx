import BrandWorkTemplate from '../../components/BrandWorkTemplate';
import { getWorkBySlug } from '../../data/ourworksData';

const data = getWorkBySlug('village-ways')!;

export default function VillageWays() {
    return <BrandWorkTemplate data={data} />;
}
