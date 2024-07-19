"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96463],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>h});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(n),u=a,h=g["".concat(s,".").concat(u)]||g[u]||d[u]||o;return n?t.createElement(h,l(l({ref:r},p),{},{components:n})):t.createElement(h,l({ref:r},p))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[g]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},586642:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const o={title:"\u57fa\u4e8e Arrow Flight SQL \u7684\u9ad8\u901f\u6570\u636e\u4f20\u8f93\u94fe\u8def",language:"zh-CN"},l=void 0,i={unversionedId:"db-connect/arrow-flight-sql-connect",id:"version-2.1/db-connect/arrow-flight-sql-connect",title:"\u57fa\u4e8e Arrow Flight SQL \u7684\u9ad8\u901f\u6570\u636e\u4f20\u8f93\u94fe\u8def",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/db-connect/arrow-flight-sql-connect.md",sourceDirName:"db-connect",slug:"/db-connect/arrow-flight-sql-connect",permalink:"/zh-CN/docs/db-connect/arrow-flight-sql-connect",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u57fa\u4e8e Arrow Flight SQL \u7684\u9ad8\u901f\u6570\u636e\u4f20\u8f93\u94fe\u8def",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u5e93\u8fde\u63a5",permalink:"/zh-CN/docs/db-connect/database-connect"},next:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/zh-CN/docs/table-design/data-type"}},s={},c=[{value:"\u7528\u9014",id:"\u7528\u9014",level:2},{value:"Python \u4f7f\u7528\u65b9\u6cd5",id:"python-\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5b89\u88c5 Library",id:"\u5b89\u88c5-library",level:3},{value:"\u8fde\u63a5 Doris",id:"\u8fde\u63a5-doris",level:3},{value:"\u5efa\u8868\u4e0e\u83b7\u53d6\u5143\u6570\u636e",id:"\u5efa\u8868\u4e0e\u83b7\u53d6\u5143\u6570\u636e",level:3},{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:3},{value:"\u6267\u884c\u67e5\u8be2",id:"\u6267\u884c\u67e5\u8be2",level:3},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:3},{value:"Jdbc Connector with Arrow Flight SQL",id:"jdbc-connector-with-arrow-flight-sql",level:2},{value:"Java \u4f7f\u7528\u65b9\u6cd5",id:"java-\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"ADBC Driver",id:"adbc-driver",level:3},{value:"JDBC Driver",id:"jdbc-driver",level:3},{value:"JDBC \u548c Java \u8fde\u63a5\u65b9\u5f0f\u7684\u9009\u62e9",id:"jdbc-\u548c-java-\u8fde\u63a5\u65b9\u5f0f\u7684\u9009\u62e9",level:3},{value:"\u4e0e\u5176\u4ed6\u5927\u6570\u636e\u7ec4\u4ef6\u4ea4\u4e92",id:"\u4e0e\u5176\u4ed6\u5927\u6570\u636e\u7ec4\u4ef6\u4ea4\u4e92",level:2},{value:"Spark &amp; Flink",id:"spark--flink",level:3},{value:"FAQ",id:"faq",level:2}],p={toc:c},g="wrapper";function d(e){let{components:r,...n}=e;return(0,a.yg)(g,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"since 2.1"))),(0,a.yg)("p",null,"Doris \u57fa\u4e8e Arrow Flight SQL \u534f\u8bae\u5b9e\u73b0\u4e86\u9ad8\u901f\u6570\u636e\u94fe\u8def\uff0c\u652f\u6301\u591a\u79cd\u8bed\u8a00\u4f7f\u7528 SQL \u4ece Doris \u9ad8\u901f\u8bfb\u53d6\u5927\u6279\u91cf\u6570\u636e\u3002"),(0,a.yg)("h2",{id:"\u7528\u9014"},"\u7528\u9014"),(0,a.yg)("p",null,"\u4ece Doris \u52a0\u8f7d\u5927\u6279\u91cf\u6570\u636e\u5230\u5176\u4ed6\u7ec4\u4ef6\uff0c\u5982 Python/Java/Spark/Flink\uff0c\u53ef\u4ee5\u4f7f\u7528\u57fa\u4e8e Arrow Flight SQL \u7684 ADBC/JDBC \u66ff\u4ee3\u8fc7\u53bb\u7684 JDBC/PyMySQL/Pandas \u6765\u83b7\u5f97\u66f4\u9ad8\u7684\u8bfb\u53d6\u6027\u80fd\uff0c\u8fd9\u5728\u6570\u636e\u79d1\u5b66\u3001\u6570\u636e\u6e56\u5206\u6790\u7b49\u573a\u666f\u4e2d\u7ecf\u5e38\u9047\u5230\u3002"),(0,a.yg)("p",null,"Apache Arrow Flight SQL \u662f\u4e00\u4e2a\u7531 Apache Arrow \u793e\u533a\u5f00\u53d1\u7684\u4e0e\u6570\u636e\u5e93\u7cfb\u7edf\u4ea4\u4e92\u7684\u534f\u8bae\uff0c\u7528\u4e8e ADBC \u5ba2\u6237\u7aef\u4f7f\u7528 Arrow \u6570\u636e\u683c\u5f0f\u4e0e\u5b9e\u73b0\u4e86 Arrow Flight SQL \u534f\u8bae\u7684\u6570\u636e\u5e93\u4ea4\u4e92\uff0c\u5177\u6709 Arrow Flight \u7684\u901f\u5ea6\u4f18\u52bf\u4ee5\u53ca JDBC/ODBC \u7684\u6613\u7528\u6027\u3002"),(0,a.yg)("p",null,"Doris \u652f\u6301 Arrow Flight SQL \u7684\u52a8\u673a\u3001\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u3001\u6027\u80fd\u6d4b\u8bd5\u7ed3\u679c\u3001\u4ee5\u53ca\u6709\u5173 Arrow Flight\u3001ADBC \u7684\u66f4\u591a\u6982\u5ff5\u53ef\u4ee5\u770b\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues/25514"},"GitHub Issue"),"\uff0c\u8fd9\u7bc7\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd Doris Arrow Flight SQL \u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u4ee5\u53ca\u4e00\u4e9b\u5e38\u89c1\u95ee\u9898\u3002"),(0,a.yg)("p",null,"\u5b89\u88c5Apache Arrow \u4f60\u53ef\u4ee5\u53bb\u5b98\u65b9\u6587\u6863(\n",(0,a.yg)("a",{parentName:"p",href:"https://arrow.apache.org/install/"},"Apache Arrow"),")\u627e\u5230\u8be6\u7ec6\u7684\u5b89\u88c5\u6559\u7a0b\u3002"),(0,a.yg)("h2",{id:"python-\u4f7f\u7528\u65b9\u6cd5"},"Python \u4f7f\u7528\u65b9\u6cd5"),(0,a.yg)("p",null,"\u4f7f\u7528 Python \u7684 ADBC Driver \u8fde\u63a5 Doris \u5b9e\u73b0\u6570\u636e\u7684\u6781\u901f\u8bfb\u53d6\uff0c\u4e0b\u9762\u7684\u6b65\u9aa4\u4f7f\u7528 Python\uff08\u7248\u672c >= 3.9\uff09\u7684 ADBC Driver \u6267\u884c\u4e00\u7cfb\u5217\u5e38\u89c1\u7684\u6570\u636e\u5e93\u8bed\u6cd5\u64cd\u4f5c\uff0c\u5305\u62ec DDL\u3001DML\u3001\u8bbe\u7f6e Session \u53d8\u91cf\u4ee5\u53ca Show \u8bed\u53e5\u7b49\u3002"),(0,a.yg)("h3",{id:"\u5b89\u88c5-library"},"\u5b89\u88c5 Library"),(0,a.yg)("p",null,"Library \u88ab\u53d1\u5e03\u5728 PyPI\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u7b80\u5355\u5b89\u88c5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"pip install adbc_driver_manager\npip install adbc_driver_flightsql\n")),(0,a.yg)("p",null,"\u5728\u4ee3\u7801\u4e2dimport \u4ee5\u4e0b\u6a21\u5757/\u5e93\u6765\u4f7f\u7528\u5df2\u5b89\u88c5\u7684 Library\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},"import adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\n")),(0,a.yg)("h3",{id:"\u8fde\u63a5-doris"},"\u8fde\u63a5 Doris"),(0,a.yg)("p",null,"\u521b\u5efa\u4e0e Doris Arrow Flight SQL \u670d\u52a1\u4ea4\u4e92\u7684\u5ba2\u6237\u7aef\u3002\u9700\u63d0\u4f9b Doris FE \u7684 Host\u3001Arrow Flight Port \u3001\u767b\u9646\u7528\u6237\u540d\u4ee5\u53ca\u5bc6\u7801\uff0c\u5e76\u8fdb\u884c\u4ee5\u4e0b\u914d\u7f6e\u3002\n\u4fee\u6539 Doris FE \u548c BE \u7684\u914d\u7f6e\u53c2\u6570\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4fee\u6539fe/conf/fe.conf \u4e2d arrow_flight_sql_port \u4e3a\u4e00\u4e2a\u53ef\u7528\u7aef\u53e3\uff0c\u5982 9090\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u6539 be/conf/be.conf\u4e2d arrow_flight_sql_port \u4e3a\u4e00\u4e2a\u53ef\u7528\u7aef\u53e3\uff0c\u5982 9091\u3002")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u6ce8: fe.conf \u4e0e be.conf \u4e2d\u914d\u7f6e\u7684 arrow_flight_sql_port \u4e0d\u76f8\u540c")),(0,a.yg)("p",null,"\u5047\u8bbe Doris \u5b9e\u4f8b\u4e2d FE \u548c BE \u7684 Arrow Flight SQL \u670d\u52a1\u5c06\u5206\u522b\u5728\u7aef\u53e3 9090 \u548c 9091 \u4e0a\u8fd0\u884c\uff0c\u4e14 Doris \u7528\u6237\u540d/\u5bc6\u7801\u4e3a\u201cuser\u201d/\u201cpass\u201d\uff0c\u90a3\u4e48\u8fde\u63a5\u8fc7\u7a0b\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},'conn = flight_sql.connect(uri="grpc://127.0.0.1:9090", db_kwargs={\n            adbc_driver_manager.DatabaseOptions.USERNAME.value: "user",\n            adbc_driver_manager.DatabaseOptions.PASSWORD.value: "pass",\n        })\ncursor = conn.cursor()\n')),(0,a.yg)("p",null,"\u8fde\u63a5\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 SQL \u4f7f\u8fd4\u56de\u7684 Cursor \u4e0e Doris \u4ea4\u4e92\uff0c\u6267\u884c\u4f8b\u5982\u5efa\u8868\u3001\u83b7\u53d6\u5143\u6570\u636e\u3001\u5bfc\u5165\u6570\u636e\u3001\u67e5\u8be2\u7b49\u64cd\u4f5c\u3002"),(0,a.yg)("h3",{id:"\u5efa\u8868\u4e0e\u83b7\u53d6\u5143\u6570\u636e"},"\u5efa\u8868\u4e0e\u83b7\u53d6\u5143\u6570\u636e"),(0,a.yg)("p",null,"\u5c06 Query \u4f20\u9012\u7ed9 cursor.execute\uff08\uff09\u51fd\u6570\uff0c\u6267\u884c\u5efa\u8868\u4e0e\u83b7\u53d6\u5143\u6570\u636e\u64cd\u4f5c\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},'cursor.execute("DROP DATABASE IF EXISTS arrow_flight_sql FORCE;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("create database arrow_flight_sql;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show databases;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("use arrow_flight_sql;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("""CREATE TABLE arrow_flight_sql_test\n    (\n         k0 INT,\n         k1 DOUBLE,\n         K2 varchar(32) NULL DEFAULT "" COMMENT "",\n         k3 DECIMAL(27,9) DEFAULT "0",\n         k4 BIGINT NULL DEFAULT \'10\',\n         k5 DATE,\n    )\n    DISTRIBUTED BY HASH(k5) BUCKETS 5\n    PROPERTIES("replication_num" = "1");""")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show create table arrow_flight_sql_test;")\nprint(cursor.fetchallarrow().to_pandas())\n')),(0,a.yg)("p",null,"\u5982\u679c StatusResult \u8fd4\u56de 0 \uff0c\u5219\u8bf4\u660e Query \u6267\u884c\u6210\u529f\uff08\u8fd9\u6837\u8bbe\u8ba1\u7684\u539f\u56e0\u662f\u4e3a\u4e86\u517c\u5bb9 JDBC\uff09\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"  StatusResult\n0            0\n\n  StatusResult\n0            0\n\n                   Database\n0         __internal_schema\n1          arrow_flight_sql\n..                      ...\n507             udf_auth_db\n\n[508 rows x 1 columns]\n\n  StatusResult\n0            0\n\n  StatusResult\n0            0\n                   Table                                       Create Table\n0  arrow_flight_sql_test  CREATE TABLE `arrow_flight_sql_test` (\\n  `k0`...\n")),(0,a.yg)("h3",{id:"\u5bfc\u5165\u6570\u636e"},"\u5bfc\u5165\u6570\u636e"),(0,a.yg)("p",null,"\u6267\u884c INSERT INTO\uff0c\u5411\u6240\u521b\u5efa\u8868\u4e2d\u5bfc\u5165\u5c11\u91cf\u6d4b\u8bd5\u6570\u636e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},"cursor.execute(\"\"\"INSERT INTO arrow_flight_sql_test VALUES\n        ('0', 0.1, \"ID\", 0.0001, 9999999999, '2023-10-21'),\n        ('1', 0.20, \"ID_1\", 1.00000001, 0, '2023-10-21'),\n        ('2', 3.4, \"ID_1\", 3.1, 123456, '2023-10-22'),\n        ('3', 4, \"ID\", 4, 4, '2023-10-22'),\n        ('4', 122345.54321, \"ID\", 122345.54321, 5, '2023-10-22');\"\"\")\nprint(cursor.fetchallarrow().to_pandas())\n")),(0,a.yg)("p",null,"\u5982\u4e0b\u6240\u793a\u5219\u8bc1\u660e\u5bfc\u5165\u6210\u529f\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"  StatusResult\n0            0\n")),(0,a.yg)("p",null,"\u5982\u679c\u9700\u8981\u5bfc\u5165\u5927\u6279\u91cf\u6570\u636e\u5230 Doris\uff0c\u53ef\u4ee5\u4f7f\u7528 pydoris \u6267\u884c Stream Load \u6765\u5b9e\u73b0\u3002"),(0,a.yg)("h3",{id:"\u6267\u884c\u67e5\u8be2"},"\u6267\u884c\u67e5\u8be2"),(0,a.yg)("p",null,"\u63a5\u7740\u5bf9\u4e0a\u9762\u5bfc\u5165\u7684\u8868\u8fdb\u884c\u67e5\u8be2\u67e5\u8be2\uff0c\u5305\u62ec\u805a\u5408\u3001\u6392\u5e8f\u3001Set Session Variable \u7b49\u64cd\u4f5c\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},'cursor.execute("select * from arrow_flight_sql_test order by k0;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("set exec_mem_limit=2000;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show variables like \\"%exec_mem_limit%\\";")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("select k5, sum(k1), count(1), avg(k3) from arrow_flight_sql_test group by k5;")\nprint(cursor.fetchallarrow().to_pandas())\n')),(0,a.yg)("p",null,"\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"   k0            k1    K2                k3          k4          k5\n0   0       0.10000    ID       0.000100000  9999999999  2023-10-21\n1   1       0.20000  ID_1       1.000000010           0  2023-10-21\n2   2       3.40000  ID_1       3.100000000      123456  2023-10-22\n3   3       4.00000    ID       4.000000000           4  2023-10-22\n4   4  122345.54321    ID  122345.543210000           5  2023-10-22\n\n[5 rows x 6 columns]\n\n  StatusResult\n0            0\n\n    Variable_name Value Default_Value Changed\n0  exec_mem_limit  2000    2147483648       1\n\n           k5  Nullable(Float64)_1  Int64_2 Nullable(Decimal(38, 9))_3\n0  2023-10-22         122352.94321        3            40784.214403333\n1  2023-10-21              0.30000        2                0.500050005\n\n[2 rows x 5 columns]\n")),(0,a.yg)("h3",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},'# Doris Arrow Flight SQL Test\n\n# step 1, library is released on PyPI and can be easily installed.\n# pip install adbc_driver_manager\n# pip install adbc_driver_flightsql\nimport adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\n\n# step 2, create a client that interacts with the Doris Arrow Flight SQL service.\n# Modify arrow_flight_sql_port in fe/conf/fe.conf to an available port, such as 9090.\n# Modify arrow_flight_sql_port in be/conf/be.conf to an available port, such as 9091.\nconn = flight_sql.connect(uri="grpc://127.0.0.1:9090", db_kwargs={\n            adbc_driver_manager.DatabaseOptions.USERNAME.value: "root",\n            adbc_driver_manager.DatabaseOptions.PASSWORD.value: "",\n        })\ncursor = conn.cursor()\n\n# interacting with Doris via SQL using Cursor\ndef execute(sql):\n    print("\\n### execute query: ###\\n " + sql)\n    cursor.execute(sql)\n    print("### result: ###")\n    print(cursor.fetchallarrow().to_pandas())\n\n# step3, execute DDL statements, create database/table, show stmt.\nexecute("DROP DATABASE IF EXISTS arrow_flight_sql FORCE;")\nexecute("show databases;")\nexecute("create database arrow_flight_sql;")\nexecute("show databases;")\nexecute("use arrow_flight_sql;")\nexecute("""CREATE TABLE arrow_flight_sql_test\n    (\n         k0 INT,\n         k1 DOUBLE,\n         K2 varchar(32) NULL DEFAULT "" COMMENT "",\n         k3 DECIMAL(27,9) DEFAULT "0",\n         k4 BIGINT NULL DEFAULT \'10\',\n         k5 DATE,\n    )\n    DISTRIBUTED BY HASH(k5) BUCKETS 5\n    PROPERTIES("replication_num" = "1");""")\nexecute("show create table arrow_flight_sql_test;")\n\n\n# step4, insert into\nexecute("""INSERT INTO arrow_flight_sql_test VALUES\n        (\'0\', 0.1, "ID", 0.0001, 9999999999, \'2023-10-21\'),\n        (\'1\', 0.20, "ID_1", 1.00000001, 0, \'2023-10-21\'),\n        (\'2\', 3.4, "ID_1", 3.1, 123456, \'2023-10-22\'),\n        (\'3\', 4, "ID", 4, 4, \'2023-10-22\'),\n        (\'4\', 122345.54321, "ID", 122345.54321, 5, \'2023-10-22\');""")\n\n\n# step5, execute queries, aggregation, sort, set session variable\nexecute("select * from arrow_flight_sql_test order by k0;")\nexecute("set exec_mem_limit=2000;")\nexecute("show variables like \\"%exec_mem_limit%\\";")\nexecute("select k5, sum(k1), count(1), avg(k3) from arrow_flight_sql_test group by k5;")\n\n# step6, close cursor \ncursor.close()\n')),(0,a.yg)("h2",{id:"jdbc-connector-with-arrow-flight-sql"},"Jdbc Connector with Arrow Flight SQL"),(0,a.yg)("p",null,"Arrow Flight SQL \u534f\u8bae\u7684\u5f00\u6e90 JDBC \u9a71\u52a8\u517c\u5bb9\u6807\u51c6\u7684 JDBC API\uff0c\u53ef\u7528\u4e8e\u5927\u591a\u6570 BI \u5de5\u5177\u901a\u8fc7 JDBC \u8bbf\u95ee Doris\uff0c\u5e76\u652f\u6301\u9ad8\u901f\u4f20\u8f93 Apache Arrow \u6570\u636e\u3002\u4f7f\u7528\u65b9\u6cd5\u4e0e\u901a\u8fc7 MySQL \u534f\u8bae\u7684 JDBC \u9a71\u52a8\u8fde\u63a5 Doris \u7c7b\u4f3c\uff0c\u53ea\u9700\u5c06\u94fe\u63a5 URL \u4e2d\u7684 jdbc:mysql \u534f\u8bae\u6362\u6210 jdbc:arrow-flight-sql\u534f\u8bae\uff0c\u67e5\u8be2\u8fd4\u56de\u7684\u7ed3\u679c\u4f9d\u7136\u662f JDBC \u7684 ResultSet \u6570\u636e\u7ed3\u6784\u3002"),(0,a.yg)("p",null,"POM dependency:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},"<properties>\n    <arrow.version>15.0.1</arrow.version>\n</properties>\n<dependencies>\n    <dependency>\n        <groupId>org.apache.arrow</groupId>\n        <artifactId>flight-sql-jdbc-core</artifactId>\n        <version>${arrow.version}</version>\n    </dependency>\n</dependencies>\n")),(0,a.yg)("p",null,"\u4f7f\u7528 Java 9 \u6216\u66f4\u9ad8\u7248\u672c\u65f6\uff0c\u5fc5\u987b\u901a\u8fc7\u5728 Java \u547d\u4ee4\u4e2d\u6dfb\u52a0 --add-opens=java.base/java.nio=org.apache.arrow.memory.core,ALL-UNNAMED \u6765\u66b4\u9732\u67d0\u4e9b JDK \u5185\u90e8\u7ed3\u6784\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'# Directly on the command line\n$ java --add-opens=java.base/java.nio=org.apache.arrow.memory.core,ALL-UNNAMED -jar ...\n# Indirectly via environment variables\n$ env _JAVA_OPTIONS="--add-opens=java.base/java.nio=org.apache.arrow.memory.core,ALL-UNNAMED" java -jar ...\n')),(0,a.yg)("p",null,"\u5426\u5219\uff0c\u60a8\u53ef\u80fd\u4f1a\u770b\u5230\u4e00\u4e9b\u9519\u8bef\uff0c\u5982 ",(0,a.yg)("inlineCode",{parentName:"p"},'module java.base does not "opens java.nio" to unnamed module')," \u6216\u8005 ",(0,a.yg)("inlineCode",{parentName:"p"},'module java.base does not "opens java.nio" to org.apache.arrow.memory.core')),(0,a.yg)("p",null,"\u8fde\u63a5\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.ResultSet;\nimport java.sql.Statement;\n\nClass.forName("org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver");\nString DB_URL = "jdbc:arrow-flight-sql://0.0.0.0:9090?useServerPrepStmts=false"\n        + "&cachePrepStmts=true&useSSL=false&useEncryption=false";\nString USER = "root";\nString PASS = "";\n\nConnection conn = DriverManager.getConnection(DB_URL, USER, PASS);\nStatement stmt = conn.createStatement();\nResultSet resultSet = stmt.executeQuery("select * from information_schema.tables;");\nwhile (resultSet.next()) {\n    System.out.println(resultSet.toString());\n}\n\nresultSet.close();\nstmt.close();\nconn.close();\n')),(0,a.yg)("h2",{id:"java-\u4f7f\u7528\u65b9\u6cd5"},"Java \u4f7f\u7528\u65b9\u6cd5"),(0,a.yg)("p",null,"\u9664\u4e86\u4f7f\u7528 JDBC\uff0c\u4e0e Python \u7c7b\u4f3c\uff0cJava \u4e5f\u53ef\u4ee5\u521b\u5efa Driver \u8bfb\u53d6 Doris \u5e76\u8fd4\u56de Arrow \u683c\u5f0f\u7684\u6570\u636e\uff0c\u4e0b\u9762\u5206\u522b\u662f\u4f7f\u7528 AdbcDriver \u548c JdbcDriver \u8fde\u63a5 Doris Arrow Flight Server\u3002"),(0,a.yg)("p",null,"POM dependency:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},"<properties>\n    <adbc.version>0.12.0</adbc.version>\n</properties>\n\n<dependencies>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-driver-jdbc</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-core</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-driver-manager</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-sql</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n</dependencies>\n")),(0,a.yg)("h3",{id:"adbc-driver"},"ADBC Driver"),(0,a.yg)("p",null,"\u8fde\u63a5\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},'// 1. new driver\nfinal BufferAllocator allocator = new RootAllocator();\nFlightSqlDriver driver = new FlightSqlDriver(allocator);\nMap<String, Object> parameters = new HashMap<>();\nAdbcDriver.PARAM_URI.set(parameters, Location.forGrpcInsecure("0.0.0.0", 9090).getUri().toString());\nAdbcDriver.PARAM_USERNAME.set(parameters, "root");\nAdbcDriver.PARAM_PASSWORD.set(parameters, "");\nAdbcDatabase adbcDatabase = driver.open(parameters);\n\n// 2. new connection\nAdbcConnection connection = adbcDatabase.connect();\nAdbcStatement stmt = connection.createStatement();\n\n// 3. execute query\nstmt.setSqlQuery("select * from information_schema.tables;");\nQueryResult queryResult = stmt.executeQuery();\nArrowReader reader = queryResult.getReader();\n\n// 4. load result\nList<String> result = new ArrayList<>();\nwhile (reader.loadNextBatch()) {\n    VectorSchemaRoot root = reader.getVectorSchemaRoot();\n    String tsvString = root.contentToTSVString();\n    result.add(tsvString);\n}\nSystem.out.printf("batchs %d\\n", result.size());\n\n// 5. close\nreader.close();\nqueryResult.close();\nstmt.close();\nconnection.close();\n')),(0,a.yg)("h3",{id:"jdbc-driver"},"JDBC Driver"),(0,a.yg)("p",null,"\u8fde\u63a5\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Java"},'final Map<String, Object> parameters = new HashMap<>();\nAdbcDriver.PARAM_URI.set(\n        parameters,"jdbc:arrow-flight-sql://0.0.0.0:9090?useServerPrepStmts=false&cachePrepStmts=true&useSSL=false&useEncryption=false");\nAdbcDriver.PARAM_USERNAME.set(parameters, "root");\nAdbcDriver.PARAM_PASSWORD.set(parameters, "");\ntry (\n        BufferAllocator allocator = new RootAllocator();\n        AdbcDatabase db = new JdbcDriver(allocator).open(parameters);\n        AdbcConnection connection = db.connect();\n        AdbcStatement stmt = connection.createStatement()\n) {\n    stmt.setSqlQuery("select * from information_schema.tables;");\n    AdbcStatement.QueryResult queryResult = stmt.executeQuery();\n    ArrowReader reader = queryResult.getReader();\n    List<String> result = new ArrayList<>();\n    while (reader.loadNextBatch()) {\n        VectorSchemaRoot root = reader.getVectorSchemaRoot();\n        String tsvString = root.contentToTSVString();\n        result.add(tsvString);\n    }\n    long etime = System.currentTimeMillis();\n    System.out.printf("batchs %d\\n", result.size());\n\n    reader.close();\n    queryResult.close();\n    stmt.close();\n}  catch (Exception e) {\n    e.printStackTrace();\n}\n')),(0,a.yg)("h3",{id:"jdbc-\u548c-java-\u8fde\u63a5\u65b9\u5f0f\u7684\u9009\u62e9"},"JDBC \u548c Java \u8fde\u63a5\u65b9\u5f0f\u7684\u9009\u62e9"),(0,a.yg)("p",null,"\u5bf9\u6bd4\u4f20\u7edf\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc:mysql")," \u8fde\u63a5\u65b9\u5f0f\uff0cJdbc \u548c Java \u7684 Arrow Flight SQL \u8fde\u63a5\u65b9\u5f0f\u7684\u6027\u80fd\u6d4b\u8bd5\u89c1 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues/25514"},"GitHub Issue"),"\uff0c\u8fd9\u91cc\u57fa\u4e8e\u6d4b\u8bd5\u7ed3\u8bba\u7ed9\u51fa\u4e00\u4e9b\u4f7f\u7528\u5efa\u8bae\u3002"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4e0a\u8ff0\u4e09\u79cd Java Arrow Flight SQL \u8fde\u63a5\u65b9\u5f0f\u7684\u9009\u62e9\u4e0a\uff0c\u5982\u679c\u540e\u7eed\u7684\u6570\u636e\u5206\u6790\u5c06\u57fa\u4e8e\u884c\u5b58\u7684\u6570\u636e\u683c\u5f0f\uff0c\u90a3\u4e48\u4f7f\u7528 jdbc:arrow-flight-sql\uff0c\u8fd9\u5c06\u8fd4\u56de JDBC ResultSet \u683c\u5f0f\u7684\u6570\u636e\uff1b\u5982\u679c\u540e\u7eed\u7684\u6570\u636e\u5206\u6790\u53ef\u4ee5\u57fa\u4e8e Arrow \u683c\u5f0f\u6216\u5176\u4ed6\u5217\u5b58\u6570\u636e\u683c\u5f0f\uff0c\u90a3\u4e48\u4f7f\u7528 Flight AdbcDriver \u6216 Flight JdbcDriver \u76f4\u63a5\u8fd4\u56de Arrow \u683c\u5f0f\u7684\u6570\u636e\uff0c\u8fd9\u5c06\u907f\u514d\u884c\u5217\u8f6c\u6362\uff0c\u5e76\u53ef\u5229\u7528 Arrow \u7684\u7279\u6027\u52a0\u901f\u6570\u636e\u89e3\u6790\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u65e0\u8bba\u89e3\u6790 JDBC ResultSet \u8fd8\u662f Arrow \u683c\u5f0f\u7684\u6570\u636e\uff0c\u6240\u8017\u8d39\u7684\u65f6\u95f4\u90fd\u5927\u4e8e\u8bfb\u53d6\u6570\u636e\u7684\u8017\u65f6\uff0c\u5982\u679c\u4f60\u90a3\u91cc\u4f7f\u7528 Aroow Flight SQL \u7684\u6027\u80fd\u4e0d\u7b26\u5408\u9884\u671f\uff0c\u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc:mysql://")," \u76f8\u6bd4\u63d0\u5347\u6709\u9650\uff0c\u4e0d\u59a8\u5206\u6790\u4e0b\u662f\u5426\u89e3\u6790\u6570\u636e\u8017\u65f6\u592a\u957f\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5bf9\u6240\u6709\u8fde\u63a5\u65b9\u5f0f\u800c\u8a00\uff0cJDK 17 \u90fd\u6bd4 JDK 1.8 \u8bfb\u53d6\u6570\u636e\u7684\u901f\u5ea6\u66f4\u5feb\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5f53\u8bfb\u53d6\u6570\u636e\u91cf\u975e\u5e38\u5927\u65f6\uff0c\u4f7f\u7528 Arrow Flight SQL \u5c06\u6bd4 ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc:mysql://")," \u4f7f\u7528\u66f4\u5c11\u7684\u5185\u5b58\uff0c\u6240\u4ee5\u5982\u679c\u4f60\u53d7\u5185\u5b58\u4e0d\u8db3\u56f0\u6270\uff0c\u540c\u6837\u53ef\u4ee5\u5c1d\u8bd5\u4e0b Arrow Flight SQL\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u9664\u4e86\u4e0a\u8ff0\u4e09\u79cd\u8fde\u63a5\u65b9\u5f0f\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u539f\u751f\u7684 FlightClient \u8fde\u63a5 Arrow Flight Server\uff0c\u53ef\u4ee5\u66f4\u52a0\u7075\u6d3b\u7684\u5e76\u884c\u8bfb\u53d6\u591a\u4e2a Endpoints\u3002Flight AdbcDriver\u4e5f\u662f\u57fa\u4e8e FlightClient \u521b\u5efa\u7684\u94fe\u63a5\uff0c\u76f8\u8f83\u4e8e\u76f4\u63a5\u4f7f\u7528 FlightClient \u66f4\u7b80\u5355\u3002"))),(0,a.yg)("h2",{id:"\u4e0e\u5176\u4ed6\u5927\u6570\u636e\u7ec4\u4ef6\u4ea4\u4e92"},"\u4e0e\u5176\u4ed6\u5927\u6570\u636e\u7ec4\u4ef6\u4ea4\u4e92"),(0,a.yg)("h3",{id:"spark--flink"},"Spark & Flink"),(0,a.yg)("p",null,"Arrow Flight \u5b98\u65b9\u76ee\u524d\u6ca1\u6709\u652f\u6301 Spark \u548c Flink \u7684\u8ba1\u5212\uff08\u89c1 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/arrow-adbc/issues/1490"},"GitHub Issue"),"\uff09\uff0c","[Doris Spark Connector]"," (",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-spark-connector)%EF%BC%89%E5%92%8C"},"https://github.com/apache/doris-spark-connector)\uff09\u548c")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-flink-connector"},"Doris Flink Connector")," \u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u901a\u8fc7 Arrow Flight SQL \u8bbf\u95ee Doris\u3002\u5176\u4e2d Doris Flink Connector \u652f\u6301 Arrow Flight SQL \u6b63\u5728\u5f00\u53d1\u4e2d\uff0c\u9884\u671f\u80fd\u63d0\u5347\u6570\u500d\u8bfb\u53d6\u6027\u80fd\u3002"),(0,a.yg)("p",null,"\u793e\u533a\u4e4b\u524d\u53c2\u8003\u5f00\u6e90\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/qwshen/spark-flight-connector"},"Spark-Flight-Connector"),"\uff09\uff0c\u5728 Spark \u4e2d\u4f7f\u7528 FlightClient \u8fde\u63a5 Doris \u6d4b\u8bd5\uff0c\u53d1\u73b0 Arrow \u4e0e Doris Block \u4e4b\u95f4\u6570\u636e\u683c\u5f0f\u8f6c\u6362\u7684\u901f\u5ea6\u66f4\u5feb\uff0c\u662f CSV \u683c\u5f0f\u4e0e Doris Block \u4e4b\u95f4\u8f6c\u6362\u901f\u5ea6\u7684 10 \u500d\uff0c\u800c\u4e14\u5bf9 Map\uff0cArray \u7b49\u590d\u6742\u7c7b\u578b\u7684\u652f\u6301\u66f4\u597d\uff0c\u8fd9\u662f\u56e0\u4e3aArrow \u6570\u636e\u683c\u5f0f\u7684\u538b\u7f29\u7387\u9ad8\uff0c\u4f20\u8f93\u65f6\u7f51\u7edc\u5f00\u9500\u5c0f\u3002\u4e0d\u8fc7\u76ee\u524d Doris Arrow Flight \u8fd8\u6ca1\u6709\u5b9e\u73b0\u591a\u8282\u70b9\u5e76\u884c\u8bfb\u53d6\uff0c\u4ecd\u662f\u5c06\u67e5\u8be2\u7ed3\u679c\u6c47\u603b\u5230\u4e00\u53f0 BE \u8282\u70b9\u540e\u8fd4\u56de\uff0c\u5bf9\u7b80\u5355\u7684\u6279\u91cf\u5bfc\u51fa\u6570\u636e\u800c\u8a00\uff0c\u6027\u80fd\u53ef\u80fd\u6ca1\u6709 Doris Spark Connector \u5feb\uff0c\u540e\u8005\u652f\u6301 Tablet \u7ea7\u522b\u7684\u5e76\u884c\u8bfb\u53d6\u3002\u5982\u679c\u4f60\u5e0c\u671b\u5728 Spark \u4f7f\u7528 Arrow Flight SQL \u8fde\u63a5 Doris\uff0c\u53ef\u4ee5\u53c2\u8003\u5f00\u6e90\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/qwshen/spark-flight-connector"},"Spark-Flight-Connector")," \u548c ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/dremio-hub/dremio-flight-connector"},"Dremio-Flight-Connector")," \u81ea\u884c\u5b9e\u73b0\u3002"),(0,a.yg)("h2",{id:"faq"},"FAQ"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"ARM \u73af\u5883\u62a5\u9519 ",(0,a.yg)("inlineCode",{parentName:"li"},"get flight info statement failed, arrow flight schema timeout, TimeoutException: Waited 5000 milliseconds for io.grpc.stub.Client"),"\uff0c\u5982\u679c Linux \u5185\u6838\u7248\u672c <= 4.19.90\uff0c\u9700\u8981\u5347\u7ea7\u5230 4.19.279 \u53ca\u4ee5\u4e0a\uff0c\u6216\u8005\u5728\u4f4e\u7248\u672c Linux \u5185\u6838\u7684\u73af\u5883\u4e2d\u91cd\u65b0\u7f16\u8bd1 Doris BE\uff0c\u5177\u4f53\u7f16\u8bd1\u65b9\u6cd5\u53c2\u8003\u6587\u6863<docs/dev/install/source-install/compilation-arm>")),(0,a.yg)("p",null,"\u95ee\u9898\u539f\u56e0\uff1a\u8fd9\u662f\u56e0\u4e3a\u8001\u7248\u672c Linux \u5185\u6838\u548c Arrow \u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"cpp: arrow::RecordBatch::MakeEmpty()")," \u6784\u9020 Arrow Record Batch \u65f6\u4f1a\u5361\u4f4f\uff0c\u5bfc\u81f4 Doris BE \u7684 Arrow Flight Server \u5728 5000ms \u5185\u6ca1\u6709\u56de\u5e94 Doris FE \u7684 Arrow Flight Server \u7684 RPC \u8bf7\u6c42\uff0c\u5bfc\u81f4 FE \u7ed9 Client \u8fd4\u56de rpc timeout failed\u3002Spark \u548c Flink \u8bfb\u53d6 Doris \u65f6\u4e5f\u662f\u5c06\u67e5\u8be2\u7ed3\u679c\u8f6c\u6362\u6210 Arrow Record Batch \u540e\u8fd4\u56de\uff0c\u6240\u4ee5\u4e5f\u5b58\u5728\u540c\u6837\u7684\u95ee\u9898\u3002"),(0,a.yg)("p",null,"kylinv10 SP2 \u548c SP3 \u7684 Linux \u5185\u6838\u7248\u672c\u6700\u9ad8\u53ea\u6709 4.19.90-24.4.v2101.ky10.aarch64\uff0c\u65e0\u6cd5\u7ee7\u7eed\u5347\u7ea7\u5185\u6838\u7248\u672c\uff0c\u53ea\u80fd\u5728 kylinv10 \u4e0a\u91cd\u65b0\u7f16\u8bd1 Doris BE\uff0c\u5982\u679c\u4f7f\u7528\u65b0\u7248\u672c ldb_toolchain \u7f16\u8bd1 Doris  BE \u540e\u95ee\u9898\u4f9d\u7136\u5b58\u5728\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528\u4f4e\u7248\u672c ldb_toolchain v0.17 \u7f16\u8bd1\uff0c\u5982\u679c\u4f60\u7684 ARM \u73af\u5883\u65e0\u6cd5\u8fde\u5916\u7f51\uff0c\u534e\u4e3a\u4e91\u63d0\u4f9b ARM + kylinv10\uff0c\u963f\u91cc\u4e91\u63d0\u4f9b x86 + kylinv10"),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u76ee\u524d ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc:arrow-flight-sql")," \u548c Java ADBC/JDBCDriver \u4e0d\u652f\u6301 prepared statement \u4f20\u9012\u53c2\u6570\uff0c\u7c7b\u4f3c",(0,a.yg)("inlineCode",{parentName:"p"},"select * from xxx where id=?"),"\uff0c\u5c06\u62a5\u9519 ",(0,a.yg)("inlineCode",{parentName:"p"},"parameter ordinal 1 out of range"),"\uff0c\u8fd9\u662f Arrow Flight SQL \u7684\u4e00\u4e2aBUG\uff08",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/arrow/issues/40118"},"GitHub Issue"),"\uff09")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc:arrow-flight-sql")," \u6bcf\u6b21\u8bfb\u53d6\u7684\u6279\u6b21\u5927\u5c0f\uff0c\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u53ef\u4ee5\u63d0\u5347\u6027\u80fd\uff0c\u901a\u8fc7\u4fee\u6539",(0,a.yg)("inlineCode",{parentName:"p"},"org.apache.arrow.adbc.driver.jdbc.JdbcArrowReader"),"\u6587\u4ef6\u4e2d",(0,a.yg)("inlineCode",{parentName:"p"},"makeJdbcConfig"),"\u65b9\u6cd5\u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"setTargetBatchSize"),"\uff0c\u9ed8\u8ba4\u662f1024\uff0c\u7136\u540e\u5c06\u4fee\u6539\u540e\u7684\u6587\u4ef6\u4fdd\u5b58\u5230\u672c\u5730\u540c\u540d\u8def\u5f84\u76ee\u5f55\u4e0b\uff0c\u4ece\u800c\u8986\u76d6\u539f\u6587\u4ef6\u751f\u6548\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"ADBC v0.10\uff0cJDBC \u548c Java ADBC/JDBCDriver \u8fd8\u4e0d\u652f\u6301\u5e76\u884c\u8bfb\u53d6\uff0c\u6ca1\u6709\u5b9e\u73b0",(0,a.yg)("inlineCode",{parentName:"p"},"stmt.executePartitioned()"),"\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u53ea\u80fd\u4f7f\u7528\u539f\u751f\u7684 FlightClient \u5b9e\u73b0\u5e76\u884c\u8bfb\u53d6\u591a\u4e2a Endpoints, \u4f7f\u7528\u65b9\u6cd5",(0,a.yg)("inlineCode",{parentName:"p"},"sqlClient=new FlightSqlClient, execute=sqlClient.execute(sql), endpoints=execute.getEndpoints(), for(FlightEndpoint endpoint: endpoints)"),"\uff0c\u6b64\u5916\uff0cADBC V0.10 \u9ed8\u8ba4\u7684AdbcStatement\u5b9e\u9645\u662fJdbcStatement\uff0cexecuteQuery\u540e\u5c06\u884c\u5b58\u683c\u5f0f\u7684 JDBC ResultSet \u53c8\u91cd\u65b0\u8f6c\u6210\u7684Arrow\u5217\u5b58\u683c\u5f0f\uff0c\u9884\u671f\u5230 ADBC 1.0.0 \u65f6 Java ADBC \u5c06\u529f\u80fd\u5b8c\u5584 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/arrow-adbc/issues/1490"},"GitHub Issue"),"\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u622a\u6b62Arrow v15.0\uff0cArrow JDBC Connector \u4e0d\u652f\u6301\u5728 URL \u4e2d\u6307\u5b9a database name\uff0c\u6bd4\u5982 ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc:arrow-flight-sql://0.0.0.0:9090/test?useServerPrepStmts=false")," \u4e2d\u6307\u5b9a\u8fde\u63a5",(0,a.yg)("inlineCode",{parentName:"p"},"test")," database\u65e0\u6548\uff0c\u53ea\u80fd\u624b\u52a8\u6267\u884cSQL ",(0,a.yg)("inlineCode",{parentName:"p"},"use database"),"\u3002"))))}d.isMDXComponent=!0}}]);