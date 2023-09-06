export { dateTimeScreen };

const dateTimeScreen = {
  render() {
    const section = document.createElement('section');

    section.classList.add('current-date-time');
    section.innerHTML = buildMarkup();

    this.element = section;
  },

  appendTo(parent) {
    parent.append(this.element);
  },
};

function buildMarkup() {
  return `
    <time datetime="2020-02-02 20:02">
      <h3 class="current-date">
        <span class="year">2020</span>
        -
        <span class="month">02</span>
        -
        <span class="day">02</span>
      </h3>
      <h2 class="current-time">
        <span class="hours">20</span>
        :
        <span class="minutes">02</span>
      </h2>
    </time>
  `;
}
