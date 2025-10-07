import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - Valnee Solutions",
  description: "Valnee Solutions Refund Policy - Our commitment to accountability, transparency, and the On-Time Delivery Guarantee",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#00020D] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 py-20 sm:py-24 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Refund Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Our Core Commitment: Accountability and Transparency
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-invert prose-lg max-w-none">

          <section className="mb-12">
            <p className="text-gray-300 leading-relaxed text-lg">
              As your Technical Execution Partner, Valnee Solutions is built on predictable delivery and zero financial guesswork. Our policy is designed to eliminate the risks non-technical founders face when starting a project.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">The Valnee On-Time Delivery Guarantee</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The most critical component of your MVP launch is predictability. This policy covers our core guarantee against internal delays.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">1. Guarantee Eligibility</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              This guarantee applies to all projects contracted under the <strong className="text-white">&quot;3-Stage Idea-to-Launch Velocity&quot;</strong> scope, where the project timeline and launch date are explicitly defined and agreed upon in the signed Scope of Work (SOW).
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">2. The Guarantee Terms</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><strong className="text-white">If Valnee Solutions misses the fixed launch date</strong> due to internal delays, resource issues, or errors in our development process:</li>
              <li className="ml-8">We will <strong className="text-white">pause all billing</strong> after the agreed-upon launch date.</li>
              <li className="ml-8">We will <strong className="text-white">continue development at no cost</strong> until the MVP is fully completed, deployed, and delivered according to the final SOW.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              This ensures you receive the full product, even if we are late, without incurring additional fees.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Refund Policy for Project Cancellation</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              This policy outlines the financial terms for cancellations before the project is completed.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">1. Cancellation During the Initial Blueprint & Strategy Phase (Stage 1)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Blueprint & Strategy Phase (Stage 1) is a standalone, paid service designed to deliver a fixed-price, fixed-scope technical roadmap.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
              <li>If the Client decides to cancel the project <strong className="text-white">before</strong> development (Stage 2) begins:</li>
              <li className="ml-8">The fee paid for the <strong className="text-white">Blueprint & Strategy Phase is non-refundable</strong>, as the strategic work and documentation have been delivered.</li>
              <li className="ml-8">Any payments made <strong className="text-white">in advance for future development stages (Stage 2 or 3) will be fully refunded</strong> within 10 business days.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-300">2. Cancellation During the Build Phase (Stage 2)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Build Phase is billed based on progress milestones.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
              <li>If the Client cancels the project <strong className="text-white">during</strong> the Build Phase:</li>
              <li className="ml-8"><strong className="text-white">Refunds will be processed only for services not yet rendered.</strong> We will calculate all completed work based on the project milestones and the agreed-upon hourly rate (if applicable) or milestone completion percentage.</li>
              <li className="ml-8">The remaining unused portion of any advanced payment will be refunded within 15 business days.</li>
              <li className="ml-8">Upon cancellation, all <strong className="text-white">completed code and intellectual property</strong> for which the Client has paid will be immediately transferred and delivered to the Client.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Exceptions (Situations Where the Guarantee Does Not Apply)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The On-Time Delivery Guarantee is designed to protect the Client from <strong className="text-white">our</strong> failures. It does not apply to delays caused by the Client or external factors.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li><strong className="text-white">Client-Requested Scope Change (Scope Creep):</strong> Any material changes, additions, or modifications to the initial SOW requested by the Client will require a new Change Order, which will result in a revised timeline and nullify the original launch date guarantee.</li>
              <li><strong className="text-white">Client Delays:</strong> Delays resulting from the Client&apos;s failure to provide required content, access credentials, feedback, or approval within the timelines specified in the SOW.</li>
              <li><strong className="text-white">Force Majeure:</strong> Delays caused by acts of God, war, terrorism, natural disasters, or other events beyond Valnee Solutions&apos; reasonable control.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">How to Initiate a Refund or Guarantee Claim</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To begin a claim under this policy, please contact us immediately:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-white mb-2"><strong>Email:</strong> support@valnee.com</p>
              <p className="text-white"><strong>Subject Line:</strong> Refund/Guarantee Claim – Valnee Solutions LLP</p>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              A Valnee Solutions representative will respond within one business day to initiate the review process.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
