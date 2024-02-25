customElements.define(
  "page-content",
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = /*html*/ `
      <h1>About page</h1>
    `;
    }
  }
);
