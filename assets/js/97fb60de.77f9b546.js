"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[6432],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var i=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=r,y=f["".concat(o,".").concat(d)]||f[d]||u[d]||s;return t?i.createElement(y,a(a({ref:n},c),{},{components:t})):i.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[f]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<s;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},683787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=t(58168),r=(t(296540),t(15680));const s={title:"IS_IPV6_STRING",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/ip-functions/is-ipv6-string",id:"sql-manual/sql-functions/ip-functions/is-ipv6-string",title:"IS_IPV6_STRING",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/ip-functions/is-ipv6-string.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/is-ipv6-string",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv6-string",draft:!1,tags:[],version:"current",frontMatter:{title:"IS_IPV6_STRING",language:"en"},sidebar:"docs",previous:{title:"IS_IPV4_STRING",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-string"},next:{title:"TO_IPV4",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4"}},o={},p=[{value:"IS_IPV6_STRING",id:"is_ipv6_string",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:p},f="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(f,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"is_ipv6_string"},"IS_IPV6_STRING"),(0,r.yg)("p",null,"IS_IPV6_STRING"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BOOLEAN IS_IPV6_STRING(STRING ipv6_str)")),(0,r.yg)("p",null,"Receive an IPv6 address in the form of a string as a parameter, and return true if it is a properly formatted and valid IPv6 address; On the contrary, return false."),(0,r.yg)("h4",{id:"notice"},"Notice"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"If the input parameter is NULL, return NULL, indicating invalid input")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select is_ipv6_string(NULL);\n+----------------------+\n| is_ipv6_string(NULL) |\n+----------------------+\n|                 NULL |\n+----------------------+\n\nmysql> CREATE TABLE `test_is_ipv6_string` (\n      `id` int,\n      `ip_v6` string\n    ) ENGINE=OLAP\n    DISTRIBUTED BY HASH(`id`) BUCKETS 4\n    PROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n    );\n    \nmysql> insert into test_is_ipv6_string values(0, NULL), (1, '::'), (2, ''), (3, '2001:1b70:a1:610::b102:2'), (4, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffffg');\n\nmysql> select id, is_ipv6_string(ip_v6) from test_is_ipv6_string order by id;\n+------+-----------------------+\n| id   | is_ipv6_string(ip_v6) |\n+------+-----------------------+\n|    0 |                  NULL |\n|    1 |                     1 |\n|    2 |                     0 |\n|    3 |                     1 |\n|    4 |                     0 |\n+------+-----------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"IS_IPV6_STRING, IP"))}u.isMDXComponent=!0}}]);