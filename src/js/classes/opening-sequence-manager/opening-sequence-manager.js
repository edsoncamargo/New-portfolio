import { ThemeManager } from '../theme-manager/theme-manager';
import { ParallaxEffectManager } from '../parallax-effect-manager/parallax-effect-manager';
import { SkillsCarousel } from '../skills-carousel/skills-carousel';
import { MouseHoverManager } from '../mouse-hover-manager/mouse-hover-manager';

class OpeningSequenceManager {
  constructor() {
    this.eCursor = document.querySelector('.cursor');
  }

  start() {
    this.hideCustomCursorWhenClickHello()
      .then(() => ThemeManager.applyTimeClassIn('.container'))
      .then(() => this.openDoors())
      .then(() => this.animateHello())
      .then(() => this.animateHome())
      .then(() => this.startManagers())
      .then(() => this.showAllLandingPageSessions());
  }

  hideCustomCursorWhenClickHello() {
    return new Promise((resolve) => {
      this.eCursor.setAttribute(
        'style',
        'top: auto; left: auto; display: none;'
      );
      this.eCursor.classList.add('none-cursor');
      setTimeout(resolve, 0);
    });
  }

  openDoors() {
    return new Promise((resolve) => {
      setTimeout(() => {
        document.querySelector('.left').classList.add('open');
        document.querySelector('.right').classList.add('open');
        resolve();
      }, 100);
    });
  }

  animateHello() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const eHello = document.getElementById('hello');
        eHello.classList.add('open');
        ThemeManager.applyTimeClassIn('#hello');
        resolve();
      }, 600);
    });
  }

  animateHome() {
    return new Promise((resolve) => {
      setTimeout(() => {
        ThemeManager.applyTimeClassIn('body');
        const eHome = document.getElementById('home');
        eHome.classList.add('d-none');
        document.getElementById('hello').classList.remove('opening');
        document.getElementById('hello').classList.remove('open');
        document.getElementById('lp').classList.remove('d-none');

        setTimeout(() => {
          document.getElementById('header').classList.add('header-opened');
          resolve();
        }, 200);
      }, 600);
    });
  }

  startManagers() {
    return new Promise((resolve) => {
      new ThemeManager().start();
      new MouseHoverManager().startCustomCursorClickHandler();
      new ParallaxEffectManager().start();
      new SkillsCarousel().start();
      resolve();
    });
  }

  showAllLandingPageSessions() {
    return new Promise((resolve) => {
      setTimeout(() => {
        document.getElementById('main').classList.add('open');
        resolve();
      }, 200);
    });
  }
}

window.OpeningSequenceManager = OpeningSequenceManager;
