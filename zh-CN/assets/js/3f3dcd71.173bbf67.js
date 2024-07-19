"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82168],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>f});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,f=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return n?t.createElement(f,l(l({ref:r},p),{},{components:n})):t.createElement(f,l({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},188663:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=n(58168),a=(n(296540),n(15680));const o={title:"DECIMAL",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/DECIMAL",id:"version-1.2/sql-manual/sql-reference/Data-Types/DECIMAL",title:"DECIMAL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Types/DECIMAL.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DECIMAL",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DECIMAL",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DECIMAL",language:"zh-CN"},sidebar:"docs",previous:{title:"DOUBLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DOUBLE"},next:{title:"DECIMALV3",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/DECIMALV3"}},c={},s=[{value:"DECIMAL",id:"decimal",level:2},{value:"description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function d(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"decimal"},"DECIMAL"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DECIMAL(M[,D])\n\u9ad8\u7cbe\u5ea6\u5b9a\u70b9\u6570\uff0cM \u4ee3\u8868\u4e00\u5171\u6709\u591a\u5c11\u4e2a\u6709\u6548\u6570\u5b57(precision)\uff0cD \u4ee3\u8868\u5c0f\u6570\u4f4d\u6709\u591a\u5c11\u6570\u5b57(scale)\uff0c\n\u6709\u6548\u6570\u5b57 M \u7684\u8303\u56f4\u662f [1, 27]\uff0c\u5c0f\u6570\u4f4d\u6570\u5b57\u6570\u91cf D \u7684\u8303\u56f4\u662f [0, 9]\uff0c\u6574\u6570\u4f4d\u6570\u5b57\u6570\u91cf\u7684\u8303\u56f4\u662f [1, 18]\uff0c\n\u53e6\u5916\uff0cM \u5fc5\u987b\u8981\u5927\u4e8e\u7b49\u4e8e D \u7684\u53d6\u503c\u3002\n\n\u9ed8\u8ba4\u503c\u4e3a DECIMAL(9, 0)\u3002\n")),(0,a.yg)("h3",{id:"note"},"note"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u6211\u4eec\u6253\u7b97\u57282024\u5e74\u5220\u9664\u8fd9\u4e2a\u7c7b\u578b\uff0c\u76ee\u524d\u9636\u6bb5\uff0cDoris\u9ed8\u8ba4\u7981\u6b62\u521b\u5efa\u542b\u6709DECIMAL\u7c7b\u578b\u7684\u8868\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u9700\u8981\u5728FE\u7684config\u4e2d\u6dfb\u52a0`disable_decimalv2 = false`\uff0c\u5e76\u91cd\u542fFE\u3002\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DECIMAL\n")))}d.isMDXComponent=!0}}]);