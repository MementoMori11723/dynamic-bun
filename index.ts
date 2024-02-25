const base_path: string = "./pages/";
const headers: object = {
  status: 200,
  headers: {
    "Content-Type": "text/html; charset=UTF-8",
    Connection: "close",
  },
};
const app = Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    switch (url.pathname) {
      case "/error.js":
      case "/index.js":
      case "/about.js":
        return new Response(Bun.file(base_path + url.pathname.slice(1)));
      default:
        const file = `${
          url.pathname == "/" ? "index.js" : `${url.pathname}.js`
        }`;
        const checkFile = Bun.file(base_path + file);
        if (await checkFile.exists()) {
          const body: string = /*html*/ `
            <!DOCTYPE html>
            <html>
            <head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>Demo</title>
                <script defer src="${file}"></script>
            </head>
            <body>
                <page-content></page-content>
            </body>
            </html>
          `;
          return new Response(body, headers);
        } else {
          return Response.redirect("/error", 301);
        }
    }
  },
  port: process.env.PORT || 5000,
});
console.log(`App running at http://localhost:${app.port}`);
