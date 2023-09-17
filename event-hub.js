export { eventHub };

import { clock } from './clock.js';

const events = [];

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

  updateDateTime(dateTime) {
    const [year, month, day, hour, minute] = dateTime.split(/\D/);
    const date = new Date(Date.UTC(year, month - 1, day, hour, minute))
    
    clock.setDateTime(date);
  },

  triggerSplash() {
    const dateTime = clock.getDateTime();
    const isoDateTime = dateTime.toISOString().replace('T', ' ').slice(0, 16)
    const detail = { dateTime, isoDateTime };
    const event = new CustomEvent('splash', {detail});

    events.push(event);
    events.sort((a, b) => a.detail.dateTime - b.detail.dateTime);

    eventHub.dispatchEvent(event);
  },

  getEvents() {
    const dateTime = clock.getDateTime();

    return events.filter(e => e.detail.dateTime <= dateTime);
  },
});

/* 



*/
