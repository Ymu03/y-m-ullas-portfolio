import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Projects from './components/Projects'
import Services from './components/Services'
import SoftSkills from './components/SoftSkills'
import TechnicalSkills from './components/TechnicalSkills'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
