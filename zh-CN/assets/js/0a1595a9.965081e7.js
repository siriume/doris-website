"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32900],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(t),y=r,d=c["".concat(u,".").concat(y)]||c[y]||m[y]||l;return t?a.createElement(d,i(i({ref:n},s),{},{components:t})):a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},443492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(296540),t(15680));const l={title:"ANALYZE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/ANALYZE",id:"version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/ANALYZE",title:"ANALYZE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/ANALYZE.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/ANALYZE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/ANALYZE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ANALYZE",language:"zh-CN"},sidebar:"docs",previous:{title:"INSERT-OVERWRITE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE"},next:{title:"OUTFILE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"}},u={},p=[{value:"ANALYZE",id:"analyze",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],s={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"analyze"},"ANALYZE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ANALYZE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u6536\u96c6\u5404\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE < TABLE | DATABASE table_name | db_name > \n    [ (column_name [, ...]) ]\n    [ [ WITH SYNC ] [ WITH SAMPLE PERCENT | ROWS ] ];\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"table_name: \u6307\u5b9a\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u662f \xa0",(0,r.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002"),(0,r.yg)("li",{parentName:"ul"},"column_name: \u6307\u5b9a\u7684\u76ee\u6807\u5217\u3002\u5fc5\u987b\u662f \xa0",(0,r.yg)("inlineCode",{parentName:"li"},"table_name"),"\xa0 \u4e2d\u5b58\u5728\u7684\u5217\uff0c\u591a\u4e2a\u5217\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694\u3002"),(0,r.yg)("li",{parentName:"ul"},"sync\uff1a\u540c\u6b65\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002\u6536\u96c6\u5b8c\u540e\u8fd4\u56de\u3002\u82e5\u4e0d\u6307\u5b9a\u5219\u5f02\u6b65\u6267\u884c\u5e76\u8fd4\u56de JOB ID\u3002"),(0,r.yg)("li",{parentName:"ul"},"sample percent | rows\uff1a\u62bd\u6837\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002\u53ef\u4ee5\u6307\u5b9a\u62bd\u6837\u6bd4\u4f8b\u6216\u8005\u62bd\u6837\u884c\u6570\u3002")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"\u5bf9\u4e00\u5f20\u8868\u6309\u7167 10% \u7684\u6bd4\u4f8b\u91c7\u6837\u6536\u96c6\u7edf\u8ba1\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem WITH SAMPLE PERCENT 10;\n")),(0,r.yg)("p",null,"\u5bf9\u4e00\u5f20\u8868\u6309\u91c7\u6837 10 \u4e07\u884c\u6536\u96c6\u7edf\u8ba1\u6570\u636e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem WITH SAMPLE ROWS 100000;\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"ANALYZE"))}m.isMDXComponent=!0}}]);