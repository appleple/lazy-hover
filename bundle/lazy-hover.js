!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.lazyHover=t():e.lazyHover=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="bundle",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},o=function(e,t){e.classList?e.classList.add(t):r(e,t)||(e.className=e.className+" "+t)},s=function(e,t){if(e.classList)e.classList.remove(t);else if(r(e,t)){var n=e.className;e.className=(" "+n+" ").replace(" "+t+" "," ")}},a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i={delay:1e3,hoverClass:"is-hoverd",activeClass:"is-active"};t.default=function(e,t){var n=a({},i,t),u=[];"string"==typeof e&&(e=document.querySelectorAll(e)),[].forEach.call(e,function(e){u.push(e)}),u.forEach(function(e){var t=-1;e.addEventListener("mouseenter",function(){clearTimeout(t),r(e,n.hoverClass)||(o(e,n.hoverClass),setTimeout(function(){o(e,n.activeClass)},10))}),e.addEventListener("mouseleave",function(){t=setTimeout(function(){s(e,n.activeClass),setTimeout(function(){s(e,n.hoverClass)},10)},n.delay)})})}}]).default});