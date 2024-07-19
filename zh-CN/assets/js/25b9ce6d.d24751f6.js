"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22029],{15680:(t,n,e)=>{e.d(n,{xA:()=>s,yg:()=>_});var i=e(296540);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,i,r=function(t,n){if(null==t)return{};var e,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=i.createContext({}),l=function(t){var n=i.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},s=function(t){var n=l(t.components);return i.createElement(m.Provider,{value:n},t.children)},c="mdxType",b={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(t,n){var e=t.components,r=t.mdxType,a=t.originalType,m=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=l(e),u=r,_=c["".concat(m,".").concat(u)]||c[u]||b[u]||a;return e?i.createElement(_,o(o({ref:n},s),{},{components:e})):i.createElement(_,o({ref:n},s))}));function _(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=e.length,o=new Array(a);o[0]=u;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p[c]="string"==typeof t?t:r,o[1]=p;for(var l=2;l<a;l++)o[l]=e[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}u.displayName="MDXCreateElement"},520964:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var i=e(58168),r=(e(296540),e(15680));const a={title:"BITMAP_OR",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-or",id:"version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-or",title:"BITMAP_OR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-or.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-or",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-or",draft:!1,tags:[],version:"2.1",frontMatter:{title:"BITMAP_OR",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_EMPTY",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-empty"},next:{title:"BITMAP_AND",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-and"}},m={},l=[{value:"bitmap_or",id:"bitmap_or",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:l},c="wrapper";function b(t){let{components:n,...e}=t;return(0,r.yg)(c,(0,i.A)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"bitmap_or"},"bitmap_or"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_OR(BITMAP lhs, BITMAP rhs, ...)")),(0,r.yg)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u53ca\u4ee5\u4e0a\u7684\u8f93\u5165bitmap\u7684\u5e76\u96c6\uff0c\u8fd4\u56de\u65b0\u7684bitmap."),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(1))) ;\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(1))) |\n+---------------------------------------------------------+\n| 1                                                       |\n+---------------------------------------------------------+\n\nmysql> select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL));\n+--------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL)) |\n+--------------------------------------------------------------------------------------------+\n| 0,1,2,10                                                                                   |\n+--------------------------------------------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), bitmap_empty()));\n+------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), bitmap_empty())) |\n+------------------------------------------------------------------------------------------------------+\n| 0,1,2,10                                                                                             |\n+------------------------------------------------------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5')));\n+--------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+--------------------------------------------------------------------------------------------------------+\n| 1,2,3,4,5,10                                                                                           |\n+--------------------------------------------------------------------------------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"BITMAP_OR,BITMAP\n")))}b.isMDXComponent=!0}}]);