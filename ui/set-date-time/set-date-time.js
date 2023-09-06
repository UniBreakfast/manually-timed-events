export { setDateTimeControls };

const setDateTimeControls = {
  render() {
    const section = document.createElement('section');

    section.classList.add('set-date-time');
    section.innerHTML = buildMarkup();

    this.element = section;
  },

  appendTo(parent) {
    parent.append(this.element);
  },
};

function buildMarkup() {
  return `
    <button class="set-date-time">set date/time</button>

    <div class="glass" hidden>
      <div class="modal">
        <h3>set date/time</h3>
        <form action="javascript:" class="set-date-time">
          <div>
            <label>
              <span>date:</span>
              <input type="date" name="date">
            </label>
          </div>

          <div>
            <label>
              <span>time:</span>
              <input type="time" name="time">
            </label>
          </div>

          <div>
            <button type="submit">set</button>
            <button type="reset">cancel</button>
          </div>
        </form>
      </div>
    </div>
  `;
}
