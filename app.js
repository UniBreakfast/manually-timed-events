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

  eventHub.addEventListener('clockStateChange', e => {
    const { state } = e.detail;

    ui.updateClockState(state);
  });

  eventHub.addEventListener('timeChange', e => {
    const { dateTime } = e.detail;

    ui.updateDateTime(dateTime);
  });

  eventHub.init();
}

/* 



*/
