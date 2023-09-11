export { eventHub };

import { clock } from './clock.js';

const eventHub = Object.assign(new EventTarget(), {
  init() {
    clock.announceTime();
  },

  assignListeners() {
    clock.addEventListener('change', e => {
      const { dateTime } = e.detail;
      const isoDateTime = dateTime.toISOString().replace('T', ' ').slice(0, 16)
      const detail = { dateTime: isoDateTime };
      const event = new CustomEvent('timeChange', { detail });

      this.dispatchEvent(event);
    });

    clock.addEventListener('stateChange', e => {
      const { state } = e.detail;
      const detail = { state };
      const event = new CustomEvent('clockStateChange', { detail });

      this.dispatchEvent(event);
    });
  },

  runClock() {
    clock.run();
  },

  stopClock() {
    clock.stop();
  }
});
