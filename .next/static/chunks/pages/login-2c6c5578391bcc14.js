(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return v}});var n=r(3636),o=r(5697),a=r.n(o),i=r(7294);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function b(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var y=["style"],m=!1;try{m=!0}catch(e){}function d(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var v=i.forwardRef(function(e,t){var r,o,a,i,l,c,p,b,y,x,O,j,w,k,P,_,N,S,I,T=e.icon,E=e.mask,A=e.symbol,C=e.className,R=e.title,z=e.titleId,Z=e.maskId,W=d(T),D=h("classes",[].concat(f((o=e.beat,a=e.fade,i=e.beatFade,l=e.bounce,c=e.shake,p=e.flash,b=e.spin,y=e.spinPulse,x=e.spinReverse,O=e.pulse,j=e.fixedWidth,w=e.inverse,k=e.border,P=e.listItem,_=e.flip,N=e.size,S=e.rotation,I=e.pull,Object.keys((u(r={"fa-beat":o,"fa-fade":a,"fa-beat-fade":i,"fa-bounce":l,"fa-shake":c,"fa-flash":p,"fa-spin":b,"fa-spin-reverse":x,"fa-spin-pulse":y,"fa-pulse":O,"fa-fw":j,"fa-inverse":w,"fa-border":k,"fa-li":P,"fa-flip":!0===_,"fa-flip-horizontal":"horizontal"===_||"both"===_,"fa-flip-vertical":"vertical"===_||"both"===_},"fa-".concat(N),null!=N),u(r,"fa-rotate-".concat(S),null!=S&&0!==S),u(r,"fa-pull-".concat(I),null!=I),u(r,"fa-swap-opacity",e.swapOpacity),r)).map(function(e){return r[e]?e:null}).filter(function(e){return e}))),f(C.split(" ")))),F=h("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),L=h("mask",d(E)),U=(0,n.qv)(W,s(s(s(s({},D),F),L),{},{symbol:A,title:R,titleId:z,maskId:Z}));if(!U)return!function(){if(!m&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",W),null;var q=U.abstract,Q={ref:t};return Object.keys(e).forEach(function(t){v.defaultProps.hasOwnProperty(t)||(Q[t]=e[t])}),g(q[0],Q)});v.displayName="FontAwesomeIcon",v.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},v.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var g=(function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map(function(r){return e(t,r)}),a=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),n=b(t.slice(0,r)),o=t.slice(r+1).trim();return n.startsWith("webkit")?e[n.charAt(0).toUpperCase()+n.slice(1)]=o:e[n]=o,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e},{attrs:{}}),i=n.style,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,y);return a.attrs.style=s(s({},a.attrs.style),void 0===i?{}:i),t.apply(void 0,[r.tag,s(s({},a.attrs),l)].concat(f(o)))}).bind(null,i.createElement)},6429:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(8e3)}])},5999:function(e,t,r){"use strict";var n=r(5893),o=r(1163),a=r(7294),i=r(7864);t.Z=e=>t=>{let r=(0,o.useRouter)(),[l,s]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{let e=(0,i.Z)().access_token;e||"/login"===r.pathname?e&&"/login"===r.pathname?r.replace("/"):s(!0):r.replace("/login")},[r]),l)?(0,n.jsx)(e,{...t}):null}},8e3:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(5893),o=r(7294),a=r(5999),i=r(4582),l=r(5675),s=r.n(l),c=function(e){let{imgThumb:t,children:r}=e;return(0,n.jsx)(i.Z,{childrenClasses:"pt-0 pb-0 min-h-0",children:(0,n.jsxs)("div",{className:"login-page-wrapper w-full relative",children:[(0,n.jsx)("div",{className:"w-full h-full  min-h-screen absolute left-0 top-0",children:(0,n.jsxs)("div",{className:"w-full h-full relative z-10",children:[t&&(0,n.jsx)(s(),{layout:"fill",src:"".concat("https://ecommerce.cdcscui.com/api"+t),alt:"login"}),(0,n.jsx)("div",{className:"bg-[#232532] bg-opacity-50 relative w-full h-full absolute left-0 top-0"})]})}),(0,n.jsx)("div",{className:"container-x mx-auto",children:(0,n.jsx)("div",{className:"lg:flex items-center justify-center relative pt-[60px] pb-[114px]",children:(0,n.jsx)("div",{className:"lg:w-[572px] w-full h-[630px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-qpurplelow/10 rounded-lg relative z-20",children:r&&r})})})]})})},u=r(7979),f=r(9473),p=(0,a.Z)(function(e){let{isLayout:t=!0}=e,{websiteSetup:r}=(0,f.v9)(e=>e.websiteSetup),[a,i]=(0,o.useState)(null);return((0,o.useEffect)(()=>{r&&i(r.payload.login_page_image)},[r]),t)?(0,n.jsx)(c,{imgThumb:a&&a.image,children:(0,n.jsx)(u.Z,{})}):(0,n.jsx)(c,{})}),b=r(5638);function y(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.Z,{title:"Shopus | Login"}),(0,n.jsx)(p,{})]})}},5638:function(e,t,r){"use strict";var n=r(5893),o=r(9008),a=r.n(o);r(7294);var i=r(1369);t.Z=function(e){let{title:t}=e,{favicon:r}=(0,i.Z)();return(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"".concat(r?"https://ecommerce.cdcscui.com/api"+r:"/favico.svg")})]})}},9008:function(e,t,r){e.exports=r(4764)},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[582,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);