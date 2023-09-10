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
| Экспортирует объект `ui`, который содержит методы `render()` и `deployOnPage()`. Метод `render()` создаёт всю DOM-структуру приложения, а метод `deployOnPage()` размещает её на странице. | Exports the `ui` object, which contains the `render()` and `deployOnPage()` methods. The `render()` method creates the entire DOM structure of the application, and the `deployOnPage()` method places it on the page. |
| Метод `render()` создаёт контейнер приложения - `div` с `id="splash-event-app"`. В него добавляются все элементы, которые создают методы `render()` соответствующих модулей. Для этого используются их методы `appendTo()`. После этого созданный элемент `div` присваивается свойству `element` объекта `ui`. | The `render()` method creates the application container - `div` with `id="splash-event-app"`. All elements that the `render()` methods of the corresponding modules create are added to it. Their `appendTo()` methods are used for this. After that, the created `div` element is assigned to the `element` property of the `ui` object. |
| Метод `deployOnPage()` размещает контейнер приложения на странице. | The `deployOnPage()` method places the application container on the page. |
| [🔝](#top) **[Модуль часов/календаря `clock.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/clock.js)** [🔝](#top) | [🔝](#top) **[Clock/calendar module `clock.js`](https://github.com/UniBreakfast/manually-timed-events/blob/main/clock.js)** [🔝](#top) |
| Экспортирует объект `clock`, который является экземпляром класса `EventTarget` и после запуска методом `run()` генерирует событие `tick` каждые 800 миллисекунд. | Exports the `clock` object, which is an instance of the `EventTarget` class and after being launched by the `run()` method generates the `tick` event every 800 milliseconds. |
| Метод `run()` запускает таймер, который десять раз в секунду увеличивает свой собственный счётчик виртуального времени на количество миллисекунд, соответствующее прошедшему с предыдущего увеличения умноженному на 75. Что обеспечивает увеличение на одну минуту каждые 800 миллисекунд. При увеличении минут генерируется событие `tick`. | The `run()` method starts a timer that ten times a second increases its own counter of virtual time by the number of milliseconds corresponding to the time elapsed since the previous increase multiplied by 75. Which ensures an increase of one minute every 800 milliseconds. When the minutes increase, the `tick` event is generated. |

<!-- export { clock };

const accuracyInterval = 99;
const multiplier = 75; // 1min per 800ms
let prevTime = 1580666520000; // 2020-02-02 20:02
let lastTimeStamp = Date.now();
let prevMinute = 0;

const clock = Object.assign(new EventTarget(), {
  run() {
    setInterval(() => {
      const timeStamp = Date.now();
      const delta = timeStamp - lastTimeStamp;
      const time = prevTime + delta * multiplier;
      const dateTime = new Date(time);
      const minute = dateTime.getMinutes();

      if (minute != prevMinute) {
        const detail = { dateTime };
        const event = new CustomEvent('tick', { detail });

        this.dispatchEvent(event);

        prevMinute = minute;
      }

      prevTime = time;
      lastTimeStamp = timeStamp;
    }, accuracyInterval);
  },
});


// 60000ms -> 800ms
// 1ms -> 800/60000 = 1/75 = 0.013333333333333334ms
 -->
