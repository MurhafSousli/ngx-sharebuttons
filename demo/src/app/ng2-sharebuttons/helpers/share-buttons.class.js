export var ShareButton = (function () {
    function ShareButton(provider, template, classes) {
        this.provider = provider;
        this.template = template;
        this.classes = classes;
    }
    return ShareButton;
}());
export var ShareArgs = (function () {
    function ShareArgs(url, title, description, image, tags) {
        this.url = url;
        this.title = title;
        this.description = description;
        this.image = image;
        this.tags = tags;
    }
    return ShareArgs;
}());
//# sourceMappingURL=share-buttons.class.js.map