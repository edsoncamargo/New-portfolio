function initSkillsEffect() {
    const aboutTop = document.getElementById('aboutTop');
    const aboutBottom = document.getElementById('aboutBottom');

    console.log(aboutTop)

    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        aboutTop.style.transform = `translateX(${value * -0.80}px)`;
        aboutBottom.style.transform = `translateX(${value * 0.80}px)`;
    })
};