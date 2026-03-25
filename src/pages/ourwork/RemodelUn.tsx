import BrandWorkTemplate from '../../components/BrandWorkTemplate';
import { getWorkBySlug } from '../../data/ourworksData';

const data = getWorkBySlug('remodel-un')!;

export default function RemodelUn() {
    return <BrandWorkTemplate data={data} />;
}
