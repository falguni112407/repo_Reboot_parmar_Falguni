import React from 'react';
import {
  Building,
  Target,
  Shield,
  BarChart3,
  FileCheck,
  Truck,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Leaf,
  Database
} from 'lucide-react';

const InstitutionalBuyers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-4">
            <Building className="w-12 h-12 text-purple-600 mr-4" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">For Institutional Buyers</h1>
              <p className="text-xl text-gray-600 mt-2">Direct Sourcing of Certified Residue-Free Agricultural Produce</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-semibold text-center text-gray-600 mb-8">Trusted by Leading Brands</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {['ITC', 'Reliance', 'Mother Dairy', 'Patanjali', 'Adani Wilmar', 'Dabur'].map((brand) => (
              <div key={brand} className="text-center text-gray-500 font-semibold text-lg">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Why Source Through Rupiya.app?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Quality Assurance"
              description="Guaranteed residue-free produce with comprehensive testing and certification"
              features={[
                "Third-party lab testing for 195+ pesticides",
                "ISO 22000 certified processes",
                "Batch-wise quality documentation",
                "EU & US export standards compliance"
              ]}
            />

            <FeatureCard
              icon={<Database className="w-8 h-8" />}
              title="Complete Traceability"
              description="Blockchain-enabled supply chain transparency from farm to facility"
              features={[
                "Satellite-based farm monitoring",
                "Digital crop journey documentation",
                "Real-time quality metrics",
                "QR code traceability for end consumers"
              ]}
            />

            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="Supply Consistency"
              description="Reliable year-round supply through our network of 10,000+ farmers"
              features={[
                "Multiple growing regions",
                "Crop rotation planning",
                "Weather risk mitigation",
                "Buffer stock management"
              ]}
            />

            <FeatureCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Cost Efficiency"
              description="Eliminate middlemen and reduce procurement costs by 15-20%"
              features={[
                "Direct farm-gate procurement",
                "Reduced logistics overhead",
                "Bulk contract pricing",
                "Quality-based premium structure"
              ]}
            />

            <FeatureCard
              icon={<Leaf className="w-8 h-8" />}
              title="Sustainability Credentials"
              description="Enhance your ESG ratings with verified sustainable sourcing"
              features={[
                "Carbon credit generation documentation",
                "Water conservation metrics",
                "Soil health improvement data",
                "SDG alignment reporting"
              ]}
            />

            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="Certification Support"
              description="Access to certified organic and regenerative agriculture produce"
              features={[
                "India Organic certification",
                "PGS-India certification",
                "GlobalG.A.P. compliance",
                "Fair Trade alignment"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Crop Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Crop Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CropCard
              category="Cereals & Grains"
              crops={["Basmati Rice", "Wheat", "Maize", "Millets"]}
              season="Year-round"
            />
            <CropCard
              category="Pulses & Legumes"
              crops={["Chickpeas", "Lentils", "Pigeon Pea", "Green Gram"]}
              season="Rabi & Kharif"
            />
            <CropCard
              category="Fruits & Vegetables"
              crops={["Tomatoes", "Potatoes", "Onions", "Mangoes"]}
              season="Seasonal"
            />
            <CropCard
              category="Commercial Crops"
              crops={["Sugarcane", "Cotton", "Soybean", "Groundnut"]}
              season="Contract-based"
            />
          </div>
        </div>
      </section>

      {/* Procurement Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Streamlined Procurement Process</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <ProcessStep
                step="1"
                title="Requirement Analysis"
                description="Understand your quality specs and volume needs"
                icon={<FileCheck className="w-6 h-6" />}
              />
              <ProcessStep
                step="2"
                title="Farmer Cluster Allocation"
                description="Match with suitable farmer groups and regions"
                icon={<Users className="w-6 h-6" />}
              />
              <ProcessStep
                step="3"
                title="Quality Agreement"
                description="Define quality parameters and testing protocols"
                icon={<Award className="w-6 h-6" />}
              />
              <ProcessStep
                step="4"
                title="Production Monitoring"
                description="Real-time satellite and field monitoring"
                icon={<Database className="w-6 h-6" />}
              />
              <ProcessStep
                step="5"
                title="Delivery & Payment"
                description="Quality check, delivery, and transparent settlement"
                icon={<Truck className="w-6 h-6" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-purple-300" />
            <h2 className="text-3xl font-bold mb-6">Success Story: ITC Limited</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">500+</div>
                <div className="text-purple-200">Farmers Engaged</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">2,000+</div>
                <div className="text-purple-200">Acres Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">15%</div>
                <div className="text-purple-200">Cost Reduction</div>
              </div>
            </div>
            <p className="text-xl text-purple-100 mb-8">
              "Rupiya.app has transformed our sourcing strategy, ensuring consistent quality basmati rice 
              while supporting sustainable farming practices. Their traceability system gives us 
              complete confidence in our supply chain."
            </p>
            <div className="font-semibold">- Procurement Head, ITC Foods Division</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Sustainable Sourcing Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Connect with our procurement team to discuss your specific requirements and get custom pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
              Request Quote <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const FeatureCard = ({ icon, title, description, features }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-full">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700 text-sm">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const CropCard = ({ category, crops, season }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900 mb-3">{category}</h3>
    <ul className="space-y-2 mb-4">
      {crops.map((crop, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
          {crop}
        </li>
      ))}
    </ul>
    <div className="flex items-center text-sm text-gray-500">
      <Clock className="w-4 h-4 mr-1" />
      Season: {season}
    </div>
  </div>
);

const ProcessStep = ({ step, title, description, icon }) => (
  <div className="text-center">
    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
      {step}
    </div>
    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default InstitutionalBuyers;