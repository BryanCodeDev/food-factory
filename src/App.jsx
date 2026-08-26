import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Essence from './components/Essence'
import Values from './components/Values'
import Experience from './components/Experience'
import Menu from './components/Menu'
import Showcase from './components/Showcase'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Locations from './components/Locations'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Essence />
        <Values />
        <Experience />
        <Menu />
        <Showcase />
        <Stats />
        <Testimonials />
        <Locations />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
