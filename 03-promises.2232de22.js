!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r),r("dbdyf");var u=r("iU1Pc");function l(e,n){return new Promise((function(o,i){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}var a=document.querySelector(".form");a.addEventListener("submit",(function(n){n.preventDefault();var o=Number(a.delay.value);for(i=0;i<a.amount.value;i++){l(i,o).then((function(n){e(u).Notify.success("✅ Fulfilled promise ".concat(n.position," in ").concat(n.delay,"ms"))})).catch((function(n){e(u).Notify.failure("❌ Rejected promise ".concat(n.position," in ").concat(n.delay,"ms"))})),o+=Number(a.delay.value),console.log(o)}}))}();
//# sourceMappingURL=03-promises.2232de22.js.map
