"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52581],{15680:(e,n,l)=>{l.d(n,{xA:()=>u,yg:()=>m});var a=l(296540);function t(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,a)}return l}function p(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){t(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,a,t=function(e,n){if(null==e)return{};var l,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var o=a.createContext({}),s=function(e){var n=a.useContext(o),l=n;return e&&(l="function"==typeof e?e(n):p(p({},n),e)),l},u=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var l=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(l),d=t,m=g["".concat(o,".").concat(d)]||g[d]||y[d]||r;return l?a.createElement(m,p(p({ref:n},u),{},{components:l})):a.createElement(m,p({ref:n},u))}));function m(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=l.length,p=new Array(r);p[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[g]="string"==typeof e?e:t,p[1]=i;for(var s=2;s<r;s++)p[s]=l[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},775966:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=l(58168),t=(l(296540),l(15680));const r={title:"Select Into Outfile",language:"zh-CN"},p=void 0,i={unversionedId:"data-operate/export/outfile",id:"data-operate/export/outfile",title:"Select Into Outfile",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/export/outfile.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/outfile",permalink:"/zh-CN/docs/dev/data-operate/export/outfile",draft:!1,tags:[],version:"current",frontMatter:{title:"Select Into Outfile",language:"zh-CN"},sidebar:"docs",previous:{title:"Export",permalink:"/zh-CN/docs/dev/data-operate/export/export-manual"},next:{title:"MySQL Dump",permalink:"/zh-CN/docs/dev/data-operate/export/export-with-mysql-dump"}},o={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5bfc\u51fa\u6587\u4ef6\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5bfc\u51fa\u6587\u4ef6\u5217\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5bfc\u51fa\u5230 HDFS",id:"\u5bfc\u51fa\u5230-hdfs",level:3},{value:"\u5bfc\u51fa\u5230 S3",id:"\u5bfc\u51fa\u5230-s3",level:3},{value:"\u5bfc\u51fa\u5230\u672c\u5730",id:"\u5bfc\u51fa\u5230\u672c\u5730",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u751f\u6210\u5bfc\u51fa\u6210\u529f\u6807\u8bc6\u6587\u4ef6",id:"\u751f\u6210\u5bfc\u51fa\u6210\u529f\u6807\u8bc6\u6587\u4ef6",level:3},{value:"\u5e76\u53d1\u5bfc\u51fa",id:"\u5e76\u53d1\u5bfc\u51fa",level:3},{value:"\u5bfc\u51fa\u524d\u6e05\u7a7a\u5bfc\u51fa\u76ee\u5f55",id:"\u5bfc\u51fa\u524d\u6e05\u7a7a\u5bfc\u51fa\u76ee\u5f55",level:3},{value:"\u8bbe\u7f6e\u5bfc\u51fa\u6587\u4ef6\u7684\u5927\u5c0f",id:"\u8bbe\u7f6e\u5bfc\u51fa\u6587\u4ef6\u7684\u5927\u5c0f",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2},{value:"\u5e76\u53d1\u5bfc\u51fa\u539f\u7406",id:"\u5e76\u53d1\u5bfc\u51fa\u539f\u7406",level:3}],u={toc:s},g="wrapper";function y(e){let{components:n,...l}=e;return(0,t.yg)(g,(0,a.A)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u672c\u6587\u6863\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," \u547d\u4ee4\u8fdb\u884c\u67e5\u8be2\u7ed3\u679c\u7684\u5bfc\u51fa\u64cd\u4f5c\u3002"),(0,t.yg)("p",null,"\u6709\u5173",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u547d\u4ee4\u7684\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003\uff1a",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE"},"SELECT INTO OUTFILE")),(0,t.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," \u547d\u4ee4\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT")," \u90e8\u5206\u7684\u7ed3\u679c\u6570\u636e\uff0c\u4ee5\u6307\u5b9a\u7684\u6587\u4ef6\u683c\u5f0f\u5bfc\u51fa\u5230\u76ee\u6807\u5b58\u50a8\u7cfb\u7edf\u4e2d\uff0c\u5305\u62ec\u5bf9\u8c61\u5b58\u50a8\u3001HDFS \u6216\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," \u662f\u4e00\u4e2a\u540c\u6b65\u547d\u4ee4\uff0c\u547d\u4ee4\u8fd4\u56de\u5373\u8868\u793a\u5bfc\u51fa\u7ed3\u675f\u3002\u82e5\u5bfc\u51fa\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5bfc\u51fa\u7684\u6587\u4ef6\u6570\u91cf\u3001\u5927\u5c0f\u3001\u8def\u5f84\u7b49\u4fe1\u606f\u3002\u82e5\u5bfc\u51fa\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u9519\u8bef\u4fe1\u606f\u3002"),(0,t.yg)("p",null,"\u5173\u4e8e\u5982\u4f55\u9009\u62e9 ",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"EXPORT"),"\uff0c\u8bf7\u53c2\u9605 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/export/export-overview"},"\u5bfc\u51fa\u7efc\u8ff0"),"\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," \u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5bfc\u51fa\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Parquet"),(0,t.yg)("li",{parentName:"ul"},"ORC"),(0,t.yg)("li",{parentName:"ul"},"csv"),(0,t.yg)("li",{parentName:"ul"},"csv","_","with","_","names"),(0,t.yg)("li",{parentName:"ul"},"csv","_","with","_","names","_","and","_","types")),(0,t.yg)("p",null,"\u4e0d\u652f\u6301\u538b\u7f29\u683c\u5f0f\u7684\u5bfc\u51fa\u3002"),(0,t.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SELECT * FROM tbl1 LIMIT 10 INTO OUTFILE "file:///home/work/path/result_";\n+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         2 |        8 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n')),(0,t.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"FileNumber\uff1a\u6700\u7ec8\u751f\u6210\u7684\u6587\u4ef6\u4e2a\u6570\u3002"),(0,t.yg)("li",{parentName:"ul"},"TotalRows\uff1a\u7ed3\u679c\u96c6\u884c\u6570\u3002"),(0,t.yg)("li",{parentName:"ul"},"FileSize\uff1a\u5bfc\u51fa\u6587\u4ef6\u603b\u5927\u5c0f\u3002\u5355\u4f4d\u5b57\u8282\u3002"),(0,t.yg)("li",{parentName:"ul"},"URL\uff1a\u5bfc\u51fa\u7684\u6587\u4ef6\u8def\u5f84\u7684\u524d\u7f00\uff0c\u591a\u4e2a\u6587\u4ef6\u4f1a\u4ee5\u540e\u7f00 ",(0,t.yg)("inlineCode",{parentName:"li"},"_0"),",",(0,t.yg)("inlineCode",{parentName:"li"},"_1")," \u4f9d\u6b21\u7f16\u53f7\u3002")),(0,t.yg)("h2",{id:"\u5bfc\u51fa\u6587\u4ef6\u5217\u7c7b\u578b\u6620\u5c04"},"\u5bfc\u51fa\u6587\u4ef6\u5217\u7c7b\u578b\u6620\u5c04"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," \u652f\u6301\u5bfc\u51fa\u4e3a Parquet\u3001ORC \u6587\u4ef6\u683c\u5f0f\u3002Parquet\u3001ORC \u6587\u4ef6\u683c\u5f0f\u62e5\u6709\u81ea\u5df1\u7684\u6570\u636e\u7c7b\u578b\uff0cDoris \u7684\u5bfc\u51fa\u529f\u80fd\u80fd\u591f\u81ea\u52a8\u5c06 Doris \u7684\u6570\u636e\u7c7b\u578b\u5bfc\u51fa\u4e3a Parquet\u3001ORC \u6587\u4ef6\u683c\u5f0f\u7684\u5bf9\u5e94\u6570\u636e\u7c7b\u578b\uff0c\u5177\u4f53\u6620\u5c04\u5173\u7cfb\u8bf7\u53c2\u9605",(0,t.yg)("a",{parentName:"p",href:"./export-view.md"},"\u5bfc\u51fa\u7efc\u8ff0"),'\u6587\u6863\u7684 "\u5bfc\u51fa\u6587\u4ef6\u5217\u7c7b\u578b\u6620\u5c04" \u90e8\u5206\u3002'),(0,t.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,t.yg)("h3",{id:"\u5bfc\u51fa\u5230-hdfs"},"\u5bfc\u51fa\u5230 HDFS"),(0,t.yg)("p",null,"\u5c06\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,t.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/")," \u76ee\u5f55\u4e0b\uff0c\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a PARQUET\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://${host}:${fileSystem_port}/path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "fs.defaultFS" = "hdfs://ip:port",\n    "hadoop.username" = "hadoop"\n);\n')),(0,t.yg)("p",null,"\u5982\u679c HDFS \u5f00\u542f\u4e86\u9ad8\u53ef\u7528\uff0c\u5219\u9700\u8981\u63d0\u4f9b HA \u4fe1\u606f\uff0c\u5982\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://HDFS8000871/path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "fs.defaultFS" = "hdfs://HDFS8000871",\n    "hadoop.username" = "hadoop",\n    "dfs.nameservices" = "your-nameservices",\n    "dfs.ha.namenodes.your-nameservices" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "ip:port",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "ip:port",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')),(0,t.yg)("p",null,"\u5982\u679c Hadoop \u96c6\u7fa4\u5f00\u542f\u4e86\u9ad8\u53ef\u7528\u5e76\u4e14\u542f\u7528\u4e86 Kerberos \u8ba4\u8bc1\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b SQL \u8bed\u53e5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "fs.defaultFS"="hdfs://hacluster/",\n    "hadoop.username" = "hadoop",\n    "dfs.nameservices"="hacluster",\n    "dfs.ha.namenodes.hacluster"="n1,n2",\n    "dfs.namenode.rpc-address.hacluster.n1"="192.168.0.1:8020",\n    "dfs.namenode.rpc-address.hacluster.n2"="192.168.0.2:8020",\n    "dfs.client.failover.proxy.provider.hacluster"="org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "dfs.namenode.kerberos.principal"="hadoop/_HOST@REALM.COM"\n    "hadoop.security.authentication"="kerberos",\n    "hadoop.kerberos.principal"="doris_test@REALM.COM",\n    "hadoop.kerberos.keytab"="/path/to/doris_test.keytab"\n);\n')),(0,t.yg)("h3",{id:"\u5bfc\u51fa\u5230-s3"},"\u5bfc\u51fa\u5230 S3"),(0,t.yg)("p",null,"\u5c06\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230 s3 \u5b58\u50a8\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"s3://path/to/")," \u76ee\u5f55\u4e0b\uff0c\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a ORC\uff0c\u9700\u8981\u63d0\u4f9b",(0,t.yg)("inlineCode",{parentName:"p"},"sk")," ",(0,t.yg)("inlineCode",{parentName:"p"},"ak"),"\u7b49\u4fe1\u606f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM tbl\nINTO OUTFILE "s3://path/to/result_"\nFORMAT AS ORC\nPROPERTIES(\n    "s3.endpoint" = "https://xxx",\n    "s3.region" = "ap-beijing",\n    "s3.access_key"= "your-ak",\n    "s3.secret_key" = "your-sk"\n);\n')),(0,t.yg)("h3",{id:"\u5bfc\u51fa\u5230\u672c\u5730"},"\u5bfc\u51fa\u5230\u672c\u5730"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u5982\u9700\u5bfc\u51fa\u5230\u672c\u5730\u6587\u4ef6\uff0c\u9700\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u4e2d\u6dfb\u52a0 ",(0,t.yg)("inlineCode",{parentName:"p"},"enable_outfile_to_local=true"),"\u5e76\u91cd\u542f FE\u3002")),(0,t.yg)("p",null,"\u5c06\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230 BE \u7684",(0,t.yg)("inlineCode",{parentName:"p"},"file:///path/to/")," \u76ee\u5f55\u4e0b\uff0c\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a CSV\uff0c\u6307\u5b9a\u5217\u5206\u5272\u7b26\u4e3a",(0,t.yg)("inlineCode",{parentName:"p"},","),"\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "file:///path/to/result_"\nFORMAT AS CSV\nPROPERTIES(\n    "column_separator" = ","\n);\n')),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\n\u5bfc\u51fa\u5230\u672c\u5730\u6587\u4ef6\u7684\u529f\u80fd\u4e0d\u9002\u7528\u4e8e\u516c\u6709\u4e91\u7528\u6237\uff0c\u4ec5\u9002\u7528\u4e8e\u79c1\u6709\u5316\u90e8\u7f72\u7684\u7528\u6237\u3002\u5e76\u4e14\u9ed8\u8ba4\u7528\u6237\u5bf9\u96c6\u7fa4\u8282\u70b9\u6709\u5b8c\u5168\u7684\u63a7\u5236\u6743\u9650\u3002Doris \u5bf9\u4e8e\u7528\u6237\u586b\u5199\u7684\u5bfc\u51fa\u8def\u5f84\u4e0d\u4f1a\u505a\u5408\u6cd5\u6027\u68c0\u67e5\u3002\u5982\u679c Doris \u7684\u8fdb\u7a0b\u7528\u6237\u5bf9\u8be5\u8def\u5f84\u65e0\u5199\u6743\u9650\uff0c\u6216\u8def\u5f84\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u62a5\u9519\u3002\u540c\u65f6\u5904\u4e8e\u5b89\u5168\u6027\u8003\u8651\uff0c\u5982\u679c\u8be5\u8def\u5f84\u5df2\u5b58\u5728\u540c\u540d\u7684\u6587\u4ef6\uff0c\u5219\u4e5f\u4f1a\u5bfc\u51fa\u5931\u8d25\u3002\nDoris \u4e0d\u4f1a\u7ba1\u7406\u5bfc\u51fa\u5230\u672c\u5730\u7684\u6587\u4ef6\uff0c\u4e5f\u4e0d\u4f1a\u68c0\u67e5\u78c1\u76d8\u7a7a\u95f4\u7b49\u3002\u8fd9\u4e9b\u6587\u4ef6\u9700\u8981\u7528\u6237\u81ea\u884c\u7ba1\u7406\uff0c\u5982\u6e05\u7406\u7b49\u3002")),(0,t.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,t.yg)("h3",{id:"\u751f\u6210\u5bfc\u51fa\u6210\u529f\u6807\u8bc6\u6587\u4ef6"},"\u751f\u6210\u5bfc\u51fa\u6210\u529f\u6807\u8bc6\u6587\u4ef6"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u547d\u4ee4\u662f\u4e00\u4e2a\u540c\u6b65\u547d\u4ee4\uff0c\u56e0\u6b64\u6709\u53ef\u80fd\u5728 SQL \u6267\u884c\u8fc7\u7a0b\u4e2d\u4efb\u52a1\u8fde\u63a5\u65ad\u5f00\u4e86\uff0c\u4ece\u800c\u65e0\u6cd5\u83b7\u6089\u5bfc\u51fa\u7684\u6570\u636e\u662f\u5426\u6b63\u5e38\u7ed3\u675f\u6216\u662f\u5426\u5b8c\u6574\u3002\u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"success_file_name")," \u53c2\u6570\u8981\u6c42\u5bfc\u51fa\u6210\u529f\u540e\uff0c\u5728\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a\u6587\u4ef6\u6807\u8bc6\u3002"),(0,t.yg)("p",null,"\u7c7b\u4f3c Hive\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5224\u65ad\u5bfc\u51fa\u76ee\u5f55\u4e2d\u662f\u5426\u6709",(0,t.yg)("inlineCode",{parentName:"p"},"success_file_name")," \u53c2\u6570\u6307\u5b9a\u7684\u6587\u4ef6\uff0c\u6765\u5224\u65ad\u5bfc\u51fa\u662f\u5426\u6b63\u5e38\u7ed3\u675f\u4ee5\u53ca\u5bfc\u51fa\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u662f\u5426\u5b8c\u6574\u3002"),(0,t.yg)("p",null,"\u4f8b\u5982\uff1a\u5c06 select \u8bed\u53e5\u7684\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u817e\u8baf\u4e91 COS\uff1a",(0,t.yg)("inlineCode",{parentName:"p"},"s3://${bucket_name}/path/my_file_"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a csv\u3002\u6307\u5b9a\u5bfc\u51fa\u6210\u529f\u6807\u8bc6\u6587\u4ef6\u540d\u4e3a",(0,t.yg)("inlineCode",{parentName:"p"},"SUCCESS"),"\u3002\u5bfc\u51fa\u5b8c\u6210\u540e\uff0c\u751f\u6210\u4e00\u4e2a\u6807\u8bc6\u6587\u4ef6\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT k1,k2,v1 FROM tbl1 LIMIT 100000\nINTO OUTFILE "s3://my_bucket/path/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "s3.endpoint" = "${endpoint}",\n    "s3.region" = "ap-beijing",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "success_file_name" = "SUCCESS"\n)\n')),(0,t.yg)("p",null,"\u5728\u5bfc\u51fa\u5b8c\u6210\u540e\uff0c\u4f1a\u591a\u5199\u51fa\u4e00\u4e2a\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"SUCCESS"),"\u3002"),(0,t.yg)("h3",{id:"\u5e76\u53d1\u5bfc\u51fa"},"\u5e76\u53d1\u5bfc\u51fa"),(0,t.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT")," \u90e8\u5206\u7684\u67e5\u8be2\u7ed3\u679c\u4f1a\u5148\u6c47\u805a\u5230\u67d0\u4e00\u4e2a BE \u8282\u70b9\uff0c\u7531\u8be5\u8282\u70b9\u5355\u7ebf\u7a0b\u5bfc\u51fa\u6570\u636e\u3002\u7136\u800c\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5982\u6ca1\u6709 ",(0,t.yg)("inlineCode",{parentName:"p"},"ORDER BY")," \u5b50\u53e5\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u5219\u53ef\u4ee5\u5f00\u542f\u5e76\u53d1\u5bfc\u51fa\uff0c\u591a\u4e2a BE \u8282\u70b9\u540c\u65f6\u5bfc\u51fa\u6570\u636e\uff0c\u4ee5\u63d0\u5347\u5bfc\u51fa\u6027\u80fd\u3002"),(0,t.yg)("p",null,"\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6f14\u793a\u5982\u4f55\u6b63\u786e\u5f00\u542f\u5e76\u53d1\u5bfc\u51fa\u529f\u80fd\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u6253\u5f00\u5e76\u53d1\u5bfc\u51fa\u4f1a\u8bdd\u53d8\u91cf")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SET enable_parallel_outfile = true;\n")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u6267\u884c\u5bfc\u51fa\u547d\u4ee4")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SELECT * FROM demo.tbl\n    -> INTO OUTFILE "file:///path/to/ftw/export/exp_"\n    -> FORMAT AS PARQUET;\n+------------+-----------+----------+-------------------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                           |\n+------------+-----------+----------+-------------------------------------------------------------------------------+\n|          1 |    104494 |  7998308 | file:///127.0.0.1/path/to/exp_1f850179e684476b-9bf001a6bf96d7d3_ |\n|          1 |    104984 |  8052491 | file:///127.0.0.1/path/to/exp_1f850179e684476b-9bf001a6bf96d7d5_ |\n|          1 |    104345 |  7981406 | file:///127.0.0.1/path/to/exp_1f850179e684476b-9bf001a6bf96d7d1_ |\n|          1 |    104034 |  7977301 | file:///127.0.0.1/path/to/exp_1f850179e684476b-9bf001a6bf96d7d4_ |\n|          1 |    104238 |  7979757 | file:///127.0.0.1/path/to/exp_1f850179e684476b-9bf001a6bf96d7d2_ |\n|          1 |    159450 | 11870222 | file:///127.0.0.1/path/to/exp_1f850179e684476b-9bf001a6bf96d7d0_ |\n|          1 |    209691 | 16082100 | file:///127.0.0.1/path/to/exp_1f850179e684476b-9bf001a6bf96d7ce_ |\n|          1 |    208769 | 16004096 | file:///127.0.0.1/path/to/exp_1f850179e684476b-9bf001a6bf96d7cf_ |\n+------------+-----------+----------+-------------------------------------------------------------------------------+\n')),(0,t.yg)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5f00\u542f\u5e76\u6210\u529f\u89e6\u53d1\u5e76\u53d1\u5bfc\u51fa\u529f\u80fd\u540e\uff0c\u8fd4\u56de\u7684\u7ed3\u679c\u53ef\u80fd\u662f\u591a\u884c\uff0c\u8868\u793a\u6709\u591a\u4e2a\u7ebf\u7a0b\u5e76\u53d1\u5bfc\u51fa\u3002"),(0,t.yg)("p",null,"\u5982\u679c\u6211\u4eec\u4fee\u6539\u4e0a\u8ff0\u8bed\u53e5\uff0c\u5373\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u52a0\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"ORDER BY")," \u5b50\u53e5\u3002\u7531\u4e8e\u67e5\u8be2\u8bed\u53e5\u5e26\u4e86\u4e00\u4e2a\u9876\u5c42\u7684\u6392\u5e8f\u8282\u70b9\uff0c\u6240\u4ee5\u8fd9\u4e2a\u67e5\u8be2\u5373\u4f7f\u5f00\u542f\u5e76\u53d1\u5bfc\u51fa\u529f\u80fd\uff0c\u4e5f\u662f\u65e0\u6cd5\u5e76\u53d1\u5bfc\u51fa\u7684\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SELECT * FROM demo.tbl ORDER BY id\n    -> INTO OUTFILE "file:///path/to/ftw/export/exp_"\n    -> FORMAT AS PARQUET;\n+------------+-----------+----------+-------------------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                           |\n+------------+-----------+----------+-------------------------------------------------------------------------------+\n|          1 |   1100005 | 80664607 | file:///127.0.0.1/mnt/disk2/ftw/export/exp_20c5461055774128-826256c0cfb3d8fc_ |\n+------------+-----------+----------+-------------------------------------------------------------------------------+\n')),(0,t.yg)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u6700\u7ec8\u7ed3\u679c\u53ea\u6709\u4e00\u884c\uff0c\u5e76\u6ca1\u6709\u89e6\u53d1\u5e76\u53d1\u5bfc\u51fa\u3002"),(0,t.yg)("p",null,"\u5173\u4e8e\u66f4\u591a\u5e76\u53d1\u5bfc\u51fa\u7684\u539f\u7406\u8bf4\u660e\uff0c\u53ef\u53c2\u9605\u9644\u5f55\u90e8\u5206\u3002"),(0,t.yg)("h3",{id:"\u5bfc\u51fa\u524d\u6e05\u7a7a\u5bfc\u51fa\u76ee\u5f55"},"\u5bfc\u51fa\u524d\u6e05\u7a7a\u5bfc\u51fa\u76ee\u5f55"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM tbl1\nINTO OUTFILE "s3://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "s3.endpoint" = "${endpoint}",\n    "s3.region" = "region",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "delete_existing_files" = "true"\n)\n')),(0,t.yg)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},'"delete_existing_files" = "true"'),"\uff0c\u5bfc\u51fa\u4f5c\u4e1a\u4f1a\u5148\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"s3://my_bucket/export/"),"\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u53ca\u76ee\u5f55\u5220\u9664\uff0c\u7136\u540e\u5bfc\u51fa\u6570\u636e\u5230\u8be5\u76ee\u5f55\u4e0b\u3002"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u82e5\u8981\u4f7f\u7528 delete_existing_files \u53c2\u6570\uff0c\u8fd8\u9700\u8981\u5728 fe.conf \u4e2d\u6dfb\u52a0\u914d\u7f6e",(0,t.yg)("inlineCode",{parentName:"p"},"enable_delete_existing_files = true"),"\u5e76\u91cd\u542f fe\uff0c\u6b64\u65f6 delete_existing_files \u624d\u4f1a\u751f\u6548\u3002delete_existing_files = true \u662f\u4e00\u4e2a\u5371\u9669\u7684\u64cd\u4f5c\uff0c\u5efa\u8bae\u53ea\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u4f7f\u7528\u3002")),(0,t.yg)("h3",{id:"\u8bbe\u7f6e\u5bfc\u51fa\u6587\u4ef6\u7684\u5927\u5c0f"},"\u8bbe\u7f6e\u5bfc\u51fa\u6587\u4ef6\u7684\u5927\u5c0f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM tbl\nINTO OUTFILE "s3://path/to/result_"\nFORMAT AS ORC\nPROPERTIES(\n    "s3.endpoint" = "https://xxx",\n    "s3.region" = "ap-beijing",\n    "s3.access_key"= "your-ak",\n    "s3.secret_key" = "your-sk",\n    "max_file_size" = "2048MB"\n);\n')),(0,t.yg)("p",null,"\u7531\u4e8e\u6307\u5b9a\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},'"max_file_size" = "2048MB"')," \u6700\u7ec8\u751f\u6210\u6587\u4ef6\u5982\u5982\u679c\u4e0d\u5927\u4e8e 2GB\uff0c\u5219\u53ea\u6709\u4e00\u4e2a\u6587\u4ef6\u3002\u5982\u679c\u5927\u4e8e 2GB\uff0c\u5219\u6709\u591a\u4e2a\u6587\u4ef6\u3002"),(0,t.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5bfc\u51fa\u6570\u636e\u91cf\u548c\u5bfc\u51fa\u6548\u7387"),(0,t.yg)("p",{parentName:"li"},"  ",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u529f\u80fd\u672c\u8d28\u4e0a\u662f\u6267\u884c\u4e00\u4e2a SQL \u67e5\u8be2\u547d\u4ee4\u3002\u5982\u679c\u4e0d\u5f00\u542f\u5e76\u53d1\u5bfc\u51fa\uff0c\u67e5\u8be2\u7ed3\u679c\u662f\u7531\u5355\u4e2a BE \u8282\u70b9\uff0c\u5355\u7ebf\u7a0b\u5bfc\u51fa\u7684\uff0c\u56e0\u6b64\u6574\u4e2a\u5bfc\u51fa\u7684\u8017\u65f6\u5305\u62ec\u67e5\u8be2\u672c\u8eab\u7684\u8017\u65f6\u548c\u6700\u7ec8\u7ed3\u679c\u96c6\u5199\u51fa\u7684\u8017\u65f6\u3002\u5f00\u542f\u5e76\u53d1\u5bfc\u51fa\u53ef\u4ee5\u964d\u4f4e\u5bfc\u51fa\u7684\u65f6\u95f4\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5bfc\u51fa\u8d85\u65f6"))),(0,t.yg)("p",null,"\xa0\xa0  \u5bfc\u51fa\u547d\u4ee4\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u67e5\u8be2\u7684\u8d85\u65f6\u65f6\u95f4\u76f8\u540c\uff0c\u5982\u679c\u6570\u636e\u91cf\u8f83\u5927\u5bfc\u81f4\u5bfc\u51fa\u6570\u636e\u8d85\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf ",(0,t.yg)("inlineCode",{parentName:"p"},"query_timeout")," \u9002\u5f53\u7684\u5ef6\u957f\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5bfc\u51fa\u6587\u4ef6\u7684\u7ba1\u7406")),(0,t.yg)("p",null,"\xa0\xa0  Doris \u4e0d\u4f1a\u7ba1\u7406\u5bfc\u51fa\u7684\u6587\u4ef6\uff0c\u65e0\u8bba\u662f\u5bfc\u51fa\u6210\u529f\u7684\u8fd8\u662f\u5bfc\u51fa\u5931\u8d25\u540e\u6b8b\u7559\u7684\u6587\u4ef6\uff0c\u90fd\u9700\u8981\u7528\u6237\u81ea\u884c\u5904\u7406\u3002"),(0,t.yg)("p",null,"\xa0\xa0  \u53e6\u5916\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," \u547d\u4ee4\u4e0d\u4f1a\u68c0\u67e5\u6587\u4ef6\u53ca\u6587\u4ef6\u8def\u5f84\u662f\u5426\u5b58\u5728\u3002",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," \u662f\u5426\u4f1a\u81ea\u52a8\u521b\u5efa\u8def\u5f84\u3001\u6216\u662f\u5426\u4f1a\u8986\u76d6\u5df2\u5b58\u5728\u6587\u4ef6\uff0c\u5b8c\u5168\u7531\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u7684\u8bed\u4e49\u51b3\u5b9a\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u4e3a\u7a7a")),(0,t.yg)("p",null,"\xa0\xa0  \u5bf9\u4e8e\u7ed3\u679c\u96c6\u4e3a\u7a7a\u7684\u5bfc\u51fa\uff0c\u4f9d\u7136\u4f1a\u4ea7\u751f\u4e00\u4e2a\u7a7a\u6587\u4ef6\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u6587\u4ef6\u5207\u5206")),(0,t.yg)("p",null,"\xa0\xa0  \u6587\u4ef6\u5207\u5206\u4f1a\u4fdd\u8bc1\u4e00\u884c\u6570\u636e\u5b8c\u6574\u7684\u5b58\u50a8\u5728\u5355\u4e00\u6587\u4ef6\u4e2d\u3002\u56e0\u6b64\u6587\u4ef6\u7684\u5927\u5c0f\u5e76\u4e0d\u4e25\u683c\u7b49\u4e8e ",(0,t.yg)("inlineCode",{parentName:"p"},"max_file_size"),"\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u975e\u53ef\u89c1\u5b57\u7b26\u7684\u51fd\u6570")),(0,t.yg)("p",null,"\xa0\xa0  \u5bf9\u4e8e\u90e8\u5206\u8f93\u51fa\u4e3a\u975e\u53ef\u89c1\u5b57\u7b26\u7684\u51fd\u6570\uff0c\u5982 BITMAP\u3001HLL \u7c7b\u578b\uff0cCSV \u8f93\u51fa\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"\\N"),"\uff0cParquet\u3001ORC \u8f93\u51fa\u4e3a NULL\u3002"),(0,t.yg)("p",null,"\xa0\xa0  \u76ee\u524d\u90e8\u5206\u5730\u7406\u4fe1\u606f\u51fd\u6570\uff0c\u5982 ",(0,t.yg)("inlineCode",{parentName:"p"},"ST_Point")," \u7684\u8f93\u51fa\u7c7b\u578b\u4e3a VARCHAR\uff0c\u4f46\u5b9e\u9645\u8f93\u51fa\u503c\u4e3a\u7ecf\u8fc7\u7f16\u7801\u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u3002\u5f53\u524d\u8fd9\u4e9b\u51fd\u6570\u4f1a\u8f93\u51fa\u4e71\u7801\u3002\u5bf9\u4e8e\u5730\u7406\u51fd\u6570\uff0c\u8bf7\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"ST_AsText")," \u8fdb\u884c\u8f93\u51fa\u3002"),(0,t.yg)("h2",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,t.yg)("h3",{id:"\u5e76\u53d1\u5bfc\u51fa\u539f\u7406"},"\u5e76\u53d1\u5bfc\u51fa\u539f\u7406"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u539f\u7406\u4ecb\u7ecd")),(0,t.yg)("p",null,"\xa0\xa0  Doris \u662f\u5178\u578b\u7684\u57fa\u4e8e MPP \u67b6\u6784\u7684\u9ad8\u6027\u80fd\u3001\u5b9e\u65f6\u7684\u5206\u6790\u578b\u6570\u636e\u5e93\u3002MPP \u67b6\u6784\u7684\u4e00\u5927\u7279\u5f81\u662f\u4f7f\u7528\u5206\u5e03\u5f0f\u67b6\u6784\uff0c\u5c06\u5927\u89c4\u6a21\u6570\u636e\u96c6\u5212\u5206\u4e3a\u5c0f\u5757\uff0c\u5e76\u5728\u591a\u4e2a\u8282\u70b9\u4e0a\u5e76\u884c\u5904\u7406\u3002"),(0,t.yg)("p",null,"\xa0\xa0  ",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u7684\u5e76\u53d1\u5bfc\u51fa\u5c31\u662f\u57fa\u4e8e\u4e0a\u8ff0 MPP \u67b6\u6784\u7684\u5e76\u884c\u5904\u7406\u80fd\u529b\uff0c\u5728\u53ef\u4ee5\u5e76\u53d1\u5bfc\u51fa\u7684\u573a\u666f\u4e0b\uff08\u540e\u9762\u4f1a\u8be6\u7ec6\u8bf4\u660e\u54ea\u4e9b\u573a\u666f\u53ef\u4ee5\u5e76\u53d1\u5bfc\u51fa\uff09\uff0c\u5e76\u884c\u7684\u5728\u591a\u4e2a BE \u8282\u70b9\u4e0a\u5bfc\u51fa\uff0c\u6bcf\u4e2a BE \u5904\u7406\u7ed3\u679c\u96c6\u7684\u4e00\u90e8\u5206\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5982\u4f55\u5224\u65ad\u53ef\u4ee5\u6267\u884c\u5e76\u53d1\u5bfc\u51fa"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u786e\u5b9a\u4f1a\u8bdd\u53d8\u91cf\u5df2\u5f00\u542f\uff1a",(0,t.yg)("inlineCode",{parentName:"p"},"set enable_parallel_outfile = true;"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"EXPLAIN")," \u67e5\u770b\u6267\u884c\u8ba1\u5212"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> EXPLAIN SELECT ... INTO OUTFILE "s3://xxx" ...;\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:<slot 2> | <slot 3> | <slot 4> | <slot 5>                     |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   1:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:`k1` + `k2`                                                   |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:test`.`multi_tablet`.`k1`   |\n|                                                                             |\n|   RESULT FILE SINK                                                          |\n|   FILE PATH: s3://ml-bd-repo/bpit_test/outfile_1951_                        |\n|   STORAGE TYPE: S3                                                          |\n|                                                                             |\n|   0:OlapScanNode                                                            |\n|      TABLE: multi_tablet                                                    |\n+-----------------------------------------------------------------------------+\n')),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"EXPLAIN")," \u547d\u4ee4\u4f1a\u8fd4\u56de\u8be5\u8bed\u53e5\u7684\u67e5\u8be2\u8ba1\u5212\u3002\u89c2\u5bdf\u8be5\u67e5\u8be2\u8ba1\u5212\uff0c\u5982\u679c\u53d1\u73b0 ",(0,t.yg)("inlineCode",{parentName:"p"},"RESULT FILE SINK")," \u51fa\u73b0\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"PLAN FRAGMENT 1")," \u4e2d\uff0c\u5c31\u8bf4\u660e\u8be5\u67e5\u8be2\u8bed\u53e5\u53ef\u4ee5\u5e76\u53d1\u5bfc\u51fa\u3002\u5982\u679c ",(0,t.yg)("inlineCode",{parentName:"p"},"RESULT FILE SINK")," \u51fa\u73b0\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"PLAN FRAGMENT 0")," \u4e2d\uff0c\u5219\u8bf4\u660e\u5f53\u524d\u67e5\u8be2\u4e0d\u80fd\u8fdb\u884c\u5e76\u53d1\u5bfc\u51fa\u3002")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5bfc\u51fa\u5e76\u53d1\u5ea6"),(0,t.yg)("p",{parentName:"li"},"  \u5f53\u6ee1\u8db3\u5e76\u53d1\u5bfc\u51fa\u7684\u6761\u4ef6\u540e\uff0c\u5bfc\u51fa\u4efb\u52a1\u7684\u5e76\u53d1\u5ea6\u4e3a\uff1a",(0,t.yg)("inlineCode",{parentName:"p"},"BE \u8282\u70b9\u6570 * parallel_fragment_exec_instance_num"),"\u3002"))))}y.isMDXComponent=!0}}]);