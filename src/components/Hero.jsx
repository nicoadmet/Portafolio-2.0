import ParticlesBg from "../components/ParticlesBg";
import { Reveal } from "./Reveal";

import { useScroll } from "../hooks/useScroll";

const Hero = () => {
  const { scrollTo } = useScroll();

    const handleNavClick = (e, id) => {
      e.preventDefault(); 
      scrollTo(id);       
    };

  return (
    <Reveal>
        <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-dark-bg text-white px-6 overflow-hidden font-sans border-b border-white/5">  
        {/* FONDO INTERACTIVO */}
        <ParticlesBg />
        
        {/* 2. Resplandor radial sutil (para dar profundidad al centro) */}
        <div className="absolute inset-0 z-1 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent-blue/20 rounded-full blur-[160px]" />
        </div>

        {/* 3. El Contenido (Encima de todo) */}
        <div className="relative z-10 max-w-6xl text-left flex flex-col items-left">
          
          {/* Overline con la rayita */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-accent-blue"></div>
            <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-gray-500 uppercase">
              DESARROLLADOR FULLSTACK
            </span>
          </div>

          {/* Headline GIGANTE y CONTUNDENTE */}
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.95] mb-10 max-w-5xl">
            Nicolás Admet <br />
            Desarrollador <span className="text-accent-blue">Web</span>  
          
          </h1>

          {/* Subheadline más corto y descriptivo */}
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-16 leading-relaxed font-light">
            Especialista en React y Node.js.
          </p>

          {/* Botones con estilo premium */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={ (e) => handleNavClick(e, "contact") } 
              className="group relative px-12 py-5 bg-white text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="relative z-10">CONTACTAME ↗</span>
            </button>
            <button
              onClick={ (e) => handleNavClick(e, "projects") } 
              className="px-12 py-5 border border-white/10 rounded-xl text-gray-300 hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              VER PROYECTOS
            </button>
          </div>
          
        </div>
      </section>
    </Reveal>
    
  );
};

export default Hero;