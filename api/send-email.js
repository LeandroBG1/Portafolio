// pages/api/send-email.js
import { Resend } from 'resend';

// Lee la API Key desde las variables de entorno para mayor seguridad
const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  // Solo aceptamos peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Extraemos los datos del cuerpo de la petición
    const { name, email, message } = req.body;

    // Validamos que los datos no estén vacíos
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos los campos son requeridos.' });
    }

    // Enviamos el correo usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // ¡IMPORTANTE! Este email debe ser de tu dominio verificado o uno genérico de Resend.
      to: ['leandroballeng@gmail.com'],  // Aquí pones el email donde QUIERES RECIBIR los mensajes.
      subject: `Nuevo mensaje de contacto de ${name}`,
      reply_to: email, // Para que al darle "responder" en tu correo, le respondas al usuario.
      html: `<p>Has recibido un nuevo mensaje de tu portafolio:</p>
             <p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong></p>
             <p>${message}</p>`,
    });

    // Si hay un error al enviar, lo retornamos
    if (error) {
      return res.status(400).json(error);
    }

    // Si todo sale bien, respondemos con éxito
    res.status(200).json({ message: '¡Mensaje enviado con éxito!', data });

  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};