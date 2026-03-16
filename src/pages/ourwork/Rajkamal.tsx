import BrandWorkTemplate from '../../components/BrandWorkTemplate';
import { getWorkBySlug } from '../../data/ourworksData';

const data = getWorkBySlug('rajkamal')!;

export default function Rajkamal() {
    return <BrandWorkTemplate data={data} />;
}
