// Cloudflare Worker for serving static assets with maximum caching
export default {
  async fetch(request: Request, env: { STATIC_ASSETS: Fetcher }): Promise<Response> {
    const url = new URL(request.url);
    
    // Try to serve the static asset
    let response = await env.STATIC_ASSETS.fetch(request);
    
    // If not found, serve index.html for SPA routing
    if (response.status === 404) {
      const indexRequest = new Request(new URL('/index.html', url.origin), request);
      response = await env.STATIC_ASSETS.fetch(indexRequest);
    }

    // Clone response to modify headers
    response = new Response(response.body, response);

    // Determine cache duration based on file type
    const pathname = url.pathname;
    
    // Static assets with hash in filename - cache for 1 year
    if (pathname.startsWith('/assets/') || pathname.match(/\.[a-f0-9]{8}\./)) {
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Images, fonts - cache for 1 year
    else if (pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot)$/i)) {
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // HTML - no cache for instant updates
    else if (pathname.endsWith('.html') || pathname === '/') {
      response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
    }
    // Default - short cache
    else {
      response.headers.set('Cache-Control', 'public, max-age=3600');
    }

    // Security headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    return response;
  },
};

