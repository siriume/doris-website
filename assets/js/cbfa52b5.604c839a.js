"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[81773],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),d=l,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},232176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(58168),l=(t(296540),t(15680));const i={title:"CEIL",language:"en"},a=void 0,o={unversionedId:"sql-manual/sql-functions/numeric-functions/ceil",id:"sql-manual/sql-functions/numeric-functions/ceil",title:"CEIL",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/numeric-functions/ceil.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/ceil",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/ceil",draft:!1,tags:[],version:"current",frontMatter:{title:"CEIL",language:"en"},sidebar:"docs",previous:{title:"LN",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/ln"},next:{title:"FLOOR",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/floor"}},c={},s=[{value:"ceil",id:"ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"ceil"},"ceil"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"T ceil(T x[, d])")),(0,l.yg)("p",null,"If not specified ",(0,l.yg)("inlineCode",{parentName:"p"},"d"),": returns the smallest integer value less than or equal to ",(0,l.yg)("inlineCode",{parentName:"p"},"x"),", which is ",(0,l.yg)("strong",{parentName:"p"},"the most common usage"),".\nOtherwise, returns the smallest round number that is less than or equal to ",(0,l.yg)("inlineCode",{parentName:"p"},"x")," and flowing the rules:"),(0,l.yg)("p",null,"If ",(0,l.yg)("inlineCode",{parentName:"p"},"d")," is specified as literal:",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"d")," = 0: just like without ",(0,l.yg)("inlineCode",{parentName:"p"},"d"),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"d")," > 0 or ",(0,l.yg)("inlineCode",{parentName:"p"},"d")," < 0: the round number would be a multiple of ",(0,l.yg)("inlineCode",{parentName:"p"},"1/(10^d)"),", or the nearest number of the appropriate data type if ",(0,l.yg)("inlineCode",{parentName:"p"},"1/(10^d)")," isn't exact."),(0,l.yg)("p",null,"Else if ",(0,l.yg)("inlineCode",{parentName:"p"},"d")," is a column, and ",(0,l.yg)("inlineCode",{parentName:"p"},"x")," has Decimal type, scale of result Decimal will always be same with input Decimal."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"The other alias for this function are ",(0,l.yg)("inlineCode",{parentName:"p"},"dceil")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"ceiling"),".")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select ceil(1);\n+-----------+\n| ceil(1.0) |\n+-----------+\n|         1 |\n+-----------+\nmysql> select ceil(2.4);\n+-----------+\n| ceil(2.4) |\n+-----------+\n|         3 |\n+-----------+\nmysql> select ceil(-10.3);\n+-------------+\n| ceil(-10.3) |\n+-------------+\n|         -10 |\n+-------------+\nmysql> select ceil(123.45, 1), ceil(123.45), ceil(123.45, 0), ceil(123.45, -1);\n+-----------------+--------------+-----------------+------------------+\n| ceil(123.45, 1) | ceil(123.45) | ceil(123.45, 0) | ceil(123.45, -1) |\n+-----------------+--------------+-----------------+------------------+\n|           123.5 |          124 |             124 |              130 |\n+-----------------+--------------+-----------------+------------------+\nmysql> SELECT number\n    -> , ceil(number * 2.5, number - 1) AS c_decimal_column\n    -> , ceil(number * 2.5, 0) AS c_decimal_literal\n    -> , ceil(cast(number * 2.5 AS DOUBLE), number - 1) AS c_double_column\n    -> , ceil(cast(number * 2.5 AS DOUBLE), 0) AS c_double_literal\n    -> FROM test_enhanced_round\n    -> WHERE rid = 1;\n+--------+------------------+-------------------+-----------------+------------------+\n| number | c_decimal_column | c_decimal_literal | c_double_column | c_double_literal |\n+--------+------------------+-------------------+-----------------+------------------+\n|      1 |              3.0 |                 3 |               3 |                3 |\n+--------+------------------+-------------------+-----------------+------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"CEIL, DCEIL, CEILING\n")))}m.isMDXComponent=!0}}]);