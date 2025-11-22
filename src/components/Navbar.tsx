import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div
          className="logo text-3xl font-bold tracking-widest cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #0066FF 0%, #00B3FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.15em',
          }}
          onClick={() => scrollToSection('home')}
        >
          MHBTOUR
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-[#0066FF]' : 'text-white hover:text-[#00B3FF]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('tours')}
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-[#0066FF]' : 'text-white hover:text-[#00B3FF]'
            }`}
          >
            Tours
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-[#0066FF]' : 'text-white hover:text-[#00B3FF]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-[#0066FF]' : 'text-white hover:text-[#00B3FF]'
            }`}
          >
            Contact
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-700' : 'text-white'} size={28} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#0066FF] font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('tours')}
              className="text-gray-700 hover:text-[#0066FF] font-medium text-left"
            >
              Tours
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#0066FF] font-medium text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#0066FF] font-medium text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
