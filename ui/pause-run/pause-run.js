export { pauseRunControls };

const pauseRunControls = {
  render() {
    const section = document.createElement('section');

    section.classList.add('pause-run-state', 'paused');
    section.innerHTML = buildMarkup();

    this.element = section;
  },

  appendTo(parent) {
    parent.append(this.element);
  },
};

function buildMarkup() {
  return `
    <div class="paused">
      <button class="run">run</button>
      <span class="state">paused</span>
    </div>
    <div class="running">
      <button class="pause">pause</button>
      <span class="state">running</span>
    </div>
  `;
}
