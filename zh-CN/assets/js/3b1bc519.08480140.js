"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78459],{15680:(e,r,n)=>{n.d(r,{xA:()=>i,yg:()=>d});var a=n(296540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=a.createContext({}),c=function(e){var r=a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},i=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),f=c(n),p=t,d=f["".concat(u,".").concat(p)]||f[p]||y[p]||l;return n?a.createElement(d,s(s({ref:r},i),{},{components:n})):a.createElement(d,s({ref:r},i))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,s=new Array(l);s[0]=p;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[f]="string"==typeof e?e:t,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},637344:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(58168),t=(n(296540),n(15680));const l={title:"ARRAY_SHUFFLE",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-shuffle",id:"version-2.1/sql-manual/sql-functions/array-functions/array-shuffle",title:"ARRAY_SHUFFLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-shuffle.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-shuffle",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-shuffle",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_SHUFFLE",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_ZIP",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-zip"},next:{title:"ARRAY_CUM_SUM",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-cum-sum"}},u={},c=[{value:"array_shuffle",id:"array_shuffle",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:c},f="wrapper";function y(e){let{components:r,...n}=e;return(0,t.yg)(f,(0,a.A)({},i,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_shuffle"},"array_shuffle"),(0,t.yg)("p",null,"array_shuffle\nshuffle"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_shuffle(ARRAY<T> array1, [INT seed])\nARRAY<T> shuffle(ARRAY<T> array1, [INT seed])\n")),(0,t.yg)("p",null,"\u5c06\u6570\u7ec4\u4e2d\u5143\u7d20\u8fdb\u884c\u968f\u673a\u6392\u5217\u3002\u5176\u4e2d\uff0c\u53c2\u6570 array1 \u4e3a\u8981\u8fdb\u884c\u968f\u673a\u6392\u5217\u7684\u6570\u7ec4\uff0c\u53ef\u9009\u53c2\u6570 seed \u662f\u8bbe\u5b9a\u4f2a\u968f\u673a\u6570\u751f\u6210\u5668\u7528\u4e8e\u751f\u6210\u4f2a\u968f\u673a\u6570\u7684\u521d\u59cb\u6570\u503c\u3002\nshuffle \u4e0e array_shuffle \u529f\u80fd\u76f8\u540c\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"array_shuffle(array1);\narray_shuffle(array1, 0);\nshuffle(array1);\nshuffle(array1, 0);\n")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"\nmysql [test]> select c_array1, array_shuffle(c_array1) from array_test; \n+-----------------------+---------------------------+\n| c_array1              | array_shuffle(`c_array1`) |\n+-----------------------+---------------------------+\n| [1, 2, 3, 4, 5, NULL] | [2, NULL, 5, 3, 4, 1]     |\n| [6, 7, 8, NULL]       | [7, NULL, 8, 6]           |\n| [1, NULL]             | [1, NULL]                 |\n| NULL                  | NULL                      |\n+-----------------------+---------------------------+\n4 rows in set (0.01 sec)\n\nMySQL [test]> select c_array1, array_shuffle(c_array1, 0) from array_test; \n+-----------------------+------------------------------+\n| c_array1              | array_shuffle(`c_array1`, 0) |\n+-----------------------+------------------------------+\n| [1, 2, 3, 4, 5, NULL] | [1, 3, 2, NULL, 4, 5]        |\n| [6, 7, 8, NULL]       | [6, 8, 7, NULL]              |\n| [1, NULL]             | [1, NULL]                    |\n| NULL                  | NULL                         |\n+-----------------------+------------------------------+\n4 rows in set (0.01 sec)\n\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,ARRAY_SHUFFLE,SHUFFLE"))}y.isMDXComponent=!0}}]);