export { splashButtonBlock };

const splashButtonBlock = Object.assign(new EventTarget(), {
  render() {
    const section = document.createElement('section');
    const button = document.createElement('button');

    section.classList.add('splash');
    button.classList.add('splash');
    button.textContent = 'splash';

    section.append(button);

    this.element = section;
    this.button = button;
  },

  assignListeners() {
    this.button.addEventListener('click', this.handlePress);
  },

  handlePress: () => {
    const event = new CustomEvent('splashPressed');
    splashButtonBlock.dispatchEvent(event);
  },

  appendTo(parent) {
    parent.append(this.element);
  },
});
