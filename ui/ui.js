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

    pauseRunControls.addEventListener('runPressed', () => {
      this.dispatchEvent(new CustomEvent('runRequest'));
    });

    pauseRunControls.addEventListener('pausePressed', () => {
      this.dispatchEvent(new CustomEvent('pauseRequest'));
    });
  },

  deployOnPage() {
    document.body.append(this.element)
  },

  updateDateTime(dateTime) {
    dateTimeScreen.update(dateTime);
  },

  updateClockState(state) {
    pauseRunControls.toggleState(state);
  },
});
