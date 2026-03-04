import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'About Us', href: '/about', hasDropdown: true },
  { label: 'Industries', href: '/industries', hasDropdown: true },
  { label: 'Products', href: '/products', hasDropdown: true },
  { label: 'Resources', href: '/resources', hasDropdown: true },
  { label: 'News', href: '/news', hasDropdown: false },
];

export default function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="WhaleScreens" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-1 text-gray-700 hover:text-[#6b4c9a] transition-colors duration-200 font-medium"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button 
              className="p-2 text-gray-600 hover:text-[#6b4c9a] transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <Button 
              className="hidden sm:inline-flex bg-[#6b4c9a] hover:bg-[#5a3f82] text-white px-6 py-2 rounded-full font-medium transition-all duration-200"
            >
              Book a demo
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center justify-between py-2 text-gray-700 hover:text-[#6b4c9a] transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
            <Button 
              className="w-full bg-[#6b4c9a] hover:bg-[#5a3f82] text-white px-6 py-3 rounded-full font-medium mt-4"
            >
              Book a demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
