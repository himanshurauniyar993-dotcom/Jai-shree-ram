export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Virginia ka Hugging Face link
    const targetHost = "himanshurauniyar993-anifinix-engine.hf.space";
    const targetUrl = `https://${targetHost}${url.pathname}${url.search}`;

    const newRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
    });

    return fetch(newRequest, {
      cf: {
        cacheEverything: true,
        cacheTtl: 2,           // Playlist ke liye
        cacheTtlByStatus: { "200-299": 3600, "404": 1 } // Video segments ke liye
      }
    });
  },
};
