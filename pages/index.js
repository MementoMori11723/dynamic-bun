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
