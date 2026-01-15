const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed text-white text-center pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 78, 137, 0.7), rgba(255, 107, 53, 0.7)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')`
      }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-5 py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Build Better Homes with <span className="text-primary text-shadow">Infrax Build Ltd</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto">
          We specialize in small-scale construction, home renovations, refurbishments, and much more.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-primary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl hover:bg-[#ff5520] transition-all duration-300 shadow-lg"
        >
          Get a Free Quote Today!
        </button>
      </div>
    </section>
  );
};

export default Hero;
