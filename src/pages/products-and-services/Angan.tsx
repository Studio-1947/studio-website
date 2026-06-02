import React from 'react';
import ProductPageTemplate from '../../components/products/ProductPageTemplate';
import { products } from '../../data/productsData';

const product = products.find((p) => p.slug === 'angan')!;

const Angan: React.FC = () => <ProductPageTemplate product={product} />;

export default Angan;
