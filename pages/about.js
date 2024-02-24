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
