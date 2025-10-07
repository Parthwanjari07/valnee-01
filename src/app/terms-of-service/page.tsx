import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Valnee Solutions",
  description: "Terms of Service and Conditions governing the use of Valnee Solutions' MVP Development and Strategy Services",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#00020D] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 py-20 sm:py-24 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Governing the use of Valnee Solutions&apos; MVP Development and Strategy Services
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
            <h2 className="text-3xl font-bold mb-6 text-white">1. Acceptance of Terms and Role</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By engaging Valnee Solutions (&quot;Valnee,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for services, you (&quot;Client,&quot; &quot;Founder,&quot; or &quot;you&quot;) agree to be bound by these Terms of Service (&quot;Terms&quot;). These Terms establish a legally binding agreement that defines the relationship between Client and Valnee.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Our Role:</strong> Valnee Solutions acts as the Client&apos;s <strong className="text-blue-400">Technical Execution Partner</strong>, committing our expertise and resources to translate the Client&apos;s vision into a launch-ready, scalable software asset.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">2. Services Description and Structure</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">2.1 The 3-Stage Idea-to-Launch Velocity System</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Valnee provides specialized Minimum Viable Product (MVP) development services structured across three defined stages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
              <li><strong className="text-white">Stage 1: Blueprint & Strategy:</strong> Product strategy, fixed-scope definition, technical specification, and roadmap creation.</li>
              <li><strong className="text-white">Stage 2: AI-Accelerated Build:</strong> Full-stack development, database design, API implementation, and quality assurance.</li>
              <li><strong className="text-white">Stage 3: Launch & Validation:</strong> Deployment to live environment, final testing, and technical asset handover.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">2.2 Service Commitments</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>We commit to delivering the core MVP within the fixed timeline agreed upon in the SOW (typically <strong className="text-white">3 weeks</strong>), subject to the terms of Section 7.</li>
              <li>All deliverables will be <strong className="text-white">production-ready and fully functional</strong>.</li>
              <li><strong className="text-white">100% of the custom source code and technical documentation</strong> will be provided to the Client upon final delivery.</li>
              <li><strong className="text-white">30 days of post-launch support</strong> is included for bug fixes and performance monitoring.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">3. Payment Terms and Fixed Pricing</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">3.1 Fixed-Price, Fixed-Scope Model</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
              <li>Payment terms are defined by the fixed-price agreement outlined in the final Scope of Work (SOW) derived from <strong className="text-white">Stage 1 (Blueprint)</strong>.</li>
              <li>All payments are due according to the pre-determined milestone schedule established in the SOW.</li>
              <li>All fees are fixed for the agreed-upon scope; <strong className="text-white">no hidden hourly charges or surprise fees</strong> will be added.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">3.2 Payment Structure and Methods</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
              <li>Payments are typically due at the commencement of each major project stage (e.g., 50% at Stage 2 commencement, 50% upon Stage 3 completion).</li>
              <li>Payments must be made in USD unless otherwise agreed.</li>
              <li>Acceptable payment methods include Bank Transfer and standard digital payment platforms (e.g., Stripe).</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">3.3 Late Payment Policy</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Payments overdue by more than <strong className="text-white">14 days</strong> may incur a <strong className="text-white">2% monthly service charge</strong>.</li>
              <li>Work will be <strong className="text-white">suspended</strong> until payment is received.</li>
              <li>Valnee reserves the right to withhold final deliverables and the Client&apos;s <strong className="text-white">100% Code Ownership</strong> rights until all outstanding fees are paid in full.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">4. Client Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The success of the project requires timely commitment from the Client, particularly in the Blueprint stage.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>The Client must provide <strong className="text-white">clear project requirements</strong> and timely feedback within <strong className="text-white">2 business days</strong> of a request.</li>
              <li>The Client must designate a <strong className="text-white">primary point of contact</strong> for all project communication and decisions.</li>
              <li>The Client warrants that all materials provided (e.g., content, images, existing code) are <strong className="text-white">legally owned or licensed</strong> for use in the project.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">5. Intellectual Property and Code Ownership</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This section is paramount to Valnee&apos;s commitment to delivering a true asset to the Founder.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">5.1 Client Ownership (The Asset)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Upon full and final payment of all fees, the Client <strong className="text-white">will own 100% of the Intellectual Property (IP)</strong> developed specifically for the project, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
              <li>The completed MVP application and its <strong className="text-white">source code</strong>.</li>
              <li>All custom-developed features, logic, and functionality.</li>
              <li>All technical documentation and database schemas.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">5.2 Valnee Retained Rights</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Valnee retains the rights to use <strong className="text-white">general methodologies, processes, and non-Client-specific know-how</strong>. We reserve the right to use the project as a case study in our portfolio only with the Client&apos;s express written permission.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">5.3 Third-Party Components</h3>
            <p className="text-gray-300 leading-relaxed">
              The MVP will incorporate third-party libraries, open-source components, or AI tools (e.g., Next.js, Supabase, AI code assistants). These remain subject to their respective licenses and terms. Valnee warrants that all incorporated components are <strong className="text-white">properly licensed for commercial use</strong>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">6. Confidentiality and Non-Disclosure</h2>
            <p className="text-gray-300 leading-relaxed">
              Valnee acknowledges that the Client will share sensitive business information. We commit to keeping all project details, strategies, and proprietary information confidential and will use this information solely for the purpose of delivering the MVP. Confidentiality obligations shall extend for a period of <strong className="text-white">5 years</strong> after project completion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">7. Warranties and The On-Time Delivery Guarantee</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">7.1 The Valnee On-Time Delivery Guarantee</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Valnee guarantees the MVP will be delivered and launched by the fixed date specified in the SOW, provided the Client meets their responsibilities.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
              <li><strong className="text-white">If Valnee misses the fixed launch date</strong> due to internal delays, resource issues, or errors in our development process:</li>
              <li className="ml-8">We commit to <strong className="text-white">pausing all billing</strong> after the agreed-upon launch date.</li>
              <li className="ml-8">We will <strong className="text-white">continue development at no cost</strong> until the MVP is fully completed, deployed, and delivered according to the final SOW.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">7.2 Service Warranties</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
              <li>We warrant that services will be performed with professional skill and care.</li>
              <li>All deliverables will be free from material defects and bugs for <strong className="text-white">30 days post-launch</strong> (the &quot;Warranty Period&quot;). We will fix any reported bugs at no additional cost during this period.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">7.3 Disclaimers</h3>
            <p className="text-gray-300 leading-relaxed">
              VALNEE SOLUTIONS MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR GUARANTEES OF SPECIFIC BUSINESS OUTCOMES OR FINANCIAL RESULTS.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">8. Project Scope and Change Management</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>The project scope is defined during <strong className="text-white">Stage 1 (Blueprint)</strong> and is considered fixed once the SOW is signed.</li>
              <li>Any requests for <strong className="text-white">significant changes</strong> to functionality, features, or technical requirements must be submitted as a formal Change Request.</li>
              <li>A Change Request may result in a revised SOW, additional cost, and a <strong className="text-white">new delivery timeline</strong>, thereby nullifying the original On-Time Delivery Guarantee. <strong className="text-white">Minor adjustments</strong> within the original scope are included.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">9. Limitation of Liability and Termination</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">9.1 Limitation of Liability</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Valnee&apos;s total liability for any claims arising from or related to these Terms shall not exceed the <strong className="text-white">total amount paid by the Client for the specific project</strong> giving rise to the claim. Valnee shall not be liable for indirect, incidental, or consequential damages, including loss of profits, revenue, or business opportunities.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">9.2 Termination</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>The Client may terminate the project with <strong className="text-white">7 days written notice</strong>. Payment is due for all work completed up to the termination date.</li>
              <li>Valnee may terminate the project for non-payment after <strong className="text-white">14 days notice</strong> or for the Client&apos;s breach of these Terms.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">10. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of laws principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Delaware.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">11. Entire Agreement and Updates</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between the Client and Valnee Solutions. Valnee reserves the right to modify these Terms and will notify the Client of any material changes by updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">12. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For any questions regarding these Terms of Service, please contact:
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
