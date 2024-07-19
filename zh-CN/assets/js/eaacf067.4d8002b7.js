"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[83906],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,d=u["".concat(i,".").concat(f)]||u[f]||y[f]||l;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},493079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const l={title:"JSON_REPLACE",language:"zh-CN"},a=void 0,s={unversionedId:"sql-manual/sql-functions/json-functions/json-replace",id:"version-2.1/sql-manual/sql-functions/json-functions/json-replace",title:"JSON_REPLACE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/json-functions/json-replace.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-replace",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-replace",draft:!1,tags:[],version:"2.1",frontMatter:{title:"JSON_REPLACE",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_INSERT",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-insert"},next:{title:"JSON_SET",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-set"}},i={},c=[{value:"json_replace",id:"json_replace",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"json_replace"},"json_replace"),(0,o.yg)("version",{since:"dev"}),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR json_replace(VARCHAR json_str, VARCHAR path, VARCHAR val[, VARCHAR path, VARCHAR val] ...)")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"json_replace")," \u51fd\u6570\u5728 JSON \u4e2d\u66f4\u65b0\u6570\u636e\u5e76\u8fd4\u56de\u7ed3\u679c\u3002\u5982\u679c ",(0,o.yg)("inlineCode",{parentName:"p"},"json_str")," \u6216 ",(0,o.yg)("inlineCode",{parentName:"p"},"path")," \u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002\u5426\u5219\uff0c\u5982\u679c ",(0,o.yg)("inlineCode",{parentName:"p"},"json_str")," \u4e0d\u662f\u6709\u6548\u7684 JSON \u6216\u4efb\u4f55 ",(0,o.yg)("inlineCode",{parentName:"p"},"path")," \u53c2\u6570\u4e0d\u662f\u6709\u6548\u7684\u8def\u5f84\u8868\u8fbe\u5f0f\u6216\u5305\u542b\u4e86 * \u901a\u914d\u7b26\uff0c\u5219\u4f1a\u8fd4\u56de\u9519\u8bef\u3002"),(0,o.yg)("p",null,"\u8def\u5f84\u503c\u5bf9\u6309\u4ece\u5de6\u5230\u53f3\u7684\u987a\u5e8f\u8fdb\u884c\u8bc4\u4f30\u3002"),(0,o.yg)("p",null,"\u5982\u679c JSON \u4e2d\u5df2\u5b58\u5728\u67d0\u4e2a\u8def\u5f84\uff0c\u5219\u8def\u5f84\u503c\u5bf9\u4f1a\u5c06\u73b0\u6709 JSON \u503c\u8986\u76d6\u4e3a\u65b0\u503c\u3002\n\u5426\u5219\uff0c\u5bf9\u4e8e JSON \u4e2d\u4e0d\u5b58\u5728\u7684\u67d0\u4e2a\u8def\u5f84\u7684\u8def\u5f84\u503c\u5bf9\u5c06\u88ab\u5ffd\u7565\u4e14\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL> select json_replace(null, null, null);\n+----------------------------------+\n| json_replace(NULL, NULL, 'NULL') |\n+----------------------------------+\n| NULL                             |\n+----------------------------------+\n\nMySQL> select json_replace('{\"k\": 1}', \"$.k\", 2);\n+----------------------------------------+\n| json_replace('{\\\"k\\\": 1}', '$.k', '2') |\n+----------------------------------------+\n| {\"k\":2}                                |\n+----------------------------------------+\n\nMySQL> select json_replace('{\"k\": 1}', \"$.j\", 2);\n+----------------------------------------+\n| json_replace('{\\\"k\\\": 1}', '$.j', '2') |\n+----------------------------------------+\n| {\"k\":1}                                |\n+----------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"JSON, json_replace"))}y.isMDXComponent=!0}}]);