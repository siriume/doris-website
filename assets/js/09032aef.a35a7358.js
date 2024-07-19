"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[29099],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,g=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},347887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"INSTALL-PLUGIN",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/INSTALL-PLUGIN",id:"sql-manual/sql-statements/Database-Administration-Statements/INSTALL-PLUGIN",title:"INSTALL-PLUGIN",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Database-Administration-Statements/INSTALL-PLUGIN.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/INSTALL-PLUGIN",permalink:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/INSTALL-PLUGIN",draft:!1,tags:[],version:"current",frontMatter:{title:"INSTALL-PLUGIN",language:"en"},sidebar:"docs",previous:{title:"SET-VARIABLE",permalink:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/SET-VARIABLE"},next:{title:"UNINSTALL-PLUGIN",permalink:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/UNINSTALL-PLUGIN"}},o={},p=[{value:"INSTALL-PLUGIN",id:"install-plugin",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"install-plugin"},"INSTALL-PLUGIN"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"INSTALL PLUGIN"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to install a plugin."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM [source] [PROPERTIES ("key"="value", ...)]\n')),(0,r.yg)("p",null,"source supports three types:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"An absolute path to a zip file."),(0,r.yg)("li",{parentName:"ol"},"An absolute path to a plugin directory."),(0,r.yg)("li",{parentName:"ol"},"Point to a zip file download path with http or https protocol")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install a local zip file plugin:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "/home/users/doris/auditdemo.zip";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install the plugin in a local directory:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "/home/users/doris/auditdemo/";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download and install a plugin:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip";\n')),(0,r.yg)("p",{parentName:"li"},"Note than an md5 file with the same name as the ",(0,r.yg)("inlineCode",{parentName:"p"},".zip")," file needs to be placed, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"http://mywebsite.com/plugin.zip.md5")," .\nThe content is the MD5 value of the .zip file.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download and install a plugin, and set the md5sum value of the zip file at the same time:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip" PROPERTIES("md5sum" = "73877f6029216f4314d712086a146570");\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSTALL, PLUGIN\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);