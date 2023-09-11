export { dateTimeScreen };

const dateTimeScreen = {
  render() {
    const section = document.createElement('section');
    const time = document.createElement('time');
    const date = document.createElement('h3');
    const timeOfDay = document.createElement('h2');
    const year = document.createElement('span');
    const month = document.createElement('span');
    const day = document.createElement('span');
    const hours = document.createElement('span');
    const minutes = document.createElement('span');

    section.classList.add('current-date-time');
    date.classList.add('current-date');
    timeOfDay.classList.add('current-time');
    year.classList.add('year');
    month.classList.add('month');
    day.classList.add('day');
    hours.classList.add('hours');
    minutes.classList.add('minutes');

    date.append(year, '-', month, '-', day);
    timeOfDay.append(hours, ':', minutes);
    time.append(date, timeOfDay);
    section.append(time);

    this.element = section;
    this.timeElement = time;
    this.yearSpan = year;
    this.monthSpan = month;
    this.daySpan = day;
    this.hoursSpan = hours;
    this.minutesSpan = minutes;
  },

  appendTo(parent) {
    parent.append(this.element);
  },

  update(dateTime) { // "yyyy-mm-dd hh:mm"
    const [year, month, day, hours, minutes] = dateTime.split(/\D/);

    this.timeElement.dateTime = dateTime;

    this.yearSpan.textContent = year;
    this.monthSpan.textContent = month;
    this.daySpan.textContent = day;
    this.hoursSpan.textContent = hours;
    this.minutesSpan.textContent = minutes;
  }
};
