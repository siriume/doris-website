"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64067],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),y=a,d=m["".concat(c,".").concat(y)]||m[y]||p[y]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},929850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(58168),a=(n(296540),n(15680));const l={title:"ALTER-ROLE",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Account-Management-Statements/ALTER-ROLE",id:"version-2.1/sql-manual/sql-statements/Account-Management-Statements/ALTER-ROLE",title:"ALTER-ROLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Account-Management-Statements/ALTER-ROLE.md",sourceDirName:"sql-manual/sql-statements/Account-Management-Statements",slug:"/sql-manual/sql-statements/Account-Management-Statements/ALTER-ROLE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Account-Management-Statements/ALTER-ROLE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-ROLE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-USER",permalink:"/zh-CN/docs/sql-manual/sql-statements/Account-Management-Statements/CREATE-USER"},next:{title:"ALTER-USER",permalink:"/zh-CN/docs/sql-manual/sql-statements/Account-Management-Statements/ALTER-USER"}},c={},i=[{value:"ALTER ROLE",id:"alter-role",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:i},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-role"},"ALTER ROLE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER ROLE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u89d2\u8272"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," ALTER ROLE role_name comment;\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4fee\u6539\u4e00\u4e2a\u89d2\u8272\u7684\u6ce8\u91ca"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER ROLE role1 COMMENT "this is my first role";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ALTER, ROLE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);