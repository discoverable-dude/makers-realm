/* Product finder: step 1 picks a project, step 2 picks a stage, step 3 shows that stage's kit. */
class MrFinder extends HTMLElement {
  connectedCallback() {
    this.steps = [...this.querySelectorAll('[data-step]')];
    this.progress = this.querySelector('[data-progress]');
    this.project = null;
    this.addEventListener('click', (event) => {
      const choice = event.target.closest('.mr-finder__choice');
      if (choice) {
        if (choice.dataset.result) this.showResult(choice.dataset.result);
        else this.showStages(choice.dataset.project, choice.dataset.label);
        return;
      }
      if (event.target.closest('[data-back]')) this.show(1);
      if (event.target.closest('[data-restart]')) this.show(1);
    });
  }

  show(number) {
    this.steps.forEach((step) => {
      step.hidden = Number(step.dataset.step) !== number;
    });
    this.progress.textContent = number === 3 ? 'Your list' : `Step ${number} of 2`;
    const heading = this.steps[number - 1].querySelector('.mr-finder__question:not([hidden])');
    if (heading) heading.focus();
  }

  showStages(project) {
    this.project = project;
    this.querySelectorAll('[data-step="2"] .mr-finder__choice').forEach((button) => {
      button.hidden = button.dataset.project !== project;
    });
    this.show(2);
  }

  showResult(id) {
    this.querySelectorAll('.mr-finder__result').forEach((panel) => {
      panel.hidden = panel.id !== id;
    });
    this.show(3);
    const panel = this.querySelector(`#${CSS.escape(id)} .mr-finder__question`);
    if (panel) panel.focus();
  }
}

if (!customElements.get('mr-finder')) customElements.define('mr-finder', MrFinder);
