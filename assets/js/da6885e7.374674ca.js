"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75761],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>y});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,y=d["".concat(i,".").concat(f)]||d[f]||p[f]||l;return r?t.createElement(y,s(s({ref:n},u),{},{components:r})):t.createElement(y,s({ref:n},u))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=f;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<l;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},688260:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=r(58168),o=(r(296540),r(15680));const l={title:"url_decode",language:"en"},s=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/url-decode",id:"version-2.1/sql-manual/sql-functions/string-functions/url-decode",title:"url_decode",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/url-decode.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/url-decode",permalink:"/docs/sql-manual/sql-functions/string-functions/url-decode",draft:!1,tags:[],version:"2.1",frontMatter:{title:"url_decode",language:"en"},sidebar:"docs",previous:{title:"PARSE_URL",permalink:"/docs/sql-manual/sql-functions/string-functions/parse-url"},next:{title:"CONVERT_TO",permalink:"/docs/sql-manual/sql-functions/string-functions/convert-to"}},i={},c=[{value:"url_decode",id:"url_decode",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Parameters",id:"parameters",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"url_decode"},"url_decode"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"Converts an url to a decode string."),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"VARCHAR url_decode(VARCHAR url)\n")),(0,o.yg)("h3",{id:"parameters"},"Parameters"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"url: the string to decode. If url is not a string type.")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> mysql> select url_decode('https%3A%2F%2Fdoris.apache.org%2Fzh-CN%2Fdocs%2Fsql-manual%2Fsql-functions%2Fstring-functions');\n+------------------------------------------------+\n| url_decode('https%3A%2F%2Fdoris.apache.org%2Fzh-CN%2Fdocs%2Fsql-manual%2Fsql-functions%2Fstring-functions') |\n+------------------------------------------------+\n| https://doris.apache.org/zh-CN/docs/sql-manual/sql-functions/string-functions                               |\n+------------------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"URL DECODE\n")))}p.isMDXComponent=!0}}]);