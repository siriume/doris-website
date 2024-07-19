"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54539],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>g});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,g=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},722789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const o={title:"Apache Doris version 2.0.12 has been released",summary:"Thanks to our community developers and users for their contributions. Doris version 2.0.12 will bring 99 improvements and bug fixes.",description:"Thanks to our community developers and users for their contributions. Doris version 2.0.12 will bring 99 improvements and bug fixes.",date:"2024-06-27",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.12.jpg"},i=void 0,s={permalink:"/blog/release-note-2.0.12",source:"@site/blog/release-note-2.0.12.md",title:"Apache Doris version 2.0.12 has been released",description:"Thanks to our community developers and users for their contributions. Doris version 2.0.12 will bring 99 improvements and bug fixes.",date:"2024-06-27T00:00:00.000Z",formattedDate:"June 27, 2024",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris version 2.0.12 has been released",summary:"Thanks to our community developers and users for their contributions. Doris version 2.0.12 will bring 99 improvements and bug fixes.",description:"Thanks to our community developers and users for their contributions. Doris version 2.0.12 will bring 99 improvements and bug fixes.",date:"2024-06-27",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.12.jpg"},prevItem:{title:"Apache Doris version 2.0.13 has been released",permalink:"/blog/release-note-2.0.13"},nextItem:{title:"Apache Doris 2.1.4 just released",permalink:"/blog/release-note-2.1.4"}},l={authorsImageUrls:[void 0]},p=[{value:"Behavior changes",id:"behavior-changes",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Credits",id:"credits",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Thanks to our community developers and users for their contributions. Doris version 2.0.12 will bring 99 improvements and bug fixes."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Quick Download:")," ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"GitHub Release:")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,a.yg)("h2",{id:"behavior-changes"},"Behavior changes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"No longer set the default table comment to the table type. Instead, set it to be empty by default, for example, change COMMENT 'OLAP' to COMMENT ' '.  This new behavior is more friendly for BI software that relies on table comments. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35855"},"#35855"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Change the type of the ",(0,a.yg)("inlineCode",{parentName:"p"},"@@autocommit")," variable from ",(0,a.yg)("inlineCode",{parentName:"p"},"BOOLEAN")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"BIGINT")," to prevent errors from certain MySQL clients (such as .NET MySQL.Data). ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33282"},"#33282")))),(0,a.yg)("h2",{id:"improvements"},"Improvements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Remove the ",(0,a.yg)("inlineCode",{parentName:"p"},"disable_nested_complex_type")," parameter and allow the creation of nested ",(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"MAP"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"STRUCT")," types by default. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36255"},"#36255"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The HMS catalog supports the ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW CREATE DATABASE")," command. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/28145"},"#28145"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Add more inverted index metrics to the query profile. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36545"},"#36545"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Cross-Cluster Replication (CCR) supports inverted indices. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/31743"},"#31743")))),(0,a.yg)("p",null,"You can access the full list through the GitHub ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.11...2.0.12"},"link")," , with the key features and improvements highlighted below."),(0,a.yg)("h2",{id:"credits"},"Credits"),(0,a.yg)("p",null,"Thanks all who contribute to this release:"),(0,a.yg)("p",null,"@airborne12, D14@amorynan, D14@BiteTheDDDDt, D14@cambyzju, D14@caoliang-web, D14@dataroaring, D14@eldenmoon, D14@feiniaofeiafei, D14@felixwluo, D14@gavinchou, D14@HappenLee, D14@hello-stephen, D14@jacktengg, D14@Jibing-Li, D14@Johnnyssc, D14@liaoxin01, D14@LiBinfeng-01, D14@luwei16, D14@mongo360, D14@morningman, D14@morrySnow, D14@mrhhsg, D14@Mryange, D14@mymeiyi, D14@qidaye, D14@qzsee, D14@starocean999, D14@w41ter, D14@wangbo, D14@wsjz, D14@wuwenchi, D14@xiaokang, D14@XuPengfei-1020, D14@xy720, D14@yongjinhou, D14@yujun777, D14@Yukang-Lian, D14@Yulei-Yang, D14@zclllyybb, D14@zddr, D14@zhannngchen, D14@zhiqiang-hhhh, D14@zy-kkk, D14@zzzxl1993"))}c.isMDXComponent=!0}}]);