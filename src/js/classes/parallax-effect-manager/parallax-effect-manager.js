class ParallaxEffect {
    constructor(element, factor) {
        this.element = element
        this.factor = factor
    }

    updateScrollPosition(value) {
        this.element.style.transform = `translateY(${value * this.factor}px)`
    }

    updateHorizontalScrollPosition(value) {
        this.element.style.transform = `translateX(${value * this.factor}px)`
    }
}

export class ParallaxEffectManager {
    constructor() {
        this.#getElements()
        this.#generateElementsArrayByDOM()
    }

    #getElements() {
        const eNavbarBrand = document.getElementById("navbarBrand")
        const eStars = document.getElementById("stars")
        const eMoon = document.getElementById("moon")
        this.eNavbarBrandParallax = new ParallaxEffect(eNavbarBrand, -0.2)
        this.eStarsParallax = new ParallaxEffect(eStars, 0.2)
        this.eMoonParallax = new ParallaxEffect(eMoon, 1.05)
    }

    #generateElementsArrayByDOM() {
        this.effects = [
            this.eStarsParallax,
            this.eNavbarBrandParallax,
            this.eMoonParallax
        ]
    }

    start() {
        this.#handleParallaxEffect()
    }

    #handleParallaxEffect() {
        window.addEventListener("scroll", () => {
            const value = window.scrollY
            this.eStarsParallax.updateHorizontalScrollPosition(value)
            this.eNavbarBrandParallax.updateScrollPosition(value)
            this.eMoonParallax.updateScrollPosition(value)
        })
    }
}