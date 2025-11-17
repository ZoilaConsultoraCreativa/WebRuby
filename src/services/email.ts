
'use server';
import { google } from 'googleapis';

const contactEmail = 'coaching@rubyvillarroel.cl';

type SendContactEmailParams = {
    name: string;
    email: string;
    message: string;
};

export async function sendContactEmail({ name, email, message }: SendContactEmailParams) {
    const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;

    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
        console.error('Google API credentials are not set in environment variables.');
        throw new Error('El servicio de correo no está configurado correctamente en el servidor.');
    }

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
}
