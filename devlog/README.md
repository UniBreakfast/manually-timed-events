### [События с ручной временной привязкой](https://github.com/UniBreakfast/manually-timed-events) &nbsp; &nbsp; [Manually&nbsp;Timed&nbsp;Events](https://github.com/UniBreakfast/manually-timed-events)

###### top

# [Дневник разработки](https://github.com/UniBreakfast/manually-timed-events/tree/main/devlog) &nbsp; &nbsp; [Devlog](https://github.com/UniBreakfast/manually-timed-events/tree/main/devlog)

| *Русский* | *English* |
|-:|:-|
| [🔝](#top) **2 сентября 2023** [🔝](#top) | [🔝](#top) **2023, September 2** [🔝](#top) |
| Создан файл `README.md` | Make `README.md` file |
| Созданы части приложения: объект `UI`, объект `EventHub` и функция `main()` в `app.js` | Make app parts: `UI` object, `EventHub` object, and App `main()` function |
| [🔝](#top) **3 сентября** [🔝](#top) | [🔝](#top) **September 3** [🔝](#top) |
| Написана первая история пользователя | Write the first user story |
| Созданы задачи на основе первой истории пользователя | Create tasks based on the first user story |
| [🔝](#top) **4 сентября** [🔝](#top) | [🔝](#top) **September 4** [🔝](#top) |
| Составлен список частей интерфейса, которые нужно сделать | List UI parts to make |
| Добавлены задачи на создание перечисленных частей интерфейса | Add tasks for making of listed UI parts |
| Сделана вёрстка отображения текущей даты/времени | Current date/time display layout |
| Сделана вёрстка кнопок паузы/запуска, индикатора состояния | Buttons to pause/run, state indicator layout |
| Сделана вёрстка кнопки и модальной формы для установки конкретной даты/времени | Button and modal form to set specific date/time layout |
| Сделана вёрстка кнопки "Splash" | Splash button layout |
| Сделана вёрстка списка событий | Event list layout |
| Собраны все 5 частей вёрстки вместе и показаны с помощью `ui.render()` | Bring all 5 layout parts together and show them with `ui.render()` |
| Заданы задачи на создание документации для файлов вёрстки | Set tasks to make documentation for layout part html files |
| [🔝](#top) **5 сентября** [🔝](#top) | [🔝](#top) **September 5** [🔝](#top) |
| Начат devlog-файл с историей разработки | Make devlog file with the development history |
| Сделана документация для `app.js` | Make documentation for `app.js` |
| Сделана документация для `ui.js` | Make documentation for `ui.js` |
| [🔝](#top) **6 сентября** [🔝](#top) | [🔝](#top) **September 6** [🔝](#top) |
| Заготовлен объект `dateTimeScreen` | Prepare `dateTimeScreen` component object |
| Заготовлен объект `pauseRunControls` | Prepare `pauseRunControls` component object |
| Заготовлен объект `setDateTimeControls` | Prepare `setDateTimeControls` component object |
| Заготовлен объект `splashButtonBlock` | Prepare `splashButtonBlock` component object |
| Заготовлен объект `eventListHolder` | Prepare `eventListHolder` component object |
| Сделано визуальное переключение между состояниями паузы/работы | Implement visual toggle between paused/running states |
| Сделано открытие/закрытие модальной формы установки конкретной даты/времени | Implement open/close modal set date/time |
| [🔝](#top) **7 сентября** [🔝](#top) | [🔝](#top) **September 7** [🔝](#top) |
| Собраны вместе все компоненты интерфейса в одном файле `assembled-parts.html` (+css) | Assembly all UI components together in one file `assembled-parts.html` (+css) |
| [🔝](#top) **9 сентября** [🔝](#top) | [🔝](#top) **September 9** [🔝](#top) |
| Расположены компоненты интерфейса для мобильного портретного, ландшафтного, планшетного и десктопного режимов | Arrange UI components for mobile portrait, landscape, tablet, and desktop modes |
| [🔝](#top) **10 сентября** [🔝](#top) | [🔝](#top) **September 10** [🔝](#top) |
| Добавлен объект `clock` с поминутным событием `tick` каждые 800мс | Add `clock` object with `tick` event every 800ms for every minute |
| Добавлены методы для отрисовки текущего времени и даты | Add methods to render current time and date |
| Добавлена документация для модулей `event-hub.js` и `clock.js` | Add documentation for `event-hub.js` and `clock.js` modules |
| [🔝](#top) **11 сентября** [🔝](#top) | [🔝](#top) **September 11** [🔝](#top) |
| Добавлена документация для модуля `date-time-screen.js` и для адаптивной/респонсивной сборки в целом | Add documentation for `date-time-screen.js` module and for adaptive/responsive build in general |
| Реализованы запуск/остановка часов с помощью кнопок запуска/паузы | Implement clock start/stop with pause/run buttons |
| [🔝](#top) **12 сентября** [🔝](#top) | [🔝](#top) **September 12** [🔝](#top) |
| Обновлена документация к соответствующим модулям | Update documentation for corresponding modules |
| [🔝](#top) **13 сентября** [🔝](#top) | [🔝](#top) **September 13** [🔝](#top) |
| Добавлен реестр событий | Add events registry |
| [🔝](#top) **16 сентября** [🔝](#top) | [🔝](#top) **September 16** [🔝](#top) |
| В форму настройки даты/времени добавлены текущие значения | Add current values to date/time settings form |
| Реализована установка даты/времени с помощью формы | Implement date/time settings form |
| [🔝](#top) **17 сентября** [🔝](#top) | [🔝](#top) **September 17** [🔝](#top) |
| Реализовано создание событий "Splash" и отображение списка таких событий до текущих даты/времени | Implement "Splash" events creation and display of such events list up to current date/time |
| [🔝](#top) **18 сентября** [🔝](#top) | [🔝](#top) **September 18** [🔝](#top) |
| Свёрстан компонент модального окна статистики | Modal statistics window component layout |

<!-- 


-->
