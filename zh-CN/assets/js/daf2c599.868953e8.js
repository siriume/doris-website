"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[19660],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>O});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},S=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),S=a,O=u["".concat(s,".").concat(S)]||u[S]||m[S]||l;return n?r.createElement(O,o(o({ref:t},c),{},{components:n})):r.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=S;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}S.displayName="MDXCreateElement"},13970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-SNAPSHOT",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT",title:"SHOW-SNAPSHOT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-SNAPSHOT",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-PARTITION-ID",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-PARTITION-ID"},next:{title:"SHOW-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE"}},s={},i=[{value:"SHOW-SNAPSHOT",id:"show-snapshot",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-snapshot"},"SHOW-SNAPSHOT"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW SNAPSHOT"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b\u4ed3\u5e93\u4e2d\u5df2\u5b58\u5728\u7684\u5907\u4efd\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW SNAPSHOT ON `repo_name`\n[WHERE SNAPSHOT = "snapshot" [AND TIMESTAMP = "backup_timestamp"]];\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    1. \u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a\n        Snapshot\uff1a   \u5907\u4efd\u7684\u540d\u79f0\n        Timestamp\uff1a  \u5bf9\u5e94\u5907\u4efd\u7684\u65f6\u95f4\u7248\u672c\n        Status\uff1a     \u5982\u679c\u5907\u4efd\u6b63\u5e38\uff0c\u5219\u663e\u793a OK\uff0c\u5426\u5219\u663e\u793a\u9519\u8bef\u4fe1\u606f\n            2. \u5982\u679c\u6307\u5b9a\u4e86 TIMESTAMP\uff0c\u5219\u4f1a\u989d\u5916\u663e\u793a\u5982\u4e0b\u4fe1\u606f\uff1a\n        Database\uff1a   \u5907\u4efd\u6570\u636e\u539f\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\n        Details\uff1a    \u4ee5 Json \u7684\u5f62\u5f0f\uff0c\u5c55\u793a\u6574\u4e2a\u5907\u4efd\u7684\u6570\u636e\u76ee\u5f55\u53ca\u6587\u4ef6\u7ed3\u6784\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u4ed3\u5e93 example_repo \u4e2d\u5df2\u6709\u7684\u5907\u4efd"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW SNAPSHOT ON example_repo;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4ec5\u67e5\u770b\u4ed3\u5e93 example_repo \u4e2d\u540d\u79f0\u4e3a backup1 \u7684\u5907\u4efd\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW SNAPSHOT ON example_repo WHERE SNAPSHOT = "backup1";\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},'\u67e5\u770b\u4ed3\u5e93 example_repo \u4e2d\u540d\u79f0\u4e3a backup1 \u7684\u5907\u4efd\uff0c\u65f6\u95f4\u7248\u672c\u4e3a "2018-05-05-15-34-26" \u7684\u8be6\u7ec6\u4fe1\u606f\uff1a'),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW SNAPSHOT ON example_repo\nWHERE SNAPSHOT = "backup1" AND TIMESTAMP = "2018-05-05-15-34-26";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, SNAPSHOT\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);