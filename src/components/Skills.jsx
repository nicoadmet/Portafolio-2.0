import { Reveal } from "./Reveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-400",
      skills: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "Vite"]
    },
    {
      title: "Backend & DB",
      color: "from-purple-500 to-indigo-400",
      skills: ["Node.js", "Express", "C# / .NET", "MongoDB", "MySQL", "SQLite", "Sequelize", "JWT"]
    },
    {
      title: "Profesional / Tools",
      color: "from-pink-500 to-rose-400",
      skills: ["Git & GitHub", "SCRUM / Agile", "Arquitectura de Software", "Postman / APIs", "Unit Testing", "Vite / Webpack", "Selenium", "Trello / Jira"]
    }
  ];

  return (
    <Reveal>
        <section
        id="skills"
        className="relative min-h-screen flex items-center text-white overflow-hidden w-full py-24 border-b border-white/5"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-1/4 right-[5%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
          
          {/* Header */}
          <div className="mb-20">
            <span className="text-[11px] font-mono tracking-[0.4em] text-[#8b5cf6] uppercase opacity-80 mb-6 block">
              STACK TÉCNICO
            </span>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic">
              Hard <span className="text-[#93c5fd] not-italic">SKILLS</span>
            </h2>

            <div className="w-20 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 mt-8"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="group relative w-full max-w-[420px] p-8 rounded-[30px] bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-sm overflow-hidden md:last-child md:col-span-2 md:justify-self-center lg:col-span-1"
              >
                {/* Glow hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${category.color} transition duration-500`} />

                {/* Title */}
                <h3 className="text-white font-bold text-xl mb-8 uppercase tracking-widest flex items-center gap-3 relative z-10">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} animate-pulse`}></span>
                  {category.title}
                </h3>

                {/* Skills */}
                <ul className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-400 
                      hover:text-white hover:border-white/30 hover:bg-white/10 
                      transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-gray-500 text-sm max-w-xl italic leading-relaxed">
              "Enfoque en desarrollo de software con código limpio, escalabilidad y arquitectura eficiente orientada a resultados."
            </p>

            <div className="flex gap-4 opacity-60">
              {/* futuro: iconos */}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
    
  );
};

export default Skills;