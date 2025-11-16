import React from 'react';
import { 
  TrendingUp, 
  Users, 
  TreePine, 
  Shield, 
  Target,
  BarChart3,
  Handshake,
  Award,
  Leaf,
  Database
} from 'lucide-react';

const Investor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Investing in Sustainable Agriculture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with rupiya.app to drive financial inclusion, promote residue-free farming, and generate verifiable environmental impact.
          </p>
        </header>

        {/* Growth Metrics Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Growth & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard 
              icon={<Users className="w-8 h-8" />}
              value="10,000+"
              label="Farmers Empowered"
              description="Across 6 states in India"
            />
            <MetricCard 
              icon={<TreePine className="w-8 h-8" />}
              value="5,000+"
              label="Acres Under Sustainable Farming"
              description="Facilitating residue-free practices"
            />
            <MetricCard 
              icon={<Target className="w-8 h-8" />}
              value="300,000"
              label="Farmers Targeted"
              description="Our mission to empower"
            />
          </div>
        </section>

        {/* Investment Highlights */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Investment Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Market Leadership & Scalability</h3>
              </div>
              <p className="text-gray-600">
                Positioned as a leading residue-free farming platform with an integrated agri-fintech model. 
                Proven scalability with services expanding across the agricultural value chain.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Exclusive Carbon Credit Partnership</h3>
              </div>
              <p className="text-gray-600">
                Exclusive rights to implement <strong>Carboneg's</strong> regenerative agriculture program in India[citation:3][citation:8]. 
                Provides farmers a fixed <strong>€8 per carbon credit</strong>, creating a new revenue stream and driving adoption[citation:3][citation:8].
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Proprietary Technology Stack</h3>
              </div>
              <p className="text-gray-600">
                Satellite-based soil testing, AI-driven crop monitoring, and a user-friendly digital platform 
                designed for rural India, creating a significant technology moat[citation:4][citation:5].
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mr-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Diversified Revenue Streams</h3>
              </div>
              <p className="text-gray-600">
                Revenue generated from agri-input sales, financial services commissions, transaction fees, 
                and a share of carbon credit proceeds, ensuring a robust financial model[citation:1][citation:4].
              </p>
            </div>
          </div>
        </section>

        {/* Carbon Credit Program Deep Dive */}
        <section className="mb-20 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-10 text-white">
          <h2 className="text-3xl font-bold text-center mb-4">The Carbon Credit Opportunity</h2>
          <p className="text-xl text-center text-green-100 mb-10 max-w-3xl mx-auto">
            A scalable, impact-driven revenue model that aligns farmer prosperity with planetary health.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-green-300 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Fixed Price Model:</strong> Farmers earn a stable €8 per credit, insulated from market volatility[citation:3][citation:8].</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-green-300 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Impact:</strong> Credits generated through verified regenerative practices that sequester CO₂[citation:3].</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-green-300 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Farmer Onboarding:</strong> Target of 500,000 hectares and 50,000+ farmers over 3 years[citation:3][citation:8].</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-3">Global Partnership</h4>
              <p>Our exclusive collaboration with <strong>Carboneg</strong>, a European leader in regenerative agriculture, provides the technical expertise and global market access for carbon credit monetization[citation:3][citation:8].</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
          <Handshake className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Invest in a Sustainable Future?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Connect with our leadership team to access the detailed investment deck and explore partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Request Investment Deck
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Contact CEO
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

// Reusable Metric Card Component
const MetricCard = ({ icon, value, label, description }) => (
  <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div className="text-green-600 flex justify-center mb-4">{icon}</div>
    <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-lg font-semibold text-gray-700 mb-2">{label}</div>
    <div className="text-sm text-gray-500">{description}</div>
  </div>
);

export default Investor;