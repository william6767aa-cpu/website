import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const parallaxElements = heroRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach((el) => {
          (el as HTMLElement).style.transform = `translateY(${scrollY * 0.3}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden bg-gray-900"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 parallax">
        <img
          src="/hero-bg.jpg"
          alt="Interactive display collaboration"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center min-h-[600px] lg:min-h-[700px]">
          <div className="max-w-xl py-16 lg:py-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 fade-in">
              Award-winning technology that connects
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed fade-in" style={{ animationDelay: '0.2s' }}>
              Inspire collaboration and engagement with technology that connects people and ideas. Our interactive displays and dynamic software help connect your most valuable resource - your people.
            </p>
            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/products">
                <Button 
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 rounded-full text-lg font-medium transition-all duration-300"
                >
                  Explore SMART solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
