import { Check, Landmark, Shield, Users, FileText } from 'lucide-react';
import TopBar from '../sections/TopBar';
import MainNav from '../sections/MainNav';
import Footer from '../sections/Footer';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Meet the highest security standards with FISMA, NIST, and FedRAMP compliant solutions.',
  },
  {
    icon: Users,
    title: 'Enhanced Communication',
    description: 'Improve inter-agency collaboration and public engagement.',
  },
  {
    icon: FileText,
    title: 'Streamlined Workflows',
    description: 'Digitize processes and reduce paper-based operations.',
  },
  {
    icon: Landmark,
    title: 'Trusted Partner',
    description: 'Work with a vendor experienced in government procurement and deployment.',
  },
];

const sectors = [
  {
    title: 'Federal Government',
    description: 'Secure solutions for federal agencies and departments.',
    features: ['FedRAMP authorized', 'FISMA compliance', 'Classified environment options', 'Federal pricing'],
  },
  {
    title: 'State & Local',
    description: 'Affordable solutions for municipalities and regional governments.',
    features: ['Cooperative purchasing', 'Easy procurement', 'Local support', 'Training included'],
  },
  {
    title: 'Education',
    description: 'Special programs for public schools and universities.',
    features: ['E-rate eligible', 'Volume discounts', 'Grant assistance', 'Professional development'],
  },
];

export default function Government() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-900 py-24 lg:py-32">
          <div className="absolute inset-0">
            <img
              src="/government-hero.jpg"
              alt="WhaleScreens for Government"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-[#6b4c9a] font-semibold text-sm uppercase tracking-wider bg-white/90 px-3 py-1 rounded-full">
                Government Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
                Connected Communities
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Enhance public sector collaboration with secure, reliable interactive technology 
                designed to meet government standards and requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#6b4c9a] hover:bg-[#5a3f82] text-white px-8 py-6 rounded-full text-lg">
                  Explore Solutions
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 rounded-full text-lg"
                >
                  Contact Government Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why WhaleScreens for Government?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted technology that meets the unique needs of public sector organizations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#6b4c9a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-[#6b4c9a]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Solutions for Every Level of Government
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {sectors.map((sector, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{sector.title}</h3>
                  <p className="text-gray-600 mb-6">{sector.description}</p>
                  <ul className="space-y-3">
                    {sector.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Security & Compliance
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Our solutions meet the stringent security requirements of government organizations, 
                    with comprehensive compliance certifications and security features.
                  </p>
                  <ul className="space-y-3">
                    {['FedRAMP Authorized', 'FISMA Compliant', 'NIST 800-171', 'StateRAMP', 'CJIS Security Policy', 'HIPAA Ready'].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <Check className="w-4 h-4 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-white/10 rounded-xl p-8">
                    <Shield className="w-24 h-24 text-[#6b4c9a] mx-auto mb-4" />
                    <p className="text-white font-semibold">Security First</p>
                    <p className="text-gray-400 text-sm">Your data is protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-[#6b4c9a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Serve Your Community Better?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our government specialists to discuss your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-[#6b4c9a] hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-medium">
                Contact Government Sales
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#6b4c9a] px-8 py-6 rounded-full text-lg"
              >
                Download Security Brief
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
