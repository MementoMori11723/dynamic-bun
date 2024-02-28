customElements.define(
  "page-content",
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = /*html*/ `
      <h1>About page</h1>
      <a href="/">Home page</a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sit porro sequi vitae eaque maiores doloribus, 
        ab fugiat alias ex ipsam facilis deserunt velit nam obcaecati, 
        repudiandae dolor voluptatibus? Sit, nesciunt.
      </p>
    `;
    }
  }
);
