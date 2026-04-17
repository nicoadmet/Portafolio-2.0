import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import CasesSlider from "./components/CasesSlider"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"

const App = () => {
  return (
    <main className="bg-[#050505] relative min-h-screen">

      {/* FONDO GLOBAL */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div>
        <Navbar />
        <Hero />
        <CasesSlider />
        <AboutMe />
        <Skills />
      </div>
    </main>
    
  )
}

export default App