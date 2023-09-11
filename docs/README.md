### [События с ручной временной привязкой](https://github.com/UniBreakfast/manually-timed-events) &nbsp; &nbsp; [Manually&nbsp;Timed&nbsp;Events](https://github.com/UniBreakfast/manually-timed-events)

###### top

# [Документация](https://github.com/UniBreakfast/manually-timed-events/tree/main/docs) &nbsp; &nbsp; [Documentation](https://github.com/UniBreakfast/manually-timed-events/tree/main/docs)

| *Русский* | *English* |
|-:|:-|
| [🔝](#top) **[Точка входа/сборки `app.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/app.js)** [🔝](#top) | [🔝](#top) **[Entry/nexus point `app.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/app.js)** [🔝](#top) |
| Импортирует объекты `ui` и `eventHub` из файлов `ui.js` и `event-hub.js` соответственно. | Imports objects `ui` and `eventHub` from files `ui.js` and `event-hub.js` respectively. |
| Выполняет функцию `main()` при загрузке страницы/приложения. | Executes the `main()` function when the page/application is loaded. |
| Функция `main()` вызывает методы `render()` и `deployOnPage()` у объекта `ui`. | The `main()` function calls the `render()` and `deployOnPage()` methods of the `ui` object. |
| Ожидается, что метод `render()` создаст всю DOM-структуру приложения, а метод `deployOnPage()` разместит её на странице. | It is expected that the `render()` method will create the entire DOM structure of the application, and the `deployOnPage()` method will place it on the page. |
| После этого вызывается метод `init()` у объекта `eventHub`. | After that, the `init()` method of the `eventHub` object is called. |
| Ожидается, что метод `init()` подготовит объект `eventHub` к работе. | It is expected that the `init()` method will prepare the `eventHub` object for work. |
| [🔝](#top) **[Модуль интерфейса `ui.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/ui/ui.js)** [🔝](#top) | [🔝](#top) **[Graphical interface module `ui.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/ui/ui.js)** [🔝](#top) |
| Импортирует объекты `dateTimeScreen`, `pauseRunControls`, `setDateTimeControls`, `splashButtonBlock` и `eventListHolder` из соответствующих файлов в подпапках папки `ui`. | Imports objects `dateTimeScreen`, `pauseRunControls`, `setDateTimeControls`, `splashButtonBlock` and `eventListHolder` from the corresponding files in the subfolders of the `ui` folder. |
| Экспортирует объект `ui`, который содержит методы `render()`, `deployOnPage()`, `assignListeners()` и `updateDateTime()`. | Exports the `ui` object, which contains the `render()`, `deployOnPage()`, `assignListeners()` and `updateDateTime()` methods. |
| Метод `render()` создаёт контейнер приложения - `div` с `id="splash-event-app"`. В него добавляются все элементы, которые создают методы `render()` соответствующих модулей. Для этого используются их методы `appendTo()`. После этого созданный элемент `div` присваивается свойству `element` объекта `ui`. | The `render()` method creates the application container - `div` with `id="splash-event-app"`. All elements that the `render()` methods of the corresponding modules create are added to it. Their `appendTo()` methods are used for this. After that, the created `div` element is assigned to the `element` property of the `ui` object. |
| Метод `deployOnPage()` размещает контейнер приложения на странице. | The `deployOnPage()` method places the application container on the page. |
| Метод `assignListeners()` вызывает соответствующие методы `assignListeners()` у объектов `pauseRunControls`, `setDateTimeControls` и `splashButtonBlock`. | The `assignListeners()` method calls the corresponding `assignListeners()` methods of the `pauseRunControls`, `setDateTimeControls` and `splashButtonBlock` objects. |
| Метод `updateDateTime()` вызывает соответствующий метод `update()` у объекта `dateTimeScreen`, передавая ему строку `dateTime` в формате `"yyyy-mm-dd hh:mm"`. | The `updateDateTime()` method calls the corresponding `update()` method of the `dateTimeScreen` object, passing it a string `dateTime` in the format `"yyyy-mm-dd hh:mm"`. |
| [🔝](#top) **[Основной модуль логики/контроля `event-hub.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/event-hub.js)** [🔝](#top) | [🔝](#top) **[Main logic/control module `event-hub.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/event-hub.js)** [🔝](#top) |
| Импортирует объект `clock` из файла `clock.js`. | Imports the `clock` object from the `clock.js` file. |
| Экспортирует объект `eventHub`, который является экземпляром класса `EventTarget` и содержит методы `init()` для начала работы | Exports the `eventHub` object, which is an instance of the `EventTarget` class and contains the `init()` method to start work |
 | Метод `init()` запускает часы методом `clock.run()`. Он же генерирует событие `timeChange` сигнализирующее о наступлении очередной минуты. Об этом он сам узнаёт из события `tick` объекта `clock`. Полученный из него объект даты и времени преобразует в строку ISO и добавляет в объект события `timeChange` в свойство `detail`. После этого он запускает событие `timeChange`. | The `init()` method starts the clock with the `clock.run()` method. It also generates the `timeChange` event signaling the onset of the next minute. He learns about this from the `tick` event of the `clock` object. It converts the date and time object obtained from it into an ISO string and adds it to the `detail` property of the `timeChange` event object. After that, it starts the `timeChange` event. |
| [🔝](#top) **[Модуль часов/календаря `clock.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/clock.js)** [🔝](#top) | [🔝](#top) **[Clock/calendar module `clock.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/clock.js)** [🔝](#top) |
| Экспортирует объект `clock`, который является экземпляром класса `EventTarget` и после запуска методом `run()` генерирует событие `tick` каждые 800 миллисекунд. | Exports the `clock` object, which is an instance of the `EventTarget` class and after being launched by the `run()` method generates the `tick` event every 800 milliseconds. |
| Метод `run()` запускает таймер, который десять раз в секунду увеличивает свой собственный счётчик виртуального времени на количество миллисекунд, соответствующее прошедшему с предыдущего увеличения умноженному на 75. Что обеспечивает увеличение на одну минуту каждые 800 миллисекунд. При увеличении минут генерируется событие `tick`. | The `run()` method starts a timer that ten times a second increases its own counter of virtual time by the number of milliseconds corresponding to the time elapsed since the previous increase multiplied by 75. Which ensures an increase of one minute every 800 milliseconds. When the minutes increase, the `tick` event is generated. |
| [🔝](#top) **[Модуль вывода даты/времени `date-time-screen.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/ui/date-time-screen/date-time-screen.js)** [🔝](#top) | [🔝](#top) **[Date/time display module `date-time-screen.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/ui/date-time-screen/date-time-screen.js)** [🔝](#top) |
| Экспортирует объект `dateTimeScreen`, который содержит методы `render()`, `appendTo()` и `update()`. Последний обеспечивает обновление отображаемого времени. | Exports the `dateTimeScreen` object, which contains the `render()`, `appendTo()` and `update()` methods. The last one provides updating of the displayed time. |
| Метод `render()` создаёт элементы `section`, `time`, `h3` и `h2` с классами `current-date-time`, `current-date` и `current-time` соответственно. В элемент `h3` добавляются элементы `span` с классами `year`, `month` и `day`. В элемент `h2` добавляются элементы `span` с классами `hours` и `minutes`. Все созданные элементы добавляются в `dateTimeScreen.element`. | The `render()` method creates the `section`, `time`, `h3` and `h2` elements with the `current-date-time`, `current-date` and `current-time` classes, respectively. The `h3` element is added with the `year`, `month` and `day` class elements. The `h2` element is added with the `hours` and `minutes` class elements. All created elements are added to `dateTimeScreen.element`. |
| Метод `appendTo()` добавляет `dateTimeScreen.element` в переданный ему элемент `parent`. | The `appendTo()` method adds `dateTimeScreen.element` to the element `parent` passed to it. |
| Метод `update()` принимает строку `dateTime` в формате `"yyyy-mm-dd hh:mm"`. Из неё извлекаются год, месяц, день, часы и минуты. Извлечённые значения вписываются в соответствующие элементы `span` и `time`. | The `update()` method takes a string `dateTime` in the format `"yyyy-mm-dd hh:mm"`. From it, the year, month, day, hours and minutes are extracted. The extracted values are entered into the corresponding `span` and `time` elements. |

<!-- 
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

  updateDateTime(dateTime) {
    dateTimeScreen.update(dateTime);
  }
};




 -->
