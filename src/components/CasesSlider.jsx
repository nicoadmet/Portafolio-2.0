import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import inmoCrm from "../assets/InmoCRM.png";

import { Reveal } from "./Reveal";

const CasesSlider = () => {
  const featuredProject = {
    id: 1,
    topTag: "SaaS para Corredores",
    title: "InmoCRM",
    description:
      "Cartera, portales y WhatsApp en un solo lugar, con alertas automáticas cuando hay match.",
    image: inmoCrm,
    tags: ["Multi-tenant", "PWA", "Multicanal"],
    tech: ["react", "typescript", "tailwindcss", "nodedotjs", "postgresql", "supabase"],
    demoLink: "https://crm-corredores-web.admetnico.workers.dev/",
    codeLink: "https://github.com/nicoadmet/crm-corredores-web",
  };

  const githubUrl = "https://github.com/nicoadmet";
  const githubRepos = [
    { name: "crm-corredores-web", desc: "CRM inmobiliario · TypeScript" },
    { name: "crm-corredores-api", desc: "API backend · TypeScript" },
    { name: "oniria-distribuidora", desc: "E-commerce B2B · React" },
    { name: "eco-cabanas", desc: "Reservas · React" },
  ];

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
              rewind={true}
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
              {/* SLIDE 1: PROYECTO DESTACADO — InmoCRM */}
              <SwiperSlide key="inmocrm">
                <div className="relative w-full mx-auto rounded-[35px] md:rounded-[45px] bg-[#111] overflow-hidden min-h-[550px] md:min-h-[auto] md:aspect-[16/10] shadow-2xl border border-white/5 transition-transform duration-500">

                  {/* Background Image & Optimized Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover opacity-60 md:opacity-50 transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* El degradado es más suave en mobile para no oscurecer toda la imagen */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent/10 md:via-black/40 md:to-transparent" />
                  </div>

                  {/* UI Content */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-7 md:p-14 text-white">

                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      <span className="px-3 py-1.5 rounded-full bg-white text-[9px] md:text-[10px] font-black text-black uppercase tracking-wider">
                        {featuredProject.topTag}
                      </span>
                      {featuredProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 leading-none uppercase italic">
                      {featuredProject.title}
                    </h3>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div className="max-w-md">
                        <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed mb-8">
                          {featuredProject.description}
                        </p>

                        {/* BOTONES "VER DEMO" Y "VER CÓDIGO" */}
                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href={featuredProject.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-black text-[11px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-100 transition-all duration-300 group/btn shadow-xl shadow-white/5"
                          >
                            VER DEMO
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </a>
                          <a
                            href={featuredProject.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white text-[11px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-white/15 transition-all duration-300 group/btn"
                          >
                            VER CÓDIGO
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </a>
                        </div>
                      </div>

                      {/* Stack Tecnológico */}
                      <div className="flex flex-wrap items-center justify-center gap-4 bg-white/5 backdrop-blur-xl p-4 px-6 rounded-3xl border border-white/10 w-fit self-start md:self-auto">
                        {featuredProject.tech.map((icon) => (
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

              {/* SLIDE 2: INVITACIÓN A GITHUB */}
              <SwiperSlide key="github">
                <div className="relative w-full mx-auto rounded-[35px] md:rounded-[45px] bg-gradient-to-br from-[#131313] via-[#0c0c0c] to-black overflow-hidden min-h-[550px] md:min-h-[auto] md:aspect-[16/10] shadow-2xl border border-white/5 transition-transform duration-500">

                  {/* Glow decorativo, consistente con el fondo global del sitio */}
                  <div className="absolute -top-24 -right-16 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

                  {/* Mockup de terminal */}
                  <div className="absolute top-6 left-4 right-4 md:top-12 md:right-12 md:left-auto md:w-[380px] md:rotate-2 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden z-10">
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                      <span className="ml-2 text-[10px] text-white/40 font-mono">nico@github:~</span>
                    </div>
                    <div className="p-4 md:p-5 font-mono text-[10.5px] md:text-[11.5px] leading-relaxed">
                      <p className="text-[#93c5fd] mb-1.5">$ gh repo list nicoadmet --limit 4</p>
                      {githubRepos.map((repo) => (
                        <p key={repo.name} className="truncate">
                          <span className="text-white">{repo.name}</span>{" "}
                          <span className="text-white/35">{repo.desc}</span>
                        </p>
                      ))}
                      <p className="text-[#93c5fd] mt-1.5">
                        $ <span className="inline-block w-[6px] h-[13px] bg-[#93c5fd] align-middle ml-0.5 animate-pulse" />
                      </p>
                    </div>
                  </div>

                  {/* UI Content */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-7 md:p-14 text-white">

                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      <span className="px-3 py-1.5 rounded-full bg-white text-[9px] md:text-[10px] font-black text-black uppercase tracking-wider">
                        Y hay más
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 leading-none uppercase italic">
                      Explorá mi <span className="text-[#93c5fd] not-italic">GitHub</span>
                    </h3>

                    <div className="max-w-md">
                      <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed mb-8">
                        InmoCRM es mi proyecto más grande, pero no el único: otros desarrollos y experimentos están en mi GitHub.
                      </p>

                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-black text-[11px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-100 transition-all duration-300 group/btn shadow-xl shadow-white/5"
                      >
                        VER GITHUB
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
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
