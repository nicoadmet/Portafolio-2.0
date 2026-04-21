import { useState, useEffect } from "react";
import { useScroll } from "../hooks/useScroll";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollTo } = useScroll();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "Inicio", id: "hero" },
    { name: "Proyectos", id: "projects" },
    { name: "Sobre Mí", id: "about" },
    { name: "Habilidades", id: "skills" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault(); 
    scrollTo(id);      
    setIsOpen(false); 
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 z-[110] flex items-center justify-between px-6 md:px-12 bg-dark-bg/50 backdrop-blur-md border-b border-white/5 font-sans">
        
        {/* LOGO */}
        <div>
            <button 
            onClick={(e) => handleNavClick(e, 'hero')} 
            className="text-xl font-bold tracking-tighter text-white cursor-pointer"
          >
            Nicolás<span className="text-blue-400">Admet</span>
          </button>
        </div>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="ml-4 px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all cursor-pointer"
          >
            Contactar ↗
          </button>
        </div>

        {/* BOTÓN HAMBURGUESA (Aseguramos que siempre sea clickable) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white relative z-[120]" // Z-index más alto que el overlay
          aria-label="Abrir menú"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </nav>

      {/* EL MENÚ QUE BAJA (Z-index menor al del botón) */}
      <div className={`
        fixed inset-0 z-[105] bg-dark-bg flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden
        ${isOpen ? "translate-y-0" : "-translate-y-full"}
      `}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // También cerramos al clickear un link
              className="text-2xl font-bold text-white hover:text-accent-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto" 
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 bg-white text-black font-bold rounded-full text-xl"
          >
            Contactar ↗
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;