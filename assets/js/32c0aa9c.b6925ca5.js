"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70487],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),y=a,g=m["".concat(o,".").concat(y)]||m[y]||u[y]||l;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},562779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-VARIABLES",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",title:"SHOW-VARIABLES",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-VARIABLES",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-VARIABLES",language:"en"},sidebar:"docs",previous:{title:"SHOW-TABLETS-BELONG",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS-BELONG"},next:{title:"SHOW-PLUGINS",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-PLUGINS"}},o={},c=[{value:"SHOW-VARIABLES",id:"show-variables",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-variables"},"SHOW-VARIABLES"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW VARIABLES"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to display Doris system variables, which can be queried by conditions"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [GLOBAL | SESSION] VARIABLES\n     [LIKE 'pattern' | WHERE expr]\n")),(0,a.yg)("p",null,"illustrate:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"show variables is mainly used to view the values of system variables."),(0,a.yg)("li",{parentName:"ul"},"Executing the SHOW VARIABLES command does not require any privileges, it only requires being able to connect to the server."),(0,a.yg)("li",{parentName:"ul"},"Use the like statement to match with variable_name."),(0,a.yg)("li",{parentName:"ul"},"The % percent wildcard can be used anywhere in the matching pattern")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The default here is to match the Variable_name, here is the exact match"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"show variables like 'max_connections';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Matching through the percent sign (%) wildcard can match multiple items"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"show variables like '%connec%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Use the Where clause for matching queries"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"show variables where variable_name = 'version';\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, VARIABLES\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);