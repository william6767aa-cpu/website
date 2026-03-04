import { ArrowRight, Building2, GraduationCap, Landmark, Stethoscope, Factory } from 'lucide-react';
import TopBar from '../sections/TopBar';
import MainNav from '../sections/MainNav';
import Footer from '../sections/Footer';
import { Button } from '@/components/ui/button';

const industries = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'From K-12 to higher education, transform learning environments with interactive technology that engages students and empowers teachers.',
    link: '/education',
    image: '/education-hero.jpg',
  },
  {
    icon: Building2,
    title: 'Corporate',
    description: 'Enhance collaboration in meeting rooms, boardrooms, and huddle spaces with professional-grade interactive displays.',
    link: '/business',
    image: '/business-hero.jpg',
  },
  {
    icon: Landmark,
    title: 'Government',
    description: 'Secure, compliant solutions for federal, state, and local government agencies.',
    link: '/government',
    image: '/government-hero.jpg',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Improve patient care and medical training with interactive technology for hospitals and clinics.',
    link: '#healthcare',
    image: '/about-hero.jpg',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Streamline operations and training with rugged interactive displays for factory floors.',
    link: '#manufacturing',
    image: '/product-display.jpg',
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Industries
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Discover how SMART technology is transforming organizations across every industry.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                >
                  <div className="absolute inset-0">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </div>
                  <div className="relative z-10 p-8 lg:p-12 min-h-[400px] flex flex-col justify-end">
                    <div className="w-14 h-14 bg-[#6b4c9a] rounded-lg flex items-center justify-center mb-4">
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                    <p className="text-gray-200 mb-4">{industry.description}</p>
                    <a
                      href={industry.link}
                      className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-[#6b4c9a] transition-colors"
                    >
                      Learn more
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We work with organizations across all sectors. Contact us to discuss your specific needs.
            </p>
            <Button className="bg-[#6b4c9a] hover:bg-[#5a3f82] text-white px-8 py-6 rounded-full text-lg">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
