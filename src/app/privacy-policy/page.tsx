import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Valnee Solutions",
  description: "How we collect, use, and protect your information when you work with Valnee Solutions, your Technical Execution Partner",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#00020D] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 py-20 sm:py-24 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            How we collect, use, and protect your information when you work with Valnee Solutions, your Technical Execution Partner
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-invert prose-lg max-w-none">

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Valnee Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), your <strong className="text-blue-400">Technical Execution Partner</strong>, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage our MVP development services, or interact with us in any way.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              We specialize in providing fixed-scope MVP development and product strategy services to founders and entrepreneurs, helping them build and launch software assets predictably.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">2. Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">2.1 Information You Provide</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect information directly from you when you book a call or engage in our services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business information (company name, role, <strong className="text-white">Blueprint</strong> requirements)</li>
              <li>Project requirements and specifications necessary for the <strong className="text-white">Strategy & Clarity Phase</strong></li>
              <li>Payment and billing information</li>
              <li>Feedback, testimonials, and reviews</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">2.2 Automatically Collected Information</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you use our website, we automatically collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, website interactions)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Analytics data to improve our services and user experience</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">3. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Provide and improve our MVP development services, including executing the <strong className="text-white">3-Stage Idea-to-Launch Velocity System</strong></li>
              <li>Communicate with you about project progress and milestones</li>
              <li>Process payments and manage billing associated with our fixed-price agreements</li>
              <li>Analyze website usage and improve the founder experience</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><strong className="text-white">Service Providers:</strong> With trusted third-party service providers who assist us in operating our business (e.g., payment processors, hosting services, project management tools).</li>
              <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
              <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              <li><strong className="text-white">Consent:</strong> With your explicit consent for specific purposes, such as using your project as a case study.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We strive to maintain a high level of security but note that no electronic transmission method is 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">6. Your Rights and Choices</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the following rights regarding your personal information, which you may exercise by contacting us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><strong className="text-white">Access:</strong> Request access to your personal information.</li>
              <li><strong className="text-white">Correction:</strong> Request correction of inaccurate information.</li>
              <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information.</li>
              <li><strong className="text-white">Opt-out:</strong> Unsubscribe from marketing communications.</li>
              <li><strong className="text-white">Portability:</strong> Request a copy of your data in a portable format.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">7. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website and services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the following types of third-party services for operational efficiency:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Online scheduling software for booking <strong className="text-white">Blueprint Calls</strong></li>
              <li>Payment processors for managing fixed-price billing</li>
              <li>Analytics services to improve the website experience</li>
              <li>Email services for project communication</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">8. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Once your information is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">9. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">10. Children&apos;s Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">12. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-white mb-2"><strong>Email:</strong> support@valnee.com</p>
              <p className="text-white"><strong>Website:</strong> <a href="https://valnee.com" className="text-blue-400 hover:text-blue-300 transition-colors">valnee.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
