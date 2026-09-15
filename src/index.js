export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = `https://opencode.ai/zen/go${url.pathname}${url.search}`;

    const headers = new Headers(request.headers);
    headers.set("x-opencode-session", "android-official-001");
    headers.set("host", "opencode.ai");
    for (const key of [...headers.keys()]) {
      if (key.startsWith("cf-")) headers.delete(key);
    }

    const init = { method: request.method, headers };
    if (request.method !== "GET" && request.method !== "HEAD") {
      init.body = await request.arrayBuffer();
    }

    return fetch(target, init);
  },
};
