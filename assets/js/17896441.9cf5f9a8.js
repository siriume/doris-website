"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18401],{239022:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(296540),l=n(320053),r=n(175489);function s(e){const{permalink:t,title:n,subLabel:s,isNext:o}=e;return a.createElement(r.A,{className:(0,l.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&a.createElement("div",{className:"pagination-nav__sublabel"},s),a.createElement("div",{className:"pagination-nav__label"},n))}},865195:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(58168),l=n(296540),r=n(406342);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=i(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=l.memo(u);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...v}=e;const h=(0,r.p)(),b=d??h.tableOfContents.minHeadingLevel,g=u??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>o({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:g});return m((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:b,maxHeadingLevel:g}}),[c,i,b,g])),l.createElement(p,(0,a.A)({toc:E,className:n,linkClassName:c},v))}},456133:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(296540),l=n(320053),r=n(175489);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function o(e){let{permalink:t,label:n,count:o}=e;return a.createElement(r.A,{href:t,className:(0,l.A)(s.tag,o?s.tagWithCount:s.tagRegular)},n,o&&a.createElement("span",null,o))}},32252:(e,t,n)=>{n.d(t,{n:()=>s,r:()=>o});var a=n(296540),l=n(689532);const r=a.createContext(null);function s(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function o(){const e=(0,a.useContext)(r);if(null===e)throw new l.dV("DocsVersionProvider");return e}},525669:(e,t,n)=>{n.d(t,{Y:()=>l});var a=n(296540);function l(e){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"transition-slide",width:"16",height:"14",viewBox:"0 0 16 14",fill:"none"},a.createElement("path",{d:"M9.37549 12.3542L14.8755 6.85419L9.37549 1.35419",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M1.12549 6.85419L14.8755 6.85419",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round",strokeLinejoin:"round"}))}},534314:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var a=n(296540),l=n(901003),r=n(689532);const s=a.createContext(null);function o(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(s.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(s);if(null===e)throw new r.dV("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(320053),m=n(224581),u=n(58168),p=n(721312),v=n(239022);function h(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(v.A,(0,u.A)({},t,{subLabel:a.createElement(p.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(v.A,(0,u.A)({},n,{subLabel:a.createElement(p.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){const{metadata:e}=c();return a.createElement(h,{previous:e.previous,next:e.next})}var g=n(144586),E=n(175489),f=n(444070),A=n(117559),N=n(455597),L=n(32252);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function _(e){const t=C[e.versionMetadata.banner];return a.createElement(t,e)}function k(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(p.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(E.A,{to:n,onClick:l},a.createElement(p.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,g.A)(),{pluginId:r}=(0,f.vT)({failfast:!0}),{savePreferredVersionName:s}=(0,N.g1)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,f.HW)(r),i=o??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.A)(t,A.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(_,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(k,{versionLabel:c.label,to:i.path,onClick:()=>s(c.name)})))}function w(e){let{className:t}=e;const n=(0,L.r)();return n.banner?a.createElement(x,{className:t,versionMetadata:n}):null}function T(e){let{className:t}=e;const n=(0,L.r)();return n.badge?a.createElement("span",{className:(0,d.A)(t,A.G.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function H(e){let{lastUpdatedBy:t}=e;return a.createElement(p.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:A.G.common.lastUpdated},a.createElement(p.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(H,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const M={iconEdit:"iconEdit_Z9Sw"};function B(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.A)(M.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function I(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:A.G.common.editThisPage,style:{display:"flex",alignItems:"center"}},a.createElement(B,null),a.createElement(p.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var O=n(456133);const V={tags:"tags_jXut",tag:"tag_QGVx"};function G(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.A)(V.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:V.tag},a.createElement(O.A,{label:t,permalink:n}))}))))}const P={lastUpdated:"lastUpdated_vwxv"};function S(e){return a.createElement("div",{className:(0,d.A)(A.G.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(G,e)))}function z(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.A)(A.G.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(I,{editUrl:t})),a.createElement("div",{className:(0,d.A)("col",P.lastUpdated)},(n||l)&&a.createElement(y,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function D(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,o=s.length>0,i=!!(t||n||r);return o||i?a.createElement("footer",{className:(0,d.A)(A.G.docs.docFooter,"docusaurus-mt-lg")},o&&a.createElement(S,{tags:s}),i&&a.createElement(z,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var R=n(41422),F=n(865195);const j={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function W(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.A)({type:"button"},n,{className:(0,d.A)("clean-btn",j.tocCollapsibleButton,!t&&j.tocCollapsibleButtonExpanded,n.className)}),a.createElement(p.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const q={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function J(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:o}=(0,R.u)({initialState:!0});return a.createElement("div",{className:(0,d.A)(q.tocCollapsible,!s&&q.tocCollapsibleExpanded,n)},a.createElement(W,{collapsed:s,onClick:o}),a.createElement(R.N,{lazy:!0,className:q.tocCollapsibleContent,collapsed:s},a.createElement(F.A,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const Y={tocMobile:"tocMobile_ITEo"};function $(){const{toc:e,frontMatter:t}=c();return a.createElement(J,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.A)(A.G.docs.docTocMobile,Y.tocMobile)})}var Z=n(296054);function Q(){const{toc:e,frontMatter:t}=c();return a.createElement(Z.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:A.G.docs.docTocDesktop})}var X=n(751107),K=n(77910);function ee(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.A)(A.G.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(X.A,{as:"h1"},n)),a.createElement(K.A,null,t))}var te=n(884142),ne=n(299169),ae=n(486025);function le(e){return a.createElement("svg",(0,u.A)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const re={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function se(){const e=(0,ae.A)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(E.A,{"aria-label":(0,p.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(le,{className:re.breadcrumbHomeIcon})))}const oe={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ce(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(E.A,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function ie(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.A)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.A)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function de(){const e=(0,te.OF)(),t=(0,ne.Dt)();return e?a.createElement("nav",{className:(0,d.A)(A.G.docs.docBreadcrumbs,oe.breadcrumbsContainer),"aria-label":(0,p.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(se,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(ie,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(ce,{href:t.href,isLast:l},t.label))})))):null}const me={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};function ue(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement($,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(Q,null)}}(),{metadata:l}=c(),{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:i,tags:u}=l;return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.A)("col",!n.hidden&&me.docItemCol)},a.createElement(w,null),a.createElement("div",{className:me.docItemContainer},a.createElement("article",null,a.createElement(de,null),a.createElement(T,null),n.mobile,a.createElement(ee,null,t),a.createElement(D,null)),a.createElement(b,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function pe(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(o,{content:e.content},a.createElement(l.e3,{className:t},a.createElement(i,null),a.createElement(ue,null,a.createElement(n,null))))}},702244:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(697461),l=n(296540),r=n(320053);const s={...a.A,version:function(e){const{children:t,type:n="paragraph",since:a="",deprecated:s="",comment:o=""}=e,[c,i]=(0,l.useState)(!1);return l.createElement("span",{className:(0,r.A)("version-mark",n),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},l.createElement("span",{className:(0,r.A)("v-mark",c&&"show")},l.createElement("span",{className:(0,r.A)("version-tags")},a&&l.createElement("span",{className:"version-tag"},l.createElement("span",{className:"version-tag-t"},"Since"),l.createElement("span",{className:"version-tag-n since"},"Version ",a)),s&&l.createElement("span",{className:"version-tag"},l.createElement("span",{className:"version-tag-t"},"Deprecated"),l.createElement("span",{className:"version-tag-n deprecated"},"Version ",s))),o&&l.createElement("span",{className:"version-comment"},o)),t)}}},296054:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(58168),l=n(296540),r=n(320053),s=n(865195);const o={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs",bgCustomGradient:"bgCustomGradient_JmCe"};var c=n(144586),i=n(175489),d=n(525669);const m="table-of-contents__link toc-highlight",u="table-of-contents__link--active";function p(e){let{className:t,...n}=e;const{siteConfig:p}=(0,c.A)(),v=p.baseUrl.indexOf("zh-CN")>-1;return l.createElement("div",{className:(0,r.A)(o.tableOfContents,"thin-scrollbar",t)},v?l.createElement(i.A,{className:(0,r.A)(o.bgCustomGradient,"ml-4 mb-8 text-sm flex items-center hover:no-underline border border-[#aac8d6] rounded-md"),href:"https://www.huodongxing.com/event/3763009788811",target:"_blank"},l.createElement("div",{className:"px-2 grid gap-1"},l.createElement("span",{className:"block"},"7 \u6708 26 \u65e5 Apache Doris x \u5929\u7ffc\u4e91\u57ce\u5e02\u884c@\u4e0a\u6d77\u7ad9\u514d\u8d39\u53c2\u4e0e\ud83d\udd25"),l.createElement("span",null,"\u7acb\u5373\u62a5\u540d",l.createElement("span",{className:"ml-1"},l.createElement(d.Y,null))))):l.createElement(i.A,{className:"ml-4 mb-8 flex items-center hover:no-underline",href:"https://github.com/apache/doris/discussions",target:"_blank"},l.createElement("span",{className:"pr-2"},"Join Discussion"),l.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8500",id:"mx_n_1711090272569",width:"16",height:"16"},l.createElement("path",{d:"M522.24 896.512c-25.6 4.608-51.712 7.168-78.336 7.168-79.36 0-157.696-21.504-225.792-62.464l-18.432-10.752-103.936 28.16c-28.672 7.68-54.784-18.432-47.104-47.104l28.16-103.936c-10.752-17.92-17.408-30.208-20.992-36.864C20.992 607.232 3.072 536.064 3.584 463.36c0-243.2 197.12-440.32 440.32-440.32 221.696 0 405.504 164.352 435.712 377.856 90.112 55.808 144.896 154.112 144.896 260.096 0 51.2-12.8 100.352-36.352 144.384-2.048 4.096-6.144 10.752-11.776 20.48l17.408 64c7.68 28.672-18.432 54.784-47.104 47.104l-64-17.408-7.68 4.608c-47.616 28.672-101.888 43.52-157.184 43.52-71.68-0.512-140.8-25.088-195.584-71.168z m95.232-28.672c31.232 15.36 65.536 23.04 100.352 23.04 41.472 0 82.432-11.264 117.76-32.768 2.56-1.536 9.728-5.632 22.016-12.8 8.704-5.12 19.456-6.656 29.184-3.584l14.848 4.096-4.096-14.848c-2.56-10.24-1.536-20.48 4.096-29.696 6.144-10.24 12.288-20.992 18.432-31.232 17.92-33.28 27.136-70.656 27.136-108.544 0-59.904-23.552-117.76-65.536-160.256-13.312 164.352-118.272 303.616-264.192 366.592z m-462.848-155.648l-14.848 54.784 54.784-14.848c9.728-2.56 20.48-1.536 29.184 4.096 18.432 10.752 29.184 16.896 32.768 19.456 56.32 33.792 120.832 51.712 186.88 51.712 200.704 0 363.52-162.816 363.52-363.52s-162.816-363.52-363.52-363.52-363.52 162.816-363.52 363.52c0 60.928 14.848 119.296 43.008 171.52 3.584 7.168 13.312 23.04 27.648 47.616 5.632 8.704 6.656 19.456 4.096 29.184z m448.512-382.976c20.992 0 38.4 16.896 38.4 38.4 0 20.992-16.896 38.4-38.4 38.4H284.16c-20.992 0-38.4-16.896-38.4-38.4 0-20.992 16.896-38.4 38.4-38.4h318.976z m-153.088 191.488c20.992 0 38.4 16.896 38.4 38.4 0 20.992-16.896 38.4-38.4 38.4H284.16c-20.992 0-38.4-16.896-38.4-38.4 0-20.992 16.896-38.4 38.4-38.4h165.888z m0 0","p-id":"8501",fill:"currentColor"}))),l.createElement("span",{className:"ml-4"},v?"\u672c\u9875\u5bfc\u822a":"On This Page"),l.createElement(s.A,(0,a.A)({},n,{linkClassName:m,linkActiveClassName:u})))}}}]);