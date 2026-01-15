import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Are you registered and insured in the UK?',
      answer: 'Yes, Infrax Build Ltd is a fully registered UK company with comprehensive public liability insurance. We comply with all UK construction regulations and hold relevant certifications for the work we undertake.'
    },
    {
      question: 'Do you help with planning permission and building regulations?',
      answer: 'Absolutely! We guide you through the entire process. We prepare detailed drawings for planning applications and building control, liaise with local authorities, and ensure all work complies with UK building regulations.'
    },
    {
      question: 'How much does a typical project cost?',
      answer: 'Costs vary depending on project scope. A small bathroom renovation might start from £5,000, while a full loft conversion could range from £25,000-£50,000. We provide detailed, transparent quotes after our free consultation so you know exactly what to expect.'
    },
    {
      question: 'How long will my project take?',
      answer: 'Timelines depend on the project: bathroom renovations (2-3 weeks), kitchen extensions (6-8 weeks), loft conversions (6-10 weeks). We provide realistic timescales upfront and keep you updated throughout.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We\'re based in Nottingham and primarily serve the East Midlands region, including Nottingham, Derby, Leicester, and surrounding areas. For larger projects, we\'re happy to discuss travel to other parts of the UK.'
    },
    {
      question: 'Do you use UK-sourced materials?',
      answer: 'Yes, we prioritize working with reputable UK suppliers to ensure quality and support local businesses. All materials meet British Standards and are suitable for UK climate conditions.'
    },
    {
      question: 'Can I live in my home during the renovation?',
      answer: 'For most projects, yes! We minimize disruption, contain work areas with dust screens, and maintain safe access routes. For extensive whole-house refurbishments, temporary accommodation might be recommended.'
    },
    {
      question: 'What payment terms do you offer?',
      answer: 'We typically work on a stage payment basis: deposit to secure the start date, interim payments at key milestones, and final payment upon completion. We never demand full payment upfront.'
    },
    {
      question: 'Do you offer warranties on your work?',
      answer: 'Yes, all our work comes with comprehensive warranties. Structural work typically carries a 10-year warranty, while other work has a minimum 2-year guarantee. We also provide manufacturer warranties for materials and fittings.'
    },
    {
      question: 'What if I want to make changes mid-project?',
      answer: 'We understand that visions evolve! We\'re flexible and can accommodate changes. We\'ll discuss the impact on cost and timeline, provide updated quotes, and proceed once you\'re happy to continue.'
    },
    {
      question: 'How do you handle waste and recycling?',
      answer: 'We\'re committed to environmentally responsible practices. We arrange proper waste disposal, recycle where possible, and hold the necessary waste carrier licenses. All disposal costs are included in our quotes.'
    },
    {
      question: 'Do you work during winter months?',
      answer: 'Yes! While some external work may be weather-dependent, we work year-round. For internal projects, seasons don\'t affect our schedule. We plan around UK weather patterns to minimize delays.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Everything UK homeowners need to know about working with us</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4 mb-12 sm:mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'shadow-xl' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                <span className={`text-3xl text-primary flex-shrink-0 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-lg">
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Still have questions? We're here to help!
          </p>
          <button
            onClick={scrollToContact}
            className="bg-primary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl hover:bg-[#ff5520] transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
