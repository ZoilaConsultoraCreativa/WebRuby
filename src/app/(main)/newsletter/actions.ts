
'use server';

import { google } from 'googleapis';

export type NewsletterArticle = {
  id: string;
  title: string;
  image: string;
  summary: string;
  content: string;
  externalLink?: string;
  status: 'MOSTRAR' | 'DESTACAR' | 'OCULTAR';
};

const SHEET_NAME = 'Newsletter'; // The name of the sheet (tab) in your Google Sheet

export async function getNewsletterArticles(): Promise<NewsletterArticle[]> {
  const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
  const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

  if (!GOOGLE_SHEETS_API_KEY || !GOOGLE_SHEET_ID) {
    console.error('Google Sheets API Key or Sheet ID is missing in environment variables.');
    throw new Error('Google Sheets API Key or Sheet ID is not configured in environment variables.');
  }

  try {
    const auth = google.auth.fromAPIKey(GOOGLE_SHEETS_API_KEY);
    const sheets = google.sheets({
      version: 'v4',
      auth: auth,
    });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${SHEET_NAME}!A2:F`, // Assumes columns are A:Titulo, B:Imagen, C:Texto Corto, D:Texto largo, E:Link Externo, F:Destacado
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return [];
    }

    const articles: NewsletterArticle[] = rows.map((row, index) => ({
      id: `article-${index + 1}`,
      title: row[0] || '',
      image: row[1] || 'https://picsum.photos/seed/placeholder/600/400', // Default placeholder
      summary: row[2] || '',
      content: row[3] || '',
      externalLink: row[4] || undefined,
      status: row[5] || 'OCULTAR',
    })).filter(article => article.status === 'MOSTRAR' || article.status === 'DESTACAR');
    
    return articles;
  } catch (err: any) {
    // Check for specific API permission errors from Google
    if (err.code === 403) {
        const reason = err.errors?.[0]?.reason;
        let errorMessage = `Error: The request to Google Sheets was denied. (Code: 403)`;

        if (reason === 'accessNotConfigured' || reason === 'forbidden') {
            errorMessage = `Error: Permission denied. Please ensure your Google Sheet's sharing setting is set to 'Anyone with the link' can 'Viewer'. The API Key does not have permission to access this private sheet.`;
        } else {
             errorMessage = `Error: Permission denied to access the sheet. Please ensure the Google Sheets API is enabled and your sheet is public (viewable by anyone with the link). Details: ${err.message}`;
        }
        
        console.error(errorMessage, err);
        throw new Error(errorMessage);
    }
    
    console.error('The API returned an error: ', err);
    throw new Error('Failed to fetch data from Google Sheets. Please check your API Key, Sheet ID, and that the Sheet is publicly viewable.');
  }
}
