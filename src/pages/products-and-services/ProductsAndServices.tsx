import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { usePageMeta } from "../../hooks/usePageMeta";
import ProductsHeader from "./components/ProductsHeader";
import ProductsGrid from "./components/ProductsGrid";
import ServicesList from "./components/ServicesList";
import BottomCTA from "./components/BottomCTA";

const ProductsAndServices: React.FC = () => {
  usePageMeta({
    title: "Products & Services – Studio 1947",
    description:
      "Explore Studio 1947's suite of in-house software products and essential digital services designed for modern businesses.",
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <Layout>
      <div className="bg-white pt-32 pb-24 transition-colors duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsHeader />
          <ProductsGrid />
          <ServicesList />
          <BottomCTA />
        </div>
      </div>
    </Layout>
  );
};

export default ProductsAndServices;
