
'use server';

import { z } from 'zod';
import { google } from 'googleapis';

const contactEmail = 'coaching@rubyvillarroel.cl';

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
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;

  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
    console.error('Google API credentials are not set in environment variables.');
    return {
      message: 'El servicio de correo no está configurado correctamente en el servidor.',
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
    const oAuth2Client = new google.auth.OAuth2(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET
    );
    oAuth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

    const { token: accessToken } = await oAuth2Client.getAccessToken();

    if (!accessToken) {
        throw new Error('Failed to get access token');
    }

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    const emailBody = [
      `From: "Web Ruby" <${contactEmail}>`,
      `To: ${contactEmail}`,
      `Reply-To: ${email}`,
      `Subject: Nuevo mensaje de ${name} desde tu web`,
      'Content-Type: text/html; charset=utf-8',
      '',
      '<html><body>',
      `<h2>Nuevo Mensaje desde tu Página Web</h2>`,
      '<hr>',
      `<p><b>Nombre:</b> ${name}</p>`,
      `<p><b>Email:</b> ${email}</p>`,
      '<hr>',
      `<p><b>Mensaje:</b></p>`,
      `<p style="white-space: pre-wrap;">${message}</p>`,
      '<hr>',
      '<p><small>Este mensaje fue enviado desde el formulario de contacto de rubyvillarroel.cl</small></p>',
      '</body></html>',
    ].join('\n');

    const encodedMessage = Buffer.from(emailBody).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

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
