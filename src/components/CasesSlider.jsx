import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ecoCabanas from "../assets/EcoCabañas.png";
import freshness from "../assets/freshness.png";
import oniria from "../assets/Oniria-Distribuidora.png";

const CasesSlider = () => {
  const baseProjects = [
    { 
      id: 1, 
      topTag: "100% SPA — High Performance", 
      title: "Freshness", 
      description: "Supermercado online diseñado como una SPA. Enfoque en la fluidez de navegación y optimización.",
      image: freshness,
      tags: ["E-commerce", "SPA", "UX/UI"],
      tech: ["react", "nextdotjs", "bootstrap"]
    },
    { 
      id: 2, 
      topTag: "Gestión de Reservas", 
      title: "Eco Cabañas", 
      description: "Sistema para hoteleria con dashboards para clientes y administradores.",
      image: ecoCabanas,
      tags: ["Fullstack", "SaaS", "Dashboard"],
      tech: ["react", "express", "node.js", "jsonwebtokens", "bootstrap", "vite"]
    },
    { 
      id: 3, 
      topTag: "Catálogo intuitivo", 
      title: "Oniria Distribuidora", 
      description: "Plataforma con catálogo digital y para compras por Whatsapp.",
      image: oniria,
      tags: ["Web App", "B2B", "Google sheets"],
      tech: ["react", "tailwindcss", "googlesheets"]
    }
  ];

  const caseList = [...baseProjects, ...baseProjects, ...baseProjects];

  return (
    <section id="proyectos" className="py-24 bg-[#050505] text-white overflow-hidden w-full">
      <div className="max-w-[1400px] mx-auto">
        F
        <div className="mb-16 text-center px-6">
          <span className="text-[13px] font-mono tracking-[0.5em] text-[#8b5cf6] uppercase opacity-80 mb-6 block">
            PROYECTOS
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Más <span className="text-[#93c5fd]">DESTACADOS</span>
          </h2>
        </div>

        <div className="relative group px-4 md:px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides={true}
            loop={true}
            loopedSlides={6} 
            spaceBetween={40}
            slidesPerView={1.1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
            breakpoints={{
              1024: { slidesPerView: 1.6, spaceBetween: 60 }
            }}
            className="!overflow-visible w-full"
          >
            {caseList.map((project, index) => (
              <SwiperSlide key={`${project.id}-${index}`}>
                <div className="relative w-full max-w-[750px] max-h-[450px] rounded-[45px] bg-[#111] overflow-hidden aspect-[4/3] md:aspect-[16/11] shadow-2xl border border-white/5">
                  
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
                    />
                  </div>

                  {/* Gradiente oscuro para texto blanco */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 text-white">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-4 py-2 rounded-full bg-white text-[10px] font-bold text-black uppercase tracking-wider">
                        {project.topTag}
                      </span>
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 leading-none">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <p className="max-w-md text-white/70 text-sm md:text-base font-medium leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10 w-fit min-h-[48px]">
                        {project.tech.map((icon) => (
                          <img 
                            key={icon}
                            src={`https://cdn.simpleicons.org/${icon}/ffffff`}
                            alt={icon}
                            className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity object-contain"
                            title={icon}
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-1/2 -translate-y-1/2 w-full left-0 flex justify-between z-40 pointer-events-none px-4 md:px-10">
            <button className="prev-btn h-14 w-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center text-xl hover:bg-white hover:text-black pointer-events-auto transition-all active:scale-90">
              ‹
            </button>
            <button className="next-btn h-14 w-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center text-xl hover:bg-white hover:text-black pointer-events-auto transition-all active:scale-90">
              ›
            </button>
          </div>
        </div>

        <div className="swiper-pagination-custom flex justify-center gap-2 mt-12"></div>
      </div>
    </section>
  );
};

export default CasesSlider;