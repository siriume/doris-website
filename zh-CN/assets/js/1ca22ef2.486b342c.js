"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22513],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",S={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),y=a,m=c["".concat(p,".").concat(y)]||c[y]||S[y]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},938878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>S,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const o={title:"S3 Load",language:"zh-CN"},l=void 0,i={unversionedId:"data-operate/import/import-way/s3-load-manual",id:"version-1.2/data-operate/import/import-way/s3-load-manual",title:"S3 Load",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/data-operate/import/import-way/s3-load-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/s3-load-manual",permalink:"/zh-CN/docs/1.2/data-operate/import/import-way/s3-load-manual",draft:!1,tags:[],version:"1.2",frontMatter:{title:"S3 Load",language:"zh-CN"},sidebar:"docs",previous:{title:"Stream load",permalink:"/zh-CN/docs/1.2/data-operate/import/import-way/stream-load-manual"},next:{title:"Insert Into",permalink:"/zh-CN/docs/1.2/data-operate/import/import-way/insert-into-manual"}},p={},s=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5f00\u59cb\u5bfc\u5165",id:"\u5f00\u59cb\u5bfc\u5165",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],u={toc:s},c="wrapper";function S(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"s3-load"},"S3 Load"),(0,a.yg)("p",null,"\u4ece0.14 \u7248\u672c\u5f00\u59cb\uff0cDoris \u652f\u6301\u901a\u8fc7 S3 \u534f\u8bae\u76f4\u63a5\u4ece\u652f\u6301 S3 \u534f\u8bae\u7684\u5728\u7ebf\u5b58\u50a8\u7cfb\u7edf\u5bfc\u5165\u6570\u636e\u3002"),(0,a.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5bfc\u5165 AWS S3 \u4e2d\u5b58\u50a8\u7684\u6570\u636e\u3002\u4e5f\u652f\u6301\u5bfc\u5165\u5176\u4ed6\u652f\u6301 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u5bfc\u5165\uff0c\u5982\u767e\u5ea6\u4e91\u7684 BOS\u3001\u963f\u91cc\u4e91\u7684OSS\u548c\u817e\u8baf\u4e91\u7684 COS \u7b49\u3002"),(0,a.yg)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6e90\u6570\u636e\u5728 \u652f\u6301 S3 \u534f\u8bae\u7684\u5b58\u50a8\u7cfb\u7edf\u4e2d\uff0c\u5982 S3,BOS \u7b49\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5728 \u51e0\u5341\u5230\u767e GB \u7ea7\u522b\u3002")),(0,a.yg)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u51c6\u5907AK \u548c SK \u9996\u5148\u9700\u8981\u627e\u5230\u6216\u8005\u91cd\u65b0\u751f\u6210 AWS ",(0,a.yg)("inlineCode",{parentName:"li"},"Access keys"),"\uff0c\u53ef\u4ee5\u5728 AWS console \u7684 ",(0,a.yg)("inlineCode",{parentName:"li"},"My Security Credentials")," \u627e\u5230\u751f\u6210\u65b9\u5f0f\uff0c \u5982\u4e0b\u56fe\u6240\u793a\uff1a ",(0,a.yg)("a",{parentName:"li",href:"https://doris.apache.org/images/aws_ak_sk.png"},"AK_SK")," \u9009\u62e9 ",(0,a.yg)("inlineCode",{parentName:"li"},"Create New Access Key")," \u6ce8\u610f\u4fdd\u5b58\u751f\u6210 AK\u548cSK."),(0,a.yg)("li",{parentName:"ol"},"\u51c6\u5907 REGION \u548c ENDPOINT REGION \u53ef\u4ee5\u5728\u521b\u5efa\u6876\u7684\u65f6\u5019\u9009\u62e9\u4e5f\u53ef\u4ee5\u5728\u6876\u5217\u8868\u4e2d\u67e5\u770b\u5230\u3002ENDPOINT \u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u9875\u9762\u901a\u8fc7 REGION \u67e5\u5230  ",(0,a.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region"},"AWS \u6587\u6863"),"\u3002")),(0,a.yg)("p",null,"\u5176\u4ed6\u4e91\u5b58\u50a8\u7cfb\u7edf\u53ef\u4ee5\u76f8\u5e94\u7684\u6587\u6863\u627e\u5230\u4e0e S3 \u517c\u5bb9\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"\u5f00\u59cb\u5bfc\u5165"},"\u5f00\u59cb\u5bfc\u5165"),(0,a.yg)("p",null,"\u5bfc\u5165\u65b9\u5f0f\u548c ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/data-operate/import/import-way/broker-load-manual"},"Broker Load"),"  \u57fa\u672c\u76f8\u540c\uff0c\u53ea\u9700\u8981\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"WITH BROKER broker_name ()")," \u8bed\u53e5\u66ff\u6362\u6210\u5982\u4e0b\u90e8\u5206"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},'    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n')),(0,a.yg)("p",null,"\u5b8c\u6574\u793a\u4f8b\u5982\u4e0b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'    LOAD LABEL example_db.exmpale_label_1\n    (\n        DATA INFILE("s3://your_bucket_name/your_file.txt")\n        INTO TABLE load_test\n        COLUMNS TERMINATED BY ","\n    )\n    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n    PROPERTIES\n    (\n        "timeout" = "3600"\n    );\n')),(0,a.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"S3 SDK \u9ed8\u8ba4\u4f7f\u7528 virtual-hosted style \u65b9\u5f0f\u3002\u4f46\u67d0\u4e9b\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u53ef\u80fd\u6ca1\u5f00\u542f\u6216\u6ca1\u652f\u6301 virtual-hosted style \u65b9\u5f0f\u7684\u8bbf\u95ee\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0 ",(0,a.yg)("inlineCode",{parentName:"li"},"use_path_style")," \u53c2\u6570\u6765\u5f3a\u5236\u4f7f\u7528 path style \u65b9\u5f0f\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},'  WITH S3\n  (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION",\n        "use_path_style" = "true"\n  )\n')),(0,a.yg)("version",{since:"1.2"},(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u652f\u6301\u4f7f\u7528\u4e34\u65f6\u79d8\u94a5\uff08TOKEN) \u8bbf\u95ee\u6240\u6709\u652f\u6301 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'  WITH S3\n  (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_TEMP_ACCESS_KEY",\n        "AWS_SECRET_KEY" = "AWS_TEMP_SECRET_KEY",\n        "AWS_TOKEN" = "AWS_TEMP_TOKEN",\n        "AWS_REGION" = "AWS_REGION"\n  )\n'))))}S.isMDXComponent=!0}}]);