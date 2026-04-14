import Hero from "./pages/Hero"
import Proyects from "./pages/Proyects"

import Navbar from "./components/Navbar"
import CasesSlider from "./components/CasesSlider"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CasesSlider />
    </div>
  )
}

export default App