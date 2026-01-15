const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'Contact us via phone, email, or our online form. We\'ll arrange a free, no-obligation consultation to discuss your project, understand your vision, and assess the site.',
      duration: '30-60 minutes'
    },
    {
      number: 2,
      title: 'Design & Planning',
      description: 'Our team creates detailed AutoCAD drawings and plans. We\'ll help you navigate planning permission and building regulations, ensuring everything is compliant with UK standards.',
      duration: '1-3 weeks'
    },
    {
      number: 3,
      title: 'Detailed Quote',
      description: 'Receive a comprehensive, transparent quote with no hidden costs. We\'ll break down materials, labour, and timelines so you know exactly what to expect.',
      duration: '3-5 days'
    },
    {
      number: 4,
      title: 'Project Kickoff',
      description: 'Once you approve the quote, we\'ll schedule the work around your convenience. We\'ll prepare the site, protect your property, and introduce you to your dedicated project manager.',
      duration: '1 week'
    },
    {
      number: 5,
      title: 'Construction Phase',
      description: 'Our skilled team gets to work with regular progress updates. We maintain a clean, safe workspace and are always available to answer questions. All work is carried out to the highest UK building standards.',
      duration: 'Varies by project'
    },
    {
      number: 6,
      title: 'Final Inspection & Handover',
      description: 'We conduct a thorough walkthrough with you to ensure every detail meets your expectations. All necessary certifications and warranties are provided before final payment.',
      duration: '1-2 days'
    },
    {
      number: 7,
      title: 'Aftercare Support',
      description: 'Our relationship doesn\'t end at completion. We provide comprehensive aftercare support and honor all warranties. Your satisfaction is our priority.',
      duration: 'Ongoing'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">From first contact to project completion - here's what to expect</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex gap-4 sm:gap-6 items-start bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold">
                {step.number}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">{step.description}</p>
                <div className="text-xs sm:text-sm text-primary font-medium">Duration: {step.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
