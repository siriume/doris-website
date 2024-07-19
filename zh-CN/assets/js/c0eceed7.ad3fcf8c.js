"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[16999],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},519129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV4_NUM_TO_STRING",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4-num-to-string",id:"version-2.0/sql-manual/sql-functions/ip-functions/ipv4-num-to-string",title:"IPV4_NUM_TO_STRING",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/ip-functions/ipv4-num-to-string.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4-num-to-string",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/ip-functions/ipv4-num-to-string",draft:!1,tags:[],version:"2.0",frontMatter:{title:"IPV4_NUM_TO_STRING",language:"en"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_WINDOW_FUNNEL",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL"},next:{title:"INET_NTOA",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/ip-functions/inet-ntoa"}},s={},u=[{value:"IPV4_NUM_TO_STRING",id:"ipv4_num_to_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv4_num_to_string"},"IPV4_NUM_TO_STRING"),(0,i.yg)("p",null,"IPV4_NUM_TO_STRING"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR IPV4_NUM_TO_STRING(BIGINT ipv4_num)")),(0,i.yg)("p",null,"Takes a Int16, Int32, Int64 number. Interprets it as an IPv4 address in big endian. Returns a string containing the corresponding IPv4 address in the format A.B.C.d (dot-separated numbers in decimal form)."),(0,i.yg)("h3",{id:"notice"},"notice"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"will return NULL if the input parameter is negative or larger than 4294967295(num value of '255.255.255.255')")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select IPV4_NUM_TO_STRING(3232235521);\n+-----------------------------+\n| IPV4_NUM_TO_STRING(3232235521) |\n+-----------------------------+\n| 192.168.0.1                 |\n+-----------------------------+\n1 row in set (0.01 sec)\n\nmysql> select num,IPV4_NUM_TO_STRING(num) from ipv4_bi;\n+------------+------------------------+\n| num        | IPV4_NUM_TO_STRING(`num`) |\n+------------+------------------------+\n|         -1 | NULL                   |\n|          0 | 0.0.0.0                |\n| 2130706433 | 127.0.0.1              |\n| 4294967295 | 255.255.255.255        |\n| 4294967296 | NULL                   |\n+------------+------------------------+\n7 rows in set (0.01 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"IPV4_NUM_TO_STRING, IP"))}m.isMDXComponent=!0}}]);