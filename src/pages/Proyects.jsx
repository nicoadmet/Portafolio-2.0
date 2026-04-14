import React from 'react'

const Proyects = () => {
  const projectList = [
    {
      id: 1,
      title: "EcoCabañas",
      description: "Plataforma de gestión de reservas y administración de cabañas desarrollada con el stack MERN.",
      tech: ["React", "Node.js", "SQLite", "JWT"],
      link: "#", // Reemplazar por link a GitHub o Deploy
    },
    {
      id: 2,
      title: "Freshness",
      description: "SPA para un supermercado online con enfoque en rendimiento y experiencia de usuario fluida.",
      tech: ["Next.js", "Tailwind", "Bootstrap"],
      link: "#",
    },
    {
      id: 3,
      title: "HairSync",
      description: "Sistema de turnos para peluquerías con roles de usuario (Cliente, Admin y Barber).",
      tech: ["React", "Express", "Node.js"],
      link: "#",
    },
  ];

  return (
    <section id="proyectos" className="py-24 px-6 md:px-12 bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de la sección */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-accent-blue"></div>
            <span className="text-xs font-mono tracking-[0.3em] text-gray-500 uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            PROYECTOS <span className="text-accent-blue italic font-light">DESTACADOS</span>
          </h2>
        </div>

        {/* Grilla de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div 
              key={project.id}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/40 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Resplandor interno en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/* Tags de tecnología */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded-md text-gray-500 bg-white/5 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link al proyecto */}
              <a 
                href={project.link} 
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white group-hover:gap-4 transition-all"
              >
                Explorar Proyecto 
                <span className="text-accent-blue">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyects