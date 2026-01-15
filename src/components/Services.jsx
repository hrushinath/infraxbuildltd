const Services = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Small-Scale Construction Projects',
      intro: 'From garden offices to garage conversions, we handle all small-scale construction with precision.',
      features: [
        'Garden rooms and annexes',
        'Garage conversions',
        'Outbuildings and workshops',
        'Full planning and building control support'
      ],
      duration: '2-8 weeks',
      warranty: '10-year warranty'
    },
    {
      icon: '🏠',
      title: 'Home Renovations & Refurbishments',
      intro: 'Complete home transformations that breathe new life into your property.',
      features: [
        'Full house refurbishment',
        'Period property restoration',
        'Modern upgrades and improvements',
        'Energy efficiency enhancements'
      ],
      duration: '4-12 weeks',
      warranty: 'Comprehensive warranty'
    },
    {
      icon: '📐',
      title: 'Custom AutoCAD Drawing & Design',
      intro: 'Professional architectural drawings that bring your vision to paper.',
      features: [
        '2D and 3D CAD drawings',
        'Building regulations drawings',
        'Planning application support',
        'Structural calculations coordination'
      ],
      duration: '1-3 weeks',
      warranty: 'Revision guarantee'
    },
    {
      icon: '🏚️',
      title: 'Roofing & Roof Repairs',
      intro: 'Expert roofing services designed for UK weather conditions.',
      features: [
        'New roof installations',
        'Re-roofing and repairs',
        'Flat roof specialists',
        'Guttering and fascias'
      ],
      duration: '1-4 weeks',
      warranty: '15-year guarantee'
    },
    {
      icon: '🍳',
      title: 'Kitchen Extensions & Upgrades',
      intro: 'Create the heart of your home with bespoke kitchen solutions.',
      features: [
        'Kitchen extensions',
        'Complete kitchen fit-outs',
        'Kitchen-diner conversions',
        'Modern appliance integration'
      ],
      duration: '3-8 weeks',
      warranty: 'Full workmanship warranty'
    },
    {
      icon: '🏡',
      title: 'Loft Extensions & Conversions',
      intro: 'Add valuable living space without extending your home\'s footprint.',
      features: [
        'Dormer loft conversions',
        'Velux conversions',
        'Hip-to-gable conversions',
        'Loft bedrooms with en-suites'
      ],
      duration: '6-10 weeks',
      warranty: 'Structural warranty included'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive construction solutions tailored to UK homes</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{service.intro}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm sm:text-base text-gray-700 flex items-start">
                    <span className="text-primary mr-2 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t pt-4 flex flex-col gap-2 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center gap-2">⏱ <span>Timeline: {service.duration}</span></span>
                <span className="flex items-center gap-2">🛡️ <span>{service.warranty}</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
