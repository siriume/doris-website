"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[60589],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,y=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},222921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"JSON_REPLACE",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/json-functions/json-replace",id:"sql-manual/sql-functions/json-functions/json-replace",title:"JSON_REPLACE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/json-functions/json-replace.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-replace",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-replace",draft:!1,tags:[],version:"current",frontMatter:{title:"JSON_REPLACE",language:"en"},sidebar:"docs",previous:{title:"JSON_INSERT",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-insert"},next:{title:"JSON_SET",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-set"}},i={},c=[{value:"json_replace",id:"json_replace",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"json_replace"},"json_replace"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR json_replace(VARCHAR json_str, VARCHAR path, VARCHAR val[, VARCHAR path, VARCHAR val] ...)")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"json_replace")," function updates data in a JSON and returns the result.Returns NULL if ",(0,a.yg)("inlineCode",{parentName:"p"},"json_str")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"path")," is NULL. Otherwise, an error occurs if the ",(0,a.yg)("inlineCode",{parentName:"p"},"json_str")," argument is not a valid JSON or any path argument is not a valid path expression or contains a * wildcard."),(0,a.yg)("p",null,"The path-value pairs are evaluated left to right."),(0,a.yg)("p",null,"A path-value pair for an existing path in the json overwrites the existing json value with the new value."),(0,a.yg)("p",null,"Otherwise, a path-value pair for a nonexisting path in the json is ignored and has no effect."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MySQL> select json_replace(null, null, null);\n+----------------------------------+\n| json_replace(NULL, NULL, 'NULL') |\n+----------------------------------+\n| NULL                             |\n+----------------------------------+\n\nMySQL> select json_replace('{\"k\": 1}', \"$.k\", 2);\n+----------------------------------------+\n| json_replace('{\\\"k\\\": 1}', '$.k', '2') |\n+----------------------------------------+\n| {\"k\":2}                                |\n+----------------------------------------+\n\nMySQL> select json_replace('{\"k\": 1}', \"$.j\", 2);\n+----------------------------------------+\n| json_replace('{\\\"k\\\": 1}', '$.j', '2') |\n+----------------------------------------+\n| {\"k\":1}                                |\n+----------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"JSON, json_replace"))}d.isMDXComponent=!0}}]);