export { eventListHolder };

const eventListHolder = {
  render() {
    const section = document.createElement('section');
    const ul = document.createElement('ul');

    section.classList.add('event-list');
    ul.classList.add('event-list');
    section.append(ul);

    this.element = section;
    this.list = ul;
  },

  update(events) {
    const items = events.map(event => {
      const li = document.createElement('li');
      const time = document.createElement('time');

      li.classList.add('event');
      time.setAttribute('datetime', event.detail.isoDateTime);
      time.textContent = event.detail.isoDateTime;

      li.append('splash at ', time);

      return li;
    });
    
    this.list.replaceChildren(...items);
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
