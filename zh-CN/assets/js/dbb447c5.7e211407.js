"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46344],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=i,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},935793:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(58168),i=(a(296540),a(15680));const o={title:"Building a data warehouse for traditional industry",description:"The best component for you is the one that suits you most. In Midland Realty, we don't have too much data to process but want a data platform easy to use and maintain.",date:"2023-05-12",author:"Herman Seah",tags:["Best Practice"],image:"/images/building-a-data-warehouse-for-traditional-industry.png"},r=void 0,s={permalink:"/zh-CN/blog/Building-a-Data-Warehouse-for-Traditional-Industry",source:"@site/blog/Building-a-Data-Warehouse-for-Traditional-Industry.md",title:"Building a data warehouse for traditional industry",description:"The best component for you is the one that suits you most. In Midland Realty, we don't have too much data to process but want a data platform easy to use and maintain.",date:"2023-05-12T00:00:00.000Z",formattedDate:"2023\u5e745\u670812\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Herman Seah"}],frontMatter:{title:"Building a data warehouse for traditional industry",description:"The best component for you is the one that suits you most. In Midland Realty, we don't have too much data to process but want a data platform easy to use and maintain.",date:"2023-05-12",author:"Herman Seah",tags:["Best Practice"],image:"/images/building-a-data-warehouse-for-traditional-industry.png"},prevItem:{title:"Building a log analytics solution 10 times more cost-effective than Elasticsearch",permalink:"/zh-CN/blog/Building-A-Log-Analytics-Solution-10-Times-More-Cost-Effective-Than-Elasticsearch"},nextItem:{title:"Zipping up the lambda architecture for 40% faster performance",permalink:"/zh-CN/blog/Zipping-up-the-Lambda-Architecture-for-40-Percent-Faster-Performance"}},l={authorsImageUrls:[void 0]},c=[{value:"Architecture",id:"architecture",level:2},{value:"1. <strong>Tables</strong>",id:"1-tables",level:3},{value:"2. <strong>Layers</strong>",id:"2-layers",level:3},{value:"3. <strong>Incremental Update Strategies</strong>",id:"3-incremental-update-strategies",level:3},{value:"4. <strong>Overall Update Strategies</strong>",id:"4-overall-update-strategies",level:3},{value:"Application",id:"application",level:2},{value:"Optimization",id:"optimization",level:2},{value:"1. Data Ingestion",id:"1-data-ingestion",level:3},{value:"2. Data Model",id:"2-data-model",level:3},{value:"3. Reading External Data",id:"3-reading-external-data",level:3},{value:"4. Query Optimization",id:"4-query-optimization",level:3},{value:"5. Data Dictionary",id:"5-data-dictionary",level:3},{value:"Performance",id:"performance",level:2},{value:"<strong>Experience and Conclusion</strong>",id:"experience-and-conclusion",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,i.yg)(u,(0,n.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"By Herman Seah, Data Warehouse Planner & Data Analyst at Midland Realty"),(0,i.yg)("p",null,"This is a part of the digital transformation of a real estate giant. For the sake of confidentiality, I'm not going to reveal any business data, but you'll get a detailed view of our data warehouse and our optimization strategies."),(0,i.yg)("p",null,"Now let's get started."),(0,i.yg)("h2",{id:"architecture"},"Architecture"),(0,i.yg)("p",null,"Logically, our data architecture can be divided into four parts."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"data-processing-architecture",src:a(100455).A,width:"1280",height:"616"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Data integration"),": This is supported by Flink CDC, DataX, and the Multi-Catalog feature of Apache Doris."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Data management"),": We use Apache Dolphinscheduler for script lifecycle management, privileges in multi-tenancy management, and data quality monitoring."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Alerting"),": We use Grafana, Prometheus, and Loki to monitor component resources and logs."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Data services"),": This is where BI tools step in for user interaction, such as data queries and analysis.")),(0,i.yg)("h3",{id:"1-tables"},"1. ",(0,i.yg)("strong",{parentName:"h3"},"Tables")),(0,i.yg)("p",null,"We create our dimension tables and fact tables centering each operating entity in business, including customers, houses, etc. If there are a series of activities involving the same operating entity, they should be recorded by one field. (This is a lesson learned from our previous chaotic data management system.)"),(0,i.yg)("h3",{id:"2-layers"},"2. ",(0,i.yg)("strong",{parentName:"h3"},"Layers")),(0,i.yg)("p",null,"Our data warehouse is divided into five conceptual layers. We use Apache Doris and Apache DolphinScheduler to schedule the DAG scripts between these layers."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"ODS-DWD-DWS-ADS-DIM",src:a(681452).A,width:"1280",height:"729"})),(0,i.yg)("p",null,"Every day, the layers go through an overall update besides incremental updates in case of changes in historical status fields or incomplete data synchronization of ODS tables."),(0,i.yg)("h3",{id:"3-incremental-update-strategies"},"3. ",(0,i.yg)("strong",{parentName:"h3"},"Incremental Update Strategies")),(0,i.yg)("p",null,"(1) Set ",(0,i.yg)("inlineCode",{parentName:"p"},'where >= "activity time -1 day or -1 hour"'),"  instead of ",(0,i.yg)("inlineCode",{parentName:"p"},'where >= "activity time')),(0,i.yg)("p",null,"The reason for doing so is to prevent data drift caused by the time gap of scheduling scripts. Let's say, with the execution interval set to 10 min, suppose that the script is executed at 23:58:00 and a new piece of data arrives at 23:59:00, if we set ",(0,i.yg)("inlineCode",{parentName:"p"},'where >= "activity time'),", that piece of data of the day will be missed."),(0,i.yg)("p",null,"(2) Fetch the ID of the largest primary key of the table before every script execution, store the ID in the auxiliary table, and set ",(0,i.yg)("inlineCode",{parentName:"p"},'where >= "ID in auxiliary table"')),(0,i.yg)("p",null,"This is to avoid data duplication. Data duplication might happen if you use the Unique Key model of Apache Doris and designate a set of primary keys, because if there are any changes in the primary keys in the source table, the changes will be recorded and the relevant data will be loaded. This method can fix that, but it is only applicable when the source tables have auto-increment primary keys."),(0,i.yg)("p",null,"(3) Partition the tables"),(0,i.yg)("p",null,"As for time-based auto-increment data such as log tables, there might be less changes in historical data and status, but the data volume is large, so there could be huge computing pressure on overall updates and snapshot creation. Hence, it is better to partition such tables, so for each incremental update, we only need to replace one partition. (You might need to watch out for data drift, too.)"),(0,i.yg)("h3",{id:"4-overall-update-strategies"},"4. ",(0,i.yg)("strong",{parentName:"h3"},"Overall Update Strategies")),(0,i.yg)("p",null,"(1) Truncate Table"),(0,i.yg)("p",null,"Clear out the table and then ingest all data from the source table into it. This is applicable for small tables and scenarios with no user activity in wee hours."),(0,i.yg)("p",null,"(2) ",(0,i.yg)("inlineCode",{parentName:"p"},"ALTER TABLE tbl1 REPLACE WITH TABLE tbl2 ")),(0,i.yg)("p",null,"This is an atomic operation and it is advisable for large tables. Every time before executing a script, we create a temporary table with the same schema, load all data into it, and replace the original table with it."),(0,i.yg)("h2",{id:"application"},"Application"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"ETL job"),": every minute"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Configuration for first-time deployment"),": 8 nodes, 2 frontends, 8 backends, hybrid deployment"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Node configuration"),": 32C ",(0,i.yg)("em",{parentName:"li"}," 60GB ")," 2TB SSD")),(0,i.yg)("p",null,"This is our configuration for TBs of legacy data and GBs of incremental data. You can use it as a reference and scale your cluster on this basis. Deployment of Apache Doris is simple. You don't need other components."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"To integrate offline data and log data, we use DataX, which supports CSV format and readers of many relational databases, and Apache Doris provides a DataX-Doris-Writer.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"DataX-Doris-Writer",src:a(433717).A,width:"992",height:"636"})),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"We use Flink CDC to synchronize data from source tables. Then we aggregate the real-time metrics utilizing the Materialized View or the Aggregate Model of Apache Doris. Since we only have to process part of the metrics in a real-time manner and we don't want to generate too many database connections, we use one Flink job to maintain multiple CDC source tables. This is realized by the multi-source merging and full database sync features of Dinky, or you can implement a Flink DataStream multi-source merging task yourself. It is noteworthy that Flink CDC and Apache Doris support Schema Change.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"EXECUTE CDCSOURCE demo_doris WITH (\n  'connector' = 'mysql-cdc',\n  'hostname' = '127.0.0.1',\n  'port' = '3306',\n  'username' = 'root',\n  'password' = '123456',\n  'checkpoint' = '10000',\n  'scan.startup.mode' = 'initial',\n  'parallelism' = '1',\n  'table-name' = 'ods.ods_*,ods.ods_*',\n  'sink.connector' = 'doris',\n  'sink.fenodes' = '127.0.0.1:8030',\n  'sink.username' = 'root',\n  'sink.password' = '123456',\n  'sink.doris.batch.size' = '1000',\n  'sink.sink.max-retries' = '1',\n  'sink.sink.batch.interval' = '60000',\n  'sink.sink.db' = 'test',\n  'sink.sink.properties.format' ='json',\n  'sink.sink.properties.read_json_by_line' ='true',\n  'sink.table.identifier' = '${schemaName}.${tableName}',\n  'sink.sink.label-prefix' = '${schemaName}_${tableName}_1'\n);\n")),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},'We use SQL scripts or "Shell + SQL" scripts, and we perform script lifecycle management. At the ODS layer, we write a general DataX job file and pass parameters for each source table ingestion, instead of writing a DataX job for each source table. In this way, we make things much easier to maintain. We manage the ETL scripts of Apache Doris on DolphinScheduler, where we also conduct version control. In case of any errors in the production environment, we can always rollback.')),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"SQL-script",src:a(609946).A,width:"1280",height:"625"})),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"After ingesting data with ETL scripts, we create a page in our reporting tool. We assign different privileges to different accounts using SQL, including the privilege of modifying rows, fields, and global dictionary. Apache Doris supports privilege control over accounts, which works the same as that in MySQL. ")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"privilege-control-over-accounts",src:a(857699).A,width:"1280",height:"516"})),(0,i.yg)("p",null,"We also use Apache Doris data backup for disaster recovery, Apache Doris audit logs to monitor SQL execution efficiency, Grafana+Loki for cluster metric alerts, and Supervisor to monitor the daemon processes of node components."),(0,i.yg)("h2",{id:"optimization"},"Optimization"),(0,i.yg)("h3",{id:"1-data-ingestion"},"1. Data Ingestion"),(0,i.yg)("p",null,"We use DataX to Stream Load offline data. It allows us to adjust the size of each batch. The Stream Load method returns results synchronously, which meets the needs of our architecture. If we execute asynchronous data import using DolphinScheduler, the system might assume that the script has been executed, and that can cause a messup. If you use a different method, we recommend that you execute ",(0,i.yg)("inlineCode",{parentName:"p"},"show load")," in the shell script, and check the regex filtering status to see if the ingestion succeeds."),(0,i.yg)("h3",{id:"2-data-model"},"2. Data Model"),(0,i.yg)("p",null,"We adopt the Unique Key model of Apache Doris for most of our tables. The Unique Key model ensures idempotence of data scripts and effectively avoids upstream data duplication. "),(0,i.yg)("h3",{id:"3-reading-external-data"},"3. Reading External Data"),(0,i.yg)("p",null,"We use the Multi-Catalog feature of Apache Doris to connect to external data sources. It allows us to create mappings of external data at the Catalog level."),(0,i.yg)("h3",{id:"4-query-optimization"},"4. Query Optimization"),(0,i.yg)("p",null,"We suggest that you put the most frequently used fields of non-character types (such as int and where clauses) in the first 36 bytes, so you can filter these fields within milliseconds in point queries."),(0,i.yg)("h3",{id:"5-data-dictionary"},"5. Data Dictionary"),(0,i.yg)("p",null,"For us, it is important to create a data dictionary because it largely reduces personnel communication costs, which can be a headache when you have a big team. We use the ",(0,i.yg)("inlineCode",{parentName:"p"},"information_schema")," in Apache Doris to generate a data dictionary. With it, we can quickly grasp the whole picture of the tables and fields and thus increase development efficiency."),(0,i.yg)("h2",{id:"performance"},"Performance"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Offline data ingestion time"),": Within minutes"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Query latency"),": For tables containing over 100 million rows, Apache Doris responds to ad-hoc queries within one second, and complicated queries in five seconds."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Resource consumption"),": It only takes up a small number of servers to build this data warehouse. The 70% compression ratio of Apache Doris saves us lots of storage resources."),(0,i.yg)("h2",{id:"experience-and-conclusion"},(0,i.yg)("strong",{parentName:"h2"},"Experience and Conclusion")),(0,i.yg)("p",null,"Actually, before we evolved into our current data architecture, we tried Hive, Spark and Hadoop to build an offline data warehouse. It turned out that Hadoop was overkill for a traditional company like us since we didn't have too much data to process. It is important to find the component that suits you most."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"old-offline-data warehouse",src:a(520840).A,width:"832",height:"703"})),(0,i.yg)("p",null,"(Our old off-line data warehouse)"),(0,i.yg)("p",null,"On the other hand, to smoothen our  big data transition, we need to make our data platform as simple as possible in terms of usage and maintenance. That's why we landed on Apache Doris. It is compatible with MySQL protocol and provides a rich collection of functions so we don't have to develop our own UDFs. Also, it is composed of only two types of processes: frontends and backends, so it is easy to scale and track."),(0,i.yg)("p",null,"Find Apache Doris developers on ",(0,i.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2kl08hzc0-SPJe4VWmL_qzrFd2u2XYQA"},"Slack"),"."))}p.isMDXComponent=!0},100455:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Midland_1-13321d195f728638c4903bdd51e60ef0.png"},681452:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Midland_2-4d94af927a13961e91486cef3512b47f.png"},433717:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Midland_3-d394cef81ce173d944a379f14824f5e6.png"},609946:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Midland_4-f50219b88be08e1bdf3a7b31c21ae258.png"},857699:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Midland_5-7b83ea92344d586f4de8cd363b7c6357.png"},520840:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Midland_6-52e4498a6ab21c3075077b71435e2d28.png"}}]);