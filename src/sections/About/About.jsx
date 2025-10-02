import { motion } from 'framer-motion';
import avatar from '../../assets/Avatar.png'; // usa tu imagen aquí 
//import MatrixBackground from '../../components/MatrixBackground';   bg-black 

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 text-white flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden relative "
    >

      <div className="absolute inset-0 mx-auto my-auto w-full max-w-[1200px] bg-black/80 backdrop-blur-md border border-green-500/20 rounded-2xl shadow-[0_0_40px_#00ff88] z-0 py-10 px-6 max-h-[145vh] md:max-h-[76vh] overflow-hidden" />

      {/*<MatrixBackground />       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full  bg-black/40 backdrop-blur-md border border-green-500/20 rounded-2xl shadow-[0_0_40px_#00ff88] z-0" />*/}

      {/* Imagen */}
      <motion.img
        src={avatar}
        alt="Ilustración avatar de Leandro"
        className="w-60 md:w-80 rounded-xl border border-white/10 shadow-lg  relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Texto */}
      <motion.div
        className="max-w-xl  backdrop-blur-sm bg-white/4 border border-white/10 rounded-xl p-10 shadow-lg relative z-10 text-center md:text-left"
        //className="max-w-xl text-center md:text-left" //<-- QUITAR O PONER DE NUEVO 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-white-400 mb-4  relative">Sobre mí</h2>
        <p className="text-lg text-gray-300 leading-relaxed  relative">
          Soy Leandro, desarrollador frontend apasionado por la creación de interfaces modernas,
          accesibles y rápidas. Me encanta trabajar con tecnologías como <strong>React</strong>,
          <strong> Vite</strong> y <strong>Tailwind CSS</strong>. desarrollador backend <strong>Node.js</strong> Tengo conocimientos sobre sistema IBM i y lenguajes como <strong>RPGLE</strong>.
        </p>
        <a
          href="/CV-Leandro.pdf"
          download
          className="bg-green-500 hover:bg-green-600 text-black font-semibold  inline-block mt-8 py-3 px-6 rounded-full transition duration-300 relative shadow-[0_0_10px_#22c55e] hover:shadow-[0_0_15px_#22c55e]"  
          //shadow-lg shadow-green-500/20" <-- QUITAR O PONER DE NUEVO

          //className="inline-block mt-6 px-6 py-3 text-sm font-semibold rounded-lg bg-green-500 hover:bg-green-600 text-black transition  relative" <-- QUITAR O PONER DE NUEVO
        >
          Descargar CV
        </a>
      </motion.div>
    </section>
  );
};

export default About;
