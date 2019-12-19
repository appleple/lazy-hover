export var hasClass = function (el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    }
    else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
};
export var addClass = function (el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else {
        if (!hasClass(el, className)) {
            el.className = el.className + ' ' + className;
        }
    }
};
export var removeClass = function (el, className) {
    if (el.classList) {
        el.classList.remove(className);
    }
    else {
        if (hasClass(el, className)) {
            var originClass = el.className;
            el.className = (' ' + originClass + ' ').replace(' ' + className + ' ', ' ');
        }
    }
};
//# sourceMappingURL=util.js.map