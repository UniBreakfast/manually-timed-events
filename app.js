import { ui } from './ui/ui.js';
import { eventHub } from './event-hub.js';

main();

function main() {
  ui.render();
  ui.deployOnPage();
  ui.assignListeners();
  eventHub.init();
}

/* 
app.js
Импортирует объекты ui и eventHub из файлов ui.js и event-hub.js соответственно.
Выполняет функцию main() при загрузке страницы/приложения. Функция main() вызывает методы render() и deployOnPage() у объекта ui. Ожидается, что метод render() создаст всю DOM-структуру приложения, а метод deployOnPage() разместит её на странице. После этого вызывается метод init() у объекта eventHub. Ожидается, что метод init() подготовит объект eventHub к работе.
*/
