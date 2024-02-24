# Dynamic - Bun

It's a website built with bun http server api's.

In this website we have a home page, about page and an error page.

## Build Guide

Here I will walk you through the steps to build a basic website.

### Steps : -

> _Step_ - 1: Install [bun.js](https://bun.sh/)

```bash
// to install bun type this command in terminal or command prompt.
curl -fsSL https://bun.sh/install | bash
```

> _Step_ - 2: Type this command in your terminal or command prompt to start the project.
> **Note** :- Use the command in a new folder or directory.

```bash
bun init
```

After that command you will see that your project has a index.ts file, this is our main file, before we start writing our code we need to do a couple of things.

> _Step_ - 3: create two new folders called _**images**_ and _**pages**_

```bash
mkdir images
mkdir pages
```

> _Step_ - 4: inside _package.json_ add a script inside it you will have "dev":"bun run --watch index.ts"

```json
"script":{
    "dev":"bun run --watch index.ts"
}
```

this will run our file by typing _**bun run dev**_ in terminal or command prompt.

> _Step_ - 5: Add your website icon called favicon.ico to images folder

now we will add our pages (or javascript) to our pages directory.

> _Step_ - 6: Add javascript pages to your directory.
> **Note** :- we will use web components to build the pages of our website.

#### index.js

```js
class test extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = /*html*/ `
      <h1>test drive complete!</h1>
    `;
  }
}
customElements.define("test-drive", test);

class new_ele extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = /*html*/ `
      <h1>This works!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sit porro sequi vitae eaque maiores doloribus, 
        ab fugiat alias ex ipsam facilis deserunt velit nam obcaecati, 
        repudiandae dolor voluptatibus? Sit, nesciunt.
      </p>
      <test-drive></test-drive>
    `;
  }
}
customElements.define("new-ele", new_ele);
```

#### about.js

```js
class new_ele extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = /*html*/ `
      <h1>About page</h1>
    `;
  }
}
customElements.define("new-ele", new_ele);
```

#### error.js

```js
class new_ele extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = /*html*/ `
      <h1>404 - Page not found!</h1>
    `;
  }
}
customElements.define("new-ele", new_ele);
```

Now let's write the _index.ts_ file

> _Step_ - 7: Build a http server

```ts
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
                <new-ele></new-ele>
            </body>
            </html>
          `;
          return new Response(body, headers);
        } else {
          return Response.redirect("/error", 301);
        }
    }
  },
  port: 5000,
});
console.log(`App running at http://localhost:${app.port}`);
```

And there you have it, you have successfully built an entire website with bun.js

## Explanation

If you observe closely you will see that we haven't used **.html** file or files to build a website.

That is because we wrote our html as a http response body and added necessary headers.

Bun.js by default has a server api which we can use to build a http server, inside that server we have a fetch function with a parameter request which we will use it to fetch the url path name.

based on the path name we will return a response, by default we will return html content if the path has a file in pages directory else we will redirect them to our error page.

if it is one of the cases then it needs to return the js file, since the html content is dynamic.

## Output

To run the project just type this in terminal or command prompt

```bash
bun run dev
```

After that you will get an output saying **App running at <http://localhost:[your_port_number]>**

if you go to that url, you will have your website which may or may not look similar to the output.

### output image

output - 1
![Home page](./images/output%20-%201.webp)

output - 2
![About page](./images/output%20-%202.webp)

output - 3
![Error page](./images/output%20-%203.webp)
