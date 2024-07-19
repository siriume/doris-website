"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[34275],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,y=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},737401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const l={title:"numbers",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/numbers",id:"version-1.2/sql-manual/sql-functions/table-functions/numbers",title:"numbers",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/table-functions/numbers.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/numbers",permalink:"/docs/1.2/sql-manual/sql-functions/table-functions/numbers",draft:!1,tags:[],version:"1.2",frontMatter:{title:"numbers",language:"en"},sidebar:"docs",previous:{title:"outer combinator",permalink:"/docs/1.2/sql-manual/sql-functions/table-functions/outer-combinator"},next:{title:"explode_numbers",permalink:"/docs/1.2/sql-manual/sql-functions/table-functions/explode-numbers"}},i={},u=[{value:"<code>numbers</code>",id:"numbers",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"numbers"},(0,a.yg)("inlineCode",{parentName:"h2"},"numbers")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Table-Value-Function, generate a temporary table with only one column named 'number', row values are [0,n)."),(0,a.yg)("p",null,"This function is used in FROM clauses."),(0,a.yg)("h4",{id:"syntax"},"syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'numbers(\n  "number" = "n",\n  "backend_num" = "m"\n  );\n')),(0,a.yg)("p",null,"parameter\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"number"),": It means to generate rows [0, n)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"backend_num"),": Optional parameters. It means this function is executed simultaneously on ",(0,a.yg)("inlineCode",{parentName:"li"},"m")," be nodes (multiple BEs need to be deployed).")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> select * from numbers("number" = "10");\n+--------+\n| number |\n+--------+\n|      0 |\n|      1 |\n|      2 |\n|      3 |\n|      4 |\n|      5 |\n|      6 |\n|      7 |\n|      8 |\n|      9 |\n+--------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"numbers\n")))}p.isMDXComponent=!0}}]);