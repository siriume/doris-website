"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3937],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>m});var t=a(296540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=t.createContext({}),p=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(a),g=o,m=s["".concat(d,".").concat(g)]||s[g]||c[g]||l;return a?t.createElement(m,r(r({ref:n},u),{},{components:a})):t.createElement(m,r({ref:n},u))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=g;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[s]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},386420:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=a(58168),o=(a(296540),a(15680));const l={title:"\u90e8\u7f72\u524d\u51c6\u5907",language:"zh-CN"},r=void 0,i={unversionedId:"compute-storage-decoupled/before-deployment",id:"compute-storage-decoupled/before-deployment",title:"\u90e8\u7f72\u524d\u51c6\u5907",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/compute-storage-decoupled/before-deployment.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/before-deployment",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/before-deployment",draft:!1,tags:[],version:"current",frontMatter:{title:"\u90e8\u7f72\u524d\u51c6\u5907",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/overview"},next:{title:"\u7f16\u8bd1\u90e8\u7f72",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/compilation-and-deployment"}},d={},p=[{value:"\u90e8\u7f72\u6b65\u9aa4",id:"\u90e8\u7f72\u6b65\u9aa4",level:2},{value:"\u90e8\u7f72\u89c4\u5212",id:"\u90e8\u7f72\u89c4\u5212",level:2},{value:"\u5b89\u88c5 FoundationDB",id:"\u5b89\u88c5-foundationdb",level:2},{value:"\u673a\u5668\u8981\u6c42",id:"\u673a\u5668\u8981\u6c42",level:3},{value:"\u4e3b\u673a\u914d\u7f6e",id:"\u4e3b\u673a\u914d\u7f6e",level:3},{value:"\u66f4\u6539 FoundationDB \u914d\u7f6e",id:"\u66f4\u6539-foundationdb-\u914d\u7f6e",level:3},{value:"\u914d\u7f6e\u8bbf\u95ee\u6743\u9650",id:"\u914d\u7f6e\u8bbf\u95ee\u6743\u9650",level:3},{value:"\u914d\u7f6e\u65b0\u6570\u636e\u5e93",id:"\u914d\u7f6e\u65b0\u6570\u636e\u5e93",level:3},{value:"\u6784\u5efa FoundationDB \u96c6\u7fa4",id:"\u6784\u5efa-foundationdb-\u96c6\u7fa4",level:3},{value:"\u5b89\u88c5 OpenJDK 17",id:"\u5b89\u88c5-openjdk-17",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],u={toc:p},s="wrapper";function c(e){let{components:n,...l}=e;return(0,o.yg)(s,(0,t.A)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Doris \u5b58\u7b97\u5206\u79bb\u67b6\u6784\u90e8\u7f72\u65b9\u5f0f\u793a\u610f\u56fe\u5982\u4e0b\uff0c\u5171\u9700\u8981 3 \u4e2a\u6a21\u5757\u53c2\u4e0e\u5de5\u4f5c\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"FE"),"\uff1a\u8d1f\u8d23\u63a5\u6536\u7528\u6237\u8bf7\u6c42\uff0c\u8d1f\u8d23\u5b58\u50a8\u5e93\u8868\u7684\u5143\u6570\u636e\uff0c\u76ee\u524d\u662f\u6709\u72b6\u6001\u7684\uff0c\u672a\u6765\u4f1a\u548c BE \u7c7b\u4f3c\uff0c\u6f14\u5316\u4e3a\u65e0\u72b6\u6001\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"BE"),"\uff1a\u65e0\u72b6\u6001\u5316\u7684 Doris BE \u8282\u70b9\uff0c\u8d1f\u8d23\u5177\u4f53\u7684\u8ba1\u7b97\u4efb\u52a1\u3002BE \u4e0a\u4f1a\u7f13\u5b58\u4e00\u90e8\u5206 Tablet \u5143\u6570\u636e\u548c\u6570\u636e\u4ee5\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Meta Service"),"\uff1a\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u65b0\u589e\u6a21\u5757\uff0c\u7a0b\u5e8f\u540d\u4e3a ",(0,o.yg)("inlineCode",{parentName:"li"},"doris_cloud"),"\uff0c\u53ef\u901a\u8fc7\u542f\u52a8\u4e0d\u540c\u53c2\u6570\u6765\u6307\u5b9a\u4e3a\u4ee5\u4e0b\u4e24\u79cd\u89d2\u8272\u4e4b\u4e00",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Meta Service"),"\uff1a\u5143\u6570\u636e\u7ba1\u7406\uff0c\u63d0\u4f9b\u5143\u6570\u636e\u64cd\u4f5c\u7684\u670d\u52a1\uff0c\u4f8b\u5982\u521b\u5efa Tablet\uff0c\u65b0\u589e Rowset\uff0cTablet \u67e5\u8be2\u4ee5\u53ca Rowset \u5143\u6570\u636e\u67e5\u8be2\u7b49\u529f\u80fd\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Recycler"),"\uff1a\u6570\u636e\u56de\u6536\u3002\u901a\u8fc7\u5b9a\u671f\u5bf9\u8bb0\u5f55\u5df2\u6807\u8bb0\u5220\u9664\u7684\u6570\u636e\u7684\u5143\u6570\u636e\u8fdb\u884c\u626b\u63cf\uff0c\u5b9e\u73b0\u5bf9\u6570\u636e\u7684\u5b9a\u671f\u5f02\u6b65\u6b63\u5411\u56de\u6536\uff08\u6587\u4ef6\u5b9e\u9645\u5b58\u50a8\u5728 S3 \u6216 HDFS \u4e0a\uff09\uff0c\u800c\u65e0\u987b\u5217\u4e3e\u6570\u636e\u5bf9\u8c61\u8fdb\u884c\u5143\u6570\u636e\u5bf9\u6bd4\u3002")))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"apache-doris-in-compute-storage-decoupled-mode",src:a(561814).A,width:"1280",height:"692"})),(0,o.yg)("p",null,"Meta Service \u662f\u4e00\u79cd\u65e0\u72b6\u6001\u5316\u7684\u670d\u52a1\uff0c\u4f9d\u8d56\u4e86\u4e00\u4e2a\u9ad8\u6027\u80fd\u5206\u5e03\u5f0f\u4e8b\u52a1 KV\uff08\u5373 ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apple/foundationdb"},"FoundationDB"),"\uff09\u6765\u5b58\u50a8\u5143\u6570\u636e\uff0c\u5927\u5e45\u7b80\u5316\u4e86\u5143\u6570\u636e\u7ba1\u7406\u6d41\u7a0b\uff0c\u540c\u65f6\u63d0\u4f9b\u5f3a\u5927\u7684\u6a2a\u5411\u7684\u6269\u5c55\u80fd\u529b\u3002"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"deployment-of-compute-storage-decoupled-mode",src:a(780451).A,width:"2552",height:"1694"})),(0,o.yg)("p",null,"Doris \u5b58\u7b97\u5206\u79bb\u67b6\u6784\u4f9d\u8d56\u4e8e\u4e24\u4e2a\u5916\u90e8\u5f00\u6e90\u9879\u76ee\uff0c\u4e3a\u786e\u4fdd\u90e8\u7f72\u987a\u5229\uff0c\u8bf7\u5728\u5f00\u59cb\u524d\u9884\u5148\u5b89\u88c5\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"FoundationDB (FDB)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"OpenJDK17"),": \u9700\u8981\u5b89\u88c5\u5230\u6240\u6709\u90e8\u7f72 Meta Service \u7684\u8282\u70b9\u4e0a\u3002")),(0,o.yg)("h2",{id:"\u90e8\u7f72\u6b65\u9aa4"},"\u90e8\u7f72\u6b65\u9aa4"),(0,o.yg)("p",null,"Doris \u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u90e8\u7f72\u6309\u7167\u6a21\u5757\u4e0e\u5206\u5de5\uff02\u81ea\u4e0b\u800c\u4e0a\uff02\u90e8\u7f72\uff1a"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u673a\u5668\u89c4\u5212\uff0c\u8fd9\u4e00\u6b65\u9aa4\u5728",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/compute-storage-decoupled/before-deployment"},"\u672c\u6587\u6863"),"\u4ecb\u7ecd\u3002"),(0,o.yg)("li",{parentName:"ol"},"\u90e8\u7f72 FoundationDB \u4ee5\u53ca\u8fd0\u884c\u73af\u5883\u7b49\u57fa\u7840\u7684\u4f9d\u8d56\uff0c\u8fd9\u4e00\u6b65\u9aa4\u4e0d\u9700\u8981 Doris \u7684\u7f16\u8bd1\u4ea7\u51fa\u5373\u53ef\u5b8c\u6210\uff0c\u5728",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/compute-storage-decoupled/before-deployment"},"\u672c\u6587\u6863"),"\u4ecb\u7ecd\u3002"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/compute-storage-decoupled/compilation-and-deployment"},"\u90e8\u7f72 Meta Service\u4ee5\u53ca Recycler")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/compute-storage-decoupled/creating-cluster"},"\u90e8\u7f72 FE \u4ee5\u53ca BE"))),(0,o.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u4e00\u5957 FoundationDB + Meta Service + Recycler \u57fa\u7840\u73af\u5883\u53ef\u4ee5\u652f\u6491\u591a\u4e2a\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u7684 Doris \u5b9e\u4f8b\uff08\u5373\u591a\u5957 FE + BE \uff09\u3002")),(0,o.yg)("h2",{id:"\u90e8\u7f72\u89c4\u5212"},"\u90e8\u7f72\u89c4\u5212"),(0,o.yg)("p",null,"Doris \u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u63a8\u8350\u7684\u90e8\u7f72\u65b9\u5f0f\u662f\u6309\u7167\u6a21\u5757\u5212\u5206\uff0c\u5c3d\u91cf\u907f\u514d\u6a21\u5757\u95f4\u76f8\u4e92\u5f71\u54cd\u3002\n\u63a8\u8350\u7684\u90e8\u7f72\u65b9\u5f0f\u53ca\u89c4\u5212\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Meta Service\uff0cRecycler \u4ee5\u53ca FoundationDB \u4f7f\u7528\u540c\u4e00\u6279\u673a\u5668\u3002\u8981\u6c42\u5927\u4e8e\u7b49\u4e8e 3 \u53f0\u3002",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"\u8981\u4f7f\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u6b63\u5e38\u8fd0\u884c\uff0c\u9700\u8981\u90e8\u7f72\u81f3\u5c11\u4e00\u4e2a Meta Service \u8fdb\u7a0b\u4ee5\u53ca\u81f3\u5c11\u4e00\u4e2a Recycler \u8fdb\u7a0b\u3002\u8fd9\u4e24\u79cd\u8fdb\u7a0b\u5747\u4e3a\u65e0\u72b6\u6001\uff0c\u53ef\u4ee5\u6309\u9700\u589e\u52a0\u90e8\u7f72\u6570\u91cf\uff0c\u4e00\u822c\u6bcf\u79cd\u8fdb\u7a0b\u90e8\u7f72 3 \u4e2a\u5373\u53ef\u6ee1\u8db3\u9700\u6c42\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u4e3a\u4e86\u4fdd\u8bc1 FoundationDB \u7684\u6027\u80fd\u3001\u53ef\u9760\u6027\u4ee5\u53ca\u6269\u5c55\u6027\uff0c\u9700\u8981\u4f7f\u7528\u591a\u526f\u672c\u65b9\u5f0f\u90e8\u7f72 FoundationDB\u3002"))),(0,o.yg)("li",{parentName:"ul"},"FE \u5355\u72ec\u90e8\u7f72\uff0c\u81f3\u5c11 1 \u53f0\uff0c\u53ef\u6839\u636e\u5b9e\u9645\u67e5\u8be2\u9700\u6c42\u589e\u52a0\u673a\u5668\u6570\u91cf"),(0,o.yg)("li",{parentName:"ul"},"BE \u5355\u72ec\u90e8\u7f72\uff0c\u81f3\u5c11 1 \u53f0\uff0c\u53ef\u6839\u636e\u5b9e\u9645\u67e5\u8be2\u9700\u6c42\u589e\u52a0\u673a\u5668\u6570\u91cf")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"               Host1                  Host2\n       .------------------.   .------------------.\n       |                  |   |                  |\n       |        FE        |   |        BE        |\n       |                  |   |                  |\n       '------------------'   '------------------'\n\n        Host3                 Host4                 Host5\n.------------------.  .------------------.  .------------------.\n|     Recycler     |  |     Recycler     |  |     Recycler     |\n|   Meta Service   |  |   Meta Service   |  |   Meta Service   |\n|   FoundationDB   |  |   FoundationDB   |  |   FoundationDB   |\n'------------------'  '------------------'  '------------------'\n\n")),(0,o.yg)("p",null,"\u5982\u679c\u673a\u5668\u6570\u91cf\u6709\u9650\uff0c\u53ef\u4ee5\u4f7f\u7528\u5168\u6df7\u90e8\u65b9\u5f0f\uff0c\u6240\u6709\u6a21\u5757\u90e8\u7f72\u5728\u540c\u4e00\u6279\u673a\u5668\u3002\u8981\u6c42\u673a\u5668\u6570\u91cf\u5927\u4e8e 3 \u53f0\u3002\n\u5982\u4e0b\u662f\u4e00\u79cd\u53ef\u884c\u7684\u89c4\u5212\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"        Host1                  Host2                  Host3\n.------------------.   .------------------.   .------------------.\n|                  |   |                  |   |                  |\n|        FE        |   |                  |   |                  |\n|                  |   |        BE        |   |        BE        |\n|     Recycler     |   |                  |   |                  |\n|   Meta Servcie   |   |                  |   |                  |\n|   FoundationDB   |   |   FoundationDB   |   |   FoundationDB   |\n|                  |   |                  |   |                  |\n'------------------'   '------------------'   '------------------'\n")),(0,o.yg)("h2",{id:"\u5b89\u88c5-foundationdb"},"\u5b89\u88c5 FoundationDB"),(0,o.yg)("h3",{id:"\u673a\u5668\u8981\u6c42"},"\u673a\u5668\u8981\u6c42"),(0,o.yg)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u81f3\u5c11 3 \u53f0\u673a\u5668\u7ec4\u6210\u4e00\u4e2a\u53cc\u526f\u672c\u3001\u5141\u8bb8\u5355\u673a\u6545\u969c\u7684 FoundationDB \u96c6\u7fa4\u3002"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"\u5982\u679c\u4ec5\u51fa\u4e8e\u5f00\u53d1/\u6d4b\u8bd5\u9700\u8981\uff0c\u4f7f\u7528\u4e00\u53f0\u673a\u5668\u5373\u53ef\u3002")),(0,o.yg)("p",null,"\u6bcf\u53f0\u673a\u5668\u90fd\u9700\u5148\u5b89\u88c5 FoundationDB \u670d\u52a1\u3002\u53ef\u901a\u8fc7",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases"},"\u4ee5\u4e0b\u5730\u5740"),"\u9009\u62e9\u4e00\u4e2a\u7248\u672c\u4e0b\u8f7d FoundationDB \u5b89\u88c5\u5305\uff0c\u76ee\u524d\u901a\u5e38\u63a8\u8350\u4f7f\u7528 ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases/tag/7.1.38"},"7.1.38")," \u7248\u672c\u3002"),(0,o.yg)("p",null,"\u5bf9\u4e8e CentOS (Red Hat) \u548c Ubuntu \u7528\u6237\uff0c\u4ee5\u4e0b\u662f",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases/tag/7.1.38"},"\u4e0b\u8f7d\u94fe\u63a5"),"\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apple/foundationdb/releases/download/7.1.38/foundationdb-clients-7.1.38-1.el7.x86_64.rpm"},"clients-x86_64.rpm")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apple/foundationdb/releases/download/7.1.38/foundationdb-server-7.1.38-1.el7.x86_64.rpm"},"server-x86_64.rpm")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apple/foundationdb/releases/download/7.1.38/foundationdb-clients_7.1.38-1_amd64.deb"},"clients-amd64.deb")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/apple/foundationdb/releases/download/7.1.38/foundationdb-server_7.1.38-1_amd64.deb"},"server-amd64.deb"))),(0,o.yg)("p",null,"\u5982\u679c\u9700\u8981\u66f4\u9ad8\u901f\u7684\u4e0b\u8f7d\uff0c\u4e5f\u53ef\u4f7f\u7528\u5982\u4e0b\u955c\u50cf\u94fe\u63a5\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/toolkit/fdb/foundationdb-clients-7.1.38-1.el7.x86_64.rpm"},"clients-x86_64.rpm")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/toolkit/fdb/foundationdb-server-7.1.38-1.el7.x86_64.rpm"},"server-x86_64.rpm")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/toolkit/fdb/foundationdb-clients_7.1.38-1_amd64.deb"},"clients-amd64.deb")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/toolkit/fdb/foundationdb-server_7.1.38-1_amd64.deb"},"server-amd64.deb"))),(0,o.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5 FoundationDB \u7a0b\u5e8f\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"// Ubuntu \u7cfb\u7edf user@host\n$ sudo dpkg -i foundationdb-clients_7.1.23-1_amd64.deb \\ foundationdb-server_7.1.23-1_amd64.deb\n\n// CentOS \u7cfb\u7edf \nuser@host$ sudo rpm -Uvh foundationdb-clients-7.1.23-1.el7.x86_64.rpm \\ foundationdb-server-7.1.23-1.el7.x86_64.rpm\n")),(0,o.yg)("p",null,"\u5b89\u88c5\u5b8c\u6bd5\u540e\uff0c\u5728\u547d\u4ee4\u884c\u8f93\u5165 ",(0,o.yg)("inlineCode",{parentName:"p"},"fdbcli")," \u67e5\u770b\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002\u82e5\u8fd4\u56de\u7ed3\u679c\u663e\u793a\u5982\u4e0b ",(0,o.yg)("inlineCode",{parentName:"p"},"available")," \u5b57\u6837\uff0c\u5219\u8868\u793a\u5b89\u88c5\u6210\u529f\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plain"},"user@host$ fdbcli\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nThe database is available.\n\nWelcome to the fdbcli. For help, type `help'.\n")),(0,o.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"\u5b89\u88c5\u6210\u529f\u540e\uff1a"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5c06\u542f\u52a8\u4e00\u4e2a FoundationDB \u670d\u52a1\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u96c6\u7fa4\u4fe1\u606f\u6587\u4ef6 ",(0,o.yg)("inlineCode",{parentName:"li"},"fdb.cluster"),"\u5c06\u5b58\u653e\u5728",(0,o.yg)("inlineCode",{parentName:"li"},"/etc/foundationdb/fdb.cluster"),"\uff0c\u9ed8\u8ba4\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6 ",(0,o.yg)("inlineCode",{parentName:"li"},"foundationdb.conf")," \u5c06\u5b58\u653e\u5728",(0,o.yg)("inlineCode",{parentName:"li"},"/etc/foundationdb/foundationdb.conf"),"\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5c06\u6570\u636e\u548c\u65e5\u5fd7\u5206\u522b\u4fdd\u5b58\u5728",(0,o.yg)("inlineCode",{parentName:"li"},"/var/lib/foundationdb/data/"),"\u548c",(0,o.yg)("inlineCode",{parentName:"li"},"/var/log/foundationdb"),"\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5c06\u65b0\u5efa\u4e00\u4e2a FoundationDB \u7684 ",(0,o.yg)("inlineCode",{parentName:"li"},"user")," \u548c ",(0,o.yg)("inlineCode",{parentName:"li"},"group"),"\uff0c\u6570\u636e\u548c\u65e5\u5fd7\u7684\u8def\u5f84\u9ed8\u8ba4\u5df2\u5177\u5907 FoundationDB \u7684\u8bbf\u95ee\u6743\u9650\u3002"))),(0,o.yg)("h3",{id:"\u4e3b\u673a\u914d\u7f6e"},"\u4e3b\u673a\u914d\u7f6e"),(0,o.yg)("p",null,"\u4ece\u4e09\u53f0\u673a\u5668\u4e2d\u9009\u62e9\u4e00\u53f0\u4f5c\u4e3a\u4e3b\u673a\u3002\u9996\u5148\u5b8c\u6210\u4e3b\u673a\u7684\u914d\u7f6e\uff0c\u518d\u914d\u7f6e\u5176\u4ed6\u673a\u5668\u3002"),(0,o.yg)("h3",{id:"\u66f4\u6539-foundationdb-\u914d\u7f6e"},"\u66f4\u6539 FoundationDB \u914d\u7f6e"),(0,o.yg)("p",null,"\u6839\u636e\u4e0d\u540c\u673a\u578b\u8c03\u6574 FoundationDB \u914d\u7f6e\uff0c \u5177\u4f53\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,o.yg)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/configuration.html#system-requirements"},"FoundationDB \u7cfb\u7edf\u8981\u6c42"),"\u3002"),(0,o.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u57fa\u4e8e 8 \u6838 CPU\u300132GB \u5185\u5b58\u548c\u4e00\u5757 500GB SSD \u6570\u636e\u76d8\u7684\u673a\u5668\u7684",(0,o.yg)("inlineCode",{parentName:"p"},"foundationdb.conf"),"\u793a\u4f8b\uff08\u8bf7\u786e\u4fdd\u6b63\u786e\u8bbe\u7f6e ",(0,o.yg)("inlineCode",{parentName:"p"},"data")," \u548c ",(0,o.yg)("inlineCode",{parentName:"p"},"log")," \u7684\u5b58\u653e\u8def\u5f84\uff1b\u76ee\u524d\uff0c\u6570\u636e\u76d8\u4e00\u822c\u6302\u8f7d\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"mnt")," \u4e0a\uff09\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"# foundationdb.conf\n##\n## Configuration file for FoundationDB server processes\n## Full documentation is available at\n## https://apple.github.io/foundationdb/configuration.html#the-configuration-file\n\n[fdbmonitor]\nuser = foundationdb\ngroup = foundationdb\n\n[general]\nrestart-delay = 60\n## By default, restart-backoff = restart-delay-reset-interval = restart-delay\n# initial-restart-delay = 0\n# restart-backoff = 60\n# restart-delay-reset-interval = 60\ncluster-file = /etc/foundationdb/fdb.cluster\n# delete-envvars =\n# kill-on-configuration-change = true\n\n## Default parameters for individual fdbserver processes\n[fdbserver]\ncommand = /usr/sbin/fdbserver\npublic-address = auto:$ID\nlisten-address = public\nlogdir = /mnt/foundationdb/log\ndatadir = /mnt/foundationdb/data/$ID\n# logsize = 10MiB\n# maxlogssize = 100MiB\n# machine-id =\n# datacenter-id =\n# class =\n# memory = 8GiB\n# storage-memory = 1GiB\n# cache-memory = 2GiB\n# metrics-cluster =\n# metrics-prefix =\n\n## An individual fdbserver process with id 4500\n## Parameters set here override defaults from the [fdbserver] section\n[fdbserver.4500]\nclass = stateless\n[fdbserver.4501]\nclass = stateless\n\n[fdbserver.4502]\nclass = storage\n\n[fdbserver.4503]\nclass = storage\n\n[fdbserver.4504]\nclass = log\n\n[backup_agent]\ncommand = /usr/lib/foundationdb/backup_agent/backup_agent\nlogdir = /mnt/foundationdb/log\n\n[backup_agent.1]\n")),(0,o.yg)("p",null,"\u9996\u5148\uff0c\u6309\u7167\u5df2\u914d\u7f6e\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"datadir")," \u548c ",(0,o.yg)("inlineCode",{parentName:"p"},"logdir")," \u8def\u5f84\u5728\u4e3b\u673a\u4e0a\u521b\u5efa\u76f8\u5e94\u7684\u76ee\u5f55\uff0c\u5e76\u4f7f\u5176\u5177\u6709 ",(0,o.yg)("inlineCode",{parentName:"p"},"foundationdb")," \u7684\u8bbf\u95ee\u6743\u9650\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"chown -R foundationdb:foundationdb /mnt/foundationdb/data/ /mnt/foundationdb/log\n")),(0,o.yg)("p",null,"\u7136\u540e\u5c06 ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/foundationdb.conf")," \u7684\u5185\u5bb9\u66ff\u6362\u4e3a\u4e0a\u8ff0\u76f8\u5e94\u914d\u7f6e\u3002"),(0,o.yg)("h3",{id:"\u914d\u7f6e\u8bbf\u95ee\u6743\u9650"},"\u914d\u7f6e\u8bbf\u95ee\u6743\u9650"),(0,o.yg)("p",null,"\u5148\u8bbe\u7f6e ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb")," \u76ee\u5f55\u7684\u8bbf\u95ee\u6743\u9650\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"chmod -R 777 /etc/foundationdb\n")),(0,o.yg)("p",null,"\u5728\u4e3b\u673a\u4e2d\u4fee\u6539 ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/fdb.cluster")," \u4e2d\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"ip")," \u5730\u5740\uff0c\u9ed8\u8ba4\u662f\u672c\u673a\u5730\u5740\uff0c\u4fee\u6539\u4e3a\u5185\u7f51\u5730\u5740\uff0c\u5982\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"3OrXp9ei:diDqAjYV@127.0.0.1:4500 -> 3OrXp9ei:diDqAjYV@172.21.16.37:4500\n")),(0,o.yg)("p",null,"\u7136\u540e\u91cd\u542f FoundationDB \u670d\u52a1\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"# for service\nuser@host$ sudo service foundationdb restart\n\n# for systemd\nuser@host$ sudo systemctl restart foundationdb.service\n")),(0,o.yg)("h3",{id:"\u914d\u7f6e\u65b0\u6570\u636e\u5e93"},"\u914d\u7f6e\u65b0\u6570\u636e\u5e93"),(0,o.yg)("p",null,"\u4e3b\u673a\u7531\u4e8e\u66f4\u6539\u4e86 ",(0,o.yg)("inlineCode",{parentName:"p"},"data")," \u548c ",(0,o.yg)("inlineCode",{parentName:"p"},"log")," \u7684\u5b58\u653e\u8def\u5f84\uff0c\u9700\u65b0\u5efa ",(0,o.yg)("inlineCode",{parentName:"p"},"database"),"\u3002\u53ef\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"fdbcli")," \u4e2d\u65b0\u5efa\u4e00\u4e2a \u4ee5",(0,o.yg)("inlineCode",{parentName:"p"},"ssd")," \u4e3a\u5b58\u50a8\u5f15\u64ce\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"database"),"\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"user@host$ fdbcli\nfdb> configure new single ssd\nDatabase created\n")),(0,o.yg)("p",null,"\u6700\u540e\u901a\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"p"},"fdbcli")," \u68c0\u6d4b\u662f\u5426\u542f\u52a8\u6b63\u5e38\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"user@host$ fdbcli\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nThe database is available.\n\nWelcome to the fdbcli. For help, type `help'.\n")),(0,o.yg)("p",null,"\u81f3\u6b64\uff0c\u4e3b\u673a\u7684\u914d\u7f6e\u5b8c\u6210\u3002"),(0,o.yg)("h3",{id:"\u6784\u5efa-foundationdb-\u96c6\u7fa4"},"\u6784\u5efa FoundationDB \u96c6\u7fa4"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"\u5982\u679c\u4ec5\u90e8\u7f72\u4e00\u53f0\u673a\u5668\u8fdb\u884c\u5f00\u53d1/\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002")),(0,o.yg)("p",null,"\u5bf9\u4e8e\u4e3b\u673a\u4ee5\u5916\u7684\u673a\u5668\uff0c\u6bcf\u53f0\u673a\u5668\u5148\u6309\u7167\u4e3b\u673a\u914d\u7f6e\u6b65\u9aa4\uff0c\u521b\u5efa ",(0,o.yg)("inlineCode",{parentName:"p"},"data")," \u548c ",(0,o.yg)("inlineCode",{parentName:"p"},"log")," \u76ee\u5f55\u3002"),(0,o.yg)("p",null,"\u7136\u540e\uff0c\u8bbe\u7f6e ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb")," \u76ee\u5f55\u7684\u8bbf\u95ee\u6743\u9650\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"chmod -R 777 /etc/foundationdb\n")),(0,o.yg)("p",null,"\u5c06\u4e3b\u673a\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/foundationdb.conf "),"\u548c",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/fdb.cluster")," \u66ff\u6362\u4e3a\u672c\u673a\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/foundationdb.conf "),"\u548c",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/fdb.cluster"),"\u3002"),(0,o.yg)("p",null,"\u968f\u540e\u5728\u672c\u673a\u91cd\u542f FoundationDB \u670d\u52a1\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"# for service\nuser@host$ sudo service foundationdb restart\n\n# for systemd\nuser@host$ sudo systemctl restart foundationdb.service\n")),(0,o.yg)("p",null,"\u5f85\u6240\u6709\u673a\u5668\u64cd\u4f5c\u5b8c\u6bd5\u540e\uff0c\u6240\u6709\u673a\u5668\u90fd\u5df2\u8fde\u63a5\u5728\u540c\u4e00\u96c6\u7fa4\u4e0a\uff08\u5373\u540c\u4e00 ",(0,o.yg)("inlineCode",{parentName:"p"},"fdb.cluster"),"\uff09\u3002\u6b64\u65f6\u767b\u5f55\u4e3b\u673a\uff0c\u914d\u7f6e\u53cc\u526f\u672c\u6a21\u5f0f\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"user@host$ fdbcli\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nThe database is available.\n\nWelcome to the fdbcli. For help, type `help'.\nfdb> configure double\nConfiguration changed.\n")),(0,o.yg)("p",null,"\u7136\u540e\u5728\u4e3b\u673a\u914d\u7f6e ",(0,o.yg)("inlineCode",{parentName:"p"},"fdb.cluster")," \u53ef\u88ab\u8bbf\u95ee\u7684\u673a\u5668\u548c\u7aef\u53e3\uff0c\u7528\u4e8e\u5bb9\u707e\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"user@host$ fdbcli\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nThe database is available.\n\nWelcome to the fdbcli. For help, type `help'.\nfdb> coordinators ${\u4e3b\u673aip}:4500 ${\u4ece\u673a1ip}:4500 ${\u4ece\u673a2ip}:4500\uff08\u9700\u8981\u586b\u5199\u6240\u6709\u673a\u5668\uff09\nCoordinators changed\n")),(0,o.yg)("p",null,"\u6700\u540e\uff0c\u901a\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"p"},"fdbcli")," \u4e2d\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"status")," \u68c0\u6d4b\u6a21\u5f0f\u662f\u5426\u914d\u7f6e\u6210\u529f\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"[root@ip-10-100-3-91 recycler]# fdbcli\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nThe database is available.\n\nWelcome to the fdbcli. For help, type `help'.\nfdb> status\n\nUsing cluster file `/etc/foundationdb/fdb.cluster'.\n\nConfiguration:\n  Redundancy mode        - double\n  Storage engine         - ssd-2\n  Coordinators           - 3\n  Usable Regions         - 1\n\nCluster:\n  FoundationDB processes - 15\n  Zones                  - 3\n  Machines               - 3\n  Memory availability    - 6.1 GB per process on machine with least available\n  Fault Tolerance        - 1 machines\n  Server time            - 11/11/22 04:47:30\n\nData:\n  Replication health     - Healthy\n  Moving data            - 0.000 GB\n  Sum of key-value sizes - 0 MB\n  Disk space used        - 944 MB\n\nOperating space:\n  Storage server         - 473.9 GB free on most full server\n  Log server             - 473.9 GB free on most full server\n\nWorkload:\n  Read rate              - 19 Hz\n  Write rate             - 0 Hz\n  Transactions started   - 5 Hz\n  Transactions committed - 0 Hz\n  Conflict rate          - 0 Hz\n\nBackup and DR:\n  Running backups        - 0\n  Running DRs            - 0\n")),(0,o.yg)("h2",{id:"\u5b89\u88c5-openjdk-17"},"\u5b89\u88c5 OpenJDK 17"),(0,o.yg)("p",null,"OpenJDK 17 \u9700\u5b89\u88c5\u5230\u6240\u6709\u7684\u8282\u70b9\u4e0a\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u94fe\u63a5\u83b7\u53d6\u5b89\u88c5\uff1a",(0,o.yg)("a",{parentName:"p",href:"https://download.java.net/java/GA/jdk17.0.1/2a2082e5a09d4267845be086888add4f/12/GPL/openjdk-17.0.1_linux-x64_bin.tar.gz"},"OpenJDK 17")),(0,o.yg)("p",null,"\u7136\u540e\uff0c\u5c06\u4e0b\u8f7d\u597d\u7684 OpenJDK \u5b89\u88c5\u5305\u76f4\u63a5\u89e3\u538b\u5230\u5b89\u88c5\u8def\u5f84\u5373\u53ef\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"tar xf openjdk-17.0.1_linux-x64_bin.tar.gz  -C /opt/\n\n# \u542f\u52a8 meta-service \u6216\u8005 recycler \u4e4b\u524d\nexport JAVA_HOME=/opt/jdk-17.0.1\n")),(0,o.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,o.yg)("p",null,"\u90e8\u7f72 FoundationDB \u7684\u673a\u5668\u540c\u65f6\u4e5f\u53ef\u90e8\u7f72 Meta Service \u548c Recycler\uff0c\u6b64\u4e3a\u63a8\u8350\u90e8\u7f72\u65b9\u5f0f\uff0c\u53ef\u8282\u7701\u673a\u5668\u8d44\u6e90\u3002"))}c.isMDXComponent=!0},561814:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/apache-doris-in-compute-storage-decoupled-mode-8cff379314e6a0320f12cd4ce52a9012.png"},780451:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/deployment-of-compute-storage-decoupled-mode-eedd9142b42a4bd16fc49196f92cded8.png"}}]);