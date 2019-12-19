"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasClass = function (el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    }
    else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
};
exports.addClass = function (el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else {
        if (!exports.hasClass(el, className)) {
            el.className = el.className + ' ' + className;
        }
    }
};
exports.removeClass = function (el, className) {
    if (el.classList) {
        el.classList.remove(className);
    }
    else {
        if (exports.hasClass(el, className)) {
            var originClass = el.className;
            el.className = (' ' + originClass + ' ').replace(' ' + className + ' ', ' ');
        }
    }
};
//# sourceMappingURL=util.js.map