"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50647],{15680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>m});var a=n(296540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=a.createContext({}),u=function(e){var r=a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=t,m=p["".concat(i,".").concat(d)]||p[d]||y[d]||c;return n?a.createElement(m,l(l({ref:r},s),{},{components:n})):a.createElement(m,l({ref:r},s))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[p]="string"==typeof e?e:t,l[1]=o;for(var u=2;u<c;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},771745:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var a=n(58168),t=(n(296540),n(15680));const c={title:"ARRAY_COMPACY",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-compact",id:"version-2.0/sql-manual/sql-functions/array-functions/array-compact",title:"ARRAY_COMPACY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-compact.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-compact",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-compact",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_COMPACY",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_PUSHBACK",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-pushback"},next:{title:"ARRAY_CONCAT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-concat"}},i={},u=[{value:"array_compact",id:"array_compact",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function y(e){let{components:r,...n}=e;return(0,t.yg)(p,(0,a.A)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_compact"},"array_compact"),(0,t.yg)("p",null,"array_compact"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("p",null,"\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u8fde\u7eed\u7684\u91cd\u590d\u5143\u7d20,\u7ed3\u679c\u503c\u7684\u987a\u5e8f\u7531\u6e90\u6570\u7ec4\u4e2d\u7684\u987a\u5e8f\u51b3\u5b9a\u3002"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Array<T> array_compact(arr)")),(0,t.yg)("h4",{id:"arguments"},"Arguments"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"arr")," \u2014 \u9700\u8981\u5904\u7406\u7684\u6570\u7ec4."),(0,t.yg)("h4",{id:"returned-value"},"Returned value"),(0,t.yg)("p",null,"\u4e0d\u5b58\u5728\u8fde\u7eed\u91cd\u590d\u5143\u7d20\u7684\u6570\u7ec4."),(0,t.yg)("p",null,"Type: Array."),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"select array_compact([1, 2, 3, 3, null, null, 4, 4]);\n\n+----------------------------------------------------+\n| array_compact(ARRAY(1, 2, 3, 3, NULL, NULL, 4, 4)) |\n+----------------------------------------------------+\n| [1, 2, 3, NULL, 4]                                 |\n+----------------------------------------------------+\n\nselect array_compact(['aaa','aaa','bbb','ccc','ccccc',null, null,'dddd']);\n\n+-------------------------------------------------------------------------------+\n| array_compact(ARRAY('aaa', 'aaa', 'bbb', 'ccc', 'ccccc', NULL, NULL, 'dddd')) |\n+-------------------------------------------------------------------------------+\n| ['aaa', 'bbb', 'ccc', 'ccccc', NULL, 'dddd']                                  |\n+-------------------------------------------------------------------------------+\n\nselect array_compact(['2015-03-13','2015-03-13']);\n\n+--------------------------------------------------+\n| array_compact(ARRAY('2015-03-13', '2015-03-13')) |\n+--------------------------------------------------+\n| ['2015-03-13']                                   |\n+--------------------------------------------------+\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,COMPACT,ARRAY_COMPACT"))}y.isMDXComponent=!0}}]);