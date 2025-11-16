import React from 'react';
import { 
  Users, 
  Building, 
  TrendingUp, 
  ArrowRight,
  Shield,
  BookOpen,
  Handshake,
  BarChart,
  Target,
  Award,
  FileText,
  Heart
} from 'lucide-react';

const EducatePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">rupiya.app</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/farmers" className="text-gray-600 hover:text-green-600 transition-colors">For Farmers</a>
              <a href="/educate" className="text-green-600 font-semibold">Educate</a>
              <a href="/about" className="text-gray-600 hover:text-green-600 transition-colors">About Us</a>
              <a href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Empowering Agriculture Ecosystem
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how rupiya.app is transforming agriculture through technology, 
            sustainability, and financial inclusion for all stakeholders.
          </p>
        </div>
      </section>

      {/* User Type Navigation */}
      <section className="py-12 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UserTypeCard
              icon={<Users className="w-8 h-8" />}
              title="For FPOs"
              description="Farmer Producer Organizations"
              color="bg-blue-500"
            />
            <UserTypeCard
              icon={<Building className="w-8 h-8" />}
              title="Institutional Buyers"
              description="Corporates & Retail Chains"
              color="bg-purple-500"
            />
            <UserTypeCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Investors & Carbon Buyers"
              description="Impact Investors & Sustainability Partners"
              color="bg-orange-500"
            />
          </div>
        </div>
      </section>

      {/* FPOs Section */}
      <section id="fpos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Users className="w-12 h-12 text-blue-500 mr-4" />
            <div>
              <h2 className="text-4xl font-bold text-gray-900">For FPOs</h2>
              <p className="text-lg text-gray-600 mt-2">Empowering Farmer Producer Organizations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <FeatureItem
                  icon={<Shield className="w-6 h-6" />}
                  title="Organization Empowerment"
                  description="Comprehensive support system to strengthen FPO operations and governance"
                />
                <FeatureItem
                  icon={<BookOpen className="w-6 h-6" />}
                  title="Training & Capacity Building"
                  description="Regular training programs on sustainable farming practices and digital tools"
                />
                <FeatureItem
                  icon={<TrendingUp className="w-6 h-6" />}
                  title="Carbon Credit Revenue"
                  description="Access additional income streams through verified carbon credits"
                />
                <FeatureItem
                  icon={<Handshake className="w-6 h-6" />}
                  title="Supply Chain Solutions"
                  description="Direct market linkages and buy-back guarantees for member produce"
                />
                <FeatureItem
                  icon={<BarChart className="w-6 h-6" />}
                  title="Collaboration Benefits"
                  description="Strategic partnerships for better input access and market opportunities"
                />
              </div>
              <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center">
                Partner with Us <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits Overview</h3>
              <div className="space-y-4">
                <BenefitItem text="Increased member income through multiple revenue streams" />
                <BenefitItem text="Enhanced technical knowledge and farming expertise" />
                <BenefitItem text="Direct market access eliminating middlemen" />
                <BenefitItem text="Sustainable farming practices adoption" />
                <BenefitItem text="Digital transformation and record keeping" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Buyers Section */}
      <section id="institutional" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Building className="w-12 h-12 text-purple-500 mr-4" />
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Institutional Buyers</h2>
              <p className="text-lg text-gray-600 mt-2">Reliable, Traceable, Quality-Assured Produce</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance</h3>
              <div className="space-y-6">
                <QualityItem
                  icon={<Award className="w-6 h-6" />}
                  title="Quality Consistency"
                  description="Guaranteed residue-free produce meeting international standards"
                />
                <QualityItem
                  icon={<Target className="w-6 h-6" />}
                  title="Complete Traceability"
                  description="Satellite monitoring and digital record keeping for full supply chain visibility"
                />
                <QualityItem
                  icon={<FileText className="w-6 h-6" />}
                  title="Certifications"
                  description="Comprehensive certification support including organic and sustainable farming standards"
                />
                <QualityItem
                  icon={<BarChart className="w-6 h-6" />}
                  title="Diverse Crop Portfolio"
                  description="Wide range of crops including grains, pulses, fruits, and vegetables"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Streamlined Procurement</h3>
              <div className="space-y-4 mb-8">
                <ProcessStep step="1" title="Requirement Analysis" />
                <ProcessStep step="2" title="Quality Specification Matching" />
                <ProcessStep step="3" title="Farmer Cluster Allocation" />
                <ProcessStep step="4" title="Production Monitoring" />
                <ProcessStep step="5" title="Quality Verification & Delivery" />
              </div>
              <button className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors flex items-center">
                Start Procurement <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Investors & Carbon Buyers Section */}
      <section id="investors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <TrendingUp className="w-12 h-12 text-orange-500 mr-4" />
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Investors & Carbon Credit Buyers</h2>
              <p className="text-lg text-gray-600 mt-2">Sustainable Impact with Measurable Returns</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Highlights</h3>
              <div className="space-y-6">
                <ImpactItem
                  icon={<BarChart className="w-6 h-6" />}
                  title="Strong Growth Metrics"
                  description="Consistent month-over-month growth in farmer onboarding and acreage"
                />
                <ImpactItem
                  icon={<Handshake className="w-6 h-6" />}
                  title="Strategic Partnerships"
                  description="Exclusive collaboration with Carboneg (Europe) and major institutional buyers"
                />
                <ImpactItem
                  icon={<Heart className="w-6 h-6" />}
                  title="Verified Impact"
                  description="500,000+ hectares target with 50,000+ farmers over 3 years"
                />
                <ImpactItem
                  icon={<Target className="w-6 h-6" />}
                  title="Market Leadership"
                  description="Pioneering residue-free farming at scale with complete traceability"
                />
              </div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Carbon Credit Impact</h3>
              <div className="space-y-4 mb-6">
                <CarbonBenefit text="₹800 additional income per credit for farmers" />
                <CarbonBenefit text="Verified carbon sequestration through regenerative practices" />
                <CarbonBenefit text="Transparent monitoring and verification process" />
                <CarbonBenefit text="ESG compliance and sustainability reporting" />
              </div>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center">
                View Investment Deck <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Agriculture Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of stakeholders already benefiting from rupiya.app's innovative platform
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

// Component for User Type Cards
const UserTypeCard = ({ icon, title, description, color }) => (
  <a 
    href={`#${title.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
    className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
  >
    <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </a>
);

// Component for Feature Items
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Component for Benefit Items
const BenefitItem = ({ text }) => (
  <div className="flex items-center space-x-3">
    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
      <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
    <span className="text-gray-700">{text}</span>
  </div>
);

// Component for Quality Items
const QualityItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Component for Process Steps
const ProcessStep = ({ step, title }) => (
  <div className="flex items-center space-x-4">
    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
      {step}
    </div>
    <span className="text-gray-700 font-medium">{title}</span>
  </div>
);

// Component for Impact Items
const ImpactItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Component for Carbon Benefits
const CarbonBenefit = ({ text }) => (
  <div className="flex items-center space-x-3">
    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
      <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
    <span className="text-gray-700">{text}</span>
  </div>
);

export default EducatePage;