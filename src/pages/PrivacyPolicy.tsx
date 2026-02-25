import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-32 pb-24 transition-colors duration-300 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-4">
              Privacy Policy
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-royal-600 to-indigo-600 rounded-full"></div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            <p>
              This Privacy Policy explains how Studio 1947 (“we”, “us”, “our”) collects, uses, discloses, and protects personal data obtained through the website 
              <a href="https://www.1947.io/" className="text-royal-600 dark:text-royal-400 hover:underline mx-1">https://www.1947.io/</a> 
              and through all associated services (“the Services”). By accessing or using the Site or the Services, users acknowledge and consent to the practices described in this Policy.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Information directly provided</strong> or submitted during registration, including name, email address, phone number, and password. Additionally, we may also collect any content uploaded or submitted through the Site, along with any communications exchanged when users contact the support team.</li>
              <li><strong>Automatically collected information</strong> when you use the Site, such as IP addresses, timestamps, browser types, cookies, pages viewed, interaction patterns, click data, and general usage behaviour.</li>
              <li><strong>Information from third parties</strong>, including analytics providers, advertising partners, social media platforms, or other integrations and plugins that you choose to connect.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Cookies and Tracking Technologies</h3>
            <p>
              We and our service providers use cookies, web beacons, and other tracking technologies to collect usage data and improve your experience. You may control or disable cookies through your browser settings, although doing so may affect certain features or functionalities of the Site.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">How We Use Your Information</h3>
            <p>
              We use personal data to operate, maintain, and improve the Site and our Services. This includes personalising your experience, communicating with you regarding any changes or updates, conducting analytics and research to understand how our Services are used, preventing fraud or security breaches, enforcing our Terms, and, as required by applicable law, regulation, or legal process.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Disclosure & Sharing of Information</h3>
            <p>
              Personal data may be disclosed to trusted service providers, contractors, and partners engaged in operating the Site or delivering the Services. Disclosure may also occur where required by law, regulation, or legal process, or in situations involving fraud prevention, security protection, or technical issue resolution. In the event of a merger, acquisition, restructuring, or transfer of assets, relevant information may be transferred accordingly, with appropriate notice provided to users. We do not sell your personal information to third parties.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">International Transfers</h3>
            <p>
              If you are accessing the Site from a location outside our home jurisdiction, your information may be transferred to, stored, and processed in a jurisdiction with different data protection laws. We will take reasonable steps to ensure that your personal data is treated securely and in accordance with this Privacy Policy during such transfers.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Data Retention</h3>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes outlined in this Policy or as required by law. Once data is no longer needed, we will delete or anonymise it in accordance with industry standards.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Security</h3>
            <p>
              We implement administrative, technical, and physical safeguards designed to protect your personal information from unauthorised access, disclosure, alteration, and destruction. However, please be aware that no method of transmission over the Internet or method of electronic storage is completely secure.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Your Rights & Choices</h3>
            <p>
              Depending on jurisdiction, you may exercise certain rights relating to your personal data, including rights to access, correct, update, delete, restrict processing, withdraw consent, or request data portability. To exercise any of these rights, please contact us using the information provided in the "Contact Information" section below. We may need to verify your identity before responding to your request.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Children’s Privacy</h3>
            <p>
              Our Site and Services are not intended for individuals under the applicable minimum age threshold (13-16, depending on jurisdiction). We do not knowingly collect personal information from minors. Any data identified as belonging to a child under the relevant age threshold will be deleted promptly.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Changes to the Policy</h3>
            <p>
              This Privacy Policy may be amended periodically. Significant updates will be communicated through email or prominent notices. Continued use of the Site or Services after the posting of any revised Privacy Policy constitutes the acceptance of its terms.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Links to Other Sites</h3>
            <p>
              Our Site may contain links to other websites that are not operated by us. We are not responsible for the content or privacy practices of these third-party sites. We encourage you to review the privacy policies of any website you visit before submitting personal information.
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

export default PrivacyPolicy;
