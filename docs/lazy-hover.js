!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.lazyHover=t():e.lazyHover=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="bundle",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},r=function(e,t){e.classList?e.classList.add(t):o(e,t)||(e.className=e.className+" "+t)},s=function(e,t){if(e.classList)e.classList.remove(t);else if(o(e,t)){var n=e.className;e.className=(" "+n+" ").replace(" "+t+" "," ")}},i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},a={delay:1e3,timespan:10,hoverClass:"is-hovered",activeClass:"is-active",switch:!1};t.default=function(e,t){var n=i({},a,t),c=[];"string"==typeof e&&(e=document.querySelectorAll(e)),[].forEach.call(e,function(e){c.push(e)}),c.forEach(function(e){var t=-1;e.addEventListener("mouseenter",function(){clearTimeout(t),o(e,n.hoverClass)||(n.switch?c.forEach(function(t){s(t,n.activeClass),setTimeout(function(){s(t,n.hoverClass),r(e,n.hoverClass),setTimeout(function(){r(e,n.activeClass)},n.timespan)},n.timespan)}):(r(e,n.hoverClass),setTimeout(function(){r(e,n.activeClass)},n.timespan)))}),e.addEventListener("mouseleave",function(){t=setTimeout(function(){s(e,n.activeClass),setTimeout(function(){s(e,n.hoverClass)},n.timespan)},n.delay)})})}}]).default});