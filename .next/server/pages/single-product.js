"use strict";(()=>{var e={};e.id=491,e.ids=[491,888],e.modules={6054:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.r(s),t.d(s,{config:()=>h,default:()=>x,getServerSideProps:()=>u,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>g,routeModule:()=>N,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>f});var r=t(7093),l=t(5244),i=t(1323),c=t(1106),n=t(2166),d=t(5637),o=e([n,d]);[n,d]=o.then?(await o)():o;let x=(0,i.l)(d,"default"),p=(0,i.l)(d,"getStaticProps"),m=(0,i.l)(d,"getStaticPaths"),u=(0,i.l)(d,"getServerSideProps"),h=(0,i.l)(d,"config"),g=(0,i.l)(d,"reportWebVitals"),f=(0,i.l)(d,"unstable_getStaticProps"),j=(0,i.l)(d,"unstable_getStaticPaths"),v=(0,i.l)(d,"unstable_getStaticParams"),w=(0,i.l)(d,"unstable_getServerProps"),b=(0,i.l)(d,"unstable_getServerSideProps"),N=new r.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/single-product",pathname:"/single-product",bundlePath:"",filename:""},components:{App:n.default,Document:c.default},userland:d});a()}catch(e){a(e)}})},5637:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.r(s),t.d(s,{default:()=>x,getServerSideProps:()=>o});var r=t(997),l=t(1163),i=t(6689),c=t(5638),n=t(3199),d=e([n]);n=(d.then?(await d)():d)[0];let o=async e=>{let s=await fetch(`https://ecommerce.cdcscui.com/apiapi/product/${e.query.slug}`);return{props:{data:await s.json()}}},x=({data:e})=>{let s=(0,l.useRouter)();return(0,i.useEffect)(()=>{s&&!s.query.slug&&s.push("*")}),(0,r.jsxs)(r.Fragment,{children:[r.jsx(c.Z,{title:`${e.product&&e.product.seo_title}`,metaDes:e.product&&e.product.seo_description}),s.query.slug&&r.jsx(n.Z,{details:e})]})};a()}catch(e){a(e)}})},3811:(e,s,t)=>{t.d(s,{Z:()=>r});var a=t(997);function r({paths:e=[{name:"home",path:"/"}]}){return a.jsx(a.Fragment,{children:e&&e.length>0&&a.jsx("div",{children:a.jsx("div",{className:"breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px] print:hidden",children:e.map(e=>(0,a.jsxs)("span",{children:[a.jsx("a",{href:e.path,children:a.jsx("span",{className:"mx-1 capitalize",children:e.name})}),a.jsx("span",{className:"sperator",children:"/"})]},Math.random()))})},Math.random())})}},6909:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(997),r=t(6689),l=t(3890);let i=function({className:e,textColor:s,label:t}){let[i,c]=(0,r.useState)(null);return(0,r.useEffect)(()=>{c((0,l.Z)())},[]),(0,a.jsxs)("div",{className:`flex justify-center items-center group rounded-full relative transition-all duration-300 ease-in-out overflow-hidden cursor-pointer ${e||""}`,children:[(0,a.jsxs)("div",{className:`flex space-x-1 items-center transition-all duration-300 ease-in-out relative z-10 ${s||""}`,children:[a.jsx("span",{className:"text-sm font-600 tracking-wide leading-7 mr-2",children:t||i&&i.Shop_Now}),a.jsx("span",{children:(0,a.jsxs)("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"fill-current",children:[a.jsx("rect",{x:"2.08984",y:"0.636719",width:"6.94219",height:"1.54271",transform:"rotate(45 2.08984 0.636719)"}),a.jsx("rect",{x:"7",y:"5.54492",width:"6.94219",height:"1.54271",transform:"rotate(135 7 5.54492)"})]})})]}),a.jsx("div",{style:{transition:"transform 0.25s ease-in-out"},className:"w-full h-full bg-black absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 origin-[center_left] group-hover:origin-[center_right]"})]})}},9614:(e,s,t)=>{t.d(s,{Z:()=>c});var a=t(997),r=t(5675),l=t.n(r),i=t(8432);function c({comments:e}){return a.jsx("div",{className:"review-wrapper w-full",children:a.jsx("div",{className:"w-full reviews mb-[60px]",children:a.jsx("div",{className:"w-full comments mb-[60px]",children:e&&e.length>0&&e.map(e=>(0,a.jsxs)("div",{className:"comment-item bg-white px-10 py-[32px] mb-2.5",children:[(0,a.jsxs)("div",{className:"comment-author flex justify-between items-center mb-3",children:[(0,a.jsxs)("div",{className:"flex space-x-3 items-center",children:[a.jsx("div",{className:"w-[50px] h-[50px] rounded-full overflow-hidden relative",children:a.jsx(l(),{layout:"fill",src:e.image?e.image:"/assets/images/comment-user-1.png",alt:"",className:"w-full h-full object-cover"})}),a.jsx("div",{children:a.jsx("p",{className:"text-[18px] font-medium text-qblack",children:e.author})})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsxs)("div",{className:"flex space-x-1",children:[Array.from(Array(e.review),()=>a.jsx("span",{children:a.jsx(i.Z,{})},e.review+Math.random())),e.review<5&&a.jsx(a.Fragment,{children:Array.from(Array(5-e.review),()=>a.jsx("span",{className:"text-qgray",children:a.jsx(i.Z,{defaultValue:!1})},e.review+Math.random()))})]}),(0,a.jsxs)("span",{className:"text-[13px] font-normal text-qblack mt-1 inline-block",children:["(",e.review,".0)"]})]})]}),a.jsx("div",{className:"comment mb-[30px]",children:a.jsx("p",{className:"text-[15px] text-qgray leading-7 text-normal",children:e.comments})}),e.replys&&e.replys.length>0&&e.replys.map(e=>(0,a.jsxs)("div",{className:"sub-comment-item bg-white px-10 pt-[32px] border-t",children:[a.jsx("div",{className:"comment-author  mb-3",children:(0,a.jsxs)("div",{className:"flex space-x-3 items-center",children:[a.jsx("div",{className:"w-[50px] h-[50px] rounded-full overflow-hidden relative",children:a.jsx(l(),{layout:"fill",src:"/assets/images/comment-user-2.png",alt:"",className:"w-full h-full object-cover"})}),a.jsx("div",{children:a.jsx("p",{className:"text-[18px] font-medium text-qblack",children:e.author})})]})}),a.jsx("div",{className:"comment mb-[30px]",children:a.jsx("p",{className:"text-[15px] text-qgray leading-7 text-normal",children:e.comments})})]},e.id))]},e.id))})})})}},8349:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.d(s,{Z:()=>g});var r=t(997),l=t(5675),i=t.n(l),c=t(4847),n=t(1593),d=t(8432),o=t(1664),x=t.n(o),p=t(3890),m=t(6689),u=t(6909),h=e([c]);function g({products:e,sellerInfo:s}){let{seller:t}=s,[a,l]=(0,m.useState)(null);(0,m.useEffect)(()=>{l((0,p.Z)())},[]);let o=e.length>0&&e.map(e=>({id:e.id,title:e.name,slug:e.slug,image:"https://ecommerce.cdcscui.com/api"+e.thumb_image,price:e.price,offer_price:e.offer_price,campaingn_product:null,review:parseInt(e.averageRating),variants:e.active_variants}));return(0,r.jsxs)("div",{className:"saller-info-wrapper w-full",children:[(0,r.jsxs)("div",{className:"saller-info sm:flex justify-between items-center pb-[30px]",children:[(0,r.jsxs)("div",{className:"sm:flex sm:space-x-5 items-center sm:w-1/4",children:[r.jsx("div",{className:"saller w-[73px] h-[73px] rounded-full overflow-hidden relative",children:t.user&&r.jsx(i(),{layout:"fill",src:`${t.user.image?"https://ecommerce.cdcscui.com/api"+t.user.image:"/assets/images/Group.png"}`,alt:"saller",className:"w-full h-full object-cover"})}),(0,r.jsxs)("div",{children:[r.jsx("h6",{className:"text-[18px] font-medium leading-[30px]",children:t.user.name}),r.jsx("p",{className:"text-[13px] font-normal text-qgray leading-[30px]",children:t.address}),(0,r.jsxs)("div",{className:"flex items-center mt-4",children:[(0,r.jsxs)("div",{className:"flex space-x-1",children:[Array.from(Array(parseInt(t.averageRating)),()=>r.jsx("span",{children:r.jsx(d.Z,{})},parseInt(t.averageRating)+Math.random())),5>parseInt(t.averageRating)&&r.jsx(r.Fragment,{children:Array.from(Array(5-parseInt(t.averageRating)),()=>r.jsx("span",{className:"text-qgray",children:r.jsx(d.Z,{defaultValue:!1})},parseInt(t.averageRating)+Math.random()))})]}),(0,r.jsxs)("span",{className:"text-[13px] font-normal ml-1 leading-none",children:["(",parseInt(t.averageRating),")"]})]})]})]}),(0,r.jsxs)("div",{className:"flex-1 w-full sm:flex sm:space-x-5 justify-between sm:ml-[60px] mt-5 sm:mt-0",children:[r.jsx("div",{className:"w-full mb-5 sm:mb-0",children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{className:"text-qgray leading-[30px]",children:[r.jsx("span",{className:"text-[15px] text-qblack font-medium capitalize",children:a&&a.products}),": ",t.sellerTotalProducts]}),(0,r.jsxs)("li",{className:"text-qgray leading-[30px]",children:[r.jsx("span",{className:"text-[15px] text-qblack font-medium capitalize",children:a&&a.Shop_Name}),": ",t.shop_name]}),(0,r.jsxs)("li",{className:"text-qgray leading-[30px]",children:[r.jsx("span",{className:"text-[15px] text-qblack font-medium capitalize",children:a&&a.phone}),": ",t.phone]})]})}),r.jsx("div",{className:"w-full "})]})]}),(0,r.jsxs)("div",{className:"saller-product w-full mt-[30px]",children:[r.jsx("h1",{className:"text-[18px] font-medium mb-5",children:"Product from Shop"}),r.jsx("div",{className:"grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",children:r.jsx(n.Z,{datas:o,startLength:0,endLength:o.length>4?4:o.length,children:({datas:e})=>r.jsx("div",{className:"item",children:r.jsx(c.Z,{datas:e})},e.id)})})]}),r.jsx("div",{className:"mt-[40px] w-full flex justify-center",children:r.jsx(x(),{href:{pathname:"/seller-products",query:{seller:t.slug}},passHref:!0,children:r.jsx("a",{rel:"noopener noreferrer",children:r.jsx(u.Z,{className:"w-[300px] h-[50px] bg-qyellow",textColor:"text-qblack group-hover:text-white font-semibold",label:a&&a.View_Shop})})})})]})}c=(h.then?(await h)():h)[0],a()}catch(e){a(e)}})},3199:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.d(s,{Z:()=>N});var r=t(997),l=t(1163),i=t(6689),c=t(3590),n=t(6703),d=t(7864),o=t(3811),x=t(4847),p=t(1593),m=t(859),u=t(6707),h=t(8423),g=t(2621),f=t(4046),j=t(9614),v=t(8349),w=t(3890),b=e([c,n,x,h,f,v]);function N({details:e}){let s=(0,l.useRouter)(),[t,a]=(0,i.useState)("des"),b=(0,i.useRef)(null),[N,y]=(0,i.useState)(!1),[q,_]=(0,i.useState)(null);(0,i.useEffect)(()=>{_((0,w.Z)())},[]);let[S,C]=(0,i.useState)(!1),[k,Z]=(0,i.useState)(""),[P,R]=(0,i.useState)(""),[I,z]=(0,i.useState)(null),[M,$]=(0,i.useState)(null);(0,i.useEffect)(()=>{if(!M){let s=e&&e.productReviews.length>0&&e.productReviews.map(e=>({id:e.id,author:e.user.name,comments:e.review,review:parseInt(e.rating),replys:null,image:e.user.image?"https://ecommerce.cdcscui.com/api"+e.user.image:null}));$(s)}},[M,e]);let A=e.seller?{seller:{...e.seller,sellerTotalProducts:parseInt(e.sellerTotalProducts),sellerTotalReview:parseInt(e.sellerTotalReview)}}:null,E=e.relatedProducts.map(e=>({id:e.id,title:e.name,slug:e.slug,image:"https://ecommerce.cdcscui.com/api"+e.thumb_image,price:e.price,offer_price:e.offer_price,campaingn_product:null,review:parseInt(e.averageRating),variants:e.active_variants})),F=async e=>{(0,d.Z)()?(C(!0),await n.Z.reportProduct({subject:k,description:P,product_id:e},(0,d.Z)().access_token).then(e=>{C(!1),c.toast.success(e.data&&e.data.message),Z(""),R(""),y(!N)}).catch(e=>{C(!1),console.log(e),z(e.response&&e.response.data.errors)})):s.push("/")};return r.jsx(r.Fragment,{children:r.jsx(h.Z,{childrenClasses:"pt-0 pb-0",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"single-product-wrapper w-full bg-white",children:[(0,r.jsxs)("div",{className:"product-view-main-wrapper bg-white pt-[30px] w-full",children:[r.jsx("div",{className:"breadcrumb-wrapper w-full ",children:r.jsx("div",{className:"container-x mx-auto",children:r.jsx(o.Z,{paths:[{name:q&&q.home,path:"/"},{name:e.product.slug,path:`/single-product?slug=${e.product.slug}`}]})})}),r.jsx("div",{className:"w-full bg-white pb-[60px]",children:r.jsx("div",{className:"container-x mx-auto",children:r.jsx(f.Z,{product:e.product,images:e.gellery,reportHandler:()=>{(0,d.Z)()?y(!N):s.push("/login")}})})})]}),(0,r.jsxs)("div",{className:`product-des-wrapper w-full relative pt-[45px]  bg-qpurplelow/10 ${0===E.length?"pb-[109px]":"pb-[45px]"}`,ref:b,children:[r.jsx("div",{className:"tab-buttons w-full mb-10 mt-5 sm:mt-0",children:(0,r.jsxs)("div",{className:"container-x mx-auto relative",children:[(0,r.jsxs)("ul",{className:"flex space-x-5 ",children:[r.jsx("li",{children:r.jsx("span",{style:{borderRadius:"20px 20px 0px 0px"},onClick:()=>a("des"),className:`py-[15px] sm:text-[15px] text-sm block px-6 font-medium cursor-pointer relative z-10 ${"des"===t?"bg-qpurple text-white":"text-qgray"}`,children:q&&q.Description})}),M&&M.length>0&&r.jsx("li",{children:r.jsx("span",{style:{borderRadius:"20px 20px 0px 0px"},onClick:()=>a("review"),className:`py-[15px] sm:text-[15px] text-sm block px-6 font-medium cursor-pointer relative z-10 ${"review"===t?"bg-qpurple text-white":"text-qgray"}`,children:q&&q.Reviews})}),1===(0,g.Z)()&&e.is_seller_product&&r.jsx("li",{children:r.jsx("span",{style:{borderRadius:"20px 20px 0px 0px"},onClick:()=>a("info"),className:`py-[15px] sm:text-[15px] text-sm block px-6 font-medium cursor-pointer relative z-10 ${"info"===t?"bg-qpurple text-white":"text-qgray"}`,children:q&&q.Seller_Info})})]}),r.jsx("div",{className:"w-full h-[1px] bg-[#ae1c9a4f]"})]})}),r.jsx("div",{className:"tab-contents w-full ",children:(0,r.jsxs)("div",{className:"container-x mx-auto",children:["des"===t&&(0,r.jsxs)(r.Fragment,{children:[r.jsx("h6",{className:"text-[18px] font-medium text-qblack mb-5",children:q&&q.Introduction}),r.jsx("div",{className:"product-detail-des",dangerouslySetInnerHTML:{__html:e.product.long_description}}),e.specifications&&e.specifications.length>0&&(0,r.jsxs)("div",{children:[r.jsx("h6",{className:"text-[18px] text-medium mb-4",children:"Features :"}),r.jsx("ul",{className:"list-disc ml-[15px]",children:e.specifications.map((e,s)=>r.jsx("li",{className:"font-normal text-qgray leading-9",children:e.specification},s))})]})]}),"review"===t&&M.length>0&&(0,r.jsxs)("div",{"data-aos":"fade-up",className:"w-full tab-content-item",children:[r.jsx("h6",{className:"text-[18px] font-medium text-qblack mb-2",children:q&&q.Reviews}),r.jsx("div",{className:"w-full",children:r.jsx(j.Z,{comments:M.length>0&&M.slice(0,2)})})]}),"info"===t&&r.jsx("div",{"data-aos":"fade-up",className:"w-full tab-content-item",children:e.seller&&r.jsx(v.Z,{sellerInfo:A,products:e.this_seller_products.length>0&&e.this_seller_products.slice(0,e.this_seller_products.length>8?8:e.this_seller_products.length)})})]})})]}),E.length>0&&r.jsx("div",{className:"related-product w-full relative",children:r.jsx("div",{className:"container-x mx-auto relative z-10",children:(0,r.jsxs)("div",{className:"w-full pt-[60px] pb-[114px]",children:[r.jsx("h1",{className:"sm:text-3xl text-xl font-600 text-qblack leading-none mb-[30px]",children:q&&q.Related_Product}),r.jsx("div",{"data-aos":"fade-up",className:"grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",children:r.jsx(p.Z,{datas:E,startLength:0,endLength:E.length>4?4:E.length,children:({datas:e})=>r.jsx("div",{className:"item",children:r.jsx(x.Z,{datas:e})},e.id)})})]})})})]}),N&&(0,r.jsxs)("div",{className:"w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center",children:[r.jsx("div",{onClick:()=>y(!N),className:"w-full h-full fixed left-0 right-0 bg-black  bg-opacity-25"}),(0,r.jsxs)("div",{"data-aos":"fade-up",className:"sm:w-[548px] w-full bg-white rounded relative py-[40px] px-[38px]",style:{zIndex:"999"},children:[(0,r.jsxs)("div",{className:"title-bar flex items-center justify-between mb-3",children:[r.jsx("h6",{className:"text-2xl font-medium",children:q&&q.Report_Products}),r.jsx("span",{className:"cursor-pointer",onClick:()=>y(!N),children:r.jsx("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M26.9399 54.0001C12.0678 53.9832 -0.0210736 41.827 2.75822e-05 26.9125C0.0211287 12.0507 12.1965 -0.0315946 27.115 6.20658e-05C41.9703 0.0317188 54.0401 12.2153 54 27.1404C53.9599 41.9452 41.7972 54.0191 26.9399 54.0001ZM18.8476 16.4088C17.6765 16.4404 16.9844 16.871 16.6151 17.7194C16.1952 18.6881 16.3893 19.5745 17.1363 20.3258C19.0966 22.2906 21.0252 24.2913 23.0425 26.197C23.7599 26.8745 23.6397 27.2206 23.0045 27.8305C21.078 29.6793 19.2148 31.5956 17.3241 33.4802C16.9211 33.8812 16.5581 34.3012 16.4505 34.8857C16.269 35.884 16.6953 36.8337 17.5456 37.3106C18.4382 37.8129 19.5038 37.6631 20.3394 36.8421C22.3673 34.8435 24.3866 32.8365 26.3723 30.7999C26.8513 30.3082 27.1298 30.2871 27.6193 30.7915C29.529 32.7584 31.4851 34.6789 33.4201 36.6184C33.8463 37.0447 34.2831 37.4436 34.9098 37.5491C35.9184 37.7201 36.849 37.2895 37.3196 36.4264C37.7964 35.5548 37.6677 34.508 36.8912 33.7144C34.9731 31.756 33.0677 29.7806 31.0631 27.9149C30.238 27.1467 30.3688 26.7479 31.1031 26.0535C32.9896 24.266 34.8022 22.3982 36.6338 20.5516C37.7922 19.3845 37.8914 17.9832 36.9081 17.0293C35.9501 16.1007 34.5975 16.2146 33.4623 17.3416C31.5188 19.2748 29.5649 21.1995 27.6594 23.1664C27.1446 23.6983 26.8492 23.6962 26.3343 23.1664C24.4267 21.1974 22.4664 19.2811 20.5336 17.3374C19.9997 16.7971 19.4258 16.3666 18.8476 16.4088Z",fill:"#F34336"})})})]}),(0,r.jsxs)("div",{className:"inputs w-full",children:[(0,r.jsxs)("div",{className:"w-full mb-5",children:[r.jsx(m.Z,{label:q&&q.Enter_Report_Ttile+"*",placeholder:q&&q.Enter_Report_Ttile,type:"text",name:"name",inputClasses:"h-[50px]",labelClasses:"text-[13px] font-600 leading-[24px] text-qblack",value:k,inputHandler:e=>Z(e.target.value),error:!!(I&&Object.hasOwn(I,"subject"))}),I&&Object.hasOwn(I,"description")?r.jsx("span",{className:"text-sm mt-1 text-qred",children:I.subject[0]}):""]}),(0,r.jsxs)("div",{className:"w-full mb-[40px]",children:[(0,r.jsxs)("h6",{className:"input-label  capitalize text-[13px] font-600 leading-[24px] text-qblack block mb-2 ",children:[q&&q.Enter_Report_Note,"*"]}),r.jsx("textarea",{name:"",id:"",cols:"30",rows:"6",className:`w-full focus:ring-0 rounded focus:outline-none py-3 px-4 border  placeholder:text-sm text-sm ${I?"border-qred":"border-qpurplelow/10"}`,placeholder:q&&q.Type,value:P,onChange:e=>R(e.target.value)}),I&&Object.hasOwn(I,"description")?r.jsx("span",{className:"text-sm mt-1 text-qred",children:I.description[0]}):""]}),(0,r.jsxs)("button",{onClick:()=>F(e.product.id),type:"button",className:"black-btn rounded flex h-[50px] items-center justify-center w-full",children:[r.jsx("span",{children:q&&q.Submit_Report}),S&&r.jsx("span",{className:"w-5 ",style:{transform:"scale(0.3)"},children:r.jsx(u.Z,{})})]})]})]})]})]})})})}[c,n,x,h,f,v]=b.then?(await b)():b,a()}catch(e){a(e)}})},7197:e=>{e.exports=require("@fortawesome/react-fontawesome")},5184:e=>{e.exports=require("@reduxjs/toolkit")},9783:e=>{e.exports=require("aos")},8982:e=>{e.exports=require("cookies-next")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},808:e=>{e.exports=require("nprogress")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},9578:e=>{e.exports=require("react-facebook-pixel")},6022:e=>{e.exports=require("react-redux")},6158:e=>{e.exports=require("react-share")},997:e=>{e.exports=require("react/jsx-runtime")},4782:e=>{e.exports=require("tawkto-react")},86:e=>{e.exports=import("@fortawesome/fontawesome-svg-core")},303:e=>{e.exports=import("@fortawesome/free-brands-svg-icons")},2765:e=>{e.exports=import("@fortawesome/free-regular-svg-icons")},4563:e=>{e.exports=import("@fortawesome/free-solid-svg-icons")},9648:e=>{e.exports=import("axios")},3590:e=>{e.exports=import("react-toastify")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[370,581,859,166,456,477],()=>t(6054));module.exports=a})();