export default {
  async fetch(request) {
    const url = new URL(request.url);
    let target;
    if (url.pathname === "/zen" || url.pathname.startsWith("/zen/")) {
      target = `https://opencode.ai${url.pathname}${url.search}`;
    } else if (url.pathname === "/go" || url.pathname.startsWith("/go/")) {
      target = `https://opencode.ai${url.pathname}${url.search}`;
    } else {
      return new Response("Not Found: use /zen/... or /go/...", { status: 404 });
    }

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
