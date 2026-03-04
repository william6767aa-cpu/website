import { Link } from 'react-router-dom';
import { Globe, ExternalLink } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#1a1a1a] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Left side navigation */}
          <nav className="flex items-center space-x-6">
            <Link 
              to="/education" 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Education
            </Link>
            <Link 
              to="/business" 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Business
            </Link>
            <Link 
              to="/government" 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Government
            </Link>
          </nav>

          {/* Right side navigation */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://support.smarttech.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-300 transition-colors duration-200"
            >
              Support
              <ExternalLink className="w-3 h-3" />
            </a>
            <button className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-200">
              <Globe className="w-4 h-4" />
              <span>English (USA)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
