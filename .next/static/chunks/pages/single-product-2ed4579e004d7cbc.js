(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{1689:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/single-product",function(){return t(693)}])},693:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return Z},default:function(){return R}});var l=t(5893),a=t(1163),r=t(7294),i=t(5638),n=t(5678),c=t(6703),d=t(7864),x=t(3811),m=t(4847),o=t(1593),p=t(859),u=t(6707),h=t(4582),f=t(2621),g=t(4046),j=t(5675),v=t.n(j),w=t(8432);function N(e){let{comments:s}=e;return(0,l.jsx)("div",{className:"review-wrapper w-full",children:(0,l.jsx)("div",{className:"w-full reviews mb-[60px]",children:(0,l.jsx)("div",{className:"w-full comments mb-[60px]",children:s&&s.length>0&&s.map(e=>(0,l.jsxs)("div",{className:"comment-item bg-white px-10 py-[32px] mb-2.5",children:[(0,l.jsxs)("div",{className:"comment-author flex justify-between items-center mb-3",children:[(0,l.jsxs)("div",{className:"flex space-x-3 items-center",children:[(0,l.jsx)("div",{className:"w-[50px] h-[50px] rounded-full overflow-hidden relative",children:(0,l.jsx)(v(),{layout:"fill",src:e.image?e.image:"/assets/images/comment-user-1.png",alt:"",className:"w-full h-full object-cover"})}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:"text-[18px] font-medium text-qblack",children:e.author})})]}),(0,l.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,l.jsxs)("div",{className:"flex space-x-1",children:[Array.from(Array(e.review),()=>(0,l.jsx)("span",{children:(0,l.jsx)(w.Z,{})},e.review+Math.random())),e.review<5&&(0,l.jsx)(l.Fragment,{children:Array.from(Array(5-e.review),()=>(0,l.jsx)("span",{className:"text-qgray",children:(0,l.jsx)(w.Z,{defaultValue:!1})},e.review+Math.random()))})]}),(0,l.jsxs)("span",{className:"text-[13px] font-normal text-qblack mt-1 inline-block",children:["(",e.review,".0)"]})]})]}),(0,l.jsx)("div",{className:"comment mb-[30px]",children:(0,l.jsx)("p",{className:"text-[15px] text-qgray leading-7 text-normal",children:e.comments})}),e.replys&&e.replys.length>0&&e.replys.map(e=>(0,l.jsxs)("div",{className:"sub-comment-item bg-white px-10 pt-[32px] border-t",children:[(0,l.jsx)("div",{className:"comment-author  mb-3",children:(0,l.jsxs)("div",{className:"flex space-x-3 items-center",children:[(0,l.jsx)("div",{className:"w-[50px] h-[50px] rounded-full overflow-hidden relative",children:(0,l.jsx)(v(),{layout:"fill",src:"/assets/images/comment-user-2.png",alt:"",className:"w-full h-full object-cover"})}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:"text-[18px] font-medium text-qblack",children:e.author})})]})}),(0,l.jsx)("div",{className:"comment mb-[30px]",children:(0,l.jsx)("p",{className:"text-[15px] text-qgray leading-7 text-normal",children:e.comments})})]},e.id))]},e.id))})})})}var b=t(1664),y=t.n(b),_=t(3890),C=t(6909);function q(e){let{products:s,sellerInfo:t}=e,{seller:a}=t,[i,n]=(0,r.useState)(null);(0,r.useEffect)(()=>{n((0,_.Z)())},[]);let c=s.length>0&&s.map(e=>({id:e.id,title:e.name,slug:e.slug,image:"https://ecommerce.cdcscui.com/api"+e.thumb_image,price:e.price,offer_price:e.offer_price,campaingn_product:null,review:parseInt(e.averageRating),variants:e.active_variants}));return(0,l.jsxs)("div",{className:"saller-info-wrapper w-full",children:[(0,l.jsxs)("div",{className:"saller-info sm:flex justify-between items-center pb-[30px]",children:[(0,l.jsxs)("div",{className:"sm:flex sm:space-x-5 items-center sm:w-1/4",children:[(0,l.jsx)("div",{className:"saller w-[73px] h-[73px] rounded-full overflow-hidden relative",children:a.user&&(0,l.jsx)(v(),{layout:"fill",src:"".concat(a.user.image?"https://ecommerce.cdcscui.com/api"+a.user.image:"/assets/images/Group.png"),alt:"saller",className:"w-full h-full object-cover"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h6",{className:"text-[18px] font-medium leading-[30px]",children:a.user.name}),(0,l.jsx)("p",{className:"text-[13px] font-normal text-qgray leading-[30px]",children:a.address}),(0,l.jsxs)("div",{className:"flex items-center mt-4",children:[(0,l.jsxs)("div",{className:"flex space-x-1",children:[Array.from(Array(parseInt(a.averageRating)),()=>(0,l.jsx)("span",{children:(0,l.jsx)(w.Z,{})},parseInt(a.averageRating)+Math.random())),5>parseInt(a.averageRating)&&(0,l.jsx)(l.Fragment,{children:Array.from(Array(5-parseInt(a.averageRating)),()=>(0,l.jsx)("span",{className:"text-qgray",children:(0,l.jsx)(w.Z,{defaultValue:!1})},parseInt(a.averageRating)+Math.random()))})]}),(0,l.jsxs)("span",{className:"text-[13px] font-normal ml-1 leading-none",children:["(",parseInt(a.averageRating),")"]})]})]})]}),(0,l.jsxs)("div",{className:"flex-1 w-full sm:flex sm:space-x-5 justify-between sm:ml-[60px] mt-5 sm:mt-0",children:[(0,l.jsx)("div",{className:"w-full mb-5 sm:mb-0",children:(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{className:"text-qgray leading-[30px]",children:[(0,l.jsx)("span",{className:"text-[15px] text-qblack font-medium capitalize",children:i&&i.products}),": ",a.sellerTotalProducts]}),(0,l.jsxs)("li",{className:"text-qgray leading-[30px]",children:[(0,l.jsx)("span",{className:"text-[15px] text-qblack font-medium capitalize",children:i&&i.Shop_Name}),": ",a.shop_name]}),(0,l.jsxs)("li",{className:"text-qgray leading-[30px]",children:[(0,l.jsx)("span",{className:"text-[15px] text-qblack font-medium capitalize",children:i&&i.phone}),": ",a.phone]})]})}),(0,l.jsx)("div",{className:"w-full "})]})]}),(0,l.jsxs)("div",{className:"saller-product w-full mt-[30px]",children:[(0,l.jsx)("h1",{className:"text-[18px] font-medium mb-5",children:"Product from Shop"}),(0,l.jsx)("div",{className:"grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",children:(0,l.jsx)(o.Z,{datas:c,startLength:0,endLength:c.length>4?4:c.length,children:e=>{let{datas:s}=e;return(0,l.jsx)("div",{className:"item",children:(0,l.jsx)(m.Z,{datas:s})},s.id)}})})]}),(0,l.jsx)("div",{className:"mt-[40px] w-full flex justify-center",children:(0,l.jsx)(y(),{href:{pathname:"/seller-products",query:{seller:a.slug}},passHref:!0,children:(0,l.jsx)("a",{rel:"noopener noreferrer",children:(0,l.jsx)(C.Z,{className:"w-[300px] h-[50px] bg-qyellow",textColor:"text-qblack group-hover:text-white font-semibold",label:i&&i.View_Shop})})})})]})}function k(e){let{details:s}=e,t=(0,a.useRouter)(),[i,j]=(0,r.useState)("des"),v=(0,r.useRef)(null),[w,b]=(0,r.useState)(!1),[y,C]=(0,r.useState)(null);(0,r.useEffect)(()=>{C((0,_.Z)())},[]);let[k,Z]=(0,r.useState)(!1),[R,S]=(0,r.useState)(""),[I,E]=(0,r.useState)(""),[z,P]=(0,r.useState)(null),[T,A]=(0,r.useState)(null);(0,r.useEffect)(()=>{T||A(s&&s.productReviews.length>0&&s.productReviews.map(e=>({id:e.id,author:e.user.name,comments:e.review,review:parseInt(e.rating),replys:null,image:e.user.image?"https://ecommerce.cdcscui.com/api"+e.user.image:null})))},[T,s]);let F=s.seller?{seller:{...s.seller,sellerTotalProducts:parseInt(s.sellerTotalProducts),sellerTotalReview:parseInt(s.sellerTotalReview)}}:null,M=s.relatedProducts.map(e=>({id:e.id,title:e.name,slug:e.slug,image:"https://ecommerce.cdcscui.com/api"+e.thumb_image,price:e.price,offer_price:e.offer_price,campaingn_product:null,review:parseInt(e.averageRating),variants:e.active_variants})),O=async e=>{(0,d.Z)()?(Z(!0),await c.Z.reportProduct({subject:R,description:I,product_id:e},(0,d.Z)().access_token).then(e=>{Z(!1),n.Am.success(e.data&&e.data.message),S(""),E(""),b(!w)}).catch(e=>{Z(!1),console.log(e),P(e.response&&e.response.data.errors)})):t.push("/")};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(h.Z,{childrenClasses:"pt-0 pb-0",children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"single-product-wrapper w-full bg-white",children:[(0,l.jsxs)("div",{className:"product-view-main-wrapper bg-white pt-[30px] w-full",children:[(0,l.jsx)("div",{className:"breadcrumb-wrapper w-full ",children:(0,l.jsx)("div",{className:"container-x mx-auto",children:(0,l.jsx)(x.Z,{paths:[{name:y&&y.home,path:"/"},{name:s.product.slug,path:"/single-product?slug=".concat(s.product.slug)}]})})}),(0,l.jsx)("div",{className:"w-full bg-white pb-[60px]",children:(0,l.jsx)("div",{className:"container-x mx-auto",children:(0,l.jsx)(g.Z,{product:s.product,images:s.gellery,reportHandler:()=>{(0,d.Z)()?b(!w):t.push("/login")}})})})]}),(0,l.jsxs)("div",{className:"product-des-wrapper w-full relative pt-[45px]  bg-qpurplelow/10 ".concat(0===M.length?"pb-[109px]":"pb-[45px]"),ref:v,children:[(0,l.jsx)("div",{className:"tab-buttons w-full mb-10 mt-5 sm:mt-0",children:(0,l.jsxs)("div",{className:"container-x mx-auto relative",children:[(0,l.jsxs)("ul",{className:"flex space-x-5 ",children:[(0,l.jsx)("li",{children:(0,l.jsx)("span",{style:{borderRadius:"20px 20px 0px 0px"},onClick:()=>j("des"),className:"py-[15px] sm:text-[15px] text-sm block px-6 font-medium cursor-pointer relative z-10 ".concat("des"===i?"bg-qpurple text-white":"text-qgray"),children:y&&y.Description})}),T&&T.length>0&&(0,l.jsx)("li",{children:(0,l.jsx)("span",{style:{borderRadius:"20px 20px 0px 0px"},onClick:()=>j("review"),className:"py-[15px] sm:text-[15px] text-sm block px-6 font-medium cursor-pointer relative z-10 ".concat("review"===i?"bg-qpurple text-white":"text-qgray"),children:y&&y.Reviews})}),1===(0,f.Z)()&&s.is_seller_product&&(0,l.jsx)("li",{children:(0,l.jsx)("span",{style:{borderRadius:"20px 20px 0px 0px"},onClick:()=>j("info"),className:"py-[15px] sm:text-[15px] text-sm block px-6 font-medium cursor-pointer relative z-10 ".concat("info"===i?"bg-qpurple text-white":"text-qgray"),children:y&&y.Seller_Info})})]}),(0,l.jsx)("div",{className:"w-full h-[1px] bg-[#ae1c9a4f]"})]})}),(0,l.jsx)("div",{className:"tab-contents w-full ",children:(0,l.jsxs)("div",{className:"container-x mx-auto",children:["des"===i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h6",{className:"text-[18px] font-medium text-qblack mb-5",children:y&&y.Introduction}),(0,l.jsx)("div",{className:"product-detail-des",dangerouslySetInnerHTML:{__html:s.product.long_description}}),s.specifications&&s.specifications.length>0&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h6",{className:"text-[18px] text-medium mb-4",children:"Features :"}),(0,l.jsx)("ul",{className:"list-disc ml-[15px]",children:s.specifications.map((e,s)=>(0,l.jsx)("li",{className:"font-normal text-qgray leading-9",children:e.specification},s))})]})]}),"review"===i&&T.length>0&&(0,l.jsxs)("div",{"data-aos":"fade-up",className:"w-full tab-content-item",children:[(0,l.jsx)("h6",{className:"text-[18px] font-medium text-qblack mb-2",children:y&&y.Reviews}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(N,{comments:T.length>0&&T.slice(0,2)})})]}),"info"===i&&(0,l.jsx)("div",{"data-aos":"fade-up",className:"w-full tab-content-item",children:s.seller&&(0,l.jsx)(q,{sellerInfo:F,products:s.this_seller_products.length>0&&s.this_seller_products.slice(0,s.this_seller_products.length>8?8:s.this_seller_products.length)})})]})})]}),M.length>0&&(0,l.jsx)("div",{className:"related-product w-full relative",children:(0,l.jsx)("div",{className:"container-x mx-auto relative z-10",children:(0,l.jsxs)("div",{className:"w-full pt-[60px] pb-[114px]",children:[(0,l.jsx)("h1",{className:"sm:text-3xl text-xl font-600 text-qblack leading-none mb-[30px]",children:y&&y.Related_Product}),(0,l.jsx)("div",{"data-aos":"fade-up",className:"grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",children:(0,l.jsx)(o.Z,{datas:M,startLength:0,endLength:M.length>4?4:M.length,children:e=>{let{datas:s}=e;return(0,l.jsx)("div",{className:"item",children:(0,l.jsx)(m.Z,{datas:s})},s.id)}})})]})})})]}),w&&(0,l.jsxs)("div",{className:"w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center",children:[(0,l.jsx)("div",{onClick:()=>b(!w),className:"w-full h-full fixed left-0 right-0 bg-black  bg-opacity-25"}),(0,l.jsxs)("div",{"data-aos":"fade-up",className:"sm:w-[548px] w-full bg-white rounded relative py-[40px] px-[38px]",style:{zIndex:"999"},children:[(0,l.jsxs)("div",{className:"title-bar flex items-center justify-between mb-3",children:[(0,l.jsx)("h6",{className:"text-2xl font-medium",children:y&&y.Report_Products}),(0,l.jsx)("span",{className:"cursor-pointer",onClick:()=>b(!w),children:(0,l.jsx)("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M26.9399 54.0001C12.0678 53.9832 -0.0210736 41.827 2.75822e-05 26.9125C0.0211287 12.0507 12.1965 -0.0315946 27.115 6.20658e-05C41.9703 0.0317188 54.0401 12.2153 54 27.1404C53.9599 41.9452 41.7972 54.0191 26.9399 54.0001ZM18.8476 16.4088C17.6765 16.4404 16.9844 16.871 16.6151 17.7194C16.1952 18.6881 16.3893 19.5745 17.1363 20.3258C19.0966 22.2906 21.0252 24.2913 23.0425 26.197C23.7599 26.8745 23.6397 27.2206 23.0045 27.8305C21.078 29.6793 19.2148 31.5956 17.3241 33.4802C16.9211 33.8812 16.5581 34.3012 16.4505 34.8857C16.269 35.884 16.6953 36.8337 17.5456 37.3106C18.4382 37.8129 19.5038 37.6631 20.3394 36.8421C22.3673 34.8435 24.3866 32.8365 26.3723 30.7999C26.8513 30.3082 27.1298 30.2871 27.6193 30.7915C29.529 32.7584 31.4851 34.6789 33.4201 36.6184C33.8463 37.0447 34.2831 37.4436 34.9098 37.5491C35.9184 37.7201 36.849 37.2895 37.3196 36.4264C37.7964 35.5548 37.6677 34.508 36.8912 33.7144C34.9731 31.756 33.0677 29.7806 31.0631 27.9149C30.238 27.1467 30.3688 26.7479 31.1031 26.0535C32.9896 24.266 34.8022 22.3982 36.6338 20.5516C37.7922 19.3845 37.8914 17.9832 36.9081 17.0293C35.9501 16.1007 34.5975 16.2146 33.4623 17.3416C31.5188 19.2748 29.5649 21.1995 27.6594 23.1664C27.1446 23.6983 26.8492 23.6962 26.3343 23.1664C24.4267 21.1974 22.4664 19.2811 20.5336 17.3374C19.9997 16.7971 19.4258 16.3666 18.8476 16.4088Z",fill:"#F34336"})})})]}),(0,l.jsxs)("div",{className:"inputs w-full",children:[(0,l.jsxs)("div",{className:"w-full mb-5",children:[(0,l.jsx)(p.Z,{label:y&&y.Enter_Report_Ttile+"*",placeholder:y&&y.Enter_Report_Ttile,type:"text",name:"name",inputClasses:"h-[50px]",labelClasses:"text-[13px] font-600 leading-[24px] text-qblack",value:R,inputHandler:e=>S(e.target.value),error:!!(z&&Object.hasOwn(z,"subject"))}),z&&Object.hasOwn(z,"description")?(0,l.jsx)("span",{className:"text-sm mt-1 text-qred",children:z.subject[0]}):""]}),(0,l.jsxs)("div",{className:"w-full mb-[40px]",children:[(0,l.jsxs)("h6",{className:"input-label  capitalize text-[13px] font-600 leading-[24px] text-qblack block mb-2 ",children:[y&&y.Enter_Report_Note,"*"]}),(0,l.jsx)("textarea",{name:"",id:"",cols:"30",rows:"6",className:"w-full focus:ring-0 rounded focus:outline-none py-3 px-4 border  placeholder:text-sm text-sm ".concat(z?"border-qred":"border-qpurplelow/10"),placeholder:y&&y.Type,value:I,onChange:e=>E(e.target.value)}),z&&Object.hasOwn(z,"description")?(0,l.jsx)("span",{className:"text-sm mt-1 text-qred",children:z.description[0]}):""]}),(0,l.jsxs)("button",{onClick:()=>O(s.product.id),type:"button",className:"black-btn rounded flex h-[50px] items-center justify-center w-full",children:[(0,l.jsx)("span",{children:y&&y.Submit_Report}),k&&(0,l.jsx)("span",{className:"w-5 ",style:{transform:"scale(0.3)"},children:(0,l.jsx)(u.Z,{})})]})]})]})]})]})})})}var Z=!0,R=e=>{let{data:s}=e,t=(0,a.useRouter)();return(0,r.useEffect)(()=>{t&&!t.query.slug&&t.push("*")}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{title:"".concat(s.product&&s.product.seo_title),metaDes:s.product&&s.product.seo_description}),t.query.slug&&(0,l.jsx)(k,{details:s})]})}},3811:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});var l=t(5893);function a(e){let{paths:s=[{name:"home",path:"/"}]}=e;return(0,l.jsx)(l.Fragment,{children:s&&s.length>0&&(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px] print:hidden",children:s.map(e=>(0,l.jsxs)("span",{children:[(0,l.jsx)("a",{href:e.path,children:(0,l.jsx)("span",{className:"mx-1 capitalize",children:e.name})}),(0,l.jsx)("span",{className:"sperator",children:"/"})]},Math.random()))})},Math.random())})}},6909:function(e,s,t){"use strict";var l=t(5893),a=t(7294),r=t(3890);s.Z=function(e){let{className:s,textColor:t,label:i}=e,[n,c]=(0,a.useState)(null);return(0,a.useEffect)(()=>{c((0,r.Z)())},[]),(0,l.jsxs)("div",{className:"flex justify-center items-center group rounded-full relative transition-all duration-300 ease-in-out overflow-hidden cursor-pointer ".concat(s||""),children:[(0,l.jsxs)("div",{className:"flex space-x-1 items-center transition-all duration-300 ease-in-out relative z-10 ".concat(t||""),children:[(0,l.jsx)("span",{className:"text-sm font-600 tracking-wide leading-7 mr-2",children:i||n&&n.Shop_Now}),(0,l.jsx)("span",{children:(0,l.jsxs)("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"fill-current",children:[(0,l.jsx)("rect",{x:"2.08984",y:"0.636719",width:"6.94219",height:"1.54271",transform:"rotate(45 2.08984 0.636719)"}),(0,l.jsx)("rect",{x:"7",y:"5.54492",width:"6.94219",height:"1.54271",transform:"rotate(135 7 5.54492)"})]})})]}),(0,l.jsx)("div",{style:{transition:"transform 0.25s ease-in-out"},className:"w-full h-full bg-black absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 origin-[center_left] group-hover:origin-[center_right]"})]})}}},function(e){e.O(0,[235,582,477,774,888,179],function(){return e(e.s=1689)}),_N_E=e.O()}]);