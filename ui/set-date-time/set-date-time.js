export { setDateTimeControls };

const setDateTimeControls = Object.assign(new EventTarget(), {
  render() {
    const section = document.createElement('section');
    const openModalBtn = document.createElement('button');
    const glass = document.createElement('div');
    const modal = document.createElement('div');
    const heading = document.createElement('h3');
    const form = document.createElement('form');
    const btnContainer = document.createElement('div');
    const setBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    section.classList.add('set-date-time');
    openModalBtn.classList.add('set-date-time');
    glass.classList.add('glass');
    modal.classList.add('modal');
    form.classList.add('set-date-time');

    glass.hidden = true;
    form.action = 'javascript:';

    setBtn.type = 'submit';
    cancelBtn.type = 'reset';

    openModalBtn.textContent = 'set date/time';
    heading.textContent = 'set date/time';
    setBtn.textContent = 'set';
    cancelBtn.textContent = 'cancel';

    form.innerHTML = buildMarkup();

    form.appendChild(btnContainer).append(setBtn, ' ', cancelBtn);
    glass.appendChild(modal).append(heading, form);
    section.append(openModalBtn, glass);

    this.element = section;
    this.openModalBtn = openModalBtn;
    this.glass = glass;
    this.form = form;
    this.setBtn = setBtn;
    this.cancelBtn = cancelBtn;
  },

  toggleModal() {
    this.glass.hidden = !this.glass.hidden;

    if (!this.glass.hidden) {
      this.form.date.focus();

      const event = new CustomEvent('open');
      this.dispatchEvent(event);
    }
  },

  assignListeners() {
    this.openModalBtn.onclick = () => this.toggleModal();
    this.setBtn.onclick = () => this.toggleModal();
    this.cancelBtn.onclick = () => this.toggleModal();
  },

  update(dateTime) {
    const [date, time] = dateTime.split(' ');

    this.form.date.value = date;
    this.form.time.value = time;
  },

  appendTo(parent) {
    parent.append(this.element);
  },
});

function buildMarkup() {
  return `
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
  `;
}
