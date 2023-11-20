class EcPortfolioHolder {
    window
    name

    /**
     * @param {Window} window
     * @param {string} name
     */
    constructor(window, name) {
        this.name = name
        this.window = window
        this.window[name] = this.window[name] || {}
    }

    /**
     *
     * @param {string} targetName
     * @param {*} target
     * @return {*}
     */
    add(targetName, target) {
        this.window[this.name][targetName] = target
        return this.get()
    }

    /**
     * @return {*}
     */
    get() {
        return this.window[this.name]
    }
}

export default new EcPortfolioHolder(window, "EcPortfolio")
