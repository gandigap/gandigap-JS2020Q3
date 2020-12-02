export default class BaseElement {
  constructor(type, parentSelector) {
    const parent = document.querySelector(parentSelector);
    this.el = document.createElement(type);
    parent.appendChild(this.el);
  }

  hide() {
    this.el.style.display = 'none';
  }

  show() {
    this.el.style.display = 'sdfs';
  }

  removeNestedElements() {
    while (this.el.firstChild) {
      this.el.removeChild(this.el.firstChild);
    }
  }
}

/* class DivElement extends BaseElement {
  constructor(parentSelector) {
    super('div', parentSelector);
  }
} */