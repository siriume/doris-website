"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[92320],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},641849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-SMALL-FILES",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-SMALL-FILES",id:"sql-manual/sql-statements/Show-Statements/SHOW-SMALL-FILES",title:"SHOW-SMALL-FILES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Show-Statements/SHOW-SMALL-FILES.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-SMALL-FILES",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-SMALL-FILES",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-SMALL-FILES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-TABLE-ID",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-ID"},next:{title:"SHOW-POLICY",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-POLICY"}},i={},c=[{value:"SHOW-SMALL-FILES",id:"show-small-files",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-small-files"},"SHOW-SMALL-FILES"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW FILE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u4e00\u4e2a\u6570\u636e\u5e93\u5185\uff0c\u7531 CREATE FILE \u547d\u4ee4\u521b\u5efa\u7684\u6587\u4ef6\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW FILE [FROM database];\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"FileId: \u6587\u4ef6ID\uff0c\u5168\u5c40\u552f\u4e00"),(0,a.yg)("li",{parentName:"ul"},"DbName: \u6240\u5c5e\u6570\u636e\u5e93\u540d\u79f0"),(0,a.yg)("li",{parentName:"ul"},"Catalog: \u81ea\u5b9a\u4e49\u5206\u7c7b"),(0,a.yg)("li",{parentName:"ul"},"FileName: \u6587\u4ef6\u540d"),(0,a.yg)("li",{parentName:"ul"},"FileSize: \u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d\u5b57\u8282"),(0,a.yg)("li",{parentName:"ul"},"MD5: \u6587\u4ef6\u7684 MD5")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6570\u636e\u5e93 my_database \u4e2d\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW FILE FROM my_database;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, SMALL, FILES\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);