"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[15387],{15680:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>m});var r=n(296540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=s,m=p["".concat(o,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,c(c({ref:t},i),{},{components:n})):r.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:s,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},464772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(58168),s=(n(296540),n(15680));const a={title:"NAMED_STRUCT",language:"zh-CN"},c=void 0,l={unversionedId:"sql-manual/sql-functions/struct-functions/named-struct",id:"version-2.1/sql-manual/sql-functions/struct-functions/named-struct",title:"NAMED_STRUCT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/struct-functions/named-struct.md",sourceDirName:"sql-manual/sql-functions/struct-functions",slug:"/sql-manual/sql-functions/struct-functions/named-struct",permalink:"/zh-CN/docs/sql-manual/sql-functions/struct-functions/named-struct",draft:!1,tags:[],version:"2.1",frontMatter:{title:"NAMED_STRUCT",language:"zh-CN"},sidebar:"docs",previous:{title:"STRUCT",permalink:"/zh-CN/docs/sql-manual/sql-functions/struct-functions/struct"},next:{title:"STRUCT_ELEMENT",permalink:"/zh-CN/docs/sql-manual/sql-functions/struct-functions/struct-element"}},o={},u=[{value:"named_struct",id:"named_struct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,s.yg)(p,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"named_struct"},"named_struct"),(0,s.yg)("p",null,"named_struct"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"STRUCT<T1, T2, T3, ...> named_struct({VARCHAR, T1}, {VARCHAR, T2}, ...)")),(0,s.yg)("p",null,"\u6839\u636e\u7ed9\u5b9a\u7684\u5b57\u7b26\u4e32\u548c\u503c\u6784\u9020\u5e76\u8fd4\u56destruct"),(0,s.yg)("p",null,"\u53c2\u6570\u4e2a\u6570\u5fc5\u987b\u4e3a\u975e0\u5076\u6570\uff0c\u5947\u6570\u4f4d\u662ffield\u7684\u540d\u5b57\uff0c\u5fc5\u987b\u4e3a\u5e38\u91cf\u5b57\u7b26\u4e32\uff0c\u5076\u6570\u4f4d\u662ffield\u7684\u503c\uff0c\u53ef\u4ee5\u662f\u591a\u5217\u6216\u5e38\u91cf"),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> select named_struct('f1', 1, 'f2', 'a', 'f3', \"abc\");\n+-----------------------------------------------+\n| named_struct('f1', 1, 'f2', 'a', 'f3', 'abc') |\n+-----------------------------------------------+\n| {1, 'a', 'abc'}                               |\n+-----------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select named_struct('a', null, 'b', \"v\");\n+-----------------------------------+\n| named_struct('a', NULL, 'b', 'v') |\n+-----------------------------------+\n| {NULL, 'v'}                       |\n+-----------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select named_struct('f1', k1, 'f2', k2, 'f3', null) from test_tb;\n+--------------------------------------------------+\n| named_struct('f1', `k1`, 'f2', `k2`, 'f3', NULL) |\n+--------------------------------------------------+\n| {1, 'a', NULL}                                   |\n+--------------------------------------------------+\n1 row in set (0.02 sec)\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("p",null,"NAMED, STRUCT, NAMED_STRUCT"))}f.isMDXComponent=!0}}]);