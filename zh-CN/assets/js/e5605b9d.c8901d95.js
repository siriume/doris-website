"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52645],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,d=u["".concat(o,".").concat(y)]||u[y]||m[y]||l;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},307338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"REFRESH-LDAP",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Utility-Statements/REFRESH-LDAP",id:"sql-manual/sql-statements/Utility-Statements/REFRESH-LDAP",title:"REFRESH-LDAP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Utility-Statements/REFRESH-LDAP.md",sourceDirName:"sql-manual/sql-statements/Utility-Statements",slug:"/sql-manual/sql-statements/Utility-Statements/REFRESH-LDAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Utility-Statements/REFRESH-LDAP",draft:!1,tags:[],version:"current",frontMatter:{title:"REFRESH-LDAP",language:"zh-CN"},sidebar:"docs",previous:{title:"RESUME-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Utility-Statements/RESUME-MATERIALIZED-VIEW"},next:{title:"Star Schema Benchmark",permalink:"/zh-CN/docs/dev/benchmark/ssb"}},o={},c=[{value:"REFRESH-LDAP",id:"refresh-ldap",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"refresh-ldap"},"REFRESH-LDAP"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"REFRESH-LDAP"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5237\u65b0 Doris \u4e2d LDAP \u7684\u7f13\u5b58\u4fe1\u606f\u3002\u4fee\u6539 LDAP \u670d\u52a1\u4e2d\u7528\u6237\u4fe1\u606f\u6216\u8005\u4fee\u6539 Doris \u4e2d LDAP \u7528\u6237\u7ec4\u5bf9\u5e94\u7684 role \u6743\u9650\uff0c\u53ef\u80fd\u56e0\u4e3a\u7f13\u5b58\u7684\u539f\u56e0\u4e0d\u4f1a\u7acb\u5373\u751f\u6548\uff0c\u53ef\u901a\u8fc7\u8be5\u8bed\u53e5\u5237\u65b0\u7f13\u5b58\u3002Doris \u4e2d LDAP \u4fe1\u606f\u7f13\u5b58\u9ed8\u8ba4\u65f6\u95f4\u4e3a 12 \u5c0f\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW FRONTEND CONFIG LIKE 'ldap_user_cache_timeout_s';")," \u67e5\u770b\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH LDAP ALL;\nREFRESH LDAP [for user_name];\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5237\u65b0\u6240\u6709 LDAP \u7528\u6237\u7f13\u5b58\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH LDAP ALL;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5237\u65b0\u5f53\u524d LDAP \u7528\u6237\u7684\u7f13\u5b58\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH LDAP;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5237\u65b0\u6307\u5b9a LDAP \u7528\u6237 user1 \u7684\u7f13\u5b58\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH LDAP for user1;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("p",null,"REFRESH, LDAP"),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);