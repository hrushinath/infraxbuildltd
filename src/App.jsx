import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <HowItWorks />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
