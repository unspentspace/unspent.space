(self.webpackChunkunspent_space_frontend=self.webpackChunkunspent_space_frontend||[]).push([[946],{8797:function(e,t,r){var o=1/0,n="[object Symbol]",u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,c=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,f="\\ud800-\\udfff",s="\\u2700-\\u27bf",l="a-z\\xdf-\\xf6\\xf8-\\xff",a="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",p="['’]",x="["+i+"]",d="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",b="\\d+",y="["+s+"]",m="["+l+"]",g="[^"+f+i+b+s+l+a+"]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",O="[\\ud800-\\udbff][\\udc00-\\udfff]",_="["+a+"]",j="(?:"+m+"|"+g+")",h="(?:"+_+"|"+g+")",E="(?:['’](?:d|ll|m|re|s|t|ve))?",S="(?:['’](?:D|LL|M|RE|S|T|VE))?",A="(?:"+d+"|\\ud83c[\\udffb-\\udfff])"+"?",M="[\\ufe0e\\ufe0f]?",w=M+A+("(?:\\u200d(?:"+["[^"+f+"]",v,O].join("|")+")"+M+A+")*"),R="(?:"+[y,v,O].join("|")+")"+w,k=RegExp(p,"g"),I=RegExp(d,"g"),P=RegExp([_+"?"+m+"+"+E+"(?="+[x,_,"$"].join("|")+")",h+"+"+S+"(?="+[x,_+j,"$"].join("|")+")",_+"?"+j+"+"+E,_+"+"+S,b,R].join("|"),"g"),Z=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,D="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,N="object"==typeof self&&self&&self.Object===Object&&self,U=D||N||Function("return this")();var z,C=(z={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==z?void 0:z[e]});var L=Object.prototype.toString,T=U.Symbol,G=T?T.prototype:void 0,X=G?G.toString:void 0;function F(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==n}(e))return X?X.call(e):"";var t=e+"";return"0"==t&&1/e==-o?"-0":t}function Y(e){return null==e?"":F(e)}var $,B=($=function(e,t,r){return e+(r?"-":"")+t.toLowerCase()},function(e){return function(e,t,r,o){var n=-1,u=e?e.length:0;for(o&&u&&(r=e[++n]);++n<u;)r=t(r,e[n],n,e);return r}(function(e,t,r){return e=Y(e),void 0===(t=r?void 0:t)?function(e){return Z.test(e)}(e)?function(e){return e.match(P)||[]}(e):function(e){return e.match(u)||[]}(e):e.match(t)||[]}(function(e){return(e=Y(e))&&e.replace(c,C).replace(I,"")}(e).replace(k,"")),$,"")});e.exports=B},1099:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var o=r(7294),n=r(4983),u=r(1082);var c={a:e=>o.createElement(u.Link,e)};function f(e){let{children:t}=e;return o.createElement(n.MDXProvider,{components:c},t)}},1955:function(e,t,r){const o=r(7927);e.exports={MDXRenderer:o}},7927:function(e,t,r){var o=r(861),n=r(3515),u=r(8416),c=r(215);const f=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const a=r(7294),{mdx:i}=r(4983),{useMDXScope:p}=r(2174);e.exports=function(e){let{scope:t,children:r}=e,u=c(e,f);const s=p(t),x=a.useMemo((()=>{if(!r)return null;const e=l({React:a,mdx:i},s),t=Object.keys(e),u=t.map((t=>e[t]));return n(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,t]);return a.createElement(x,l({},u))}},8496:function(e,t,r){"use strict";r.r(t);var o=r(7294),n=r(1099),u=r(1955),c=r(6011),f=r(8279),s=r(8797),l=r.n(s);t.default=e=>{let{data:t}=e;const r=t.mdx,s=t.mdx.fields,{tags:a,category:i}=r.frontmatter;t.mdx.frontmatter.title;return o.createElement(n.Z,null,o.createElement(c.Z,null,o.createElement("small",{className:"text-sm font-bold uppercase tracking-tight"},s.date),o.createElement("article",{className:"my-6 prose dark:prose-invert lg:prose-xl"},o.createElement(u.MDXRenderer,null,r.body)),o.createElement("h5",{className:"uppercase font-bold mb-4"},"Tags"),o.createElement("ul",{className:"flex flex-row gap-4 mb-4"},a&&a.map((e=>o.createElement("li",{key:e,className:"px-4 py-1 bg-sunglow text-richblack rounded-full"},o.createElement(f.Z,{to:"/tag/"+l()(e)},e)))))))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var o=r(3897);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var o=r(6015),n=r(9617);function u(t,r,c){return n()?(e.exports=u=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var n=[null];n.push.apply(n,t);var u=new(Function.bind.apply(e,n));return r&&o(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,r){var o=r(4062);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var o=r(3405),n=r(9498),u=r(6116),c=r(2281);e.exports=function(e){return o(e)||n(e)||u(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var o=r(8698).default;e.exports=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var o=r(8698).default,n=r(5036);e.exports=function(e){var t=n(e,"string");return"symbol"===o(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var o=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-post-template-js-58ee170414f99271fafc.js.map