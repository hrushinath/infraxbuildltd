import loftExtension from '../assets/img/loftextension.jpg';
import roofInstallation from '../assets/img/roofinstallation.jpg';
import roomPartition from '../assets/img/Room Partition Project.jpg';
import fullHomeRefurbishment from '../assets/img/FullHomeRefurbishment.jpg';

const Portfolio = () => {
  const projects = [
    {
      image: loftExtension,
      title: 'Loft Extension & Conversion',
      description: 'Additional living space with natural lighting'
    },
    {
      image: roofInstallation,
      title: 'New Roofing Installation',
      description: 'Complete roof replacement with modern materials'
    },
    {
      image: roomPartition,
      title: 'Room Partition Project',
      description: 'Custom partitioning for flexible living spaces'
    },
    {
      image: fullHomeRefurbishment,
      title: 'Full Home Refurbishment',
      description: 'Complete renovation and modernization'
    },
    {
      image: loftExtension,
      title: 'Extension Services',
      description: 'Professional home extension solutions'
    },
    {
      image: fullHomeRefurbishment,
      title: 'Property Refurbishment',
      description: 'Complete property transformation services'
    }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Portfolio / Recent Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Explore our completed projects and transformations</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div 
                className="h-64 sm:h-72 md:h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-white/90">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
