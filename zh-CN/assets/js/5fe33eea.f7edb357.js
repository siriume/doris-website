"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75236],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>O});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,O=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(O,o(o({ref:t},p),{},{components:n})):r.createElement(O,o({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},850615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-LOAD-WARNINGS",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-LOAD-WARNINGS",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-LOAD-WARNINGS",title:"SHOW-LOAD-WARNINGS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-LOAD-WARNINGS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-LOAD-WARNINGS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-LOAD-WARNINGS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-LOAD-WARNINGS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-LOAD-PROFILE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-LOAD-PROFILE"},next:{title:"SHOW-INDEX",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-INDEX"}},i={},c=[{value:"SHOW-LOAD-WARNINGS",id:"show-load-warnings",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-load-warnings"},"SHOW-LOAD-WARNINGS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW LOAD WARNINGS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u5982\u679c\u5bfc\u5165\u4efb\u52a1\u5931\u8d25\u4e14\u9519\u8bef\u4fe1\u606f\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"ETL_QUALITY_UNSATISFIED"),"\uff0c\u5219\u8bf4\u660e\u5b58\u5728\u5bfc\u5165\u8d28\u91cf\u95ee\u9898, \u5982\u679c\u60f3\u770b\u5230\u8fd9\u4e9b\u6709\u8d28\u91cf\u95ee\u9898\u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u8be5\u8bed\u53e5\u5c31\u662f\u5b8c\u6210\u8fd9\u4e2a\u64cd\u4f5c\u7684\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD WARNINGS\n[FROM db_name]\n[\n   WHERE\n   [LABEL [ = "your_label" ]]\n   [LOAD_JOB_ID = ["job id"]]\n]\n')),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4db"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528 LABEL = \uff0c\u5219\u7cbe\u786e\u5339\u914d\u6307\u5b9a\u7684 label"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a\u4e86 LOAD_JOB_ID\uff0c\u5219\u7cbe\u786e\u5339\u914d\u6307\u5b9a\u7684 JOB ID")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1\u4e2d\u5b58\u5728\u8d28\u91cf\u95ee\u9898\u7684\u6570\u636e\uff0c\u6307\u5b9a label \u4e3a "load_demo_20210112" '),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD WARNINGS FROM demo WHERE LABEL = "load_demo_20210112" \n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, LOAD, WARNINGS\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);