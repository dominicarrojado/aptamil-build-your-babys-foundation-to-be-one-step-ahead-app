(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{7336:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upload",function(){return c(2636)}])},4668:function(f,c,a){"use strict";a.d(c,{Z:function(){return m}});var g=a(6042),h=a(9396),i=a(9534),j=a(5893),d=a(7294),e=a(4184),k=a.n(e);function l(a){var c=a.title,d=a.subtitle,b=a.position;return(0,j.jsxs)("span",{className:k()("absolute flex flex-col items-center justify-center w-[100px] h-[100px] inset-y-0 m-auto border-[8px] border-sky-450 rounded-full bg-white text-sky-450 font-kghappy font-bold leading-5","transition group-hover:border-sky-750 group-active:border-sky-775 group-hover:text-sky-750 group-active:text-sky-775",{"right-0":"right"===b,"left-0":"left"===b}),children:[(0,j.jsx)("span",{className:k()("text-[25px]"),children:c}),(0,j.jsx)("span",{className:k()("text-[11px] uppercase"),children:d})]})}var b=(0,d.forwardRef)(function(a,c){var m=a.as,n=void 0===m?"button":m,o=a.type,p=a.iconPosition,d=void 0===p?"right":p,t=a.children,u=a.className,q=a.iconTitle,r=a.iconSubtitle,s=a.isExternal,v=a.target,w=a.rel,x=a.disabled,y=(0,i.Z)(a,["as","type","iconPosition","children","className","iconTitle","iconSubtitle","isExternal","target","rel","disabled"]),b=q&&r,e=(0,h.Z)((0,g.Z)({},y),{className:k()("group relative inline-block rounded-full bg-sky-450 py-[20px] font-kghappy text-[14px] text-white text-center font-bold uppercase select-none","transition hover:bg-sky-750 active:bg-sky-775","sm:text-[16px] ",u,{"px-[45px]":!b,"pl-[20px] pr-[100px] sm:pl-[50px]":b&&"right"===d,"pr-[20px] pl-[100px] sm:pr-[50px]":b&&"left"===d,"opacity-40 pointer-events-none":x})}),f=(0,j.jsxs)(j.Fragment,{children:[t,b&&(0,j.jsx)(l,{title:q,subtitle:r,position:d})]});return"a"===n?(0,j.jsx)("a",(0,h.Z)((0,g.Z)({},e),{ref:c,target:s?"_blank":v,rel:s?"noopener noreferrer nofollow":w,children:f})):"label"===n?(0,j.jsx)("label",(0,h.Z)((0,g.Z)({},e),{ref:c,children:f})):(0,j.jsx)("button",(0,h.Z)((0,g.Z)({},e),{ref:c,type:void 0===o?"button":o,children:f}))});b.displayName="Button";var m=b},2636:function(e,b,a){"use strict";a.r(b),a.d(b,{"__N_SSG":function(){return s},default:function(){return t}});var f=a(5893),c=a(1664),g=a.n(c),h=a(1163),i=a(7294),d=a(4184),j=a.n(d),k=a(2953),l=a(4718),m=a(3348),n=a(6034),o=a(4668),p=a(6204),q=a(8303),r=a(9953),s=!0;function t(){var c=(0,h.useRouter)(),a=(0,i.useContext)(q.x),b=a.formCompleted;return(0,i.useEffect)(function(){b||c.replace(p.AW.HOME)},[b]),(0,f.jsxs)(m.Z,{children:[(0,f.jsx)(l.Z,{src:(0,k.V)("images/bg-space-7.png")}),(0,f.jsxs)("main",{className:j()("max-w-[540px] mx-auto pt-[30px] px-[15px]","md:max-w-[720px] md:pt-[50px]","xl:max-w-full xl:flex xl:items-center xl:pt-[70px]"),children:[(0,f.jsxs)("div",{className:"xl:w-1/2 xl:max-w-[534px]",children:[(0,f.jsx)("img",{src:(0,k.V)("images/banner-congratulations.png"),alt:"Congratulations!",width:"534",height:"104",className:"max-w-full h-auto aspect-534/104 mx-auto"}),(0,f.jsx)("h1",{className:j()("mt-3 font-kghappy text-[30px] text-center","md:text-[35px]"),children:"Thank you for joining our contest!"}),(0,f.jsxs)("p",{className:j()("mt-4 font-kghappy text-[16px] font-bold text-center","md:text-[18px]"),children:["Get additional chances by sharing this contest with your friends and uploading your recent Aptamil",(0,f.jsx)("sup",{children:"7"})," purchase receipt."]}),(0,f.jsxs)("div",{className:j()("max-w-[460px] mt-8 mx-auto flex flex-col gap-[40px]","sm:gap-[50px]"),children:[(0,f.jsxs)(o.Z,{as:"a",href:"".concat(p.RU.SHARER_FACEBOOK,"?u=").concat(encodeURIComponent(r.cG)),className:"w-full",iconTitle:"+5",iconSubtitle:"chances",disabled:a.userShared,onClick:function(){return a.setUserShared(!0)},isExternal:!0,children:[(0,f.jsx)("img",{src:(0,k.V)("images/icon-share.png"),alt:"Share",width:"23",height:"22",className:"inline-block w-auto h-[19px] aspect-23/22 -mt-1"})," ","Share with friends"]}),(0,f.jsxs)(o.Z,{as:"label",className:"w-full",iconTitle:"+10",iconSubtitle:"chances",iconPosition:"left",htmlFor:"file-upload",disabled:a.userUploaded,children:[(0,f.jsx)("img",{src:(0,k.V)("images/icon-receipt.png"),alt:"Receipt",width:"23",height:"27",className:"inline-block w-auto h-[19px] aspect-23/27 -mt-1"})," ","Upload purchase receipt"]}),(0,f.jsx)("input",{id:"file-upload",name:"file-upload",type:"file",className:"sr-only",accept:"image/jpeg, image/png",onChange:function(c){var b=c.target.files;b&&0!==b.length&&a.setUserUploaded(!0)}}),(0,f.jsxs)("div",{className:"text-center",children:[(0,f.jsxs)(o.Z,{as:"a",className:"w-full",href:p.RU.APTAADVANTAGE,isExternal:!0,children:[(0,f.jsx)("img",{src:(0,k.V)("images/icon-web.png"),alt:"Web",width:"26",height:"26",className:"inline-block w-auto h-[19px] aspect-26/26 -mt-1"})," ","Go to aptaadvantage",(0,f.jsx)("span",{className:"inline-block",children:".com.sg"})]}),(0,f.jsx)(g(),{href:p.AW.HOME,children:(0,f.jsx)("a",{className:j()("inline-block mt-6 text-sky-450 font-light","hover:underline","sm:text-[18px]"),children:"Back to Homepage"})})]})]})]}),(0,f.jsx)("div",{className:"xl:w-1/2",children:(0,f.jsx)("img",{src:(0,k.V)("images/product-aptamil-gold-plus-stage-2-dha-level-md.png"),alt:"Aptamil Gold+ Stage 2 DHA level",width:"486",height:"556",className:"mx-auto aspect-[486/556]"})})]}),(0,f.jsx)(n.Z,{})]})}},9396:function(c,a,b){"use strict";function d(b,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(a)):(function(b,d){var a=Object.keys(b);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(b);a.push.apply(a,c)}return a})(Object(a)).forEach(function(c){Object.defineProperty(b,c,Object.getOwnPropertyDescriptor(a,c))}),b}b.d(a,{Z:function(){return d}})}},function(a){a.O(0,[323,774,888,179],function(){var b;return a(a.s=7336)}),_N_E=a.O()}])