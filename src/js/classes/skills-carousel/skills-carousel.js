export class SkillsCarousel {
    value = 0

    constructor() {
        this.#getElements()
    }

    #getElements() {
        this.eAboutTop = document.getElementById("aboutTop")
        this.eAboutBottom = document.getElementById("aboutBottom")
    }

    start() {
        this.#handleSkillsScrolling()
    }

    #handleSkillsScrolling() {
        window.addEventListener("scroll", () => {
            const value = window.scrollY
            const translationFactor = window.screen.width > 767 ? 0.8 : 0.2

            this.#setTranform(
                this.eAboutTop,
                `translateX(${value * -translationFactor}px)`
            )
            this.#setTranform(
                this.eAboutBottom,
                `translateX(${value * translationFactor}px)`
            )
        })
    }

    #setTranform(element, value) {
        element.style.transform = value
    }
}
