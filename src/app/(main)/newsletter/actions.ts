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

// Ensure you have these environment variables set in your .env.local file
const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'Newsletter'; // The name of the sheet (tab) in your Google Sheet

export async function getNewsletterArticles(): Promise<NewsletterArticle[]> {
  if (!GOOGLE_SHEETS_API_KEY || !GOOGLE_SHEET_ID) {
    throw new Error('Google Sheets API Key or Sheet ID is not configured in environment variables.');
  }

  try {
    const sheets = google.sheets({
      version: 'v4',
      auth: GOOGLE_SHEETS_API_KEY,
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
    // Check for a specific API disabled error from Google
    if (err.code === 403 && err.errors?.[0]?.reason === 'accessNotConfigured') {
        const errorMessage = `Error: The Google Sheets API is not enabled for your project. 
Please enable it in the Google Cloud Console and try again.
You can enable it here: https://console.cloud.google.com/apis/library/sheets.googleapis.com`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
    
    console.error('The API returned an error: ' + err);
    throw new Error('Failed to fetch data from Google Sheets. Please check your API Key, Sheet ID, and Sheet permissions.');
  }
}
