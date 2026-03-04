import { Check, BookOpen, Users, GraduationCap, Star } from 'lucide-react';
import TopBar from '../sections/TopBar';
import MainNav from '../sections/MainNav';
import Footer from '../sections/Footer';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Users,
    title: 'Boost Student Engagement',
    description: 'Interactive displays capture attention and make learning more engaging for students of all ages.',
  },
  {
    icon: BookOpen,
    title: 'Enhance Collaboration',
    description: 'Enable multiple students to work together on the same display simultaneously.',
  },
  {
    icon: GraduationCap,
    title: 'Support All Learning Styles',
    description: 'Visual, auditory, and kinesthetic learners all benefit from interactive technology.',
  },
  {
    icon: BookOpen,
    title: 'Improve Learning Outcomes',
    description: 'Research shows interactive technology leads to better retention and understanding.',
  },
];

const solutions = [
  {
    title: 'K-12 Education',
    description: 'Transform classrooms with interactive displays designed specifically for K-12 learning environments.',
    features: ['Easy-to-use interface', 'Pre-built lesson templates', 'Assessment tools', 'Parent engagement features'],
  },
  {
    title: 'Higher Education',
    description: 'Equip lecture halls and campus spaces with professional-grade interactive technology.',
    features: ['Large format displays', 'Lecture capture integration', 'Campus-wide deployment', 'IT management tools'],
  },
  {
    title: 'Distance Learning',
    description: 'Connect remote students with hybrid learning solutions.',
    features: ['Video conferencing integration', 'Cloud-based collaboration', 'Recording and sharing', 'Virtual whiteboarding'],
  },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-900 py-24 lg:py-32">
          <div className="absolute inset-0">
            <img
              src="/education-hero.jpg"
              alt="WhaleScreens in Education"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-[#6b4c9a] font-semibold text-sm uppercase tracking-wider bg-white/90 px-3 py-1 rounded-full">
                Education Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
                Connected Learning
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Our industry-leading classroom technology changes how students and teachers 
                engage, encouraging truly collaborative learning experiences.
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
                Why Choose WhaleScreens for Education?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how our technology transforms teaching and learning.
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

        {/* Solutions Grid */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Solutions for Every Learning Environment
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, fIndex) => (
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

        {/* Testimonial */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl sm:text-3xl text-gray-800 italic mb-6">
              "WhaleScreens technology has completely transformed how we teach. Students are more engaged, 
              collaboration has increased, and learning outcomes have improved dramatically."
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">Dr. Sarah Mitchell</p>
              <p className="text-gray-600">Principal, Lincoln Elementary School</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-[#6b4c9a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Classroom?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with our education specialists to find the perfect solution for your school.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-[#6b4c9a] hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-medium">
                Contact Sales
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#6b4c9a] px-8 py-6 rounded-full text-lg"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
