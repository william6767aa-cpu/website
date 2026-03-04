import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'education', label: 'Education' },
  { id: 'business', label: 'Business' },
  { id: 'government', label: 'Government' },
  { id: 'lumio', label: 'Lumio' },
];

const solutionsData = {
  education: {
    title: 'Education solutions',
    subtitle: 'Connected learning',
    description: `Our industry-leading classroom technology changes how students and teachers engage and encourages truly collaborative learning. Discover learning solutions that supercharge student engagement, like our cutting-edge interactive displays and educational software. Experience the only display that lets multiple students interact at the same time without interfering with each other's work.`,
    image: '/education-solution.jpg',
    cta: 'Explore SMART for Education',
    ctaLink: '/education',
    secondaryCta: 'Book a demo',
    secondaryCtaLink: '#demo',
  },
  business: {
    title: 'Business solutions',
    subtitle: 'Connected workplaces',
    description: `Transform your meetings and presentations with our cutting-edge interactive displays. Enable seamless collaboration across teams, whether they're in the room or joining remotely. Our solutions integrate with your existing workflow tools to boost productivity and engagement in every meeting.`,
    image: '/business-solution.jpg',
    cta: 'Explore SMART for Business',
    ctaLink: '/business',
    secondaryCta: 'Book a demo',
    secondaryCtaLink: '#demo',
  },
  government: {
    title: 'Government solutions',
    subtitle: 'Connected communities',
    description: `Enhance public sector collaboration with secure, reliable interactive technology. From emergency response centers to municipal meetings, our displays help government agencies communicate more effectively and serve their communities better.`,
    image: '/government-solution.jpg',
    cta: 'Explore SMART for Government',
    ctaLink: '/government',
    secondaryCta: 'Book a demo',
    secondaryCtaLink: '#demo',
  },
  lumio: {
    title: 'Lumio',
    subtitle: 'Digital learning platform',
    description: `Lumio is the digital learning platform that transforms lessons into active, collaborative learning experiences. Engage students with interactive activities, games, and assessments that work on any device. Create, deliver, and measure learning outcomes all in one place.`,
    image: '/education-solution.jpg',
    cta: 'Explore Lumio',
    ctaLink: '/products',
    secondaryCta: 'Start free trial',
    secondaryCtaLink: '#trial',
  },
};

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('education');
  const currentSolution = solutionsData[activeTab as keyof typeof solutionsData];

  return (
    <section className="py-16 lg:py-24 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Find what you're looking for
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our award-winning interactive technology, intentionally designed to meet your needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center fade-in">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl order-2 lg:order-1">
            <img
              src={currentSolution.image}
              alt={currentSolution.title}
              className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[#6b4c9a] font-semibold text-sm uppercase tracking-wider">
              {currentSolution.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">
              {currentSolution.title}
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              {currentSolution.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={currentSolution.ctaLink}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#6b4c9a] hover:bg-[#5a3f82] transition-colors duration-200"
              >
                {currentSolution.cta}
              </Link>
              <Button
                variant="outline"
                className="px-6 py-3 rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                {currentSolution.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
