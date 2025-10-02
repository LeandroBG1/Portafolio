import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-black bg-opacity-80 backdrop-blur-sm  text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} <span className="text-green-500">Leandro</span>. Todos los derechos reservados.
        </p>

        <p className="text-xs mt-2 text-gray-500 opacity-70">
          Diseñado y desarrollado con <span className="text-green-400">React</span>, <span className="text-green-400">Vite</span> y <span className="text-green-400">TailwindCSS</span>
        </p>

        <div className="mt-4 flex justify-center gap-4 text-xl text-green-400">
          <a
            href="https://github.com/LeandroBG1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="http://www.linkedin.com/in/leandro-ballen-garcia-086b8915b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
