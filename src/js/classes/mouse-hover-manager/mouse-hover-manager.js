import { Utils } from "../../common/utils/utils"

export class MouseHoverManager {
    constructor() {
        this.#getElements()
    }

    #getElements() {
        this.eCursorClick = document.querySelector(".cursor-click")
    }

    #setAutoCursorAfterDelay() {
        let enterIn = true
        if (enterIn) {
            document.body.style.cursor = "auto"
        }

        setTimeout(() => {
            enterIn = false
            document.body.style.cursor = "auto"
        }, 2000)
    }

    #hideClickableCursor() {
        this.eCursorClick.style.cssText =
            "top: auto; left: auto; display: none;"
    }

    startCustomCursorClickHandler() {
        document.addEventListener("mousemove", this.#handleClickableElements)
    }

    #handleClickableElements = (e) => {
        const clickables = document.querySelectorAll(".clickable")
        let isClickable = false

        clickables.forEach((clickable) => {
            const clickableRect = clickable.getBoundingClientRect()

            if (this.#isCursorOverElement(e, clickableRect)) {
                this.#showClickableCursor(e.pageY - 10, e.pageX - 10)
                isClickable = true
            }
        })

        if (Boolean(isClickable) === false) {
            this.#handleNonClickable()
        }
    }

    #isCursorOverElement(e, elementRect) {
        return (
            e.clientY > elementRect.y &&
            e.clientY < elementRect.y + elementRect.height &&
            e.clientX > elementRect.x &&
            e.clientX < elementRect.x + elementRect.width
        )
    }

    #showClickableCursor(top, left) {
        document.body.style.cursor = "none"
        this.eCursorClick.style.cssText = `top: ${top}px; left: ${left}px; display: inline-block;`
    }

    #handleNonClickable() {
        if (Utils.isDayTime()) {
            this.#setAutoCursorAfterDelay()
        } else {
            document.body.style.cursor = "auto"
        }

        this.#hideClickableCursor()
    }
}
