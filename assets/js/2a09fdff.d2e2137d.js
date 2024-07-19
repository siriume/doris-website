"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82487],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,y=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(y,c(c({ref:n},u),{},{components:t})):r.createElement(y,c({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},729384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(58168),o=(t(296540),t(15680));const a={title:"CONVERT_TO",language:"en"},c=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/convert-to",id:"sql-manual/sql-functions/string-functions/convert-to",title:"CONVERT_TO",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/convert-to.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/convert-to",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/convert-to",draft:!1,tags:[],version:"current",frontMatter:{title:"CONVERT_TO",language:"en"},sidebar:"docs",previous:{title:"url_decode",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/url-decode"},next:{title:"EXTRACT_URL_PARAMETER",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/extract-url-parameter"}},i={},l=[{value:"convert_to",id:"convert_to",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"convert_to"},"convert_to"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR convert_to(VARCHAR column, VARCHAR character)")),(0,o.yg)("p",null,"It is used in the order by clause. eg: order by convert(column using gbk), Now only support character can be converted to 'gbk'.\nBecause when the order by column contains Chinese, it is not arranged in the order of Pinyin\nAfter the character encoding of column is converted to gbk, it can be arranged according to pinyin"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select * from class_test order by class_name;\n+----------+------------+-------------+\n| class_id | class_name | student_ids |\n+----------+------------+-------------+\n|        6 | asd        | [6]         |\n|        7 | qwe        | [7]         |\n|        8 | z          | [8]         |\n|        2 | \u54c8         | [2]         |\n|        3 | \u54e6         | [3]         |\n|        1 | \u554a         | [1]         |\n|        4 | \u5f20         | [4]         |\n|        5 | \u6211         | [5]         |\n+----------+------------+-------------+\n\nmysql> select * from class_test order by convert(class_name using gbk);\n+----------+------------+-------------+\n| class_id | class_name | student_ids |\n+----------+------------+-------------+\n|        6 | asd        | [6]         |\n|        7 | qwe        | [7]         |\n|        8 | z          | [8]         |\n|        1 | \u554a         | [1]         |\n|        2 | \u54c8         | [2]         |\n|        3 | \u54e6         | [3]         |\n|        5 | \u6211         | [5]         |\n|        4 | \u5f20         | [4]         |\n+----------+------------+-------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"convert_to\n")))}p.isMDXComponent=!0}}]);