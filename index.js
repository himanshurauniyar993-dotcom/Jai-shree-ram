export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const targetHost = "himanshurauniyar993-anifinix-engine.hf.space";
    const targetUrl = `https://${targetHost}${url.pathname}${url.search}`;

    const newRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
    });

    return fetch(newRequest, {
      cf: {
        cacheEverything: true,
        cacheTtl: 2,
        cacheTtlByStatus: { "200-299": 3600, "404": 1 }
      }
    });
  },
};
