"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53618],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,y=u["".concat(o,".").concat(f)]||u[f]||d[f]||s;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=f;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},256641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const s={title:"IS_IPV4_STRING",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/ip-functions/is-ipv4-string",id:"sql-manual/sql-functions/ip-functions/is-ipv4-string",title:"IS_IPV4_STRING",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/ip-functions/is-ipv4-string.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/is-ipv4-string",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-string",draft:!1,tags:[],version:"current",frontMatter:{title:"IS_IPV4_STRING",language:"en"},sidebar:"docs",previous:{title:"CUT_IPV6",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/cut-ipv6"},next:{title:"IS_IPV6_STRING",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv6-string"}},o={},c=[{value:"IS_IPV4_STRING",id:"is_ipv4_string",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"is_ipv4_string"},"IS_IPV4_STRING"),(0,i.yg)("p",null,"IS_IPV4_STRING"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BOOLEAN IS_IPV4_STRING(STRING ipv4_str)")),(0,i.yg)("p",null,"Receive an IPv4 address in the form of a string as a parameter. If it is a correctly formatted and valid IPv4 address, return true; On the contrary, return false."),(0,i.yg)("h4",{id:"notice"},"Notice"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"If the input parameter is NULL, return NULL, indicating invalid input")),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select is_ipv4_string(NULL);\n+----------------------+\n| is_ipv4_string(NULL) |\n+----------------------+\n|                 NULL |\n+----------------------+\n\nmysql> CREATE TABLE `test_is_ipv4_string` (\n      `id` int,\n      `ip_v4` string\n    ) ENGINE=OLAP\n    DISTRIBUTED BY HASH(`id`) BUCKETS 4\n    PROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n    );\n    \nmysql> insert into test_is_ipv4_string values(0, NULL), (1, '0.0.0.'), (2, ''), (3, '.'), (4, '255.255.255.255');\n\nmysql> select id, is_ipv4_string(ip_v4) from test_is_ipv4_string order by id;\n+------+-----------------------+\n| id   | is_ipv4_string(ip_v4) |\n+------+-----------------------+\n|    0 |                  NULL |\n|    1 |                     0 |\n|    2 |                     0 |\n|    3 |                     0 |\n|    4 |                     1 |\n+------+-----------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IS_IPV4_STRING, IP"))}d.isMDXComponent=!0}}]);