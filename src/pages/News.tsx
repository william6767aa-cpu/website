import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import TopBar from '../sections/TopBar';
import MainNav from '../sections/MainNav';
import Footer from '../sections/Footer';
import { Button } from '@/components/ui/button';

const newsArticles = [
  {
    title: 'SMART Unveils Next-Generation AI-Powered Interactive Displays',
    excerpt: 'New RX Series features advanced AI capabilities for enhanced collaboration and productivity in modern workplaces.',
    date: 'February 15, 2025',
    author: 'SMART Communications',
    category: 'Product News',
    image: '/product-display.jpg',
    featured: true,
  },
  {
    title: 'SMART Reaches 3 Million Classrooms Worldwide',
    excerpt: 'Milestone achievement underscores SMART\'s commitment to transforming education through technology.',
    date: 'January 28, 2025',
    author: 'Sarah Johnson',
    category: 'Company News',
    image: '/education-hero.jpg',
    featured: false,
  },
  {
    title: 'New Partnership Expands SMART\'s Government Offerings',
    excerpt: 'Strategic alliance brings enhanced security features and compliance certifications to public sector customers.',
    date: 'January 15, 2025',
    author: 'Michael Chen',
    category: 'Partnership',
    image: '/government-hero.jpg',
    featured: false,
  },
  {
    title: 'Lumio Platform Reaches 10 Million Users',
    excerpt: 'Digital learning platform continues rapid growth as educators embrace hybrid learning solutions.',
    date: 'December 20, 2024',
    author: 'Emily Rodriguez',
    category: 'Product News',
    image: '/education-solution.jpg',
    featured: false,
  },
  {
    title: 'SMART Wins Education Technology Award',
    excerpt: 'Company recognized for innovation in classroom technology at annual EdTech Summit.',
    date: 'December 10, 2024',
    author: 'SMART Communications',
    category: 'Awards',
    image: '/about-hero.jpg',
    featured: false,
  },
  {
    title: '2025 Predictions: The Future of Workplace Collaboration',
    excerpt: 'SMART executives share insights on emerging trends in interactive technology and hybrid work.',
    date: 'December 5, 2024',
    author: 'David Park',
    category: 'Insights',
    image: '/business-hero.jpg',
    featured: false,
  },
];

const categories = ['All', 'Product News', 'Company News', 'Partnership', 'Awards', 'Insights'];

export default function News() {
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gray-900 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                News & Updates
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Stay informed about the latest product releases, company news, and industry insights.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-[#6b4c9a] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="h-64 lg:h-auto">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-[#6b4c9a] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Featured
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {featuredArticle.category}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredArticle.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredArticle.author}
                      </span>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[#6b4c9a] font-semibold hover:text-[#5a3f82] transition-colors"
                    >
                      Read more
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* News Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest News</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <article key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#6b4c9a] text-xs font-semibold">
                        {article.category}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-[#6b4c9a] text-sm font-semibold hover:text-[#5a3f82] transition-colors"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#6b4c9a] rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay in the Loop
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter for the latest news, product updates, and industry insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-[200px] px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-[#6b4c9a] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
                  Subscribe
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
