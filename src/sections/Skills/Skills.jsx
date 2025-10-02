import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiGithub,
  SiFigma,
  SiPython,
} from 'react-icons/si';
//import MatrixBackground from '../../components/MatrixBackground';

const skills = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Vite', icon: SiVite },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Figma', icon: SiFigma },
  { name: 'Python', icon: SiPython },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen relative py-48 px-6 text-white overflow-hidden">
      {/*<MatrixBackground /> */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white-400"
        >
          Habilidades
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group flex flex-col items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 shadow-md hover:scale-105 hover:border-green-400 transition-all"
              >
                <Icon size={36} className="text-green-500 group-hover:text-green-500 drop-shadow-glow" />
                <span className="text-sm text-white group-hover:text-white">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
