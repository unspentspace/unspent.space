(self.webpackChunkobsidian_starter=self.webpackChunkobsidian_starter||[]).push([[837],{8797:function(e,t,u){var n=1/0,r="[object Symbol]",f=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a="\\ud800-\\udfff",c="\\u2700-\\u27bf",i="a-z\\xdf-\\xf6\\xf8-\\xff",l="A-Z\\xc0-\\xd6\\xd8-\\xde",s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",x="['’]",d="["+s+"]",b="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",p="\\d+",m="["+c+"]",g="["+i+"]",E="[^"+a+s+p+c+i+l+"]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",j="[\\ud800-\\udbff][\\udc00-\\udfff]",v="["+l+"]",A="(?:"+g+"|"+E+")",O="(?:"+v+"|"+E+")",h="(?:['’](?:d|ll|m|re|s|t|ve))?",I="(?:['’](?:D|LL|M|RE|S|T|VE))?",C="(?:"+b+"|\\ud83c[\\udffb-\\udfff])"+"?",S="[\\ufe0e\\ufe0f]?",z=S+C+("(?:\\u200d(?:"+["[^"+a+"]",y,j].join("|")+")"+S+C+")*"),L="(?:"+[m,y,j].join("|")+")"+z,U=RegExp(x,"g"),Z=RegExp(b,"g"),k=RegExp([v+"?"+g+"+"+h+"(?="+[d,v,"$"].join("|")+")",O+"+"+I+"(?="+[d,v+A,"$"].join("|")+")",v+"?"+A+"+"+h,v+"+"+I,p,L].join("|"),"g"),N=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,T="object"==typeof u.g&&u.g&&u.g.Object===Object&&u.g,R="object"==typeof self&&self&&self.Object===Object&&self,w=T||R||Function("return this")();var D,G=(D={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==D?void 0:D[e]});var V=Object.prototype.toString,M=w.Symbol,Y=M?M.prototype:void 0,_=Y?Y.toString:void 0;function H(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&V.call(e)==r}(e))return _?_.call(e):"";var t=e+"";return"0"==t&&1/e==-n?"-0":t}function J(e){return null==e?"":H(e)}var $,F=($=function(e,t,u){return e+(u?"-":"")+t.toLowerCase()},function(e){return function(e,t,u,n){var r=-1,f=e?e.length:0;for(n&&f&&(u=e[++r]);++r<f;)u=t(u,e[r],r,e);return u}(function(e,t,u){return e=J(e),void 0===(t=u?void 0:t)?function(e){return N.test(e)}(e)?function(e){return e.match(k)||[]}(e):function(e){return e.match(f)||[]}(e):e.match(t)||[]}(function(e){return(e=J(e))&&e.replace(o,G).replace(Z,"")}(e).replace(U,"")),$,"")});e.exports=F},824:function(e,t,u){"use strict";u.d(t,{x:function(){return r}});var n=u(1082);var r=()=>{const{allMdx:e}=(0,n.useStaticQuery)("586476952");return e.group.sort((function(e,t){return t.totalCount-e.totalCount}))}},2042:function(e,t,u){"use strict";u.r(t);var n=u(7294),r=u(6011),f=u(8797),o=u.n(f),a=u(1082),c=u(824),i=u(1349);t.default=e=>{let{}=e;const t=(0,c.x)();return n.createElement(r.Z,{title:"Melbourne | "+i.SITE_TITLE},n.createElement("div",{className:"my-2 py-4 border-b border-slate-200"},n.createElement("h1",{className:"mr-2 text-3xl md:text-6xl font-black"},"unspent.space/melbourne")),n.createElement("ul",{className:"list-disc mt-4"},t.map((e=>n.createElement("li",{key:e.fieldValue},n.createElement(a.Link,{to:"/tag/"+o()(e.fieldValue)+"/",className:"capitalize"},o()(e.fieldValue)," (",e.totalCount,")"))))))}}}]);
//# sourceMappingURL=component---src-pages-melbourne-tsx-b2f80532eec4a4f95b6b.js.map