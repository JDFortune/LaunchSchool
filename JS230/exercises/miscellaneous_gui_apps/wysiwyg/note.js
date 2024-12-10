const App = {
  makeBold(e) {
    document.execCommand('bold');
    this.toggleButton(e);
  },

  makeItalic(e) {
    document.execCommand('italic');
    this.toggleButton(e);
  },

  makeUnderline(e) {
    document.execCommand('underline');
    this.toggleButton(e);
  },

  makeStrikeThrough(e) {
    document.execCommand('strikeThrough');
    this.toggleButton(e);
  },

  createLink(e) {
    let link = prompt('Enter a URL');
    if (!link) return;
    document.execCommand('createLink', false, link);
    this.toggleButton(e);
  },

  insertUl(e) {
    document.execCommand('insertUnorderedList');
    this.toggleButton(e);
  },

  insertOl(e) {
    document.execCommand('insertOrderedList');
    this.toggleButton(e);
  },

  alignLeft(e) {
    document.execCommand('justifyLeft');
    this.toggleButton(e);
    this.toggleButtons();
  },

  alignRight(e) {
    document.execCommand('justifyRight');
    this.toggleButton(e);
    this.toggleButtons();
  },

  alignCenter(e) {
    document.execCommand('justifyCenter');
    this.toggleButton(e);
    this.toggleButtons();
  },

  alignFull(e) {
    document.execCommand('justifyFull');
    this.toggleButton(e);
    this.toggleButtons();
  },

  toggleButton(e) {
    let btn = e.target;
    btn.classList.toggle('pushed');
  },

  toggleButtons() {
    let isBold = document.queryCommandState('bold');
    let isItalic = document.queryCommandState('italic');
    let isUnderlined = document.queryCommandState('underline');
    let isStruckThrough = document.queryCommandState('strikeThrough');
    let isLink = document.queryCommandState('createLink');
    let isUl = document.queryCommandState('insertUnorderedList');
    let isOl = document.queryCommandState('insertOrderedList');
    let isLeftAlign = document.queryCommandState('justifyLeft');
    let isRightAlign = document.queryCommandState('justifyRight');
    let isCenterAlign = document.queryCommandState('justifyCenter');
    let isFullAlign = document.queryCommandState('justifyFull');

    document.querySelector('#bold').classList.toggle('pushed', isBold);
    document.querySelector('#italic').classList.toggle('pushed', isItalic );
    document.querySelector('#underline').classList.toggle('pushed',isUnderlined);
    document.querySelector('#strikeThrough').classList.toggle('pushed', isStruckThrough);
    document.querySelector('#link').classList.toggle('pushed', isLink);
    document.querySelector('#list-bullet').classList.toggle('pushed', isUl);
    document.querySelector('#list-number').classList.toggle('pushed', isOl);
    document.querySelector('#align-left').classList.toggle('pushed', isLeftAlign);
    document.querySelector('#align-right').classList.toggle('pushed', isRightAlign);
    document.querySelector('#align-center').classList.toggle('pushed', isCenterAlign);
    document.querySelector('#align-full').classList.toggle('pushed', isFullAlign);
  },

  init() {
    document.querySelector('#bold').addEventListener('click', this.makeBold.bind(this));
    document.querySelector('#italic').addEventListener('click', this.makeItalic.bind(this));
    document.querySelector('#underline').addEventListener('click', this.makeUnderline.bind(this));
    document.querySelector('#strikeThrough').addEventListener('click', this.makeStrikeThrough.bind(this));
    document.querySelector('#link').addEventListener('click', this.createLink.bind(this));
    document.querySelector('#list-bullet').addEventListener('click', this.insertUl.bind(this));
    document.querySelector('#list-number').addEventListener('click', this.insertOl.bind(this));
    document.querySelector('#align-left').addEventListener('click', this.alignLeft.bind(this));
    document.querySelector('#align-right').addEventListener('click', this.alignRight.bind(this));
    document.querySelector('#align-center').addEventListener('click', this.alignCenter.bind(this));
    document.querySelector('#align-full').addEventListener('click', this.alignFull.bind(this));
    document.addEventListener('selectionchange', this.toggleButtons.bind(this));
  }
}


document.addEventListener('DOMContentLoaded', () => {
  let app = Object.create(App);
  app.init();
});
