"use strict";exports.id=477,exports.ids=[477],exports.modules={4847:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>F});var l=s(997),r=s(9648),i=s(1664),n=s.n(i),c=s(1163),o=s(6689),d=s(6022),p=s(3590),x=s(6703),u=s(7864),m=s(1369),h=s(4082),f=s(458),j=s(8026),v=s(7525),g=s(4046),b=s(3711),w=s(7917),N=s(8432),y=s(5645),C=s(5675),_=s.n(C),q=s(3890),k=s(8251),Z=e([r,p,x,g]);[r,p,x,g]=Z.then?(await Z)():Z;let L=({message:e,linkTxt:t})=>(0,l.jsxs)("div",{className:"flex space-x-2 items-center",children:[l.jsx("span",{className:"text-sm text-qgray",children:e&&e}),l.jsx(n(),{href:"/cart",children:l.jsx("span",{className:"text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",children:t&&t})})]});function F({datas:e}){let t=(0,c.useRouter)(),s=(0,d.useDispatch)(),{wishlistData:a}=(0,d.useSelector)(e=>e.wishlistData),i=a&&a.wishlists,C=i&&i.data.find(t=>t.product.id===e.id),[Z,F]=(0,o.useState)(null),{websiteSetup:S}=(0,d.useSelector)(e=>e.websiteSetup),[$,I]=(0,o.useState)(null),H=(0,o.useContext)(k.Z);(0,o.useEffect)(()=>{S&&(S.payload.flashSaleProducts.find(t=>parseInt(t.product_id)===parseInt(e.id))?I(!0):I(!1))},[S]);let[V,T]=(0,o.useState)(!1),[M,B]=(0,o.useState)(null),[E,A]=(0,o.useState)(null);(0,o.useEffect)(()=>{A((0,q.Z)())},[]);let W=e=>{T(!V),M||r.default.get(`https://ecommerce.cdcscui.com/apiapi/product/${e}`).then(e=>{B(e.data?e.data:null)}).catch(e=>{console.log(e)})};(0,o.useEffect)(()=>(V?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[V]),(0,o.useEffect)(()=>{C?F(!0):F(!1)},[C]),e.cam_product_sale,e.cam_product_available,e.cam_product_sale;let P=e=>{(0,u.Z)()?(F(!0),x.Z.addToWishlist({id:e,token:(0,u.Z)().access_token}),s((0,j.BW)())):H.handlerPopup(!0)},R=e=>{(0,u.Z)()?(F(!1),x.Z.removeToWishlist({id:e,token:(0,u.Z)().access_token}),s((0,j.BW)())):t.push("/login")},D=e&&e.variants.length>0&&e.variants,[G,O]=(0,o.useState)(D&&D.map(e=>e.active_variant_items[0])),[z,J]=(0,o.useState)(null),[K,U]=(0,o.useState)(null),Q=e=>{let t={id:e,token:(0,u.Z)()&&(0,u.Z)().access_token,quantity:1,variants:G&&G.length>0&&G.map(e=>e?parseInt(e.product_variant_id):null),variantItems:G&&G.length>0&&G.map(e=>e?e.id:null)};if((0,u.Z)()){if(D){let e=t.variants.map((e,t)=>e?`variants[]=${e}`:"variants[]=-1").map(e=>e+"&").join(""),a=t.variantItems.map((e,t)=>e?`items[]=${e}`:"items[]=-1").map(e=>e+"&").join(""),r=`token=${t.token}&product_id=${t.id}&${e}${a}quantity=${t.quantity}`;x.Z.addToCard(r).then(e=>p.toast.success(l.jsx(L,{message:E&&E.Item_added,linkTxt:E&&E.Go_To_Cart}),{autoClose:5e3})).catch(e=>{console.log(e),p.toast.error(e.response&&e.response.data.message&&e.response.data.message)}),s((0,h.x7)())}else{let e=`token=${t.token}&product_id=${t.id}&quantity=${t.quantity}`;x.Z.addToCard(e).then(e=>p.toast.success(l.jsx(L,{message:E&&E.Item_added,linkTxt:E&&E.Go_To_Cart}),{autoClose:5e3})).catch(e=>{console.log(e),p.toast.error(e.response&&e.response.data.message&&e.response.data.message)}),s((0,h.x7)())}}else localStorage.setItem("data-hold",JSON.stringify({type:"add-to-cart",...t})),H.handlerPopup(!0)};(0,o.useEffect)(()=>{if(D){let t=D.map(e=>e.active_variant_items.length>0&&e.active_variant_items[0].price?e.active_variant_items[0].price:0);if(e.offer_price){let s=parseFloat(t.reduce((e,t)=>parseInt(e)+parseInt(t),0)+parseFloat(e.offer_price));J(e.price),U(s)}else{let s=parseFloat(t.reduce((e,t)=>parseInt(e)+parseInt(t),0)+parseFloat(e.price));J(s)}}else J(e&&e.price?parseFloat(e.price):null),U(e&&e.offer_price?parseFloat(e.offer_price):null)},[e,D]);let X=e=>{(0,u.Z)()?x.Z.addProductForCompare(e,(0,u.Z)().access_token).then(e=>{p.toast.success(e.data&&e.data.notification),s((0,f.rh)())}).catch(e=>{p.toast.error(e.response&&e.response.data.notification),console.log(e)}):H.handlerPopup(!0)},{currency_icon:Y}=(0,m.Z)(),[ee,et]=(0,o.useState)(null),es=e=>{et(e)};return(0,l.jsxs)("div",{className:"product-card-one w-full h-[445px] transition-all duration-300 ease-in-out bg-white relative group border border-transparent hover:border-qpurple overflow-hidden rounded-lg",style:{boxShadow:"0px 15px 64px 0px rgba(0, 0, 0, 0.05)"},children:[(0,l.jsxs)("div",{className:"flex flex-col h-full justify-between",children:[(0,l.jsxs)("div",{children:[l.jsx("div",{className:"product-card-img w-full h-[313px]",children:l.jsx("div",{className:"w-full h-full relative  flex justify-center items-center transition-all duration-700 ease-in-out transform group-hover:-scale-x-[1] scale-x-100",children:l.jsx(_(),{layout:"fill",objectFit:"scale-down",src:`${ee||"/assets/images/spinner.gif"}`,alt:"",onLoadingComplete:()=>es(e.image),className:"w-full h-full object-contain"})})}),(0,l.jsxs)("div",{className:"product-card-details relative pt-5 pl-[30px]",children:[l.jsx("div",{className:"flex justify-start  mb-1.5",children:(0,l.jsxs)("div",{className:"reviews flex space-x-[1px]",children:[Array.from(Array(e.review),()=>l.jsx("span",{children:l.jsx(N.Z,{})},e.review+Math.random())),e.review<5&&l.jsx(l.Fragment,{children:Array.from(Array(5-e.review),()=>l.jsx("span",{className:"text-qgray",children:l.jsx(N.Z,{defaultValue:!1})},e.review+Math.random()))})]})}),l.jsx(n(),{href:{pathname:"/single-product",query:{slug:e.slug}},passHref:!0,children:l.jsx("a",{rel:"noopener noreferrer",children:l.jsx("h1",{className:"title mb-1.5 text-[18px] font-600 text-qblack leading-[30px] line-clamp-1 hover:text-qpurple cursor-pointer text-start",children:e.title})})}),(0,l.jsxs)("p",{className:"price text-start",children:[l.jsx("span",{suppressHydrationWarning:!0,className:`main-price  font-500 text-[16px] ${K?"line-through text-qgray":"text-qpurple"}`,children:K?l.jsx("span",{children:Y&&Y+parseFloat(z).toFixed(2)}):(0,l.jsxs)(l.Fragment,{children:[$&&l.jsx("span",{className:"line-through text-qgray font-500 text-[16px] mr-2",children:Y&&Y+parseFloat(z).toFixed(2)}),l.jsx(v.Z,{id:e.id,price:z})]})}),K&&l.jsx("span",{suppressHydrationWarning:!0,className:"offer-price text-qpurple font-500 text-[16px] ml-2",children:l.jsx(v.Z,{id:e.id,price:K})})]})]})]}),l.jsx("div",{className:"",children:l.jsx("div",{style:{borderRadius:"30px 0px 0"},onClick:()=>Q(e.id),className:"w-[135px] h-[48px] pl-6 pt-3 cursor-pointer  bg-qpurplelow/10 group-hover:bg-qpurple transition-all duration-300 absolute -bottom-1 -right-1 ease-in-out",children:l.jsx("div",{className:"w-full h-full space-x-3 text-qpurple group-hover:text-white",children:l.jsx("span",{className:"text-base font-semibold",children:"Add To Cart"})})})})]}),(0,l.jsxs)("div",{className:"quick-access-btn",children:[l.jsx("button",{className:" absolute left-[77px] top-[243px] transform scale-0 group-hover:scale-100  transition-all ease-in-out",onClick:()=>W(e.slug),type:"button",children:l.jsx("span",{className:"w-10 h-10 block overflow-hidden  text-qblack hover:text-white  transition-all duration-300 ease-in-out hover:bg-qpurple bg-white  rounded-full",children:l.jsx("span",{className:" w-full h-full bg-qpurplelow/10 flex justify-center items-center",children:l.jsx(w.Z,{className:"fill-current"})})})}),Z?l.jsx("button",{className:" absolute  left-[134px] top-[243px] transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out",type:"button",onClick:()=>R(C&&C.id),children:l.jsx("span",{className:"w-10 block h-10 bg-white rounded-full overflow-hidden",children:l.jsx("span",{className:"flex w-full h-full justify-center items-center bg-qpurplelow/10",children:l.jsx(y.Z,{fill:!0})})})}):l.jsx("button",{className:" absolute left-[134px] top-[243px] transform scale-0 group-hover:scale-100  transition-all duration-300 ease-in-out",type:"button",onClick:()=>P(e.id),children:l.jsx("span",{className:"w-10 h-10 block text-qblack overflow-hidden hover:text-white transition-all duration-300 ease-in-out bg-white rounded-full",children:l.jsx("span",{className:"w-full h-full flex justify-center items-center hover:bg-qpurple bg-qpurplelow/10 ",children:l.jsx(y.Z,{className:"fill-current"})})})}),l.jsx("button",{className:" absolute left-[195px] top-[243px] transform scale-0 group-hover:scale-100  transition-all duration-500 ease-in-out",type:"button",onClick:()=>X(e.id),children:l.jsx("span",{className:"w-10 h-10 block  text-qblack hover:text-white transition-all overflow-hidden duration-300 ease-in-out items-center bg-white rounded-full",children:l.jsx("span",{className:"w-full h-full flex justify-center items-center hover:bg-qpurple bg-qpurplelow/10 ",children:l.jsx(b.Z,{})})})})]}),V&&M&&(0,l.jsxs)("div",{className:"quicke-view-wrapper w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center ",children:[l.jsx("div",{onClick:()=>T(!V),className:"w-full h-full fixed left-0 right-0 bg-black  bg-opacity-25"}),(0,l.jsxs)("div",{"data-aos":"fade-up",className:"md:mx-10 xl:mt-[100px] rounded w-full bg-white relative lg:py-[40px] pt-[80px] pb-[40px] sm:px-[38px] px-3 relative md:mt-12 h-full overflow-y-scroll xl:overflow-hidden  xl:mt-0",style:{zIndex:"999"},children:[l.jsx("div",{className:"w-full h-full overflow-y-scroll overflow-style-none",children:l.jsx(g.Z,{images:M.gellery.length>0?M.gellery:[],product:M.product})}),l.jsx("button",{onClick:()=>T(!V),type:"button",className:"absolute right-3 top-3",children:l.jsx("span",{className:"text-red-500 w-12 h-12 flex justify-center items-center rounded border border-qred",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-10 h-10",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})})]})]})]})}a()}catch(e){a(e)}})},1593:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(997);let l=function(e){let{datas:t=[],startLength:s,endLength:l,children:r}=e;return a.jsx(a.Fragment,{children:t&&t.length>=l&&t.slice(s,l).map(e=>r({datas:e}))})}},5638:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(997),l=s(968),r=s.n(l);s(6689);var i=s(1369);let n=function(e){let{title:t}=e,{favicon:s}=(0,i.Z)();return(0,a.jsxs)(r(),{children:[a.jsx("title",{children:t}),a.jsx("meta",{name:"description",content:"Generated by create next app"}),a.jsx("link",{rel:"icon",href:`${s?"https://ecommerce.cdcscui.com/api"+s:"/favico.svg"}`})]})}},8486:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(997),l=s(6689);function r({datas:e=[],defaultValue:t="",className:s,action:r,children:i}){let[n,c]=(0,l.useState)({name:t}),[o,d]=(0,l.useState)(!1),p=(e,t)=>{r&&r(t),c(t),d(!o)};return(0,l.useEffect)(()=>{t?c({name:t}):c({name:"Select"})},[e,t]),a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:`my-select-box ${s||""}`,children:[a.jsx("button",{onClick:()=>d(!o),type:"button",className:"my-select-box-btn ",children:i?i({item:n&&n.name}):a.jsx("span",{children:n&&n.name})}),o&&a.jsx("div",{className:"click-away",onClick:()=>d(!o)}),a.jsx("div",{className:`my-select-box-section max-h-[300px] overflow-y-scroll ${o?"open":""}`,children:(0,a.jsxs)("ul",{className:"list",children:[a.jsx("li",{className:"cursor-not-allowed selected pointer-events-none",children:"Select One"}),e&&e.length>0&&e.map(e=>a.jsx("li",{className:n&&n.name===e.name?"selected":"",onClick:t=>p(t,e),children:e.name},Math.random()))]})})]})})}},7917:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(997);function l({className:e}){return(0,a.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",className:e,xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M0.339844 3.18947V5.71272H0.991007H1.64217V4.31815V2.91815L4.6538 5.92978L7.66543 8.94141L8.13752 8.46389L8.61504 7.99179L5.60341 4.98017L2.59178 1.96854H3.99178H5.38636V1.31737V0.66621H2.8631H0.339844V3.18947Z"}),a.jsx("path",{d:"M13.9592 1.31737V1.96854H15.3537H16.7537L13.7421 4.98017L10.7305 7.99179L11.208 8.46389L11.6801 8.94141L14.6917 5.92978L17.7033 2.91815V4.31815V5.71272H18.3545H19.0057V3.18947V0.66621H16.4824H13.9592V1.31737Z"}),a.jsx("path",{d:"M4.63752 14.0803L1.64217 17.0811V15.6811V14.2865H0.991007H0.339844V16.8098V19.333H2.8631H5.38636V18.6818V18.0307H3.99178H2.59178L5.60341 15.0191L8.61504 12.0074L8.1538 11.5462C7.90419 11.2911 7.68171 11.0849 7.66543 11.0849C7.64915 11.0849 6.28713 12.4361 4.63752 14.0803Z"}),a.jsx("path",{d:"M11.1917 11.5462L10.7305 12.0074L13.7421 15.0191L16.7537 18.0307H15.3537H13.9592V18.6818V19.333H16.4824H19.0057V16.8098V14.2865H18.3545H17.7033V15.6811V17.0811L14.7026 14.0803C13.0584 12.4361 11.6964 11.0849 11.6801 11.0849C11.6638 11.0849 11.4413 11.2911 11.1917 11.5462Z"})]})}},8432:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(997);function l({w:e="15",h:t="15",defaultValue:s=!0,className:l="text-[#DFDFDF]"}){return a.jsx(a.Fragment,{children:s?a.jsx("svg",{width:e,height:t,className:"fill-current",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M17.9391 6.92157C17.8772 6.731 17.7125 6.59212 17.5142 6.56334L11.9448 5.754L9.45393 0.707201C9.3653 0.527543 9.1823 0.413818 8.98198 0.413818C8.78162 0.413818 8.59866 0.527543 8.50999 0.707201L6.01906 5.754L0.449672 6.56334C0.251452 6.59212 0.0867072 6.731 0.0248095 6.92154C-0.0371233 7.11211 0.0145283 7.32127 0.158009 7.4611L4.18796 11.3895L3.23675 16.9365C3.20286 17.134 3.28405 17.3335 3.44613 17.4513C3.53782 17.5179 3.64642 17.5518 3.75555 17.5518C3.83934 17.5518 3.92342 17.5319 4.0004 17.4914L8.98194 14.8724L13.9633 17.4913C14.1406 17.5846 14.3555 17.5691 14.5176 17.4513C14.6797 17.3335 14.7609 17.134 14.727 16.9365L13.7755 11.3895L17.8059 7.46107C17.9494 7.32127 18.001 7.1121 17.9391 6.92157Z",fill:"#F2C94C"})}):a.jsx("svg",{width:e,height:t,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`fill-current ${l||""}`,children:a.jsx("path",{d:"M17.9742 6.92157C17.9123 6.731 17.7477 6.59212 17.5494 6.56334L11.9799 5.754L9.48909 0.707201C9.40045 0.527543 9.21746 0.413818 9.01714 0.413818C8.81677 0.413818 8.63382 0.527543 8.54515 0.707201L6.05422 5.754L0.484828 6.56334C0.286608 6.59212 0.121863 6.731 0.0599658 6.92154C-0.00196704 7.11211 0.0496846 7.32127 0.193165 7.4611L4.22311 11.3895L3.27191 16.9365C3.23801 17.134 3.31921 17.3335 3.48129 17.4513C3.57298 17.5179 3.68158 17.5518 3.79071 17.5518C3.8745 17.5518 3.95857 17.5319 4.03556 17.4914L9.0171 14.8724L13.9984 17.4913C14.1758 17.5846 14.3907 17.5691 14.5527 17.4513C14.7148 17.3335 14.796 17.134 14.7622 16.9365L13.8107 11.3895L17.8411 7.46107C17.9845 7.32127 18.0362 7.1121 17.9742 6.92157Z"})})})}},4046:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>q});var l=s(997),r=s(5675),i=s.n(r),n=s(1664),c=s.n(n),o=s(1163),d=s(6689),p=s(6022),x=s(6158),u=s(3590),m=s(6703),h=s(7864),f=s(1369),j=s(4082),v=s(8026),g=s(8432),b=s(5645),w=s(8486),N=s(7525),y=s(3890),C=s(8251),_=e([u,m]);[u,m]=_.then?(await _)():_;let k=({message:e,linkTxt:t})=>(0,l.jsxs)("div",{className:"flex space-x-2 items-center",children:[l.jsx("span",{className:"text-sm text-qgray",children:e&&e}),l.jsx(c(),{href:"/cart",children:l.jsx("span",{className:"text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",children:t&&t})})]});function q({className:e,reportHandler:t,images:s=[],product:a}){let r=(0,o.useRouter)(),n=(0,p.useDispatch)(),c=(0,d.useContext)(C.Z),_=a.tags&&JSON.parse(a.tags),[q,Z]=(0,d.useState)(!1),F=s&&s.length>0&&s,L=a&&a.active_variants.length>0&&a.active_variants,[S,$]=(0,d.useState)(L&&L.map(e=>e.active_variant_items.length>0?e.active_variant_items[0]:{})),[I,H]=(0,d.useState)(null);(0,d.useEffect)(()=>{H((0,y.Z)())},[]);let[V,T]=(0,d.useState)(null),[M,B]=(0,d.useState)(null),[E,A]=(0,d.useState)(a.thumb_image);(0,d.useEffect)(()=>{A(a.thumb_image)},[a]);let W=e=>{A(e)},[P,R]=(0,d.useState)(1),D=e=>{if(L.length>0){let t=S.map(t=>parseInt(t.product_variant_id)===parseInt(e.product_variant_id)?e:t);$(t)}};(0,d.useEffect)(()=>{if(L){let e=S&&S.map(e=>e.price?e.price:0),t=parseFloat(e.reduce((e,t)=>parseFloat(e)+parseFloat(t),0)+parseFloat(a.price));if(T(parseFloat(t)),a.offer_price){let t=parseFloat(e.reduce((e,t)=>parseFloat(e)+parseFloat(t),0)+parseFloat(a.offer_price));B(parseFloat(t))}}},[S,L]),(0,d.useEffect)(()=>{if(L){let e=L.map(e=>e.active_variant_items.length>0&&e.active_variant_items[0].price?parseInt(e.active_variant_items[0].price):0);if(a.offer_price){let t=e.reduce((e,t)=>parseFloat(e)+parseFloat(t)),s=parseFloat(t)+parseFloat(a.price),l=parseFloat(t)+parseFloat(a.offer_price);T(parseFloat(s)),B(parseFloat(l))}else{let t=e.reduce((e,t)=>parseFloat(e)+parseFloat(t)),s=parseFloat(t)+parseFloat(a.price);T(parseFloat(s))}}else T(a&&parseFloat(a.price)?parseFloat(a.price):null),B(a&&a.offer_price?parseFloat(a.offer_price):null)},[a,L]);let{wishlistData:G}=(0,p.useSelector)(e=>e.wishlistData),O=G&&G.wishlists,z=O&&O.data.find(e=>e.product.id===a.id),[J,K]=(0,d.useState)(null);(0,d.useEffect)(()=>{z?K(!0):K(!1)},[z]);let U=e=>{(0,h.Z)()?(K(!0),m.Z.addToWishlist({id:e,token:(0,h.Z)().access_token}),n((0,v.BW)())):c.handlerPopup(!0)},Q=e=>{(0,h.Z)()?(K(!1),m.Z.removeToWishlist({id:e,token:(0,h.Z)().access_token}),n((0,v.BW)())):r.push("/login")},{currency_icon:X}=(0,f.Z)(),{websiteSetup:Y}=(0,p.useSelector)(e=>e.websiteSetup),[ee,et]=(0,d.useState)(""),[es,ea]=(0,d.useState)(null);return(0,d.useEffect)(()=>{if(Y){let e=Y.payload.flashSale;if(Y.payload.flashSaleProducts.find(e=>parseInt(e.product_id)===a.id)){let t=parseInt(e.offer),s=a.offer_price?parseInt(a.offer_price):parseInt(a.price);et(Math.trunc((s-t/100*s-a.price)/a.price*100))}else et(Math.trunc((a.offer_price-a.price)/a.price*100));Y.payload.flashSaleProducts.find(e=>parseInt(e.product_id)===parseInt(a.id))?ea(!0):ea(!1)}},[Y]),l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:`product-view w-full lg:flex justify-between h-full ${e||""}`,children:[l.jsx("div",{"data-aos":"fade-right",className:"lg:w-1/2 xl:mr-[70px] lg:mr-[50px]",children:(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("div",{className:"w-full md:h-[600px] h-[350px] border border-qpurplelow/10 flex justify-center items-center overflow-hidden relative mb-3 relative rounded",children:[l.jsx(i(),{layout:"fill",objectFit:"scale-down",src:`${"https://ecommerce.cdcscui.com/api"+E}`,alt:"",className:"object-contain  transform scale-110"}),a.offer_price&&l.jsx("div",{className:"w-[80px] h-[80px] rounded-full bg-qpurple text-qblack flex justify-center items-center text-xl font-medium absolute left-[30px] top-[30px]",children:(0,l.jsxs)("span",{className:"text-white",children:[ee,"%"]})})]}),(0,l.jsxs)("div",{className:"flex gap-2 flex-wrap",children:[l.jsx("div",{onClick:()=>W(a.thumb_image),className:"w-[110px] h-[110px] p-[15px] border border-qpurplelow/10 cursor-pointer relative rounded",children:l.jsx(i(),{layout:"fill",objectFit:"scale-down",src:`${"https://ecommerce.cdcscui.com/api"+a.thumb_image}`,alt:"",className:`w-full h-full object-contain transform scale-110 ${E!==a.thumb_image?"opacity-50":""} `})}),F&&F.length>0&&F.map((e,t)=>l.jsx("div",{onClick:()=>W(e.image),className:"w-[110px] h-[110px] p-[15px] border border-qborder cursor-pointer relative",children:l.jsx(i(),{layout:"fill",objectFit:"scale-down",src:`${"https://ecommerce.cdcscui.com/api"+e.image}`,alt:"",className:`w-full h-full object-contain ${E!==e.image?"opacity-50":""} `})},t))]})]})}),l.jsx("div",{className:"flex-1",children:(0,l.jsxs)("div",{className:"product-details w-full mt-10 lg:mt-0",children:[a.brand&&l.jsx("span",{"data-aos":"fade-up",className:"text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block",children:a.brand.name}),l.jsx("h1",{"data-aos":"fade-up",className:"text-xl font-medium text-qblack mb-4",children:a.name}),(0,l.jsxs)("div",{"data-aos":"fade-up",className:"flex space-x-[10px] items-center mb-6",children:[(0,l.jsxs)("div",{className:"flex space-x-1",children:[Array.from(Array(parseInt(a.averageRating)),()=>l.jsx("span",{children:l.jsx(g.Z,{})},parseInt(a.averageRating)+Math.random())),5>parseInt(a.averageRating)&&l.jsx(l.Fragment,{children:Array.from(Array(5-parseInt(a.averageRating)),()=>l.jsx("span",{className:"text-qgray",children:l.jsx(g.Z,{defaultValue:!1})},parseInt(a.averageRating)+Math.random()))})]}),(0,l.jsxs)("span",{className:"text-base font-normal text-qblack",children:[parseInt(a.averageRating)," Reviews"]})]}),(0,l.jsxs)("div",{"data-aos":"fade-up",className:"flex space-x-2 items-baseline mb-7",children:[l.jsx("span",{suppressHydrationWarning:!0,className:`main-price  font-600  ${M?"line-through text-qgray text-[15px]":"text-qred text-[24px]"}`,children:M?l.jsx("span",{children:X+V}):(0,l.jsxs)(l.Fragment,{children:[es&&l.jsx("span",{className:"main-price  font-600 line-through text-qgray text-[15px] mr-2",children:X&&X+parseFloat(V).toFixed(2)}),l.jsx(N.Z,{id:a.id,price:V})]})}),M&&l.jsx("span",{suppressHydrationWarning:!0,className:"offer-price text-qred font-600 text-[24px] ml-2",children:l.jsx(N.Z,{id:a.id,price:M})})]}),(0,l.jsxs)("div",{"data-aos":"fade-up",className:"mb-[30px]",children:[l.jsx("div",{className:`text-qgray text-sm text-normal leading-7 ${q?"":"line-clamp-2"}`,children:a.short_description}),l.jsx("button",{onClick:()=>Z(!q),type:"button",className:"text-[#03a84e] text-xs font-bold",children:q?"See Less":"See More"})]}),l.jsx("div",{className:"w-full h-[1px] bg-qpurplelow/10 mb-[30px]"}),(0,l.jsxs)("div",{className:"p-3 bg-qpurplelow/10 flex items-center space-x-2 mb-[30px] rounded-lg w-fit",children:[(0,l.jsxs)("span",{className:"text-base font-bold text-qblack",children:[I&&I.Availability," :"]}),l.jsx("span",{className:"text-base font-bold text-qpurple",children:0!==parseInt(a.qty)&&parseInt(a.qty)>0?`${a.qty} ${I&&I.Products_Available} `:`${I&&I.Products_not_Available}`})]}),L.length>0&&L.map(e=>(0,l.jsxs)("div",{"data-aos":"fade-up",className:"product-size mb-[30px]",children:[l.jsx("span",{className:"text-sm font-normal uppercase text-qgray mb-[14px] inline-block",children:e.name}),l.jsx("div",{className:"w-full",children:l.jsx("div",{className:" border border-qborder h-[50px] flex justify-between items-center px-6 cursor-pointer",children:l.jsx(w.Z,{action:D,className:"w-full",datas:e.active_variant_items&&e.active_variant_items.length>0&&e.active_variant_items,children:({item:e})=>l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex justify-between items-center w-full",children:[l.jsx("div",{children:l.jsx("span",{className:"text-base text-qblack",children:e})}),l.jsx("span",{children:l.jsx("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z",fill:"#222222"})})})]})})})})})]},e.id)),(0,l.jsxs)("div",{"data-aos":"fade-up",className:"quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px]",children:[l.jsx("div",{className:"w-[120px] h-full px-[26px] flex items-center border border-qpurplelow/10 rounded-md",children:(0,l.jsxs)("div",{className:"flex justify-between items-center w-full",children:[l.jsx("button",{onClick:()=>{P>1&&R(e=>e-1)},type:"button",className:"text-lg font-medium text-qgray",children:"-"}),l.jsx("span",{className:"text-qblack",children:P}),l.jsx("button",{onClick:()=>{R(e=>e+1)},type:"button",className:"text-lg font-medium text-qgray",children:"+"})]})}),l.jsx("div",{className:"w-[60px] h-full flex justify-center items-center border border-qpurplelow/10 rounded-md",children:J?l.jsx("button",{type:"button",onClick:()=>Q(z&&z.id),children:l.jsx("span",{className:"w-10 h-10 flex justify-center items-center",children:l.jsx(b.Z,{fill:!0})})}):l.jsx("button",{type:"button",onClick:()=>U(a.id),children:l.jsx("span",{className:"w-10 h-10 flex justify-center items-center",children:l.jsx(b.Z,{})})})}),l.jsx("div",{className:"flex-1 h-full",children:l.jsx("button",{onClick:()=>{let e={id:a.id,token:(0,h.Z)()&&(0,h.Z)().access_token,quantity:P,variants:S&&S.map(e=>parseInt(e.product_variant_id)),variantItems:S&&S.map(e=>e.id)};if((0,h.Z)()){if(L){let t=e.variants.map((e,t)=>`variants[]=${e}`).map(e=>e+"&").join(""),s=e.variantItems.map((e,t)=>`items[]=${e}`).map(e=>e+"&").join(""),a=`token=${e.token}&product_id=${e.id}&${t}${s}quantity=${e.quantity}`;m.Z.addToCard(a).then(e=>u.toast.success(l.jsx(k,{message:I&&I.Item_added,linkTxt:I&&I.Go_To_Cart}),{autoClose:5e3})).catch(e=>console.log(e)),n((0,j.x7)())}else{let t=`token=${e.token}&product_id=${e.id}&quantity=${e.quantity}`;m.Z.addToCard(t).then(e=>{u.toast.success(l.jsx(k,{message:I&&I.Item_added,linkTxt:I&&I.Go_To_Cart}),{autoClose:5e3}),u.toast.error(e.response&&e.response.data.message&&e.response.data.message)}).catch(e=>{console.log(e),u.toast.error(e.response&&e.response.data.message&&e.response.data.message)}),n((0,j.x7)())}}else localStorage.setItem("data-hold",JSON.stringify({type:"add-to-cart",...e})),c.handlerPopup(!0)},type:"button",className:"bg-qpurple hover:bg-qpurplelow/10 hover:text-qpurple border border-transparent hover:border-qpurple transition-common text-white rounded-full text-sm font-semibold w-full h-full",children:I&&I.Add_To_Cart})})]}),(0,l.jsxs)("div",{"data-aos":"fade-up",className:"mb-[20px]",children:[(0,l.jsxs)("p",{className:"text-base text-qpurple leading-7",children:[(0,l.jsxs)("span",{className:"text-qblack",children:[I&&I.category," :"]})," ",a.category.name]}),(0,l.jsxs)("p",{className:"text-base text-qpurple leading-7",children:[(0,l.jsxs)("span",{className:"text-qblack uppercase",children:[I&&I.SKU,":"]})," ",a.sku]}),_&&(0,l.jsxs)("p",{className:"text-base text-qpurple leading-7",children:[l.jsx("span",{className:"text-qblack",children:"Tags:"})," ",_.length>0&&_.map((e,t)=>l.jsx("span",{children:e.value+", "},t))]})]}),(0,l.jsxs)("div",{"data-aos":"fade-up",className:"flex space-x-2 items-center mb-[20px] report-btn ",children:[l.jsx("span",{children:l.jsx("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M0 0C0.247634 0 0.475436 0 0.729172 0C0.738324 0.160174 0.747477 0.316279 0.757647 0.493233C1.05816 0.392044 1.33885 0.282211 1.62818 0.203395C3.11296 -0.201361 4.51385 0.0366111 5.84202 0.779512C6.47661 1.13494 7.14171 1.39071 7.86987 1.47207C8.88125 1.58496 9.82093 1.35817 10.7098 0.88426C10.9335 0.765274 11.1522 0.636627 11.411 0.491199C11.4161 0.606117 11.4237 0.693577 11.4237 0.780529C11.4242 3.18822 11.4222 5.5954 11.4288 8.00309C11.4293 8.1892 11.3718 8.29089 11.2096 8.38039C9.31956 9.42279 7.4285 9.43499 5.54557 8.37734C4.06231 7.54443 2.55363 7.43307 0.992568 8.13835C0.804428 8.22327 0.737816 8.33005 0.739341 8.53904C0.749003 9.9206 0.744426 11.3027 0.744426 12.6842C0.744426 12.7849 0.744426 12.8851 0.744426 13C0.48764 13 0.254244 13 0 13C0 8.67582 0 4.34961 0 0Z",fill:"#EB5757"})})}),l.jsx("button",{type:"button",onClick:t,className:"text-qred font-semibold text-base",children:I&&I.Report_This_Item})]}),(0,l.jsxs)("div",{"data-aos":"fade-up",className:"social-share flex  items-center w-full",children:[(0,l.jsxs)("span",{className:"text-qblack text-base mr-[17px] inline-block",children:[I&&I.Share_This,":"]}),(0,l.jsxs)("div",{className:"flex space-x-5 items-center",children:[l.jsx(x.FacebookShareButton,{url:"false",quotes:a.name,children:l.jsx("span",{className:"cursor-pointer",children:l.jsx("svg",{width:"10",height:"16",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z",fill:"#3E75B2"})})})}),l.jsx(x.TwitterShareButton,{url:"false",title:a.name,children:l.jsx("span",{className:"cursor-pointer",children:l.jsx("svg",{width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M17.0722 1.60052C16.432 1.88505 15.7562 2.06289 15.0448 2.16959C15.7562 1.74278 16.3253 1.06701 16.5742 0.248969C15.8985 0.640206 15.1515 0.924742 14.3335 1.10258C13.6933 0.426804 12.7686 0 11.7727 0C9.85206 0 8.28711 1.56495 8.28711 3.48557C8.28711 3.7701 8.32268 4.01907 8.39382 4.26804C5.51289 4.12577 2.9165 2.73866 1.17371 0.604639C0.889175 1.13814 0.71134 1.70722 0.71134 2.34742C0.71134 3.5567 1.31598 4.62371 2.27629 5.26392C1.70722 5.22835 1.17371 5.08608 0.675773 4.83711V4.87268C0.675773 6.5799 1.88505 8.00258 3.48557 8.32268C3.20103 8.39382 2.88093 8.42938 2.56082 8.42938C2.34742 8.42938 2.09845 8.39382 1.88505 8.35825C2.34742 9.74536 3.62784 10.7768 5.15722 10.7768C3.94794 11.7015 2.45412 12.2706 0.818041 12.2706C0.533505 12.2706 0.248969 12.2706 0 12.2351C1.56495 13.2309 3.37887 13.8 5.37062 13.8C11.8082 13.8 15.3294 8.46495 15.3294 3.84124C15.3294 3.69897 15.3294 3.52113 15.3294 3.37887C16.0052 2.9165 16.6098 2.31186 17.0722 1.60052Z",fill:"#3FD1FF"})})})})]})]})]})})]})})}a()}catch(e){a(e)}})}};