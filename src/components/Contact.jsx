import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: ''
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact / Get a Quote</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Ready to start your project? Contact us now!</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
                className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="project" className="block text-sm sm:text-base text-gray-700 font-medium mb-2">Project Details</label>
              <textarea
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#ff5520] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
          
          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Get In Touch</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <div className="space-y-5 sm:space-y-6">
              <div>
                <div className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl">👤</span>
                  <div>
                    <strong className="text-sm sm:text-base text-gray-800 block mb-1">Contact Person:</strong>
                    <p className="text-sm sm:text-base text-gray-700">Mohanraviteja Hukumathirao</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl">📧</span>
                  <div>
                    <strong className="text-sm sm:text-base text-gray-800 block mb-1">Email:</strong>
                    <p className="text-sm sm:text-base text-gray-700">contact@infraxbuildltd.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl">📞</span>
                  <div>
                    <strong className="text-sm sm:text-base text-gray-800 block mb-1">Phone:</strong>
                    <p className="text-sm sm:text-base text-gray-700">+44 7884555486</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl">📍</span>
                  <div>
                    <strong className="text-sm sm:text-base text-gray-800 block mb-1">Address:</strong>
                    <p className="text-sm sm:text-base text-gray-700">
                      Flat 35 High Point, Noel Street<br />
                      Nottingham, NG7 6BL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
