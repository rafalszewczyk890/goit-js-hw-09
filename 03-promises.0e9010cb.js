function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var l=r("eWCmQ");function u(e,o){return new Promise(((t,i)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}const s=document.querySelector(".form");s.addEventListener("submit",(o=>{o.preventDefault(),setTimeout((()=>{let o=Number(s.step.value);for(i=0;i<s.amount.value;i++){u(i,o).then((o=>{e(l).Notify.success(`✅ Fulfilled promise ${o.position} in ${o.delay}ms`)})).catch((o=>{e(l).Notify.failure(`❌ Rejected promise ${o.position} in ${o.delay}ms`)})),o+=Number(s.step.value),console.log(o)}}),s.delay.value)}));
//# sourceMappingURL=03-promises.0e9010cb.js.map
