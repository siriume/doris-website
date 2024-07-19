"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[34304],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},730816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const o={title:"DATETIMEV2",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Types/DATETIMEV2",id:"version-1.2/sql-manual/sql-reference/Data-Types/DATETIMEV2",title:"DATETIMEV2",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Types/DATETIMEV2.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATETIMEV2",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/DATETIMEV2",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DATETIMEV2",language:"en"},sidebar:"docs",previous:{title:"DATEV2",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/DATEV2"},next:{title:"CHAR",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Types/CHAR"}},s={},c=[{value:"DATETIMEV2",id:"datetimev2",level:2},{value:"Description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"datetimev2"},"DATETIMEV2"),(0,a.yg)("p",null,"DATETIMEV2"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"DATETIMEV2(","[P]",")\nDate and time type.\nThe optional parameter P indicates the time precision and the value range is ","[0, 6]",", that is, it supports up to 6 decimal places (microseconds). 0 when not set.\nValue range is ['0000-01-01 00:00:00","[.000000]","','9999-12-31 23:59:59","[.999999]","'].\nThe form of printing is 'yyyy-MM-dd HH:mm:ss.SSSSSS'"),(0,a.yg)("h3",{id:"note"},"note"),(0,a.yg)("p",null,"Compared with the DATETIME type, DATETIMEV2 is more efficient and supports a time precision of up to microseconds."),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"DATETIMEV2"))}y.isMDXComponent=!0}}]);