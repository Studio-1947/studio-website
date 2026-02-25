import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-32 pb-24 transition-colors duration-300 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-4">
              Terms of Service
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-royal-600 to-indigo-600 rounded-full"></div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            <p>
              These Terms of Service (“Terms”) govern access to and use of the website 
              <a href="https://www.1947.io/" className="text-royal-600 dark:text-royal-400 hover:underline mx-1">https://www.1947.io/</a> 
              (“the Site”) and all associated digital products, tools, and services provided by Studio 1947 (“Studio 1947”, “we”, “us”, or “our”). By accessing or using the Site or the Services, users agree to be bound by these Terms. If you do not agree with any part of these Terms, you must discontinue use of the Site and Services.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Use of the Site and Services</h3>
            <p>
              The Site and Services are provided for lawful purposes only and must be used in compliance with these Terms and all applicable laws. Users agree not to engage in any activity that may disrupt, damage, or interfere with the functionality, security, or integrity of the Site, systems, or networks. Any attempt to access areas of the Site or servers not intended for public use, or to violate system security, is strictly prohibited.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Eligibility</h3>
            <p>
              Use of the Site is permitted only for individuals who are legally capable of entering into binding agreements under applicable law. The Services are not intended for individuals under the minimum age defined in our Privacy Policy.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Registration/Form Fillup</h3>
            <p>
              Certain features of the Services may require users to register or fill up a form. Users must provide accurate, complete, and current information during the process for maintaining confidentiality. Any activity conducted through a user will be considered the responsibility of the user. We reserve the right to block or suspend users who provide false information or violate these Terms.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">User Content</h3>
            <p>
              Users may upload, submit, or transmit content while using the Site. By submitting content, users grant us a non-exclusive, royalty-free, worldwide licence to store, display, and process that content solely for the purpose of operating and improving the Services. Users must ensure that all submitted content is lawful and does not violate the rights of third parties. We reserve the right to remove or restrict content that is harmful, unlawful, or in violation of these Terms.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Intellectual Property</h3>
            <p>
              All content on the Site, including text, graphics, images, logos, software, and design elements, is the property of Studio 1947 or its licensors. Users are granted a limited, non-exclusive, non-transferable licence to access and use the Site for personal or internal business purposes. Reproduction, distribution, modification, or commercial exploitation of any part of the Site without explicit written permission is prohibited.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Prohibited Activities</h3>
            <p>Users agree not to engage in activities including, but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Attempting to gain unauthorised access to systems, data, or user information.</li>
              <li>Uploading malicious code, viruses, or harmful software.</li>
              <li>Infringing intellectual property rights.</li>
              <li>Impersonating other individuals or entities.</li>
              <li>Using the Site for fraudulent, harmful, or unlawful purposes.</li>
              <li>Interfering with or disrupting the performance of the Site.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Modifications to the Services</h3>
            <p>
              We may modify, update, restrict, or discontinue any part of the Site or Services at any time, with or without notice. We will not be liable for any such modifications or disruptions.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Third-Party Links and Integrations</h3>
            <p>
              Our Site may contain links to third-party websites or services that are not operated or controlled by us. We’re not responsible for the content, security, or privacy practices of such external sites. Users access third-party resources at their own risk and should review their respective terms and policies.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of the Site or Services. This includes, without limitation, loss of data, revenue, profits, business opportunities, or reputational harm. The total liability of us for any claim arising under these Terms shall not exceed the amount paid by the user for the Services, if any.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Indemnification</h3>
            <p>
              Users agree to indemnify, defend, and hold harmless Studio 1947, its employees, directors, and partners from any claims, damages, losses, or expenses arising from their use of the Site, violation of these Terms, or infringement of any third-party rights.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Termination</h3>
            <p>
              We may suspend or terminate user access to the Site or Services at our discretion, with or without notice, for conduct that violates these Terms or is harmful to us, other users, or the integrity of the Site. Upon termination, all rights granted under these Terms will cease immediately.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Governing Law</h3>
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws of the jurisdiction in which we operate, without regard to conflict-of-law principles. Any disputes arising under these Terms shall be resolved exclusively in the courts of that jurisdiction.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Changes to These Terms</h3>
            <p>
              We may revise or update these Terms at any time. Significant changes may be communicated through the Site, email or other forms of communication. Continued use of the Site or Services after the posting of revised Terms constitutes acceptance of the updated version.
            </p>

            <div className="mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <p className="mb-4">For any questions, concerns, or notices related to these Terms of Service, users may contact:</p>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="font-semibold text-gray-900 dark:text-white w-32">Email:</span>
                  <a href="mailto:studio@1947.io" className="text-royal-600 dark:text-royal-400 hover:underline">studio@1947.io</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold text-gray-900 dark:text-white w-32">Call/WhatsApp:</span>
                  <a href="tel:+917207680813" className="text-royal-600 dark:text-royal-400 hover:underline">+91 72076 80813</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
