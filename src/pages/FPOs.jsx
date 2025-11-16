import React from 'react';
import {
  Users,
  TrendingUp,
  Shield,
  BookOpen,
  Handshake,
  Truck,
  BarChart3,
  Target,
  Award,
  FileText,
  ArrowRight,
  CheckCircle,
  Calendar,
  DollarSign
} from 'lucide-react';

const FPOs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-4">
            <Users className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">For Farmer Producer Organizations</h1>
              <p className="text-xl text-gray-600 mt-2">Empowering FPOs with Technology, Markets & Sustainable Revenue</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StatCard number="10,000+" label="FPO Members Supported" />
            <StatCard number="₹8-10L" label="Additional Annual Revenue per FPO" />
            <StatCard number="50+" label="FPOs Partnered" />
            <StatCard number="15%" label="Average Yield Increase" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Comprehensive FPO Empowerment</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ValueItem
                icon={<TrendingUp className="w-8 h-8" />}
                title="Carbon Credit Revenue Stream"
                description="Enable your members to earn ₹800 per verified carbon credit through regenerative farming practices"
                features={[
                  "Exclusive partnership with Carboneg Europe",
                  "Guaranteed ₹800 per carbon credit",
                  "Additional ₹15,000-20,000 annual income per farmer",
                  "Simple documentation and verification process"
                ]}
              />

              <ValueItem
                icon={<Shield className="w-8 h-8" />}
                title="Input Procurement & Quality Assurance"
                description="Access to 35+ certified residue-free inputs at wholesale prices"
                features={[
                  "Bulk purchasing discounts up to 20%",
                  "Quality-assured residue-free inputs",
                  "Direct manufacturer relationships",
                  "Timely delivery to FPO warehouses"
                ]}
              />
            </div>

            <div className="space-y-8">
              <ValueItem
                icon={<Truck className="w-8 h-8" />}
                title="Assured Market Linkages"
                description="Direct buy-back arrangements with institutional buyers"
                features={[
                  "Contract farming with ITC, Reliance, Mother Dairy",
                  "Price premium of 10-15% for residue-free produce",
                  "Farm-gate procurement eliminating middlemen",
                  "Long-term purchase agreements"
                ]}
              />

              <ValueItem
                icon={<BookOpen className="w-8 h-8" />}
                title="Capacity Building & Training"
                description="Structured training programs for FPO staff and members"
                features={[
                  "Residue-free farming techniques",
                  "Digital literacy and record keeping",
                  "Financial management training",
                  "Quality standards and certification"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Financial Empowerment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FinancialCard
              icon={<DollarSign className="w-8 h-8" />}
              title="Input Financing"
              description="Credit facilities for input procurement with flexible repayment options"
              amount="Up to ₹50L credit limit"
            />
            <FinancialCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Revenue Diversification"
              description="Multiple income streams beyond traditional farming"
              amount="3+ revenue streams"
            />
            <FinancialCard
              icon={<Award className="w-8 h-8" />}
              title="Quality Premiums"
              description="Price premiums for certified residue-free produce"
              amount="10-15% higher prices"
            />
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Partnership Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <ProcessStep
                step="1"
                title="FPO Registration & Assessment"
                description="Complete profile setup and needs assessment"
                duration="1-2 weeks"
              />
              <ProcessStep
                step="2"
                title="Member Onboarding & Training"
                description="Digital onboarding and training programs"
                duration="2-3 weeks"
              />
              <ProcessStep
                step="3"
                title="Input Supply & Credit Setup"
                description="Input catalog access and credit facility activation"
                duration="1 week"
              />
              <ProcessStep
                step="4"
                title="Market Linkage Activation"
                description="Contract farming agreements and buy-back setup"
                duration="2-3 weeks"
              />
              <ProcessStep
                step="5"
                title="Carbon Credit Program Launch"
                description="Regenerative practice implementation and monitoring"
                duration="Ongoing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your FPO?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join India's leading network of technology-enabled Farmer Producer Organizations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Register Your FPO <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const StatCard = ({ number, label }) => (
  <div className="bg-blue-700 rounded-lg p-6">
    <div className="text-3xl font-bold mb-2">{number}</div>
    <div className="text-blue-100">{label}</div>
  </div>
);

const ValueItem = ({ icon, title, description, features }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const FinancialCard = ({ icon, title, description, amount }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-3">{description}</p>
    <div className="text-xl font-bold text-green-600">{amount}</div>
  </div>
);

const ProcessStep = ({ step, title, description, duration }) => (
  <div className="flex items-start space-x-6">
    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
      {step}
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <Calendar className="w-4 h-4 mr-1" />
        Duration: {duration}
      </div>
    </div>
  </div>
);

export default FPOs;