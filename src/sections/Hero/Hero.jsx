import { motion } from 'framer-motion';
//import MatrixBackground from '../../components/MatrixBackground';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white px-4 overflow-hidden"
    > 
      {/*<MatrixBackground /> */}

      <div className="max-w-2xl text-center backdrop-blur-sm bg-black/80 border border-white/10 rounded-xl p-10 shadow-lg z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white-400"
        >  
        
          <Typewriter
            words={['Hola, soy Leandro']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
          Desarrollador Frontend — React, Vite, Tailwind / Backend node.js / Sistema operativo IBM i (AS400)
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-green-500 hover:bg-green-600 text-black font-semibold  inline-block mt-8 py-3 px-6 rounded-full transition duration-300  shadow-[0_0_10px_#22c55e] hover:shadow-[0_0_15px_#22c55e]" 
          //shadow-lg shadow-green-500/20" <-- QUITAR O PONER DE NUEVO
          //className="inline-block mt-8 px-6 py-3 text-black font-semibold rounded-lg bg-green-500 hover:bg-green-500 transition shadow-green-500/20" <-- QUITAR O PONER DE NUEVO
        >
          Ver proyectos
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;

