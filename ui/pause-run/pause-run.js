export { pauseRunControls };

const pauseRunControls = Object.assign(new EventTarget(), {
  render() {
    const section = document.createElement('section');
    const pausedBlock = document.createElement('div');
    const runningBlock = document.createElement('div');
    const runBtn = document.createElement('button');
    const pauseBtn = document.createElement('button');
    const pausedSpan = document.createElement('span');
    const runningSpan = document.createElement('span');

    section.classList.add('pause-run-state', 'paused');
    pausedBlock.classList.add('paused');
    runningBlock.classList.add('running');
    runBtn.classList.add('run');
    pauseBtn.classList.add('pause');
    pausedSpan.classList.add('state');
    runningSpan.classList.add('state');

    runBtn.textContent = 'run';
    pauseBtn.textContent = 'pause';
    pausedSpan.textContent = 'paused';
    runningSpan.textContent = 'running';

    pausedBlock.append(runBtn, ' ', pausedSpan);
    runningBlock.append(pauseBtn, ' ', runningSpan);
    section.append(pausedBlock, runningBlock);

    this.element = section;
    this.runBtn = runBtn;
    this.pauseBtn = pauseBtn;
  },

  toggleState(state) {
    this.element.classList.toggle(
      'paused',
      state !== undefined && state === 'paused'
    );
    
    this.element.classList.toggle(
      'running',
      state !== undefined && state === 'running'
    );
  },

  assignListeners() {
    this.runBtn.onclick = this.handleRunClick;
    this.pauseBtn.onclick = this.handlePauseClick;
  },

  handleRunClick: () => {
    const event = new CustomEvent('runPressed');
    pauseRunControls.dispatchEvent(event);
  },

  handlePauseClick: () => {
    const event = new CustomEvent('pausePressed');
    pauseRunControls.dispatchEvent(event);
  },

  appendTo(parent) {
    parent.append(this.element);
  },
});

/* 



*/
