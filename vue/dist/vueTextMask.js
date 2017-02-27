!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueTextMask=t():e.vueTextMask=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(i).default}});var a=r(5),u=n(a);t.default={template:'\n    <input ref="input"\n      :value="value"\n      @input="updateValue($event.target.value)"\n    />\n  ',name:"masked-input",props:{value:{type:String,required:!1,default:""},mask:{type:[Array,Function],required:!0},guide:{type:Boolean,required:!1},placeholderChar:{type:String,required:!1},keepCharPositions:{type:Boolean,required:!1},pipe:{type:Function,required:!1}},mounted:function(){this.bind()},methods:{bind:function(){this.textMaskInputElement=(0,u.default)(o({inputElement:this.$refs.input},this.$options.propsData)),this.updateValue(this.value)},updateValue:function(e){this.textMaskInputElement.update(e),this.$emit("input",this.$refs.input.value)}},watch:{mask:function(e){this.mask!=e&&this.bind()},guide:function(){this.bind()},placeholderChar:function(){this.bind()},keepCharPositions:function(){this.bind()},pipe:function(){this.bind()}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_"},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.guide,u=void 0===n||n,s=r.previousConformedValue,l=void 0===s?a:s,d=r.placeholderChar,f=void 0===d?i.placeholderChar:d,c=r.placeholder,p=void 0===c?(0,o.convertMaskToPlaceholder)(t,f):c,h=r.currentCaretPosition,v=r.keepCharPositions,m=u===!1&&void 0!==l,g=e.length,y=l.length,b=p.length,C=t.length,k=g-y,O=k>0,j=h+(O?-k:0),x=j+Math.abs(k);if(v===!0&&!O){for(var P=a,V=j;V<x;V++)p[V]===f&&(P+=f);e=e.slice(0,j)+P+e.slice(j,g)}for(var w=e.split(a).map(function(e,t){return{char:e,isNew:t>=j&&t<x}}),M=g-1;M>=0;M--){var T=w[M].char;if(T!==f){var S=M>=j&&y===C;T===p[S?M-k:M]&&w.splice(M,1)}}var _=a,R=!1;e:for(var N=0;N<b;N++){var E=p[N];if(E===f){if(w.length>0)for(;w.length>0;){var q=w.shift(),$=q.char,I=q.isNew;if($===f&&m!==!0){_+=f;continue e}if(t[N].test($)){if(v===!0&&I!==!1&&l!==a&&u!==!1&&O){for(var A=w.length,J=null,B=0;B<A;B++){var F=w[B];if(F.char!==f&&F.isNew===!1)break;if(F.char===f){J=B;break}}null!==J?(_+=$,w.splice(J,1)):N--}else _+=$;continue e}R=!0}m===!1&&(_+=p.substr(N,b));break}_+=E}if(m&&O===!1){for(var L=null,W=0;W<_.length;W++)p[W]===f&&(L=W);_=null!==L?_.substr(0,L+1):a}return{conformedValue:_,meta:{someCharsRejected:R}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=r(3),i=r(1),a=""},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var t=[],r=void 0;r=e.indexOf(l),r!==-1;)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isString=o,t.isNumber=i,t.processCaretTraps=a;var u=r(1),s=[],l="[]"},function(e,t){"use strict";function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.currentCaretPosition,a=void 0===i?0:i,u=e.conformedValue,s=e.rawValue,l=e.placeholderChar,d=e.placeholder,f=e.indexesOfPipedChars,c=void 0===f?n:f,p=e.caretTrapIndexes,h=void 0===p?n:p;if(0===a)return 0;var v=s.length,m=r.length,g=d.length,y=u.length,b=v-m,C=b>0,k=0===m,O=b>1&&!C&&!k;if(O)return a;var j=C&&(r===u||u===d),x=0;if(j?x=a-b:!function(){for(var e=u.toLowerCase(),t=s.toLowerCase(),r=t.substr(0,a).split(o),n=r.filter(function(t){return e.indexOf(t)!==-1}),i=n[n.length-1],f=c.map(function(t){return e[t]}),p=f.filter(function(e){return e===i}).length,h=n.filter(function(e){return e===i}).length,v=d.substr(0,d.indexOf(l)).split(o).filter(function(e,t){return e===i&&s[t]!==e}).length,m=v+h+p,g=0,b=0;b<y;b++){var C=e[b];if(x=b+1,C===i&&g++,g>=m)break}}(),C){for(var P=x,V=x;V<=g;V++)if(d[V]===l&&(P=V),d[V]===l||h.indexOf(V)!==-1||V===g)return P}else for(var w=x;w>=0;w--)if(d[w-1]===l||h.indexOf(w)!==-1||0===w)return w}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[],o=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.inputElement,r=e.mask,n=e.guide,o=e.pipe,l=e.placeholderChar,f=void 0===l?h.placeholderChar:l,g=e.onAccept,b=e.onReject,C=e.keepCharPositions,k=void 0!==C&&C;("undefined"==typeof r?"undefined":s(r))===y&&void 0!==r.pipe&&void 0!==r.mask&&(o=r.pipe,r=r.mask);var O={previousConformedValue:m,previousOnRejectRawValue:m},j=void 0,x=void 0;return r instanceof Array&&(j=(0,p.convertMaskToPlaceholder)(r,f)),{state:O,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.value;if(e!==O.previousConformedValue){var l=a(e),h=t.selectionStart,y=O.previousConformedValue,C=void 0;if(("undefined"==typeof r?"undefined":s(r))===v){x=r(l,{currentCaretPosition:h,previousConformedValue:y,placeholderChar:f});var P=(0,p.processCaretTraps)(x),V=P.maskWithoutCaretTraps,w=P.indexes;x=V,C=w,j=(0,p.convertMaskToPlaceholder)(x,f)}else x=r;var M={previousConformedValue:y,guide:n,placeholderChar:f,pipe:o,placeholder:j,currentCaretPosition:h,keepCharPositions:k},T=(0,c.default)(l,x,M),S=T.conformedValue,_=T.meta.someCharsRejected,R=("undefined"==typeof o?"undefined":s(o))===v,N={};R&&(N=o(S,u({rawValue:l},M)),N===!1?N={value:y,rejected:!0}:(0,p.isString)(N)&&(N={value:N}));var E=R?N.value:S,q=(0,d.default)({previousConformedValue:y,conformedValue:E,placeholder:j,rawValue:l,currentCaretPosition:h,placeholderChar:f,indexesOfPipedChars:N.indexesOfPipedChars,caretTrapIndexes:C}),$=E===j&&0===q,I=$?m:E;if(O.previousConformedValue=I,t.value!==I){t.value=I,i(t,q),("undefined"==typeof g?"undefined":s(g))===v&&I!==y&&I!==j&&(O.previousOnRejectRawValue=null,g());var A=l.length<y.length;("undefined"==typeof b?"undefined":s(b))===v&&(_||N.rejected)&&A===!1&&O.previousOnRejectRawValue!==e&&(O.previousOnRejectRawValue=e,b({conformedValue:E,pipeRejection:N.rejected,maskRejection:_}))}}}}}function i(e,t){document.activeElement===e&&e.setSelectionRange(t,t,g)}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var l=r(4),d=n(l),f=r(2),c=n(f),p=r(3),h=r(1),v="function",m="",g="none",y="object"}])});