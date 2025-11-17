
'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import ContactEmail from '@/emails/contact-email';

const contactEmail = process.env.CONTACT_EMAIL || 'coaching@rubyvillarroel.cl';

// Define the schema for the form data
export const sendEmailSchema = z.object({
  name: z.string().min(2, { message: 'Tu nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'Tu mensaje debe tener al menos 10 caracteres.' }),
});

export type SendEmailFormState = {
  message: string;
  status: 'idle' | 'success' | 'error';
  errors?: Record<string, string[]>;
};

export async function sendEmail(
  prevState: SendEmailFormState,
  formData: FormData
): Promise<SendEmailFormState> {

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set.');
    return {
      message: 'El envío de correos no está configurado en el servidor.',
      status: 'error',
    };
  }

  // Validate form data
  const validatedFields = sendEmailSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      message: 'Por favor, corrige los errores en el formulario.',
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'Web Ruby <no-reply@rubyvillarroel.cl>',
      to: [contactEmail],
      reply_to: email,
      subject: `Nuevo mensaje de ${name} desde tu web`,
      react: ContactEmail({ name, email, message }),
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        message: 'Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.',
        status: 'error',
      };
    }

    return {
      message: '¡Gracias por tu mensaje! Te responderé pronto.',
      status: 'success',
    };
  } catch (exception: unknown) {
    console.error('Exception sending email:', exception);
    return {
      message: 'Ocurrió un error inesperado. Por favor, intenta de nuevo.',
      status: 'error',
    };
  }
}
