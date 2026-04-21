import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ecoCabanas from "../assets/EcoCabañas.png";
import freshness from "../assets/freshness.png";
import oniria from "../assets/Oniria-Distribuidora.png";

import { Reveal } from "./Reveal";

const CasesSlider = () => {
  const baseProjects = [
    { 
      id: 1, 
      topTag: "Catálogo intuitivo", 
      title: "Oniria Distribuidora", 
      description: "Plataforma con catálogo digital y para compras por Whatsapp.",
      image: oniria,
      tags: ["E-commerce", "B2B", "Google sheets"],
      tech: ["react", "tailwindcss", "googlesheets"],
      link: "https://oniria-distribuidorar-bebidas.vercel.app/"
    },
    { 
      id: 2, 
      topTag: "Gestión de Reservas", 
      title: "Eco Cabañas", 
      description: "Sistema para hotelería con dashboards para clientes y administradores.",
      image: ecoCabanas,
      tags: ["Fullstack", "SaaS", "Dashboard"],
      tech: ["react", "express", "nodedotjs", "jsonwebtokens", "bootstrap", "vite"],
      link: "https://ecocabanas.vercel.app/"
    },
    { 
      id: 3, 
      topTag: "100% SPA — High Performance", 
      title: "Freshness", 
      description: "Supermercado online diseñado como una SPA. Enfoque en la fluidez de navegación y optimización.",
      image: freshness,
      tags: ["E-commerce", "SPA", "UX/UI"],
      tech: ["react", "nextdotjs", "bootstrap"],
      link: "https://freshness-tau.vercel.app/" 
    }
  ];

  // Triplicamos para asegurar que el loop infinito no tenga saltos visuales
  const caseList = [...baseProjects, ...baseProjects, ...baseProjects];

  return (
    <Reveal>
        <section id="projects" className="py-12 md:py-24 bg-[#050505] text-white overflow-hidden w-full font-sans border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-12 md:mb-16 text-center px-6 z-10">
            <span className="text-[11px] md:text-[13px] font-mono tracking-[0.4em] text-[#8b5cf6] uppercase opacity-80 mb-4 block">
              PROYECTOS
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic">
              MÁS <span className="text-[#93c5fd] not-italic">DESTACADOS</span>
            </h2>
          </div>

          <div className="relative group px-2 md:px-0 z-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              centeredSlides={true}
              loop={true}
              spaceBetween={20}
              slidesPerView={1.05}
              autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
              navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
              breakpoints={{
                768: { slidesPerView: 1.2, spaceBetween: 30 },
                1024: { slidesPerView: 1.6, spaceBetween: 60 }
              }}
              className="!overflow-visible w-full"
            >
              {caseList.map((project, index) => (
                <SwiperSlide key={`${project.id}-${index}`}>
                  <div className="relative w-full mx-auto rounded-[35px] md:rounded-[45px] bg-[#111] overflow-hidden min-h-[550px] md:min-h-[auto] md:aspect-[16/10] shadow-2xl border border-white/5 transition-transform duration-500">
                    
                    {/* Background Image & Optimized Overlay */}
                    <div className="absolute inset-0">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-60 md:opacity-50 transition-transform duration-700 group-hover:scale-105" 
                      />
                      {/* El degradado es más suave en mobile para no oscurecer toda la imagen */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent/10 md:via-black/40 md:to-transparent" />
                    </div>

                    {/* UI Content */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-7 md:p-14 text-white">
                      
                      <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                        <span className="px-3 py-1.5 rounded-full bg-white text-[9px] md:text-[10px] font-black text-black uppercase tracking-wider">
                          {project.topTag}
                        </span>
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 leading-none uppercase italic">
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="max-w-md">
                          <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed mb-8">
                            {project.description}
                          </p>
                          
                          {/* BOTÓN "VER DEMO" */}
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-black text-[11px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-100 transition-all duration-300 group/btn shadow-xl shadow-white/5"
                          >
                            VER DEMO
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </a>
                        </div>

                        {/* Stack Tecnológico Centrado (Solución al gap de EcoCabañas) */}
                        <div className="flex flex-wrap items-center justify-center gap-4 bg-white/5 backdrop-blur-xl p-4 px-6 rounded-3xl border border-white/10 w-fit self-start md:self-auto">
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

            {/* Flechas Navegación (Solo Desktop) */}
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full left-0 justify-between z-40 pointer-events-none px-6 md:px-12">
              <button className="prev-btn h-14 w-14 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-white flex items-center justify-center text-3xl hover:bg-white hover:text-black pointer-events-auto transition-all active:scale-90 shadow-2xl">
                ‹
              </button>
              <button className="next-btn h-14 w-14 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-white flex items-center justify-center text-3xl hover:bg-white hover:text-black pointer-events-auto transition-all active:scale-90 shadow-2xl">
                ›
              </button>
            </div>
          </div>

          {/* Paginación */}
          <div className="swiper-pagination-custom flex justify-center gap-3 mt-10 md:mt-16"></div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .swiper-pagination-custom .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #222;
            opacity: 1;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border-radius: 10px;
          }
          .swiper-pagination-custom .swiper-pagination-bullet-active {
            width: 40px;
            background: #8b5cf6 !important;
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
          }
        `}} />
      </section>
    </Reveal>
    
  );
};

export default CasesSlider;