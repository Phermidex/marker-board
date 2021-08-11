class move__until {

    constructor(className, target) {
        this.className = className;
        this.classTarget = target;
        this.document = document;
    }

    htmlMenulinks() {
        return this.document.querySelector(this.className).outerHTML;
    }

    target() {
        this.document.querySelector(this.classTarget).insertAdjacentHTML('afterbegin', this.htmlMenulinks());
    }

    initialized() {
        this.target();
    }

}

new move__until('#cat-list', '#mobile-menulinks').initialized();
