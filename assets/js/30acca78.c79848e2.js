"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88947],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>f});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?t.createElement(f,s(s({ref:n},c),{},{components:r})):t.createElement(f,s({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67198:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=r(58168),o=(r(296540),r(15680));const a={title:"ROUND_BANKERS",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-functions/numeric-functions/round-bankers",id:"version-2.0/sql-manual/sql-functions/numeric-functions/round-bankers",title:"ROUND_BANKERS",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/numeric-functions/round-bankers.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/round-bankers",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/round-bankers",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ROUND_BANKERS",language:"en"},sidebar:"docs",previous:{title:"ROUND",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/round"},next:{title:"TRUNCATE",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/truncate"}},l={},u=[{value:"round_bankers",id:"round_bankers",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},d="wrapper";function p(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"round_bankers"},"round_bankers"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"T round_bankers(T x[, d])"),"\nRounds the argument ",(0,o.yg)("inlineCode",{parentName:"p"},"x")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"d")," specified decimal places. ",(0,o.yg)("inlineCode",{parentName:"p"},"d")," defaults to 0 if not specified. If d is negative, the left d digits of the decimal point are 0. If x or d is null, null is returned."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the rounding number is halfway between two numbers, the function uses banker\u2019s rounding."),(0,o.yg)("li",{parentName:"ul"},"In other cases, the function rounds numbers to the nearest integer.")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select round_bankers(0.4);\n+--------------------+\n| round_bankers(0.4) |\n+--------------------+\n|                  0 |\n+--------------------+\nmysql> select round_bankers(-3.5);\n+---------------------+\n| round_bankers(-3.5) |\n+---------------------+\n|                  -4 |\n+---------------------+\nmysql> select round_bankers(-3.4);\n+---------------------+\n| round_bankers(-3.4) |\n+---------------------+\n|                  -3 |\n+---------------------+\nmysql> select round_bankers(10.755, 2);\n+--------------------------+\n| round_bankers(10.755, 2) |\n+--------------------------+\n|                    10.76 |\n+--------------------------+\nmysql> select round_bankers(1667.2725, 2);\n+-----------------------------+\n| round_bankers(1667.2725, 2) |\n+-----------------------------+\n|                     1667.27 |\n+-----------------------------+\nmysql> select round_bankers(1667.2725, -2);\n+------------------------------+\n| round_bankers(1667.2725, -2) |\n+------------------------------+\n|                         1700 |\n+------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"round_bankers\n")))}p.isMDXComponent=!0}}]);