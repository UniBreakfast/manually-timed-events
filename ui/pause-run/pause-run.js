export { pauseRunControls };

const pauseRunControls = {
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
    
    pausedBlock.append(runBtn, pausedSpan);
    runningBlock.append(pauseBtn, runningSpan);
    section.append(pausedBlock, runningBlock);

    this.element = section;
    this.runBtn = runBtn;
    this.pauseBtn = pauseBtn;
  },

  toggleState() {
    this.element.classList.toggle('paused');
    this.element.classList.toggle('running');
  },

  assignListeners() {
    this.runBtn.onclick = () => this.toggleState();
    this.pauseBtn.onclick = () => this.toggleState();
  },

  appendTo(parent) {
    parent.append(this.element);
  },
};
