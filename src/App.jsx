import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SoftSkills from './components/SoftSkills'
import TechnicalSkills from './components/TechnicalSkills'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff2a2a] selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <TechnicalSkills />
        <SoftSkills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
