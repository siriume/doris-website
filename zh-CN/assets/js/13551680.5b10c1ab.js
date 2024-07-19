"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84316],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>s});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),y=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},g=function(e){var a=y(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=y(t),u=r,s=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return t?n.createElement(s,i(i({ref:a},g),{},{components:t})):n.createElement(s,i({ref:a},g))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var y=2;y<l;y++)i[y]=t[y];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},549498:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>y});var n=t(58168),r=(t(296540),t(15680));const l={title:"\u5bfc\u5165\u6982\u89c8",language:"zh-CN"},i=void 0,o={unversionedId:"data-operate/import/load-manual",id:"data-operate/import/load-manual",title:"\u5bfc\u5165\u6982\u89c8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/import/load-manual.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/load-manual",permalink:"/zh-CN/docs/dev/data-operate/import/load-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5bfc\u5165\u6982\u89c8",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u5e93\u5efa\u8868\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/docs/dev/table-design/best-practice"},next:{title:"Stream Load",permalink:"/zh-CN/docs/dev/data-operate/import/stream-load-manual"}},p={},y=[{value:"\u652f\u6301\u7684\u6570\u636e\u6e90",id:"\u652f\u6301\u7684\u6570\u636e\u6e90",level:2},{value:"\u6309\u573a\u666f\u5212\u5206",id:"\u6309\u573a\u666f\u5212\u5206",level:3},{value:"\u6309\u5bfc\u5165\u65b9\u5f0f\u5212\u5206",id:"\u6309\u5bfc\u5165\u65b9\u5f0f\u5212\u5206",level:3},{value:"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f",id:"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f",level:2},{value:"\u5bfc\u5165\u8bf4\u660e",id:"\u5bfc\u5165\u8bf4\u660e",level:2},{value:"\u5bfc\u5165\u7684\u539f\u5b50\u6027\u4fdd\u8bc1",id:"\u5bfc\u5165\u7684\u539f\u5b50\u6027\u4fdd\u8bc1",level:2},{value:"\u540c\u6b65\u53ca\u5f02\u6b65\u5bfc\u5165",id:"\u540c\u6b65\u53ca\u5f02\u6b65\u5bfc\u5165",level:2},{value:"\u5bfc\u5165 Array \u7c7b\u578b",id:"\u5bfc\u5165-array-\u7c7b\u578b",level:2},{value:"\u4f7f\u7528\u7684\u6267\u884c\u5f15\u64ce",id:"\u4f7f\u7528\u7684\u6267\u884c\u5f15\u64ce",level:2}],g={toc:y},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90"},"\u652f\u6301\u7684\u6570\u636e\u6e90"),(0,r.yg)("p",null,"Doris \u63d0\u4f9b\u591a\u79cd\u6570\u636e\u5bfc\u5165\u65b9\u6848\uff0c\u53ef\u4ee5\u9488\u5bf9\u4e0d\u540c\u7684\u6570\u636e\u6e90\u8fdb\u884c\u9009\u62e9\u4e0d\u540c\u7684\u6570\u636e\u5bfc\u5165\u65b9\u5f0f\u3002"),(0,r.yg)("h3",{id:"\u6309\u573a\u666f\u5212\u5206"},"\u6309\u573a\u666f\u5212\u5206"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5bfc\u5165\u65b9\u5f0f"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u5b58\u50a8\uff08s3\uff09,HDFS"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./broker-load-manual"},"\u4f7f\u7528 Broker \u5bfc\u5165\u6570\u636e"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u672c\u5730\u6587\u4ef6"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./stream-load-manual"},"Stream Load"),", ",(0,r.yg)("a",{parentName:"td",href:"./mysql-load-manual"},"MySQL Load"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./routine-load-manual"},"\u8ba2\u9605 Kafka \u6570\u636e"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mysql\u3001PostgreSQL\uff0cOracle\uff0cSQLServer"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./insert-into-manual"},"\u901a\u8fc7\u5916\u90e8\u8868\u540c\u6b65\u6570\u636e"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u901a\u8fc7 JDBC \u5bfc\u5165"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"../../lakehouse/database/jdbc"},"\u4f7f\u7528 JDBC \u540c\u6b65\u6570\u636e"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165 JSON \u683c\u5f0f\u6570\u636e"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./load-json-format"},"JSON \u683c\u5f0f\u6570\u636e\u5bfc\u5165"))))),(0,r.yg)("h3",{id:"\u6309\u5bfc\u5165\u65b9\u5f0f\u5212\u5206"},"\u6309\u5bfc\u5165\u65b9\u5f0f\u5212\u5206"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u5bfc\u5165\u65b9\u5f0f\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u65b9\u5f0f"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Broker Load"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./broker-load-manual"},"\u901a\u8fc7 Broker \u5bfc\u5165\u5916\u90e8\u5b58\u50a8\u6570\u636e"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Stream Load"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./stream-load-manual"},"\u6d41\u5f0f\u5bfc\u5165\u6570\u636e (\u672c\u5730\u6587\u4ef6\u53ca\u5185\u5b58\u6570\u636e)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Routine Load"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./routine-load-manual"},"\u5bfc\u5165 Kafka \u6570\u636e"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Insert Into"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./insert-into-manual"},"\u5916\u90e8\u8868\u901a\u8fc7 INSERT \u65b9\u5f0f\u5bfc\u5165\u6570\u636e"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"S3 Load"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./broker-load-manual#s3-load"},"S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u6570\u636e\u5bfc\u5165"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MySQL Load"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"./mysql-load-manual"},"MySQL \u5ba2\u6237\u7aef\u5bfc\u5165\u672c\u5730\u6570\u636e"))))),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f"},"\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f"),(0,r.yg)("p",null,"\u4e0d\u540c\u7684\u5bfc\u5165\u65b9\u5f0f\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\u7565\u6709\u4e0d\u540c\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u5bfc\u5165\u65b9\u5f0f"),(0,r.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u683c\u5f0f"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Broker Load"),(0,r.yg)("td",{parentName:"tr",align:null},"parquet\u3001orc\u3001csv\u3001gzip")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Stream Load"),(0,r.yg)("td",{parentName:"tr",align:null},"csv\u3001json\u3001parquet\u3001orc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Routine Load"),(0,r.yg)("td",{parentName:"tr",align:null},"csv\u3001json")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MySQL Load"),(0,r.yg)("td",{parentName:"tr",align:null},"csv")))),(0,r.yg)("h2",{id:"\u5bfc\u5165\u8bf4\u660e"},"\u5bfc\u5165\u8bf4\u660e"),(0,r.yg)("p",null,"Apache Doris \u7684\u6570\u636e\u5bfc\u5165\u5b9e\u73b0\u6709\u4ee5\u4e0b\u5171\u6027\u7279\u5f81\uff0c\u8fd9\u91cc\u5206\u522b\u4ecb\u7ecd\uff0c\u4ee5\u5e2e\u52a9\u5927\u5bb6\u66f4\u597d\u7684\u4f7f\u7528\u6570\u636e\u5bfc\u5165\u529f\u80fd"),(0,r.yg)("h2",{id:"\u5bfc\u5165\u7684\u539f\u5b50\u6027\u4fdd\u8bc1"},"\u5bfc\u5165\u7684\u539f\u5b50\u6027\u4fdd\u8bc1"),(0,r.yg)("p",null,"Doris \u7684\u6bcf\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u4e0d\u8bba\u662f\u4f7f\u7528 Broker Load \u8fdb\u884c\u6279\u91cf\u5bfc\u5165\uff0c\u8fd8\u662f\u4f7f\u7528 INSERT \u8bed\u53e5\u8fdb\u884c\u5355\u6761\u5bfc\u5165\uff0c\u90fd\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u4e8b\u52a1\u64cd\u4f5c\u3002\u5bfc\u5165\u4e8b\u52a1\u53ef\u4ee5\u4fdd\u8bc1\u4e00\u6279\u6b21\u5185\u7684\u6570\u636e\u539f\u5b50\u751f\u6548\uff0c\u4e0d\u4f1a\u51fa\u73b0\u90e8\u5206\u6570\u636e\u5199\u5165\u7684\u60c5\u51b5\u3002"),(0,r.yg)("p",null,"\u540c\u65f6\uff0c\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u90fd\u4f1a\u6709\u4e00\u4e2a Label\u3002\u8fd9\u4e2a Label \u662f\u5728\u4e00\u4e2a\u6570\u636e\u5e93\uff08Database\uff09\u4e0b\u552f\u4e00\u7684\uff0c\u7528\u4e8e\u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u3002Label \u53ef\u4ee5\u7531\u7528\u6237\u6307\u5b9a\uff0c\u90e8\u5206\u5bfc\u5165\u529f\u80fd\u4e5f\u4f1a\u7531\u7cfb\u7edf\u81ea\u52a8\u751f\u6210\u3002"),(0,r.yg)("p",null,"Label \u662f\u7528\u4e8e\u4fdd\u8bc1\u5bf9\u5e94\u7684\u5bfc\u5165\u4f5c\u4e1a\uff0c\u4ec5\u80fd\u6210\u529f\u5bfc\u5165\u4e00\u6b21\u3002\u4e00\u4e2a\u88ab\u6210\u529f\u5bfc\u5165\u7684 Label\uff0c\u518d\u6b21\u4f7f\u7528\u65f6\uff0c\u4f1a\u88ab\u62d2\u7edd\u5e76\u62a5\u9519 ",(0,r.yg)("inlineCode",{parentName:"p"},"Label already used"),"\u3002\u901a\u8fc7\u8fd9\u4e2a\u673a\u5236\uff0c\u53ef\u4ee5\u5728 Doris \u4fa7\u505a\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"At-Most-Once")," \u8bed\u4e49\u3002\u5982\u679c\u7ed3\u5408\u4e0a\u6e38\u7cfb\u7edf\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"At-Least-Once")," \u8bed\u4e49\uff0c\u5219\u53ef\u4ee5\u5b9e\u73b0\u5bfc\u5165\u6570\u636e\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"Exactly-Once")," \u8bed\u4e49\u3002"),(0,r.yg)("p",null,"\u5173\u4e8e\u539f\u5b50\u6027\u4fdd\u8bc1\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u53ef\u4ee5\u53c2\u9605 \u5bfc\u5165\u4e8b\u52a1\u548c\u539f\u5b50\u6027\u3002"),(0,r.yg)("h2",{id:"\u540c\u6b65\u53ca\u5f02\u6b65\u5bfc\u5165"},"\u540c\u6b65\u53ca\u5f02\u6b65\u5bfc\u5165"),(0,r.yg)("p",null,"\u5bfc\u5165\u65b9\u5f0f\u5206\u4e3a\u540c\u6b65\u548c\u5f02\u6b65\u3002\u5bf9\u4e8e\u540c\u6b65\u5bfc\u5165\u65b9\u5f0f\uff0c\u8fd4\u56de\u7ed3\u679c\u5373\u8868\u793a\u5bfc\u5165\u6210\u529f\u8fd8\u662f\u5931\u8d25\u3002\u800c\u5bf9\u4e8e\u5f02\u6b65\u5bfc\u5165\u65b9\u5f0f\uff0c\u8fd4\u56de\u6210\u529f\u4ec5\u4ee3\u8868\u4f5c\u4e1a\u63d0\u4ea4\u6210\u529f\uff0c\u4e0d\u4ee3\u8868\u6570\u636e\u5bfc\u5165\u6210\u529f\uff0c\u9700\u8981\u4f7f\u7528\u5bf9\u5e94\u7684\u547d\u4ee4\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u7684\u8fd0\u884c\u72b6\u6001\u3002"),(0,r.yg)("h2",{id:"\u5bfc\u5165-array-\u7c7b\u578b"},"\u5bfc\u5165 Array \u7c7b\u578b"),(0,r.yg)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u5bfc\u5165\uff0c\u9700\u8981\u5148\u5c06\u5217 b14 \u548c\u5217 a13 \u5148 cast \u6210",(0,r.yg)("inlineCode",{parentName:"p"},"array<string>"),"\u7c7b\u578b\uff0c\u518d\u8fd0\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"array_union"),"\u51fd\u6570\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL label_03_14_49_34_898986_19090452100 ( \n  DATA INFILE("hdfs://test.hdfs.com:9000/user/test/data/sys/load/array_test.data") \n  INTO TABLE `test_array_table` \n  COLUMNS TERMINATED BY "|" (`k1`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `a10`, `a11`, `a12`, `a13`, `b14`) \n  SET(a14=array_union(cast(b14 as array<string>), cast(a13 as array<string>))) WHERE size(a2) > 270) \n  WITH BROKER "hdfs" ("username"="test_array", "password"="") \n  PROPERTIES( "max_filter_ratio"="0.8" );\n')),(0,r.yg)("h2",{id:"\u4f7f\u7528\u7684\u6267\u884c\u5f15\u64ce"},"\u4f7f\u7528\u7684\u6267\u884c\u5f15\u64ce"),(0,r.yg)("p",null,"\u5bfc\u5165\u65f6\u9ed8\u8ba4\u5173\u95ed Pipeline \u5f15\u64ce\uff0c\u901a\u8fc7\u4ee5\u4e0b\u4e24\u4e2a\u53d8\u91cf\u5f00\u542f\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"../../admin-manual/config/fe-config"},"FE CONFIG")," \u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_pipeline_load"),"\uff0c\u5f00\u542f\u540e Streamload \u7b49\u5bfc\u5165\u4efb\u52a1\u5c06\u5c1d\u8bd5\u4f7f\u7528 Pipeline \u5f15\u64ce\u6267\u884c\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Session Variable \u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_nereids_dml_with_pipeline"),"\uff0c\u5f00\u542f\u540e insert into \u5c06\u5c1d\u8bd5\u4f7f\u7528 Pipeline \u5f15\u64ce\u6267\u884c\u3002"))),(0,r.yg)("p",null,"\u4ee5\u4e0a\u53d8\u91cf\u5f00\u542f\u540e\uff0c\u5177\u4f53\u662f\u5426\u4f7f\u7528 Pipeline \u5f15\u64ce\uff0c\u4ecd\u7136\u53d6\u51b3\u4e8e Session Variables ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_pipeline_engine"),"\u3002\u5982\u679c\u8be5\u503c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5373\u4f7f\u4ee5\u4e0a\u53d8\u91cf\u88ab\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5bfc\u5165\u4f9d\u7136\u4e0d\u4f1a\u4f7f\u7528 Pipeline \u5f15\u64ce\u6267\u884c\u3002"))}m.isMDXComponent=!0}}]);