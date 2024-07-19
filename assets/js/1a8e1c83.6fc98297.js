"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93243],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||c;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},233906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const c={title:"Check Stub Cache",language:"en"},o=void 0,i={unversionedId:"admin-manual/be/check-rpc-channel",id:"version-2.1/admin-manual/be/check-rpc-channel",title:"Check Stub Cache",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/be/check-rpc-channel.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/check-rpc-channel",permalink:"/docs/admin-manual/be/check-rpc-channel",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Check Stub Cache",language:"en"},sidebar:"docs",previous:{title:"Statistic Action",permalink:"/docs/admin-manual/fe/statistic-action"},next:{title:"Reset Stub Cache",permalink:"/docs/admin-manual/be/reset-rpc-channel"}},l={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"check-stub-cache"},"CHECK Stub Cache"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/check_rpc_channel/{host_to_check}/{remot_brpc_port}/{payload_size}")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Check whether the connection cache is available"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"host_to_check")),(0,a.yg)("p",{parentName:"li"},"  Host to check")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"remot_brpc_port")),(0,a.yg)("p",{parentName:"li"},"  Remote brpc port")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"payload_size")),(0,a.yg)("p",{parentName:"li"},"  Load size, unit: B, value range 1~1024000."))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'```\n{\n    "msg":"success",\n    "code":0,\n    "data": "open brpc connection to {host_to_check}:{remot_brpc_port} success.",\n    "count":0\n}\n```\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"```\ncurl http://127.0.0.1:8040/api/check_rpc_channel/127.0.0.1/8060/1024000\n```\n")))}m.isMDXComponent=!0}}]);