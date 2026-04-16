// src/components/ParticlesBg.jsx
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  // Esta función se ejecuta una vez para inicializar el motor
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Partículas cargadas:", container);
  };

  // Esta es la configuración clave que imita el diseño de tu imagen
  const options = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: {
          enable: true, // ¡INTERACCIÓN!
          mode: "grab", // Las líneas se "agarran" al mouse
        },
      },
      modes: {
        grab: {
          distance: 200, // Distancia a la que se conectan con el mouse
          links: { opacity: 0.5 },
        },
      },
    },
    particles: {
      color: { value: "#60a5fa" }, // El color celeste/azul de la imagen
      links: {
        color: "#60a5fa", // Líneas del mismo color
        distance: 150, // Distancia máxima entre puntos para unirse
        enable: true,
        opacity: 0.2, // Muy sutiles, como en la imagen
        width: 1,
      },
      move: {
        direction: "none",
        enable: true, // Movimiento constante pero lento
        outModes: { default: "bounce" },
        random: false,
        speed: 1, // Velocidad baja para elegancia
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 100, // Cantidad de nodos (ajusta si se ve muy vacío o muy lleno)
      },
      opacity: {
        value: 0.3, // Nodos sutiles
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }, // Tamaños variados
    },
    detectRetina: true,
  };

  if (!init) return null; // Espera a que cargue el motor

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 z-0" // Posicionado detrás de todo
    />
  );
};

export default ParticlesBg;