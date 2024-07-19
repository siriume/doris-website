"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[81647],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>p});var t=a(296540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),g=i,p=d["".concat(s,".").concat(g)]||d[g]||m[g]||l;return a?t.createElement(p,r(r({ref:n},c),{},{components:a})):t.createElement(p,r({ref:n},c))}));function p(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=a[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},184559:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=a(58168),i=(a(296540),a(15680));const l={title:"Using AUTO_INCREMENT",language:"en"},r=void 0,o={unversionedId:"table-design/auto-increment",id:"table-design/auto-increment",title:"Using AUTO_INCREMENT",description:"\x3c!--",source:"@site/docs/table-design/auto-increment.md",sourceDirName:"table-design",slug:"/table-design/auto-increment",permalink:"/docs/dev/table-design/auto-increment",draft:!1,tags:[],version:"current",frontMatter:{title:"Using AUTO_INCREMENT",language:"en"},sidebar:"docs",previous:{title:"N-Gram BloomFilter Index",permalink:"/docs/dev/table-design/index/ngram-bloomfilter-index"},next:{title:"Best Practices",permalink:"/docs/dev/table-design/best-practice"}},s={},u=[{value:"Functionality",id:"functionality",level:2},{value:"Uniqueness",id:"uniqueness",level:3},{value:"Density",id:"density",level:3},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:3},{value:"Constraints and Limitations",id:"constraints-and-limitations",level:3},{value:"Usage",id:"usage",level:2},{value:"Import",id:"import",level:3},{value:"Partial Update",id:"partial-update",level:3},{value:"Usage Scenarios",id:"usage-scenarios",level:2},{value:"Dictionary Encoding",id:"dictionary-encoding",level:3},{value:"Efficient Pagination",id:"efficient-pagination",level:3}],c={toc:u},d="wrapper";function m(e){let{components:n,...a}=e;return(0,i.yg)(d,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"When importing data, Doris assigns a table-unique value to rows that do not have specified values in the auto-increment column."),(0,i.yg)("h2",{id:"functionality"},"Functionality"),(0,i.yg)("p",null,"For tables containing an auto-increment column, during data import:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If the target columns don't include the auto-increment column, Doris will populate the auto-increment column with generated values."),(0,i.yg)("li",{parentName:"ul"},"If the target columns include the auto-increment column, null values in the imported data for that column will be replaced by values generated by Doris, while non-null values will remain unchanged. Note that ",(0,i.yg)("strong",{parentName:"li"},"non-null values can disrupt the uniqueness of the auto-increment column values"),".")),(0,i.yg)("h3",{id:"uniqueness"},"Uniqueness"),(0,i.yg)("p",null,"Doris ensures that values generated on the auto-increment column have ",(0,i.yg)("strong",{parentName:"p"},"table-wide uniqueness"),". However, it's important to note that ",(0,i.yg)("strong",{parentName:"p"},"the uniqueness of the auto-increment column only guarantees uniqueness for values automatically filled by Doris and does not consider values provided by users"),". If a user explicitly inserts user-provided values for this table by specifying the auto-increment column, this uniqueness cannot be guaranteed."),(0,i.yg)("h3",{id:"density"},"Density"),(0,i.yg)("p",null,"Doris ensures that the values generated on the auto-increment column are dense, but it ",(0,i.yg)("strong",{parentName:"p"},"cannot guarantee")," that the values automatically generated in the auto-increment column during an import will be entirely contiguous. Thus, there might be some jumps in the values generated by the auto-increment column during an import. This is because, for performance consideration, each BE caches a portion of pre-allocated auto-increment column values, and these cached values do not intersect between different BEs. Additionally, due to this caching mechanism, Doris cannot guarantee that the values automatically generated on the auto-increment column in a later import on the physical timeline will be larger than those from the previous import. Therefore, the values allocated by the auto-increment column cannot be used to determine the chronological order of imports."),(0,i.yg)("h2",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,"To use auto-increment columns, you need to add the ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTO_INCREMENT")," attribute to the corresponding column during table creation (",(0,i.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE-TABLE"),"). To manually specify the starting value for an auto-increment column, you can do so by using the ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTO_INCREMENT(start_value)")," statement when creating the table. If not specified, the default starting value is 1."),(0,i.yg)("h3",{id:"examples"},"Examples"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Creating a Duplicate table with one key column as an auto-increment column:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n        `id` BIGINT NOT NULL AUTO_INCREMENT,\n        `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Creating a Duplicate table with one key column as an auto-increment column, and set start value is 100:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n      `id` BIGINT NOT NULL AUTO_INCREMENT(100),\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Creating a Duplicate table with one value column as an auto-increment column:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n    `uid` BIGINT NOT NULL,\n    `name` BIGINT NOT NULL,\n    `id` BIGINT NOT NULL AUTO_INCREMENT,\n    `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`uid`, `name`)\nDISTRIBUTED BY HASH(`uid`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Creating a Unique tbl table with one key column as an auto-increment column:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `name` varchar(65533) NOT NULL,\n      `value` int(11) NOT NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "true"\n);\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Creating a Unique tbl table with one value column as an auto-increment column:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n      `text` varchar(65533) NOT NULL,\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n) ENGINE=OLAP\nUNIQUE KEY(`text`)\nDISTRIBUTED BY HASH(`text`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "true"\n);\n')))),(0,i.yg)("h3",{id:"constraints-and-limitations"},"Constraints and Limitations"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Only Duplicate model tables and Unique model tables can contain auto-increment columns."),(0,i.yg)("li",{parentName:"ul"},"A table can contain at most one auto-increment column."),(0,i.yg)("li",{parentName:"ul"},"The type of the auto-increment column must be BIGINT and must be NOT NULL."),(0,i.yg)("li",{parentName:"ul"},"The manually specified starting value for an auto-increment column must be greater than or equal to 0.")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("h3",{id:"import"},"Import"),(0,i.yg)("p",null,"Consider the following table:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n    `id` BIGINT NOT NULL AUTO_INCREMENT,\n    `name` varchar(65533) NOT NULL,\n    `value` int(11) NOT NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "true"\n);\n')),(0,i.yg)("p",null,"When using the insert into statement to import data without specifying the auto-increment column ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),", the ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," column will automatically be filled with generated values."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into tbl(name, value) values(\"Bob\", 10), (\"Alice\", 20), (\"Jack\", 30);\nQuery OK, 3 rows affected (0.09 sec)\n{'label':'label_183babcb84ad4023_a2d6266ab73fb5aa', 'status':'VISIBLE', 'txnId':'7'}\n\nmysql> select * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n+------+-------+-------+\n3 rows in set (0.05 sec)\n")),(0,i.yg)("p",null,"Similarly, using stream load to import the file test.csv without specifying the auto-increment column ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," will result in the id column being automatically filled with generated values."),(0,i.yg)("p",null,"test.csv:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Tom, 40\nJohn, 50\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "columns:name,value" -H "column_separator:," -T ./test1.csv http://{host}:{port}/api/{db}/tbl/_stream_load\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n|    4 | Tom   |    40 |\n|    5 | John  |    50 |\n+------+-------+-------+\n5 rows in set (0.04 sec)\n")),(0,i.yg)("p",null,"When importing using insert into statement while specifying the auto-increment column ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),", null values in the imported data for that column will be replaced by generated values."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into tbl(id, name, value) values(null, \"Doris\", 60), (null, \"Nereids\", 70);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_9cb0c01db1a0402c_a2b8b44c11ce4703', 'status':'VISIBLE', 'txnId':'10'}\n\nmysql> select * from tbl order by id;\n+------+---------+-------+\n| id   | name    | value |\n+------+---------+-------+\n|    1 | Bob     |    10 |\n|    2 | Alice   |    20 |\n|    3 | Jack    |    30 |\n|    4 | Tom     |    40 |\n|    5 | John    |    50 |\n|    6 | Doris   |    60 |\n|    7 | Nereids |    70 |\n+------+---------+-------+\n7 rows in set (0.04 sec)\n")),(0,i.yg)("h3",{id:"partial-update"},"Partial Update"),(0,i.yg)("p",null,"When performing a partial update on a merge-on-write Unique table containing an auto-increment column:"),(0,i.yg)("p",null,"If the auto-increment column is a key column, during partial updates, as users must explicitly specify the key column, the target columns for partial column updates must include the auto-increment column. In this scenario, the import behavior is similar to regular partial updates."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE TABLE `demo`.`tbl2` (\n    ->     `id` BIGINT NOT NULL AUTO_INCREMENT,\n    ->     `name` varchar(65533) NOT NULL,\n    ->     `value` int(11) NOT NULL DEFAULT \"0\"\n    -> ) ENGINE=OLAP\n    -> UNIQUE KEY(`id`)\n    -> DISTRIBUTED BY HASH(`id`) BUCKETS 10\n    -> PROPERTIES (\n    -> \"replication_allocation\" = \"tag.location.default: 3\",\n    -> \"enable_unique_key_merge_on_write\" = \"true\"\n    -> );\nQuery OK, 0 rows affected (0.03 sec)\n\nmysql> insert into tbl2(id, name, value) values(1, \"Bob\", 10), (2, \"Alice\", 20), (3, \"Jack\", 30);\nQuery OK, 3 rows affected (0.14 sec)\n{'label':'label_5538549c866240b6_bce75ef323ac22a0', 'status':'VISIBLE', 'txnId':'1004'}\n\nmysql> select * from tbl2 order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n+------+-------+-------+\n3 rows in set (0.08 sec)\n\nmysql> set enable_unique_key_partial_update=true;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> set enable_insert_strict=false;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> insert into tbl2(id, name) values(1, \"modified\"), (4, \"added\");\nQuery OK, 2 rows affected (0.06 sec)\n{'label':'label_3e68324cfd87457d_a6166cc0a878cfdc', 'status':'VISIBLE', 'txnId':'1005'}\n\nmysql> select * from tbl2 order by id;\n+------+----------+-------+\n| id   | name     | value |\n+------+----------+-------+\n|    1 | modified |    10 |\n|    2 | Alice    |    20 |\n|    3 | Jack     |    30 |\n|    4 | added    |     0 |\n+------+----------+-------+\n4 rows in set (0.04 sec)\n")),(0,i.yg)("p",null,"When the auto-increment column is a non-key column and users haven't specified the value for the auto-increment column, the value will be filled from existing data rows in the table. If users specify the auto-increment column, null values in the imported data for that column will be replaced by generated values, while non-null values will remain unchanged, and then these data will be loaded with the semantics of partial updates."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE TABLE `demo`.`tbl3` (\n    ->     `id` BIGINT NOT NULL,\n    ->     `name` varchar(100) NOT NULL,\n    ->     `score` BIGINT NOT NULL,\n    ->     `aid` BIGINT NOT NULL AUTO_INCREMENT\n    -> ) ENGINE=OLAP\n    -> UNIQUE KEY(`id`)\n    -> DISTRIBUTED BY HASH(`id`) BUCKETS 1\n    -> PROPERTIES (\n    -> \"replication_allocation\" = \"tag.location.default: 3\",\n    -> \"enable_unique_key_merge_on_write\" = \"true\"\n    -> );\nQuery OK, 0 rows affected (0.16 sec)\n\nmysql> insert into tbl3(id, name, score) values(1, \"Doris\", 100), (2, \"Nereids\", 200), (3, \"Bob\", 300);\nQuery OK, 3 rows affected (0.28 sec)\n{'label':'label_c52b2c246e244dda_9b91ee5e27a31f9b', 'status':'VISIBLE', 'txnId':'2003'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   100 |    0 |\n|    2 | Nereids |   200 |    1 |\n|    3 | Bob     |   300 |    2 |\n+------+---------+-------+------+\n3 rows in set (0.13 sec)\n\nmysql> set enable_unique_key_partial_update=true;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> set enable_insert_strict=false;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> insert into tbl3(id, score) values(1, 999), (2, 888);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_dfec927d7a4343ca_9f9ade581391de97', 'status':'VISIBLE', 'txnId':'2004'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   999 |    0 |\n|    2 | Nereids |   888 |    1 |\n|    3 | Bob     |   300 |    2 |\n+------+---------+-------+------+\n3 rows in set (0.06 sec)\n\nmysql> insert into tbl3(id, aid) values(1, 1000), (3, 500);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_b26012959f714f60_abe23c87a06aa0bf', 'status':'VISIBLE', 'txnId':'2005'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   999 | 1000 |\n|    2 | Nereids |   888 |    1 |\n|    3 | Bob     |   300 |  500 |\n+------+---------+-------+------+\n3 rows in set (0.06 sec)\n")),(0,i.yg)("h2",{id:"usage-scenarios"},"Usage Scenarios"),(0,i.yg)("h3",{id:"dictionary-encoding"},"Dictionary Encoding"),(0,i.yg)("p",null,"Using bitmaps for audience analysis in user profile requires building a user dictionary where each user corresponds to a unique integer dictionary value. Aggregating these dictionary values can improve the performance of bitmap."),(0,i.yg)("p",null,"Taking the offline UV and PV analysis scenario as an example, assuming there's a detailed user behavior table:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`dwd_dup_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `dim1` varchar(50) NOT NULL,\n    `dim2` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim4` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `visit_time` DATE NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,i.yg)("p",null,"Using the auto-incrementa column to create the following dictionary table:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`dictionary_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `aid` BIGINT NOT NULL AUTO_INCREMENT\n) ENGINE=OLAP\nUNIQUE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "true"\n);\n')),(0,i.yg)("p",null,"Import the value of ",(0,i.yg)("inlineCode",{parentName:"p"},"user_id")," from existing data into the dictionary table, establishing the mapping of ",(0,i.yg)("inlineCode",{parentName:"p"},"user_id")," to integer values:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"insert into dictionary_tbl(user_id)\nselect user_id from dwd_dup_tbl group by user_id;\n")),(0,i.yg)("p",null,"Or import only the value of ",(0,i.yg)("inlineCode",{parentName:"p"},"user_id")," in incrementa data into the dictionary table alternatively:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"insert into dictionary_tbl(user_id)\nselect dwd_dup_tbl.user_id from dwd_dup_tbl left join dictionary_tbl\non dwd_dup_tbl.user_id = dictionary_tbl.user_id where dwd_dup_tbl.visit_time > '2023-12-10' and dictionary_tbl.user_id is NULL;\n")),(0,i.yg)("p",null,"In real-world scenarios, Flink connectors can also be employed to write data into Doris."),(0,i.yg)("p",null,"Assuming ",(0,i.yg)("inlineCode",{parentName:"p"},"dim1"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"dim3"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"dim5")," represent statistical dimensions of interest to us, create the following table to store aggregated results:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`dws_agg_tbl` (\n    `dim1` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `user_id_bitmap` BITMAP BITMAP_UNION NOT NULL,\n    `pv` BIGINT SUM NOT NULL \n) ENGINE=OLAP\nAGGREGATE KEY(`dim1`,`dim3`,`dim5`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,i.yg)("p",null,"Store the result of the data aggregation operations into the aggregation result table:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"insert into dws_agg_tbl\nselect dwd_dup_tbl.dim1, dwd_dup_tbl.dim3, dwd_dup_tbl.dim5, BITMAP_UNION(TO_BITMAP(dictionary_tbl.aid)), COUNT(1)\nfrom dwd_dup_tbl INNER JOIN dictionary_tbl on dwd_dup_tbl.user_id = dictionary_tbl.user_id;\n")),(0,i.yg)("p",null,"Perform UV and PV queries using the following statement:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select dim1, dim3, dim5, user_id_bitmap as uv, pv from dws_agg_tbl;\n")),(0,i.yg)("h3",{id:"efficient-pagination"},"Efficient Pagination"),(0,i.yg)("p",null,"When displaying data on a page, pagination is often necessary. Traditional pagination typically involves using ",(0,i.yg)("inlineCode",{parentName:"p"},"limit"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"offset"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"order by")," in SQL queries. For instance, consider the following business table intended for display:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`records_tbl` (\n    `key` int(11) NOT NULL COMMENT "",\n    `name` varchar(26) NOT NULL COMMENT "",\n    `address` varchar(41) NOT NULL COMMENT "",\n    `city` varchar(11) NOT NULL COMMENT "",\n    `nation` varchar(16) NOT NULL COMMENT "",\n    `region` varchar(13) NOT NULL COMMENT "",\n    `phone` varchar(16) NOT NULL COMMENT "",\n    `mktsegment` varchar(11) NOT NULL COMMENT ""\n) DUPLICATE KEY (`key`, `name`)\nDISTRIBUTED BY HASH(`key`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,i.yg)("p",null,"Assuming 100 records are displayed per page in pagination. To fetch the first page's data, the following SQL query can be used:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select * from records_tbl order by `key`, `name` limit 100;\n")),(0,i.yg)("p",null,"Fetching the data for the second page can be accomplished by:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select * from records_tbl order by `key`, `name` limit 100, offset 100;\n")),(0,i.yg)("p",null,"However, when performing deep pagination queries (with large offsets), even if the actual required data rows are few, this method still reads all data into memory for full sorting before subsequent processing, which is quite inefficient. Using an auto-incrementa column assigns a unique value to each row, allowing the use of where ",(0,i.yg)("inlineCode",{parentName:"p"},"unique_value")," > x limit y to filter a significant amount of data beforehand, making pagination more efficient."),(0,i.yg)("p",null,"Continuing with the aforementioned business table, an auto-increment column is added to the table to give each row a unique identifier:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`records_tbl2` (\n    `key` int(11) NOT NULL COMMENT "",\n    `name` varchar(26) NOT NULL COMMENT "",\n    `address` varchar(41) NOT NULL COMMENT "",\n    `city` varchar(11) NOT NULL COMMENT "",\n    `nation` varchar(16) NOT NULL COMMENT "",\n    `region` varchar(13) NOT NULL COMMENT "",\n    `phone` varchar(16) NOT NULL COMMENT "",\n    `mktsegment` varchar(11) NOT NULL COMMENT "",\n    `unique_value` BIGINT NOT NULL AUTO_INCREMENT\n) DUPLICATE KEY (`key`, `name`)\nDISTRIBUTED BY HASH(`key`) BUCKETS 10\nPROPERTIES (\n    "replication_num" = "3"\n);\n')),(0,i.yg)("p",null,"For pagination displaying 100 records per page, to fetch the first page's data, the following SQL query can be used:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select * from records_tbl2 order by unique_value limit 100;\n")),(0,i.yg)("p",null,"By recording the maximum value of unique_value in the returned results, let's assume it's 99. The following query can then fetch data for the second page:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select * from records_tbl2 where unique_value > 99 order by unique_value limit 100;\n")),(0,i.yg)("p",null,"If directly querying contents from a later page and it's inconvenient to directly obtain the maximum value of ",(0,i.yg)("inlineCode",{parentName:"p"},"unique_value")," from the preceding page's data (for instance, directly obtaining contents from the 101st page), the following query can be used:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select key, name, address, city, nation, region, phone, mktsegment\nfrom records_tbl2, (select unique_value as max_value from records_tbl2 order by unique_value limit 1 offset 9999) as previous_data\nwhere records_tbl2.unique_value > previous_data.max_value\norder by records_tbl2.unique_value limit 100;\n")))}m.isMDXComponent=!0}}]);