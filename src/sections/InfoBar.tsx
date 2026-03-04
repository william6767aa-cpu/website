import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function InfoBar() {
  return (
    <section className="bg-[#f5f5f5] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-center sm:text-left text-base sm:text-lg">
            We're different from the rest. Learn how choosing SMART gives you the best in interactive technology and so much more.
          </p>
          <Link 
            to="/about"
            className="flex items-center gap-1 text-[#6b4c9a] hover:text-[#5a3f82] font-medium whitespace-nowrap transition-colors duration-200 group"
          >
            Learn more
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
