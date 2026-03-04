import { ArrowRight, BookOpen, Video, FileText, Download, HelpCircle, GraduationCap } from 'lucide-react';
import TopBar from '../sections/TopBar';
import MainNav from '../sections/MainNav';
import Footer from '../sections/Footer';
import { Button } from '@/components/ui/button';

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'User guides, manuals, and technical documentation for all WhaleScreens products.',
    items: ['Product Manuals', 'Quick Start Guides', 'Technical Specifications', 'Warranty Information'],
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Learn how to get the most out of your WhaleScreens products with video guides.',
    items: ['Getting Started', 'Advanced Features', 'Tips & Tricks', 'Webinar Recordings'],
  },
  {
    icon: GraduationCap,
    title: 'Training',
    description: 'Professional development courses for educators and IT administrators.',
    items: ['Online Courses', 'Certification Programs', 'Live Training', 'Custom Workshops'],
  },
  {
    icon: Download,
    title: 'Downloads',
    description: 'Software, drivers, and firmware updates for your WhaleScreens devices.',
    items: ['WhaleNote', 'WhaleBoard', 'Drivers & Firmware', 'Mobile Apps'],
  },
  {
    icon: HelpCircle,
    title: 'Support',
    description: 'Get help when you need it with our comprehensive support resources.',
    items: ['Knowledge Base', 'FAQs', 'Community Forum', 'Contact Support'],
  },
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'See how organizations are using WhaleScreens technology to achieve their goals.',
    items: ['Education Success Stories', 'Business Case Studies', 'Government Deployments', 'ROI Reports'],
  },
];

export default function Resources() {
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
                Resources
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Everything you need to get the most out of your WhaleScreens products, 
                from documentation to training and support.
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="absolute right-2 top-2 bg-[#6b4c9a] hover:bg-[#5a3f82] text-white rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-[#6b4c9a]/10 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="w-7 h-7 text-[#6b4c9a]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item, iIndex) => (
                      <li key={iIndex}>
                        <a
                          href="#"
                          className="text-sm text-[#6b4c9a] hover:text-[#5a3f82] flex items-center gap-1"
                        >
                          <ArrowRight className="w-3 h-3" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resource */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <span className="text-[#6b4c9a] font-semibold text-sm uppercase tracking-wider">
                    Featured Resource
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">
                    Getting Started with WhaleScreens Interactive Displays
                  </h2>
                  <p className="text-gray-600 mb-6">
                    A comprehensive guide to setting up and using your new WhaleScreens interactive display. 
                    Learn the basics and discover advanced features to maximize your investment.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="w-4 h-4 text-[#6b4c9a]" />
                      50+ pages of detailed instructions
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Video className="w-4 h-4 text-[#6b4c9a]" />
                      Includes video tutorials
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Download className="w-4 h-4 text-[#6b4c9a]" />
                      Free PDF download
                    </li>
                  </ul>
                  <Button className="bg-[#6b4c9a] hover:bg-[#5a3f82] text-white px-8 py-4 rounded-full">
                    Download Now
                  </Button>
                </div>
                <div className="bg-gray-100 flex items-center justify-center p-8">
                  <div className="text-center">
                    <BookOpen className="w-32 h-32 text-[#6b4c9a] mx-auto mb-4" />
                    <p className="text-gray-500">Free Guide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-center">
              <HelpCircle className="w-16 h-16 text-[#6b4c9a] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Help?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our support team is available 24/7 to assist you with any questions or issues.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-[#6b4c9a] hover:bg-[#5a3f82] text-white px-8 py-4 rounded-full">
                  Contact Support
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full"
                >
                  Visit Help Center
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
