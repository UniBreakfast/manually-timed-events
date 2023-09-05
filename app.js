import { ui } from './ui/ui.js';
import { eventHub } from './event-hub.js';

main();

function main() {
  ui.render();
  ui.deployOnPage();
  eventHub.init();
}
