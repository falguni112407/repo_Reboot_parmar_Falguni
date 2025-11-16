import React from 'react';
import {
  Leaf,
  TrendingUp,
  Shield,
  Target,
  BarChart3,
  Globe,
  FileCheck,
  Award,
  CheckCircle,
  ArrowRight,
  Users,
  TreePine,
  Calculator
} from 'lucide-react';

const CarbonCreditBuyers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-4">
            <Leaf className="w-12 h-12 text-green-600 mr-4" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Carbon Credit Marketplace</h1>
              <p className="text-xl text-gray-600 mt-2">High-Quality Agricultural Carbon Credits from Regenerative Farming</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StatCard number="50,000+" label="Carbon Credits Generated" />
            <StatCard number="25,000+" label="Tonnes CO₂ Sequestered" />
            <StatCard number="10,000+" label="Farmers Participating" />
            <StatCard number="€8" label="Fixed Price Per Credit" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Why Choose Our Carbon Credits?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <CreditFeature
                icon={<Shield className="w-8 h-8" />}
                title="Verified & Certified"
                description="Third-party verified credits with comprehensive documentation"
                features={[
                  "Verified Carbon Standard (VCS) compliant",
                  "Gold Standard certification ready",
                  "ISO 14064-2 verification",
                  "Transparent monitoring reports"
                ]}
              />

              <CreditFeature
                icon={<Target className="w-8 h-8" />}
                title="Additional Social Impact"
                description="Each credit supports farmer prosperity and rural development"
                features={[
                  "₹800 additional income per credit for farmers",
                  "Women farmer participation >40%",
                  "Rural employment generation",
                  "Farmer training and capacity building"
                ]}
              />
            </div>

            <div className="space-y-8">
              <CreditFeature
                icon={<Globe className="w-8 h-8" />}
                title="Environmental Co-benefits"
                description="Beyond carbon sequestration - comprehensive ecological benefits"
                features={[
                  "Soil organic carbon increase 0.5-1% annually",
                  "Water conservation and management",
                  "Biodiversity enhancement",
                  "Reduced chemical fertilizer use"
                ]}
              />

              <CreditFeature
                icon={<TrendingUp className="w-8 h-8" />}
                title="Scalable Supply"
                description="Reliable, growing supply from our expanding farmer network"
                features={[
                  "500,000 hectares target in 3 years",
                  "50,000+ farmers by 2026",
                  "Multiple crop types and regions",
                  "Continuous monitoring and verification"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credit Generation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Credit Generation Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ProcessStep
                step="1"
                title="Baseline Assessment"
                description="Soil testing and carbon stock measurement"
                icon={<Calculator className="w-6 h-6" />}
              />
              <ProcessStep
                step="2"
                title="Practice Implementation"
                description="Regenerative agriculture adoption"
                icon={<TreePine className="w-6 h-6" />}
              />
              <ProcessStep
                step="3"
                title="Monitoring"
                description="Satellite and field data collection"
                icon={<BarChart3 className="w-6 h-6" />}
              />
              <ProcessStep
                step="4"
                title="Verification & Issuance"
                description="Third-party audit and credit issuance"
                icon={<FileCheck className="w-6 h-6" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership with Carboneg */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-green-300" />
            <h2 className="text-3xl font-bold mb-6">Exclusive Partnership with Carboneg</h2>
            <p className="text-xl text-green-100 mb-8">
              Our strategic partnership with Carboneg (Europe) ensures international standards compliance 
              and global market access for all generated carbon credits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PartnershipFeature
                title="Technical Expertise"
                description="European regenerative agriculture specialists"
              />
              <PartnershipFeature
                title="Market Access"
                description="Global carbon market connections"
              />
              <PartnershipFeature
                title="Quality Assurance"
                description="International standards compliance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Purchase Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Purchase Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingPlan
              title="Spot Purchase"
              price="€8"
              description="One-time purchase of available credits"
              features={[
                "Minimum 100 credits",
                "Immediate delivery",
                "Standard verification",
                "Volume discounts available"
              ]}
            />
            <PricingPlan
              title="Forward Purchase"
              price="€7.5"
              description="Pre-purchase future credit batches"
              features={[
                "Minimum 1,000 credits",
                "6-12 month delivery",
                "Priority allocation",
                "Custom monitoring access"
              ]}
              featured={true}
            />
            <PricingPlan
              title="Corporate Program"
              price="Custom"
              description="Tailored carbon offset programs"
              features={[
                "Branded impact reporting",
                "ESG integration support",
                "Farmer engagement events",
                "Custom verification protocols"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Carbon Neutrality Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join leading corporations in achieving sustainability goals with high-quality agricultural carbon credits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
              Request Credit Portfolio <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Download Methodology
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const StatCard = ({ number, label }) => (
  <div className="bg-green-700 rounded-lg p-6">
    <div className="text-3xl font-bold mb-2">{number}</div>
    <div className="text-green-100">{label}</div>
  </div>
);

const CreditFeature = ({ icon, title, description, features }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4">
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

const ProcessStep = ({ step, title, description, icon }) => (
  <div className="text-center">
    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
      {step}
    </div>
    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const PartnershipFeature = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-green-200">{description}</p>
  </div>
);

const PricingPlan = ({ title, price, description, features, featured = false }) => (
  <div className={`rounded-xl p-8 ${featured ? 'bg-green-600 text-white transform scale-105' : 'bg-white border border-gray-200'}`}>
    {featured && (
      <div className="bg-yellow-500 text-green-900 text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
        MOST POPULAR
      </div>
    )}
    <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <div className={`text-4xl font-bold mb-2 ${featured ? 'text-white' : 'text-green-600'}`}>{price}</div>
    <p className={`mb-6 ${featured ? 'text-green-100' : 'text-gray-600'}`}>{description}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <CheckCircle className={`w-4 h-4 mr-2 ${featured ? 'text-green-300' : 'text-green-500'}`} />
          <span className={featured ? 'text-green-100' : 'text-gray-700'}>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-semibold ${
      featured 
        ? 'bg-white text-green-600 hover:bg-gray-100' 
        : 'bg-green-600 text-white hover:bg-green-700'
    } transition-colors`}>
      Get Started
    </button>
  </div>
);

export default CarbonCreditBuyers;