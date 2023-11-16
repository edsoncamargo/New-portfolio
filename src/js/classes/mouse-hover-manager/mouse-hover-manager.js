export class MouseHoverManager {
  constructor() {
    this.#getElements();
  }

  #getElements() {
    this.eCursor = document.querySelector('.cursor');
    this.eCursorClick = document.querySelector('.cursor-click');
  }

  startCustomHoverHelloHandler() {
    document.addEventListener('mousemove', this.#handleMouseMove);
  }

  #handleMouseMove = (e) => {
    const eHello = document.getElementById('hello');
    const eHelloRect = eHello.getBoundingClientRect();

    if (
      this.#isHelloHovered(e, eHelloRect) &&
      Boolean(this.eCursor.classList.contains('none-cursor') === false)
    ) {
      this.#showCursor(e.pageY - 40, e.pageX - 40);
    } else {
      this.#hideCursor();
    }
  };

  #isHelloHovered(e, eHelloRect) {
    return (
      e.pageY > eHelloRect.y &&
      e.pageY < eHelloRect.y + eHelloRect.height &&
      e.pageX > eHelloRect.x &&
      e.pageX < eHelloRect.x + eHelloRect.width
    );
  }

  #showCursor(top, left) {
    document.body.style.cursor = 'none';
    this.eCursor.style.cssText = `top: ${top}px; left: ${left}px; display: inline-block;`;
  }

  #hideCursor() {
    document.body.style.cursor = 'auto';
    this.eCursor.style.cssText = 'top: auto; left: auto; display: none;';
  }

  #setAutoCursorAfterDelay() {
    let entrar = true;
    if (entrar) {
      document.body.style.cursor = 'auto';
    }

    setTimeout(() => {
      entrar = false;
      document.body.style.cursor = 'auto';
    }, 2000);
  }

  #hideClickableCursor() {
    this.eCursorClick.style.cssText = 'top: auto; left: auto; display: none;';
  }

  startCustomCursorClickHandler() {
    document.addEventListener('mousemove', this.#handleClickableElements);
  }

  #handleClickableElements = (e) => {
    const clickables = document.querySelectorAll('.clickable');
    let isClickable = false;

    clickables.forEach((clickable) => {
      const clickableRect = clickable.getBoundingClientRect();

      if (this.#isCursorOverElement(e, clickableRect)) {
        this.#showClickableCursor(e.pageY - 10, e.pageX - 10);
        isClickable = true;
      }
    });

    if (Boolean(isClickable) === false) {
      this.#handleNonClickable();
    }
  };

  #isCursorOverElement(e, elementRect) {
    return (
      e.clientY > elementRect.y &&
      e.clientY < elementRect.y + elementRect.height &&
      e.clientX > elementRect.x &&
      e.clientX < elementRect.x + elementRect.width
    );
  }

  #showClickableCursor(top, left) {
    document.body.style.cursor = 'none';
    this.eCursorClick.style.cssText = `top: ${top}px; left: ${left}px; display: inline-block;`;
  }

  #handleNonClickable() {
    if (isDayTime()) {
      this.#setAutoCursorAfterDelay();
    } else {
      document.body.style.cursor = 'auto';
    }

    this.#hideClickableCursor();
  }
}

window.MouseHoverManager = MouseHoverManager;
