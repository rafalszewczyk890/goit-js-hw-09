function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r),r("fbklV");var l=r("eWCmQ");function u(e,o){return new Promise(((i,n)=>{setTimeout((()=>{Math.random()>.3?i({position:e,delay:o}):n({position:e,delay:o})}),o)}))}const d=document.querySelector(".form");d.addEventListener("submit",(o=>{o.preventDefault();let n=Number(d.delay.value);for(i=0;i<d.amount.value;i++){u(i,n).then((o=>{e(l).Notify.success(`✅ Fulfilled promise ${o.position} in ${o.delay}ms`)})).catch((o=>{e(l).Notify.failure(`❌ Rejected promise ${o.position} in ${o.delay}ms`)})),n+=Number(d.delay.value),console.log(n)}}));
//# sourceMappingURL=03-promises.0d2e09a1.js.map
