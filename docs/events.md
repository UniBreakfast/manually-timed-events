### [События с ручной временной привязкой](https://github.com/UniBreakfast/manually-timed-events) &nbsp; &nbsp; [Manually&nbsp;Timed&nbsp;Events](https://github.com/UniBreakfast/manually-timed-events)

###### top

# [Реестр событий](https://github.com/UniBreakfast/manually-timed-events/tree/main/docs/events.md) &nbsp; &nbsp; [Events&nbsp;Registry](https://github.com/UniBreakfast/manually-timed-events/tree/main/docs/events.md)

---
**event emitter**: &nbsp; `clock` object<br>
**type**: &nbsp; `timeChange`, custom event<br>
**cause**: &nbsp; current minute changed<br>
**detail**: &nbsp; `Date` instance with current time<br>
**handler**: &nbsp; `eventHub.handleTimeChange(e)`<br>
**assigned in**: &nbsp; `eventHub.assignListeners()`<br>
**consequence**: &nbsp; `eventHub` emits own `clockTimeChange` event

---
**event emitter**: &nbsp; `clock` object<br>
**type**: &nbsp; `stateChange`, custom event<br>
**cause**: &nbsp; clock state changed<br>
**detail**: &nbsp; `state` string (`running` or `paused`)<br>
**handler**: &nbsp; `eventHub.handleStateChange(e)`<br>
**assigned in**: &nbsp; `eventHub.assignListeners()`<br>
**consequence**: &nbsp; `eventHub` emits own `clockStateChange` event

[🔝](#top)
---
**event emitter**: &nbsp; `eventHub` object<br>
**type**: &nbsp; `clockStateChange`, custom event<br>
**cause**: &nbsp; `stateChange` event from `clock` object<br>
**detail**: &nbsp; `state` string (`running` or `paused`)<br>
**handler**: &nbsp; `ui.updateClockState(state)`<br>
**assigned in**: &nbsp; `main()`<br>
**consequence**: &nbsp; `pauseRunControls.toggleState(state)` is called

---
**event emitter**: &nbsp; `eventHub` object<br>
**type**: &nbsp; `clockTimeChange`, custom event<br>
**cause**: &nbsp; `timeChange` event from `clock` object<br>
**detail**: &nbsp; `dateTime` string (`yyyy-mm-dd hh:mm`)<br>
**handler**: &nbsp; `ui.updateDateTime(dateTime)`<br>
**assigned in**: &nbsp; `main()`<br>
**consequence**: &nbsp; `dateTimeScreen.update(dateTime)` is called

[🔝](#top)
---
**event emitter**: &nbsp; `pauseRunControls.runBtn`<br>
**type**: &nbsp; `click`, DOM event<br>
**cause**: &nbsp; user clicked `run` button<br>
**handler**: &nbsp; `pauseRunControls.handleRunClick()`<br>
**assigned in**: &nbsp; `pauseRunControls.assignListeners()`<br>
**consequence**: &nbsp; `pauseRunControls` emits own `runPressed` event

---
**event emitter**: &nbsp; `pauseRunControls.pauseBtn`<br>
**type**: &nbsp; `click`, DOM event<br>
**cause**: &nbsp; user clicked `pause` button<br>
**handler**: &nbsp; `pauseRunControls.handlePauseClick()`<br>
**assigned in**: &nbsp; `pauseRunControls.assignListeners()`<br>
**consequence**: &nbsp; `pauseRunControls` emits own `pausePressed` event

[🔝](#top)
---
**event emitter**: &nbsp; `pauseRunControls` object<br>
**type**: &nbsp; `runPressed`, custom event<br>
**cause**: &nbsp; `click` event from `pauseRunControls.runBtn`<br>
**handler**: &nbsp; `ui.handleRun()`<br>
**assigned in**: &nbsp; `ui.assignListeners()`<br>
**consequence**: &nbsp; `ui` emits own `runRequest` event

---
**event emitter**: &nbsp; `pauseRunControls` object<br>
**type**: &nbsp; `pausePressed`, custom event<br>
**cause**: &nbsp; `click` event from `pauseRunControls.pauseBtn`<br>
**handler**: &nbsp; `ui.handlePause()`<br>
**assigned in**: &nbsp; `ui.assignListeners()`<br>
**consequence**: &nbsp; `ui` emits own `pauseRequest` event

[🔝](#top)
---
**event emitter**: &nbsp; `ui` object<br>
**type**: &nbsp; `runRequest`, custom event<br>
**cause**: &nbsp; `runPressed` event from `pauseRunControls` object<br>
**handler**: &nbsp; `eventHub.runClock()`<br>
**assigned in**: &nbsp; `main()`<br>
**consequence**: &nbsp; `clock.run()` is called

---
**event emitter**: &nbsp; `ui` object<br>
**type**: &nbsp; `pauseRequest`, custom event<br>
**cause**: &nbsp; `pausePressed` event from `pauseRunControls` object<br>
**handler**: &nbsp; `eventHub.stopClock()`<br>
**assigned in**: &nbsp; `main()`<br>
**consequence**: &nbsp; `clock.stop()` is called

[🔝](#top)
---

**event emitter**: &nbsp; `setDateTimeControls` object<br>
**type**: &nbsp; `open`, custom event<br>
**cause**: &nbsp; `toggleModal()` method called<br>
**handler**: &nbsp; `ui.handleFormOpen()` method<br>
**assigned in**: &nbsp; `ui.assignListeners()` method<br>
**consequence**: &nbsp; `setDateTimeControls.update()` method is called

[🔝](#top)
---
