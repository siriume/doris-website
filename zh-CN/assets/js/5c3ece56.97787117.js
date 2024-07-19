"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[69282],{15680:(r,e,n)=>{n.d(e,{xA:()=>i,yg:()=>f});var t=n(296540);function a(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function o(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function s(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function y(r,e){if(null==r)return{};var n,t,a=function(r,e){if(null==r)return{};var n,t,a={},o=Object.keys(r);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(a[n]=r[n])}return a}var l=t.createContext({}),c=function(r){var e=t.useContext(l),n=e;return r&&(n="function"==typeof r?r(e):s(s({},e),r)),n},i=function(r){var e=c(r.components);return t.createElement(l.Provider,{value:e},r.children)},u="mdxType",p={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(r,e){var n=r.components,a=r.mdxType,o=r.originalType,l=r.parentName,i=y(r,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?t.createElement(f,s(s({ref:e},i),{},{components:n})):t.createElement(f,s({ref:e},i))}));function f(r,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=n.length,s=new Array(o);s[0]=d;var y={};for(var l in e)hasOwnProperty.call(e,l)&&(y[l]=e[l]);y.originalType=r,y[u]="string"==typeof r?r:a,s[1]=y;for(var c=2;c<o;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},961159:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>y,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const o={title:"ARRAY_SORTBY",language:"zh-CN"},s=void 0,y={unversionedId:"sql-manual/sql-functions/array-functions/array-sortby",id:"sql-manual/sql-functions/array-functions/array-sortby",title:"ARRAY_SORTBY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-sortby.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-sortby",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-sortby",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_SORTBY",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_REVERSE_SORT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-reverse-sort"},next:{title:"ARRAY_SPLIT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-split"}},l={},c=[{value:"array_sortby",id:"array_sortby",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:c},u="wrapper";function p(r){let{components:e,...n}=r;return(0,a.yg)(u,(0,t.A)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_sortby"},"array_sortby"),(0,a.yg)("p",null,"array_sortby"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_sortby(ARRAY<T> src,Array<T> key)\nARRAY<T> array_sortby(lambda,array....)\n")),(0,a.yg)("p",null,"\u9996\u5148\u5c06 key \u5217\u5347\u5e8f\u6392\u5217\uff0c\u7136\u540e\u5c06 src \u5217\u6309\u6b64\u987a\u5e8f\u6392\u5e8f\u540e\u7684\u5bf9\u5e94\u5217\u505a\u4e3a\u7ed3\u679c\u8fd4\u56de;\n\u5982\u679c\u8f93\u5165\u6570\u7ec4 src \u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002\n\u5982\u679c\u8f93\u5165\u6570\u7ec4 key \u4e3a NULL\uff0c\u5219\u76f4\u63a5\u8fd4\u56de src \u6570\u7ec4\u3002\n\u5982\u679c\u8f93\u5165\u6570\u7ec4 key \u5143\u7d20\u5305\u542b NULL, \u5219\u8f93\u51fa\u7684\u6392\u5e8f\u6570\u7ec4\u4f1a\u5c06 NULL \u653e\u5728\u6700\u524d\u9762\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [test]>select array_sortby(['a','b','c'],[3,2,1]);\n+----------------------------------------------------+\n| array_sortby(ARRAY('a', 'b', 'c'), ARRAY(3, 2, 1)) |\n+----------------------------------------------------+\n| ['c', 'b', 'a']                                    |\n+----------------------------------------------------+\n\nmysql [test]>select array_sortby([1,2,3,4,5],[10,5,1,20,80]);\n+-------------------------------------------------------------+\n| array_sortby(ARRAY(1, 2, 3, 4, 5), ARRAY(10, 5, 1, 20, 80)) |\n+-------------------------------------------------------------+\n| [3, 2, 1, 4, 5]                                             |\n+-------------------------------------------------------------+\n\nmysql [test]>select *,array_sortby(c_array1,c_array2) from test_array_sortby order by id;\n+------+-----------------+-------------------------+--------------------------------------+\n| id   | c_array1        | c_array2                | array_sortby(`c_array1`, `c_array2`) |\n+------+-----------------+-------------------------+--------------------------------------+\n|    0 | NULL            | [2]                     | NULL                                 |\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [5, 3, 1, 2, 4]                      |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [6, 7, 8]                            |\n|    3 | [1]             | [-100]                  | [1]                                  |\n|    4 | NULL            | NULL                    | NULL                                 |\n|    5 | [3]             | NULL                    | [3]                                  |\n|    6 | [1, 2]          | [2, 1]                  | [2, 1]                               |\n|    7 | [NULL]          | [NULL]                  | [NULL]                               |\n|    8 | [1, 2, 3]       | [3, 2, 1]               | [3, 2, 1]                            |\n+------+-----------------+-------------------------+--------------------------------------+\n\nmysql [test]>select *, array_map((x,y)->(y+x),c_array1,c_array2) as arr_sum,array_sortby((x,y)->(y+x),c_array1,c_array2) as arr_sort from array_test2;\n+------+-----------------+--------------+----------------+-----------------+\n| id   | c_array1        | c_array2     | arr_sum        | arr_sort        |\n+------+-----------------+--------------+----------------+-----------------+\n|    1 | [1, 2, 3]       | [10, 11, 12] | [11, 13, 15]   | [1, 2, 3]       |\n|    2 | [4, 3, 5]       | [10, 20, 30] | [14, 23, 35]   | [4, 3, 5]       |\n|    3 | [-40, 30, -100] | [30, 10, 20] | [-10, 40, -80] | [-100, -40, 30] |\n+------+-----------------+--------------+----------------+-----------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, SORT, ARRAY_SORTBY"))}p.isMDXComponent=!0}}]);