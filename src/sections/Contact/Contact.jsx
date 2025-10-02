import { useState } from 'react'; // Paso 1: Importar useState
import { motion } from 'framer-motion';

const Contact = () => {
  // Paso 2: Crear estados para los campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Estado opcional para dar feedback al usuario
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  // Paso 3: Crear la función de envío
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending'); // Informar que se está enviando

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('success');
        // Limpiar formulario después de enviar
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen relative py-48 px-6  text-white overflow-hidden">
      <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/4 border border-white/10 rounded-xl p-10 shadow-lg relative z-10">
        <motion.h2 /* ... props de motion ... */ >
          Contáctame
        </motion.h2>

        {/* Usamos la nueva función handleSubmit */}
        <motion.form
          /* ... props de motion ... */
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-1 text-sm text-green-300">Nombre</label>
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full px-4 py-2 rounded bg-black/80 text-white border border-white/20 focus:outline-none focus:border-green-400 transition-all duration-200"
              required
              value={name} // Conectar estado
              onChange={(e) => setName(e.target.value)} // Actualizar estado
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-green-300">Correo</label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full px-4 py-2 rounded bg-black/80 text-white border border-white/20 focus:outline-none focus:border-green-400 transition-all duration-200"
              required
              value={email} // Conectar estado
              onChange={(e) => setEmail(e.target.value)} // Actualizar estado
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-green-300">Mensaje</label>
            <textarea
              rows="5"
              placeholder="Escribe tu mensaje"
              className="w-full px-4 py-2 rounded bg-black/80 text-white border border-white/20 focus:outline-none focus:border-green-400 transition-all duration-200"
              required
              value={message} // Conectar estado
              onChange={(e) => setMessage(e.target.value)} // Actualizar estado
            ></textarea>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-black font-semibold  inline-block mt-8 py-3 px-6 rounded-full transition duration-300  shadow-[0_0_10px_#22c55e] hover:shadow-[0_0_15px_#22c55e]"
              disabled={status === 'sending'} // Deshabilitar botón mientras envía
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </motion.button>

            {/* Mensajes de feedback para el usuario */}
            {status === 'success' && <p className="text-green-300 mt-8">¡Mensaje enviado!</p>}
            {status === 'error' && <p className="text-red-400 mt-8">Hubo un error. Intenta de nuevo.</p>}
          </div>

        </motion.form>
      </div>
    </section>
  );
};

export default Contact;