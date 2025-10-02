import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [time, setTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { number: '01', label: 'INICIO', href: '#hero' },
    { number: '02', label: 'INFO', href: '#about' },
    { number: '03', label: 'PROYECTOS', href: '#projects' },
    { number: '04', label: 'HABILIDADES', href: '#skills' },
    { number: '05', label: 'CONTACTO', href: '#contact' }, 
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Paris',
      });
      setTime(now);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []); 

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80  text-sm font-mono text-gray-300 px-6 py-4">  
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1
          className="text-white font-bold text-lg cursor-pointer"
          onClick={() => {
            window.location.href = '/';  // recarga la página
            // O si prefieres solo scroll al inicio sin recargar:
            // window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Leandro
        </h1>

        {/*<h1 className="text-white font-bold text-lg">Leandro</h1> */}

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href} className="flex items-center gap-1">
              <span className="text-xs text-gray-500">{link.number} /</span>
              <a href={link.href} className="hover:text-white font-semibold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Info derecha */}
        <div className="hidden md:flex items-center gap-4">
    {/*}      <span className="uppercase text-xs text-gray-500">Paris /</span>
          <span className="bg-white text-black px-2 py-1 rounded-sm font-semibold">{time}</span>    */} 
          <span className="text-white">&copy; {new Date().getFullYear()}</span>
        </div>
        
        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 px-2"
          >
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-white py-2 border-b border-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.number} / {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col items-start gap-1 text-xs text-gray-400">
              <span>PARIS / <strong className="text-white">{time}</strong></span>
              <span>&copy; {new Date().getFullYear()}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
