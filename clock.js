export { clock };

const accuracyInterval = 99;
const multiplier = 75; // 1min per 800ms
let prevTime = 1580666520000; // 2020-02-02 20:02
let lastTimeStamp = Date.now();
let prevMinute = 0;

const clock = Object.assign(new EventTarget(), {
  run() {
    setInterval(() => {
      const timeStamp = Date.now();
      const delta = timeStamp - lastTimeStamp;
      const time = prevTime + delta * multiplier;
      const dateTime = new Date(time);
      const minute = dateTime.getMinutes();

      if (minute != prevMinute) {
        const detail = { dateTime };
        const event = new CustomEvent('tick', { detail });

        this.dispatchEvent(event);

        prevMinute = minute;
      }

      prevTime = time;
      lastTimeStamp = timeStamp;
    }, accuracyInterval);
  },
});


// 60000ms -> 800ms
// 1ms -> 800/60000 = 1/75 = 0.013333333333333334ms
