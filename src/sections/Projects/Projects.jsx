import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiRedux } from 'react-icons/si';
import { MdStorage } from 'react-icons/md';
//import MatrixBackground from '../../components/MatrixBackground';


const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  Vite: <SiVite className="text-purple-400" />,
  Tailwind: <SiTailwindcss className="text-blue-400" />,
  'Context API': <MdStorage className="text-yellow-400" />,
  Redux: <SiRedux className="text-purple-500" />,
};

const projects = [
  {
    title: 'Portafolio Web',
    description: 'Sitio personal desarrollado con React, Vite y TailwindCSS.',
    tech: ['React', 'Vite', 'Tailwind'],
    proyecto: 'https://leandro-portafolio.vercel.app/',
  },
  // Agrega más proyectos si quieres
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-48 px-6  text-white  overflow-hidden relative">
      {/*<MatrixBackground /> */}
      <div className="absolute inset-0 mx-auto my-auto w-full max-w-[1200px] bg-black/80 backdrop-blur-md border border-green-500/20 rounded-2xl shadow-[0_0_40px_#00ff88] z-0 py-10 px-6 max-h-[76vh] overflow-hidden" />


      <motion.h2
        className="text-3xl font-bold text-center text-white-400 mb-12  relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Proyectos
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto ">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white/4 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-green-300 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>

            <ul className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <li key={i} className="bg-gray-800 p-2 rounded text-xl">
                  {techIcons[tech] || tech}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a
                href={project.proyecto}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-400 hover:underline"
              >
                Ver proyecto
              </a>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
