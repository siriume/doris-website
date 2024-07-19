"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[30563],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>f});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),u=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(o.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=u(n),m=a,f=y["".concat(o,".").concat(m)]||y[m]||p[m]||s;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[y]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},593483:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=n(58168),a=(n(296540),n(15680));const s={title:"array_cum_sum",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array_cum_sum",id:"version-1.2/sql-manual/sql-functions/array-functions/array_cum_sum",title:"array_cum_sum",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_cum_sum.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_cum_sum",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_cum_sum",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_cum_sum",language:"en"},sidebar:"docs",previous:{title:"array_shuffle",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_shuffle"},next:{title:"array_exists",permalink:"/docs/1.2/sql-manual/sql-functions/array-functions/array_exists"}},o={},u=[{value:"array_cum_sum",id:"array_cum_sum",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},y="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_cum_sum"},"array_cum_sum"),(0,a.yg)("version",{since:"1.2.3"},(0,a.yg)("p",null,"array_cum_sum")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Get the cumulative sum of an array (",(0,a.yg)("inlineCode",{parentName:"p"},"NULL")," values are skipped).\nIf the array contains ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL")," values, then ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL")," is set at the same position in the result array."),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"Array<T> array_cum_sum(Array<T>)\n")),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1) distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3, 4]), (3, [1, NULL, 3, NULL, 5]);\nmysql> select k2, array_cum_sum(k2) from array_type_table;\n+-----------------------+-----------------------+\n| k2                    | array_cum_sum(`k2`)   |\n+-----------------------+-----------------------+\n| []                    | []                    |\n| [NULL]                | [NULL]                |\n| [1, 2, 3, 4]          | [1, 3, 6, 10]         |\n| [1, NULL, 3, NULL, 5] | [1, NULL, 4, NULL, 9] |\n+-----------------------+-----------------------+\n\n4 rows in set\nTime: 0.122s\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,CUM_SUM,ARRAY_CUM_SUM"))}p.isMDXComponent=!0}}]);