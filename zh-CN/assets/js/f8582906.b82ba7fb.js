"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[85963],{15680:(e,n,l)=>{l.d(n,{xA:()=>s,yg:()=>d});var r=l(296540);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function t(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?t(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,r,a=function(e,n){if(null==e)return{};var l,r,a={},t=Object.keys(e);for(r=0;r<t.length;r++)l=t[r],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)l=t[r],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var l=e.components,a=e.mdxType,t=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=p(l),m=a,d=y["".concat(c,".").concat(m)]||y[m]||u[m]||t;return l?r.createElement(d,o(o({ref:n},s),{},{components:l})):r.createElement(d,o({ref:n},s))}));function d(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=l.length,o=new Array(t);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[y]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<t;p++)o[p]=l[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},53118:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>p});var r=l(58168),a=(l(296540),l(15680));const t={title:"Workload Policy",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/resource-admin/workload-policy",id:"version-2.1/admin-manual/resource-admin/workload-policy",title:"Workload Policy",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/resource-admin/workload-policy.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/workload-policy",permalink:"/zh-CN/docs/admin-manual/resource-admin/workload-policy",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Workload Policy",language:"zh-CN"},sidebar:"docs",previous:{title:"Workload Group",permalink:"/zh-CN/docs/admin-manual/resource-admin/workload-group"},next:{title:"Workload\u7cfb\u7edf\u8868",permalink:"/zh-CN/docs/admin-manual/resource-admin/workload-system-table"}},c={},p=[{value:"\u529f\u80fd\u80cc\u666f",id:"\u529f\u80fd\u80cc\u666f",level:2},{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u9002\u7528\u4e8eFE\u7684policy",id:"\u9002\u7528\u4e8efe\u7684policy",level:3},{value:"\u9002\u7528\u4e8eBE\u7684policy",id:"\u9002\u7528\u4e8ebe\u7684policy",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u5e38\u89c1\u7528\u6cd5",id:"\u5e38\u89c1\u7528\u6cd5",level:2},{value:"\u6548\u679c\u6d4b\u8bd5",id:"\u6548\u679c\u6d4b\u8bd5",level:2},{value:"1 session\u53d8\u91cf\u4fee\u6539\u6d4b\u8bd5",id:"1-session\u53d8\u91cf\u4fee\u6539\u6d4b\u8bd5",level:3},{value:"2 \u5927\u67e5\u8be2\u7194\u65ad\u6d4b\u8bd5",id:"2-\u5927\u67e5\u8be2\u7194\u65ad\u6d4b\u8bd5",level:3}],s={toc:p},y="wrapper";function u(e){let{components:n,...l}=e;return(0,a.yg)(y,(0,r.A)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("version",{since:"2.1.3"}),(0,a.yg)("h2",{id:"\u529f\u80fd\u80cc\u666f"},"\u529f\u80fd\u80cc\u666f"),(0,a.yg)("p",null,"Workload Group\u529f\u80fd\u89e3\u51b3\u4e86\u4e0d\u540c\u8d1f\u8f7d\u95f4\u7684\u9694\u79bb\u95ee\u9898\uff0c\u4f46\u65e0\u6cd5\u89e3\u51b3\u540c\u4e00\u4e2aGroup\u5185\u7684\u5927\u67e5\u8be2\u7194\u65ad\u7684\u95ee\u9898\uff0c \u7528\u6237\u9047\u5230\u5927\u67e5\u8be2\u5f71\u54cd\u96c6\u7fa4\u7a33\u5b9a\u6027\u65f6\u53ea\u80fd\u624b\u52a8\u5904\u7406\u3002"),(0,a.yg)("p",null,"\u56e0\u6b64Doris\u5b9e\u73b0\u4e86Workload Policy\u7684\u529f\u80fd\uff0c\u652f\u6301\u67e5\u8be2\u8d1f\u8f7d\u7ba1\u7406\u7684\u81ea\u52a8\u5316\uff0c\u6bd4\u5982\u5b9e\u73b0\u81ea\u52a8\u53d6\u6d88\u8fd0\u884c\u65f6\u95f4\u8d85\u8fc75s\u7684\u67e5\u8be2\u8fd9\u6837\u7684\u529f\u80fd\u3002"),(0,a.yg)("h2",{id:"\u57fa\u7840\u6982\u5ff5"},"\u57fa\u7840\u6982\u5ff5"),(0,a.yg)("p",null,"\u7ed9\u51fa\u4e00\u4e2a\u521b\u5efaWorkload Policy\u7684\u8bed\u6cd5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"create workload policy test_cancel_policy\nconditions(query_time > 1000)\nactions(cancel_query) \nproperties('enabled'='true'); \n")),(0,a.yg)("p",null,"Workload Policy\u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u51e0\u4e2a\u6982\u5ff5\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"policy\uff0c\u4ee3\u8868\u4e86\u7528\u6237\u5b9a\u4e49\u7684\u7b56\u7565\uff0c\u5305\u542b\u89e6\u53d1\u7b56\u7565\u7684\u6761\u4ef6(conditions)\u548c\u89e6\u53d1\u7b56\u7565\u540e\u7684\u52a8\u4f5c(actions)\u3002"),(0,a.yg)("li",{parentName:"ul"},"conditions\uff0c\u4ee3\u8868\u4e86\u7b56\u7565\u7684\u89e6\u53d1\u6761\u4ef6\uff0c\u6bd4\u5982\u5f53\u67e5\u8be2\u65f6\u95f4\u5927\u4e8e3s\uff0c\u5c31\u89e6\u53d1\u5f53\u524dpolicy\u7684action\u3002\u4e00\u4e2apolicy\u53ef\u4ee5\u6709\u591a\u4e2acondition\uff0c\u591a\u4e2acondition\u4e4b\u95f4\u662f\u201c\u4e0e\u201d\u7684\u5173\u7cfb\u3002"),(0,a.yg)("li",{parentName:"ul"},"actions\uff0c\u5f53policy\u88ab\u89e6\u53d1\u65f6\u6240\u91c7\u53d6\u7684\u52a8\u4f5c\uff0c\u6bd4\u5982\u53ef\u4ee5\u53d6\u6d88\u67e5\u8be2\uff0c\u76ee\u524d\u4e00\u4e2apolicy\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2aaction(\u9664\u4e86",(0,a.yg)("inlineCode",{parentName:"li"},"set_session_variable"),")\u3002"),(0,a.yg)("li",{parentName:"ul"},"properties\uff0c\u5b9a\u4e49\u4e86\u5f53\u524dpolicy\u7684\u5c5e\u6027\uff0c\u5305\u62ec\u662f\u5426\u542f\u7528\u548c\u4f18\u5148\u7ea7\u3002")),(0,a.yg)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2dpolicy\u7684\u542b\u4e49\u662f\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"test_cancel_policy"),"\u7684policy\uff0c\u5b83\u4f1a\u53d6\u6d88\u6389\u96c6\u7fa4\u4e2d\u8fd0\u884c\u65f6\u95f4\u8d85\u8fc71s\u7684\u67e5\u8be2\uff0c\u5f53\u524d\u72b6\u6001\u4e3a\u542f\u7528\u3002\n\u521b\u5efa Workload Policy \u9700\u8981 admin_priv \u6743\u9650\u3002"),(0,a.yg)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,a.yg)("p",null,"\u7531\u4e8eaction\u7684\u884c\u4e3a\u6709\u7684\u53ea\u80fd\u5728FE\u751f\u6548\uff0c\u6709\u7684\u53ea\u80fd\u5728BE\u751f\u6548\uff0c\u56e0\u6b64policy\u672c\u8eab\u4e5f\u6709FE\u548cBE\u7684\u533a\u522b\u3002"),(0,a.yg)("h3",{id:"\u9002\u7528\u4e8efe\u7684policy"},"\u9002\u7528\u4e8eFE\u7684policy"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Condition",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"username\uff0c\u5f53\u4e00\u4e2a\u67e5\u8be2\u7684username\u4e3a\u67d0\u4e2a\u503c\u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1\u76f8\u5e94\u7684action"))),(0,a.yg)("li",{parentName:"ol"},"Action",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"set_session_variable\uff0c\u8fd9\u4e2aaction\u53ef\u4ee5\u6267\u884c\u4e00\u6761set session variable\u7684\u8bed\u53e5\u3002\u540c\u4e00\u4e2apolicy\u53ef\u4ee5\u6709\u591a\u4e2a",(0,a.yg)("inlineCode",{parentName:"li"},"set_session_variable"),"\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e00\u4e2apolicy\u53ef\u4ee5\u6267\u884c\u591a\u4e2a\u4fee\u6539session\u53d8\u91cf\u7684\u8bed\u53e5\u3002")))),(0,a.yg)("p",null,"\u9002\u7528\u4e8eFE\u7684policy\u4e3b\u8981\u662f\u7528\u4e8e\u4fee\u6539\u67d0\u4e2auser\u7684session\u53d8\u91cf\uff0c\u76ee\u524d\u4e0d\u652f\u6301set global\u7684\u7528\u6cd5\u3002"),(0,a.yg)("h3",{id:"\u9002\u7528\u4e8ebe\u7684policy"},"\u9002\u7528\u4e8eBE\u7684policy"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Condition",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"be_scan_rows\uff0c\u4e00\u4e2asql\u5728\u5355\u4e2aBE\u8fdb\u7a0b\u5185scan\u7684\u884c\u6570\uff0c\u5982\u679c\u8fd9\u4e2asql\u5728BE\u4e0a\u662f\u591a\u5e76\u53d1\u6267\u884c\uff0c\u90a3\u4e48\u5c31\u662f\u591a\u4e2a\u5e76\u53d1\u7684\u7d2f\u52a0\u503c\u3002"),(0,a.yg)("li",{parentName:"ul"},"be_scan_bytes\uff0c\u4e00\u4e2asql\u5728\u5355\u4e2aBE\u8fdb\u7a0b\u5185scan\u7684\u5b57\u8282\u6570\uff0c\u5982\u679c\u8fd9\u4e2asql\u5728BE\u4e0a\u662f\u591a\u5e76\u53d1\u6267\u884c\uff0c\u90a3\u4e48\u5c31\u662f\u591a\u4e2a\u5e76\u53d1\u7684\u7d2f\u52a0\u503c\uff0c\u5355\u4f4d\u662f\u5b57\u8282\u3002"),(0,a.yg)("li",{parentName:"ul"},"query_time\uff0c\u4e00\u4e2asql\u5728\u5355\u4e2aBE\u8fdb\u7a0b\u4e0a\u7684\u8fd0\u884c\u65f6\u95f4\uff0c\u65f6\u95f4\u5355\u4f4d\u662f\u6beb\u79d2\u3002"),(0,a.yg)("li",{parentName:"ul"},"query_be_memory_bytes\uff0c\u4ece2.1.5\u7248\u672c\u5f00\u59cb\u652f\u6301\u3002\u4e00\u4e2asql\u5728\u5355\u4e2aBE\u8fdb\u7a0b\u5185\u4f7f\u7528\u7684\u5185\u5b58\u7528\u91cf\uff0c\u5982\u679c\u8fd9\u4e2asql\u5728BE\u4e0a\u662f\u591a\u5e76\u53d1\u6267\u884c\uff0c\u90a3\u4e48\u5c31\u662f\u591a\u4e2a\u5e76\u53d1\u7684\u7d2f\u52a0\u503c\uff0c\u5355\u4f4d\u662f\u5b57\u8282\u3002"))),(0,a.yg)("li",{parentName:"ol"},"Action",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"cancel_query\uff0c\u53d6\u6d88\u67e5\u8be2\u3002")))),(0,a.yg)("p",null,"\u76ee\u524dBE\u7684policy\u4e3b\u8981\u662f\u7528\u4e8eBE\u8d1f\u8f7d\u7684\u7ba1\u7406\uff0c\u6bd4\u5982\u5f53\u67d0\u4e2aquery\u7684scan\u6570\u636e\u91cf\u8fc7\u5927\u6216\u8005\u67e5\u8be2\u65f6\u95f4\u8fc7\u957f\uff0c\u5c31\u53d6\u6d88\u8fd9\u4e2aquery\u3002"),(0,a.yg)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"enabled\uff0c\u53d6\u503c\u4e3atrue\u6216false\uff0c\u9ed8\u8ba4\u503c\u4e3atrue\uff0c\u8868\u793a\u5f53\u524dpolicy\u5904\u4e8e\u542f\u7528\u72b6\u6001\uff0cfalse\u8868\u793a\u5f53\u524dpolicy\u5904\u4e8e\u7981\u7528\u72b6\u6001\u3002"),(0,a.yg)("li",{parentName:"ul"},"priority\uff0c\u53d6\u503c\u8303\u56f4\u4e3a0\u5230100\u7684\u6b63\u6574\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a0\uff0c\u4ee3\u8868policy\u7684\u4f18\u5148\u7ea7\uff0c\u8be5\u503c\u8d8a\u5927\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\u3002\u8fd9\u4e2a\u5c5e\u6027\u7684\u4e3b\u8981\u4f5c\u7528\u662f\uff0c\u5f53\u5339\u914d\u5230\u591a\u4e2apolicy\u65f6\uff0c\u9009\u62e9\u4f18\u5148\u7ea7\u6700\u9ad8\u7684policy\u3002"),(0,a.yg)("li",{parentName:"ul"},"workload_group\uff0c\u76ee\u524d\u4e00\u4e2apolicy\u53ef\u4ee5\u7ed1\u5b9a\u4e00\u4e2aworkload group\uff0c\u4ee3\u8868\u8fd9\u4e2apolicy\u53ea\u5bf9\u67d0\u4e2aworkload group\u751f\u6548\u3002\u9ed8\u8ba4\u4e3a\u7a7a\uff0c\u4ee3\u8868\u5bf9\u6240\u6709\u67e5\u8be2\u751f\u6548\u3002")),(0,a.yg)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u540c\u4e00\u4e2apolicy\u7684condition\u548caction\u8981\u4e48\u90fd\u662fFE\u7684\uff0c\u8981\u4e48\u90fd\u662fBE\u7684\uff0c\u6bd4\u5982",(0,a.yg)("inlineCode",{parentName:"p"},"set_session_variable"),"\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"cancel_query"),"\u65e0\u6cd5\u914d\u7f6e\u5230\u540c\u4e00\u4e2apolicy\u4e2d\u3002condition ",(0,a.yg)("inlineCode",{parentName:"p"},"be_scan_rows"),"\u548ccondition ",(0,a.yg)("inlineCode",{parentName:"p"},"username"),"\u65e0\u6cd5\u914d\u7f6e\u5230\u540c\u4e00\u4e2apolicy\u4e2d\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u7531\u4e8e\u76ee\u524d\u7684policy\u662f\u5f02\u6b65\u7ebf\u7a0b\u4ee5\u56fa\u5b9a\u65f6\u95f4\u95f4\u9694\u6267\u884c\u7684\uff0c\u56e0\u6b64\u7b56\u7565\u7684\u751f\u6548\u5b58\u5728\u4e00\u5b9a\u7684\u6ede\u540e\u6027\u3002\u6bd4\u5982\u7528\u6237\u914d\u7f6e\u4e86scan\u884c\u6570\u5927\u4e8e100\u4e07\u5c31\u53d6\u6d88\u67e5\u8be2\u7684\u7b56\u7565\uff0c\u5982\u679c\u6b64\u65f6\u96c6\u7fa4\u8d44\u6e90\u6bd4\u8f83\u7a7a\u95f2\uff0c\u90a3\u4e48\u6709\u53ef\u80fd\u5728\u53d6\u6d88\u7b56\u7565\u751f\u6548\u4e4b\u524d\u67e5\u8be2\u5c31\u5df2\u7ecf\u7ed3\u675f\u4e86\u3002\u76ee\u524d\u8fd9\u4e2a\u65f6\u95f4\u95f4\u9694\u4e3a500ms\uff0c\u8fd9\u610f\u5473\u7740\u8fd0\u884c\u65f6\u95f4\u8fc7\u77ed\u7684\u67e5\u8be2\u53ef\u80fd\u4f1a\u7ed5\u8fc7\u7b56\u7565\u7684\u68c0\u67e5\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5f53\u524d\u652f\u6301\u7684\u8d1f\u8f7d\u7c7b\u578b\u5305\u62ecselect/insert select/stream load/broker load/routine load\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e00\u4e2a\u67e5\u8be2\u53ef\u80fd\u5339\u914d\u5230\u591a\u4e2apolicy\uff0c\u4f46\u662f\u53ea\u6709\u4f18\u5148\u7ea7\u6700\u9ad8\u7684policy\u4f1a\u751f\u6548\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u76ee\u524d\u4e0d\u652f\u6301action\u548ccondition\u7684\u4fee\u6539\uff0c\u53ea\u80fd\u901a\u8fc7\u5220\u9664\u65b0\u5efa\u7684\u65b9\u5f0f\u4fee\u6539\u3002"))),(0,a.yg)("h2",{id:"\u5e38\u89c1\u7528\u6cd5"},"\u5e38\u89c1\u7528\u6cd5"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5c06\u7528\u6237\u540d\u4e3aadmin\u7684\u6240\u6709session\u53d8\u91cf\u4e2d\u7684workload group\u4fee\u6539\u4e3anormal")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"create workload policy test_set_var_policy\nconditions(username='admin')\nactions(set_session_variable 'workload_group=normal') \n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u53d6\u6d88\u6240\u6709\u5355\u4e2abe\u4e0ascan\u884c\u6570\u5927\u4e8e1000\u884c\u7684sql")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"create workload policy test_cancel_query\nconditions(be_scan_rows > 1000)\nactions(cancel_query) \n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u53d6\u6d88\u6240\u6709scan\u5b57\u8282\u6570\u5927\u4e8e5G\u4e14\u8fd0\u884c\u65f6\u95f4\u8d85\u8fc71s\u7684sql")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"create workload policy test_cancel_big_query\nconditions(query_time > 1000, be_scan_bytes > 5368709120)\nactions(cancel_query) \n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"\u4fee\u6539\u5c5e\u6027")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"alter workload policy test_cancel_big_query properties('workload_group'='normal');\n")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"\u67e5\u770b\u5df2\u521b\u5efa\u7684policy")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [information_schema]>select * from workload_policy;\n+-------+-----------------------+----------------------------------------------+--------------+----------+---------+---------+----------------+\n| ID    | NAME                  | CONDITION                                    | ACTION       | PRIORITY | ENABLED | VERSION | WORKLOAD_GROUP |\n+-------+-----------------------+----------------------------------------------+--------------+----------+---------+---------+----------------+\n| 35025 | test_cancel_big_query | query_time > 1000;be_scan_bytes > 5368709120 | cancel_query |        0 |       1 |       1 | normal         |\n+-------+-----------------------+----------------------------------------------+--------------+----------+---------+---------+----------------+\n1 row in set (0.03 sec)\n")),(0,a.yg)("ol",{start:6},(0,a.yg)("li",{parentName:"ol"},"\u5220\u9664policy")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"drop workload policy test_cancel_big_query;\n")),(0,a.yg)("h2",{id:"\u6548\u679c\u6d4b\u8bd5"},"\u6548\u679c\u6d4b\u8bd5"),(0,a.yg)("h3",{id:"1-session\u53d8\u91cf\u4fee\u6539\u6d4b\u8bd5"},"1 session\u53d8\u91cf\u4fee\u6539\u6d4b\u8bd5"),(0,a.yg)("p",null,"\u5c1d\u8bd5\u4fee\u6539admin\u8d26\u6237\u7684session\u53d8\u91cf\u4e2d\u7684\u5e76\u53d1\u76f8\u5173\u7684\u53c2\u6570"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// \u767b\u5f55 admin\u8d26\u6237\u67e5\u770b\u5e76\u53d1\u53c2\u6570\nmysql [(none)]>show variables like '%parallel_fragment_exec_instance_num%';\n+-------------------------------------+-------+---------------+---------+\n| Variable_name                       | Value | Default_Value | Changed |\n+-------------------------------------+-------+---------------+---------+\n| parallel_fragment_exec_instance_num | 8     | 8             | 0       |\n+-------------------------------------+-------+---------------+---------+\n1 row in set (0.00 sec)\n\n// \u521b\u5efa\u4fee\u6539admin\u8d26\u6237\u5e76\u53d1\u53c2\u6570\u7684policy\ncreate workload policy test_set_var_policy\nconditions(username='admin')\nactions(set_session_variable 'parallel_fragment_exec_instance_num=1') \n\n// \u8fc7\u6bb5\u65f6\u95f4\u540e\u518d\u6b21\u67e5\u770badmin\u8d26\u6237\u7684\u53c2\u6570\nmysql [(none)]>show variables like '%parallel_fragment_exec_instance_num%';\n+-------------------------------------+-------+---------------+---------+\n| Variable_name                       | Value | Default_Value | Changed |\n+-------------------------------------+-------+---------------+---------+\n| parallel_fragment_exec_instance_num | 1     | 8             | 1       |\n+-------------------------------------+-------+---------------+---------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("h3",{id:"2-\u5927\u67e5\u8be2\u7194\u65ad\u6d4b\u8bd5"},"2 \u5927\u67e5\u8be2\u7194\u65ad\u6d4b\u8bd5"),(0,a.yg)("p",null,"\u6d4b\u8bd5\u5bf9\u8fd0\u884c\u65f6\u95f4\u8d85\u8fc73s\u7684\u67e5\u8be2\u8fdb\u884c\u7194\u65ad\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2ackbench\u7684q29\u8fd0\u884c\u6210\u529f\u65f6\u7684\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2asql\u8dd1\u5b8c\u9700\u89814.5s\u7684\u65f6\u95f4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [hits]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\n+-----------------------------------------------------------------------+------------------+----------+---------------------------------------------------------------------------------------------------------------------+\n| k                                                                     | l                | c        | min(Referer)                                                                                                        |\n+-----------------------------------------------------------------------+------------------+----------+---------------------------------------------------------------------------------------------------------------------+\n| 1                                                                     | 85.4611926713085 | 67259319 | http://%26ad%3D1%25EA%25D0%26utm_source=web&cd=19590&input_onlist/\u0431\u0438-2 \u043c\u0435\u0441\u0442\u043e \u0431\u0443\u0434\u0443\u0449\u0435\u0439 \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043d                       |\n| http:%2F%2Fwwww.regnancies/search&evL8gE&where=all&filmId=bEmYZc_WTDE |               69 |   207347 | http:%2F%2Fwwww.regnancies/search&evL8gE&where=all&filmId=bEmYZc_WTDE                                               |\n| http://\u043d\u043e\u0432\u043e\u0441\u0442\u0440\u0430\u0448\u043d\u0430\u044f                                                   |               31 |   740277 | http://\u043d\u043e\u0432\u043e\u0441\u0442\u0440\u0430\u0448\u043d\u0430\u044f                                                                                                 |\n| http://loveche.html?ctid                                              |               24 |   144901 | http://loveche.html?ctid                                                                                            |\n| http://rukodeliveresult                                               |               23 |   226135 | http://rukodeliveresult                                                                                             |\n| http://holodilnik.ru                                                  |               20 |   133893 | http://holodilnik.ru                                                                                                |\n| http://smeshariki.ru                                                  |               20 |   210736 | http://smeshariki.ru                                                                                                |\n| http:%2F%2Fviewtopic                                                  |               20 |   391115 | http:%2F%2Fviewtopic                                                                                                |\n| http:%2F%2Fwwww.ukr                                                   |               19 |   655178 | http:%2F%2Fwwww.ukr                                                                                                 |\n| http:%2F%2FviewType                                                   |               19 |   148907 | http:%2F%2FviewType                                                                                                 |\n| http://state=2008                                                     |               17 |   139630 | http://state=2008                                                                                                   |\n+-----------------------------------------------------------------------+------------------+----------+---------------------------------------------------------------------------------------------------------------------+\n11 rows in set (4.50 sec)\n")),(0,a.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a\u8fd0\u884c\u65f6\u95f4\u8d85\u8fc73s\u5c31\u53d6\u6d88\u67e5\u8be2\u7684policy"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"create workload policy test_cancel_3s_query\nconditions(query_time > 3000)\nactions(cancel_query) \n")),(0,a.yg)("p",null,"\u518d\u6b21\u6267\u884csql\u53ef\u4ee5\u770b\u5230SQL\u6267\u884c\u4f1a\u76f4\u63a5\u62a5\u9519"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [hits]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\nERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[CANCELLED]query cancelled by workload policy,id:12345\n")))}u.isMDXComponent=!0}}]);