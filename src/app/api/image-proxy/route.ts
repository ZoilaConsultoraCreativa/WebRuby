
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new NextResponse('URL parameter is missing', { status: 400 });
  }

  try {
    // Fetch the image from the external URL. 
    // This request is made from the server, so it avoids CORS issues.
    const imageResponse = await fetch(imageUrl, {
        headers: {
            // Mimic a browser request to avoid being blocked
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        }
    });

    if (!imageResponse.ok) {
      return new NextResponse('Failed to fetch image', { status: imageResponse.status });
    }

    // Get the image data as a blob
    const imageBlob = await imageResponse.blob();

    // Get the content type from the original response
    const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';

    // Stream the image data back to the client
    return new NextResponse(imageBlob, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache the image for a long time
      },
    });

  } catch (error) {
    console.error('Image proxy error:', error);
    return new NextResponse('Error fetching image', { status: 500 });
  }
}
