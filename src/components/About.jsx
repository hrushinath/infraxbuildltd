const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=85" 
              alt="Construction Site"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Welcome to <strong className="text-secondary">Infrax Build Ltd</strong> — your reliable partner for high-quality residential construction and improvement services. From small-scale construction projects to full home renovations, we bring your vision to life with professionalism and care.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              With years of experience in the construction industry, we pride ourselves on delivering exceptional craftsmanship, attention to detail, and personalized service tailored to your unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
