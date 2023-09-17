import { ui } from './ui/ui.js';
import { eventHub } from './event-hub.js';

main();

function main() {
  ui.render();
  ui.deployOnPage();
  ui.assignListeners();

  eventHub.assignListeners();

  ui.addEventListener('runRequest', eventHub.runClock);
  ui.addEventListener('pauseRequest', eventHub.stopClock);
  ui.addEventListener('updateDateTimeRequest', e => {
    const { dateTime } = e.detail;

    eventHub.updateDateTime(dateTime);
  });
  ui.addEventListener('splashTriggered', eventHub.triggerSplash);

  eventHub.addEventListener('clockStateChange', e => {
    const { state } = e.detail;

    ui.updateClockState(state);
  });

  eventHub.addEventListener('timeChange', e => {
    const { dateTime } = e.detail;
    const events = eventHub.getEvents();

    ui.updateDateTime(dateTime);
    ui.updateEvents(events);
  });

  eventHub.addEventListener('splash', e => {
    const events = eventHub.getEvents();

    ui.updateEvents(events);
  });

  eventHub.init();
}

/* 



*/
