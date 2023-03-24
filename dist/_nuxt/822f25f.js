(window.webpackJsonp=window.webpackJsonp||[]).push([[25,3,5,6],{301:function(t,e,r){"use strict";r.r(e);var n={props:{heading:{type:String,required:!0},sub_heading:{type:String,required:!0},deco_heading:{type:String,required:!0}},name:"Heading"},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("XyzTransition",{attrs:{"appear-visible":!0,duration:"auto"}},[e("div",{staticClass:"py-5 pb-16 px-6 md:pb-24 lg:max-w-screen-md mx-auto"},[e("div",{staticClass:"flex-col space-y-4",attrs:{xyz:"fade flip-down duration-10 delay-2 stagger ease-out-back"}},[e("h2",{staticClass:"deco-heading xyz-nested"},[t._v(t._s(t.deco_heading))]),t._v(" "),e("h2",{staticClass:"heading xyz-nested"},[t._v("\n        "+t._s(t.heading))]),t._v(" "),e("h2",{staticClass:"sub-heading xyz-nested"},[t._v(t._s(t.sub_heading))])])])])}),[],!1,null,"dc4f58ac",null);e.default=component.exports},302:function(t,e,r){"use strict";var n=r(9),o=r(303);n({target:"String",proto:!0,forced:r(304)("link")},{link:function(t){return o(this,"a","href",t)}})},303:function(t,e,r){var n=r(34),o=/"/g;t.exports=function(t,e,r,l){var c=String(n(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(l).replace(o,"&quot;")+'"'),d+">"+c+"</"+e+">"}},304:function(t,e,r){var n=r(13);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},305:function(t,e,r){"use strict";r.r(e);r(302),r(108);var n={props:{backgroundColor:{type:String},backgroundHoverColor:{type:String},textColor:{type:String},textHoverColor:{type:String},label:{type:String,require:!0},link:{type:String}},name:"PrimaryTextButton"},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{on:{click:function(e){return t.$emit("click")}}},[t.link?e("a",{attrs:{target:"_blank",href:t.link}},[e("div",{staticClass:"cursor-pointer rounded px-4 py-3 hover:-translate-y-1.5 transition transform duration-300",class:"".concat(t.backgroundColor?t.backgroundColor:"bg-primary-600"," hover:").concat(t.backgroundHoverColor?t.backgroundHoverColor:"bg-white","\n       ").concat(t.textColor?t.textColor:"text-white"," hover:").concat(t.textHoverColor?t.textHoverColor:"text-primary-600")},[e("p",{staticClass:"text-center text-current font-bold"},[t._v(t._s(t.label))])])]):e("div",{staticClass:"cursor-pointer rounded px-4 py-3 hover:-translate-y-1.5 transition transform duration-300",class:"".concat(t.backgroundColor?t.backgroundColor:"bg-primary-600"," hover:").concat(t.backgroundHoverColor?t.backgroundHoverColor:"bg-white","\n       ").concat(t.textColor?t.textColor:"text-white"," hover:").concat(t.textHoverColor?t.textHoverColor:"text-primary-600")},[e("p",{staticClass:"text-center text-current font-bold"},[t._v(t._s(t.label))])])])}),[],!1,null,"08fdf1f0",null);e.default=component.exports},314:function(t,e,r){"use strict";r.r(e);var n={components:{PrimaryTextButton:r(305).default},props:{title:{type:String,required:!0},desc:{type:String,required:!0},color:{type:String},buttonColor:{type:String,required:!0},buttonLink:{type:String},buttonInternalLink:{type:String},buttonText:{type:String}},name:"CtaCard"},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex-col justify-between"},[e("div",{staticClass:"rounded-t-lg md:rounded-t-lg bg-card_background pb-6 pt-3 px-6"},[e("div",{staticClass:"my-4 w-14 h-14 mx-auto bg-background flex items-center justify-center rounded-full p-3"},[t._t("default")],2),t._v(" "),e("div",{staticClass:"text-white font-sans text-left text-center"},[e("h2",{staticClass:"font-extrabold text-2xl mb-4"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),e("p",{},[t._v("\n          "+t._s(t.desc)+" ")])]),t._v(" "),e("div",{staticClass:"mt-5 flex items-center justify-center"},[t.buttonInternalLink?e("primary-text-button",{attrs:{backgroundColor:t.buttonColor,label:t.buttonText?t.buttonText:"Join now!",textHoverColor:t.buttonColor},on:{click:function(e){return t.$router.push(t.buttonInternalLink)}}}):e("primary-text-button",{attrs:{link:t.buttonLink,backgroundColor:t.buttonColor,label:t.buttonText?t.buttonText:"Join now!",textHoverColor:t.buttonColor}})],1)]),t._v(" "),e("div",{staticClass:"h-1.5 rounded-b-lg",class:t.color?t.color:"bg-primary-400"})])])}),[],!1,null,"1c8501e0",null);e.default=component.exports},353:function(t){t.exports=JSON.parse('{"platforms":[{"param":"Email","value":"Reach out to us at support@andronix.app","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" class=\\"fill-current text-blue-400 h-5 w-5\\" viewBox=\\"0 0 20 20\\" fill=\\"currentColor\\">\\n  <path fill-rule=\\"evenodd\\" d=\\"M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z\\" clip-rule=\\"evenodd\\" />\\n</svg>","color":"bg-blue-400","link":"mailto:support@andronix.app","ctaText":"Reach out!"},{"param":"Discord","value":"Get help from our 8500+ community members.","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" class=\\"fill-current text-green-400 h-5 w-5\\" viewBox=\\"0 0 20 20\\" fill=\\"currentColor\\">\\n  <path fill-rule=\\"evenodd\\" d=\\"M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z\\" clip-rule=\\"evenodd\\" />\\n</svg>","color":"bg-green-400","link":"https://chat.andronix.app","ctaText":"Chat with us!"}]}')},373:function(t,e,r){"use strict";r.r(e);r(302);var n=r(353),o={name:"contact",components:{CtaCard:r(314).default},data:function(){return{contact:n.platforms}}},l=r(18),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("XyzTransition",{attrs:{"appear-visible":!0,duration:"auto"}},[e("div",[e("div",{staticClass:"h-screen m-0 bg-background w-full bg-landing-pattern bg-top flex items-center justify-center flex-col"},[e("Heading",{staticClass:"px-10",attrs:{heading:"Connect with us!",deco_heading:"ANDRONIX",sub_heading:"Facing any issues? We are here to help you with all your queries and issues."}})],1),t._v(" "),e("div",{staticClass:"grid px-12 md:px-24 grid-cols-2 pb-16 md:pb-24 justify-center items-center gap-5"},t._l(t.contact,(function(r){return e("cta-card",{key:r.color,attrs:{title:r.param,buttonColor:r.color,buttonLink:r.link,desc:r.value,color:r.color,"button-text":r.ctaText}},[e("div",{domProps:{innerHTML:t._s(r.icon)}})])})),1)])])}),[],!1,null,"5642e53a",null);e.default=component.exports;installComponents(component,{Heading:r(301).default})}}]);