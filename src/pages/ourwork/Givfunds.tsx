import BrandWorkTemplate from '../../components/BrandWorkTemplate';
import { getWorkBySlug } from '../../data/ourworksData';

const data = getWorkBySlug('givfunds')!;

export default function Givfunds() {
    return <BrandWorkTemplate data={data} />;
}
