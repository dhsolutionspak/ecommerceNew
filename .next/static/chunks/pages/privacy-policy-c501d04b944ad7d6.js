(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return x}});var n=r(3636),o=r(5697),a=r.n(o),i=r(7294);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function b(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var d=["style"],y=!1;try{y=!0}catch(e){}function m(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var x=i.forwardRef(function(e,t){var r,o,a,i,s,c,p,b,d,j,O,g,w,P,k,_,N,S,I,T=e.icon,E=e.mask,A=e.symbol,C=e.className,R=e.title,Z=e.titleId,z=e.maskId,F=m(T),W=h("classes",[].concat(f((o=e.beat,a=e.fade,i=e.beatFade,s=e.bounce,c=e.shake,p=e.flash,b=e.spin,d=e.spinPulse,j=e.spinReverse,O=e.pulse,g=e.fixedWidth,w=e.inverse,P=e.border,k=e.listItem,_=e.flip,N=e.size,S=e.rotation,I=e.pull,Object.keys((u(r={"fa-beat":o,"fa-fade":a,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":c,"fa-flash":p,"fa-spin":b,"fa-spin-reverse":j,"fa-spin-pulse":d,"fa-pulse":O,"fa-fw":g,"fa-inverse":w,"fa-border":P,"fa-li":k,"fa-flip":!0===_,"fa-flip-horizontal":"horizontal"===_||"both"===_,"fa-flip-vertical":"vertical"===_||"both"===_},"fa-".concat(N),null!=N),u(r,"fa-rotate-".concat(S),null!=S&&0!==S),u(r,"fa-pull-".concat(I),null!=I),u(r,"fa-swap-opacity",e.swapOpacity),r)).map(function(e){return r[e]?e:null}).filter(function(e){return e}))),f(C.split(" ")))),D=h("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),q=h("mask",m(E)),L=(0,n.qv)(F,l(l(l(l({},W),D),q),{},{symbol:A,title:R,titleId:Z,maskId:z}));if(!L)return!function(){if(!y&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",F),null;var U=L.abstract,M={ref:t};return Object.keys(e).forEach(function(t){x.defaultProps.hasOwnProperty(t)||(M[t]=e[t])}),v(U[0],M)});x.displayName="FontAwesomeIcon",x.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},x.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var v=(function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map(function(r){return e(t,r)}),a=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),n=b(t.slice(0,r)),o=t.slice(r+1).trim();return n.startsWith("webkit")?e[n.charAt(0).toUpperCase()+n.slice(1)]=o:e[n]=o,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e},{attrs:{}}),i=n.style,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,d);return a.attrs.style=l(l({},a.attrs.style),void 0===i?{}:i),t.apply(void 0,[r.tag,l(l({},a.attrs),s)].concat(f(o)))}).bind(null,i.createElement)},9587:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return r(3453)}])},3453:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return u},default:function(){return f}});var n=r(5893),o=r(7294),a=r(5638),i=r(6604),s=r(4582),l=r(3890);function c(e){let{datas:t}=e,{privacyPolicy:r}=t,[a,c]=(0,o.useState)(null);return(0,o.useEffect)(()=>{c((0,l.Z)())},[]),(0,n.jsx)(s.Z,{childrenClasses:"pt-0 pb-0",children:(0,n.jsxs)("div",{className:"terms-condition-page w-full bg-white pb-[30px]",children:[(0,n.jsx)("div",{className:"w-full mb-[30px]",children:(0,n.jsx)(i.Z,{breadcrumb:[{name:a&&a.home,path:"/"},{name:a&&a.Privacy_Policy,path:"privacy-policy"}],title:"Privacy Policy"})}),(0,n.jsx)("div",{className:"w-full pb-[120px]",children:(0,n.jsx)("div",{className:"container-x mx-auto content-body",children:r&&(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:r.privacy_policy}})})})]})})}var u=!0;function f(e){let{data:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{title:"Privacy Policy"}),(0,n.jsx)(c,{datas:t})]})}},3811:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893);function o(e){let{paths:t=[{name:"home",path:"/"}]}=e;return(0,n.jsx)(n.Fragment,{children:t&&t.length>0&&(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px] print:hidden",children:t.map(e=>(0,n.jsxs)("span",{children:[(0,n.jsx)("a",{href:e.path,children:(0,n.jsx)("span",{className:"mx-1 capitalize",children:e.name})}),(0,n.jsx)("span",{className:"sperator",children:"/"})]},Math.random()))})},Math.random())})}},5638:function(e,t,r){"use strict";var n=r(5893),o=r(9008),a=r.n(o);r(7294);var i=r(1369);t.Z=function(e){let{title:t}=e,{favicon:r}=(0,i.Z)();return(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"".concat(r?"https://ecommerce.cdcscui.com/api"+r:"/favico.svg")})]})}},6604:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893),o=r(3811);function a(e){let{title:t,breadcrumb:r=[]}=e;return(0,n.jsx)("div",{className:"page-title-wrapper w-full h-[173px] py-10 bg-qpurplelow/10",children:(0,n.jsxs)("div",{className:"container-x mx-auto",children:[(0,n.jsx)("div",{className:"mb-5",children:(0,n.jsx)(o.Z,{paths:r})}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("h1",{className:"text-3xl font-semibold text-qblack capitalize",children:t})})]})})}},9008:function(e,t,r){e.exports=r(4764)},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[582,774,888,179],function(){return e(e.s=9587)}),_N_E=e.O()}]);