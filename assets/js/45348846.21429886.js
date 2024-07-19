"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57333],{15680:(r,e,a)=>{a.d(e,{xA:()=>c,yg:()=>m});var n=a(296540);function t(r,e,a){return e in r?Object.defineProperty(r,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[e]=a,r}function s(r,e){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.push.apply(a,n)}return a}function i(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){t(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function o(r,e){if(null==r)return{};var a,n,t=function(r,e){if(null==r)return{};var a,n,t={},s=Object.keys(r);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(t[a]=r[a]);return t}(r,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(r,a)&&(t[a]=r[a])}return t}var l=n.createContext({}),y=function(r){var e=n.useContext(l),a=e;return r&&(a="function"==typeof r?r(e):i(i({},e),r)),a},c=function(r){var e=y(r.components);return n.createElement(l.Provider,{value:e},r.children)},u="mdxType",p={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(r,e){var a=r.components,t=r.mdxType,s=r.originalType,l=r.parentName,c=o(r,["components","mdxType","originalType","parentName"]),u=y(a),d=t,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return a?n.createElement(m,i(i({ref:e},c),{},{components:a})):n.createElement(m,i({ref:e},c))}));function m(r,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof r||t){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=r,o[u]="string"==typeof r?r:t,i[1]=o;for(var y=2;y<s;y++)i[y]=a[y];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},216067:(r,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>y});var n=a(58168),t=(a(296540),a(15680));const s={title:"ARRAY_EXISTS",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-exists",id:"sql-manual/sql-functions/array-functions/array-exists",title:"ARRAY_EXISTS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/array-functions/array-exists.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-exists",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-exists",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_EXISTS",language:"en"},sidebar:"docs",previous:{title:"ARRAY_CUM_SUM",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-cum-sum"},next:{title:"ARRAY_FIRST_INDEX",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-first-index"}},l={},y=[{value:"array_exists",id:"array_exists",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:y},u="wrapper";function p(r){let{components:e,...a}=r;return(0,t.yg)(u,(0,n.A)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_exists"},"array_exists"),(0,t.yg)("p",null,"array_exists(lambda,array1,array2....)\narray_exists(array1)"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"BOOLEAN array_exists(lambda, ARRAY<T> arr1, ARRAY<T> arr2, ... )\nBOOLEAN array_exists(ARRAY<T> arr)\n")),(0,t.yg)("p",null,"Use an optional lambda expression as an input parameter to perform corresponding expression calculations on the internal data of other input ARRAY parameters. Returns 1 when the calculation returns something other than 0; otherwise returns 0.\nThere are one or more parameters input in the lambda expression, which must be consistent with the number of input array columns later. Legal scalar functions can be executed in lambda, aggregate functions, etc. are not supported.\nWhen lambda expression is not used as a parameter, array1 is used as the calculation result."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"array_exists(x->x, array1);\narray_exists(x->(x%2 = 0), array1);\narray_exists(x->(abs(x)-1), array1);\narray_exists((x,y)->(x = y), array1, array2);\narray_exists(array1);\n")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"\nmysql [test]>select *, array_exists(x->x>1,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+-----------------------------------------------+\n| id   | c_array1        | c_array2                | array_exists([x] -> x(0) > 1, ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+-----------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 1]                                     |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 1, 1]                                     |\n|    3 | [1]             | [-100]                  | [0, 1, 1]                                     |\n|    4 | NULL            | NULL                    | [0, 1, 1]                                     |\n+------+-----------------+-------------------------+-----------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists(x->x%2=0,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+---------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x] -> x(0) % 2 = 0, ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+---------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 0]                                         |\n| [6, 7, 8]       | [10, 12, 13]            | [0, 1, 0]                                         |\n| [1]             | [-100]                  | [0, 1, 0]                                         |\n| NULL            | NULL                    | [0, 1, 0]                                         |\n+-----------------+-------------------------+---------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists(x->abs(x)-1,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x] -> abs(x(0)) - 1, ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 1, 1, 1]                                    |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                                          |\n| [1, NULL]       | [-100]                  | [0, NULL]                                          |\n| NULL            | NULL                    | NULL                                               |\n+-----------------+-------------------------+----------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists((x,y)->x>y,c_array1,c_array2) from array_test2 order by id;\n+-----------------+-------------------------+-------------------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x, y] -> x(0) > y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+-------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 1]                                             |\n| [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                                                   |\n| [1]             | [-100]                  | [1]                                                         |\n| NULL            | NULL                    | NULL                                                        |\n+-----------------+-------------------------+-------------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *, array_exists(c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+--------------------------+\n| id   | c_array1        | c_array2                | array_exists(`c_array1`) |\n+------+-----------------+-------------------------+--------------------------+\n|    1 | [1, 2, 3, 0, 5] | [10, 20, -40, 80, -100] | [1, 1, 1, 0, 1]          |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                |\n|    3 | [0, NULL]       | [-100]                  | [0, NULL]                |\n|    4 | NULL            | NULL                    | NULL                     |\n+------+-----------------+-------------------------+--------------------------+\n4 rows in set (0.02 sec)\n\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,ARRAY_EXISTS"))}p.isMDXComponent=!0}}]);