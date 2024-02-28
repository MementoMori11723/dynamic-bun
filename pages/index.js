customElements.define(
  "test-drive",
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = /*html*/ `
      <h1>test drive complete!</h1>
    `;
    }
  }
);

customElements.define(
  "page-content",
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = /*html*/ `
      <h1>This works!</h1>
      <a href="/about">About page</a>
      <test-drive></test-drive>
    `;
    }
  }
);
