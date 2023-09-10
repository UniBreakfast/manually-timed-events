export { eventHub };

import { clock } from './clock.js';

const eventHub = Object.assign(new EventTarget(), {
  init() {
    clock.run();

    clock.addEventListener('tick', e => {
      const { dateTime } = e.detail;
      const detail = { dateTime };
      const event = new CustomEvent('timeChange', { detail });

      this.dispatchEvent(event);
    });
  },
});
