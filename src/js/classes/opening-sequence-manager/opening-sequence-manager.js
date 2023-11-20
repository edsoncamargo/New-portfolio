import { ThemeManager } from "../theme-manager/theme-manager"
import { ParallaxEffectManager } from "../parallax-effect-manager/parallax-effect-manager"
import { SkillsCarousel } from "../skills-carousel/skills-carousel"
import { MouseHoverManager } from "../mouse-hover-manager/mouse-hover-manager"
export class OpeningSequenceManager {
    constructor() {
        this.eCursor = document.querySelector(".cursor")
    }

    start() {
        this.hideCustomCursorWhenClickHello(0)
            .then(() => ThemeManager.applyTimeClassIn(".container"))
            .then(() => this.openDoors(100))
            .then(() => this.animateHello(600))
            .then(() => this.animateHome(1000))
            .then(() => this.startManagers())
            .then(() => this.showAllLandingPageSessions(200))
    }

    hideCustomCursorWhenClickHello(timeout) {
        return new Promise((resolve) => {
            this.eCursor.setAttribute(
                "style",
                "top: auto; left: auto; display: none;"
            )
            this.eCursor.classList.add("none-cursor")
            setTimeout(resolve, timeout)
        })
    }

    openDoors(timeout) {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.querySelector(".left").classList.add("open")
                document.querySelector(".right").classList.add("open")
                resolve()
            }, timeout)
        })
    }

    animateHello(timeout) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const eHello = document.getElementById("hello")
                eHello.classList.add("open")
                ThemeManager.applyTimeClassIn("#hello")
                resolve()
            }, timeout)
        })
    }

    animateHome(timeout) {
        return new Promise((resolve) => {
            setTimeout(() => {
                ThemeManager.applyTimeClassIn("body")
                const eHome = document.getElementById("home")
                eHome.classList.add("d-none")
                document.getElementById("hello").classList.remove("opening")
                document.getElementById("hello").classList.remove("open")
                document.getElementById("lp").classList.remove("d-none")

                setTimeout(() => {
                    document
                        .getElementById("header")
                        .classList.add("header-opened")
                    resolve()
                }, 200)
            }, timeout)
        })
    }

    startManagers() {
        return new Promise((resolve) => {
            new ThemeManager().start()
            new MouseHoverManager().startCustomCursorClickHandler()
            new ParallaxEffectManager().start()
            new SkillsCarousel().start()
            resolve()
        })
    }

    showAllLandingPageSessions(timeout) {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("main").classList.add("open")
                resolve()
            }, timeout)
        })
    }
}
