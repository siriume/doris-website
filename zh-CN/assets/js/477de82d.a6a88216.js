"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3156],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>c});var l=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=l.createContext({}),m=function(e){var a=l.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},g=function(e){var a=m(e.components);return l.createElement(o.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},s=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),y=m(t),s=n,c=y["".concat(o,".").concat(s)]||y[s]||d[s]||r;return t?l.createElement(c,p(p({ref:a},g),{},{components:t})):l.createElement(c,p({ref:a},g))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,p=new Array(r);p[0]=s;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[y]="string"==typeof e?e:n,p[1]=i;for(var m=2;m<r;m++)p[m]=t[m];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},736917:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var l=t(58168),n=(t(296540),t(15680));const r={title:"\u6570\u636e\u5220\u9664\u6062\u590d",language:"zh-CN"},p=void 0,i={unversionedId:"admin-manual/data-admin/delete-recover",id:"admin-manual/data-admin/delete-recover",title:"\u6570\u636e\u5220\u9664\u6062\u590d",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/data-admin/delete-recover.md",sourceDirName:"admin-manual/data-admin",slug:"/admin-manual/data-admin/delete-recover",permalink:"/zh-CN/docs/dev/admin-manual/data-admin/delete-recover",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u5220\u9664\u6062\u590d",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u5907\u4efd\u6062\u590d",permalink:"/zh-CN/docs/dev/admin-manual/data-admin/restore"},next:{title:"\u8de8\u96c6\u7fa4\u6570\u636e\u540c\u6b65",permalink:"/zh-CN/docs/dev/admin-manual/data-admin/ccr"}},o={},m=[{value:"Drop \u6062\u590d",id:"drop-\u6062\u590d",level:2},{value:"\u67e5\u770b\u53ef\u6062\u590d\u6570\u636e",id:"\u67e5\u770b\u53ef\u6062\u590d\u6570\u636e",level:3},{value:"\u5f00\u59cb\u6570\u636e\u6062\u590d",id:"\u5f00\u59cb\u6570\u636e\u6062\u590d",level:3},{value:"BE tablet \u6570\u636e\u6062\u590d",id:"be-tablet-\u6570\u636e\u6062\u590d",level:2},{value:"\u4ece BE \u56de\u6536\u7ad9\u4e2d\u6062\u590d\u6570\u636e",id:"\u4ece-be-\u56de\u6536\u7ad9\u4e2d\u6062\u590d\u6570\u636e",level:3},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:4},{value:"single mode",id:"single-mode",level:5},{value:"batch mode",id:"batch-mode",level:5},{value:"\u4fee\u590d\u7f3a\u5931\u6216\u635f\u574f\u7684 Tablet",id:"\u4fee\u590d\u7f3a\u5931\u6216\u635f\u574f\u7684-tablet",level:3}],g={toc:m},y="wrapper";function d(e){let{components:a,...t}=e;return(0,n.yg)(y,(0,l.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u6570\u636e\u5220\u9664\u6062\u590d"},"\u6570\u636e\u5220\u9664\u6062\u590d"),(0,n.yg)("p",null,"\u6570\u636e\u5220\u9664\u6062\u590d\u5305\u542b\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u7528\u6237\u6267\u884c\u547d\u4ee4",(0,n.yg)("inlineCode",{parentName:"li"},"drop database/table/partition"),"\u4e4b\u540e\uff0c\u518d\u4f7f\u7528\u547d\u4ee4",(0,n.yg)("inlineCode",{parentName:"li"},"recover"),"\u6765\u6062\u590d\u6574\u4e2a\u6570\u636e\u5e93/\u8868/\u5206\u533a\u7684\u6240\u6709\u6570\u636e\u3002\u8fd9\u79cd\u4fee\u590d\u5c06\u4f1a\u628a FE \u4e0a\u7684\u6570\u636e\u5e93/\u8868/\u5206\u533a\u7684\u7ed3\u6784\uff0c\u4ece catalog \u56de\u6536\u7ad9\u91cc\u6062\u590d\u8fc7\u6765\uff0c\u628a\u5b83\u4eec\u4ece\u4e0d\u53ef\u89c1\u72b6\u6001\uff0c\u91cd\u65b0\u53d8\u56de\u53ef\u89c1\uff0c\u5e76\u4e14\u539f\u6765\u7684\u6570\u636e\u4e5f\u6062\u590d\u53ef\u89c1\uff1b"),(0,n.yg)("li",{parentName:"ol"},"\u7528\u6237\u56e0\u4e3a\u67d0\u4e9b\u8bef\u64cd\u4f5c\u6216\u8005\u7ebf\u4e0a bug\uff0c\u5bfc\u81f4 BE \u4e0a\u90e8\u5206 tablet \u88ab\u5220\u9664\uff0c\u901a\u8fc7\u8fd0\u7ef4\u5de5\u5177\u628a\u8fd9\u4e9b tablet \u4ece BE \u56de\u6536\u7ad9\u4e2d\u62a2\u6551\u56de\u6765\u3002")),(0,n.yg)("p",null,"\u4e0a\u9762\u4e24\u4e2a\uff0c\u524d\u8005\u9488\u5bf9\u7684\u662f\u6570\u636e\u5e93/\u8868/\u5206\u533a\u5728 FE \u4e0a\u5df2\u7ecf\u4e0d\u53ef\u89c1\uff0c\u4e14\u6570\u636e\u5e93/\u8868/\u5206\u533a\u7684\u5143\u6570\u636e\u5c1a\u4fdd\u7559\u5728 FE \u7684 catalog \u56de\u6536\u7ad9\u91cc\u3002\u800c\u540e\u8005\u9488\u5bf9\u7684\u662f\u6570\u636e\u5e93/\u8868/\u5206\u533a\u5728 FE \u4e0a\u53ef\u89c1\uff0c\u4f46\u90e8\u5206 BE tablet \u6570\u636e\u88ab\u5220\u9664\u3002"),(0,n.yg)("p",null,"\u4e0b\u9762\u5206\u522b\u9610\u8ff0\u8fd9\u4e24\u79cd\u6062\u590d\u3002"),(0,n.yg)("h2",{id:"drop-\u6062\u590d"},"Drop \u6062\u590d"),(0,n.yg)("p",null,"Doris \u4e3a\u4e86\u907f\u514d\u8bef\u64cd\u4f5c\u9020\u6210\u7684\u707e\u96be\uff0c\u652f\u6301\u5bf9\u8bef\u5220\u9664\u7684\u6570\u636e\u5e93/\u8868/\u5206\u533a\u8fdb\u884c\u6570\u636e\u6062\u590d\uff0c\u5728 drop table \u6216\u8005 drop database \u6216\u8005 drop partition \u4e4b\u540e\uff0cDoris \u4e0d\u4f1a\u7acb\u523b\u5bf9\u6570\u636e\u8fdb\u884c\u7269\u7406\u5220\u9664\uff0c\u800c\u662f\u5728 FE \u7684 catalog \u56de\u6536\u7ad9\u4e2d\u4fdd\u7559\u4e00\u6bb5\u65f6\u95f4\uff08\u9ed8\u8ba4 1 \u5929\uff0c\u53ef\u901a\u8fc7 fe.conf \u4e2d",(0,n.yg)("inlineCode",{parentName:"p"},"catalog_trash_expire_second"),"\u53c2\u6570\u914d\u7f6e\uff09\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7 RECOVER \u547d\u4ee4\u5bf9\u8bef\u5220\u9664\u7684\u6570\u636e\u8fdb\u884c\u6062\u590d\u3002"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u6ce8\u610f\uff0c\u5982\u679c\u662f\u4f7f\u7528",(0,n.yg)("inlineCode",{parentName:"strong"},"drop force"),"\u8fdb\u884c\u5220\u9664\u7684\uff0c\u5219\u662f\u76f4\u63a5\u5220\u9664\uff0c\u65e0\u6cd5\u518d\u6062\u590d\u3002")),(0,n.yg)("h3",{id:"\u67e5\u770b\u53ef\u6062\u590d\u6570\u636e"},"\u67e5\u770b\u53ef\u6062\u590d\u6570\u636e"),(0,n.yg)("p",null,"\u67e5\u770b FE \u4e0a\u54ea\u4e9b\u6570\u636e\u53ef\u6062\u590d"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW CATALOG RECYCLE BIN [ WHERE NAME [ = "name" | LIKE "name_matcher"] ]\n')),(0,n.yg)("p",null,"\u8fd9\u91cc name \u53ef\u4ee5\u662f\u6570\u636e\u5e93/\u8868/\u5206\u533a\u540d\u3002"),(0,n.yg)("p",null,"\u5173\u4e8e\u8be5\u547d\u4ee4\u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,n.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN.md"},"SHOW-CATALOG-RECYCLE-BIN")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,n.yg)("inlineCode",{parentName:"p"},"help SHOW CATALOG RECYCLE BIN ")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,n.yg)("h3",{id:"\u5f00\u59cb\u6570\u636e\u6062\u590d"},"\u5f00\u59cb\u6570\u636e\u6062\u590d"),(0,n.yg)("p",null,"1.\u6062\u590d\u540d\u4e3a example_db \u7684 database"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db;\n")),(0,n.yg)("p",null,"2.\u6062\u590d\u540d\u4e3a example_tbl \u7684 table"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl;\n")),(0,n.yg)("p",null,"3.\u6062\u590d\u8868 example_tbl \u4e2d\u540d\u4e3a p1 \u7684 partition"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 FROM example_tbl;\n")),(0,n.yg)("p",null,"\u6267\u884c",(0,n.yg)("inlineCode",{parentName:"p"},"RECOVER"),"\u547d\u4ee4\u4e4b\u540e\uff0c\u539f\u6765\u7684\u6570\u636e\u5c06\u6062\u590d\u53ef\u89c1\u3002"),(0,n.yg)("p",null,"\u5173\u4e8e RECOVER \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/RECOVER"},"RECOVER")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,n.yg)("inlineCode",{parentName:"p"},"help RECOVER")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,n.yg)("h2",{id:"be-tablet-\u6570\u636e\u6062\u590d"},"BE tablet \u6570\u636e\u6062\u590d"),(0,n.yg)("h3",{id:"\u4ece-be-\u56de\u6536\u7ad9\u4e2d\u6062\u590d\u6570\u636e"},"\u4ece BE \u56de\u6536\u7ad9\u4e2d\u6062\u590d\u6570\u636e"),(0,n.yg)("p",null,"\u7528\u6237\u5728\u4f7f\u7528 Doris \u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u4f1a\u53d1\u751f\u56e0\u4e3a\u4e00\u4e9b\u8bef\u64cd\u4f5c\u6216\u8005\u7ebf\u4e0a bug\uff0c\u5bfc\u81f4\u4e00\u4e9b\u6709\u6548\u7684 tablet \u88ab\u5220\u9664\uff08\u5305\u62ec\u5143\u6570\u636e\u548c\u6570\u636e\uff09\u3002"),(0,n.yg)("p",null,"\u4e3a\u4e86\u9632\u6b62\u5728\u8fd9\u4e9b\u5f02\u5e38\u60c5\u51b5\u51fa\u73b0\u6570\u636e\u4e22\u5931\uff0cDoris \u63d0\u4f9b\u4e86\u56de\u6536\u7ad9\u673a\u5236\uff0c\u6765\u4fdd\u62a4\u7528\u6237\u6570\u636e\u3002"),(0,n.yg)("p",null,"\u7528\u6237\u5220\u9664\u7684 tablet \u6570\u636e\u5728 BE \u7aef\u4e0d\u4f1a\u88ab\u76f4\u63a5\u5220\u9664\uff0c\u4f1a\u88ab\u653e\u5728\u56de\u6536\u7ad9\u4e2d\u5b58\u50a8\u4e00\u6bb5\u65f6\u95f4\uff0c\u5728\u4e00\u6bb5\u65f6\u95f4\u4e4b\u540e\u4f1a\u6709\u5b9a\u65f6\u6e05\u7406\u673a\u5236\u5c06\u8fc7\u671f\u7684\u6570\u636e\u5220\u9664\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u78c1\u76d8\u7a7a\u95f4\u5360\u7528\u4e0d\u8d85\u8fc7 81%\uff08BE \u914d\u7f6e",(0,n.yg)("inlineCode",{parentName:"p"},"config.storage_flood_stage_usage_percent")," ",(0,n.yg)("em",{parentName:"p"}," 0.9 ")," 100%\uff09\u65f6\uff0cBE \u56de\u6536\u7ad9\u4e2d\u7684\u6570\u636e\u6700\u957f\u4fdd\u7559 1 \u5929\uff08\u89c1 BE \u914d\u7f6e",(0,n.yg)("inlineCode",{parentName:"p"},"config.trash_file_expire_time_sec"),"\uff09\u3002"),(0,n.yg)("p",null,"BE \u56de\u6536\u7ad9\u4e2d\u7684\u6570\u636e\u5305\u62ec\uff1atablet \u7684 data \u6587\u4ef6 (.dat)\uff0ctablet \u7684\u7d22\u5f15\u6587\u4ef6 (.idx) \u548c tablet \u7684\u5143\u6570\u636e\u6587\u4ef6 (.hdr)\u3002\u6570\u636e\u5c06\u4f1a\u5b58\u653e\u5728\u5982\u4e0b\u683c\u5f0f\u7684\u8def\u5f84\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"/root_path/trash/time_label/tablet_id/schema_hash/\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"root_path"),"\uff1a\u5bf9\u5e94 BE \u8282\u70b9\u7684\u67d0\u4e2a\u6570\u636e\u6839\u76ee\u5f55\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"trash"),"\uff1a\u56de\u6536\u7ad9\u7684\u76ee\u5f55\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"time_label"),"\uff1a\u65f6\u95f4\u6807\u7b7e\uff0c\u4e3a\u4e86\u56de\u6536\u7ad9\u4e2d\u6570\u636e\u76ee\u5f55\u7684\u552f\u4e00\u6027\uff0c\u540c\u65f6\u8bb0\u5f55\u6570\u636e\u65f6\u95f4\uff0c\u4f7f\u7528\u65f6\u95f4\u6807\u7b7e\u4f5c\u4e3a\u5b50\u76ee\u5f55\u3002")),(0,n.yg)("p",null,"\u5f53\u7528\u6237\u53d1\u73b0\u7ebf\u4e0a\u7684\u6570\u636e\u88ab\u8bef\u5220\u9664\uff0c\u9700\u8981\u4ece\u56de\u6536\u7ad9\u4e2d\u6062\u590d\u88ab\u5220\u9664\u7684 tablet\uff0c\u9700\u8981\u7528\u5230\u8fd9\u4e2a tablet \u6570\u636e\u6062\u590d\u529f\u80fd\u3002"),(0,n.yg)("p",null,"BE \u63d0\u4f9b http \u63a5\u53e3\u548c ",(0,n.yg)("inlineCode",{parentName:"p"},"restore_tablet_tool.sh")," \u811a\u672c\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\uff0c\u652f\u6301\u5355 tablet \u64cd\u4f5c\uff08single mode\uff09\u548c\u6279\u91cf\u64cd\u4f5c\u6a21\u5f0f\uff08batch mode\uff09\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5728 single mode \u4e0b\uff0c\u652f\u6301\u5355\u4e2a tablet \u7684\u6570\u636e\u6062\u590d\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5728 batch mode \u4e0b\uff0c\u652f\u6301\u6279\u91cf tablet \u7684\u6570\u636e\u6062\u590d\u3002")),(0,n.yg)("p",null,"\u53e6\u5916\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4 ",(0,n.yg)("inlineCode",{parentName:"p"},"show trash"),"\u67e5\u770b BE \u4e2d\u7684 trash \u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4",(0,n.yg)("inlineCode",{parentName:"p"},"admin clean trash"),"\u6765\u6e05\u695a BE \u7684 trash \u6570\u636e\u3002"),(0,n.yg)("h4",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,n.yg)("h5",{id:"single-mode"},"single mode"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"http \u8bf7\u6c42\u65b9\u5f0f"),(0,n.yg)("p",{parentName:"li"},"BE \u4e2d\u63d0\u4f9b\u5355\u4e2a tablet \u6570\u636e\u6062\u590d\u7684 http \u63a5\u53e3\uff0c\u63a5\u53e3\u5982\u4e0b\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'curl -X POST "http://be_host:be_webserver_port/api/restore_tablet?tablet_id=11111\\&schema_hash=12345"\n')),(0,n.yg)("p",{parentName:"li"},"\u6210\u529f\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'{"status": "Success", "msg": "OK"}\n')),(0,n.yg)("p",{parentName:"li"},"\u5931\u8d25\u7684\u8bdd\uff0c\u4f1a\u8fd4\u56de\u76f8\u5e94\u7684\u5931\u8d25\u539f\u56e0\uff0c\u4e00\u79cd\u53ef\u80fd\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'{"status": "Failed", "msg": "create link path failed"}\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u811a\u672c\u65b9\u5f0f"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"restore_tablet_tool.sh")," \u53ef\u7528\u6765\u5b9e\u73b0\u5355 tablet \u6570\u636e\u6062\u590d\u7684\u529f\u80fd\u3002"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'sh tools/restore_tablet_tool.sh -b "http://127.0.0.1:8040" -t 12345 -s 11111\nsh tools/restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --tablet_id 12345 --schema_hash 11111\n')))),(0,n.yg)("h5",{id:"batch-mode"},"batch mode"),(0,n.yg)("p",null,"\u6279\u91cf\u6062\u590d\u6a21\u5f0f\u7528\u4e8e\u5b9e\u73b0\u6062\u590d\u591a\u4e2a tablet \u6570\u636e\u7684\u529f\u80fd\u3002"),(0,n.yg)("p",null,"\u4f7f\u7528\u7684\u65f6\u5019\u9700\u8981\u9884\u5148\u5c06\u6062\u590d\u7684 tablet id \u548c schema hash \u6309\u7167\u9017\u53f7\u5206\u9694\u7684\u683c\u5f0f\u653e\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u4e00\u4e2a tablet \u4e00\u884c\u3002"),(0,n.yg)("p",null,"\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"12345,11111\n12346,11111\n12347,11111\n")),(0,n.yg)("p",null,"\u7136\u540e\u5982\u4e0b\u7684\u547d\u4ee4\u8fdb\u884c\u6062\u590d (\u5047\u8bbe\u6587\u4ef6\u540d\u4e3a\uff1a",(0,n.yg)("inlineCode",{parentName:"p"},"tablets.txt"),")\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'sh restore_tablet_tool.sh -b "http://127.0.0.1:8040" -f tablets.txt\nsh restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --file tablets.txt\n')),(0,n.yg)("h3",{id:"\u4fee\u590d\u7f3a\u5931\u6216\u635f\u574f\u7684-tablet"},"\u4fee\u590d\u7f3a\u5931\u6216\u635f\u574f\u7684 Tablet"),(0,n.yg)("p",null,"\u5728\u67d0\u4e9b\u6781\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u5982\u4ee3\u7801 BUG\u3001\u6216\u4eba\u4e3a\u8bef\u64cd\u4f5c\u7b49\uff0c\u53ef\u80fd\u5bfc\u81f4\u90e8\u5206\u5206\u7247\u7684\u5168\u90e8\u526f\u672c\u90fd\u4e22\u5931\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u5df2\u7ecf\u5b9e\u8d28\u6027\u7684\u4e22\u5931\u3002\u4f46\u662f\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u4e1a\u52a1\u4f9d\u7136\u5e0c\u671b\u80fd\u591f\u5728\u5373\u4f7f\u6709\u6570\u636e\u4e22\u5931\u7684\u60c5\u51b5\u4e0b\uff0c\u4fdd\u8bc1\u67e5\u8be2\u6b63\u5e38\u4e0d\u62a5\u9519\uff0c\u964d\u4f4e\u7528\u6237\u5c42\u7684\u611f\u77e5\u7a0b\u5ea6\u3002\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u7a7a\u767d Tablet \u586b\u5145\u4e22\u5931\u526f\u672c\u7684\u529f\u80fd\uff0c\u6765\u4fdd\u8bc1\u67e5\u8be2\u80fd\u591f\u6b63\u5e38\u6267\u884c\u3002"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u6ce8\uff1a\u8be5\u64cd\u4f5c\u4ec5\u7528\u4e8e\u89c4\u907f\u67e5\u8be2\u56e0\u65e0\u6cd5\u627e\u5230\u53ef\u67e5\u8be2\u526f\u672c\u5bfc\u81f4\u62a5\u9519\u7684\u95ee\u9898\uff0c\u65e0\u6cd5\u6062\u590d\u5df2\u7ecf\u5b9e\u8d28\u6027\u4e22\u5931\u7684\u6570\u636e")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u67e5\u770b Master FE \u65e5\u5fd7 ",(0,n.yg)("inlineCode",{parentName:"p"},"fe.log")),(0,n.yg)("p",{parentName:"li"},"\u5982\u679c\u51fa\u73b0\u6570\u636e\u4e22\u5931\u7684\u60c5\u51b5\uff0c\u5219\u65e5\u5fd7\u4e2d\u4f1a\u6709\u7c7b\u4f3c\u5982\u4e0b\u65e5\u5fd7\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"backend [10001] invalid situation. tablet[20000] has few replica[1], replica num setting is [3]\n")),(0,n.yg)("p",{parentName:"li"},"\u8fd9\u4e2a\u65e5\u5fd7\u8868\u793a\uff0cTablet 20000 \u7684\u6240\u6709\u526f\u672c\u5df2\u635f\u574f\u6216\u4e22\u5931\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u4f7f\u7528\u7a7a\u767d\u526f\u672c\u586b\u8865\u7f3a\u5931\u526f\u672c"),(0,n.yg)("p",{parentName:"li"},"\u5f53\u786e\u8ba4\u6570\u636e\u5df2\u7ecf\u65e0\u6cd5\u6062\u590d\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u751f\u6210\u7a7a\u767d\u526f\u672c\u3002"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "true");\n')),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u6ce8\uff1a\u53ef\u4ee5\u5148\u901a\u8fc7 ",(0,n.yg)("inlineCode",{parentName:"li"},"SHOW FRONTEND CONFIG;")," \u547d\u4ee4\u67e5\u770b\u5f53\u524d\u7248\u672c\u662f\u5426\u652f\u6301\u8be5\u53c2\u6570\u3002"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u5b8c\u6210\u51e0\u5206\u949f\u540e\uff0c\u5e94\u8be5\u4f1a\u5728 Master FE \u65e5\u5fd7 ",(0,n.yg)("inlineCode",{parentName:"p"},"fe.log")," \u4e2d\u770b\u5230\u5982\u4e0b\u65e5\u5fd7\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"tablet 20000 has only one replica 20001 on backend 10001 and it is lost. create an empty replica to recover it.\n")),(0,n.yg)("p",{parentName:"li"},"\u8be5\u65e5\u5fd7\u8868\u793a\u7cfb\u7edf\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u7a7a\u767d Tablet \u7528\u4e8e\u586b\u8865\u7f3a\u5931\u526f\u672c\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u901a\u8fc7\u67e5\u8be2\u6765\u5224\u65ad\u662f\u5426\u5df2\u7ecf\u4fee\u590d\u6210\u529f\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5168\u90e8\u4fee\u590d\u6210\u529f\u540e\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5173\u95ed ",(0,n.yg)("inlineCode",{parentName:"p"},"recover_with_empty_tablet")," \u53c2\u6570\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "false");\n')))))}d.isMDXComponent=!0}}]);