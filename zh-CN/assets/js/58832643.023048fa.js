"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[6512],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>E});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},O=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,E=u["".concat(i,".").concat(O)]||u[O]||m[O]||l;return n?r.createElement(E,o(o({ref:t},c),{},{components:n})):r.createElement(E,o({ref:t},c))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=O;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}O.displayName="MDXCreateElement"},497955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"ALTER-SYSTEM-DROP-FOLLOWER",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER",id:"version-2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER",title:"ALTER-SYSTEM-DROP-FOLLOWER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER.md",sourceDirName:"sql-manual/sql-statements/Cluster-Management-Statements",slug:"/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER",permalink:"/zh-CN/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-SYSTEM-DROP-FOLLOWER",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-DECOMMISSION-BACKEND",permalink:"/zh-CN/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"},next:{title:"ALTER-SYSTEM-DROP-OBSERVER",permalink:"/zh-CN/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-OBSERVER"}},i={},p=[{value:"ALTER-SYSTEM-DROP-FOLLOWER",id:"alter-system-drop-follower",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-system-drop-follower"},"ALTER-SYSTEM-DROP-FOLLOWER"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER SYSTEM DROP FOLLOWER"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u662f\u5220\u9664 FRONTEND \u7684 FOLLOWER \u89d2\u8272\u7684\u8282\u70b9,\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff01\uff09"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DROP FOLLOWER "follower_host:edit_log_port"\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"host \u53ef\u4ee5\u662f\u4e3b\u673a\u540d\u6216\u8005ip\u5730\u5740"),(0,a.yg)("li",{parentName:"ol"},"edit_log_port : edit_log_port \u5728\u5176\u914d\u7f6e\u6587\u4ef6 fe.conf")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6dfb\u52a0\u4e00\u4e2a FOLLOWER\u8282\u70b9"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DROP FOLLOWER "host_ip:9010"\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, DROP, FOLLOWER, ALTER SYSTEM\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);