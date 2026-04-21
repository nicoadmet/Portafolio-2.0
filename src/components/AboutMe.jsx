import { Reveal } from "./Reveal";

const AboutMe = () => {
  return (
    <Reveal>
        <section id="about" className="relative min-h-screen flex items-center text-white overflow-hidden w-full py-20 lg:py-0 border-b border-white/5">

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Columna Izquierda: Perfil Profesional */}
            <div>
              <span className="text-[11px] md:text-[13px] font-mono tracking-[0.4em] text-[#8b5cf6] uppercase opacity-80 mb-6 block">
                PERFIL PROFESIONAL
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic mb-8">
                Formación & <br />
                <span className="text-[#93c5fd] not-italic">Sistemas</span>
              </h2>
              <div className="w-20 h-[2px] bg-blue-500 mb-8"></div>
              
              <a 
                href="src\cv\nicolasadmet.pdf"
                target="_blank" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black rounded-xl text-xs tracking-widest hover:scale-105 transition-all uppercase shadow-lg shadow-blue-500/10"
              >
                Descargar CV 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>

            {/* Columna Derecha: Enfoque Académico y Técnico */}
            <div className="flex flex-col gap-8">
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                Soy Técnico Universitario en Programación, graduado de la UTN, con una formación integral en algoritmos, estructuras de datos y arquitectura de sistemas.
              </p>
              
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                Mi objetivo es integrarme a equipos de desarrollo donde pueda aplicar mi conocimiento. Me considero un perfil analítico, orientado a la resolución de problemas y con una fuerte capacidad de adaptación a metodologías de trabajo ágiles y estándares corporativos.
              </p>

              {/* Stats enfocados en Formación */}
              <div className="grid grid-cols-2 gap-8 mt-4">
                <div className="border-l-2 border-blue-500/30 pl-4">
                  <h4 className="text-white font-bold text-xl mb-1 uppercase tracking-tighter">UTN FRRO</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Tec. en Programación</p>
                </div>
                <div className="border-l-2 border-blue-500/30 pl-4">
                  <h4 className="text-white font-bold text-xl mb-1 uppercase tracking-tighter">Diplomatura</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Desarrollo Web Fullstack</p>
                </div>
                <div className="border-l-2 border-blue-500/30 pl-4">
                  <h4 className="text-white font-bold text-xl mb-1 uppercase tracking-tighter">Inglés B2</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Nivel Intermedio</p>
                </div>
                <div className="border-l-2 border-blue-500/30 pl-4">
                  <h4 className="text-white font-bold text-xl mb-1 uppercase tracking-tighter">Metodologías</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Scrum / Agile</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-400 italic text-sm border-l-2 border-white/10 pl-4">
                  "Comprometido con la formación continua y la excelencia técnica en entornos de trabajo colaborativos."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Reveal>
    
  );
};

export default AboutMe;