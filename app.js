import { ui } from './ui.js';
import { eventHub } from './event-hub.js';

main();

function main() {
  ui.deployOnPage();
  eventHub.init();
}
