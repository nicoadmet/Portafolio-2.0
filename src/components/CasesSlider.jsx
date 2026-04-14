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
    { id: 1, topTag: "100% SPA", title: "Freshness", description: "E-commerce de alta velocidad.", image: freshness },
    { id: 2, topTag: "Turnos", title: "HairSync", description: "Gestión de barberías con roles.", image: ecoCabanas },
    { id: 3, topTag: "Mayorista", title: "Oniria", description: "Distribuidora con stock masivo.", image: oniria }
  ];

  // Triplicamos la lista para asegurar que el loop tenga "carne" suficiente
  const caseList = [...baseProjects, ...baseProjects, ...baseProjects];

  return (
    <section id="proyectos" className="py-20 bg-dark-bg text-white overflow-hidden w-full">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="mb-12 text-center px-6">
          <span className="text-xs font-mono tracking-[0.3em] text-accent-blue uppercase opacity-70">Proyectos</span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter">
            Los más <span className="text-accent-blue italic font-light">DESTACADOS</span>
          </h2>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides={true}
            loop={true}
            // Esto es vital para el loop hacia la izquierda
            loopedSlides={6} 
            spaceBetween={20}
            slidesPerView={1.2} // En móvil se ve el siguiente asomando un poquito
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
            breakpoints={{
              // Desktop
              1024: {
                slidesPerView: 1.8,
                spaceBetween: 80,
              }
            }}
            className="!overflow-visible w-full"
          >
            {caseList.map((project, index) => (
              <SwiperSlide key={`${project.id}-${index}`} className="flex justify-center">
                <div className="relative w-full max-w-[900px] rounded-[30px] md:rounded-[40px] bg-white/[0.03] border border-white/5 aspect-[4/3] md:aspect-[16/10] flex flex-col justify-end overflow-hidden p-6 md:p-12">
                  
                  {/* Mockup */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 md:p-16">
                    <div className="w-full h-full rounded-xl border-[6px] md:border-[12px] border-[#1a1a1a] bg-black shadow-2xl overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-[5]" />

                  {/* Texto */}
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-[9px] font-bold text-accent-blue uppercase tracking-widest mb-4">
                      {project.topTag}
                    </span>
                    <h3 className="text-2xl md:text-5xl font-black tracking-tight uppercase leading-none mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas - Ocultas en móvil para mejor UX */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full left-0 justify-between z-30 pointer-events-none px-10">
            <button className="prev-btn h-16 w-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center text-xl hover:bg-white hover:text-black pointer-events-auto cursor-pointer transition-all">
              ←
            </button>
            <button className="next-btn h-16 w-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center text-xl hover:bg-white hover:text-black pointer-events-auto cursor-pointer transition-all">
              →
            </button>
          </div>
        </div>

        <div className="swiper-pagination-custom flex justify-center gap-3 mt-10"></div>
      </div>
    </section>
  );
};

export default CasesSlider;