"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[97154],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,d=p["".concat(s,".").concat(m)]||p[m]||y[m]||l;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},489779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"ELEMENT_AT",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/element-at",id:"version-2.1/sql-manual/sql-functions/array-functions/element-at",title:"ELEMENT_AT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/element-at.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/element-at",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/element-at",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ELEMENT_AT",language:"zh-CN"},sidebar:"docs",previous:{title:"COUNTEQUAL",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/countequal"},next:{title:"SEQUENCE",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/sequence"}},s={},c=[{value:"element_at",id:"element_at",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"element_at"},"element_at"),(0,a.yg)("p",null,"element_at"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"T element_at(ARRAY<T> arr, BIGINT position)\nT arr[position]\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u4f4d\u7f6e\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"position")," \u7684\u5143\u7d20\u3002\u5982\u679c\u8be5\u4f4d\u7f6e\u4e0a\u5143\u7d20\u4e0d\u5b58\u5728\uff0c\u8fd4\u56deNULL\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"position")," \u4ece1\u5f00\u59cb\uff0c\u5e76\u4e14\u652f\u6301\u8d1f\u6570\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"position")," \u4e3a\u6b63\u6570\u4f7f\u7528\u8303\u4f8b:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT id,c_array,element_at(c_array, 5) FROM `array_test`;\n+------+-----------------+--------------------------+\n| id   | c_array         | element_at(`c_array`, 5) |\n+------+-----------------+--------------------------+\n|    1 | [1, 2, 3, 4, 5] |                        5 |\n|    2 | [6, 7, 8]       |                     NULL |\n|    3 | []              |                     NULL |\n|    4 | NULL            |                     NULL |\n+------+-----------------+--------------------------+\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"position")," \u4e3a\u8d1f\u6570\u4f7f\u7528\u8303\u4f8b:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT id,c_array,c_array[-2] FROM `array_test`;\n+------+-----------------+----------------------------------+\n| id   | c_array         | %element_extract%(`c_array`, -2) |\n+------+-----------------+----------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                                4 |\n|    2 | [6, 7, 8]       |                                7 |\n|    3 | []              |                             NULL |\n|    4 | NULL            |                             NULL |\n+------+-----------------+----------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ELEMENT_AT, SUBSCRIPT"))}y.isMDXComponent=!0}}]);