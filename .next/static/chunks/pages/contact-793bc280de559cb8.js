(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{7814:function(e,t,n){"use strict";n.d(t,{G:function(){return b}});var r=n(3636),s=n(5697),a=n.n(s),l=n(7294);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){p(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var x=["style"],m=!1;try{m=!0}catch(e){}function C(e){return e&&"object"===o(e)&&e.prefix&&e.iconName&&e.icon?e:r.Qc.icon?r.Qc.icon(e):null===e?null:e&&"object"===o(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?p({},e,t):{}}var b=l.forwardRef(function(e,t){var n,s,a,l,i,o,d,f,x,y,v,g,w,O,N,A,k,L,E,M=e.icon,S=e.mask,Z=e.symbol,_=e.className,P=e.title,q=e.titleId,I=e.maskId,T=C(M),R=h("classes",[].concat(u((s=e.beat,a=e.fade,l=e.beatFade,i=e.bounce,o=e.shake,d=e.flash,f=e.spin,x=e.spinPulse,y=e.spinReverse,v=e.pulse,g=e.fixedWidth,w=e.inverse,O=e.border,N=e.listItem,A=e.flip,k=e.size,L=e.rotation,E=e.pull,Object.keys((p(n={"fa-beat":s,"fa-fade":a,"fa-beat-fade":l,"fa-bounce":i,"fa-shake":o,"fa-flash":d,"fa-spin":f,"fa-spin-reverse":y,"fa-spin-pulse":x,"fa-pulse":v,"fa-fw":g,"fa-inverse":w,"fa-border":O,"fa-li":N,"fa-flip":!0===A,"fa-flip-horizontal":"horizontal"===A||"both"===A,"fa-flip-vertical":"vertical"===A||"both"===A},"fa-".concat(k),null!=k),p(n,"fa-rotate-".concat(L),null!=L&&0!==L),p(n,"fa-pull-".concat(E),null!=E),p(n,"fa-swap-opacity",e.swapOpacity),n)).map(function(e){return n[e]?e:null}).filter(function(e){return e}))),u(_.split(" ")))),z=h("transform","string"==typeof e.transform?r.Qc.transform(e.transform):e.transform),F=h("mask",C(S)),W=(0,r.qv)(T,c(c(c(c({},R),z),F),{},{symbol:Z,title:P,titleId:q,maskId:I}));if(!W)return!function(){if(!m&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",T),null;var D=W.abstract,H={ref:t};return Object.keys(e).forEach(function(t){b.defaultProps.hasOwnProperty(t)||(H[t]=e[t])}),j(D[0],H)});b.displayName="FontAwesomeIcon",b.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},b.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var j=(function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var s=(n.children||[]).map(function(n){return e(t,n)}),a=Object.keys(n.attributes||{}).reduce(function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=r.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(":"),r=f(t.slice(0,n)),s=t.slice(n+1).trim();return r.startsWith("webkit")?e[r.charAt(0).toUpperCase()+r.slice(1)]=s:e[r]=s,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[f(t)]=r}return e},{attrs:{}}),l=r.style,i=function(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(r,x);return a.attrs.style=c(c({},a.attrs.style),void 0===l?{}:l),t.apply(void 0,[n.tag,c(c({},a.attrs),i)].concat(u(s)))}).bind(null,l.createElement)},8105:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(2078)}])},2078:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return x},default:function(){return m}});var r=n(5893),s=n(7294),a=n(859),l=n(6604),i=n(4582),c=n(6703),o=n(5678),p=n(6707),u=n(3890);function d(e){let{datas:t}=e,[n,d]=(0,s.useState)(""),[f,x]=(0,s.useState)(""),[m,C]=(0,s.useState)(""),[h,b]=(0,s.useState)(""),[j,y]=(0,s.useState)(null),[v,g]=(0,s.useState)(!1),[w,O]=(0,s.useState)(null);return(0,s.useEffect)(()=>{O((0,u.Z)())},[]),(0,r.jsxs)(i.Z,{childrenClasses:"pt-0 pb-0",children:[(0,r.jsx)("div",{className:"page-title",children:(0,r.jsx)(l.Z,{title:w&&w.Contact,breadcrumb:[{name:w&&w.home,path:"/"},{name:w&&w.Contact,path:"/contact"}]})}),(0,r.jsx)("div",{className:"contact-wrapper w-full bg-white pt-10 pb-[120px]",children:(0,r.jsx)("div",{className:"container-x mx-auto",children:(0,r.jsxs)("div",{className:"main-wrapper w-full lg:flex lg:space-x-[30px]",children:[(0,r.jsx)("div",{className:"lg:w-1/2 w-full",children:t.contact&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-[22px] font-semibold text-qblack leading-[30px] mb-1",children:t.contact.title}),(0,r.jsx)("p",{className:"text-[15px] text-qgray leading-[30px] mb-5",children:t.contact.description}),(0,r.jsxs)("div",{className:"flex xl:flex-row flex-col xl:space-x-[30px] xl:space-y-0 space-y-[30px] mb-[30px]",children:[(0,r.jsxs)("div",{className:"xl:w-1/2 w-full rounded  h-[196px] flex flex-col item justify-center bg-white border border-qpurple p-5",children:[(0,r.jsx)("div",{className:"flex justify-center mb-3 ",children:(0,r.jsxs)("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("circle",{cx:"22",cy:"22",r:"21.5",stroke:"#AE1C9A"}),(0,r.jsx)("path",{d:"M10.4708 17.7624L10.4708 17.7624C10.4976 19.0577 10.9088 20.276 11.473 21.4906C13.5525 25.9672 16.7815 29.3804 21.081 31.7969C22.5665 32.6319 24.0756 33.2848 25.7334 33.4698L25.7335 33.4698C26.8399 33.5935 27.7241 33.3528 28.4392 32.5473L28.4392 32.5473C28.724 32.2265 29.0458 31.9115 29.3517 31.612C29.514 31.4532 29.6717 31.2987 29.8172 31.15L29.8174 31.1498C30.2031 30.7562 30.3337 30.4343 30.336 30.1731C30.3383 29.9141 30.2153 29.5973 29.8364 29.2104L29.8363 29.2104C28.988 28.3441 28.1276 27.4873 27.2602 26.637L27.2601 26.6369C26.8659 26.2503 26.5505 26.126 26.2959 26.1268C26.0403 26.1277 25.7225 26.2552 25.3251 26.6438L25.325 26.6439C24.8114 27.1458 24.3044 27.6511 23.8109 28.166L23.8108 28.1661C23.6684 28.3146 23.4735 28.4645 23.2169 28.5099C22.9464 28.5578 22.7021 28.4739 22.5009 28.341C22.2427 28.1708 21.9677 28.0004 21.686 27.8258C21.0293 27.4187 20.3358 26.9889 19.7325 26.4866C18.0622 25.0969 16.5823 23.48 15.5981 21.4476C15.4993 21.2439 15.4281 21.0037 15.4728 20.7408C15.5179 20.4753 15.6665 20.2715 15.8341 20.112L15.8342 20.1119C16.3521 19.6191 16.86 19.1182 17.3507 18.6035L17.3508 18.6034C17.7203 18.2159 17.84 17.9093 17.8397 17.663C17.8395 17.4176 17.7199 17.1127 17.3474 16.7286L17.3474 16.7286C16.4823 15.8366 15.605 14.9566 14.7136 14.0922C14.3582 13.7475 14.053 13.6318 13.7983 13.6338C13.5412 13.6359 13.2305 13.7585 12.8676 14.1078L10.4708 17.7624ZM10.4708 17.7624L10.4706 17.757M10.4708 17.7624L10.4706 17.757M10.4706 17.757C10.4433 16.8876 10.7133 16.1864 11.3505 15.6062M10.4706 17.757L11.3505 15.6062M11.3505 15.6062C11.6606 15.3245 11.9774 15.0025 12.2815 14.6935C12.4844 14.4873 12.6817 14.2868 12.8675 14.1079L11.3505 15.6062Z",fill:"#AE1C9A",stroke:"#AE1C9A"}),(0,r.jsx)("path",{d:"M32.2315 21.3816C32.0539 21.4122 31.876 21.4429 31.6979 21.4737C31.0372 19.0025 29.9235 16.9878 28.3306 15.4436C26.7374 13.8992 24.6913 12.8511 22.2058 12.2728C22.239 12.0279 22.2727 11.7796 22.3066 11.53C26.7277 12.1754 31.3242 15.906 32.4497 21.344C32.377 21.3565 32.3043 21.369 32.2315 21.3816Z",fill:"#AE1C9A",stroke:"#AE1C9A"}),(0,r.jsx)("path",{d:"M25.1799 18.6377C24.3285 17.812 23.2491 17.2404 21.9585 16.9053C21.9807 16.7507 22.0026 16.5975 22.0243 16.4457C22.0391 16.3421 22.0538 16.2392 22.0685 16.1369C24.6502 16.5866 27.1312 18.8191 27.7615 21.6523C27.6473 21.6723 27.5333 21.6922 27.419 21.7121C27.2786 21.7366 27.1375 21.7612 26.9946 21.7861C26.6295 20.5174 26.0301 19.4623 25.1799 18.6377Z",fill:"#AE1C9A",stroke:"#AE1C9A"})]})}),(0,r.jsx)("p",{className:"text-[22px] text-qblack leading-[30px] text-center font-semibold capitalize",children:w&&w.phone}),(0,r.jsx)("p",{className:"text-[15px] text-qblack leading-[30px] text-center",children:t.contact.phone})]}),(0,r.jsxs)("div",{className:"xl:w-1/2 w-full rounded h-[196px] flex flex-col item justify-center bg-white border border-qpurple p-5",children:[(0,r.jsx)("div",{className:"flex justify-center mb-3 ",children:(0,r.jsxs)("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 43C33.598 43 43 33.598 43 22C43 10.402 33.598 1 22 1C10.402 1 1 10.402 1 22C1 33.598 10.402 43 22 43ZM22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z",fill:"#AE1C9A"}),(0,r.jsx)("path",{d:"M11.0183 18.6455C11.2024 18.761 11.3464 18.8458 11.4851 18.9382C14.2825 20.8029 17.0792 22.6676 19.8759 24.5331C21.3894 25.5429 22.6125 25.5413 24.1329 24.5277C26.9304 22.663 29.7271 20.7975 32.5237 18.9328C32.6539 18.8465 32.7856 18.7634 32.9659 18.6478C32.9782 18.8042 32.9959 18.9212 32.9959 19.0391C32.9974 22.1169 32.9997 25.1939 32.9959 28.2718C32.9944 29.6582 32.1625 30.4854 30.773 30.4862C24.9186 30.4877 19.0641 30.4877 13.2096 30.4862C11.8456 30.4854 11.0037 29.6543 11.0022 28.3003C10.9983 25.2086 11.0006 22.1169 11.0014 19.0245C11.0022 18.9151 11.0114 18.8065 11.0183 18.6455Z",fill:"#AE1C9A"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.001 19.8174C11.001 19.7663 11.001 19.7152 11.001 19.6641C11.001 19.6641 11.001 19.664 11.001 19.664C11.0011 19.4508 11.0011 19.2376 11.0012 19.0245C11.0017 18.9566 11.0054 18.889 11.0098 18.8091C11.0126 18.7601 11.0155 18.7066 11.0181 18.6455C11.0841 18.6869 11.1449 18.7243 11.2021 18.7596C11.3047 18.8227 11.3959 18.8789 11.4849 18.9382M11.6145 19.0246C11.6167 19.026 11.6188 19.0274 11.6209 19.0288C11.7476 19.1133 11.8744 19.1978 12.0011 19.2823C12.001 19.6829 12.0009 20.0834 12.0008 20.4839C11.6675 20.2617 11.3342 20.0396 11.001 19.8174M19.3208 25.365C16.881 23.7376 14.4411 22.1107 12.0008 20.4839C12.0007 20.616 12.0007 20.7482 12.0006 20.8803C11.9998 23.3541 11.9989 25.8265 12.002 28.299L12.002 28.2991C12.0025 28.7664 12.1435 29.0368 12.2981 29.1898C12.4539 29.344 12.7318 29.4858 13.2097 29.4862L13.2094 30.4862L13.21 29.4862C13.2099 29.4862 13.2098 29.4862 13.2097 29.4862C19.064 29.4877 24.9183 29.4877 30.7726 29.4862L30.7728 30.4829L30.7723 29.4862C30.7724 29.4862 30.7725 29.4862 30.7726 29.4862C31.2688 29.4858 31.5467 29.3418 31.6992 29.1899C31.8512 29.0386 31.9952 28.7634 31.9957 28.2707L31.9957 28.2705C31.999 25.6758 31.9978 23.0816 31.9965 20.4862C32.3297 20.264 32.6629 20.0418 32.9961 19.8196C32.9961 19.7617 32.996 19.7037 32.996 19.6457C32.996 19.6443 32.996 19.6428 32.996 19.6414C32.9959 19.4406 32.9958 19.2399 32.9957 19.0391C32.9957 18.9617 32.9881 18.8846 32.9793 18.7965C32.9748 18.7505 32.9699 18.7014 32.9657 18.6478C32.9212 18.6763 32.8797 18.7029 32.8404 18.728C32.7205 18.8046 32.6216 18.8678 32.5236 18.9328C32.4704 18.9682 32.4173 19.0037 32.3641 19.0391C32.364 19.0392 32.3638 19.0393 32.3637 19.0394C32.2411 19.1212 32.1184 19.2029 31.9958 19.2847C31.996 19.545 31.9961 19.8053 31.9962 20.0655C31.9963 20.2057 31.9964 20.346 31.9965 20.4862C31.3081 20.9452 30.6197 21.4042 29.9313 21.8633C28.1836 23.0288 26.4356 24.1945 24.6874 25.3598L24.1327 24.5277L24.6874 25.3598C24.6874 25.3598 24.6874 25.3598 24.6874 25.3598C23.8278 25.9329 22.9502 26.288 22.0029 26.2892C21.055 26.2904 20.1783 25.9371 19.3208 25.365ZM19.3208 25.365L19.8742 24.5353L19.3207 25.365C19.3207 25.365 19.3208 25.365 19.3208 25.365ZM11.4849 18.9382C11.5281 18.967 11.5713 18.9958 11.6145 19.0246L11.4849 18.9382Z",fill:"#AE1C9A"}),(0,r.jsx)("path",{d:"M22.0007 14.0029C24.963 14.0029 27.9261 13.9983 30.8883 14.0052C32.1292 14.0083 33.0427 14.9295 32.9934 16.1149C32.9633 16.8296 32.5944 17.3418 32.0082 17.7308C29.4226 19.4476 26.8424 21.1722 24.2598 22.8944C23.8793 23.1485 23.5042 23.4112 23.1145 23.6515C22.3766 24.1075 21.6133 24.1275 20.8901 23.6492C17.8839 21.6605 14.8862 19.6594 11.8915 17.6538C11.1213 17.1377 10.8333 16.2889 11.0936 15.4378C11.3547 14.5837 12.1288 14.0068 13.07 14.0045C15.889 13.9968 18.7088 14.0014 21.5278 14.0014C21.6857 14.0029 21.8436 14.0029 22.0007 14.0029Z",fill:"#AE1C9A"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.0082 17.7308C32.5944 17.3418 32.9633 16.8296 32.9934 16.1149C33.0427 14.9295 32.1292 14.0083 30.8883 14.0052C28.7724 14.0003 26.6561 14.0012 24.5399 14.0022C23.6935 14.0025 22.8471 14.0029 22.0007 14.0029C21.8436 14.0029 21.6857 14.0029 21.5278 14.0014C20.759 14.0014 19.9902 14.001 19.2213 14.0007C17.1709 13.9998 15.1202 13.9989 13.07 14.0045C12.1288 14.0068 11.3547 14.5837 11.0936 15.4378C10.8333 16.2889 11.1213 17.1377 11.8915 17.6538C14.8862 19.6594 17.8839 21.6605 20.8901 23.6492C21.6133 24.1275 22.3766 24.1075 23.1145 23.6515C23.3977 23.4769 23.6732 23.2904 23.9487 23.104C24.0523 23.0339 24.1558 22.9638 24.2598 22.8944C24.9163 22.4566 25.5726 22.0186 26.229 21.5807C28.1545 20.2959 30.0799 19.0112 32.0082 17.7308ZM21.4417 22.8151C21.6574 22.9577 21.8376 23.0016 21.9909 23.0007C22.1486 22.9998 22.3464 22.9506 22.5888 22.8008L22.5896 22.8003C22.8536 22.6375 23.1029 22.4688 23.3716 22.287C23.4787 22.2145 23.5889 22.1399 23.7043 22.0628L23.705 22.0624C24.3607 21.6251 25.0165 21.1875 25.6725 20.7499C27.5985 19.4647 29.5255 18.179 31.4551 16.8977L31.4553 16.8976C31.8444 16.6394 31.9808 16.3923 31.9942 16.0729C32.0181 15.4929 31.5978 15.0071 30.886 15.0052M21.4417 22.8151C18.4378 20.8279 15.4419 18.8281 12.4482 16.823L21.4417 22.8151ZM12.0499 15.7302L12.0499 15.7303C11.9179 16.1618 12.0459 16.5534 12.448 16.8229M13.0727 15.0045L13.0724 15.0045C12.5581 15.0057 12.1793 15.3069 12.0499 15.7302M24.5417 15.0022C23.695 15.0025 22.848 15.0029 22.0007 15.0029H21.9984C21.8444 15.0029 21.6841 15.0029 21.523 15.0014C20.7548 15.0014 19.987 15.001 19.2194 15.0007C17.1695 14.9998 15.1212 14.9989 13.0727 15.0045M24.5417 15.0022C26.6573 15.0012 28.7714 15.0003 30.8859 15.0052L24.5417 15.0022Z",fill:"#AE1C9A"})]})}),(0,r.jsx)("p",{className:"text-[22px] text-qblack leading-[30px] text-center font-semibold",children:w&&w.Email}),(0,r.jsx)("p",{className:"text-[15px] text-qblack leading-[30px] text-center",children:t.contact.email})]})]}),(0,r.jsxs)("div",{className:"p-5 flex flex-col justify-between w-full rounded bg-qpurplelow/10",children:[(0,r.jsxs)("div",{className:"flex space-x-5",children:[(0,r.jsx)("span",{children:(0,r.jsxs)("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M17.1611 17.6821C17.1848 20.3432 19.3626 22.4945 22.0205 22.4843C24.6735 22.4741 26.8518 20.2773 26.8314 17.629L26.8314 17.6289C26.8098 14.9632 24.6389 12.824 21.9718 12.8353C19.3106 12.8466 17.1362 15.0295 17.1611 17.6821ZM17.1611 17.6821L17.661 17.6776L17.1611 17.6823C17.1611 17.6822 17.1611 17.6821 17.1611 17.6821ZM13.836 18.3193L13.836 18.3183C13.8642 13.6208 16.7919 10.206 20.6315 9.6048C24.7202 8.96493 28.5519 11.3061 29.7792 15.2223L29.7792 15.2224C30.451 17.3646 30.2918 19.4599 29.2268 21.4239C27.4275 24.7397 25.5965 28.0381 23.7643 31.3387C23.2175 32.3236 22.6706 33.3088 22.1245 34.2946L22.1244 34.2948C22.0724 34.3887 22.0272 34.4449 21.9956 34.4762C21.9645 34.4453 21.9201 34.39 21.869 34.2978L21.869 34.2977C21.6067 33.8243 21.3445 33.3511 21.0822 32.8778C18.9688 29.0636 16.8558 25.2502 14.7605 21.4272C14.1161 20.2514 13.8307 18.9893 13.836 18.3193ZM13.3363 18.3153L13.336 18.3153L13.3363 18.3153Z",fill:"#AE1C9A",stroke:"#AE1C9A"}),(0,r.jsx)("circle",{cx:"22",cy:"22",r:"21.5",stroke:"#AE1C9A"})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-[22px] font-semibold text-qblack leading-[30px] mb-2",children:w&&w.Address}),(0,r.jsx)("p",{className:"text-[15px] text-qblack leading-[30px]",children:t.contact.address})]})]}),(0,r.jsx)("div",{className:"w-full h-[206px] mt-5",children:(0,r.jsx)("iframe",{title:"newWork",src:"".concat(t.contact.map),style:{border:"0",width:"100%",height:"100%"},allowFullScreen:"",loading:"lazy"})})]})]})}),(0,r.jsxs)("div",{style:{boxShadow:"rgba(0, 0, 0, 0.05) 0px 15px 64px"},className:"flex-1 bg-white rounded sm:p-10 p-3",children:[(0,r.jsx)("div",{className:"title flex flex-col items-center",children:(0,r.jsx)("h1",{className:"text-[34px] font-bold text-qblack",children:w&&w.Get_In_Touch})}),(0,r.jsxs)("div",{className:"inputs mt-5",children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)(a.Z,{label:w&&w.Name+"*",placeholder:w&&w.Name,name:"name",inputClasses:"h-[50px]",value:n,inputHandler:e=>d(e.target.value),error:!!(j&&Object.hasOwn(j,"name"))}),j&&Object.hasOwn(j,"name")?(0,r.jsx)("span",{className:"text-sm mt-1 text-qred",children:j.name[0]}):""]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)(a.Z,{label:w&&w.Email_Address+"*",placeholder:w&&w.Email,name:"email",inputClasses:"h-[50px]",value:f,error:!!(j&&Object.hasOwn(j,"email")),inputHandler:e=>x(e.target.value)}),j&&Object.hasOwn(j,"email")?(0,r.jsx)("span",{className:"text-sm mt-1 text-qred",children:j.email[0]}):""]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)(a.Z,{label:w&&w.Subject,placeholder:w&&w.Subject,name:"subject",inputClasses:"h-[50px]",value:m,error:!!(j&&Object.hasOwn(j,"subject")),inputHandler:e=>C(e.target.value)}),j&&Object.hasOwn(j,"subject")?(0,r.jsx)("span",{className:"text-sm mt-1 text-qred",children:j.subject[0]}):""]}),(0,r.jsxs)("div",{className:"mb-5",children:[(0,r.jsxs)("h6",{className:"input-label text-qgray capitalize text-[13px] font-normal block mb-2 ",children:[w&&w.Message,"*"]}),(0,r.jsx)("textarea",{value:h,onChange:e=>b(e.target.value),placeholder:w&&w.Message,className:" w-full h-[105px] focus:ring-0 rounded focus:outline-none p-6 border placeholder:text-sm ".concat(j&&Object.hasOwn(j,"message")?"border-qred":"border-qpurplelow/10")}),j&&Object.hasOwn(j,"message")?(0,r.jsx)("span",{className:"text-sm mt-1 text-qred",children:j.message[0]}):""]}),(0,r.jsx)("div",{children:(0,r.jsxs)("button",{disabled:!n||!f||!m||!h,onClick:()=>{g(!0),c.Z.contact({name:n,email:f,subject:m,message:h}).then(e=>{g(!1),d(""),x(""),C(""),b(""),o.Am.success(e&&e.data.notification)}).catch(e=>{g(!1),console.error(e),y(e.response.data.errors)})},type:"button",className:"disabled:bg-opacity-60 disabled:cursor-not-allowed bg-qpurple text-white text-sm font-semibold w-full h-[50px] flex justify-center items-center rounded",children:[(0,r.jsx)("span",{children:w&&w.Send_Now}),v&&(0,r.jsx)("span",{className:"w-5",style:{transform:"scale(0.3)"},children:(0,r.jsx)(p.Z,{})})]})})]})]})]})})})]})}var f=n(5638),x=!0;function m(e){let{data:t}=e,{seoSetting:n}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{title:"".concat(n.seo_title),metaDes:n.seo_description}),(0,r.jsx)(d,{datas:t})]})}},3811:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893);function s(e){let{paths:t=[{name:"home",path:"/"}]}=e;return(0,r.jsx)(r.Fragment,{children:t&&t.length>0&&(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px] print:hidden",children:t.map(e=>(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:e.path,children:(0,r.jsx)("span",{className:"mx-1 capitalize",children:e.name})}),(0,r.jsx)("span",{className:"sperator",children:"/"})]},Math.random()))})},Math.random())})}},5638:function(e,t,n){"use strict";var r=n(5893),s=n(9008),a=n.n(s);n(7294);var l=n(1369);t.Z=function(e){let{title:t}=e,{favicon:n}=(0,l.Z)();return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"".concat(n?"https://ecommerce.cdcscui.com/api"+n:"/favico.svg")})]})}},6604:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),s=n(3811);function a(e){let{title:t,breadcrumb:n=[]}=e;return(0,r.jsx)("div",{className:"page-title-wrapper w-full h-[173px] py-10 bg-qpurplelow/10",children:(0,r.jsxs)("div",{className:"container-x mx-auto",children:[(0,r.jsx)("div",{className:"mb-5",children:(0,r.jsx)(s.Z,{paths:n})}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)("h1",{className:"text-3xl font-semibold text-qblack capitalize",children:t})})]})})}},9008:function(e,t,n){e.exports=n(4764)},2703:function(e,t,n){"use strict";var r=n(414);function s(){}function a(){}a.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,a,l){if(l!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:s};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[582,774,888,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);