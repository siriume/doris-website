"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32255],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var l=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),p=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return l.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?l.createElement(y,a(a({ref:n},c),{},{components:t})):l.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},776615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var l=t(58168),r=(t(296540),t(15680));const o={title:"explode_split",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/explode-split",id:"version-1.2/sql-manual/sql-functions/table-functions/explode-split",title:"explode_split",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/table-functions/explode-split.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode-split",permalink:"/docs/1.2/sql-manual/sql-functions/table-functions/explode-split",draft:!1,tags:[],version:"1.2",frontMatter:{title:"explode_split",language:"en"},sidebar:"docs",previous:{title:"explode",permalink:"/docs/1.2/sql-manual/sql-functions/table-functions/explode"},next:{title:"explode_bitmap",permalink:"/docs/1.2/sql-manual/sql-functions/table-functions/explode-bitmap"}},s={},p=[{value:"explode_split",id:"explode_split",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,l.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"explode_split"},"explode_split"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"explode_split(str, delimiter)")),(0,r.yg)("p",null,"Table functions must be used in conjunction with Lateral View."),(0,r.yg)("p",null,"Split a string into multiple substrings according to the specified delimiter."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"explode_split(str, delimiter)\n")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,"Original table data:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select * from example1 order by k1;\n+------+---------+\n| k1   | k2      |\n+------+---------+\n|    1 |         |\n|    2 | NULL    |\n|    3 | ,       |\n|    4 | 1       |\n|    5 | 1,2,3   |\n|    6 | a, b, c |\n+------+---------+\n")),(0,r.yg)("p",null,"Lateral View:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |      |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 2 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    2 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 3 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    3 |      |\n|    3 |      |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 4 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    4 | 1    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 5 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    5 | 1    |\n|    5 | 2    |\n|    5 | 3    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 6 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    6 |  b   |\n|    6 |  c   |\n|    6 | a    |\n+------+------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"explode,split,explode_split"))}d.isMDXComponent=!0}}]);