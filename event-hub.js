export { eventHub };

import { clock } from './clock.js';

const eventHub = Object.assign(new EventTarget(), {
  init() {
    clock.run();

    clock.addEventListener('tick', e => {
      const { dateTime } = e.detail;
      const isoDateTime = dateTime.toISOString().replace('T', ' ').slice(0, 16)
      const detail = { dateTime: isoDateTime };
      const event = new CustomEvent('timeChange', { detail });

      this.dispatchEvent(event);
    });
  },
});
