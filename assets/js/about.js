function initSkillsEffect() {
    const aboutTop = document.getElementById('aboutTop');
    const aboutBottom = document.getElementById('aboutBottom');

    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        if (window.screen.width > 767) {
            aboutTop.style.transform = `translateX(${value * -0.80}px)`;
            aboutBottom.style.transform = `translateX(${value * 0.80}px)`;
        } else {
            aboutTop.style.transform = `translateX(${value * -0.20}px)`;
            aboutBottom.style.transform = `translateX(${value * 0.20}px)`;
        }
    })
};