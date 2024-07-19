"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[19769],{15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>m});var n=a(296540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=n.createContext({}),i=function(e){var r=n.useContext(u),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=i(a),p=t,m=f["".concat(u,".").concat(p)]||f[p]||y[p]||s;return a?n.createElement(m,l(l({ref:r},c),{},{components:a})):n.createElement(m,l({ref:r},c))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=a.length,l=new Array(s);l[0]=p;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[f]="string"==typeof e?e:t,l[1]=o;for(var i=2;i<s;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},555685:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=a(58168),t=(a(296540),a(15680));const s={title:"array_shuffle",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_shuffle",id:"version-1.2/sql-manual/sql-functions/array-functions/array_shuffle",title:"array_shuffle",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_shuffle.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_shuffle",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_shuffle",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_shuffle",language:"en"},sidebar:"docs",previous:{title:"array_concat",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_concat"},next:{title:"array_cum_sum",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_cum_sum"}},u={},i=[{value:"array_shuffle",id:"array_shuffle",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},f="wrapper";function y(e){let{components:r,...a}=e;return(0,t.yg)(f,(0,n.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_shuffle"},"array_shuffle"),(0,t.yg)("version",{since:"2.0"},(0,t.yg)("p",null,"array_shuffle\nshuffle")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_shuffle(ARRAY<T> array1, [INT seed])\nARRAY<T> shuffle(ARRAY<T> array1, [INT seed])\n")),(0,t.yg)("p",null,"Randomly arrange the elements in the array. Among them, the parameter array1 is the array to be randomly arranged, and the optional parameter seed is to set the initial value used by the pseudo-random number generator to generate pseudo-random numbers.\nShuffle has the same function as array_shuffle."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"array_shuffle(array1);\narray_shuffle(array1, 0);\nshuffle(array1);\nshuffle(array1, 0);\n")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"\nmysql [test]> select c_array1, array_shuffle(c_array1) from array_test; \n+-----------------------+---------------------------+\n| c_array1              | array_shuffle(`c_array1`) |\n+-----------------------+---------------------------+\n| [1, 2, 3, 4, 5, NULL] | [2, NULL, 5, 3, 4, 1]     |\n| [6, 7, 8, NULL]       | [7, NULL, 8, 6]           |\n| [1, NULL]             | [1, NULL]                 |\n| NULL                  | NULL                      |\n+-----------------------+---------------------------+\n4 rows in set (0.01 sec)\n\nMySQL [test]> select c_array1, array_shuffle(c_array1, 0) from array_test; \n+-----------------------+------------------------------+\n| c_array1              | array_shuffle(`c_array1`, 0) |\n+-----------------------+------------------------------+\n| [1, 2, 3, 4, 5, NULL] | [1, 3, 2, NULL, 4, 5]        |\n| [6, 7, 8, NULL]       | [6, 8, 7, NULL]              |\n| [1, NULL]             | [1, NULL]                    |\n| NULL                  | NULL                         |\n+-----------------------+------------------------------+\n4 rows in set (0.01 sec)\n\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,ARRAY_SHUFFLE,SHUFFLE"))}y.isMDXComponent=!0}}]);