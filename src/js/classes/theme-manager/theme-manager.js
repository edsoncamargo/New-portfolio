import { isDayTime } from '../../common/utils.entry';

export class ThemeManager {
  constructor() {
    this.#getElements();
    this.#generateElementsArrayByDOM();
  }

  #getElements() {
    this.eStars = document.getElementById('stars');
    this.eMoon = document.getElementById('moon');
    this.eMontainsLeft = document.getElementById('montainsLeft');
    this.eStoneLeft1 = document.getElementById('stoneLeft1');
    this.eStoneLeft2 = document.getElementById('stoneLeft2');
    this.eMontainsRight = document.getElementById('montainsRight');
    this.eStoneRight1 = document.getElementById('stoneRight1');
    this.eStoneRight2 = document.getElementById('stoneRight2');
  }

  #generateElementsArrayByDOM() {
    this.elements = [
      this.eMoon,
      this.eMontainsLeft,
      this.eStoneLeft1,
      this.eStoneLeft2,
      this.eMontainsRight,
      this.eStoneRight1,
      this.eStoneRight2,
    ];
  }

  start() {
    this.#changeThemeByHour();
  }

  #changeThemeByHour() {
    if (isDayTime()) {
      this.eStars.style.opacity = '0';

      this.elements.forEach((element) => {
        const index = element.src.indexOf('/assets/images/home/night/');
        const filepath = element.src.substring(index);
        const newFilePath = filepath.replace('night', 'day');
        element.src = `..${newFilePath}`;
      });
    }
  }

  static applyTimeClassIn(targetSelector) {
    const element = document.querySelector(targetSelector);

    if (isDayTime()) {
      element.classList.add('day');
      return;
    }

    element.classList.add('night');
  }
}

window.ThemeManager = ThemeManager;
