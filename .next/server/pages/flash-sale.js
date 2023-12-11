"use strict";(()=>{var e={};e.id=300,e.ids=[300,888],e.modules={8229:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>h,default:()=>x,getServerSideProps:()=>m,getStaticPaths:()=>u,getStaticProps:()=>p,reportWebVitals:()=>f,routeModule:()=>S,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>g});var a=s(7093),i=s(5244),n=s(1323),l=s(1106),c=s(2166),o=s(9847),d=e([c,o]);[c,o]=d.then?(await d)():d;let x=(0,n.l)(o,"default"),p=(0,n.l)(o,"getStaticProps"),u=(0,n.l)(o,"getStaticPaths"),m=(0,n.l)(o,"getServerSideProps"),h=(0,n.l)(o,"config"),f=(0,n.l)(o,"reportWebVitals"),g=(0,n.l)(o,"unstable_getStaticProps"),w=(0,n.l)(o,"unstable_getStaticPaths"),v=(0,n.l)(o,"unstable_getStaticParams"),j=(0,n.l)(o,"unstable_getServerProps"),b=(0,n.l)(o,"unstable_getServerSideProps"),S=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/flash-sale",pathname:"/flash-sale",bundlePath:"",filename:""},components:{App:c.default,Document:l.default},userland:o});r()}catch(e){r(e)}})},9847:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>c,getServerSideProps:()=>o});var a=s(997);s(6689);var i=s(5543),n=s(5638),l=e([i]);function c(e){let{seoSetting:t}=e.data;return(0,a.jsxs)(a.Fragment,{children:[a.jsx(n.Z,{title:`${t.seo_title}`,metaDes:t.seo_description}),a.jsx(i.Z,{fetchData:e.data})]})}i=(l.then?(await l)():l)[0];let o=async()=>{let e=await fetch("https://ecommerce.cdcscui.com/apiapi/flash-sale");return{props:{data:await e.json()}}};r()}catch(e){r(e)}})},5267:(e,t,s)=>{s.d(t,{Z:()=>l});var r=s(997),a=s(6689),i=s(4460),n=s(3890);let l=function({endTime:e}){let{showDate:t,showHour:s,showMinute:l,showSecound:c}=(0,i.Z)(`${e}`),[o,d]=(0,a.useState)(null);return(0,a.useEffect)(()=>{d((0,n.Z)())},[]),r.jsx("div",{className:"sm:mr-[75px]",children:(0,r.jsxs)("div",{className:"countdown-wrapper w-full flex sm:space-x-6 space-x-3 sm:justify-between justify-evenly",children:[(0,r.jsxs)("div",{className:"countdown-item",children:[r.jsx("div",{className:"countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",children:r.jsx("span",{className:"font-700 sm:text-[30px] text-base text-[#EB5757]",children:t})}),r.jsx("p",{className:"sm:text-[18px] text-xs font-500 text-center leading-8 text-white",children:o&&o.Days})]}),(0,r.jsxs)("div",{className:"countdown-item",children:[r.jsx("div",{className:"countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",children:r.jsx("span",{className:"font-700 sm:text-[30px] text-base text-[#2F80ED]",children:s})}),r.jsx("p",{className:"sm:text-[18px] text-xs font-500 text-center leading-8 text-white",children:o&&o.Hours})]}),(0,r.jsxs)("div",{className:"countdown-item",children:[r.jsx("div",{className:"countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",children:r.jsx("span",{className:"font-700 sm:text-[30px] text-base text-[#219653]",children:l})}),r.jsx("p",{className:"sm:text-[18px] text-xs font-500 text-center leading-8 text-white",children:o&&o.Minutes})]}),(0,r.jsxs)("div",{className:"countdown-item",children:[r.jsx("div",{className:"countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",children:r.jsx("span",{className:"font-700 sm:text-[30px] text-base text-[#EF5DA8]",children:c})}),r.jsx("p",{className:"sm:text-[18px] text-xs font-500 text-center leading-8 text-white",children:o&&o.Seconds})]})]})})}},5543:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>d});var a=s(997),i=s(4847);s(4460);var n=s(1593),l=s(8423),c=s(5267),o=e([i,l]);function d({fetchData:e}){let t=e.products&&e.products.data.length>0&&e.products.data.map(e=>({id:e.id,category_id:e.category_id,title:e.name,slug:e.slug,image:"https://ecommerce.cdcscui.com/api"+e.thumb_image,price:e.price,offer_price:e.offer_price,campaingn_product:null,review:parseInt(e.averageRating),variants:e.active_variants?e.active_variants:[]}));return a.jsx(l.Z,{childrenClasses:"pb-0 pt-0",children:a.jsx("div",{className:"flashsale-wrapper w-full",children:a.jsx("div",{className:"container-x mx-auto pb-[114px] pt-[60px]",children:(0,a.jsxs)("div",{className:"w-full",children:[a.jsx("div",{style:{backgroundImage:`url(${"https://ecommerce.cdcscui.com/api"+e.flashSale.flashsale_page_image})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"},"data-aos":"fade-right",className:"flash-ad w-full h-[400px] rounded overflow-hidden flex sm:justify-end justify-center items-center mb-10",children:a.jsx(c.Z,{endTime:e.flashSale.end_time})}),a.jsx("div",{className:"products grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",children:a.jsx(n.Z,{datas:t,startLength:0,endLength:t.length,children:({datas:e})=>a.jsx("div",{"data-aos":"fade-up",className:"item",children:a.jsx(i.Z,{datas:e})},e.id)})})]})})})})}[i,l]=o.then?(await o)():o,r()}catch(e){r(e)}})},4460:(e,t,s)=>{s.d(t,{Z:()=>a});var r=s(6689);let a=function(e){let[t,s]=(0,r.useState)(0),[a,i]=(0,r.useState)(0),[n,l]=(0,r.useState)(0),[c,o]=(0,r.useState)(0),d=new Date(e),x=d.getFullYear(),p=d.getMonth(),u=d.getDate(),m=d.getHours(),h=d.getMinutes(),f=d.getSeconds(),g=()=>{let e=setInterval(()=>{let t=new Date,r=new Date(x,p,u,m,h,f).getTime()-t.getTime();if(r<0){clearInterval(e);return}s(Math.floor(r/864e5)),l(Math.floor(r%36e5/6e4)),i(Math.floor(r%864e5/36e5)),o(Math.floor(r%6e4/1e3))},1e3)};return(0,r.useEffect)(()=>{""!==e&&g()}),{showDate:t,showHour:a,showMinute:n,showSecound:c}}},7197:e=>{e.exports=require("@fortawesome/react-fontawesome")},5184:e=>{e.exports=require("@reduxjs/toolkit")},9783:e=>{e.exports=require("aos")},8982:e=>{e.exports=require("cookies-next")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},808:e=>{e.exports=require("nprogress")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},9578:e=>{e.exports=require("react-facebook-pixel")},6022:e=>{e.exports=require("react-redux")},6158:e=>{e.exports=require("react-share")},997:e=>{e.exports=require("react/jsx-runtime")},4782:e=>{e.exports=require("tawkto-react")},86:e=>{e.exports=import("@fortawesome/fontawesome-svg-core")},303:e=>{e.exports=import("@fortawesome/free-brands-svg-icons")},2765:e=>{e.exports=import("@fortawesome/free-regular-svg-icons")},4563:e=>{e.exports=import("@fortawesome/free-solid-svg-icons")},9648:e=>{e.exports=import("axios")},3590:e=>{e.exports=import("react-toastify")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[370,581,859,166,456,477],()=>s(8229));module.exports=r})();