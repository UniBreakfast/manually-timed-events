export { clock };

const accuracyInterval = 99;
const multiplier = 75; // 1min per 800ms
let prevTime = 1580673720000; // 2020-02-02 20:02
let dateTime = new Date(prevTime);
let lastTimeStamp;
let prevMinute = 0;
let minute = 0;
let intervalId;

const clock = Object.assign(new EventTarget(), {
  run() {
    if (intervalId) return;

    intervalId = setInterval(this.updateTime, accuracyInterval);

    const detail = { state: 'running' };
    const event = new CustomEvent('stateChange', { detail });

    this.dispatchEvent(event);
    clock.updateTime();
  },

  stop() {
    if (!intervalId) return;

    clearInterval(intervalId);
    intervalId = null;

    const detail = { state: 'paused' };
    const event = new CustomEvent('stateChange', { detail });

    this.dispatchEvent(event);
    this.updateTime();
    lastTimeStamp = null;
  },

  updateTime() {
    const timeStamp = Date.now();
    const delta = timeStamp - (lastTimeStamp || timeStamp);
    const time = prevTime + delta * multiplier;

    dateTime = new Date(time);
    minute = dateTime.getMinutes();
    prevTime = time;
    lastTimeStamp = timeStamp;

    if (minute != prevMinute) clock.announceTime();
  },

  announceTime() {
    const detail = { dateTime };
    const event = new CustomEvent('timeChange', { detail });

    this.dispatchEvent(event);
    prevMinute = minute;
  },

  setDateTime(date) {
    prevTime = date.getTime();
    dateTime = date;
    lastTimeStamp = null;

    const detail = { dateTime };
    const event = new CustomEvent('timeChange', { detail });

    this.dispatchEvent(event);
  },

  getDateTime() {
    return dateTime;
  },
});


// 60000ms -> 800ms
// 1ms -> 800/60000 = 1/75 = 0.013333333333333334ms
