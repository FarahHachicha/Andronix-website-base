(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{308:function(t,e,r){"use strict";var n=r(21),o=r(12),c=r(109),l=r(31),f=r(24),d=r(62),v=r(218),_=r(88),N=r(13),I=r(90),h=r(89).f,x=r(49).f,E=r(27).f,y=r(311).trim,w="Number",m=o[w],A=m.prototype,C=d(I(A))==w,S=function(t){var e,r,n,o,c,l,f,code,d=_(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=y(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c(w,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var k,F=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof F&&(C?N((function(){A.valueOf.call(r)})):d(r)!=w)?v(new m(S(e)),r,F):S(e)},T=n?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;T.length>M;M++)f(m,k=T[M])&&!f(F,k)&&E(F,k,x(m,k));F.prototype=A,A.constructor=F,l(o,w,F)}},311:function(t,e,r){var n=r(34),o="["+r(312)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},312:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},315:function(t,e,r){"use strict";r.r(e);r(41),r(61),r(308);var n={props:{title:{type:String,required:!0},description:{type:String,required:!0},step:{type:Number,required:!0},color:{type:String,required:!0}},name:"StepsCard"},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"bg-card_background rounded flex relative"},[e("div",{staticClass:"w-1/4 rounded-l flex justify-center items-center px-4 py-2",class:t.color},[t._t("default")],2),t._v(" "),e("div",{staticClass:"text-white w-3/4 font-sans px-4 py-2"},[e("h2",{staticClass:"font-bold mb-2 pr-16"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),e("p",{staticClass:"text-sm break-normal"},[t._v(t._s(t.description))])]),t._v(" "),e("div",{staticClass:"absolute bg-opacity-60 text-white -top-3 -right-3 rounded-full py-1 px-3 flex items-center justify-center",class:t.color},[t._v("\n      "+t._s(t.step)+"\n    ")])])])}),[],!1,null,"3546ce31",null);e.default=component.exports}}]);