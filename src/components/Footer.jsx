const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-dark text-white py-12 sm:py-16">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 50 50">
                <rect x="5" y="35" width="40" height="10" fill="#ff6b35" rx="1"/>
                <rect x="10" y="25" width="30" height="10" fill="#ffffff" rx="1"/>
                <rect x="15" y="15" width="20" height="10" fill="#ff6b35" rx="1"/>
                <rect x="20" y="5" width="10" height="10" fill="#ffffff" rx="1"/>
                <line x1="38" y1="15" x2="38" y2="35" stroke="#ff6b35" strokeWidth="2"/>
                <line x1="38" y1="15" x2="48" y2="15" stroke="#ff6b35" strokeWidth="2"/>
                <circle cx="38" cy="35" r="2" fill="#ffffff"/>
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-lg sm:text-xl font-bold text-primary tracking-wide">INFRAX</span>
                <span className="text-xs font-semibold text-white tracking-widest">BUILD LTD</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">Your trusted partner for quality construction and renovation services.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-primary transition-colors capitalize"
                  >
                    {item === 'home' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Construction</li>
              <li>Renovations</li>
              <li>AutoCAD Design</li>
              <li>Extensions</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Mohanraviteja Hukumathirao</p>
              <p>Email: contact@infraxbuildltd.com</p>
              <p>Phone: +44 7884555486</p>
              <p>Flat 35 High Point, Noel Street<br />Nottingham, NG7 6BL</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2026 Infrax Build Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
