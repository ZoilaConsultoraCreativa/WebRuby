
'use server';

import { z } from 'zod';
import { sendContactEmail } from '@/services/email';

// Define the schema for the form data
const sendEmailSchema = z.object({
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
    await sendContactEmail({ name, email, message });
    return {
      message: '¡Gracias por tu mensaje! Te responderé pronto.',
      status: 'success',
    };
  } catch (exception: unknown) {
    console.error('Exception sending email:', exception);
    const error = exception instanceof Error ? exception.message : 'Ocurrió un error inesperado.';
    return {
      message: error,
      status: 'error',
    };
  }
}
