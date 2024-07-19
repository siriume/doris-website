"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[26864],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),i=s(t),y=l,m=i["".concat(c,".").concat(y)]||i[y]||d[y]||r;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=y;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[i]="string"==typeof e?e:l,o[1]=u;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},296209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var a=t(58168),l=(t(296540),t(15680));const r={title:"sequence \u5217",language:"zh-CN"},o=void 0,u={unversionedId:"data-operate/update-delete/sequence-column-manual",id:"version-1.2/data-operate/update-delete/sequence-column-manual",title:"sequence \u5217",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/data-operate/update-delete/sequence-column-manual.md",sourceDirName:"data-operate/update-delete",slug:"/data-operate/update-delete/sequence-column-manual",permalink:"/zh-CN/docs/1.2/data-operate/update-delete/sequence-column-manual",draft:!1,tags:[],version:"1.2",frontMatter:{title:"sequence \u5217",language:"zh-CN"},sidebar:"docs",previous:{title:"Delete \u64cd\u4f5c",permalink:"/zh-CN/docs/1.2/data-operate/update-delete/delete-manual"},next:{title:"Schema \u53d8\u66f4",permalink:"/zh-CN/docs/1.2/advanced/alter-table/schema-change"}},c={},s=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"\u5efa\u8868",id:"\u5efa\u8868",level:3},{value:"\u5bfc\u5165",id:"\u5bfc\u5165",level:3},{value:"\u8bfb\u53d6",id:"\u8bfb\u53d6",level:3},{value:"Cumulative Compaction",id:"cumulative-compaction",level:3},{value:"Base Compaction",id:"base-compaction",level:3},{value:"\u4f7f\u7528\u8bed\u6cd5",id:"\u4f7f\u7528\u8bed\u6cd5",level:2},{value:"\u8bbe\u7f6e<code>sequence_col</code>\uff08\u63a8\u8350\uff09",id:"\u8bbe\u7f6esequence_col\u63a8\u8350",level:3},{value:"\u8bbe\u7f6e<code>sequence_type</code>",id:"\u8bbe\u7f6esequence_type",level:3},{value:"\u542f\u7528sequence column\u652f\u6301",id:"\u542f\u7528sequence-column\u652f\u6301",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}],p={toc:s},i="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(i,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"sequence-\u5217"},"sequence \u5217"),(0,l.yg)("p",null,"Uniq\u6a21\u578b\u4e3b\u8981\u9488\u5bf9\u9700\u8981\u552f\u4e00\u4e3b\u952e\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u4e3b\u952e\u552f\u4e00\u6027\u7ea6\u675f\uff0c\u4f46\u662f\u7531\u4e8e\u4f7f\u7528REPLACE\u805a\u5408\u65b9\u5f0f\uff0c\u5728\u540c\u4e00\u6279\u6b21\u4e2d\u5bfc\u5165\u7684\u6570\u636e\uff0c\u66ff\u6362\u987a\u5e8f\u4e0d\u505a\u4fdd\u8bc1\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u8003",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/data-table/data-model"},"\u6570\u636e\u6a21\u578b"),"\u3002\u66ff\u6362\u987a\u5e8f\u65e0\u6cd5\u4fdd\u8bc1\u5219\u65e0\u6cd5\u786e\u5b9a\u6700\u7ec8\u5bfc\u5165\u5230\u8868\u4e2d\u7684\u5177\u4f53\u6570\u636e\uff0c\u5b58\u5728\u4e86\u4e0d\u786e\u5b9a\u6027\u3002"),(0,l.yg)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cDoris\u652f\u6301\u4e86sequence\u5217\uff0c\u901a\u8fc7\u7528\u6237\u5728\u5bfc\u5165\u65f6\u6307\u5b9asequence\u5217\uff0c\u76f8\u540ckey\u5217\u4e0b\uff0cREPLACE\u805a\u5408\u7c7b\u578b\u7684\u5217\u5c06\u6309\u7167sequence\u5217\u7684\u503c\u8fdb\u884c\u66ff\u6362\uff0c\u8f83\u5927\u503c\u53ef\u4ee5\u66ff\u6362\u8f83\u5c0f\u503c\uff0c\u53cd\u4e4b\u5219\u65e0\u6cd5\u66ff\u6362\u3002\u8be5\u65b9\u6cd5\u5c06\u987a\u5e8f\u7684\u786e\u5b9a\u4ea4\u7ed9\u4e86\u7528\u6237\uff0c\u7531\u7528\u6237\u63a7\u5236\u66ff\u6362\u987a\u5e8f\u3002"),(0,l.yg)("p",null,"sequence\u5217\u76ee\u524d\u53ea\u652f\u6301Uniq\u6a21\u578b\u3002"),(0,l.yg)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,l.yg)("p",null,"Sequence\u5217\u53ea\u80fd\u5728Uniq\u6570\u636e\u6a21\u578b\u4e0b\u4f7f\u7528\u3002"),(0,l.yg)("h2",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,l.yg)("p",null,"\u901a\u8fc7\u589e\u52a0\u4e00\u4e2a\u9690\u85cf\u5217",(0,l.yg)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__"),"\u5b9e\u73b0\uff0c\u8be5\u5217\u7684\u7c7b\u578b\u7531\u7528\u6237\u5728\u5efa\u8868\u65f6\u6307\u5b9a\uff0c\u5728\u5bfc\u5165\u65f6\u786e\u5b9a\u8be5\u5217\u5177\u4f53\u503c\uff0c\u5e76\u4f9d\u636e\u8be5\u503c\u5bf9REPLACE\u5217\u8fdb\u884c\u66ff\u6362\u3002"),(0,l.yg)("h3",{id:"\u5efa\u8868"},"\u5efa\u8868"),(0,l.yg)("p",null,"\u521b\u5efaUniq\u8868\u65f6\uff0c\u5c06\u6309\u7167\u7528\u6237\u6307\u5b9a\u7c7b\u578b\u81ea\u52a8\u6dfb\u52a0\u4e00\u4e2a\u9690\u85cf\u5217",(0,l.yg)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__"),"\u3002"),(0,l.yg)("h3",{id:"\u5bfc\u5165"},"\u5bfc\u5165"),(0,l.yg)("p",null,"\u5bfc\u5165\u65f6\uff0cfe\u5728\u89e3\u6790\u7684\u8fc7\u7a0b\u4e2d\u5c06\u9690\u85cf\u5217\u7684\u503c\u8bbe\u7f6e\u6210 ",(0,l.yg)("inlineCode",{parentName:"p"},"order by")," \u8868\u8fbe\u5f0f\u7684\u503c(broker load\u548croutine load)\uff0c\u6216\u8005",(0,l.yg)("inlineCode",{parentName:"p"},"function_column.sequence_col"),"\u8868\u8fbe\u5f0f\u7684\u503c(stream load)\uff0cvalue\u5217\u5c06\u6309\u7167\u8be5\u503c\u8fdb\u884c\u66ff\u6362\u3002\u9690\u85cf\u5217",(0,l.yg)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__"),"\u7684\u503c\u65e2\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u6570\u636e\u6e90\u4e2d\u4e00\u5217\uff0c\u4e5f\u53ef\u4ee5\u662f\u8868\u7ed3\u6784\u4e2d\u7684\u4e00\u5217\u3002"),(0,l.yg)("h3",{id:"\u8bfb\u53d6"},"\u8bfb\u53d6"),(0,l.yg)("p",null,"\u8bf7\u6c42\u5305\u542bvalue\u5217\u65f6\u9700\u8981\u989d\u5916\u8bfb\u53d6",(0,l.yg)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__"),"\u5217\uff0c\u8be5\u5217\u7528\u4e8e\u5728\u76f8\u540ckey\u5217\u4e0b\uff0cREPLACE\u805a\u5408\u51fd\u6570\u66ff\u6362\u987a\u5e8f\u7684\u4f9d\u636e\uff0c\u8f83\u5927\u503c\u53ef\u4ee5\u66ff\u6362\u8f83\u5c0f\u503c\uff0c\u53cd\u4e4b\u5219\u4e0d\u80fd\u66ff\u6362\u3002"),(0,l.yg)("h3",{id:"cumulative-compaction"},"Cumulative Compaction"),(0,l.yg)("p",null,"Cumulative Compaction \u65f6\u548c\u8bfb\u53d6\u8fc7\u7a0b\u539f\u7406\u76f8\u540c\u3002"),(0,l.yg)("h3",{id:"base-compaction"},"Base Compaction"),(0,l.yg)("p",null,"Base Compaction \u65f6\u8bfb\u53d6\u8fc7\u7a0b\u539f\u7406\u76f8\u540c\u3002"),(0,l.yg)("h2",{id:"\u4f7f\u7528\u8bed\u6cd5"},"\u4f7f\u7528\u8bed\u6cd5"),(0,l.yg)("p",null,"Sequence\u5217\u5efa\u8868\u65f6\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u5efa\u8868\u65f6\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"p"},"sequence_col"),"\u5c5e\u6027\uff0c\u4e00\u79cd\u662f\u5efa\u8868\u65f6\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"p"},"sequence_type"),"\u5c5e\u6027\u3002"),(0,l.yg)("h3",{id:"\u8bbe\u7f6esequence_col\u63a8\u8350"},"\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"h3"},"sequence_col"),"\uff08\u63a8\u8350\uff09"),(0,l.yg)("p",null,"\u521b\u5efaUniq\u8868\u65f6\uff0c\u6307\u5b9asequence\u5217\u5230\u8868\u4e2d\u5176\u4ed6column\u7684\u6620\u5c04"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"PROPERTIES (\n    \"function_column.sequence_col\" = 'column_name',\n);\n")),(0,l.yg)("p",null,"sequence_col\u7528\u6765\u6307\u5b9asequence\u5217\u5230\u8868\u4e2d\u67d0\u4e00\u5217\u7684\u6620\u5c04\uff0c\u8be5\u5217\u53ef\u4ee5\u4e3a\u6574\u578b\u548c\u65f6\u95f4\u7c7b\u578b\uff08DATE\u3001DATETIME\uff09\uff0c\u521b\u5efa\u540e\u4e0d\u80fd\u66f4\u6539\u8be5\u5217\u7684\u7c7b\u578b\u3002"),(0,l.yg)("p",null,"\u5bfc\u5165\u65b9\u5f0f\u548c\u6ca1\u6709sequence\u5217\u65f6\u4e00\u6837\uff0c\u4f7f\u7528\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355\uff0c\u63a8\u8350\u4f7f\u7528\u3002"),(0,l.yg)("h3",{id:"\u8bbe\u7f6esequence_type"},"\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"h3"},"sequence_type")),(0,l.yg)("p",null,"\u521b\u5efaUniq\u8868\u65f6\uff0c\u6307\u5b9asequence\u5217\u7c7b\u578b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"PROPERTIES (\n    \"function_column.sequence_type\" = 'Date',\n);\n")),(0,l.yg)("p",null,"sequence_type\u7528\u6765\u6307\u5b9asequence\u5217\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u4e3a\u6574\u578b\u548c\u65f6\u95f4\u7c7b\u578b\uff08DATE\u3001DATETIME\uff09\u3002"),(0,l.yg)("p",null,"\u5bfc\u5165\u65f6\u9700\u8981\u6307\u5b9asequence\u5217\u5230\u5176\u4ed6\u5217\u7684\u6620\u5c04\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Stream Load")),(0,l.yg)("p",null,"stream load \u7684\u5199\u6cd5\u662f\u5728header\u4e2d\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"function_column.sequence_col"),"\u5b57\u6bb5\u6dfb\u52a0\u9690\u85cf\u5217\u5bf9\u5e94\u7684source_sequence\u7684\u6620\u5c04\uff0c \u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Broker Load")),(0,l.yg)("p",null,"\u5728",(0,l.yg)("inlineCode",{parentName:"p"},"ORDER BY")," \u5904\u8bbe\u7f6e\u9690\u85cf\u5217\u6620\u5c04\u7684source_sequence\u5b57\u6bb5"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n    INTO TABLE `tbl1`\n    COLUMNS TERMINATED BY ","\n    (k1,k2,source_sequence,v1,v2)\n    ORDER BY source_sequence\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Routine Load")),(0,l.yg)("p",null,"\u6620\u5c04\u65b9\u5f0f\u540c\u4e0a\uff0c\u793a\u4f8b\u5982\u4e0b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'   CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, source_sequence, v1, v2),\n    WHERE k1 > 100 and k2 like "%doris%"\n    [ORDER BY source_sequence]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n')),(0,l.yg)("h2",{id:"\u542f\u7528sequence-column\u652f\u6301"},"\u542f\u7528sequence column\u652f\u6301"),(0,l.yg)("p",null,"\u5728\u65b0\u5efa\u8868\u65f6\u5982\u679c\u8bbe\u7f6e\u4e86",(0,l.yg)("inlineCode",{parentName:"p"},"function_column.sequence_col"),"\u6216\u8005",(0,l.yg)("inlineCode",{parentName:"p"},"function_column.sequence_type")," \uff0c\u5219\u65b0\u5efa\u8868\u5c06\u652f\u6301sequence column\u3002 \u5bf9\u4e8e\u4e00\u4e2a\u4e0d\u652f\u6301sequence column\u7684\u8868\uff0c\u5982\u679c\u60f3\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u8bed\u53e5\uff1a ",(0,l.yg)("inlineCode",{parentName:"p"},'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date")')," \u6765\u542f\u7528\u3002 \u5982\u679c\u4e0d\u786e\u5b9a\u4e00\u4e2a\u8868\u662f\u5426\u652f\u6301sequence column\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4e00\u4e2asession variable\u6765\u663e\u793a\u9690\u85cf\u5217 ",(0,l.yg)("inlineCode",{parentName:"p"},"SET show_hidden_columns=true")," \uff0c\u4e4b\u540e\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"desc tablename"),"\uff0c\u5982\u679c\u8f93\u51fa\u4e2d\u6709",(0,l.yg)("inlineCode",{parentName:"p"},"__DORIS_SEQUENCE_COL__")," \u5217\u5219\u652f\u6301\uff0c\u5982\u679c\u6ca1\u6709\u5219\u4e0d\u652f\u6301\u3002"),(0,l.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.yg)("p",null,"\u4e0b\u9762\u4ee5Stream Load\u4e3a\u4f8b\u4e3a\u793a\u4f8b\u6765\u5c55\u793a\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u521b\u5efa\u652f\u6301sequence column\u7684\u8868")),(0,l.yg)("p",null,"\u521b\u5efaunique\u6a21\u578b\u7684test_table\u6570\u636e\u8868\uff0c\u5e76\u6307\u5b9asequence\u5217\u6620\u5c04\u5230\u8868\u4e2d\u7684modify_date\u5217\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE test.test_table\n(\n    user_id bigint,\n    date date,\n    group_id bigint,\n    modify_date date,\n    keyword VARCHAR(128)\n)\nUNIQUE KEY(user_id, date, group_id)\nDISTRIBUTED BY HASH (user_id) BUCKETS 32\nPROPERTIES(\n    "function_column.sequence_col" = \'modify_date\',\n    "replication_num" = "1",\n    "in_memory" = "false"\n);\n')),(0,l.yg)("p",null,"\u8868\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL > desc test_table;\n+-------------+--------------+------+-------+---------+---------+\n| Field       | Type         | Null | Key   | Default | Extra   |\n+-------------+--------------+------+-------+---------+---------+\n| user_id     | BIGINT       | No   | true  | NULL    |         |\n| date        | DATE         | No   | true  | NULL    |         |\n| group_id    | BIGINT       | No   | true  | NULL    |         |\n| modify_date | DATE         | No   | false | NULL    | REPLACE |\n| keyword     | VARCHAR(128) | No   | false | NULL    | REPLACE |\n+-------------+--------------+------+-------+---------+---------+\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u6b63\u5e38\u5bfc\u5165\u6570\u636e\uff1a")),(0,l.yg)("p",null,"\u5bfc\u5165\u5982\u4e0b\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"1       2020-02-22      1       2020-02-21      a\n1       2020-02-22      1       2020-02-22      b\n1       2020-02-22      1       2020-03-05      c\n1       2020-02-22      1       2020-02-26      d\n1       2020-02-22      1       2020-02-23      e\n1       2020-02-22      1       2020-02-24      b\n")),(0,l.yg)("p",null,"\u6b64\u5904\u4ee5stream load\u4e3a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"curl --location-trusted -u root: -T testData http://host:port/api/test/test_table/_stream_load\n")),(0,l.yg)("p",null,"\u7ed3\u679c\u4e3a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL > select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")),(0,l.yg)("p",null,"\u5728\u8fd9\u6b21\u5bfc\u5165\u4e2d\uff0c\u56e0sequence column\u7684\u503c\uff08\u4e5f\u5c31\u662fmodify_date\u4e2d\u7684\u503c\uff09\u4e2d'2020-03-05'\u4e3a\u6700\u5927\u503c\uff0c\u6240\u4ee5keyword\u5217\u4e2d\u6700\u7ec8\u4fdd\u7559\u4e86c\u3002"),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u66ff\u6362\u987a\u5e8f\u7684\u4fdd\u8bc1")),(0,l.yg)("p",null,"\u4e0a\u8ff0\u6b65\u9aa4\u5b8c\u6210\u540e\uff0c\u63a5\u7740\u5bfc\u5165\u5982\u4e0b\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-02-23      b\n")),(0,l.yg)("p",null,"\u67e5\u8be2\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")),(0,l.yg)("p",null,"\u5728\u8fd9\u6b21\u5bfc\u5165\u7684\u6570\u636e\u4e2d\uff0c\u4f1a\u6bd4\u8f83\u6240\u6709\u5df2\u5bfc\u5165\u6570\u636e\u7684sequence column\uff08\u4e5f\u5c31\u662fmodify_date)\uff0c\u5176\u4e2d'2020-03-05'\u4e3a\u6700\u5927\u503c\uff0c\u6240\u4ee5keyword\u5217\u4e2d\u6700\u7ec8\u4fdd\u7559\u4e86c\u3002"),(0,l.yg)("p",null,"\u518d\u5c1d\u8bd5\u5bfc\u5165\u5982\u4e0b\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-03-23      w\n")),(0,l.yg)("p",null,"\u67e5\u8be2\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-23  | w       |\n+---------+------------+----------+-------------+---------+\n")),(0,l.yg)("p",null,"\u6b64\u65f6\u5c31\u53ef\u4ee5\u66ff\u6362\u8868\u4e2d\u539f\u6709\u7684\u6570\u636e\u3002\u7efc\u4e0a\uff0c\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u6bd4\u8f83\u6240\u6709\u6279\u6b21\u7684sequence\u5217\u503c\uff0c\u9009\u62e9\u503c\u6700\u5927\u7684\u8bb0\u5f55\u5bfc\u5165Doris\u8868\u4e2d\u3002"))}d.isMDXComponent=!0}}]);