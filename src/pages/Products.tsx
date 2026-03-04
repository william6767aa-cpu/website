import { ArrowRight, Check, Monitor, Sparkles, PenTool, Wifi } from 'lucide-react';
import TopBar from '../sections/TopBar';
import MainNav from '../sections/MainNav';
import Footer from '../sections/Footer';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'SMART Board MX Series',
    category: 'Interactive Displays',
    description: 'Essential interactive display for classrooms and meeting rooms. Available in 55", 65", 75", and 86".',
    features: ['4K Ultra HD resolution', '20-point multi-touch', 'Built-in Android', 'Wireless screen sharing'],
    image: '/product-display.jpg',
  },
  {
    name: 'SMART Board GX Series',
    category: 'Interactive Displays',
    description: 'Premium interactive display with advanced collaboration features. Available in 65", 75", and 86".',
    features: ['4K Ultra HD resolution', '40-point multi-touch', 'iQ Android computing', 'Advanced annotation tools'],
    image: '/business-solution.jpg',
  },
  {
    name: 'SMART Board RX Series',
    category: 'Interactive Displays',
    description: 'Flagship interactive display with cutting-edge technology. Available in 75" and 86".',
    features: ['8K resolution ready', 'SilkTouch technology', 'AI-powered features', 'Enterprise security'],
    image: '/government-hero.jpg',
  },
];

const software = [
  {
    name: 'Lumio',
    description: 'Digital learning platform that transforms lessons into active, collaborative experiences.',
    icon: Sparkles,
  },
  {
    name: 'SMART Notebook',
    description: 'The world\'s most popular collaborative learning software.',
    icon: PenTool,
  },
  {
    name: 'SMART Mirror',
    description: 'Wireless screen sharing for any device, any platform.',
    icon: Wifi,
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#6b4c9a] to-[#8b6cb9] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Products
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Discover our complete range of interactive displays, software, and accessories 
                designed to transform how you work and learn.
              </p>
              <Button 
                variant="secondary"
                className="bg-white text-[#6b4c9a] hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-medium"
              >
                View All Products
              </Button>
            </div>
          </div>
        </section>

        {/* Interactive Displays */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Monitor className="w-12 h-12 text-[#6b4c9a] mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Interactive Displays
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industry-leading interactive displays for every need and budget.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-[#6b4c9a] font-semibold">{product.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#learn-more"
                      className="inline-flex items-center gap-2 text-[#6b4c9a] font-semibold hover:text-[#5a3f82] transition-colors"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Software Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Powerful software that brings your interactive displays to life.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {software.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm text-center">
                  <div className="w-16 h-16 bg-[#6b4c9a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-[#6b4c9a]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Not sure which product is right for you?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team can help you find the perfect solution for your needs and budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-[#6b4c9a] hover:bg-[#5a3f82] text-white px-8 py-6 rounded-full text-lg">
                  Book a Demo
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 rounded-full text-lg"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
