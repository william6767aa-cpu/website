import { Check, Briefcase, TrendingUp, Users, Zap } from 'lucide-react';
import TopBar from '../sections/TopBar';
import MainNav from '../sections/MainNav';
import Footer from '../sections/Footer';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Productivity',
    description: 'Streamline meetings and presentations with intuitive interactive technology.',
  },
  {
    icon: Users,
    title: 'Enhance Collaboration',
    description: 'Enable teams to work together seamlessly, whether in-person or remote.',
  },
  {
    icon: Zap,
    title: 'Faster Decision Making',
    description: 'Visualize data and ideas in real-time for quicker, better decisions.',
  },
  {
    icon: Briefcase,
    title: 'Professional Image',
    description: 'Impress clients and partners with state-of-the-art meeting room technology.',
  },
];

const useCases = [
  {
    title: 'Executive Boardrooms',
    description: 'Premium displays for high-stakes meetings and presentations.',
    features: ['Large format 86" displays', 'Wireless presentation', 'Video conferencing ready', 'Enterprise security'],
  },
  {
    title: 'Huddle Rooms',
    description: 'Compact solutions for quick team meetings and brainstorming.',
    features: ['55" and 65" options', 'All-in-one design', 'Easy installation', 'Affordable pricing'],
  },
  {
    title: 'Training Centers',
    description: 'Scalable solutions for corporate training and development.',
    features: ['Multi-room deployment', 'Centralized management', 'Recording capabilities', 'Assessment tools'],
  },
];

export default function Business() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-900 py-24 lg:py-32">
          <div className="absolute inset-0">
            <img
              src="/business-hero.jpg"
              alt="SMART for Business"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-[#6b4c9a] font-semibold text-sm uppercase tracking-wider bg-white/90 px-3 py-1 rounded-full">
                Business Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
                Connected Workplaces
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Transform your meetings and presentations with cutting-edge interactive displays 
                that enable seamless collaboration across teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#6b4c9a] hover:bg-[#5a3f82] text-white px-8 py-6 rounded-full text-lg">
                  Explore Solutions
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 rounded-full text-lg"
                >
                  Book a Demo
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
                Why SMART for Business?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Empower your teams with technology that drives results.
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

        {/* Use Cases */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Solutions for Every Workspace
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, fIndex) => (
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

        {/* ROI Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    See the ROI
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Companies using SMART technology report significant improvements in meeting 
                    efficiency, team collaboration, and overall productivity.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-[#6b4c9a]">40%</div>
                      <p className="text-gray-400 text-sm">Faster decision making</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#6b4c9a]">60%</div>
                      <p className="text-gray-400 text-sm">Increase in engagement</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#6b4c9a]">30%</div>
                      <p className="text-gray-400 text-sm">Reduction in meeting time</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#6b4c9a]">90%</div>
                      <p className="text-gray-400 text-sm">User satisfaction</p>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <Button className="bg-[#6b4c9a] hover:bg-[#5a3f82] text-white px-8 py-6 rounded-full text-lg">
                    Calculate Your ROI
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-[#6b4c9a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Workplace?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo to see how SMART can help your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-[#6b4c9a] hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-medium">
                Book a Demo
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#6b4c9a] px-8 py-6 rounded-full text-lg"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
