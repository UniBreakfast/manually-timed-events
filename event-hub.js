export { eventHub };

import { clock } from './clock.js';

const eventHub = Object.assign(new EventTarget(), {
  init() {
    clock.announceTime();
  },

  assignListeners() {
    clock.addEventListener('timeChange', this.handleTimeChange);

    clock.addEventListener('stateChange', this.handleStateChange);
  },

  runClock() {
    clock.run();
  },

  stopClock() {
    clock.stop();
  },

  handleTimeChange: e => {
    const { dateTime } = e.detail;
    const isoDateTime = dateTime.toISOString().replace('T', ' ').slice(0, 16)
    const detail = { dateTime: isoDateTime };
    const event = new CustomEvent('timeChange', { detail });

    eventHub.dispatchEvent(event);
  },

  handleStateChange: e => {
    const { state } = e.detail;
    const detail = { state };
    const event = new CustomEvent('clockStateChange', { detail });

    eventHub.dispatchEvent(event);
  },
});

/* 



*/
