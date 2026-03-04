import { ArrowRight, Target, Users, Lightbulb, Award, Globe } from 'lucide-react';
import TopBar from '../sections/TopBar';
import MainNav from '../sections/MainNav';
import Footer from '../sections/Footer';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To transform how the world works and learns through innovative technology that connects people and ideas.',
  },
  {
    icon: Lightbulb,
    title: 'Our Vision',
    description: 'A world where technology removes barriers to collaboration, enabling everyone to contribute and succeed.',
  },
  {
    icon: Users,
    title: 'Our People',
    description: 'Over 1,000 employees worldwide dedicated to creating solutions that make a difference.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving customers in over 175 countries with local support and expertise.',
  },
];

const milestones = [
  { year: '2015', event: 'WhaleScreens founded in Shenzhen, China' },
  { year: '2017', event: 'First interactive display launched' },
  { year: '2019', event: 'Expanded to Asian markets' },
  { year: '2021', event: 'Launched WhaleBoard software' },
  { year: '2023', event: 'Introduced cloud collaboration platform' },
  { year: '2025', event: 'Leading innovation in AI-powered displays' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-900 py-24 lg:py-32">
          <div className="absolute inset-0">
            <img
              src="/about-hero.jpg"
              alt="WhaleScreens Office"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                About WhaleScreens
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                For over 35 years, we've been at the forefront of interactive technology, 
                helping millions of people around the world connect, collaborate, and learn.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  WhaleScreens was founded in 2015 with a simple but powerful idea: 
                  to make collaboration easier and more effective through technology. 
                  What started as a small team in Calgary, Canada, has grown into a 
                  global leader in interactive displays and collaboration software.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Today, our products are used in classrooms, boardrooms, and government 
                  facilities around the world. From the first interactive whiteboard to 
                  today's AI-powered displays, we continue to push the boundaries of 
                  what's possible.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#6b4c9a] font-semibold hover:text-[#5a3f82] transition-colors"
                >
                  Get in touch
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Journey</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="font-bold text-[#6b4c9a] w-16">{milestone.year}</span>
                      <span className="text-gray-600">{milestone.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What Drives Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our core values guide everything we do, from product development to customer support.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-[#6b4c9a]/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#6b4c9a]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-[#6b4c9a] mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Award-Winning Innovation
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence has been recognized by industry leaders worldwide.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-[#6b4c9a] mb-2">50+</div>
                <p className="text-gray-600">Industry Awards</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#6b4c9a] mb-2">3M+</div>
                <p className="text-gray-600">Classrooms Worldwide</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#6b4c9a] mb-2">175+</div>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
