### [События с ручной временной привязкой](https://github.com/UniBreakfast/manually-timed-events) &nbsp; &nbsp; [Manually&nbsp;Timed&nbsp;Events](https://github.com/UniBreakfast/manually-timed-events)

# [Документация](https://github.com/UniBreakfast/manually-timed-events/tree/main/docs) &nbsp; &nbsp; [Documentation](http://unibreakfast.github.io/manually-timed-events/tree/main/docs)

| *Русский* | *English* |
|-:|:-|
| **Точка входа `app.js`** | **Entry point `app.js`** |
| Импортирует объекты `ui` и `eventHub` из файлов `ui.js` и `event-hub.js` соответственно. | Imports objects `ui` and `eventHub` from files `ui.js` and `event-hub.js` respectively. |
| Выполняет функцию `main()` при загрузке страницы/приложения. | Executes the `main()` function when the page/application is loaded. |
| Функция `main()` вызывает методы `render()` и `deployOnPage()` у объекта `ui`. | The `main()` function calls the `render()` and `deployOnPage()` methods of the `ui` object. |
| Ожидается, что метод `render()` создаст всю DOM-структуру приложения, а метод `deployOnPage()` разместит её на странице. | It is expected that the `render()` method will create the entire DOM structure of the application, and the `deployOnPage()` method will place it on the page. |
| После этого вызывается метод `init()` у объекта `eventHub`. | After that, the `init()` method of the `eventHub` object is called. |
| Ожидается, что метод `init()` подготовит объект `eventHub` к работе. | It is expected that the `init()` method will prepare the `eventHub` object for work. |
| **Модуль `ui.js`** | **Module `ui.js`** |
| Импортирует объекты `dateTimeScreen`, `pauseRunControls`, `setDateTimeControls`, `splashButtonBlock` и `eventListHolder` из соответствующих файлов в подпапках папки `ui`. | Imports objects `dateTimeScreen`, `pauseRunControls`, `setDateTimeControls`, `splashButtonBlock` and `eventListHolder` from the corresponding files in the subfolders of the `ui` folder. |
| Экспортирует объект `ui`, который содержит методы `render()` и `deployOnPage()`. Метод `render()` создаёт всю DOM-структуру приложения, а метод `deployOnPage()` размещает её на странице. | Exports the `ui` object, which contains the `render()` and `deployOnPage()` methods. The `render()` method creates the entire DOM structure of the application, and the `deployOnPage()` method places it on the page. |
| Метод `render()` создаёт контейнер приложения - `div` с `id="splash-event-app"`. В него добавляются все элементы, которые создают методы `render()` соответствующих модулей. Для этого используются их методы `appendTo()`. После этого созданный элемент `div` присваивается свойству `element` объекта `ui`. | The `render()` method creates the application container - `div` with `id="splash-event-app"`. All elements that the `render()` methods of the corresponding modules create are added to it. Their `appendTo()` methods are used for this. After that, the created `div` element is assigned to the `element` property of the `ui` object. |
| Метод `deployOnPage()` размещает контейнер приложения на странице. | The `deployOnPage()` method places the application container on the page. |
