export { ui };

import { dateTimeScreen } from './date-time-screen/date-time-screen.js';
import { pauseRunControls } from './pause-run/pause-run.js';
import { setDateTimeControls } from './set-date-time/set-date-time.js';
import { splashButtonBlock } from './splash-button/splash-button.js';
import { eventListHolder } from './event-list/event-list.js';


const ui = {
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
  },

  deployOnPage() {
    document.body.append(this.element)
  },

};

/* 
ui.js
Импортирует объекты dateTimeScreen, pauseRunControls, setDateTimeControls, splashButtonBlock и eventListHolder из соответствующих файлов в подпапках папки ui.
Экспортирует объект ui, который содержит методы render() и deployOnPage(). Метод render() создаёт всю DOM-структуру приложения, а метод deployOnPage() размещает её на странице.
Метод render() создаёт контейнер приложения - div с id="splash-event-app". В него добавляются все элементы, которые создают методы render() соответствующих модулей. Для этого используются их методы appendTo(). После этого созданный элемент div присваивается свойству element объекта ui.
Метод deployOnPage() размещает контейнер приложения на странице.
*/
