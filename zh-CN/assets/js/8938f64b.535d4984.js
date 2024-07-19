"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57621],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(i,".").concat(f)]||p[f]||y[f]||a;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},756388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const a={title:"JSON_TYPE",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/json-functions/json-type",id:"version-2.0/sql-manual/sql-functions/json-functions/json-type",title:"JSON_TYPE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/json-functions/json-type.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-type",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-type",draft:!1,tags:[],version:"2.0",frontMatter:{title:"JSON_TYPE",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_EXISTS_PATH",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-exists-path"},next:{title:"JSON_ARRAY",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-array"}},i={},u=[{value:"jsonb_type",id:"jsonb_type",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"jsonb_type"},"jsonb_type"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"\u7528\u6765\u5224\u65adjson_path\u6307\u5b9a\u7684\u5b57\u6bb5\u5728JSONB\u6570\u636e\u4e2d\u7684\u7c7b\u578b\uff0c\u5982\u679c\u5b57\u6bb5\u4e0d\u5b58\u5728\u8fd4\u56deNULL\uff0c\u5982\u679c\u5b58\u5728\u8fd4\u56de\u4e0b\u9762\u7684\u7c7b\u578b\u4e4b\u4e00"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"object"),(0,o.yg)("li",{parentName:"ul"},"array"),(0,o.yg)("li",{parentName:"ul"},"null"),(0,o.yg)("li",{parentName:"ul"},"bool"),(0,o.yg)("li",{parentName:"ul"},"int"),(0,o.yg)("li",{parentName:"ul"},"bigint"),(0,o.yg)("li",{parentName:"ul"},"largeint"),(0,o.yg)("li",{parentName:"ul"},"double"),(0,o.yg)("li",{parentName:"ul"},"string")),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"STRING json_type(JSON j, VARCHAR json_path)\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"\u53c2\u8003 ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Types/JSON"},"json tutorial")," \u4e2d\u7684\u793a\u4f8b"),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"json_type"))}y.isMDXComponent=!0}}]);