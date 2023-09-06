export { eventListHolder };

const eventListHolder = {
  render() {
    const section = document.createElement('section');

    section.classList.add('event-list');
    section.innerHTML = buildMarkup();

    this.element = section;
  },

  appendTo(parent) {
    parent.append(this.element);
  },
};

function buildMarkup() {
  return `
    <ul class="event-list">
      <li class="event">
        splash at 
        <time datetime="2020-02-02 20:02">2020-02-02 20:02</time>
      </li>
      <li class="event">
        splash at
        <time datetime="2020-02-02 20:03">2020-02-02 20:03</time> 
      </li>
      <li class="event">
        splash at 
        <time datetime="2020-02-02 20:04">2020-02-02 20:04</time>
      </li>
    </ul>
  `;
}
