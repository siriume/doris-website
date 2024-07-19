"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51941],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},522588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"LEAST",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/numeric-functions/least",id:"version-2.0/sql-manual/sql-functions/numeric-functions/least",title:"LEAST",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/numeric-functions/least.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/least",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/least",draft:!1,tags:[],version:"2.0",frontMatter:{title:"LEAST",language:"en"},sidebar:"docs",previous:{title:"GREATEST",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/greatest"},next:{title:"RANDOM",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/random"}},s={},c=[{value:"least",id:"least",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"least"},"least"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"least(col_a, col_b, \u2026, col_n)"),"  "),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"column")," supports the following types: ",(0,a.yg)("inlineCode",{parentName:"p"},"TINYINT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"SMALLINT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"INT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"BIGINT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"LARGEINT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"FLOAT")," ",(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE")," ",(0,a.yg)("inlineCode",{parentName:"p"},"STRING")," ",(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME")," ",(0,a.yg)("inlineCode",{parentName:"p"},"DECIMAL")),(0,a.yg)("p",null,"Compare the size of ",(0,a.yg)("inlineCode",{parentName:"p"},"n columns")," and return the smallest among them. If there is ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"column"),", return ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select least(-1, 0, 5, 8);\n+--------------------+\n| least(-1, 0, 5, 8) |\n+--------------------+\n|                 -1 |\n+--------------------+\nmysql> select least(-1, 0, 5, NULL);\n+-----------------------+\n| least(-1, 0, 5, NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\nmysql> select least(6.3, 4.29, 7.6876);\n+--------------------------+\n| least(6.3, 4.29, 7.6876) |\n+--------------------------+\n|                     4.29 |\n+--------------------------+\nmysql> select least(\"2022-02-26 20:02:11\",\"2020-01-23 20:02:11\",\"2020-06-22 20:02:11\");\n+----------------------------------------------------------------------------+\n| least('2022-02-26 20:02:11', '2020-01-23 20:02:11', '2020-06-22 20:02:11') |\n+----------------------------------------------------------------------------+\n| 2020-01-23 20:02:11                                                        |\n+----------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"LEAST\n")))}m.isMDXComponent=!0}}]);