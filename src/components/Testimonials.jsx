const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      date: 'July 2025',
      text: 'Infrax converted our garage into a beautiful home office. The project included proper insulation for UK weather and all necessary electrics. They handled everything from planning permission to final touches. Brilliant service!',
      author: 'Michael Chen',
      location: 'Carlton, NG4',
      project: 'Garage Conversion'
    },
    {
      rating: 4,
      date: 'June 2025',
      text: 'As first-time renovators, we were nervous, but Infrax made the bathroom renovation process smooth and stress-free. They explained everything clearly, stuck to the timeline, and the finish is immaculate. Definitely using them again!',
      author: 'Lucy and Tom Harrison',
      location: 'Arnold, NG5',
      project: 'Bathroom Renovation'
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our UK Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Don't just take our word for it - hear from homeowners across Nottingham</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center px-4">
            <div className="text-2xl sm:text-3xl text-primary mb-2">⭐⭐⭐⭐</div>
            <div className="text-base sm:text-lg font-semibold text-gray-800">4.0 Average Rating</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">2+</div>
            <div className="text-base sm:text-lg font-semibold text-gray-800">Projects Completed</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-base sm:text-lg font-semibold text-gray-800">Client Satisfaction</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 justify-items-center max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full max-w-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-yellow-500 text-lg">{'⭐'.repeat(testimonial.rating)}</div>
                <div className="text-xs sm:text-sm text-gray-500">{testimonial.date}</div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
              <div className="border-t pt-4">
                <div className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.author}</div>
                <div className="text-xs sm:text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-xs sm:text-sm text-primary font-medium mt-2">{testimonial.project}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Join our growing list of satisfied clients across Nottingham and surrounding areas
          </p>
          <button
            onClick={scrollToContact}
            className="bg-primary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl hover:bg-[#ff5520] transition-all duration-300 shadow-lg"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
