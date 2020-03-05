"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var defaultOption = {
    delay: 1000,
    timespan: 100,
    hoverClass: 'is-hovered',
    activeClass: 'is-active',
    switch: false
};
function default_1(element, option) {
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
            if (util_1.hasClass(item, opt.hoverClass)) {
                return;
            }
            if (opt.switch) {
                items.forEach(function (eachItem) {
                    util_1.removeClass(eachItem, opt.activeClass);
                });
                timeout = setTimeout(function () {
                    items.forEach(function (eachItem) {
                        util_1.removeClass(eachItem, opt.hoverClass);
                    });
                    util_1.addClass(item, opt.hoverClass);
                    setTimeout(function () {
                        util_1.addClass(item, opt.activeClass);
                    }, opt.timespan);
                }, opt.timespan);
            }
            else {
                util_1.addClass(item, opt.hoverClass);
                setTimeout(function () {
                    util_1.addClass(item, opt.activeClass);
                }, opt.timespan);
            }
        });
        item.addEventListener('mouseleave', function () {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                util_1.removeClass(item, opt.activeClass);
                setTimeout(function () {
                    util_1.removeClass(item, opt.hoverClass);
                }, opt.timespan);
            }, opt.delay);
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map