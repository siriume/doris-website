"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20273],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>d});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(a),E=n,d=p["".concat(s,".").concat(E)]||p[E]||u[E]||l;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=E;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}E.displayName="MDXCreateElement"},778757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(58168),n=(a(296540),a(15680));const l={title:"SHOW-CREATE-MATERIALIZED-VIEW",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",id:"sql-manual/sql-statements/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",title:"SHOW-CREATE-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CREATE-MATERIALIZED-VIEW",language:"en"},sidebar:"docs",previous:{title:"SHOW-CREATE-TABLE",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-TABLE"},next:{title:"SHOW-CHARSET",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CHARSET"}},s={},c=[{value:"SHOW-CREATE-MATERIALIZED-VIEW",id:"show-create-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"show-create-materialized-view"},"SHOW-CREATE-MATERIALIZED-VIEW"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"SHOW CREATE MATERIALIZED VIEW"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"This statement is used to query statements that create materialized views."),(0,n.yg)("p",null,"grammar\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE MATERIALIZED VIEW mv_name ON table_name\n")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"mv_name:\nMaterialized view name. required.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"table_name:\nThe table name of materialized view. required."))),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("p",null,"Create materialized view"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"create materialized view id_col1 as select id,col1 from table3;\n")),(0,n.yg)("p",null,"Return after query"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show create materialized view id_col1 on table3;\n+-----------+----------+----------------------------------------------------------------+\n| TableName | ViewName | CreateStmt                                                     |\n+-----------+----------+----------------------------------------------------------------+\n| table3    | id_col1  | create materialized view id_col1 as select id,col1 from table3 |\n+-----------+----------+----------------------------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"SHOW, MATERIALIZED, VIEW\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);