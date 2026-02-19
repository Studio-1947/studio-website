import React from 'react';
import Layout from '../components/Layout';

const ComingSoon: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          We are currently working on this page. Please check back later!
        </p>
      </div>
    </Layout>
  );
};

export default ComingSoon;
