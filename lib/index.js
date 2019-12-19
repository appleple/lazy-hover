var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { hasClass, addClass, removeClass } from './util';
var defaultOption = {
    delay: 1000,
    timespan: 10,
    hoverClass: 'is-hoverd',
    activeClass: 'is-active',
    switch: false
};
export default function (element, option) {
    var opt = __assign({}, defaultOption, option);
    var items = [];
    if (typeof element === 'string') {
        element = document.querySelectorAll(element);
    }
    [].forEach.call(element, function (item) {
        items.push(item);
    });
    items.forEach(function (item) {
        var timeout = -1;
        item.addEventListener('mouseenter', function () {
            clearTimeout(timeout);
            if (hasClass(item, opt.hoverClass)) {
                return;
            }
            if (opt.switch) {
                items.forEach(function (eachItem) {
                    removeClass(eachItem, opt.activeClass);
                    setTimeout(function () {
                        removeClass(eachItem, opt.hoverClass);
                        addClass(item, opt.hoverClass);
                        setTimeout(function () {
                            addClass(item, opt.activeClass);
                        }, opt.timespan);
                    }, opt.timespan);
                });
            }
            else {
                addClass(item, opt.hoverClass);
                setTimeout(function () {
                    addClass(item, opt.activeClass);
                }, opt.timespan);
            }
        });
        item.addEventListener('mouseleave', function () {
            timeout = setTimeout(function () {
                removeClass(item, opt.activeClass);
                setTimeout(function () {
                    removeClass(item, opt.hoverClass);
                }, opt.timespan);
            }, opt.delay);
        });
    });
}
//# sourceMappingURL=index.js.map