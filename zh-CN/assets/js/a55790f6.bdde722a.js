"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32126],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,y=u["".concat(a,".").concat(d)]||u[d]||f[d]||s;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,l=new Array(s);l[0]=d;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},948140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const s={title:"IS_IPV6_STRING",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/ip-functions/is-ipv6-string",id:"sql-manual/sql-functions/ip-functions/is-ipv6-string",title:"IS_IPV6_STRING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/is-ipv6-string.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/is-ipv6-string",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv6-string",draft:!1,tags:[],version:"current",frontMatter:{title:"IS_IPV6_STRING",language:"zh-CN"},sidebar:"docs",previous:{title:"IS_IPV4_STRING",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-string"},next:{title:"TO_IPV4",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4"}},a={},c=[{value:"IS_IPV6_STRING",id:"is_ipv6_string",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"is_ipv6_string"},"IS_IPV6_STRING"),(0,i.yg)("p",null,"IS_IPV6_STRING"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BOOLEAN IS_IPV6_STRING(STRING ipv6_str)")),(0,i.yg)("p",null,"\u63a5\u6536\u4e00\u4e2a\u8868\u793a\u5f62\u5f0f\u4e3a\u5b57\u7b26\u4e32\u7684IPv6\u5730\u5740\u4f5c\u4e3a\u53c2\u6570\uff0c\u5982\u679c\u4e3a\u683c\u5f0f\u6b63\u786e\u4e14\u5408\u6cd5\u7684IPv6\u5730\u5740\uff0c\u8fd4\u56detrue\uff1b\u53cd\u4e4b\uff0c\u8fd4\u56defalse\u3002"),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select is_ipv6_string(NULL);\n+----------------------+\n| is_ipv6_string(NULL) |\n+----------------------+\n|                 NULL |\n+----------------------+\n\nmysql> CREATE TABLE `test_is_ipv6_string` (\n      `id` int,\n      `ip_v6` string\n    ) ENGINE=OLAP\n    DISTRIBUTED BY HASH(`id`) BUCKETS 4\n    PROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n    );\n    \nmysql> insert into test_is_ipv6_string values(0, NULL), (1, '::'), (2, ''), (3, '2001:1b70:a1:610::b102:2'), (4, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffffg');\n\nmysql> select id, is_ipv6_string(ip_v6) from test_is_ipv6_string order by id;\n+------+-----------------------+\n| id   | is_ipv6_string(ip_v6) |\n+------+-----------------------+\n|    0 |                  NULL |\n|    1 |                     1 |\n|    2 |                     0 |\n|    3 |                     1 |\n|    4 |                     0 |\n+------+-----------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IS_IPV6_STRING, IP"))}f.isMDXComponent=!0}}]);