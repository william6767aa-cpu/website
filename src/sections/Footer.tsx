import { Link } from 'react-router-dom';
import { Home, GraduationCap, Building2, Landmark } from 'lucide-react';

const footerLinks = {
  legal: [
    { label: 'Legal', href: '#legal' },
    { label: 'Privacy and cookies', href: '#privacy' },
    { label: 'iQ4 Privacy Policy', href: '#iq4-privacy' },
    { label: 'Compliance', href: '#compliance' },
  ],
};

const quickLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Education', href: '/education', icon: GraduationCap },
  { label: 'Business', href: '/business', icon: Building2 },
  { label: 'Government', href: '/government', icon: Landmark },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">SMART</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Interactive displays and collaboration software
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Connect with SMART</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Interactive Displays</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Lumio</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Accessories</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Software</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Help Center</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Downloads</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Training</Link></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">About Us</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">News</Link></li>
              <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Careers</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Partners</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 SMART Technologies ULC - all rights reserved
            </p>
            <nav className="flex flex-wrap justify-center gap-4">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
