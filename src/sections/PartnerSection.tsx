import { Link } from 'react-router-dom';
import { Check, ArrowRight, Users, Shield, Award } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Committed to your outcomes',
    description: 'Your success is our end goal. We design products that encourage deeper engagement, interactivity, and collaboration. And we offer robust training and adoption support so that you get the most out of your products from day one and beyond.',
  },
  {
    icon: Shield,
    title: 'Gain a partner, not just a product',
    description: 'Quality that goes the distance',
  },
  {
    icon: Award,
    title: '#WeAreWhaleScreens',
    description: '#ConnectionsThatMatter',
  },
];

export default function PartnerSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            A partner in your success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            It's true, we make products that take your collaboration and engagement to the next level. But we're more than a stellar product. When you choose WhaleScreens, you get a partner committed to your success. Here's how.
          </p>
          <Link 
            to="/about"
            className="inline-flex items-center gap-2 text-[#6b4c9a] hover:text-[#5a3f82] font-medium mt-4 transition-colors duration-200"
          >
            Why WhaleScreens?
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6b4c9a]/10 text-[#6b4c9a] mb-4">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Channel Partners Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[#6b4c9a] font-semibold text-sm uppercase tracking-wider">
                For Channel Partners worldwide
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">
                A trusted partner every step of the way
              </h3>
              <p className="text-gray-600 mb-6">
                When you choose to sell WhaleScreens products, you're backed by a highly-rated brand, world-class support and education expertise.
              </p>
              <div className="space-y-3">
                <a 
                  href="#partner-benefits"
                  className="inline-flex items-center gap-2 text-[#6b4c9a] hover:text-[#5a3f82] font-medium transition-colors duration-200"
                >
                  <Check className="w-5 h-5" />
                  Ready to learn more?
                </a>
                <p className="text-gray-600 pl-7">
                  Discover the benefits of being a WhaleScreens Partner
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-2">Already a WhaleScreens Partner?</p>
                <a 
                  href="#partner-login"
                  className="text-[#6b4c9a] hover:text-[#5a3f82] font-medium transition-colors duration-200"
                >
                  Login to your Partner Portal
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6b4c9a] to-[#8b6cb9] rounded-xl p-8 text-white text-center">
              <h4 className="text-xl font-semibold mb-4">
                Choose your WhaleScreens.
              </h4>
              <p className="text-white/90 mb-6">
                Explore the products, opportunities, and one-of-a-kind features that make WhaleScreens the industry-leading choice for collaborative technology.
              </p>
              <p className="text-white/80 text-sm mb-6">
                Choose your path and start tailoring a WhaleScreens lineup to meet your team's needs.
              </p>
              <Link 
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#6b4c9a] rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Explore WhaleScreens solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
