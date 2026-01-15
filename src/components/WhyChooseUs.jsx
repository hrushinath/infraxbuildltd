const WhyChooseUs = () => {
  const features = [
    {
      icon: '✔',
      title: 'Professional and Reliable Team',
      description: 'Our team consists of experienced, fully-qualified tradespeople who bring decades of combined expertise to every project. We\'re punctual, respectful of your property, and dedicated to delivering exceptional craftsmanship on every job, no matter the size.'
    },
    {
      icon: '✔',
      title: 'Detailed AutoCAD Plans',
      description: 'We provide comprehensive, professional AutoCAD drawings that bring clarity to your project. Our detailed plans help you visualize the end result, satisfy building control requirements, and ensure everyone is aligned from the start.'
    },
    {
      icon: '✔',
      title: 'Clear Pricing & Free Consultations',
      description: 'No surprises, no hidden costs. We offer free initial consultations and provide transparent, itemized quotes that break down all costs. You\'ll know exactly what you\'re paying for before any work begins.'
    },
    {
      icon: '✔',
      title: 'Quality and Safety',
      description: 'We never compromise on quality or safety. All work complies with UK building regulations and safety standards. We use premium materials sourced from trusted UK suppliers and maintain rigorous quality checks throughout the construction process.'
    },
    {
      icon: '✔',
      title: 'Local Nottingham Expertise',
      description: 'As a Nottingham-based company, we understand local building regulations, council requirements, and the unique characteristics of homes in the area. Our local knowledge helps us navigate approvals faster and deliver better results.'
    },
    {
      icon: '✔',
      title: 'Comprehensive Insurance & Warranties',
      description: 'We\'re fully insured with public liability coverage, giving you complete peace of mind. All our work comes with comprehensive warranties - up to 10 years on structural work - protecting your investment for years to come.'
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-secondary to-blue-900 text-white">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">What sets Infrax Build Ltd apart from other construction companies</p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-white/90 leading-relaxed">
            Choosing the right construction partner is crucial for your home improvement project. At Infrax Build Ltd, we combine technical expertise, local knowledge, and unwavering commitment to quality to deliver results that exceed expectations. Here's why homeowners across Nottingham trust us with their most important projects:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl text-primary mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Ready to Experience the Infrax Difference?</h3>
          <p className="text-base sm:text-lg text-white/90 mb-6">
            Join hundreds of satisfied homeowners who've trusted us with their construction and renovation projects.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-primary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl hover:bg-[#ff5520] transition-all duration-300 shadow-lg"
          >
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
