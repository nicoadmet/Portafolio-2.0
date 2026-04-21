import { Reveal } from "./Reveal";

const Contact = () => {
  return (
    <Reveal>
        <section id="contact" className="relative min-h-screen flex items-center bg-[#050505] text-white overflow-hidden w-full py-24">
        
        {/* Luz de fondo sutil para cerrar la página */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        {/* Texto de fondo gigante decorativo (Estilo Agencia) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
          <h2 className="text-[20vw] font-black uppercase leading-none tracking-tighter">
            NICOLÁS ADMET
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            <span className="text-[11px] font-mono tracking-[0.5em] text-[#8b5cf6] uppercase opacity-80 mb-8 block">
              TRABAJEMOS JUNTOS
            </span>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.8] uppercase italic mb-12">
              HABLEMOS <br />
              <span className="text-[#93c5fd] not-italic">AHORA</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 font-light mb-16 max-w-2xl">
              Actualmente estoy abierto a nuevas oportunidades en relación de dependencia y proyectos desafiantes.
            </p>

            {/* Grid de Contacto Rápido */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              
              {/* Email Directo */}
              <a 
                href="mailto:admetnico@gmail.com" 
                className="group flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500 min-w-[200px]"
              >
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Enviar Email</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/nicolasadmet/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500 min-w-[200px]"
              >
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/nicoadmet" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500 min-w-[200px]"
              >
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">GitHub</span>
              </a>
            </div>

            {/* Footer sutil */}
            <footer className="mt-32 pt-8 border-t border-white/5 w-full">
              <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em]">
                © {new Date().getFullYear()} Nicolás Admet • Rosario, Argentina
              </p>
            </footer>
          </div>
        </div>
      </section>
    </Reveal>
    
  );
};

export default Contact;