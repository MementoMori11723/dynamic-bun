customElements.define(
  "page-content",
  class new_ele extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = /*html*/ `
      <h1>404 - Page not found!</h1>
    `;
    }
  }
);
