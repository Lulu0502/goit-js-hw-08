!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),d?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function T(){var e=b();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?p(e):(r=i=void 0,u)}function w(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(T,t),p(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?u:h(b())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form");j.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),j.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));var O={email:"",message:""};!function(){var e=JSON.parse(localStorage.getItem("feedback-form-state")),t=document.querySelector(".feedback-form input"),n=document.querySelector(".feedback-form textarea");if(e){var r,o,i,a;t.value=null!==(r=e.email)&&void 0!==r?r:"",n.value=null!==(o=e.message)&&void 0!==o?o:"",O.email=null!==(i=e.email)&&void 0!==i?i:"",O.value=null!==(a=e.message)&&void 0!==a?a:""}}()}();
//# sourceMappingURL=03-feedback.a3fe51cc.js.map
