import { ThemeManager } from "../theme-manager/theme-manager"
import { ParallaxEffectManager } from "../parallax-effect-manager/parallax-effect-manager"
import { MouseHoverManager } from "../mouse-hover-manager/mouse-hover-manager"

const ANIMATION_TIME_IN_SECONDS = 4
const ANIMATION_TIME_IN_MS = ANIMATION_TIME_IN_SECONDS * 1000

export class OpeningSequenceManager {
    constructor() {
        this.eCursor = document.querySelector(".cursor")
        this.loadingStatus = document.getElementById("loading-message")

        this.updateLoadingStatus()

        setTimeout(() => this.start(), ANIMATION_TIME_IN_MS)
    }

    updateLoadingStatus() {
        let currentTimeInSeconds = 0

        this.loadingInterval = setInterval(() => {
            currentTimeInSeconds++

            if (currentTimeInSeconds <= 7) {
                if (currentTimeInSeconds === 1) {
                    this.loadingStatus.textContent = `Hello, 4 segundos para carregar página inicial.`
                } else if (currentTimeInSeconds === 7) {
                    this.loadingStatus.textContent = "Página inicial carregada."
                }
            } else {
                clearInterval(this.loadingInterval)
                this.loadingStatus.style.display = "none"

                const firstText = document.getElementById("first-text")
                setTimeout(() => {
                    firstText.focus()
                }, 3000)
            }
        }, 1000)
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
            resolve()
        })
    }

    showAllLandingPageSessions(timeout) {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("main").classList.add("open")
                this.dispatchAppStart()
                resolve()
            }, timeout)
        })
    }

    dispatchAppStart() {
        const customEventName = "portfolioStart"

        const customEvent = new CustomEvent(customEventName, {
            detail: {
                message: "portfolioStart dispatched",
                timestamp: new Date()
            },
            bubbles: true,
            cancelable: true
        })

        const targetElement = document.querySelector("body")
        targetElement.dispatchEvent(customEvent)
    }
}

new OpeningSequenceManager()
