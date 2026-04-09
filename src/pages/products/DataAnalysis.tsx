import React from 'react';
import ProductPageTemplate from '../../components/products/ProductPageTemplate';
import { products } from '../../data/productsData';

const product = products.find((p) => p.slug === 'data-analysis')!;

const DataAnalysis: React.FC = () => <ProductPageTemplate product={product} />;

export default DataAnalysis;
