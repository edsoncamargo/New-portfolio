export function initSkillsEffect() {
  const aboutTop = document.getElementById('aboutTop');
  const aboutBottom = document.getElementById('aboutBottom');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (window.screen.width > 767) {
      aboutTop.style.transform = `translateX(${value * -0.8}px)`;
      aboutBottom.style.transform = `translateX(${value * 0.8}px)`;
    } else {
      aboutTop.style.transform = `translateX(${value * -0.2}px)`;
      aboutBottom.style.transform = `translateX(${value * 0.2}px)`;
    }
  });
}

window.initSkillsEffect = initSkillsEffect;
