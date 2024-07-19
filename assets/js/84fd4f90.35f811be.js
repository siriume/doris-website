"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[69256],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),y=i,m=p["".concat(o,".").concat(y)]||p[y]||d[y]||l;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=y;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},727852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=t(58168),i=(t(296540),t(15680));const l={title:"date_ceil",language:"en"},a=void 0,c={unversionedId:"sql-manual/sql-functions/date-time-functions/date_ceil",id:"version-2.0/sql-manual/sql-functions/date-time-functions/date_ceil",title:"date_ceil",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/date_ceil.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date_ceil",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/date_ceil",draft:!1,tags:[],version:"2.0",frontMatter:{title:"date_ceil",language:"en"},sidebar:"docs",previous:{title:"year_floor",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/year_floor"},next:{title:"second_ceil",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/second_ceil"}},o={},s=[{value:"date_ceil",id:"date_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"date_ceil"},"date_ceil"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME DATE_CEIL(DATETIME datetime, INTERVAL period type)")),(0,i.yg)("p",null,"Convert the date to the nearest rounding up time of the specified time interval period."),(0,i.yg)("p",null,"The datetime parameter is a valid date expression."),(0,i.yg)("p",null,"The period parameter specifies how many units each cycle consists of, starting from 0001-01-01T00:00:00"),(0,i.yg)("p",null,"type \uff1aYEAR, MONTH, DAY, HOUR, MINUTE, SECOND."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 second);\n+--------------------------------------------------------------+\n| second_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:28:20                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 minute);\n+--------------------------------------------------------------+\n| minute_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:30:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 hour);\n+------------------------------------------------------------+\n| hour_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2023-07-13 23:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 day);\n+-----------------------------------------------------------+\n| day_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-----------------------------------------------------------+\n| 2023-07-15 00:00:00                                       |\n+-----------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 month);\n+-------------------------------------------------------------+\n| month_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2023-12-01 00:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 year);\n+------------------------------------------------------------+\n| year_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2026-01-01 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"DATE_CEIL,DATE,CEIL\n")),(0,i.yg)("h3",{id:"best-practice"},"Best Practice"),(0,i.yg)("p",null,"See also"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./second_ceil"},"second_ceil")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./minute_ceil"},"minute_ceil")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./hour_ceil"},"hour_ceil")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./day_ceil"},"day_ceil")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./month_ceil"},"month_ceil")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"./year_ceil"},"year_ceil"))))}d.isMDXComponent=!0}}]);