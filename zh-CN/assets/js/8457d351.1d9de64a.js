"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74330],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>d});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(r),f=a,d=y["".concat(s,".").concat(f)]||y[f]||p[f]||o;return r?t.createElement(d,i(i({ref:n},u),{},{components:r})):t.createElement(d,i({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[y]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},421884:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const o={title:"ARRAY",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array",id:"version-2.1/sql-manual/sql-functions/array-functions/array",title:"ARRAY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY",language:"zh-CN"},sidebar:"docs",previous:{title:"Quick BI",permalink:"/zh-CN/docs/ecosystem/bi/quickbi"},next:{title:"ARRAY_MAX",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-max"}},s={},c=[{value:"array()",id:"array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array"},"array()"),(0,a.yg)("p",null,"array()"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array(T, ...)"),"\n\u6839\u636e\u53c2\u6570\u6784\u9020\u5e76\u8fd4\u56dearray, \u53c2\u6570\u53ef\u4ee5\u662f\u591a\u5217\u6216\u8005\u5e38\u91cf"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array(\"1\", 2, 1.1);\n+----------------------+\n| array('1', 2, '1.1') |\n+----------------------+\n| ['1', '2', '1.1']    |\n+----------------------+\n1 row in set (0.00 sec)\n\n\nmysql> select array(null, 1);\n+----------------+\n| array(NULL, 1) |\n+----------------+\n| [NULL, 1]      |\n+----------------+\n1 row in set (0.00 sec)\n\nmysql> select array(1, 2, 3);\n+----------------+\n| array(1, 2, 3) |\n+----------------+\n| [1, 2, 3]      |\n+----------------+\n1 row in set (0.00 sec)\n\nmysql>  select array(qid, creationDate, null) from nested  limit 4;\n+------------------------------------+\n| array(`qid`, `creationDate`, NULL) |\n+------------------------------------+\n| [1000038, 20090616074056, NULL]    |\n| [1000069, 20090616075005, NULL]    |\n| [1000130, 20090616080918, NULL]    |\n| [1000145, 20090616081545, NULL]    |\n+------------------------------------+\n4 rows in set (0.01 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,ARRAY,CONSTRUCTOR"))}p.isMDXComponent=!0}}]);