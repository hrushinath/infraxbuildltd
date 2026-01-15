import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);

      // Active section detection
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-[1000] bg-white transition-all duration-300 ${
      hasScrolled ? 'shadow-md' : 'shadow-lg'
    }`}>
      <nav className="container mx-auto px-4 sm:px-5 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" viewBox="0 0 50 50">
              <rect x="5" y="35" width="40" height="10" fill="#ff6b35" rx="1"/>
              <rect x="10" y="25" width="30" height="10" fill="#004e89" rx="1"/>
              <rect x="15" y="15" width="20" height="10" fill="#ff6b35" rx="1"/>
              <rect x="20" y="5" width="10" height="10" fill="#004e89" rx="1"/>
              <line x1="38" y1="15" x2="38" y2="35" stroke="#ff6b35" strokeWidth="2"/>
              <line x1="38" y1="15" x2="48" y2="15" stroke="#ff6b35" strokeWidth="2"/>
              <circle cx="38" cy="35" r="2" fill="#004e89"/>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl font-bold text-primary tracking-wide">INFRAX</span>
              <span className="text-[0.6rem] sm:text-[0.7rem] font-semibold text-secondary tracking-widest">BUILD LTD</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none gap-6 lg:gap-8">
            {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`relative font-medium text-sm lg:text-base transition-colors capitalize after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                    activeSection === item
                      ? 'text-primary after:w-full'
                      : 'text-gray-800 hover:text-primary after:w-0 hover:after:w-full'
                  }`}
                >
                  {item === 'home' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu */}
          <button
            className={`md:hidden flex flex-col gap-[5px] cursor-pointer z-50 ${isMenuOpen ? 'fixed right-4 sm:right-5' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[3px] bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-[3px] bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[3px] bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          <ul className="flex flex-col items-center justify-center h-full gap-6 px-5">
            {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`text-xl font-medium transition-colors capitalize ${
                    activeSection === item ? 'text-primary' : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item === 'home' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
