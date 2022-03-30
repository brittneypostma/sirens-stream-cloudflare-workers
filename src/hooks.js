export async function handle({ event, resolve }) {
    
    const response = await resolve(event, {
        ssr: false
    });

    response.headers.set('cache-control', 'max-age=15');

    return response;
  }