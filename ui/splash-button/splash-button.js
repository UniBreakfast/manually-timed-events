export { splashButtonBlock };

const splashButtonBlock = {
  render() {
    const section = document.createElement('section');

    section.classList.add('splash');
    section.innerHTML = buildMarkup();

    this.element = section;
  },

  appendTo(parent) {
    parent.append(this.element);
  },
};

function buildMarkup() {
  return `
    <button class="splash">splash</button>
  `;
}
