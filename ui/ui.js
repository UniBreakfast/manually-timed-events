export { ui };

import { dateTimeScreen } from './date-time-screen/date-time-screen.js';
import { pauseRunControls } from './pause-run/pause-run.js';
import { setDateTimeControls } from './set-date-time/set-date-time.js';
import { splashButtonBlock } from './splash-button/splash-button.js';
import { eventListHolder } from './event-list/event-list.js';


const ui = Object.assign(new EventTarget(), {
  render() {
    const appContent = document.createElement('div');

    appContent.id = 'splash-event-app';

    dateTimeScreen.render();
    pauseRunControls.render();
    setDateTimeControls.render();
    splashButtonBlock.render();
    eventListHolder.render();

    dateTimeScreen.appendTo(appContent);
    pauseRunControls.appendTo(appContent);
    setDateTimeControls.appendTo(appContent);
    splashButtonBlock.appendTo(appContent);
    eventListHolder.appendTo(appContent);

    this.element = appContent;
  },

  assignListeners() {
    pauseRunControls.assignListeners();
    setDateTimeControls.assignListeners();
    splashButtonBlock.assignListeners();

    pauseRunControls.addEventListener('runPressed', this.handleRun);

    pauseRunControls.addEventListener('pausePressed', this.handlePause);

    setDateTimeControls.addEventListener('open', this.handleFormOpen);

    setDateTimeControls.addEventListener('newDateTime', this.handleNewDateTime);

    splashButtonBlock.addEventListener('splashPressed', this.handleSplashPress);
  },

  deployOnPage() {
    document.body.append(this.element);
  },

  updateDateTime(dateTime) {
    ui.dateTime = dateTime;
    dateTimeScreen.update(dateTime);
  },

  updateClockState(state) {
    pauseRunControls.toggleState(state);
  },

  updateEvents(events) {
    eventListHolder.update(events);
  },

  handleRun: () => {
    const event = new CustomEvent('runRequest');
    ui.dispatchEvent(event);
  },

  handlePause: () => {
    const event = new CustomEvent('pauseRequest');
    ui.dispatchEvent(event);
  },

  handleFormOpen: () => {
    setDateTimeControls.update(ui.dateTime);
  },

  handleNewDateTime: e => {
    const { dateTime } = e.detail;
    const detail = { dateTime };
    const event = new CustomEvent('updateDateTimeRequest', {detail});

    ui.dispatchEvent(event);
  },

  handleSplashPress: () => {
    const event = new CustomEvent('splashTriggered');
    ui.dispatchEvent(event);
  },
});

/* 




*/
